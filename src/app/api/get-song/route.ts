import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import { ALLOWED_MOODS, clamp, normalizeMood } from "@/lib/utils";
import { corsHeaders } from "@/lib/cors";
import { createHash } from "crypto";

export const runtime = "nodejs";

const SESSION_TTL_MS = 1000 * 60 * 60 * 6; // 6 hours
const MAX_RECENT_TRACKS = 12;
const MAX_RECENT_ARTISTS = 24;
const MAX_SESSIONS = 2000;
const CLEANUP_INTERVAL_MS = 1000 * 60 * 10;

type SessionHistory = {
  tracks: string[];
  artists: string[];
  updatedAt: number;
};

const sessionStore = new Map<string, SessionHistory>();
let lastCleanup = 0;

function jsonWithCors(body: unknown, init?: ResponseInit) {
  return NextResponse.json(body, {
    ...init,
    headers: { ...(init?.headers ?? {}), ...corsHeaders() }
  });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders() });
}

type SongRow = {
  song_name: string;
  artist: string[];
  album_image: string | null;
  spotify_url: string | null;
  popularity: number;
  release_year: number | null;
  duration_ms: number | null;
  album_name: string | null;
  album_id: string | null;
  release_date: string | null;
  release_date_precision: string | null;
};

function hashSessionKey(raw: string): string {
  return createHash("sha256").update(raw).digest("hex").slice(0, 20);
}

function getSessionKey(request: Request): string {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "";
  const ua = request.headers.get("user-agent") ?? "";
  const lang = request.headers.get("accept-language")?.split(",")[0] ?? "";
  const raw = `${ip}|${ua}|${lang}`;
  return hashSessionKey(raw.length > 0 ? raw : "anon");
}

function cleanupSessions(now: number) {
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;
  for (const [key, session] of sessionStore.entries()) {
    if (now - session.updatedAt > SESSION_TTL_MS) {
      sessionStore.delete(key);
    }
  }
  if (sessionStore.size > MAX_SESSIONS) {
    const overflow = sessionStore.size - MAX_SESSIONS;
    const entries = Array.from(sessionStore.entries()).sort((a, b) => a[1].updatedAt - b[1].updatedAt);
    for (let i = 0; i < overflow; i += 1) {
      sessionStore.delete(entries[i][0]);
    }
  }
}

function getTrackKey(row: SongRow): string {
  if (row.album_id) return `album:${row.album_id}`;
  if (row.spotify_url) return `url:${row.spotify_url}`;
  const artist = Array.isArray(row.artist) ? row.artist.join("|") : "";
  return `track:${row.song_name}::${artist}`;
}

function pickWeighted<T>(items: T[], weights: number[]): T {
  const total = weights.reduce((sum, w) => sum + w, 0);
  if (total <= 0) {
    return items[Math.floor(Math.random() * items.length)];
  }
  let threshold = Math.random() * total;
  for (let i = 0; i < items.length; i += 1) {
    threshold -= weights[i];
    if (threshold <= 0) return items[i];
  }
  return items[items.length - 1];
}

export async function GET(request: Request) {
  try {
    const supabase = getSupabaseClient();
    const { searchParams } = new URL(request.url);
    const moodRaw = searchParams.get("mood")?.trim().toLowerCase();
    const sliderValue = Number(searchParams.get("sliderValue"));
    const now = Date.now();

    if (!moodRaw) {
      return jsonWithCors(
        { error: "mood query param is required" },
        { status: 400 }
      );
    }

    const mood = normalizeMood(moodRaw);

    if (!ALLOWED_MOODS.has(mood)) {
      return jsonWithCors(
        { error: "mood must be one of the allowed values" },
        { status: 400 }
      );
    }

    if (!Number.isFinite(sliderValue)) {
      return jsonWithCors(
        { error: "sliderValue query param must be a number (0-100)" },
        { status: 400 }
      );
    }

    if (sliderValue < 0 || sliderValue > 100) {
      return jsonWithCors(
        { error: "sliderValue must be between 0 and 100" },
        { status: 400 }
      );
    }

    let query = supabase
      .from("songs")
      .select(
        "song_name, artist, album_image, spotify_url, popularity, release_year, duration_ms, album_name, album_id, release_date, release_date_precision, moods"
      )
      .limit(400);

    if (mood === "retro") {
      query = query.or("moods.cs.{retro},moods.cs.{nostalgic}");
    } else {
      query = query.contains("moods", [mood]);
    }

    const { data, error } = await query;

    if (error) {
      return jsonWithCors(
        { error: `Supabase query failed: ${error.message}` },
        { status: 500 }
      );
    }

    if (!data || data.length === 0) {
      return jsonWithCors(
        { error: "No songs found for this mood." },
        { status: 404 }
      );
    }

    const rows = (data ?? []) as SongRow[];
    const sessionKey = getSessionKey(request);
    cleanupSessions(now);
    const session = sessionStore.get(sessionKey) ?? { tracks: [], artists: [], updatedAt: now };

    const target = clamp(sliderValue, 0, 100) / 100;
    const sigma = 0.18; // softer preference around target popularity
    const weights = rows.map((row) => {
      const p = clamp(row.popularity ?? 0, 0, 100) / 100;
      const distance = Math.abs(p - target);
      const base = Math.exp(-Math.pow(distance / sigma, 2));

      const trackKey = getTrackKey(row);
      const artistList = Array.isArray(row.artist) ? row.artist : [];
      const recentTrackPenalty = session.tracks.includes(trackKey) ? 0.15 : 1;
      const recentArtistPenalty = artistList.some((a) => session.artists.includes(a.toLowerCase()))
        ? 0.45
        : 1;

      return base * recentTrackPenalty * recentArtistPenalty + 0.02;
    });

    const selected = pickWeighted(rows, weights);
    const selectedKey = getTrackKey(selected);
    const selectedArtists = Array.isArray(selected.artist) ? selected.artist.map((a) => a.toLowerCase()) : [];
    session.tracks = [...session.tracks, selectedKey].slice(-MAX_RECENT_TRACKS);
    session.artists = [...session.artists, ...selectedArtists].slice(-MAX_RECENT_ARTISTS);
    session.updatedAt = now;
    sessionStore.set(sessionKey, session);

    const result: SongRow = {
      song_name: selected.song_name,
      artist: selected.artist ?? [],
      album_image: selected.album_image ?? null,
      spotify_url: selected.spotify_url ?? null,
      popularity: selected.popularity,
      release_year: selected.release_year ?? null,
      duration_ms: selected.duration_ms ?? null,
      album_name: selected.album_name ?? null,
      album_id: selected.album_id ?? null,
      release_date: selected.release_date ?? null,
      release_date_precision: selected.release_date_precision ?? null
    };

    return jsonWithCors(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[get-song] Unhandled error:", message);
    return jsonWithCors({ error: message }, { status: 500 });
  }
}
