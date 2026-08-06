import assert from "node:assert/strict";
import test from "node:test";

import {
  RESULT_ACTION_HEIGHT,
  RESULT_ACTION_MAX_WIDTH,
  RESULT_ACTION_BOTTOM_PADDING,
  RESULT_DETAIL_SIDE_PADDING,
  RESULT_ACTION_TOP_GAP,
  RESULT_DETAIL_HEIGHT,
  RESULT_DISCOVERY_TOP_GAP,
  RESULT_CARD_SIZE,
  RESULT_CONTENT_REVEAL_DELAY_MS,
  getLoadingImagePool,
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
  assert.equal(RESULT_ACTION_HEIGHT, "clamp(44px, 6.4svh, 52px)");
  assert.equal(RESULT_ACTION_MAX_WIDTH, "min(100%, 560px)");
  assert.equal(RESULT_DETAIL_SIDE_PADDING, 24);
  assert.equal(RESULT_ACTION_BOTTOM_PADDING, "clamp(20px, 3.5svh, 32px)");
  assert.equal(RESULT_ACTION_TOP_GAP, "clamp(8px, 2svh, 20px)");
  assert.equal(RESULT_DETAIL_HEIGHT, "clamp(88px, 14svh, 120px)");
  assert.equal(RESULT_DISCOVERY_TOP_GAP, "clamp(16px, 4svh, 40px)");
  assert.equal(RESULT_CARD_SIZE, "min(80vw, 55svh, 560px, max(120px, calc(100dvh - 470px)))");

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

test("does not expose fallback artwork while the loading image pool is unavailable", () => {
  assert.deepEqual(getLoadingImagePool(["fallback", ""], null, "indie"), []);
  assert.deepEqual(getLoadingImagePool(["b", "a", "a"], "indie", "indie"), ["a", "b"]);
});
