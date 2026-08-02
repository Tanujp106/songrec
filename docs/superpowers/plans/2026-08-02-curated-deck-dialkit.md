# Curated Deck DialKit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a development-only DialKit panel that tunes the final curated discovery deck's geometry, motion, card stack, and gesture thresholds in real time.

**Architecture:** Keep DialKit mounted globally through the existing development-only `DialRoot`. Add a small hook beside the result component that owns the stable persisted panel and returns typed live tuning values. Feed those values into existing Motion props and the pure discovery-deck gesture/layout helpers, leaving production output and the user-only shuffle state machine unchanged.

**Tech Stack:** React, TypeScript, Motion, DialKit 1.4.3, Node test runner.

## Global Constraints

- Development-only: no DialKit panel or persisted tuning hook in production output.
- Keep the primary recommendation centered; the dotted chamber stays hidden for a default 1300ms and enters from the right edge.
- Never auto-shuffle; only a deliberate left swipe advances the stack and a right swipe returns to the primary song.

---

### Task 1: Make the discovery primitives accept visual and interaction tuning

**Files:**
- Modify: `frontend/src/app/lib/discovery-deck.ts`
- Modify: `tests/discovery-deck.test.ts`

**Interfaces:**
- Produces: `DiscoveryDeckTuning`, `DEFAULT_DISCOVERY_DECK_TUNING`, `getDiscoveryGesture(input, swipeThresholdPx?)`, and `getDeckCardLayout(position, tuning?)`.

- [ ] **Step 1: Write failing tests**

```ts
test("uses caller-supplied gesture and stack tuning without changing defaults", () => {
  assert.equal(getDiscoveryGesture({ startX: 100, endX: 55, startY: 0, endY: 0 }, 44), "next");
  assert.deepEqual(getDeckCardLayout(1, { ...DEFAULT_DISCOVERY_DECK_TUNING, stackX: 9 }), {
    x: -9, y: -3, rotate: -2.8, scale: 0.98, opacity: 0.9,
  });
});
```

- [ ] **Step 2: Run the focused test and confirm it fails**

Run: `npm test -- tests/discovery-deck.test.ts`

- [ ] **Step 3: Implement optional tuning inputs**

Export immutable defaults for spacing, reveal/finding timings, swipe threshold, stack offsets, transforms, opacity, and Motion spring defaults. Preserve the current values as defaults, use the optional swipe threshold in gesture recognition, and derive behind-card layouts from the tuning object.

- [ ] **Step 4: Run the focused test and confirm it passes**

Run: `npm test -- tests/discovery-deck.test.ts`

### Task 2: Register a stable development-only result-screen tuning panel

**Files:**
- Create: `frontend/src/app/components/useDiscoveryDeckDial.ts`
- Modify: `frontend/src/app/components/SongResult.tsx`

**Interfaces:**
- Consumes: `DEFAULT_DISCOVERY_DECK_TUNING`.
- Produces: `useDiscoveryDeckDial()` returning all live values used by the result screen.

- [ ] **Step 1: Add the hook**

Call `useDialKit("Curated deck", config, { id: "songrec:curated-deck:v1", persist: true })` only in development. Group controls as Layout, Timing, Stack, and Interaction. Return exact defaults outside development so production behavior remains unchanged.

- [ ] **Step 2: Wire values into `SongResult`**

Use the dial values for top/detail/card/chamber spacing, border radius, chamber delay, finding duration, panel/card springs, card stack values, card exit distance/tilt/duration, and swipe threshold. Keep heading/detail copy transitions and state-machine behavior unchanged.

- [ ] **Step 3: Add runtime-safe guardrails**

Clamp the four card layout levels to avoid invalid scale/opacity values, and preserve reduced-motion zero-duration behavior.

### Task 3: Verify the panel and default experience

**Files:**
- Test: `tests/discovery-deck.test.ts`

- [ ] **Step 1: Run focused behavior tests**

Run: `npm test -- tests/discovery-deck.test.ts`

- [ ] **Step 2: Type-check and inspect formatting**

Run: `npm run typecheck && git diff --check`

- [ ] **Step 3: Verify the running app on port 3000**

Open the existing development app, reach the result screen, confirm the `Curated deck` DialKit section exposes all four groups, change one visible spacing dial, then reset it. Confirm the dotted chamber remains absent until 1.3 seconds after result arrival and no browser console errors occur.
