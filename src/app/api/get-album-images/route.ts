import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import { ALLOWED_MOODS, normalizeMood } from "@/lib/utils";
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

function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export async function GET(request: Request) {
  try {
    const supabase = getSupabaseClient();
    const { searchParams } = new URL(request.url);
    const moodRaw = searchParams.get("mood")?.trim().toLowerCase();
    const limitParam = Number(searchParams.get("limit"));
    const limit = Number.isFinite(limitParam) ? Math.min(Math.max(limitParam, 1), 200) : 24;

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

    let query = supabase
      .from("songs")
      .select("album_image")
      .not("album_image", "is", null)
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

    const rows = (data ?? []) as { album_image: string | null }[];
    const images = Array.from(
      new Set(rows.map((row) => row.album_image).filter(Boolean))
    ) as string[];

    const shuffled = shuffle(images);
    return jsonWithCors({ images: shuffled.slice(0, limit) });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[get-album-images] Unhandled error:", message);
    return jsonWithCors({ error: message }, { status: 500 });
  }
}
