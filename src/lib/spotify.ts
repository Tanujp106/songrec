import { requireEnv } from "./env";

const SPOTIFY_CLIENT_ID = requireEnv("SPOTIFY_CLIENT_ID");
const SPOTIFY_CLIENT_SECRET = requireEnv("SPOTIFY_CLIENT_SECRET");

let cachedToken: { accessToken: string; expiresAt: number } | null = null;

export async function getSpotifyAccessToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 30_000) {
    return cachedToken.accessToken;
  }

  const authHeader = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${authHeader}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({ grant_type: "client_credentials" }).toString()
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Spotify token request failed: ${message}`);
  }

  const data = (await response.json()) as {
    access_token: string;
    expires_in: number;
  };

  cachedToken = {
    accessToken: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000
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
    }
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
    const bodyText = await response.text().catch(() => "");
    throw new Error(
      `Spotify API request failed (${response.status}) for ${url}: ${bodyText}`
    );
  }

  return (await response.json()) as T;
}

export async function spotifyGet<T>(url: string): Promise<T> {
  try {
    const accessToken = await getSpotifyAccessToken();
    return await spotifyFetch<T>(url, accessToken);
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    if (message.includes("(401)")) {
      cachedToken = null;
      const accessToken = await getSpotifyAccessToken();
      return await spotifyFetch<T>(url, accessToken);
    }
    throw error;
  }
}
