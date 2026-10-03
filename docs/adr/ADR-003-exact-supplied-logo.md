# ADR-003: Use the exact supplied IMG_6104.PNG as the canonical website logo

- Status: Accepted
- Date: 2026-10-03
- Scope: Corporate website brand asset rendering

## Decision

The website uses the exact IMG_6104.PNG supplied by the project owner as the canonical visible logo asset. The website must not redraw, approximate, recolor, crop, simplify, or substitute another logo geometry.

The source-of-truth file is the owner-supplied PNG in Dropbox. Its artwork is consumed directly so the visible geometry remains identical to the supplied source.

## Responsive requirement

The image must preserve its intrinsic aspect ratio at every viewport. CSS must not stretch, distort, rotate, mask, or reconstruct the artwork. The same supplied PNG is used for the site header/logo and favicon reference where supported.

## Validation requirement

Any future logo change must be visually compared against the owner-supplied IMG_6104.PNG before release, including desktop and narrow mobile viewports. A different hand-recreated SVG or previously supplied logo file is not an acceptable substitute.
