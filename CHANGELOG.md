## 2026-10-03 — Phase 5 content and visual refinements

- Added source/article and PDF/full-text actions to the CEO scientific-publications section.
- Added localized labels for publication actions across all eight locales.
- Refined the six domain cards and field-detail heroes to use their domain-specific artwork as restrained blurred background layers.
- Added the East Azerbaijan Science & Technology Park location note to the localized Contact card.
- Recorded implementation evidence in `docs/handbook/phase-5-evidence.md`.

# Changelog

## 2026-10-03 — Production styling regression fix and QA hardening

- Identified a real production regression from supplied screenshots: shared SiteLayout did not import src/styles/global.css, so deployed pages could return valid HTML while rendering without the intended UI styling.
- Fixed the root cause in PR #38 and merged commit 488aebdfc6c92a54eb9f8e93cb651ca0dac65ad9.
- Added production smoke assertions in PR #39 and merged commit 92f6314e1ad451a43537c15b318f664b404dbf56.
- The deployed smoke test now verifies the production stylesheet link, expected UI CSS selectors, the brand SVG, and all six domain SVG assets in addition to route HTTP 200 checks.
- Automated checks for PR #39 passed: CI run 37119257384 and CodeQL run 37119257379.
- Final release acceptance still requires live browser/device visual confirmation after the post-merge Pages deployment.


## 2026-10-03 — Phase 4 automated production QA closeout

- Confirmed no open GitHub issues or pull requests remain.
- Recorded successful GitHub Pages deployment run `37082876063`.
- Recorded successful build, deploy, and expanded deployed-route smoke validation across all eight locales and public route families.
- Synchronized repository documentation with the actual Phase 4 state.
- Independent browser/device visual QA remains the final release gate.



## 2026-10-02 — Production baseline QA

- Added a generated multilingual XML sitemap covering all supported locales and public routes.
- Added a branded 404 page for GitHub Pages.
- Validated Astro type checking and production build through CI.
- Validated CodeQL analysis successfully.
- Deployed the resulting main commit to GitHub Pages successfully.

## 2026-10-02 — Phase 3 frontend completion

- Added the localized activity-fields index route for all eight supported locales.
- Aligned global navigation with dedicated Company and Fields routes.
- Strengthened home-page project and CEO navigation paths.
- Corrected non-source locale capability translations to remain within the approved company-profile/resume content baseline.
- Recorded implementation evidence in `docs/handbook/phase-3-evidence.md`.

All notable changes to this project will be documented here.

## [Unreleased]

- Repository foundation created.
- Initial engineering and documentation baseline established.
- Corporate website Handbook v0.1.0 established in Notion.

## 2026-10-02

- Phase 1 frontend contracts expanded with localized Company, CEO and Contact routes.
- Shared navigation, skip-link labels, metadata and contact-state messaging are localized across all eight supported locales.
- Public activity copy was aligned with the supplied company profile/resume source hierarchy; unsupported capability claims were removed.

## 2026-10-02

- Added a dedicated localized Projects route while keeping project repository links unpublished.
- Added Organization, Person and WebSite JSON-LD metadata to the shared layout when the production site URL is configured.
