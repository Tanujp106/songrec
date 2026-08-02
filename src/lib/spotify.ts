import { requireEnv } from "./env";

let cachedToken: { accessToken: string; expiresAt: number; type: "user" | "app" } | null = null;
const SPOTIFY_REQUEST_TIMEOUT_MS = 10_000;
const SPOTIFY_API_ORIGIN = "https://api.spotify.com";

function getSpotifyConfig() {
  return {
    clientId: requireEnv("SPOTIFY_CLIENT_ID"),
    clientSecret: requireEnv("SPOTIFY_CLIENT_SECRET"),
    refreshToken: (process.env.SPOTIFY_REFRESH_TOKEN ?? "").trim()
  };
}

export async function getSpotifyAccessToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 30_000) {
    return cachedToken.accessToken;
  }

  const { clientId, clientSecret, refreshToken } = getSpotifyConfig();

  const authHeader = Buffer.from(
    `${clientId}:${clientSecret}`
  ).toString("base64");

  const body = new URLSearchParams();
  if (refreshToken.length > 0) {
    body.set("grant_type", "refresh_token");
    body.set("refresh_token", refreshToken);
  } else {
    body.set("grant_type", "client_credentials");
  }

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${authHeader}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: body.toString(),
    signal: AbortSignal.timeout(SPOTIFY_REQUEST_TIMEOUT_MS)
  });

  if (!response.ok) {
    throw new Error("Spotify token request failed");
  }

  const data = (await response.json()) as {
    access_token: string;
    expires_in: number;
  };

  cachedToken = {
    accessToken: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000,
    type: refreshToken.length > 0 ? "user" : "app"
  };

  return cachedToken.accessToken;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function spotifyFetch<T>(url: string, accessToken: string, attempt = 0): Promise<T> {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    signal: AbortSignal.timeout(SPOTIFY_REQUEST_TIMEOUT_MS)
  });

  if (response.status === 429 && attempt < 3) {
    const retryAfterHeader = response.headers.get("retry-after");
    const retryAfterSeconds = retryAfterHeader
      ? Number.parseInt(retryAfterHeader, 10)
      : 1;
    const waitMs = Number.isFinite(retryAfterSeconds)
      ? retryAfterSeconds * 1000
      : 1000;
    await sleep(waitMs);
    return spotifyFetch<T>(url, accessToken, attempt + 1);
  }

  if (!response.ok) {
    throw new Error(`Spotify API request failed (${response.status})`);
  }

  return (await response.json()) as T;
}

function assertSpotifyApiUrl(rawUrl: string): string {
  const url = new URL(rawUrl);
  if (url.protocol !== "https:" || url.origin !== SPOTIFY_API_ORIGIN) {
    throw new Error("Spotify API URL is not allowed");
  }
  return url.toString();
}

export async function spotifyGet<T>(url: string): Promise<T> {
  const safeUrl = assertSpotifyApiUrl(url);
  try {
    const accessToken = await getSpotifyAccessToken();
    return await spotifyFetch<T>(safeUrl, accessToken);
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    if (message.includes("(401)")) {
      cachedToken = null;
      const accessToken = await getSpotifyAccessToken();
      return await spotifyFetch<T>(safeUrl, accessToken);
    }
    throw error;
  }
}
