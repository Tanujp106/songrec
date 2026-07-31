import assert from "node:assert/strict";
import test from "node:test";

import { getSpotifyAccessToken } from "../src/lib/spotify";

test("does not expose Spotify token-response bodies in errors", async () => {
  const originalFetch = globalThis.fetch;
  const originalClientId = process.env.SPOTIFY_CLIENT_ID;
  const originalClientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  process.env.SPOTIFY_CLIENT_ID = "client-id";
  process.env.SPOTIFY_CLIENT_SECRET = "client-secret";
  globalThis.fetch = async () => new Response("private provider body", { status: 401 });

  try {
    await assert.rejects(getSpotifyAccessToken(), /Spotify token request failed$/);
  } finally {
    globalThis.fetch = originalFetch;
    process.env.SPOTIFY_CLIENT_ID = originalClientId;
    process.env.SPOTIFY_CLIENT_SECRET = originalClientSecret;
  }
});

test("bounds Spotify token requests with an abort signal", async () => {
  const originalFetch = globalThis.fetch;
  const originalClientId = process.env.SPOTIFY_CLIENT_ID;
  const originalClientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  let requestSignal: AbortSignal | null = null;

  process.env.SPOTIFY_CLIENT_ID = "client-id";
  process.env.SPOTIFY_CLIENT_SECRET = "client-secret";
  globalThis.fetch = async (_input, init) => {
    requestSignal = init?.signal as AbortSignal | null;
    return new Response(JSON.stringify({ access_token: "token", expires_in: 3600 }), {
      headers: { "Content-Type": "application/json" }
    });
  };

  try {
    await getSpotifyAccessToken();
    const observedSignal = requestSignal as unknown;
    assert.notEqual(observedSignal, null);
    assert.equal(typeof (observedSignal as AbortSignal).aborted, "boolean");
  } finally {
    globalThis.fetch = originalFetch;
    process.env.SPOTIFY_CLIENT_ID = originalClientId;
    process.env.SPOTIFY_CLIENT_SECRET = originalClientSecret;
  }
});
