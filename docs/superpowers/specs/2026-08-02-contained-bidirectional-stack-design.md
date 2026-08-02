# Contained Bidirectional Discovery Stack

## Goal

Make the curated discovery stack feel directional and contained: a right swipe moves the front card into the stack from the right, a left swipe mirrors that motion from the left, and the card never travels outside the chamber before becoming the back card.

## Scope

- Change only the curated discovery stack transition and its development-only DialKit surface.
- Keep the existing 600ms/1300ms chamber reveal behavior unchanged.
- Keep the existing two-zone routing: a right swipe that starts on the active deck card advances within the deck; a right swipe that starts outside the active card returns to the primary recommendation.
- Keep left swipe advancement and keyboard behavior unchanged.
- Preserve reduced-motion behavior.

## Design

The gesture commit records the swipe direction used to advance the deck. The departing card receives a direction-specific contained transform: positive horizontal travel for a right swipe and negative horizontal travel for a left swipe. The travel is expressed as a percentage of the card width and constrained by the stack chamber's overflow clipping, so it remains an internal staging move. Once that animation completes, the deck index advances and the departing card is rendered in the back slot with an instantaneous re-entry state; the remaining cards animate to their new stack positions.

The primary recommendation does not use the departing-card animation. Entering the discovery deck continues to use the existing chamber transition. An outside right swipe continues to return to the primary recommendation without a card-stack departure.

## DialKit surface

Replace the existing broad `Curated deck` control surface with `Songrec stack interaction` and persist it under a new ID so stale layout values cannot leak into the new surface. It exposes only controls that directly tune this interaction:

- `interaction.swipeThreshold`: horizontal gesture threshold in pixels.
- `interaction.exitTravel`: contained directional staging distance as a percentage of the card width, clamped to 15% so the inset card remains fully inside the chamber.
- `interaction.exitTilt`: directional departure rotation in degrees.
- `timing.exitDuration`: departure duration in seconds.
- `timing.cardSpring`: settling spring/easing for the remaining stack.
- `stack.x`, `stack.y`, `stack.rotate`, `stack.scaleStep`, `stack.opacityStep`, and `stack.shadowBlur`: stack depth appearance.

Existing layout, chamber, finding-animation, and detail-copy controls are removed from this DialKit call. Their current runtime values remain unchanged in the component defaults so this task does not retune unrelated layout.

## Testing

- Add a pure helper test proving a right advance produces positive exit travel and a left advance produces negative exit travel.
- Add a pure helper test proving the contained travel is clamped to a safe internal maximum.
- Preserve the existing start-region routing tests.
- Run the focused discovery-deck suite, the full test command, both typechecks, the frontend production build, and `git diff --check`.
- Verify the live running app at 390x844 with one left and one right in-card swipe, confirming the active card advances and the card's animated bounding box remains within the chamber.
