import { NextResponse } from "next/server";
import { corsHeaders } from "@/lib/cors";
import { spotifyGet } from "@/lib/spotify";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const origin = request.headers.get("origin");
  const hasRefreshToken = (process.env.SPOTIFY_REFRESH_TOKEN ?? "").trim().length > 0;
  let meOk = false;
  let meError: string | null = null;

  if (hasRefreshToken) {
    try {
      await spotifyGet("https://api.spotify.com/v1/me");
      meOk = true;
    } catch (err) {
      meOk = false;
      meError = err instanceof Error ? err.message : String(err);
    }
  }

  return NextResponse.json(
    {
      has_refresh_token: hasRefreshToken,
      auth_mode: hasRefreshToken ? "user" : "app",
      me_ok: meOk,
      me_error: meError
    },
    { headers: corsHeaders(origin) }
  );
}
