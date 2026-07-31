import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import { ALLOWED_MOODS, clamp, normalizeMood } from "@/lib/utils";
import { corsHeaders } from "@/lib/cors";
import { jsonInternalError } from "@/lib/http";
import { selectUniqueRecommendations } from "@/lib/recommendations";
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

function jsonWithCors(body: unknown, init?: ResponseInit, requestOrigin?: string | null) {
  return NextResponse.json(body, {
    ...init,
    headers: { ...(init?.headers ?? {}), ...corsHeaders(requestOrigin) }
  });
}

export async function OPTIONS(request: Request) {
  const origin = request.headers.get("origin");
  return new NextResponse(null, { status: 204, headers: corsHeaders(origin) });
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

export async function GET(request: Request) {
  try {
    const origin = request.headers.get("origin");
    const supabase = getSupabaseClient();
    const { searchParams } = new URL(request.url);
    const moodRaw = searchParams.get("mood")?.trim().toLowerCase();
    const sliderValue = Number(searchParams.get("sliderValue"));
    const now = Date.now();

    if (!moodRaw) {
      return jsonWithCors(
        { error: "mood query param is required" },
        { status: 400 },
        origin
      );
    }

    const mood = normalizeMood(moodRaw);

    if (!ALLOWED_MOODS.has(mood)) {
      return jsonWithCors(
        { error: "mood must be one of the allowed values" },
        { status: 400 },
        origin
      );
    }

    if (!Number.isFinite(sliderValue)) {
      return jsonWithCors(
        { error: "sliderValue query param must be a number (0-100)" },
        { status: 400 },
        origin
      );
    }

    if (sliderValue < 0 || sliderValue > 100) {
      return jsonWithCors(
        { error: "sliderValue must be between 0 and 100" },
        { status: 400 },
        origin
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
      console.error("[get-song] Supabase query failed:", error.message);
      return jsonInternalError({ headers: corsHeaders(origin) });
    }

    if (!data || data.length === 0) {
      return jsonWithCors(
        { error: "No songs found for this mood." },
        { status: 404 },
        origin
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

      const artistList = Array.isArray(row.artist) ? row.artist : [];
      const trackKey = row.spotify_url ?? `${row.song_name}::${artistList.join("|")}`;
      const recentTrackPenalty = session.tracks.includes(trackKey) ? 0.15 : 1;
      const recentArtistPenalty = artistList.some((a) => session.artists.includes(a.toLowerCase()))
        ? 0.45
        : 1;

      return base * recentTrackPenalty * recentArtistPenalty + 0.02;
    });

    const selected = selectUniqueRecommendations(rows, weights);
    const selectedKeys = selected.map((row) => row.spotify_url ?? `${row.song_name}::${row.artist.join("|")}`);
    const selectedArtists = selected.flatMap((row) => row.artist.map((artist) => artist.toLowerCase()));
    session.tracks = [...session.tracks, ...selectedKeys].slice(-MAX_RECENT_TRACKS);
    session.artists = [...session.artists, ...selectedArtists].slice(-MAX_RECENT_ARTISTS);
    session.updatedAt = now;
    sessionStore.set(sessionKey, session);

    const songs = selected.map((row) => ({
      song_name: row.song_name,
      artist: row.artist ?? [],
      album_image: row.album_image ?? null,
      spotify_url: row.spotify_url ?? null,
      popularity: row.popularity,
      release_year: row.release_year ?? null,
      duration_ms: row.duration_ms ?? null,
      album_name: row.album_name ?? null,
      album_id: row.album_id ?? null,
      release_date: row.release_date ?? null,
      release_date_precision: row.release_date_precision ?? null
    }));

    return jsonWithCors({ songs }, undefined, origin);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[get-song] Unhandled error:", message);
    const origin = request.headers.get("origin");
    return jsonInternalError({ headers: corsHeaders(origin) });
  }
}
