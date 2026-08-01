import assert from "node:assert/strict";
import test from "node:test";

import {
  defaultFinalCarouselDials,
  getCarouselIndex,
  getFinalCarouselLayout,
  getResultScreenLayout,
  getFinalCarouselOptions,
  getNextIndex,
  getPreviousIndex,
  getSwipeDirection,
} from "../frontend/src/app/lib/carousel";

test("keeps the result carousel edge-to-edge while controls retain their inset", () => {
  assert.deepEqual(getResultScreenLayout(), {
    actionInsetPx: 24,
    carouselInsetPx: 0,
    resultMaxWidth: "none",
  });
});

test("lays out the tuned cards with the compact carousel preset", () => {
  assert.deepEqual(getFinalCarouselLayout(defaultFinalCarouselDials), {
    albumWidth: "95%",
    gapPx: 0,
    slideFlexBasis: "70%",
    carouselTopGapPx: 24,
    detailSlotHeightPx: 120,
    detailGapPx: 12,
  });
});

test("centers the active cover with the configured free-drag track", () => {
  assert.deepEqual(getFinalCarouselOptions(5, defaultFinalCarouselDials), {
    align: "center",
    containScroll: false,
    dragThreshold: 48,
    dragFree: true,
    loop: true,
    skipSnaps: true,
  });
});

test("reduces drag friction after the first committed swipe", () => {
  assert.equal(getFinalCarouselOptions(5, defaultFinalCarouselDials, false).dragThreshold, 48);
  assert.equal(getFinalCarouselOptions(5, defaultFinalCarouselDials, true).dragThreshold, 12);
});

test("keeps all carousel tuning groups in one serializable default object", () => {
  assert.deepEqual(Object.keys(defaultFinalCarouselDials), [
    "geometry",
    "appearance",
    "image",
    "tilt",
    "track",
    "edgeCue",
    "interaction",
  ]);
  assert.equal(defaultFinalCarouselDials.geometry.slideWidthPercent, 70);
  assert.equal(defaultFinalCarouselDials.geometry.coverWidthPercent, 95);
  assert.equal(defaultFinalCarouselDials.geometry.trackGapPx, 0);
  assert.equal(defaultFinalCarouselDials.appearance.activeScale, 0.9);
  assert.equal(defaultFinalCarouselDials.appearance.inactiveScale, 0.65);
  assert.equal(defaultFinalCarouselDials.appearance.inactiveOpacity, 0.4);
  assert.equal(defaultFinalCarouselDials.appearance.inactiveBlurPx, 8);
  assert.equal(defaultFinalCarouselDials.appearance.shadowOpacity, 0);
  assert.equal(defaultFinalCarouselDials.tilt.springMass, 1);
  assert.equal(defaultFinalCarouselDials.track.dragFree, true);
  assert.equal(defaultFinalCarouselDials.track.skipSnaps, true);
  assert.equal(defaultFinalCarouselDials.edgeCue.enabled, false);
  assert.equal(defaultFinalCarouselDials.interaction.centerActive, true);
  assert.equal(defaultFinalCarouselDials.interaction.firstSwipeDragThresholdPx, 48);
  assert.equal(defaultFinalCarouselDials.interaction.normalDragThresholdPx, 12);
});

test("disables looping when the final screen has one song", () => {
  assert.equal(getFinalCarouselOptions(1).loop, false);
});

test("wraps the next index from the final song to the first song", () => {
  assert.equal(getNextIndex(4, 5), 0);
});

test("wraps the previous index from the first song to the final song", () => {
  assert.equal(getPreviousIndex(0, 5), 4);
});

test("normalizes Embla's selected snap for a looping five-song carousel", () => {
  assert.equal(getCarouselIndex(5, 5), 0);
  assert.equal(getCarouselIndex(-1, 5), 4);
});

test("keeps the detail index in range after Embla loops", () => {
  assert.equal(getCarouselIndex(9, 5), 4);
  assert.equal(getCarouselIndex(10, 5), 0);
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
