import assert from "node:assert/strict";
import test from "node:test";

import { getSongDetailMotion } from "../frontend/src/app/lib/detail-motion";

test("uses blur and opacity without positional layout motion for song details", () => {
  const motion = getSongDetailMotion(false);

  assert.deepEqual(motion.initial, { opacity: 0, filter: "blur(10px)" });
  assert.deepEqual(motion.animate, { opacity: 1, filter: "blur(0px)" });
  assert.deepEqual(motion.exit, { opacity: 0, filter: "blur(8px)" });
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
