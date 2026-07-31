# Embla Infinite Album Carousel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the five-song result view into a continuously draggable, infinitely looping album-art carousel while active song details remain stationary and blur-crossfade on selection.

**Architecture:** Reuse the installed shadcn-style `Carousel` wrapper, which is backed by Embla. The carousel track contains only album-art slides and uses `loop: true`; Embla's selection event updates `activeIndex`, which drives the existing fixed detail slot and song actions.

**Tech Stack:** React, TypeScript, Embla Carousel React 8.6.0, Motion 12.23.24, Node test runner.

## Global Constraints

- Reuse `frontend/src/app/components/ui/carousel.tsx`; do not add a carousel package.
- Render one full album-art slide with a small, blurred right-edge preview during drag.
- Keep title, artist, album, and actions horizontally fixed; retain their blur/opacity transition.
- Enable `loop: true`; five songs wrap through one physical drag track.
- Preserve keyboard arrows and reduced-motion behavior.

---

### Task 1: Define Embla selection behavior

**Files:**
- Modify: `tests/carousel.test.ts`
- Modify: `frontend/src/app/lib/carousel.ts`

**Interfaces:**
- Produces: `getCarouselIndex(selectedSnap: number, length: number): number`.
- Consumes: existing index normalization shared by next/previous navigation.

- [x] **Step 1: Write the failing test**

```ts
test("normalizes Embla's selected snap for a looping five-song carousel", () => {
  assert.equal(getCarouselIndex(5, 5), 0);
  assert.equal(getCarouselIndex(-1, 5), 4);
});
```

- [x] **Step 2: Confirm the test fails because the export is absent**

Run: `npm test -- tests/carousel.test.ts`

- [x] **Step 3: Add the helper**

```ts
export function getCarouselIndex(selectedSnap: number, length: number): number {
  return normalizeIndex(selectedSnap, length);
}
```

- [x] **Step 4: Confirm the focused test passes**

Run: `npm test -- tests/carousel.test.ts`

### Task 2: Replace index-swapped album art with the shadcn Embla track

**Files:**
- Modify: `frontend/src/app/components/SongResult.tsx:1-430`
- Test: `tests/carousel.test.ts`

**Interfaces:**
- Consumes: `Carousel`, `CarouselContent`, `CarouselItem`, and `CarouselApi` from `components/ui/carousel.tsx`.
- Consumes: `getCarouselIndex(selectedSnap, songs.length)`.
- Produces: an `activeIndex` driven by Embla's `select` event instead of pointer start/end coordinates.

- [x] **Step 1: Write the loop-boundary test**

```ts
test("keeps the detail index in range after Embla loops", () => {
  assert.equal(getCarouselIndex(9, 5), 4);
  assert.equal(getCarouselIndex(10, 5), 0);
});
```

- [x] **Step 2: Implement the carousel track**

```tsx
<Carousel opts={{ align: "start", loop: songs.length > 1 }} setApi={setCarouselApi}>
  <CarouselContent className="ml-0">
    {songs.map((candidate) => <CarouselItem className="pl-0" />)}
  </CarouselContent>
</Carousel>
```

Connect Embla's `select` event to `setActiveIndex(getCarouselIndex(api.selectedScrollSnap(), songs.length))`; send arrow keys to `scrollPrev` and `scrollNext`; remove pointer-coordinate gesture detection and the manually positioned next-preview element. Keep only album art in `CarouselContent`; keep the existing detail slot and actions outside it.

- [x] **Step 3: Confirm tests and typecheck pass**

Run: `npm test -- tests/carousel.test.ts && npm run typecheck`

### Task 3: Verify the loop and stationary details

**Files:**
- Verify: `frontend/src/app/components/SongResult.tsx`
- Verify: `frontend/src/app/components/ui/carousel.tsx`

- [x] **Step 1: Run the full suite**

Run: `npm test && npm run typecheck && npm run build && npm run build --prefix frontend && git diff --check`

- [x] **Step 2: Verify with the already-running Songrec port**

Confirm drag follows the pointer, the right edge previews the blurred next album, repeated drags wrap, and metadata blur-crossfades without horizontal movement.

- [x] **Step 3: Commit the verified implementation**

```bash
git add frontend/src/app/components/SongResult.tsx frontend/src/app/lib/carousel.ts tests/carousel.test.ts docs/superpowers/plans/2026-08-01-embla-infinite-carousel.md
git commit -m "feat: use Embla for infinite song carousel"
```
