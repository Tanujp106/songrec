import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import { ALLOWED_MOODS, clamp, pickWeightedRandom, normalizeMood } from "@/lib/utils";
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

export async function GET(request: Request) {
  try {
    const supabase = getSupabaseClient();
    const { searchParams } = new URL(request.url);
    const moodRaw = searchParams.get("mood")?.trim().toLowerCase();
    const sliderValue = Number(searchParams.get("sliderValue"));

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
    const selected = pickWeightedRandom(rows, clamp(sliderValue, 0, 100));

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
