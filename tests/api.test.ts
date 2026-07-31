import assert from "node:assert/strict";
import test from "node:test";

import { isSongRecommendation, isSongRecommendationList } from "../frontend/src/app/lib/api";

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
