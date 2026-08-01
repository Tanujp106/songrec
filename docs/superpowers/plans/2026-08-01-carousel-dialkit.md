# Final Carousel DialKit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a development-only DialKit panel that tunes the final Songrec carousel and defaults it to a smaller active cover with visible adjacent covers.

**Architecture:** Keep Embla as the single physical carousel track. Store tuning defaults and layout/option translation in `frontend/src/app/lib/carousel.ts`; read them through one stable `useDialKit` panel in `SongResult`; mount one `DialRoot` in `App` and import the standard DialKit stylesheet from `main.tsx`.

**Tech Stack:** React 18, TypeScript, Vite, Embla Carousel React 8.6.0, Motion 12.23.24, DialKit 1.4.3, Node test runner.

## Global Constraints

- DialKit is development-only; do not enable production rendering.
- Use the standard DialKit surface with `DialRoot`, `useDialKit`, and `satisfies DialConfig`.
- Keep the active carousel as one Embla track with looped snapping; do not add a separate manually positioned preview layer.
- Preserve the default 40px track gap and existing fixed song-detail behavior.
- Preserve unrelated changes under `frontend/public/`.

---

### Task 1: Add the dependency and carousel tuning model

**Files:**
- Modify: `frontend/package.json`
- Modify: `frontend/package-lock.json`
- Modify: `frontend/src/app/lib/carousel.ts`
- Modify: `frontend/src/app/lib/carousel-motion.ts`
- Test: `tests/carousel.test.ts`
- Test: `tests/carousel-motion.test.ts`

**Interfaces:**
- Produces `FinalCarouselDialValues`, `defaultFinalCarouselDials`, `getFinalCarouselLayout(dials)`, `getFinalCarouselOptions(songCount, dials)`, and `getAlbumSlideMotion(tilt, isActive, dials)`.

- [ ] **Step 1: Write the failing tests**

Add assertions that the default tuning uses a 78% slide basis, 100% cover width, 40px gap, and existing loop/snap behavior, and that active/inactive Motion values use configured scale, opacity, blur, and tilt spring values.

- [ ] **Step 2: Run the focused tests and verify the expected failure**

```bash
npm test -- tests/carousel.test.ts tests/carousel-motion.test.ts
```

Expected: FAIL because the tuning values and new function signatures do not exist yet.

- [ ] **Step 3: Install DialKit and implement the typed tuning model**

Run `npm install --prefix frontend dialkit@^1.4.3`. Add typed defaults and preserve the 40px gap. `getFinalCarouselLayout(dials)` should return CSS values for slide basis, cover width, gap, top gap, and detail slot sizing. `getFinalCarouselOptions(songCount, dials)` should preserve `loop: songCount > 1`, map `dragFree` and `skipSnaps`, and map the configured alignment.

- [ ] **Step 4: Connect Motion mapping to the same source of truth**

Extend `getAlbumSlideMotion` so inactive slides can be tuned without changing the Embla track, and keep all covers sharp by default with `inactiveBlurPx: 0`.

- [ ] **Step 5: Run the focused tests and verify they pass**

Run the same focused test command and expect all carousel and motion assertions to pass.

- [ ] **Step 6: Commit the model and dependency**

```bash
git add frontend/package.json frontend/package-lock.json frontend/src/app/lib/carousel.ts frontend/src/app/lib/carousel-motion.ts tests/carousel.test.ts tests/carousel-motion.test.ts
git commit -m "feat: add carousel tuning model"
```

### Task 2: Mount the standard development DialKit surface

**Files:**
- Modify: `frontend/src/app/App.tsx`
- Modify: `frontend/src/main.tsx`
- Test: `tests/carousel-dialkit.test.ts`

**Interfaces:**
- Consumes `FinalCarouselDialValues` and `defaultFinalCarouselDials`.
- Produces one `useDialKit("SONGREC final carousel", config, { id: "songrec-final-carousel" })` panel and one development-only `<DialRoot />`.

- [ ] **Step 1: Write the failing wiring test**

Assert that `App.tsx` imports `DialRoot`, renders it only under `import.meta.env.DEV`, imports `useDialKit` and `DialConfig`, defines the geometry/appearance/image/tilt/track/edgeCue groups, and uses the stable panel id. Assert that `main.tsx` imports `dialkit/styles.css`.

- [ ] **Step 2: Run the wiring test and verify the expected failure**

```bash
npm test -- tests/carousel-dialkit.test.ts
```

Expected: FAIL because the DialKit root, stylesheet, and panel are not wired yet.

- [ ] **Step 3: Implement the standard DialKit wiring**

Replace the null `DevTools` placeholder with a development-only `DialRoot` rendered from `App`. Define a mutable config using `satisfies DialConfig` and pass the values returned by `useDialKit` into `SongResult` through the existing render path. Keep the panel name and id exact.

- [ ] **Step 4: Run the wiring test and typecheck**

```bash
npm test -- tests/carousel-dialkit.test.ts
npm run typecheck
```

- [ ] **Step 5: Commit the DialKit mount**

```bash
git add frontend/src/app/App.tsx frontend/src/main.tsx tests/carousel-dialkit.test.ts
git commit -m "feat: mount development carousel dialkit"
```

### Task 3: Wire every control into the final screen

**Files:**
- Modify: `frontend/src/app/components/SongResult.tsx`
- Test: `tests/carousel-dialkit.test.ts`

**Interfaces:**
- Consumes the DialKit values from the `useDialKit` return object.
- Produces live geometry, track, Motion, image crop, detail spacing, and edge-cue updates on the final screen.

- [ ] **Step 1: Extend the wiring assertions**

Assert that geometry values feed `getFinalCarouselLayout`, track values feed `getFinalCarouselOptions`, Motion values feed `getAlbumSlideMotion`, image values feed `objectPosition`, and edge-cue values feed the existing overlay style.

- [ ] **Step 2: Run the test and verify it fails on missing live connections**

```bash
npm test -- tests/carousel-dialkit.test.ts
```

- [ ] **Step 3: Connect the controls without changing product structure**

Call `useDialKit` at the top level of `SongResult`, derive layout/options from the returned dials, pass track options to `Carousel`, apply slide basis and cover width to the existing Embla items, apply appearance/image controls to the current album frame/image, and apply edge-cue controls to the existing right-edge overlay. Keep details outside Embla content.

- [ ] **Step 4: Run focused tests and typecheck**

```bash
npm test -- tests/carousel.test.ts tests/carousel-motion.test.ts tests/carousel-dialkit.test.ts
npm run typecheck
```

- [ ] **Step 5: Commit the live control connections**

```bash
git add frontend/src/app/components/SongResult.tsx tests/carousel-dialkit.test.ts
git commit -m "feat: wire carousel controls to dialkit"
```

### Task 4: Verify the real runtime boundary

**Files:**
- No source changes expected unless verification finds a concrete defect.

- [ ] **Step 1: Confirm the existing listener belongs to the active checkout**

```bash
lsof -nP -a -p "$(lsof -tiTCP:3000 -sTCP:LISTEN | head -1)" -d cwd -Fn
```

If it is not `/Users/tanuj/Desktop/songrec/frontend`, stop only that stale listener and relaunch the existing dev command on port 3000. Do not create a fallback port.

- [ ] **Step 2: Run the full verification suite**

```bash
npm test
npm run typecheck
npm run build --prefix frontend
git diff --check
```

- [ ] **Step 3: Verify the live panel and visual result**

Use the existing `http://localhost:3000` tab. Navigate to the final result screen, confirm the standard DialKit panel is visible in development, change `geometry.slideWidthPercent` and `geometry.coverWidthPercent`, and confirm the active cover shrinks/grows while neighboring covers appear/disappear. Confirm detail text and action buttons remain horizontally fixed.

- [ ] **Step 4: Inspect the final diff and status**

```bash
git status --short
git diff --stat
```

Confirm only approved DialKit/carousel files changed and existing `frontend/public/` untracked assets remain untouched.
