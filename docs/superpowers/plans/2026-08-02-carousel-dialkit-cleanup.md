# Songrec Final Carousel DialKit Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Simplify the final carousel DialKit surface to meaningful tunable controls while locking correctness-sensitive behavior and removing dead customization paths.

**Architecture:** Keep one typed DialKit configuration in `frontend/src/app/lib/carousel.ts`, pass its values through the existing `SongResult` layout and Motion pipelines, and keep Embla invariants hard-coded in `getFinalCarouselOptions`. Remove visual layers and hooks that no longer have a meaningful tuning role.

**Tech Stack:** React 18, TypeScript, Vite, Embla Carousel React 8.6.0, Motion, DialKit, Node test runner.

## Global Constraints

- Work in the active checkout `/Users/tanuj/Desktop/songrec`.
- Keep DialKit development-only and use the normal/default DialKit UI.
- Keep the active album centered, inert, and fixed at scale 1.
- Keep Embla loop behavior, discrete snapping, and center alignment as product invariants.
- Preserve the fixed detail slot and existing recommendation behavior.
- Do not add a new dependency or custom DialKit UI.

---

### Task 1: Pin the reduced surface with failing tests

**Files:**
- Modify: `tests/carousel.test.ts`
- Modify: `tests/carousel-motion.test.ts`
- Modify: `tests/carousel-dialkit.test.ts`

- [ ] Add assertions for the exact five groups: `geometry`, `appearance`, `image`, `motion`, and `interaction`.
- [ ] Assert removed names are absent: `tilt`, `track`, `edgeCue`, `activeScale`, `shadowY`, `shadowBlurPx`, `shadowOpacity`, `centerActive`, and `alignStart`.
- [ ] Assert `getFinalCarouselOptions` always returns `align: "center"`, `dragFree: false`, `skipSnaps: false`, and `duration` from the interaction dial.
- [ ] Assert active motion is `scale: 1`, `opacity: 1`, and `blur(0px)`; assert inactive appearance maps from the reduced appearance group.
- [ ] Run:
```bash
cd /Users/tanuj/Desktop/songrec
npm test -- tests/carousel.test.ts tests/carousel-motion.test.ts tests/carousel-dialkit.test.ts
```
Expected: FAIL because the current config still contains the removed groups and options.

### Task 2: Replace the DialKit model with the minimal typed surface

**Files:**
- Modify: `frontend/src/app/lib/carousel.ts`
- Modify: `frontend/src/app/lib/carousel-motion.ts`

- [ ] Replace `tilt` with `motion`, remove `track` and `edgeCue`, remove active/shadow appearance fields, and rename `normalDragThresholdPx` to `subsequentSwipeDragThresholdPx`.
- [ ] Add `snapDuration` to `interaction`, typed for Embla's `duration` option.
- [ ] Keep exact defaults: geometry 55/70/40/32/120/12; inactive appearance 0.84/0.82/0/32; crop 50/50; motion spring 260/30/1; interaction thresholds 48/12 and snap duration 25.
- [ ] Make `getFinalCarouselOptions` return hard-coded `align: "center"`, `containScroll: false`, `dragFree: false`, `loop: songCount > 1`, `skipSnaps: false`, plus the configured threshold and duration.
- [ ] Make `getFinalCarouselLayout` return only geometry values and the existing fixed album max-width cap.

### Task 3: Remove dead wiring and connect the reduced controls

**Files:**
- Modify: `frontend/src/app/components/SongResult.tsx`
- Modify: `tests/carousel-dialkit.test.ts`

- [ ] Remove the disabled edge-cue overlay and all shadow-layer rendering.
- [ ] Update the Motion transition to consume `carouselDials.motion`.
- [ ] Keep active artwork inert with no pointer/gyro/touch wiring; use the fixed active motion values.
- [ ] Keep inactive side-card selection and the existing fixed detail/action layout.
- [ ] Update the DialKit persistence id/key to `v6` so stale removed controls cannot be restored.
- [ ] Assert the reduced wiring and absence of removed source paths.

### Task 4: Verify the full boundary

**Files:**
- Modify only scoped carousel files if a verification failure exposes a concrete issue.

- [ ] Run `npm test`.
- [ ] Run `npm run typecheck`.
- [ ] Run `npm run build --prefix frontend`.
- [ ] Run `git diff --check`.
- [ ] Confirm the existing listeners remain on ports 3000/3001 and return HTTP 200.
- [ ] Review the scoped diff and preserve unrelated existing work.

## Self-review

Every requested cleanup maps to a task: dead controls are removed, missing snap-duration tuning is added, product invariants remain locked, and tests verify both the reduced surface and live wiring.
