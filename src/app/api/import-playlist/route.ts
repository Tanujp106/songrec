import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import { spotifyGet } from "@/lib/spotify";
import {
  chunkArray,
  extractPlaylistId,
  mergeUnique,
  normalizeMoodArray,
  filterAllowedMoods
} from "@/lib/utils";
import { jsonError, parseJson } from "@/lib/http";
import { corsHeaders } from "@/lib/cors";

export const runtime = "nodejs";

function jsonWithCors(body: unknown, init?: ResponseInit) {
  return NextResponse.json(body, {
    ...init,
    headers: { ...(init?.headers ?? {}), ...corsHeaders() }
  });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders() });
}

type SpotifyTrackObject = {
  id: string | null;
  name: string | null;
  artists: { name: string }[] | null;
  album: {
    id?: string | null;
    name?: string | null;
    images: { url: string }[] | null;
  } | null;
  external_urls: { spotify?: string } | null;
  popularity?: number | null;
  is_local?: boolean | null;
  duration_ms?: number | null;
};

type SpotifyTrackItem = {
  track?: SpotifyTrackObject | null;
  item?: SpotifyTrackObject | null;
};

type SpotifyPlaylistTracksResponse = {
  items: SpotifyTrackItem[];
  next: string | null;
};

type SpotifyPlaylistItemsResponse = {
  items: SpotifyTrackItem[];
  next: string | null;
};

type SongInsert = {
  song_name: string;
  artist: string[];
  moods: string[];
  spotify_track_id: string;
  spotify_url: string | null;
  album_image: string | null;
  popularity: number;
  duration_ms: number | null;
  album_name: string | null;
  album_id: string | null;
  release_date: string | null;
  release_date_precision: string | null;
  release_year: number | null;
};

async function fetchPlaylistTracks(
  playlistId: string,
  log?: (message: string) => void
): Promise<SpotifyTrackItem[]> {
  const items: SpotifyTrackItem[] = [];
  const marketEnv = (process.env.SPOTIFY_MARKET ?? "").trim();
  const market = marketEnv.length > 0 ? marketEnv : "US";

  const trackFields =
    "id,name,artists(name),album(id,name,images),external_urls(spotify),popularity,is_local,duration_ms";
  const fieldsTracks = `items(track(${trackFields})),next`;
  const fieldsItems = `items(item(${trackFields})),next`;

  // Prefer the newer /items endpoint; fall back to /tracks for older behavior.
  const urlsToTry = [
    `https://api.spotify.com/v1/playlists/${playlistId}/items?limit=100&market=${encodeURIComponent(
      market
    )}&additional_types=track&fields=${encodeURIComponent(fieldsItems)}`,
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=100&market=${encodeURIComponent(
      market
    )}&fields=${encodeURIComponent(fieldsTracks)}`
  ];

  let lastError: unknown = null;
  let firstUrl: string | null = null;
  for (const initialUrl of urlsToTry) {
    firstUrl = initialUrl;
    try {
      let url = initialUrl;
      let page = 0;
      while (url) {
        page += 1;
        log?.(`Fetching playlist page ${page}...`);
        const data = await spotifyGet<
          SpotifyPlaylistTracksResponse | SpotifyPlaylistItemsResponse
        >(url);
        items.push(...(((data as any).items ?? []) as SpotifyTrackItem[]));
        url = ((data as any).next ?? "") as string;
      }
      log?.(`Fetched ${items.length} playlist items.`);
      return items;
    } catch (error) {
      lastError = error;
      items.length = 0;
      continue;
    }
  }

  throw lastError ?? new Error(`Failed to fetch playlist items: ${firstUrl}`);
}

type SpotifyTrackResponse = {
  id: string;
  popularity?: number;
  external_urls?: { spotify?: string };
  album?: {
    id?: string | null;
    name?: string | null;
    images?: { url: string }[];
  };
  duration_ms?: number;
};

type SpotifyAlbumResponse = {
  id: string;
  release_date?: string;
  release_date_precision?: string;
};

async function fetchTracksBatch(
  trackIds: string[],
  log?: (message: string) => void
): Promise<Map<string, SpotifyTrackResponse>> {
  const marketEnv = (process.env.SPOTIFY_MARKET ?? "").trim();
  const market = marketEnv.length > 0 ? marketEnv : "US";
  const chunks = chunkArray(trackIds, 50);
  const results = new Map<string, SpotifyTrackResponse>();

  for (const chunk of chunks) {
    const url = `https://api.spotify.com/v1/tracks?market=${encodeURIComponent(
      market
    )}&ids=${chunk.join(",")}`;
    try {
      const data = await spotifyGet<{ tracks: SpotifyTrackResponse[] }>(url);
      for (const track of data.tracks ?? []) {
        if (track?.id) results.set(track.id, track);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      log?.(`Track batch hydration failed: ${message}`);
      // If hydration fails, skip batch and continue; we'll keep popularity=0.
      continue;
    }
  }

  return results;
}

async function fetchAlbumsBatch(
  albumIds: string[],
  log?: (message: string) => void
): Promise<Map<string, SpotifyAlbumResponse>> {
  const marketEnv = (process.env.SPOTIFY_MARKET ?? "").trim();
  const market = marketEnv.length > 0 ? marketEnv : "US";
  const chunks = chunkArray(albumIds, 20);
  const results = new Map<string, SpotifyAlbumResponse>();

  for (const chunk of chunks) {
    const url = `https://api.spotify.com/v1/albums?market=${encodeURIComponent(
      market
    )}&ids=${chunk.join(",")}`;
    try {
      const data = await spotifyGet<{ albums: SpotifyAlbumResponse[] }>(url);
      for (const album of data.albums ?? []) {
        if (album?.id) results.set(album.id, album);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      log?.(`Album batch fetch failed: ${message}`);
      continue;
    }
  }

  return results;
}

export async function POST(request: Request) {
  try {
    const supabase = getSupabaseClient();
    const { searchParams } = new URL(request.url);
    const logProgress =
      searchParams.get("progress") === "1" ||
      process.env.IMPORT_LOG_PROGRESS === "1";
    const log = logProgress ? (message: string) => console.log(message) : null;

    const body = await parseJson(request);
    const playlistUrl = body?.playlist_url;
    const moods = filterAllowedMoods(normalizeMoodArray(body?.moods));
    const effectiveMoods = moods.length > 0 ? moods : ["unsorted"];
    const overwriteMoods = body?.overwrite_moods === true;

    if (typeof playlistUrl !== "string") {
      return jsonWithCors(
        { error: "playlist_url (string) is required." },
        { status: 400 }
      );
    }
    if (overwriteMoods && moods.length === 0) {
      return jsonWithCors(
        {
          error:
            "overwrite_moods=true requires a non-empty moods array in the request body."
        },
        { status: 400 }
      );
    }

    const playlistId = extractPlaylistId(playlistUrl);
    if (!playlistId) {
      return jsonWithCors(
        { error: "Invalid playlist_url. Could not extract playlist ID." },
        { status: 400 }
      );
    }

    let playlistItems: SpotifyTrackItem[];
    try {
      log?.(`Starting import for playlist ${playlistId}`);
      playlistItems = await fetchPlaylistTracks(playlistId, log ?? undefined);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      if (message.includes("(403)")) {
        return jsonWithCors(
          {
            error:
              "Spotify returned 403 Forbidden for this playlist. If you configured OAuth for import (Authorization Code Flow), set SPOTIFY_REFRESH_TOKEN and retry. Otherwise this playlist likely requires user context and cannot be imported with Client Credentials alone.",
            details: message
          },
          { status: 403 }
        );
      }
      return jsonWithCors({ error: message }, { status: 500 });
    }

    const recordMap = new Map<string, SongInsert>();
    let skipped = 0;

    const needsHydration = new Set<string>();
    const trackAlbumMap = new Map<string, string>();

    for (const item of playlistItems) {
      const track = item.track ?? item.item ?? null;
      if (!track?.id || !track.name) {
        skipped += 1;
        continue;
      }

      const artistNames = track.artists?.map((a) => a.name).filter(Boolean) ?? [];
      const albumImage = track.album?.images?.[0]?.url ?? null;
      const albumId = track.album?.id ?? null;
      if (albumId) trackAlbumMap.set(track.id, albumId);
      const albumName = track.album?.name ?? null;
      const spotifyUrl = track.external_urls?.spotify ?? null;
      const popularity =
        typeof track.popularity === "number" ? track.popularity : null;
      const durationMs =
        typeof track.duration_ms === "number" ? track.duration_ms : null;

      const record: SongInsert = {
        spotify_track_id: track.id,
        song_name: track.name,
        artist: artistNames.length > 0 ? artistNames : ["Unknown Artist"],
        moods: [...effectiveMoods],
        spotify_url: spotifyUrl,
        album_image: albumImage,
        popularity: popularity ?? 0,
        duration_ms: durationMs,
        album_name: albumName,
        album_id: albumId,
        release_date: null,
        release_date_precision: null,
        release_year: null
      };

      if (recordMap.has(track.id)) {
        const existing = recordMap.get(track.id);
        if (existing) {
          existing.moods = mergeUnique(existing.moods, record.moods);
        }
      } else {
        recordMap.set(track.id, record);
      }

      if (popularity === null) {
        needsHydration.add(track.id);
      }
    }

    const rawRecords = Array.from(recordMap.values());
    let records = rawRecords;

    if (needsHydration.size > 0) {
      log?.(`Hydrating ${needsHydration.size} tracks for popularity...`);
      const hydrated = await fetchTracksBatch(
        Array.from(needsHydration),
        log ?? undefined
      );
      records = rawRecords.map((record) => {
        const data = hydrated.get(record.spotify_track_id);
        if (!data) return record;
        if (data.album?.id && !trackAlbumMap.has(record.spotify_track_id)) {
          trackAlbumMap.set(record.spotify_track_id, data.album.id);
        }
        return {
          ...record,
          popularity:
            typeof data.popularity === "number"
              ? data.popularity
              : record.popularity,
          spotify_url: data.external_urls?.spotify ?? record.spotify_url,
          album_image: data.album?.images?.[0]?.url ?? record.album_image,
          album_id: data.album?.id ?? record.album_id,
          album_name: data.album?.name ?? record.album_name,
          duration_ms:
            typeof data.duration_ms === "number"
              ? data.duration_ms
              : record.duration_ms
        };
      });
    }
    if (trackAlbumMap.size > 0) {
      const albumIds = Array.from(new Set(trackAlbumMap.values()));
      log?.(`Fetching album release years (${albumIds.length})...`);
      const albums = await fetchAlbumsBatch(albumIds, log ?? undefined);
      records = records.map((record) => {
        const albumId = trackAlbumMap.get(record.spotify_track_id);
        if (!albumId) return record;
        const album = albums.get(albumId);
        if (!album?.release_date) return record;
        const year = Number.parseInt(album.release_date.slice(0, 4), 10);
        return {
          ...record,
          release_date: album.release_date ?? record.release_date,
          release_date_precision:
            album.release_date_precision ?? record.release_date_precision,
          release_year: Number.isFinite(year) ? year : record.release_year
        };
      });
    }
    if (records.length === 0) {
      return jsonWithCors(
        { error: "No valid tracks found in playlist.", skipped },
        { status: 400 }
      );
    }

    const existingMap = new Map<string, string[]>();
    const idChunks = chunkArray(
      records.map((r) => r.spotify_track_id),
      200
    );

    for (const chunk of idChunks) {
      log?.(`Checking existing records (${chunk.length})...`);
      const { data, error } = await supabase
        .from("songs")
        .select("spotify_track_id, moods")
        .in("spotify_track_id", chunk);

      if (error) {
        return jsonWithCors(
          { error: `Supabase select failed: ${error.message}` },
          { status: 500 }
        );
      }

      const rows = (data ?? []) as {
        spotify_track_id: string;
        moods: string[] | null;
      }[];
      rows.forEach((row) => {
        existingMap.set(row.spotify_track_id, row.moods ?? []);
      });
    }

    const finalRecords = records.map((record) => {
      const existingMoods = existingMap.get(record.spotify_track_id);
      if (existingMoods) {
        record.moods = overwriteMoods
          ? [...effectiveMoods]
          : mergeUnique(existingMoods, record.moods);
      }
      return record;
    });

    const upsertChunks = chunkArray(finalRecords, 200);
    for (const chunk of upsertChunks) {
      log?.(`Upserting ${chunk.length} records...`);
      const { error } = await supabase
        .from("songs")
        .upsert(chunk as any, { onConflict: "spotify_track_id" });

      if (error) {
        return jsonWithCors(
          { error: `Supabase upsert failed: ${error.message}` },
          { status: 500 }
        );
      }
    }

    const updated = finalRecords.filter((r) =>
      existingMap.has(r.spotify_track_id)
    ).length;
    const imported = finalRecords.length - updated;
    log?.(`Done. Imported ${imported}, updated ${updated}, skipped ${skipped}.`);

    return jsonWithCors({
      playlist_id: playlistId,
      imported,
      updated,
      skipped,
      total: finalRecords.length
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return jsonWithCors({ error: message }, { status: 500 });
  }
}
