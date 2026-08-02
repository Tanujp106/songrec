# Contained Bidirectional Discovery Stack Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the curated discovery stack move the front card directionally into the back slot from either swipe side while exposing only stack-specific DialKit controls.

**Architecture:** Keep deck state and gesture classification in `discovery-deck.ts`, adding a pure direction-to-transform helper that clamps staging travel to an internal limit. Keep `SongResult.tsx` responsible for pointer direction state and Framer Motion rendering, passing the captured direction into the existing departure/re-entry state machine. Replace the broad `useDiscoveryDeckDial` groups with a focused stack interaction surface while preserving unrelated runtime layout values as constants.

**Tech Stack:** React, TypeScript, `motion/react`, DialKit, Node test runner through `tsx`.

## Global Constraints

- Preserve the existing 600ms/1300ms discovery chamber reveal behavior.
- Preserve two-zone routing: in-card right swipes advance the deck; outside right swipes return to primary.
- Preserve left-swipe advancement, keyboard behavior, and reduced-motion behavior.
- Keep animated properties to `transform` and `opacity`; do not animate layout properties for the card departure.
- Work in `/Users/tanuj/Desktop/songrec`; do not start a second browser/dev server when port 3000 is already running.
- Do not commit or push unless explicitly requested.

---

### Task 1: Add the directional contained-motion contract

**Files:**
- Modify: `frontend/src/app/lib/discovery-deck.ts:1-205`
- Test: `tests/discovery-deck.test.ts:1-210`

**Interfaces:**
- Consumes: `DiscoveryGesture`, `DiscoverySwipeAction`, and the existing stack tuning values.
- Produces: `getDiscoveryExitTravel(gesture: DiscoveryGesture, requestedPercent: number): number`.

- [ ] **Step 1: Write the failing test**

Add the import for the new helper and append:

```ts
test("stages advancing cards inside the stack in the swipe direction", () => {
  assert.equal(getDiscoveryExitTravel("next", 24), -24);
  assert.equal(getDiscoveryExitTravel("previous", 24), 24);
  assert.equal(getDiscoveryExitTravel("next", 80), -15);
  assert.equal(getDiscoveryExitTravel("previous", 80), 15);
  assert.equal(getDiscoveryExitTravel(null, 24), 0);
});
```

- [ ] **Step 2: Run the focused test to verify it fails**

Run `npm test -- tests/discovery-deck.test.ts`. Expected: failure because `getDiscoveryExitTravel` is not exported yet.

- [ ] **Step 3: Implement the minimal helper**

Add to `discovery-deck.ts`:

```ts
const DISCOVERY_MAX_INTERNAL_EXIT_TRAVEL_PERCENT = 15;

export function getDiscoveryExitTravel(
  gesture: DiscoveryGesture,
  requestedPercent: number,
): number {
  if (gesture === null) return 0;
  const travel = Math.max(
    0,
    Math.min(DISCOVERY_MAX_INTERNAL_EXIT_TRAVEL_PERCENT, Math.abs(requestedPercent)),
  );
  return gesture === "next" ? -travel : travel;
}
```

- [ ] **Step 4: Run the focused test to verify it passes**

Run the same focused command and confirm the new test plus all existing discovery-deck tests pass.

### Task 2: Replace the broad DialKit surface with stack controls

**Files:**
- Modify: `frontend/src/app/components/useDiscoveryDeckDial.ts:1-54`
- Modify: `frontend/src/app/components/SongResult.tsx:184-247,353-565`

**Interfaces:**
- Consumes: the `useDiscoveryDeckDial` return shape used by `SongResult`.
- Produces: a `Songrec stack interaction` preset exposing only `timing`, `stack`, and `interaction` fields.

- [ ] **Step 1: Replace the DialKit groups**

Change the DialKit label to `Songrec stack interaction`, use persistence ID `songrec:stack-interaction:v1`, and remove `layout`. Keep these controls:

```ts
timing: {
  exitDuration: [0.26, 0.12, 0.5, 0.01] as [number, number, number, number],
  cardSpring: { type: "spring" as const, stiffness: 260, damping: 28, mass: 0.9 },
},
stack: {
  x: [4, 0, 16, 1] as [number, number, number, number],
  y: [3, 0, 16, 1] as [number, number, number, number],
  rotate: [2.8, 0, 10, 0.2] as [number, number, number, number],
  scaleStep: [0.02, 0, 0.1, 0.01] as [number, number, number, number],
  opacityStep: [0.1, 0, 0.3, 0.01] as [number, number, number, number],
  shadowBlur: [32, 0, 80, 2] as [number, number, number, number],
},
interaction: {
  swipeThreshold: [72, 24, 160, 2] as [number, number, number, number],
  exitTravel: [12, 4, 15, 1] as [number, number, number, number],
  exitTilt: [5, -12, 12, 1] as [number, number, number, number],
},
```

- [ ] **Step 2: Preserve non-stack runtime values locally**

Add named constants near `RESULT_MAX_WIDTH` for the removed layout/timing values, preserving their current runtime values: `cardWidthVw=80`, `cardHeightVh=55`, `cardMaxPx=560`, `topGap=40`, `detailGap=12`, `detailHeight=120`, `radius=24`, `cardInset=12`, `chamberPeek=20`, `chamberDelay=1300`, and `findingDuration=1400`. Replace only the removed `dial.layout.*` and `dial.timing.chamberDelay/findingDuration` reads with those constants.

### Task 3: Make departure direction-aware and contained

**Files:**
- Modify: `frontend/src/app/components/SongResult.tsx:190-350,482-550`
- Test: `tests/discovery-deck.test.ts:97-125`

**Interfaces:**
- Consumes: `getDiscoveryExitTravel`, `dial.interaction.exitTravel`, and the existing departure/re-entry state machine.
- Produces: a signed internal departure and a back-slot snap after the transition.

- [ ] **Step 1: Add the bidirectional routing regression**

Append to the routing tests:

```ts
test("keeps both in-card swipe directions on the deck advance path", () => {
  assert.equal(getDiscoverySwipeAction("next", "deck", true), "advance");
  assert.equal(getDiscoverySwipeAction("previous", "deck", true), "advance");
  assert.equal(getDiscoverySwipeAction("previous", "deck", false), "return");
});
```

- [ ] **Step 2: Capture the advancing swipe direction**

Add `const [departingGesture, setDepartingGesture] = useState<DiscoveryGesture>(null);`. Update `enterOrAdvance(gesture = "next")` to set it before starting a departure, clear it on primary/reduced-motion paths, reset it when `songs` changes, and clear it after `completeDeckShuffle`. Pass the captured direction into `enterOrAdvance(direction)` from `commitGesture`; leave the outside-right `return` path unchanged.

- [ ] **Step 3: Render the signed contained departure**

Import `getDiscoveryExitTravel` and replace the current fixed negative departure animation with:

```ts
const departingX = getDiscoveryExitTravel(
  departingGesture,
  dial.interaction.exitTravel,
);

animate={motionPhase === "departing"
  ? {
      x: departingX,
      y: 0,
      rotate: departingGesture === "previous"
        ? dial.interaction.exitTilt
        : -dial.interaction.exitTilt,
      scale: 0.98,
      opacity: 0.96,
    }
  : {
      x: layout.x,
      y: layout.y,
      rotate: layout.rotate,
      scale: layout.scale,
      opacity: layout.opacity,
    }}
```

The chamber remains `overflow-hidden`; the helper clamps travel to 15%, which keeps the 12%-inset card fully inside the chamber. Keep the re-entering phase at zero duration so the card snaps into the back slot without an outside-to-inside jump.

- [ ] **Step 4: Run focused tests and typechecks**

Run `npm test -- tests/discovery-deck.test.ts` and `npm run typecheck`. Expected: focused discovery tests pass and both root/frontend TypeScript checks exit 0.

### Task 4: Verify the full behavior and live mobile geometry

**Files:**
- Verify: `frontend/src/app/components/SongResult.tsx`
- Verify: `frontend/src/app/components/useDiscoveryDeckDial.ts`
- Verify: `frontend/src/app/lib/discovery-deck.ts`

- [ ] **Step 1: Run the full test suite**

Run `npm test`. Record any unrelated pre-existing failure separately; do not broaden this task to candidate-pool expectations.

- [ ] **Step 2: Build the frontend**

Run `npm run build --prefix frontend`. Expected: Vite production build exits 0.

- [ ] **Step 3: Check the diff**

Run `git diff --check`.

- [ ] **Step 4: Verify at 390x844 using the running port 3000**

Enter the curated deck, perform a left swipe from the active card and a right swipe from the active card, and inspect `[data-slot="discovery-card"][data-active="true"]` before/after. Confirm both advance the deck and the departing card stays within the chamber. Perform a right swipe from outside the active card and confirm it returns to primary.

- [ ] **Step 5: Review motion against the approved contract**

Confirm directional movement, contained geometry, transform/opacity-only departure, existing interruption behavior, and reduced-motion safety. Report exact command results and any unrelated existing failure.
