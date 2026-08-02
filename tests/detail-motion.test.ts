import assert from "node:assert/strict";
import test from "node:test";

import {
  RESULT_ACTION_HEIGHT,
  RESULT_CONTENT_REVEAL_DELAY_MS,
  getStableArtworkSource,
  getResultContentMotion,
  getSongDetailMotion,
} from "../frontend/src/app/lib/detail-motion";

test("keeps the selected recommendation artwork as the shared handoff source", () => {
  assert.equal(getStableArtworkSource("song-a", "song-b"), "song-a");
  assert.equal(getStableArtworkSource(null, "fallback"), "fallback");
});

test("waits for the album handoff before revealing result content", () => {
  assert.equal(RESULT_CONTENT_REVEAL_DELAY_MS, 1300);
  assert.equal(RESULT_ACTION_HEIGHT, "clamp(48px, 7.6svh, 60px)");

  const motion = getResultContentMotion(false);

  assert.deepEqual(motion.initial, { opacity: 0 });
  assert.deepEqual(motion.animate, { opacity: 1 });
  assert.deepEqual(motion.transition, { duration: 0.42, ease: "easeOut" });
});

test("keeps result content immediately available when reduced motion is requested", () => {
  const motion = getResultContentMotion(true);

  assert.deepEqual(motion.initial, { opacity: 0 });
  assert.deepEqual(motion.animate, { opacity: 1 });
  assert.deepEqual(motion.transition, { duration: 0, ease: "easeOut" });
});

test("uses blur and opacity without positional layout motion for song details", () => {
  const motion = getSongDetailMotion(false);

  assert.deepEqual(motion.initial, { opacity: 0, filter: "blur(12px)" });
  assert.deepEqual(motion.animate, { opacity: 1, filter: "blur(0px)" });
  assert.deepEqual(motion.exit, { opacity: 0, filter: "blur(12px)" });
  for (const state of [motion.initial, motion.animate, motion.exit]) {
    assert.equal("x" in state, false);
    assert.equal("y" in state, false);
    assert.equal("scale" in state, false);
    assert.equal("height" in state, false);
  }
});

test("uses an opacity-only transition when reduced motion is requested", () => {
  const motion = getSongDetailMotion(true);

  assert.deepEqual(motion.initial, { opacity: 0, filter: "blur(0px)" });
  assert.deepEqual(motion.exit, { opacity: 0, filter: "blur(0px)" });
  assert.equal(motion.transition.duration, 0.12);
});
