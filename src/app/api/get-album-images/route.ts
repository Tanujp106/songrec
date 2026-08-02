import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import { ALLOWED_MOODS, normalizeMood, normalizeSpotifyImageUrl } from "@/lib/utils";
import { corsHeaders } from "@/lib/cors";
import { jsonInternalError } from "@/lib/http";
import { acquireConcurrencySlot, checkRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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

function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export async function GET(request: Request) {
  const origin = request.headers.get("origin");
  const rate = checkRateLimit(request, "get-album-images", { limit: 30, windowMs: 60_000 });
  if (!rate.allowed) {
    return jsonWithCors(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(rate.retryAfterSeconds) }
      },
      origin
    );
  }

  let releaseProviderSlot: (() => void) | null = null;

  try {
    const { searchParams } = new URL(request.url);
    const moodRaw = searchParams.get("mood")?.trim().toLowerCase();
    const limitParam = Number(searchParams.get("limit"));
    const limit = Number.isFinite(limitParam) ? Math.min(Math.max(limitParam, 1), 200) : 24;

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

    releaseProviderSlot = acquireConcurrencySlot("get-album-images", 8);
    if (!releaseProviderSlot) {
      return jsonWithCors(
        { error: "Server is busy. Please retry shortly." },
        { status: 503, headers: { "Retry-After": "2" } },
        origin
      );
    }

    const supabase = getSupabaseClient();
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
      console.error("[get-album-images] Supabase query failed:", error.message);
      return jsonInternalError({ headers: corsHeaders(origin) });
    }

    const rows = (data ?? []) as { album_image: string | null }[];
    const images = Array.from(
      new Set(rows.map((row) => normalizeSpotifyImageUrl(row.album_image)).filter(Boolean))
    ) as string[];

    const shuffled = shuffle(images);
    return jsonWithCors({ images: shuffled.slice(0, limit) }, undefined, origin);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[get-album-images] Unhandled error:", message);
    const origin = request.headers.get("origin");
    return jsonInternalError({ headers: corsHeaders(origin) });
  } finally {
    releaseProviderSlot?.();
  }
}
