# Curated Shuffle Deck Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (- [ ]) syntax for tracking.

**Goal:** Replace the final-screen five-song carousel with one primary recommendation and a user-initiated dotted curation chamber that finds and exposes a manually shuffled four-card deck.

**Architecture:** A pure discovery-deck.ts module owns gesture and state decisions. SongResult.tsx renders the primary result, the shared dotted chamber, timed finding state, and stacked deck without Embla. CSS supplies only the reduced-motion-safe shimmer and finding-card visuals.

**Tech Stack:** React 18, TypeScript, Motion 12, Tailwind CSS, Node test runner, Vite.

## Global Constraints

- Preserve the current primary-album size, final-screen vertical hierarchy, song-detail slot, Spotify action, and Start over action.
- Show no song count, pagination dots, neighboring artwork, or automatic deck shuffle.
- Use a 72px deliberate horizontal threshold and reject vertical-dominant gestures.
- Run the finding state once per result list for 1400ms.
- Show at most four secondary songs and return to song 0 on a right swipe from discovery.
- Do not modify backend recommendation generation or API response shapes.
- Preserve unrelated dirty-worktree changes and do not commit or push without a separate request.

---

### Task 1: Pure discovery-deck behavior

**Files:**
- Create: frontend/src/app/lib/discovery-deck.ts
- Create: tests/discovery-deck.test.ts

**Interfaces:**
- Produces: DiscoveryView, DiscoveryDeckState, createDiscoveryDeckState, getDiscoverySongs, getDiscoveryGesture, enterDiscovery, finishDiscovery, shuffleDiscoveryDeck, returnToPrimary, getActiveSongIndex, and getDeckCardLayout.

- [ ] **Step 1: Write failing state-transition tests**

~~~ts
const initial = createDiscoveryDeckState();
assert.deepEqual(enterDiscovery(initial, 4), {
  view: "finding",
  deckIndex: 0,
  hasFoundSongs: false,
});
assert.equal(getDiscoveryGesture({ startX: 200, endX: 128, startY: 10, endY: 10 }), "next");
assert.equal(getDiscoveryGesture({ startX: 200, endX: 120, startY: 0, endY: 100 }), null);
~~~

- [ ] **Step 2: Run the focused test and confirm RED**

Run: npx tsx --test tests/discovery-deck.test.ts

Expected: FAIL because frontend/src/app/lib/discovery-deck.ts does not exist.

- [ ] **Step 3: Write the minimal pure state module**

~~~ts
export const DISCOVERY_SWIPE_THRESHOLD_PX = 72;
export const DISCOVERY_FINDING_DURATION_MS = 1400;

export type DiscoveryView = "primary" | "finding" | "deck";

export interface DiscoveryDeckState {
  view: DiscoveryView;
  deckIndex: number;
  hasFoundSongs: boolean;
}
~~~

Implement literal transitions: first entry with secondary songs becomes finding; finishing becomes deck; subsequent entry becomes deck; shuffle advances modulo the secondary-song count; return sets only view to primary; active index is 0 in primary or finding and deckIndex + 1 in deck.

- [ ] **Step 4: Run the focused test and confirm GREEN**

Run: npx tsx --test tests/discovery-deck.test.ts

Expected: all discovery-deck tests pass.

### Task 2: Replace Embla with the curated chamber

**Files:**
- Modify: frontend/src/app/components/SongResult.tsx
- Test: tests/discovery-deck.test.ts

**Interfaces:**
- Consumes: Task 1 state and gesture helpers.
- Produces: browser-visible primary, finding, deck, shuffle, and return states.

- [ ] **Step 1: Extend the failing tests for view and song behavior**

~~~ts
assert.deepEqual(getDiscoverySongs(["main", "a", "b", "c", "d", "e"]), ["a", "b", "c", "d"]);
assert.equal(getActiveSongIndex({ view: "deck", deckIndex: 2, hasFoundSongs: true }, 4), 3);
assert.equal(getActiveSongIndex({ view: "finding", deckIndex: 0, hasFoundSongs: false }, 4), 0);
~~~

- [ ] **Step 2: Run the focused test and confirm RED for missing behavior**

Run: npx tsx --test tests/discovery-deck.test.ts

Expected: FAIL on the newly added song-selection expectations.

- [ ] **Step 3: Implement SongResult against the tested state model**

Remove Embla imports, Carousel rendering, carousel API state, dome and arc previews, and inactive album motion. Render one primary album and one dotted discovery chamber. Use pointer capture to classify primary left swipes, deck left swipes, and discovery right swipes. Use one cleaned-up timeout to call finishDiscovery after DISCOVERY_FINDING_DURATION_MS. Keep song, title, artist, album, and Spotify URL derived from getActiveSongIndex.

- [ ] **Step 4: Run focused and existing detail tests**

Run: npx tsx --test tests/discovery-deck.test.ts tests/detail-motion.test.ts

Expected: all focused tests pass.

### Task 3: Motion, styling, and obsolete carousel removal

**Files:**
- Modify: frontend/src/styles/index.css
- Delete: frontend/src/app/lib/carousel.ts
- Delete: frontend/src/app/lib/carousel-motion.ts
- Delete: tests/carousel.test.ts
- Delete: tests/carousel-motion.test.ts
- Delete: tests/carousel-dialkit.test.ts

**Interfaces:**
- Consumes: Task 2 DOM slots and reduced-motion state.
- Produces: shimmer copy, finding-card motion, and a clean non-carousel source tree.

- [ ] **Step 1: Add failing behavior coverage for deck stack descriptors**

~~~ts
assert.deepEqual(getDeckCardLayout(0), { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 });
assert.deepEqual(getDeckCardLayout(3), { x: 6, y: -9, rotate: 2.4, scale: 0.94, opacity: 0.72 });
~~~

- [ ] **Step 2: Run the test and confirm RED**

Run: npx tsx --test tests/discovery-deck.test.ts

Expected: FAIL because getDeckCardLayout does not exist.

- [ ] **Step 3: Implement layout descriptors and visual styling**

Add literal layout values for stack positions 0 through 3. Add songrec-finding-card, songrec-copy-shimmer, and a prefers-reduced-motion override in index.css. Remove obsolete mobile-arc keyframes and all carousel-specific test and source files.

- [ ] **Step 4: Run the complete test suite**

Run: npm test

Expected: zero failures and no references to deleted carousel helpers.

### Task 4: Full verification and browser acceptance

**Files:**
- Verify: all modified files

**Interfaces:**
- Consumes: completed implementation.
- Produces: evidence for source, build, responsive, and interaction acceptance.

- [ ] **Step 1: Run static verification**

Run: npm run typecheck

Run: npm run build --prefix frontend

Run: npm run build

Run: git diff --check

Expected: every command exits 0.

- [ ] **Step 2: Reuse the running app port**

Run: lsof -nP -iTCP:3000 -iTCP:3001 -sTCP:LISTEN

If Songrec is already running, use those listeners. Only start npm run dev when no Songrec listener exists.

- [ ] **Step 3: Verify the complete browser story**

At mobile and desktop sizes confirm: one primary song plus dotted cue at rest; left swipe centers the chamber; finding copy and animation appear for about 1400ms; deck does not auto-shuffle; each user left swipe advances one top card; right swipe returns to the original; returning to discovery skips repeated finding; Spotify action follows the visible top song; layout does not overflow vertically.

- [ ] **Step 4: Review the final diff against the design**

Confirm no Embla or carousel import remains in SongResult, no unrelated file changed, and every requirement in docs/superpowers/specs/2026-08-02-curated-shuffle-deck-design.md is represented in the implementation or verification evidence.
