# Self-hosted typography assets

## Status

Implemented on the visual review branch. Production acceptance remains open until browser rendering, font loading, and performance are verified on target devices.

## Typeface files

The site uses subsetted WOFF2 files. The browser downloads only the subset needed for the text on the page.

| Typeface | Subsets | Weight range | Intended locales |
|---|---|---:|---|
| Vazirmatn | Arabic, Latin, Latin Extended | 100–900 | Persian; Arabic fallback; mixed Latin text |
| IBM Plex Sans | Cyrillic Extended, Cyrillic, Latin Extended, Latin | 100–700 | English, German, French, Spanish, Russian |

Chinese uses a script-aware system fallback stack: Noto Sans CJK SC, Microsoft YaHei, PingFang SC, SimSun, then the platform sans-serif. No Chinese font binary is bundled in this change. Verify glyph coverage and rendering on representative Windows, macOS, iOS, Android, and Linux devices before Production.

## Sources and provenance

- WOFF2 distribution files: `fontsource/font-files`, pinned commit `5a72889057f592bb0659629e38337359f94d53b2`.
- Upstream font metadata and license source: `google/fonts`, directories `ofl/vazirmatn` and `ofl/ibmplexsans`.
- Source file names and subset ranges are retained from the pinned WOFF2 CSS definitions.
- Binary font files are not modified.
- Original SIL Open Font License 1.1 notices are retained in `licenses/fonts/`.

## Runtime behavior

- No Google Fonts or other external font CSS request is required.
- `font-display: swap` keeps text visible while a font loads.
- Unicode ranges split Arabic, Latin, Latin Extended, Cyrillic, and Cyrillic Extended into separate resources.
- The CSS uses local source assets. Astro/Vite must emit and rewrite these assets in the production build, including the GitHub Pages `/company-website` base path.
- IBM Plex Sans source weight range ends at 700. CSS weights above 700 use the browser's nearest available face; do not assume a true 800/900 IBM Plex weight.

## Validation still required

1. Confirm all seven WOFF2 resources are emitted and return HTTP 200 from the built site.
2. Confirm there are no runtime requests to `fonts.googleapis.com` or `fonts.gstatic.com`.
3. Verify Persian shaping, Arabic shaping, Persian/Arabic numerals, punctuation, mixed-direction content, and Latin/Cyrillic glyph coverage.
4. Verify Chinese fallback on real devices. If coverage or metrics are inconsistent, select and license a self-hosted CJK subset before release.
5. Measure font transfer size, text rendering, and layout shift on mobile and desktop.
6. Re-run all eight locale routes in Chromium, Firefox, and WebKit.

This implementation does not close the manual typography, localization, physical-device, or performance acceptance gates.
