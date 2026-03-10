import { NextResponse } from "next/server";
import { corsHeaders } from "@/lib/cors";

export const runtime = "nodejs";

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID ?? "";
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET ?? "";
const SPOTIFY_REDIRECT_URI =
  process.env.SPOTIFY_REDIRECT_URI ??
  "http://127.0.0.1:3000/api/spotify/callback";

function html(body: string) {
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Spotify OAuth</title>
    <style>
      body { font-family: system-ui, -apple-system, Segoe UI, sans-serif; padding: 24px; line-height: 1.4; }
      code { background: #f3f3f3; padding: 2px 6px; border-radius: 4px; }
      pre { background: #f7f7f7; padding: 12px; border-radius: 8px; overflow-x: auto; }
    </style>
  </head>
  <body>${body}</body>
</html>`;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const cookie = request.headers.get("cookie") ?? "";
  const cookieState = cookie
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith("spotify_oauth_state="))
    ?.split("=")[1];

  if (!code) {
    return new NextResponse(html("<h2>Missing code</h2>"), {
      status: 400,
      headers: { "Content-Type": "text/html", ...corsHeaders() }
    });
  }

  if (!state || !cookieState || state !== cookieState) {
    return new NextResponse(html("<h2>Invalid state</h2>"), {
      status: 400,
      headers: { "Content-Type": "text/html", ...corsHeaders() }
    });
  }

  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
    return new NextResponse(html("<h2>Missing Spotify client credentials</h2>"), {
      status: 500,
      headers: { "Content-Type": "text/html", ...corsHeaders() }
    });
  }

  const authHeader = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${authHeader}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: SPOTIFY_REDIRECT_URI
    }).toString()
  });

  if (!tokenResponse.ok) {
    const text = await tokenResponse.text();
    return new NextResponse(html(`<h2>Token exchange failed</h2><pre>${text}</pre>`), {
      status: 500,
      headers: { "Content-Type": "text/html", ...corsHeaders() }
    });
  }

  const data = (await tokenResponse.json()) as {
    refresh_token?: string;
    access_token?: string;
    expires_in?: number;
  };

  const refreshToken = data.refresh_token ?? "";
  if (!refreshToken) {
    return new NextResponse(html("<h2>No refresh token returned.</h2>"), {
      status: 500,
      headers: { "Content-Type": "text/html", ...corsHeaders() }
    });
  }

  const response = new NextResponse(
    html(
      `<h2>Spotify connected</h2>
      <p>Add this to your <code>.env.local</code> and restart the server:</p>
      <pre>SPOTIFY_REFRESH_TOKEN=${refreshToken}</pre>`
    ),
    {
      status: 200,
      headers: { "Content-Type": "text/html", ...corsHeaders() }
    }
  );

  response.headers.set(
    "Set-Cookie",
    "spotify_oauth_state=; Path=/; Max-Age=0; SameSite=Lax"
  );

  return response;
}
