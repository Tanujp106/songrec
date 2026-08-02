import assert from "node:assert/strict";
import test from "node:test";

import {
  fetchMoodImages,
  fetchAllMoodImages,
  isSongRecommendation,
  isSongRecommendationList
} from "../frontend/src/app/lib/api";

const validSong = {
  song_name: "Song",
  artist: ["Artist"],
  album_image: null,
  spotify_url: null,
  popularity: 50,
  release_year: null,
  duration_ms: null,
  album_name: null,
  album_id: null,
  release_date: null,
  release_date_precision: null
};

test("accepts a complete song recommendation", () => {
  assert.equal(
    isSongRecommendation(validSong),
    true
  );
});

test("rejects malformed song recommendations", () => {
  assert.equal(isSongRecommendation({ song_name: "Song", artist: "Artist" }), false);
});

test("accepts a non-empty list of complete song recommendations", () => {
  assert.equal(isSongRecommendationList({ songs: [validSong, validSong] }), true);
});

test("rejects empty and malformed song recommendation lists", () => {
  assert.equal(isSongRecommendationList({ songs: [] }), false);
  assert.equal(isSongRecommendationList({ songs: [{ song_name: "Song" }] }), false);
});

test("does not retry a rate-limited album-image request", async () => {
  const originalFetch = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async () => {
    calls += 1;
    return new Response(JSON.stringify({ error: "Too many requests" }), {
      status: 429,
      headers: { "Content-Type": "application/json" }
    });
  };

  try {
    assert.deepEqual(await fetchMoodImages("party", 80), []);
    assert.equal(calls, 1);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("fetches only the requested moods instead of the full mood catalog", async () => {
  const originalFetch = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async () => {
    calls += 1;
    return new Response(JSON.stringify({ images: ["https://i.scdn.co/image/cover"] }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  };

  try {
    const result = await fetchAllMoodImages(80, ["party"]);
    assert.equal(calls, 1);
    assert.deepEqual(result.get("party"), ["https://i.scdn.co/image/cover"]);
    assert.equal(result.has("sad"), false);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
