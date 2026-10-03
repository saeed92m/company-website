# Phase 6 Evidence — Supplied Logo Integration

Date: 2026-10-03

## Scope

The Outlook `change` email supplied:

- `Screenshot 2026-10-03 154844.png` — identifies the two requested logo replacement locations.
- `Logo-Bulk Background.png` — approved replacement mark artwork.

The screenshot marks:
1. the small brand mark in the global header next to `ALPHA TEAM`;
2. the large brand mark in the home-page hero.

## Implementation

The supplied PNG has substantial transparent padding and is raster artwork. For the web implementation, the mark was converted to a tightly cropped SVG derivative so it remains crisp at header, hero, favicon, and responsive sizes.

The existing canonical asset path remains:

`public/brand/alpha-team-mark.svg`

This avoids changing every page reference and keeps the deployment/smoke-test contract stable.

No wordmark text was changed: `ALPHA TEAM` remains separate from the symbol.

## Publications

Scientific-publication actions now use the canonical HAL records supplied by the project owner:

- https://hal.science/hal-02501416v1
- https://hal.science/hal-02306413v1

The same HAL record is used for the article/full-text and download action so users remain on the authoritative source.

## Validation

Required before merge:

- production build
- all supported locales
- header logo rendering
- home hero logo rendering
- favicon reference
- RTL/LTR
- responsive/mobile sizing
- publication links
- GitHub Pages deployment
