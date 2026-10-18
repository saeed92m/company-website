# Phase 7 — Production QA and release closeout

Date: 2026-10-04

## Scope

Final production hardening after the Test 1/2/3 visual feedback cycle.

## Completed

- Removed the homepage "CEO Resume" CTA requested in Test 2.
- Replaced the CEO text link on the Company page with a localized View / مشاهده button requested in Test 3.
- Corrected the navigation label from CEO to Management across all eight locales.
- Corrected the English founding-year source text from Solar Hijri 1402 to Gregorian 2023; localized presentation remains handled by src/utils/date-format.ts.
- Added automated Chromium production QA covering all eight locale home/company/CEO/fields/projects/contact routes at mobile (390×844) and desktop (1440×900) viewports.
- Browser QA verifies HTTP success, document language, RTL/LTR direction, title, main/header presence, inline brand SVG, stylesheet presence, visible content, and absence of horizontal overflow.
- Existing deployment smoke QA continues to verify sitemap, robots.txt, all core routes, field routes, stylesheet markers, logo SVG and domain assets.
- Latest main branch automated gates passed: CI, CodeQL, and GitHub Pages deployment.

## Remaining manual limitation

Automated browser QA validates the deployed DOM/layout contract but does not replace human visual judgment for typography, exact spacing, imagery aesthetics, or cross-device rendering on every physical browser. Those are monitored as ongoing QA rather than blockers for the current static corporate release.

## Release status

**Production-ready for the current scope.**

Future work remains intentionally deferred where it depends on external inputs: custom .ir domain/DNS, corporate email, CMS/API/CRM/portal integration, and additional brand assets.
## Post-release accessibility hardening — 2026-10-04
- PR #48 added accessibility contract assertions to production Browser QA.
- Run `37189378543` failed on two unlabeled publication-summary controls on `/fa/company/ceo/` at the mobile viewport; this was a valid defect caught by the new gate.
- PR #49 fixed the controls and corrected the QA accessible-name assertion.
- PR #49 merged as `90e4cd3e696e27b423a05789c2d4824a9ec31706`.
- Final CI `37198896329`, CodeQL `37198896316`, Pages deployment `37198896307`, and production Browser QA `37198959825` all passed.

## Final status

**Production-ready for the current static corporate scope.** `v0.1.0` remains the immutable initial release baseline; post-release hardening is retained on `main`.

## Recovery points
- `v0.1.0` — initial production baseline
- `90e4cd3e696e27b423a05789c2d4824a9ec31706` — hardened production `main`
- `37198959825` — final Browser QA
- `37198896307` — final Pages deployment


## Post-fix production verification — 2026-10-18

- Verified the current deployed Persian homepage via a fresh external fetch: HTTP 200; canonical destination `https://saeed92m.github.io/company-website/fa/`.
- Verified `og:image` and `twitter:image` resolve to `https://saeed92m.github.io/company-website/brand/alpha-team-mark.svg`, including the repository base path.
- Latest `main` commit checked: `1e8a3fd99d4eb34d2082d5560eef81981799fa7e`.
- CI: [38985578466](https://github.com/saeed92m/company-website/actions/runs/38985578466) — success.
- CodeQL: [38985578444](https://github.com/saeed92m/company-website/actions/runs/38985578444) — success.
- Pages deployment and smoke tests: [38985578426](https://github.com/saeed92m/company-website/actions/runs/38985578426) — success.
- Browser QA across the configured eight-locale mobile/desktop matrix: [38986084634](https://github.com/saeed92m/company-website/actions/runs/38986084634) — success.

### Acceptance boundary

This is fresh external reachability and automated-test evidence, not a claim of human visual approval. Physical-device rendering, typography, perceived spacing, and browser-specific behavior still require an ordinary user-operated browser/device check. Issue #52 remains the tracking record until that evidence is supplied.
