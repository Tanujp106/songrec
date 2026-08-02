import { NextResponse } from "next/server";
import { randomBytes } from "crypto";
import { corsHeaders } from "@/lib/cors";
import { checkRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID ?? "";
const SPOTIFY_REDIRECT_URI =
  process.env.SPOTIFY_REDIRECT_URI ??
  "http://127.0.0.1:3001/api/spotify/callback";

export async function GET(request: Request) {
  const origin = request.headers.get("origin");
  const rate = checkRateLimit(request, "spotify-login", { limit: 10, windowMs: 10 * 60_000 });
  if (!rate.allowed) {
    return new NextResponse("Too many requests. Please try again later.", {
      status: 429,
      headers: {
        ...corsHeaders(origin),
        "Cache-Control": "no-store",
        "Retry-After": String(rate.retryAfterSeconds)
      }
    });
  }

  if (!SPOTIFY_CLIENT_ID) {
    return new NextResponse("Missing SPOTIFY_CLIENT_ID", {
      status: 500,
      headers: { ...corsHeaders(origin), "Cache-Control": "no-store" }
    });
  }

  const state = randomBytes(16).toString("hex");
  const scope = [
    "playlist-read-private",
    "playlist-read-collaborative"
  ].join(" ");

  const params = new URLSearchParams({
    response_type: "code",
    client_id: SPOTIFY_CLIENT_ID,
    scope,
    redirect_uri: SPOTIFY_REDIRECT_URI,
    state
  });

  const response = NextResponse.redirect(
    `https://accounts.spotify.com/authorize?${params.toString()}`
  );

  response.headers.set(
    "Set-Cookie",
    `spotify_oauth_state=${state}; Path=/; HttpOnly; SameSite=Lax; Max-Age=600${
      new URL(request.url).protocol === "https:" || process.env.NODE_ENV === "production"
        ? "; Secure"
        : ""
    }`
  );
  response.headers.set("Cache-Control", "no-store");
  return response;
}
