# Final Carousel Suggestion Dome Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a deterministic threshold-driven right-edge next-song dome while guaranteeing every committed album finishes centered and no previous artwork appears on the left.

**Architecture:** Keep Embla for looping, keyboard navigation, and programmatic snapping, but disable its native pointer drag. Put displacement thresholds and reveal calculations in pure helpers, then let `SongResult` translate pointer events into one `scrollNext` or `scrollPrev` call and render the next-song preview independently of the slide track.

**Tech Stack:** React 18, TypeScript, Embla Carousel 8.6, Motion 12, DialKit 1.4, Node test runner.

## Global Constraints

- The first committed horizontal gesture requires exactly 72 pixels; later gestures require exactly 48 pixels.
- Velocity alone must never commit a song change.
- Every settled slide must be center-aligned, with no visible previous album on the left.
- Only one blurred next-song dome may appear on the right.
- Cap the active artwork at `min(82vw, 52svh, 560px)`, use full-width slides with a 40px internal track gap, and keep the resting dome exactly `visual.imageGapPx` after the active album.
- Let the dome grow from 5%/48-80px at rest to 25%/360px at full reveal while the active album itself remains motionless.
- Keep the existing DialKit `visual` group and its six controls; add no interaction, motion, or dome controls.
- The active album must have no tap, hover, press, tilt, or scale response.
- Preserve all unrelated uncommitted user work and do not create a Git commit unless the user separately requests one.
- Use the already-running Songrec ports for browser verification; start them only when absent.

---

### Task 1: Deterministic gesture and centered layout contract

**Files:**
- Modify: `tests/carousel.test.ts`
- Modify: `frontend/src/app/lib/carousel.ts`

**Interfaces:**
- Produces: `getSwipeCommitThreshold(hasInteracted: boolean): number`
- Produces: `getSwipeDirection({ startX, endX, startY, endY, hasInteracted? }): "next" | "previous" | null`
- Produces: `getSuggestionRevealProgress({ startX, currentX, startY, currentY, hasInteracted? }): number`
- Produces: `getFinalCarouselOptions(songCount, hasInteracted)` with `watchDrag: false`

- [x] **Step 1: Write failing behavior tests**

Add literal boundary tests in `tests/carousel.test.ts`:

```ts
test("requires a deliberate first swipe and a lighter later swipe", () => {
  assert.equal(getSwipeCommitThreshold(false), 72);
  assert.equal(getSwipeCommitThreshold(true), 48);
});

test("commits only horizontal displacement at the active threshold", () => {
  assert.equal(getSwipeDirection({ startX: 200, endX: 129, startY: 0, endY: 0 }), null);
  assert.equal(getSwipeDirection({ startX: 200, endX: 128, startY: 0, endY: 0 }), "next");
  assert.equal(getSwipeDirection({ startX: 100, endX: 148, startY: 0, endY: 0, hasInteracted: true }), "previous");
  assert.equal(getSwipeDirection({ startX: 200, endX: 110, startY: 0, endY: 100 }), null);
});

test("reveals only the right-side next-song dome during a left swipe", () => {
  assert.equal(getSuggestionRevealProgress({ startX: 200, currentX: 200, startY: 0, currentY: 0 }), 0);
  assert.equal(getSuggestionRevealProgress({ startX: 200, currentX: 164, startY: 0, currentY: 0 }), 0.5);
  assert.equal(getSuggestionRevealProgress({ startX: 200, currentX: 128, startY: 0, currentY: 0 }), 1);
  assert.equal(getSuggestionRevealProgress({ startX: 200, currentX: 280, startY: 0, currentY: 0 }), 0);
});
```

Change the layout expectation to `slideFlexBasis: "100%"`, and require `watchDrag: false` in the Embla options expectation.

- [x] **Step 2: Run the focused test and confirm RED**

Run: `npm test -- tests/carousel.test.ts`

Expected: FAIL because `getSwipeCommitThreshold` and `getSuggestionRevealProgress` are not exported and the existing options/layout still expose partial-width native dragging.

- [x] **Step 3: Implement the pure gesture contract**

In `frontend/src/app/lib/carousel.ts`, replace the old ambiguous swipe constant and native drag thresholds with:

```ts
const FIRST_SWIPE_THRESHOLD_PX = 72;
const SUBSEQUENT_SWIPE_THRESHOLD_PX = 48;

export function getSwipeCommitThreshold(hasInteracted = false): number {
  return hasInteracted ? SUBSEQUENT_SWIPE_THRESHOLD_PX : FIRST_SWIPE_THRESHOLD_PX;
}
```

Make `getSwipeDirection` read the threshold from `hasInteracted`, reject vertical-dominant movement, and commit on equality. Add `getSuggestionRevealProgress` that returns `0` for rightward or vertical-dominant movement and clamps leftward distance divided by the current threshold to `0...1`.

Set `CAROUSEL_SLIDE_WIDTH_PERCENT` to `100`. Return `watchDrag: false` from `getFinalCarouselOptions`; retain `align: "center"`, `dragFree: false`, `skipSnaps: false`, and looping for multiple songs. Remove the misleading `dragThreshold` option.

- [x] **Step 4: Run the focused test and confirm GREEN**

Run: `npm test -- tests/carousel.test.ts`

Expected: all carousel behavior tests pass.

### Task 2: Pointer lifecycle and right-edge preview dome

**Files:**
- Modify: `tests/carousel-dialkit.test.ts`
- Modify: `frontend/src/app/components/SongResult.tsx`

**Interfaces:**
- Consumes: `getSwipeDirection`, `getSuggestionRevealProgress`, `getNextIndex`, and `getFinalCarouselOptions`
- Preserves: `carouselApi.on("select", syncActiveSong)` as the only writer that follows Embla selection
- Produces: one `data-slot="suggestion-dome"` preview for `songs[getNextIndex(activeIndex, songs.length)]`

- [x] **Step 1: Write the failing integration contract**

Extend `tests/carousel-dialkit.test.ts` to require the component to consume `getNextIndex`, `getSwipeDirection`, and `getSuggestionRevealProgress`, to expose pointer down/move/up/cancel handlers on the carousel surface, and to render one `suggestion-dome`. Keep the existing assertions that the active item has no `whileHover`, `whileTap`, or active `onClick` behavior.

Update the persisted panel expectation only if the DialKit schema changes; this implementation must leave `songrec:final-carousel:v10` and the six existing visual controls unchanged.

- [x] **Step 2: Run the focused integration test and confirm RED**

Run: `npm test -- tests/carousel-dialkit.test.ts`

Expected: FAIL because the pointer controller and suggestion dome are not wired.

- [x] **Step 3: Implement shared pointer handling**

In `SongResult.tsx`, import `useCallback` and `useRef`, then store only the active pointer's starting coordinates and id in a ref. Store reveal progress in React state.

Use pointer capture from the `Carousel` root. During move, call `getSuggestionRevealProgress`. On pointer up, calculate one decision with `getSwipeDirection`, reset progress, then call exactly one of `carouselApi.scrollNext()` or `carouselApi.scrollPrev()`. Pointer cancellation and lost capture only reset state. Song-list replacement also resets the gesture.

Do not use velocity, timestamps, or Embla internal engine state.

- [x] **Step 4: Render the dome without adding DialKit controls**

Compute:

```ts
const nextIndex = getNextIndex(activeIndex, songs.length);
const nextSong = songs.length > 1 ? songs[nextIndex] : null;
```

Render the dome only for the active slide and only when `nextSong` exists. Keep it outside the active album's interactive layer, mark it `aria-hidden="true"`, and use `pointer-events-none`.

Position it immediately after the active image using `visual.imageGapPx`. Size its height from `visual.sideImageWidthPercent`, apply `visual.sideImageBlurPx` and `visual.sideImageOpacity`, and use a large left-side elliptical radius to create the dome. Drive its width and leftward reveal from the clamped progress while keeping the active art itself unchanged.

- [x] **Step 5: Run focused tests and confirm GREEN**

Run: `npm test -- tests/carousel.test.ts tests/carousel-motion.test.ts tests/carousel-dialkit.test.ts`

Expected: all carousel and DialKit tests pass.

### Task 3: Full verification and browser acceptance

**Files:**
- Verify: `frontend/src/app/components/SongResult.tsx`
- Verify: `frontend/src/app/lib/carousel.ts`
- Verify: `frontend/src/app/lib/carousel-motion.ts`
- Verify: `tests/carousel.test.ts`
- Verify: `tests/carousel-motion.test.ts`
- Verify: `tests/carousel-dialkit.test.ts`

**Interfaces:**
- Consumes: the complete feature from Tasks 1 and 2
- Produces: verification evidence for every visual and interaction requirement

- [x] **Step 1: Run automated verification**

Run:

```bash
npm test
npm run typecheck
npm run build --prefix frontend
git diff --check
```

Expected: zero test failures, both TypeScript projects pass, Vite exits `0`, and the diff has no whitespace errors.

- [x] **Step 2: Reuse the running local app**

Inspect listeners with `lsof -nP -iTCP:3000 -sTCP:LISTEN` and `lsof -nP -iTCP:3001 -sTCP:LISTEN`. Reuse them when they belong to `/Users/tanuj/Desktop/songrec`; start `npm run dev` only if the required listeners are absent.

- [x] **Step 3: Verify the rendered interaction**

In the browser, reach the final recommendation screen and confirm at mobile and desktop widths:

- Active artwork is centered at rest and after every committed navigation.
- No previous artwork is visible on the left.
- Exactly one blurred next-song dome is visible on the right.
- A 71-pixel first swipe cancels; a 72-pixel first swipe advances one song.
- A 47-pixel later swipe cancels; a 48-pixel later swipe advances one song.
- A short fast flick below threshold does not advance.
- A vertical-dominant gesture does not advance.
- Tapping active artwork produces no visual or navigation response.
- Arrow keys still move exactly one song.
- The last song wraps to the first.

- [x] **Step 4: Audit the final diff against the specification**

Read `docs/superpowers/specs/2026-08-02-carousel-suggestion-dome-design.md` requirement by requirement, inspect the final diff, and report any item without direct automated or browser evidence as incomplete rather than claiming completion.
