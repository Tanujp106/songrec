import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { spotifyGet } from "@/lib/spotify";
import {
  chunkArray,
  extractTrackId,
  mapWithConcurrency,
  mergeUnique,
  normalizeMoodArray,
  filterAllowedMoods
} from "@/lib/utils";
import { getClientIp, rateLimit } from "@/lib/rate-limit";
import { jsonError, parseJson } from "@/lib/http";

export const runtime = "nodejs";

type SpotifyTrackResponse = {
  id: string;
  name: string;
  popularity?: number;
  artists?: { name: string }[];
  external_urls?: { spotify?: string };
  album?: { id?: string | null; name?: string | null; images?: { url: string }[] };
  duration_ms?: number;
};

type SongInsert = {
  song_name: string;
  artist: string[];
  moods: string[];
  spotify_track_id: string;
  spotify_url: string | null;
  album_image: string | null;
  popularity: number;
  release_year: number | null;
  duration_ms: number | null;
  album_name: string | null;
  album_id: string | null;
  release_date: string | null;
  release_date_precision: string | null;
};

type FetchedTrack = SongInsert & { _albumId?: string | null };

type SpotifyAlbumResponse = {
  id: string;
  release_date?: string;
  release_date_precision?: string;
};

async function fetchTrack(trackId: string): Promise<FetchedTrack> {
  const marketEnv = (process.env.SPOTIFY_MARKET ?? "").trim();
  const market =
    marketEnv.length > 0
      ? marketEnv
      : process.env.SPOTIFY_REFRESH_TOKEN
        ? "from_token"
        : "US";
  const url = `https://api.spotify.com/v1/tracks/${trackId}?market=${encodeURIComponent(
    market
  )}`;
  const data = await spotifyGet<SpotifyTrackResponse>(url, { auth: "auto" });

  const artistNames = data.artists?.map((a) => a.name).filter(Boolean) ?? [];

  return {
    spotify_track_id: data.id,
    song_name: data.name,
    artist: artistNames.length > 0 ? artistNames : ["Unknown Artist"],
    moods: [],
    spotify_url: data.external_urls?.spotify ?? null,
    album_image: data.album?.images?.[0]?.url ?? null,
    popularity: typeof data.popularity === "number" ? data.popularity : 0,
    release_year: null,
    duration_ms:
      typeof data.duration_ms === "number" ? data.duration_ms : null,
    album_name: data.album?.name ?? null,
    album_id: data.album?.id ?? null,
    release_date: null,
    release_date_precision: null,
    _albumId: data.album?.id ?? null
  };
}

async function fetchAlbumsBatch(albumIds: string[]): Promise<Map<string, SpotifyAlbumResponse>> {
  const marketEnv = (process.env.SPOTIFY_MARKET ?? "").trim();
  const market =
    marketEnv.length > 0
      ? marketEnv
      : process.env.SPOTIFY_REFRESH_TOKEN
        ? "from_token"
        : "US";
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
    const ip = getClientIp(request);
    const rl = rateLimit(`import-tracks:${ip}`, 30, 60_000);
    if (!rl.allowed) {
      return jsonError("Rate limit exceeded. Try again later.", 429, {
        resetAt: rl.resetAt
      });
    }

    const body = await parseJson(request);
    const tracksInput = body?.tracks;
    const moods = filterAllowedMoods(normalizeMoodArray(body?.moods));
    const effectiveMoods = moods.length > 0 ? moods : ["unsorted"];

    if (!Array.isArray(tracksInput) || tracksInput.length === 0) {
      return jsonError(
        "tracks (array of track URLs/URIs/IDs) is required.",
        400
      );
    }

    const trackIds = tracksInput
      .map((t) => (typeof t === "string" ? extractTrackId(t) : null))
      .filter((t): t is string => typeof t === "string");

    const uniqueTrackIds = Array.from(new Set(trackIds));
    if (uniqueTrackIds.length === 0) {
      return jsonError("No valid track IDs found in tracks array.", 400);
    }

    const fetched = await mapWithConcurrency(uniqueTrackIds, 8, fetchTrack);
    const albumIds = Array.from(
      new Set(
        fetched.map((track) => track._albumId).filter((id): id is string => !!id)
      )
    );

    let releaseMap = new Map<string, SpotifyAlbumResponse>();
    if (albumIds.length > 0) {
      releaseMap = await fetchAlbumsBatch(albumIds);
    }

    const records: SongInsert[] = fetched.map((track) => {
      const albumId = track._albumId ?? null;
      const album = albumId ? releaseMap.get(albumId) : undefined;
      const releaseDate = album?.release_date ?? null;
      const year = releaseDate
        ? Number.parseInt(album.release_date.slice(0, 4), 10)
        : null;

      const { _albumId, ...rest } = track;
      return {
        ...rest,
        moods: [...effectiveMoods],
        release_date: releaseDate,
        release_date_precision: album?.release_date_precision ?? null,
        release_year: Number.isFinite(year) ? year : null
      };
    });

    const existingMap = new Map<string, string[]>();
    const idChunks = chunkArray(
      records.map((r) => r.spotify_track_id),
      200
    );

    for (const chunk of idChunks) {
      const { data, error } = await supabase
        .from("songs")
        .select("spotify_track_id, moods")
        .in("spotify_track_id", chunk);

      if (error) {
        return jsonError(`Supabase select failed: ${error.message}`, 500);
      }

      data?.forEach((row) => {
        existingMap.set(row.spotify_track_id, row.moods ?? []);
      });
    }

    const finalRecords = records.map((record) => {
      const existingMoods = existingMap.get(record.spotify_track_id);
      if (existingMoods) {
        record.moods = mergeUnique(existingMoods, record.moods);
      }
      return record;
    });

    const upsertChunks = chunkArray(finalRecords, 200);
    for (const chunk of upsertChunks) {
      const { error } = await supabase
        .from("songs")
        .upsert(chunk, { onConflict: "spotify_track_id" });

      if (error) {
        return jsonError(`Supabase upsert failed: ${error.message}`, 500);
      }
    }

    const updated = finalRecords.filter((r) =>
      existingMap.has(r.spotify_track_id)
    ).length;
    const imported = finalRecords.length - updated;

    return NextResponse.json({
      imported,
      updated,
      total: finalRecords.length
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return jsonError(message, 500);
  }
}
