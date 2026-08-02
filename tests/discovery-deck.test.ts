import assert from "node:assert/strict";
import test from "node:test";

import {
  DEFAULT_DISCOVERY_DECK_TUNING,
  DISCOVERY_CHAMBER_REVEAL_DELAY_MS,
  DISCOVERY_CANDIDATE_POOL_SIZE,
  DISCOVERY_ARTWORK_DRAG_MAX_TRAVEL_PX,
  DISCOVERY_DRAG_MAX_TRAVEL_PX,
  DISCOVERY_FINDING_TILE_COUNT,
  getDiscoveryMorphDeckIndex,
  getDiscoveryMorphTargetFrame,
  createDiscoveryDeckState,
  enterDiscovery,
  finishDiscovery,
  getActiveSongIndex,
  getDeckCardLayout,
  getDiscoveryCardMotionPhase,
  getDiscoveryDragOffset,
  getDiscoveryCardDragOffset,
  getDiscoveryArtworkDragOffset,
  getDiscoveryArtworkReleaseVelocity,
  getDiscoveryArtworkScale,
  getDiscoveryExitTravel,
  getDiscoveryImagePool,
  getDiscoveryMorphSourceImage,
  getDiscoveryGesture,
  isDiscoveryPointInsideChamber,
  getDiscoverySwipeAction,
  getDiscoverySongs,
  returnToPrimary,
  sendDiscoveryCardToBack,
  shuffleDiscoveryDeck,
} from "../frontend/src/app/lib/discovery-deck";

test("keeps the secondary discovery chamber hidden for 1.3 seconds", () => {
  assert.equal(DISCOVERY_CHAMBER_REVEAL_DELAY_MS, 1300);
});

test("limits discovery to four songs after the primary recommendation", () => {
  assert.deepEqual(
    getDiscoverySongs(["primary", "one", "two", "three", "four", "five"]),
    ["one", "two", "three", "four"],
  );
  assert.deepEqual(getDiscoverySongs(["primary"]), []);
});

test("keeps the four selected covers first while adding a larger candidate pool", () => {
  assert.deepEqual(
    getDiscoveryImagePool(["pick-a", "pick-b", "pick-c", "pick-d"], ["extra-a", "pick-b", "extra-b"], 6),
    ["pick-a", "pick-b", "pick-c", "pick-d", "extra-a", "extra-b"],
  );
});

test("uses a dense loading-screen-sized pool for the discovery chamber", () => {
  assert.equal(DISCOVERY_CANDIDATE_POOL_SIZE, 64);
  assert.equal(
    getDiscoveryImagePool(
      ["pick-a", "pick-b", "pick-c", "pick-d"],
      Array.from({ length: 70 }, (_, index) => "candidate-" + String(index)),
    ).length,
    64,
  );
});

test("anchors the stack morph in the middle of the finding field", () => {
  assert.equal(DISCOVERY_FINDING_TILE_COUNT, 36);
  assert.deepEqual(
    [14, 15, 20, 21].map(getDiscoveryMorphDeckIndex),
    [0, 1, 2, 3],
  );
  assert.equal(getDiscoveryMorphDeckIndex(0), null);
});

test("maps the four morph anchors to the final recommendation covers", () => {
  const recommendationImages = ["song-a", "song-b", "song-c", "song-d"];

  assert.equal(getDiscoveryMorphSourceImage(14, recommendationImages, "fallback"), "song-a");
  assert.equal(getDiscoveryMorphSourceImage(15, recommendationImages, "fallback"), "song-b");
  assert.equal(getDiscoveryMorphSourceImage(21, recommendationImages, "fallback"), "song-d");
  assert.equal(getDiscoveryMorphSourceImage(0, recommendationImages, "fallback"), null);
});

test("maps a morph source rectangle into a stable stacked-card target", () => {
  assert.deepEqual(
    getDiscoveryMorphTargetFrame(
      { x: 4, y: -3, rotate: 7, scale: 0.98, opacity: 0.9 },
      396,
      12,
    ),
    {
      left: 54.5296,
      top: 47.5296,
      width: 294.9408,
      height: 294.9408,
      rotate: 7,
      opacity: 0.9,
    },
  );
});

test("marks the departed card as an instant re-entry when it is put behind the stack", () => {
  assert.equal(
    getDiscoveryCardMotionPhase({ index: 0, departingDeckIndex: null, reenteringDeckIndex: 0 }),
    "reentering",
  );
  assert.equal(
    getDiscoveryCardMotionPhase({ index: 0, departingDeckIndex: 0, reenteringDeckIndex: 0 }),
    "departing",
  );
  assert.equal(
    getDiscoveryCardMotionPhase({ index: 1, departingDeckIndex: 0, reenteringDeckIndex: null }),
    "stack",
  );
});

test("requires a deliberate horizontal swipe to change discovery state", () => {
  assert.equal(
    getDiscoveryGesture({ startX: 200, endX: 129, startY: 20, endY: 20 }),
    null,
  );
  assert.equal(
    getDiscoveryGesture({ startX: 200, endX: 128, startY: 20, endY: 20 }),
    "next",
  );
  assert.equal(
    getDiscoveryGesture({ startX: 100, endX: 172, startY: 20, endY: 20 }),
    "previous",
  );
  assert.equal(
    getDiscoveryGesture({ startX: 200, endX: 110, startY: 0, endY: 100 }),
    null,
  );
});

test("routes right swipes by their start region while viewing the deck", () => {
  assert.equal(getDiscoverySwipeAction("previous", "deck", true), "advance");
  assert.equal(getDiscoverySwipeAction("previous", "deck", false), "return");
  assert.equal(getDiscoverySwipeAction("next", "deck", false), "advance");
  assert.equal(getDiscoverySwipeAction(null, "deck", true), null);
});

test("stages advancing cards inside the stack in the swipe direction", () => {
  assert.equal(getDiscoveryExitTravel("next", 12), -12);
  assert.equal(getDiscoveryExitTravel("previous", 12), 12);
  assert.equal(getDiscoveryExitTravel("next", 80), -15);
  assert.equal(getDiscoveryExitTravel("previous", 80), 15);
  assert.equal(getDiscoveryExitTravel(null, 24), 0);
});

test("adds progressive resistance as the live card drag reaches its radius", () => {
  const nearOrigin = getDiscoveryDragOffset(4, -4, 18);
  const nearEdge = getDiscoveryDragOffset(18, -18, 18);

  assert.ok(nearOrigin.x > 2 && nearOrigin.x < 3);
  assert.ok(nearOrigin.y < -2 && nearOrigin.y > -3);
  assert.ok(nearEdge.x > 8 && nearEdge.x < 10);
  assert.ok(nearEdge.y < -8 && nearEdge.y > -10);
  assert.deepEqual(getDiscoveryDragOffset(-60, 60, 18), {
    x: -18 * Math.tanh(60 / (18 * 1.75)),
    y: 18 * Math.tanh(60 / (18 * 1.75)),
  });
});

test("keeps the live card inside a tiny three-pixel elastic radius", () => {
  assert.equal(DISCOVERY_DRAG_MAX_TRAVEL_PX, 3);
  const offset = getDiscoveryDragOffset(240, -240, DISCOVERY_DRAG_MAX_TRAVEL_PX);

  assert.ok(Math.abs(offset.x) <= 3);
  assert.ok(Math.abs(offset.y) <= 3);
  assert.ok(Math.abs(offset.x) > 2.9);
  assert.ok(Math.abs(offset.y) > 2.9);
});

test("keeps primary artwork drag tiny with strong progressive resistance", () => {
  assert.equal(DISCOVERY_ARTWORK_DRAG_MAX_TRAVEL_PX, 3);
  const nearOrigin = getDiscoveryArtworkDragOffset(4, -4);
  const nearBoundary = getDiscoveryArtworkDragOffset(40, -40);
  const hardBoundary = getDiscoveryArtworkDragOffset(240, -240);

  assert.ok(nearOrigin.x > 0 && nearOrigin.x < 0.75);
  assert.ok(nearOrigin.y < 0 && nearOrigin.y > -0.75);
  assert.ok(nearBoundary.x > 2.5 && nearBoundary.x < 3);
  assert.ok(nearBoundary.y < -2.5 && nearBoundary.y > -3);
  assert.ok(hardBoundary.x > 2.99 && hardBoundary.x <= 3);
  assert.ok(hardBoundary.y < -2.99 && hardBoundary.y >= -3);
});

test("uses the same strong progressive resistance for discovery card drags", () => {
  assert.deepEqual(
    getDiscoveryCardDragOffset(40, -40),
    getDiscoveryArtworkDragOffset(40, -40),
  );
  const hardBoundary = getDiscoveryCardDragOffset(240, -240);
  assert.ok(hardBoundary.x > 2.99 && hardBoundary.x <= 3);
  assert.ok(hardBoundary.y < -2.99 && hardBoundary.y >= -3);
});

test("adds subtle nonlinear artwork scale and bounded release velocity", () => {
  assert.equal(getDiscoveryArtworkScale(0, 0), 1);
  assert.ok(getDiscoveryArtworkScale(20, 0) < 1 && getDiscoveryArtworkScale(20, 0) > 0.99);
  assert.ok(getDiscoveryArtworkScale(120, 0) < 0.98 && getDiscoveryArtworkScale(120, 0) > 0.96);
  assert.equal(getDiscoveryArtworkScale(250, 0), 0.94);
  assert.equal(getDiscoveryArtworkReleaseVelocity(90), 90);
  assert.equal(getDiscoveryArtworkReleaseVelocity(-90), -90);
  assert.equal(getDiscoveryArtworkReleaseVelocity(900), 240);
  assert.equal(getDiscoveryArtworkReleaseVelocity(-900), -240);
});

test("sends whichever card was dragged to the back of the stack", () => {
  assert.deepEqual(sendDiscoveryCardToBack([0, 1, 2, 3], 2), [0, 1, 3, 2]);
  assert.deepEqual(sendDiscoveryCardToBack([0, 1, 2, 3], 0), [1, 2, 3, 0]);
  assert.deepEqual(sendDiscoveryCardToBack([0, 1, 2, 3], 9), [0, 1, 2, 3]);
});

test("keeps both in-card swipe directions on the deck advance path", () => {
  assert.equal(getDiscoverySwipeAction("next", "deck", true), "advance");
  assert.equal(getDiscoverySwipeAction("previous", "deck", true), "advance");
  assert.equal(getDiscoverySwipeAction("previous", "deck", false), "return");
});

test("treats the exposed stack area as inside the discovery chamber", () => {
  const chamber = { left: 39, top: 181, right: 351, bottom: 493 };

  assert.equal(isDiscoveryPointInsideChamber({ x: 52, y: 330 }, chamber), true);
  assert.equal(isDiscoveryPointInsideChamber({ x: 351, y: 330 }, chamber), true);
  assert.equal(isDiscoveryPointInsideChamber({ x: 14, y: 330 }, chamber), false);
});

test("uses caller-supplied gesture and stack tuning without changing defaults", () => {
  assert.equal(
    getDiscoveryGesture({ startX: 100, endX: 55, startY: 0, endY: 0 }, 44),
    "next",
  );
  assert.deepEqual(
    getDeckCardLayout(1, { ...DEFAULT_DISCOVERY_DECK_TUNING, stackX: 9 }),
    { x: -9, y: -3, rotate: -2.8, scale: 0.98, opacity: 0.9 },
  );
});

test("enters finding once and returns to the cached deck on later visits", () => {
  const initial = createDiscoveryDeckState();
  const finding = enterDiscovery(initial, 4);

  assert.deepEqual(finding, {
    view: "finding",
    deckIndex: 0,
    hasFoundSongs: false,
  });

  const deck = finishDiscovery(finding, 4);
  assert.deepEqual(deck, {
    view: "deck",
    deckIndex: 0,
    hasFoundSongs: true,
  });

  const primary = returnToPrimary(deck);
  assert.deepEqual(primary, {
    view: "primary",
    deckIndex: 0,
    hasFoundSongs: true,
  });
  assert.equal(enterDiscovery(primary, 4).view, "deck");
});

test("does not enter discovery when there are no secondary songs", () => {
  const initial = createDiscoveryDeckState();
  assert.deepEqual(enterDiscovery(initial, 0), initial);
  assert.deepEqual(finishDiscovery(initial, 0), initial);
});

test("shuffles only while the user is viewing the deck and wraps its order", () => {
  const finding = enterDiscovery(createDiscoveryDeckState(), 4);
  assert.deepEqual(shuffleDiscoveryDeck(finding, 4), finding);

  const deck = finishDiscovery(finding, 4);
  const second = shuffleDiscoveryDeck(deck, 4);
  const third = shuffleDiscoveryDeck(second, 4);
  const fourth = shuffleDiscoveryDeck(third, 4);
  const wrapped = shuffleDiscoveryDeck(fourth, 4);

  assert.equal(second.deckIndex, 1);
  assert.equal(third.deckIndex, 2);
  assert.equal(fourth.deckIndex, 3);
  assert.equal(wrapped.deckIndex, 0);
});

test("keeps the primary active during finding and maps the deck top to its song", () => {
  assert.equal(
    getActiveSongIndex(
      { view: "finding", deckIndex: 2, hasFoundSongs: false },
      4,
    ),
    0,
  );
  assert.equal(
    getActiveSongIndex(
      { view: "deck", deckIndex: 2, hasFoundSongs: true },
      4,
    ),
    3,
  );
  assert.equal(
    getActiveSongIndex(
      { view: "deck", deckIndex: 9, hasFoundSongs: true },
      4,
    ),
    2,
  );
});

test("describes a legible top card and three restrained cards behind it", () => {
  assert.deepEqual(getDeckCardLayout(0), {
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    opacity: 1,
  });
  assert.deepEqual(getDeckCardLayout(1), {
    x: -4,
    y: -3,
    rotate: -2.8,
    scale: 0.98,
    opacity: 0.9,
  });
  assert.deepEqual(getDeckCardLayout(3), {
    x: 6,
    y: -9,
    rotate: 2.4,
    scale: 0.94,
    opacity: 0.72,
  });
});
