import assert from "node:assert/strict";
import test from "node:test";

import { getNextIndex, getPreviousIndex, getSwipeDirection } from "../frontend/src/app/lib/carousel";

test("wraps the next index from the final song to the first song", () => {
  assert.equal(getNextIndex(4, 5), 0);
});

test("wraps the previous index from the first song to the final song", () => {
  assert.equal(getPreviousIndex(0, 5), 4);
});

test("keeps navigation safe for a one-song list", () => {
  assert.equal(getNextIndex(0, 1), 0);
  assert.equal(getPreviousIndex(0, 1), 0);
});

test("maps a deliberate horizontal gesture to the requested carousel direction", () => {
  assert.equal(getSwipeDirection({ startX: 240, endX: 120, startY: 200, endY: 210 }), "next");
  assert.equal(getSwipeDirection({ startX: 120, endX: 240, startY: 200, endY: 210 }), "previous");
});

test("ignores taps and predominantly vertical gestures", () => {
  assert.equal(getSwipeDirection({ startX: 100, endX: 125, startY: 100, endY: 103 }), null);
  assert.equal(getSwipeDirection({ startX: 100, endX: 140, startY: 100, endY: 190 }), null);
});
