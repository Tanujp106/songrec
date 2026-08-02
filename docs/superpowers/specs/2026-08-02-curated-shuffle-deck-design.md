# Curated Shuffle Deck Design

## Intent

The final Songrec screen presents one confident recommendation first. It must not announce or visually expose that four additional recommendations already exist. A partially visible dotted square at the right edge invites a deliberate left swipe. That square then becomes a centered curation chamber, briefly shows a finding state, and resolves into a four-card deck that the user shuffles manually.

## Interaction Contract

- Initial state: song 0 is centered with its existing title, artist, album, Spotify action, and start-over action. No count, pagination dots, neighboring album art, or carousel preview is shown.
- Discovery cue: when at least two songs exist, a square dashed container peeks in from the right. It contains no album art or copy at rest.
- Enter discovery: a deliberate horizontal left swipe of at least 72px moves the original recommendation left and centers the dotted container. Vertical-dominant gestures and short swipes cancel.
- Finding state: the first discovery entry shows a reduced-motion-safe card-gathering animation for 1400ms. The heading becomes “More {mood} songs you might like”; the detail area shows “Finding more songs for this mood” and “Hang on a second, twin.” with a shimmer treatment.
- Deck state: after finding completes, songs 1 through 4 appear as a stacked deck inside the same dotted container. Only the top card is fully legible; lower cards are offset, rotated, and partially occluded.
- User shuffle: a deliberate left swipe on the top card moves it to the back and promotes the next card. The app never auto-shuffles. The deck wraps after its final card.
- Return: a deliberate right swipe from the deck returns directly to song 0. Re-entering discovery during the same result session shows the already-curated deck immediately; it does not replay fake work.
- Reset: a new songs list or Start over resets the view, finding state, and deck index.
- Keyboard: Arrow Right enters discovery or advances the deck; Arrow Left returns to the original recommendation.

## Visual Contract

- Preserve the current final-screen vertical hierarchy, centered primary artwork size, detail slot, and bottom action geometry.
- The discovery chamber uses the same square size and corner radius as the primary album image, with a dashed white border and transparent interior.
- At rest, only a narrow right-edge portion of the chamber is visible. It is a nudge, not a second visible option.
- During finding, four translucent rounded card silhouettes gather and cross through the center. Text shimmer lives only in the temporary detail copy.
- In deck state, the top album cover stays within the dotted chamber. Three lower cards remain visible only as small rotated or offset edges.
- Motion uses the existing spring language. Reduced-motion mode removes continuous shimmer and collapses finding motion to a brief opacity change while retaining the state change.

## Architecture

frontend/src/app/lib/discovery-deck.ts owns the pure state transitions and gesture decisions. It exports the view model, gesture threshold helper, deck-song selection, deck wrapping, and layout constants so the behavior can be tested without a browser.

frontend/src/app/components/SongResult.tsx owns pointer capture, the one-time finding timer, rendering, and Motion orchestration. It no longer imports or renders the Embla carousel. The first song and the discovery chamber are two explicit presentation states rather than five peer slides.

frontend/src/styles/index.css owns only the shimmer and finding-card keyframes. Motion component transitions remain in SongResult.tsx.

## Edge Cases

- Zero songs: preserve the existing empty-song fallback presentation.
- One song: render only the original recommendation and no discovery cue.
- Two to four songs: render only the available secondary songs in the deck.
- Five or more songs: use only the first four secondary songs so the experience remains one primary plus four curated alternatives.
- Pointer cancellation or vertical scrolling: reset transient drag state without changing view or deck order.
- Repeated discovery entry: do not replay finding after the deck has been revealed once for the current songs list.

## Verification

- Unit tests cover horizontal gesture thresholds, vertical cancellation, secondary-song limiting, deck wrapping, discovery transitions, one-time finding behavior, shuffle-only-on-user-action, and return to song 0.
- Existing detail-motion behavior remains covered.
- Full test suite, both TypeScript checks, frontend production build, root production build, and git diff --check must pass.
- Browser verification uses an already-running Songrec port when available and checks the initial cue, centered finding chamber, 1.4-second transition, manual left-swipe shuffle, right-swipe return, no automatic shuffling, responsive fit, and reduced-motion fallback.
