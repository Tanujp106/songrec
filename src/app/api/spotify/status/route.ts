import { NextResponse } from "next/server";
import { corsHeaders } from "@/lib/cors";
import { spotifyGet } from "@/lib/spotify";
import { checkRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const origin = request.headers.get("origin");
  const rate = checkRateLimit(request, "spotify-status", { limit: 10, windowMs: 60_000 });
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: {
          ...corsHeaders(origin),
          "Cache-Control": "no-store",
          "Retry-After": String(rate.retryAfterSeconds)
        }
      }
    );
  }

  const hasRefreshToken = (process.env.SPOTIFY_REFRESH_TOKEN ?? "").trim().length > 0;
  let meOk = false;

  if (hasRefreshToken) {
    try {
      await spotifyGet("https://api.spotify.com/v1/me");
      meOk = true;
    } catch {
      meOk = false;
    }
  }

  return NextResponse.json(
    {
      has_refresh_token: hasRefreshToken,
      auth_mode: hasRefreshToken ? "user" : "app",
      me_ok: meOk
    },
    { headers: { ...corsHeaders(origin), "Cache-Control": "no-store" } }
  );
}
