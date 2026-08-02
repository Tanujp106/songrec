import assert from "node:assert/strict";
import test from "node:test";

import {
  DEFAULT_DISCOVERY_DECK_TUNING,
  DISCOVERY_CHAMBER_REVEAL_DELAY_MS,
  DISCOVERY_CANDIDATE_POOL_SIZE,
  createDiscoveryDeckState,
  enterDiscovery,
  finishDiscovery,
  getActiveSongIndex,
  getDeckCardLayout,
  getDiscoveryImagePool,
  getDiscoveryGesture,
  getDiscoverySwipeAction,
  getDiscoverySongs,
  returnToPrimary,
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

test("uses a loading-screen-sized pool for the discovery chamber", () => {
  assert.equal(DISCOVERY_CANDIDATE_POOL_SIZE, 24);
  assert.equal(
    getDiscoveryImagePool(
      ["pick-a", "pick-b", "pick-c", "pick-d"],
      Array.from({ length: 30 }, (_, index) => "candidate-" + String(index)),
    ).length,
    24,
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
