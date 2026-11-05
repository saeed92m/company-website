# Visual Prototype v2 — Structural Homepage Redesign

## Status
In progress on the review branch. This version replaces the previous token-only draft because it did not create a sufficiently distinct visual result.

## Direction
Technical editorial / research atlas. The design uses a clear typographic hierarchy, a central orbital identity diagram, structured metrics, and an image-led six-domain index.

## Scope
- Recompose the homepage hero and navigation hierarchy.
- Present six activity areas in a bento-style grid with existing domain artwork.
- Recompose projects, company overview, and contact call to action.
- Keep all copy sourced from existing localized content.
- Support all eight locales, with RTL for Persian and Arabic.
- Keep the company logo artwork unchanged.
- Maintain independent Night and Day palettes.

## Non-goals
- No change to company claims or legal identity.
- No publication of project repository links.
- No production merge before owner review.

## Validation
Build, Astro Check, unit tests, browser QA, mobile layout, eight locales, RTL/LTR, keyboard navigation, and color contrast must pass before the prototype is considered review-ready.

## Typography decision — provisional approval (2026-11-05)

The project owner has provisionally approved the following primary typefaces for the next design iteration:

| Script / language use | Typeface | Decision |
|---|---|---|
| Persian (fa) | Vazirmatn | Provisionally approved |
| English (en) | IBM Plex Sans | Provisionally approved |

### Implementation constraints

- Treat these as approved design choices for the prototype, not as an irreversible or production-final decision.
- Do not silently substitute B Nazanin or Apple SF Pro.
- Before enabling the fonts in production, verify the exact font files, license, required weights, subset coverage, file size, and self-hosting strategy.
- Use appropriate script-specific fallbacks for Arabic and Chinese. Do not assume that Vazirmatn or IBM Plex Sans covers all eight supported locales.
- Test Persian shaping, punctuation, numerals, mixed-direction text, headings, body copy, form controls, and navigation at mobile and desktop sizes.
- Keep typography tokens centralized. Avoid hard-coding font-family declarations in individual components.
- Compare rendering and readability in both Night and Day themes. Confirm layout stability and avoid font-induced cumulative layout shift.
- The approved families are loaded in this prototype through the external CSS endpoint. Font binaries are not yet self-hosted in the repository.

### Prototype implementation update (2026-11-05)

- The homepage prototype now requests IBM Plex Sans for Latin/Cyrillic text and Vazirmatn for Persian text through the Google Fonts CSS endpoint.
- Arabic and Chinese use explicit script-aware fallback stacks (Noto Sans Arabic and Noto Sans CJK SC first, then the approved families and system fallback). Their actual font availability must be verified on target devices; these fallback names are not bundled by this change.
- This is a prototype implementation, not yet a self-hosted production font delivery. The current Google Fonts endpoint remains an external dependency. Production hardening must pin and self-host optimized WOFF2 assets, preserve the applicable OFL license notices, and remove the external font request.
- The prototype applies soft-rounded geometry: 12px controls/buttons, 18px cards, and 24px major panels. This is a provisional visual treatment for owner review.
- The upstream Google Fonts repository publishes OFL license files for both families: `ofl/vazirmatn/OFL.txt` and `ofl/ibmplexsans/OFL.txt`. Verify the exact upstream license and preserve notices when vendoring font files.

### Next validation

1. Replace the prototype Google Fonts request with optimized, self-hosted WOFF2 assets and include both OFL notices.
2. Verify global font stacks and script-aware fallback stacks on real devices.
3. Extend typography regression coverage and review visual samples for fa/en/ar/ru/de/zh/fr/es.
4. Review real browser rendering before treating typography as production-ready.
