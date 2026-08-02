import { NextResponse } from "next/server";
import { corsHeaders } from "@/lib/cors";
import { checkRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID ?? "";
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET ?? "";
const SPOTIFY_REDIRECT_URI =
  process.env.SPOTIFY_REDIRECT_URI ??
  "http://127.0.0.1:3001/api/spotify/callback";
const SPOTIFY_OAUTH_TIMEOUT_MS = 10_000;

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

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return entities[character];
  });
}

function responseHeaders(origin?: string | null) {
  return {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "no-store",
    "Referrer-Policy": "no-referrer",
    "X-Content-Type-Options": "nosniff",
    "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'",
    ...corsHeaders(origin)
  };
}

export async function GET(request: Request) {
  const origin = request.headers.get("origin");
  const rate = checkRateLimit(request, "spotify-callback", { limit: 10, windowMs: 10 * 60_000 });
  if (!rate.allowed) {
    return new NextResponse(html("<h2>Too many requests. Please try again later.</h2>"), {
      status: 429,
      headers: { ...responseHeaders(origin), "Retry-After": String(rate.retryAfterSeconds) }
    });
  }

  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const cookie = request.headers.get("cookie") ?? "";
  const cookieState = cookie
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith("spotify_oauth_state="))
    ?.slice("spotify_oauth_state=".length);

  if (!code) {
    return new NextResponse(html("<h2>Missing code</h2>"), {
      status: 400,
      headers: responseHeaders(origin)
    });
  }

  if (!state || !cookieState || state !== cookieState) {
    return new NextResponse(html("<h2>Invalid state</h2>"), {
      status: 400,
      headers: responseHeaders(origin)
    });
  }

  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
    return new NextResponse(html("<h2>Missing Spotify client credentials</h2>"), {
      status: 500,
      headers: responseHeaders(origin)
    });
  }

  const authHeader = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  let tokenResponse: Response;
  try {
    tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${authHeader}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: SPOTIFY_REDIRECT_URI
      }).toString(),
      signal: AbortSignal.timeout(SPOTIFY_OAUTH_TIMEOUT_MS)
    });
  } catch {
    return new NextResponse(html("<h2>Token exchange failed</h2>"), {
      status: 500,
      headers: responseHeaders(origin)
    });
  }

  if (!tokenResponse.ok) {
    return new NextResponse(html("<h2>Token exchange failed</h2>"), {
      status: 500,
      headers: responseHeaders(origin)
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
      headers: responseHeaders(origin)
    });
  }

  const tokenDisplay =
    process.env.NODE_ENV === "development" &&
    process.env.SPOTIFY_OAUTH_DISPLAY_TOKEN === "1"
      ? `<p>Add this to your <code>.env.local</code> and restart the server:</p>
      <pre>SPOTIFY_REFRESH_TOKEN=${escapeHtml(refreshToken)}</pre>`
      : "<p>Spotify is connected. The refresh token was not displayed by this server.</p>";

  const response = new NextResponse(
    html(`<h2>Spotify connected</h2>${tokenDisplay}`),
    {
      status: 200,
      headers: responseHeaders(origin)
    }
  );

  response.headers.set(
    "Set-Cookie",
    `spotify_oauth_state=; Path=/; HttpOnly; Max-Age=0; SameSite=Lax${
      url.protocol === "https:" || process.env.NODE_ENV === "production"
        ? "; Secure"
        : ""
    }`
  );

  return response;
}
