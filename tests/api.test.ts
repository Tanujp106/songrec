import assert from "node:assert/strict";
import test from "node:test";

import { isSongRecommendation } from "../frontend/src/app/lib/api";

test("accepts a complete song recommendation", () => {
  assert.equal(
    isSongRecommendation({
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
    }),
    true
  );
});

test("rejects malformed song recommendations", () => {
  assert.equal(isSongRecommendation({ song_name: "Song", artist: "Artist" }), false);
});
