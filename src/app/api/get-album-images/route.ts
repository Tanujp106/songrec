import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import { ALLOWED_MOODS } from "@/lib/utils";

export const runtime = "nodejs";

function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export async function GET(request: Request) {
  const supabase = getSupabaseClient();
  const { searchParams } = new URL(request.url);
  const mood = searchParams.get("mood")?.trim().toLowerCase();
  const limitParam = Number(searchParams.get("limit"));
  const limit = Number.isFinite(limitParam) ? Math.min(Math.max(limitParam, 1), 200) : 24;

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

  const { data, error } = await supabase
    .from("songs")
    .select("album_image")
    .contains("moods", [mood])
    .not("album_image", "is", null)
    .limit(400);

  if (error) {
    return NextResponse.json(
      { error: `Supabase query failed: ${error.message}` },
      { status: 500 }
    );
  }

  const rows = (data ?? []) as { album_image: string | null }[];
  const images = Array.from(
    new Set(rows.map((row) => row.album_image).filter(Boolean))
  ) as string[];

  const shuffled = shuffle(images);
  return NextResponse.json({ images: shuffled.slice(0, limit) });
}
