import assert from "node:assert/strict";
import test from "node:test";

import { isImportRequestAuthorized } from "../src/lib/auth";
import { parseJson } from "../src/lib/http";
import { checkRateLimit, resetRateLimitsForTests } from "../src/lib/rate-limit";
import { getSupabaseClient } from "../src/lib/supabase";
import { spotifyGet } from "../src/lib/spotify";
import {
  extractPlaylistId,
  normalizeSpotifyImageUrl,
  normalizeSpotifyTrackUrl
} from "../src/lib/utils";

test("requires the server-side import bearer token", () => {
  const originalToken = process.env.IMPORT_API_TOKEN;
  process.env.IMPORT_API_TOKEN = "test-import-token";

  try {
    assert.equal(
      isImportRequestAuthorized(
        new Request("http://localhost", {
          headers: { Authorization: "Bearer test-import-token" }
        })
      ),
      true
    );
    assert.equal(
      isImportRequestAuthorized(
        new Request("http://localhost", {
          headers: { Authorization: "Bearer wrong-token" }
        })
      ),
      false
    );
    assert.equal(isImportRequestAuthorized(new Request("http://localhost")), false);
  } finally {
    if (originalToken === undefined) delete process.env.IMPORT_API_TOKEN;
    else process.env.IMPORT_API_TOKEN = originalToken;
  }
});

test("bounds requests per client and returns a retry window", () => {
  resetRateLimitsForTests();
  const request = new Request("http://localhost", {
    headers: { "x-forwarded-for": "203.0.113.10" }
  });

  assert.equal(checkRateLimit(request, "test", { limit: 2, windowMs: 60_000 }, 1_000).allowed, true);
  assert.equal(checkRateLimit(request, "test", { limit: 2, windowMs: 60_000 }, 1_001).allowed, true);
  const limited = checkRateLimit(request, "test", { limit: 2, windowMs: 60_000 }, 1_002);
  assert.equal(limited.allowed, false);
  assert.equal(limited.retryAfterSeconds, 60);
  resetRateLimitsForTests();
});

test("accepts Spotify playlist identifiers but rejects other hosts", () => {
  assert.equal(
    extractPlaylistId("https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M?si=abc"),
    "37i9dQZF1DXcBWIGoYBM5M"
  );
  assert.equal(extractPlaylistId("spotify:playlist:37i9dQZF1DXcBWIGoYBM5M"), "37i9dQZF1DXcBWIGoYBM5M");
  assert.equal(extractPlaylistId("https://evil.example/playlist/37i9dQZF1DXcBWIGoYBM5M"), null);
});

test("only permits Spotify links and artwork URLs in API data", () => {
  assert.equal(
    normalizeSpotifyTrackUrl("https://open.spotify.com/track/abc123"),
    "https://open.spotify.com/track/abc123"
  );
  assert.equal(normalizeSpotifyTrackUrl("javascript:alert(1)"), null);
  assert.equal(
    normalizeSpotifyImageUrl("https://i.scdn.co/image/cover"),
    "https://i.scdn.co/image/cover"
  );
  assert.equal(normalizeSpotifyImageUrl("https://evil.example/cover"), null);
});

test("bounds JSON request bodies before parsing", async () => {
  const oversized = await parseJson(new Request("http://localhost", {
    method: "POST",
    body: JSON.stringify({ playlist_url: "x".repeat(20_000) })
  }), 128);

  assert.equal(oversized, null);
});

test("does not send bearer tokens to non-Spotify hosts", async () => {
  await assert.rejects(
    spotifyGet("https://example.com/attacker"),
    /Spotify API URL is not allowed/
  );
});

test("caps in-flight provider work and releases the slot", async () => {
  const rateLimitModule = await import("../src/lib/rate-limit");
  assert.equal(typeof rateLimitModule.acquireConcurrencySlot, "function");

  const firstRelease = rateLimitModule.acquireConcurrencySlot("test-provider", 1);
  assert.equal(typeof firstRelease, "function");
  assert.equal(rateLimitModule.acquireConcurrencySlot("test-provider", 1), null);
  firstRelease?.();
  assert.equal(typeof rateLimitModule.acquireConcurrencySlot("test-provider", 1), "function");
  rateLimitModule.resetConcurrencyForTests();
});

test("supabase requests receive an abort signal for bounded work", async () => {
  const originalUrl = process.env.SUPABASE_URL;
  const originalKey = process.env.SUPABASE_SECRET_KEY;
  const originalFetch = globalThis.fetch;
  let requestSignal: AbortSignal | null = null;

  process.env.SUPABASE_URL = "https://example.supabase.co";
  process.env.SUPABASE_SECRET_KEY = "test-secret-key";
  globalThis.fetch = async (_input, init) => {
    requestSignal = init?.signal as AbortSignal | null;
    return new Response("[]", {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  };

  try {
    await getSupabaseClient().from("songs").select("id").limit(1);
    assert.equal(typeof requestSignal?.aborted, "boolean");
  } finally {
    globalThis.fetch = originalFetch;
    if (originalUrl === undefined) delete process.env.SUPABASE_URL;
    else process.env.SUPABASE_URL = originalUrl;
    if (originalKey === undefined) delete process.env.SUPABASE_SECRET_KEY;
    else process.env.SUPABASE_SECRET_KEY = originalKey;
  }
});
