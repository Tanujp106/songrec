import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { spotifyGet } from "@/lib/spotify";
import { chunkArray } from "@/lib/utils";
import { jsonError } from "@/lib/http";

export const runtime = "nodejs";

type SpotifyTrackResponse = {
  id: string;
  album?: { id?: string | null; name?: string | null };
  duration_ms?: number;
  external_urls?: { spotify?: string };
};

type SpotifyAlbumResponse = {
  id: string;
  release_date?: string;
  release_date_precision?: string;
};

function getMarket(): string {
  const marketEnv = (process.env.SPOTIFY_MARKET ?? "").trim();
  return marketEnv.length > 0
    ? marketEnv
    : process.env.SPOTIFY_REFRESH_TOKEN
      ? "from_token"
      : "US";
}

async function fetchTracksBatch(
  trackIds: string[],
  allowPerTrackFallback: boolean
): Promise<Map<string, SpotifyTrackResponse>> {
  const market = getMarket();
  const chunks = chunkArray(trackIds, 50);
  const results = new Map<string, SpotifyTrackResponse>();

  for (const chunk of chunks) {
    const url = `https://api.spotify.com/v1/tracks?market=${encodeURIComponent(
      market
    )}&ids=${chunk.join(",")}`;
    try {
      const data = await spotifyGet<{ tracks: SpotifyTrackResponse[] }>(url, {
        auth: "auto"
      });
      for (const track of data.tracks ?? []) {
        if (track?.id) results.set(track.id, track);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      // If batch fails (403/429), try per-track to salvage available metadata.
      if (
        allowPerTrackFallback &&
        (message.includes("(403)") || message.includes("(429)"))
      ) {
        for (const trackId of chunk) {
          try {
            const track = await spotifyGet<SpotifyTrackResponse>(
              `https://api.spotify.com/v1/tracks/${trackId}?market=${encodeURIComponent(
                market
              )}`,
              { auth: "auto" }
            );
            if (track?.id) results.set(track.id, track);
          } catch {
            // Skip individual failures.
            continue;
          }
        }
      } else {
        continue;
      }
    }
  }

  return results;
}

async function fetchAlbumsBatch(albumIds: string[]): Promise<Map<string, SpotifyAlbumResponse>> {
  const market = getMarket();
  const chunks = chunkArray(albumIds, 20);
  const results = new Map<string, SpotifyAlbumResponse>();

  for (const chunk of chunks) {
    const url = `https://api.spotify.com/v1/albums?market=${encodeURIComponent(
      market
    )}&ids=${chunk.join(",")}`;
    const data = await spotifyGet<{ albums: SpotifyAlbumResponse[] }>(url, {
      auth: "auto"
    });
    for (const album of data.albums ?? []) {
      if (album?.id) results.set(album.id, album);
    }
  }

  return results;
}

export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limitParam = Number.parseInt(searchParams.get("limit") ?? "", 10);
    const limit = Number.isFinite(limitParam)
      ? Math.min(Math.max(limitParam, 1), 2000)
      : 500;
    const fastMode = searchParams.get("fast") === "1";

    const { data, error } = await supabase
      .from("songs")
      .select(
        "spotify_track_id, duration_ms, album_name, album_id, release_date, release_date_precision, release_year"
      )
      .or(
        "release_year.is.null,duration_ms.is.null,album_id.is.null,album_name.is.null,release_date.is.null,release_date_precision.is.null"
      )
      .limit(limit);

    if (error) return jsonError(`Supabase select failed: ${error.message}`, 500);

    const trackIds = (data ?? [])
      .map((row) => row.spotify_track_id)
      .filter((id): id is string => !!id);

    if (trackIds.length === 0) {
      return NextResponse.json({ total: 0, updated: 0, skipped: 0, failed: 0 });
    }

    let failed = 0;
    const trackMap = await fetchTracksBatch(trackIds, !fastMode);
    const albumIds = Array.from(
      new Set(
        Array.from(trackMap.values())
          .map((t) => t.album?.id ?? null)
          .filter((id): id is string => !!id)
      )
    );

    const albumMap = await fetchAlbumsBatch(albumIds);

    const updates = trackIds
      .map((trackId) => {
        const track = trackMap.get(trackId);
        if (!track) {
          failed += 1;
          return null;
        }
        const albumId = track?.album?.id ?? null;
        const albumName = track?.album?.name ?? null;
        const durationMs =
          typeof track?.duration_ms === "number" ? track.duration_ms : null;
        const album = albumMap.get(albumId);
        const releaseDate = album?.release_date ?? null;
        const year = releaseDate
          ? Number.parseInt(releaseDate.slice(0, 4), 10)
          : null;
        const releasePrecision = album?.release_date_precision ?? null;

        if (
          !albumId &&
          !albumName &&
          durationMs === null &&
          !releaseDate &&
          !releasePrecision &&
          !Number.isFinite(year ?? NaN)
        ) {
          return null;
        }

        return {
          spotify_track_id: trackId,
          duration_ms: durationMs,
          album_id: albumId,
          album_name: albumName,
          release_date: releaseDate,
          release_date_precision: releasePrecision,
          release_year: Number.isFinite(year ?? NaN) ? year : null
        };
      })
      .filter(
        (
          row
        ): row is {
          spotify_track_id: string;
          duration_ms: number | null;
          album_id: string | null;
          album_name: string | null;
          release_date: string | null;
          release_date_precision: string | null;
          release_year: number | null;
        } => !!row
      );

    if (updates.length === 0) {
      return NextResponse.json({
        total: trackIds.length,
        updated: 0,
        skipped: trackIds.length - failed,
        failed
      });
    }

    const chunks = chunkArray(updates, 200);
    for (const chunk of chunks) {
      const { error: upsertError } = await supabase
        .from("songs")
        .upsert(chunk, { onConflict: "spotify_track_id" });
      if (upsertError) {
        return jsonError(`Supabase upsert failed: ${upsertError.message}`, 500);
      }
    }

    return NextResponse.json({
      total: trackIds.length,
      updated: updates.length,
      skipped: trackIds.length - updates.length - failed,
      failed
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return jsonError(message, 500);
  }
}
