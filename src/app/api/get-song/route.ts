import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import { ALLOWED_MOODS, clamp, pickWeightedRandom } from "@/lib/utils";

export const runtime = "nodejs";

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
  const supabase = getSupabaseClient();
  const { searchParams } = new URL(request.url);
  const mood = searchParams.get("mood")?.trim().toLowerCase();
  const sliderValue = Number(searchParams.get("sliderValue"));

  if (!mood) {
    return NextResponse.json(
      { error: "mood query param is required" },
      { status: 400 }
    );
  }

  if (!ALLOWED_MOODS.has(mood)) {
    return NextResponse.json(
      { error: "mood must be one of the allowed values" },
      { status: 400 }
    );
  }

  if (!Number.isFinite(sliderValue)) {
    return NextResponse.json(
      { error: "sliderValue query param must be a number (0-100)" },
      { status: 400 }
    );
  }

  if (sliderValue < 0 || sliderValue > 100) {
    return NextResponse.json(
      { error: "sliderValue must be between 0 and 100" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("songs")
    .select(
      "song_name, artist, album_image, spotify_url, popularity, release_year, duration_ms, album_name, album_id, release_date, release_date_precision, moods"
    )
    .contains("moods", [mood]);

  if (error) {
    return NextResponse.json(
      { error: `Supabase query failed: ${error.message}` },
      { status: 500 }
    );
  }

  if (!data || data.length === 0) {
    return NextResponse.json(
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

  return NextResponse.json(result);
}
