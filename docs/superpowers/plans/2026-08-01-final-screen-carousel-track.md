# Final-screen carousel track fix

## Goal

Make the final recommendation screen feel like one continuous, infinite carousel: the active album is the full card, the next album is visibly peeking from the right, and a horizontal swipe moves the track to the next snapped card without moving the fixed heading, song-detail slot, or actions.

## Plan

1. Stabilize Embla ownership. Keep the shadcn carousel as the single gesture surface, remove touch listeners from album tilt that compete with Embla, and clean up all Embla event subscriptions.
2. Make the track itself create the right-edge peek. Configure one-card snapping with `loop`, no free dragging, and an explicit peek/track layout rather than a separately animated preview card.
3. Keep content transitions independent of track motion. Update the selected song after Embla settles and use the existing anchored blur crossfade for the title, artist, and album text.
4. Add focused regression coverage for loop options and index normalization, then run the full test, typecheck, build, and browser verification flow.

## Acceptance criteria

- Dragging left or right visibly moves adjacent album cards as one track.
- The carousel loops continuously through all returned songs.
- One card snaps into place after a drag; no free-floating partial state remains.
- A small, linearly blurred right-side preview remains visible at rest without blurring the album art itself.
- Heading, details slot, Spotify button, and Start over controls retain their positions while details blur out/in.
- Reduced-motion users receive shortened/faded transitions without gesture breakage.
