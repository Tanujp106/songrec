# Mobile Swipe Arc Affordance Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the mobile right-side album preview with a visible, delicate white arc that nudges left to communicate swipe affordance, while preserving desktop behavior.

**Architecture:** Keep the existing desktop suggestion dome unchanged. Add a separate mobile-only SVG arc in `SongResult`, driven by six visual DialKit values in the existing `visual` group. The existing pointer gesture and Embla navigation remain the source of swipe behavior.

**Tech Stack:** React, Motion, TypeScript, DialKit, Tailwind responsive classes, Node test runner.

## Global Constraints

- The arc is rendered only at mobile widths; laptop/desktop rendering remains the current blurred album dome.
- The mobile cue contains no album image and no text.
- The arc has a visible white border with default stroke width `2px` and opacity `0.85`.
- The idle nudge is delicate: `4px` right-to-left movement over `1800ms`.
- Keep all controls inside the existing `SONGREC final carousel` `visual` DialKit group.
- Preserve existing centered snapping, threshold handling, and first-song right-swipe guard.

---

### Task 1: Add the mobile arc tuning contract

**Files:**
- Modify: `frontend/src/app/lib/carousel.ts`
- Modify: `tests/carousel.test.ts`
- Modify: `tests/carousel-dialkit.test.ts`

- [x] **Step 1: Write failing tests for the six arc controls**

Add assertions for these default values and DialKit tuples:

```ts
assert.equal(defaultFinalCarouselDials.visual.mobileArcStrokeWidthPx, 2);
assert.equal(defaultFinalCarouselDials.visual.mobileArcOpacity, 0.85);
assert.equal(defaultFinalCarouselDials.visual.mobileArcWidthPx, 28);
assert.equal(defaultFinalCarouselDials.visual.mobileArcHeightPercent, 46);
assert.equal(defaultFinalCarouselDials.visual.mobileArcNudgeDistancePx, 4);
assert.equal(defaultFinalCarouselDials.visual.mobileArcNudgeDurationMs, 1800);
```

Require the component source to contain a `mobile-swipe-arc` SVG branch and no mobile arc text/image content.

- [x] **Step 2: Run the focused tests and confirm RED**

Run: `npm test -- tests/carousel.test.ts tests/carousel-dialkit.test.ts`

Expected: FAIL because the six fields and mobile arc branch do not exist yet.

- [x] **Step 3: Add the typed DialKit defaults and ranges**

Extend only `FinalCarouselDialValues.visual` and `finalCarouselDialConfig.visual` with:

```ts
mobileArcStrokeWidthPx: [2, 1, 4, 1],
mobileArcOpacity: [0.85, 0.4, 1, 0.01],
mobileArcWidthPx: [28, 16, 48, 1],
mobileArcHeightPercent: [46, 25, 70, 1],
mobileArcNudgeDistancePx: [4, 0, 10, 1],
mobileArcNudgeDurationMs: [1800, 800, 3200, 100],
```

- [x] **Step 4: Run the focused tests and confirm GREEN for the contract**

Run: `npm test -- tests/carousel.test.ts tests/carousel-dialkit.test.ts`

Expected: default and DialKit contract assertions pass; the component-branch assertion remains red until Task 2.

### Task 2: Render the mobile-only white arc

**Files:**
- Modify: `frontend/src/app/components/SongResult.tsx`

- [x] **Step 1: Add the mobile SVG arc branch**

Keep the existing blurred `suggestion-dome` branch hidden below `sm` and unchanged at desktop. Add a sibling branch with `data-slot="mobile-swipe-arc"`, `block sm:hidden`, `pointer-events-none`, and a Motion SVG containing only this outlined path:

```tsx
<path d="M 26 2 C 4 24, 4 76, 26 98" fill="none" stroke="white" strokeLinecap="round" />
```

Position it at the same right-side cue anchor, use the arc width/height/opacity/stroke dials, and drive the CSS `mobile-swipe-arc-nudge` keyframe with the DialKit distance/duration custom properties. Disable the animation when reduced motion is enabled.

- [x] **Step 2: Run focused tests and confirm GREEN**

Run: `npm test -- tests/carousel.test.ts tests/carousel-dialkit.test.ts tests/carousel-motion.test.ts`

Expected: all focused carousel tests pass.

### Task 3: Verify mobile-only visual behavior

**Files:**
- Verify: `frontend/src/app/components/SongResult.tsx`
- Verify: `frontend/src/app/lib/carousel.ts`
- Verify: `tests/carousel.test.ts`
- Verify: `tests/carousel-dialkit.test.ts`

- [x] **Step 1: Run the complete automated checks**

Run: `npm test`, `npm run typecheck`, `npm run build --prefix frontend`, and `git diff --check`.

- [x] **Step 2: Verify at phone width using the already-running port**

At a 390px viewport, confirm the right cue is an empty visible white arc with no image and no “More suggestions” text, and that it nudges only a few pixels from right to left. Swipe left and confirm the normal centered song transition remains intact.

- [x] **Step 3: Verify desktop preservation**

At the normal desktop viewport, confirm the existing blurred album suggestion dome remains present and the mobile arc is not rendered.
