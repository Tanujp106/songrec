import { NextResponse } from "next/server";
import { randomBytes } from "crypto";
import { corsHeaders } from "@/lib/cors";

export const runtime = "nodejs";

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID ?? "";
const SPOTIFY_REDIRECT_URI =
  process.env.SPOTIFY_REDIRECT_URI ??
  "http://127.0.0.1:3000/api/spotify/callback";

export async function GET(request: Request) {
  const origin = request.headers.get("origin");
  if (!SPOTIFY_CLIENT_ID) {
    return new NextResponse("Missing SPOTIFY_CLIENT_ID", {
      status: 500,
      headers: corsHeaders(origin)
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
    `spotify_oauth_state=${state}; Path=/; HttpOnly; SameSite=Lax; Max-Age=600`
  );
  return response;
}
