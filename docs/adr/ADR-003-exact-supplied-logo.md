# ADR-003: Use the supplied ALPHA TEAM mark as the canonical website asset

- Status: Accepted
- Date: 2026-10-03
- Scope: Corporate website brand asset rendering

## Decision

The website uses the supplied ALPHA TEAM master artwork as the source of truth for the visible brand mark. The previous hand-recreated geometry is not authoritative and must not be used.

The repository asset `public/brand/alpha-team-mark.svg` preserves the supplied brand colors:

- Blue: `#003C91`
- Gray: `#A8A8A8`

The mark is rendered with its intrinsic aspect ratio and must not be stretched or independently translated at responsive breakpoints.

## Responsive requirement

The hero mark is centered inside its circular visual frame at desktop and mobile widths. Mobile layout must not use start/end alignment for the hero mark; the mark and its circular frame remain co-located.

## Validation requirement

Any future logo change must be visually compared against the supplied master artwork before release, including a narrow mobile viewport.