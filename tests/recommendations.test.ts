import assert from "node:assert/strict";
import test from "node:test";

import { selectUniqueRecommendations } from "../src/lib/recommendations";

const rows = [
  { song_name: "First", artist: ["A"], album_id: "album-1", spotify_url: "https://spotify/1" },
  { song_name: "Duplicate track", artist: ["B"], album_id: "album-1", spotify_url: "https://spotify/1" },
  { song_name: "Second", artist: ["C"], album_id: "album-2", spotify_url: "https://spotify/3" },
  { song_name: "Third", artist: ["D"], album_id: "album-3", spotify_url: "https://spotify/4" },
  { song_name: "Fourth", artist: ["E"], album_id: "album-4", spotify_url: "https://spotify/5" },
  { song_name: "Fifth", artist: ["F"], album_id: "album-5", spotify_url: "https://spotify/6" },
  { song_name: "Sixth", artist: ["G"], album_id: "album-6", spotify_url: "https://spotify/7" }
];

test("returns at most five distinct recommendations without reusing a track", () => {
  const recommendations = selectUniqueRecommendations(rows, rows.map(() => 1), 5, () => 0);

  assert.deepEqual(
    recommendations.map((song) => song.song_name),
    ["First", "Second", "Third", "Fourth", "Fifth"]
  );
});

test("returns the available unique songs when fewer than five exist", () => {
  const recommendations = selectUniqueRecommendations(rows.slice(0, 3), [1, 1, 1], 5, () => 0);

  assert.deepEqual(
    recommendations.map((song) => song.song_name),
    ["First", "Second"]
  );
});
