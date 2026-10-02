# Phase 4 Evidence — Brand/UI Integration and GitHub Pages Deployment

## Status

In Progress — deployment and engineering gates are operational; final live browser/device and visual QA remains open.

## Completed

- Added the ALPHA TEAM brand/UI direction and applied the approved brand colors `#003C91` and `#A8A8A8`.
- Implemented the responsive header, hero, CTA, cards and footer hierarchy.
- Preserved the six-domain corporate content baseline and eight-locale architecture.
- Preserved RTL handling for Persian and Arabic.
- Kept Alpha Linux and ZTF Classifier repository links unpublished.
- Added Pages-safe route generation for `/company-website/` and future root custom-domain deployment.
- Added the GitHub Pages deployment workflow.
- Added a generated multilingual XML sitemap covering the public localized routes.
- Added a branded static 404 page.
- Added repository favicon and robots.txt derivatives.

## Validation evidence — 2026-10-02

- PR #28 merged after validation.
- PR CI run `37055592046`: passed repository baseline, dependency installation, Astro check and production build.
- PR CodeQL run `37055592097`: passed JavaScript/TypeScript analysis.
- GitHub Pages run `37055705802`: completed successfully; build and deploy jobs passed.
- Main deployment commit: `2d91b00033ca401fed13a6894a3e1b104e7cecad`.
- The repository is public by explicit project decision.
- The live URL is configured as `https://saeed92m.github.io/company-website/`; this environment could verify the GitHub Actions deployment result but could not independently fetch the public Pages URL, so reachability is not claimed as externally verified here.

## Source assets

Approved project assets include the supplied logo and color-code references. The current frontend uses an inline/vector logo derivative; exact supplied binary logo/wordmark assets have not yet been committed.

## Remaining

- Perform live browser/device smoke QA across the eight locales and both RTL/LTR modes.
- Validate navigation, direct routes, refresh behavior, sitemap, robots.txt, canonical/hreflang, JSON-LD and social metadata on the deployed site.
- Complete accessibility and responsive visual QA.
- Add/validate OG/social preview assets after final visual identity treatment.
- The six-domain wallpaper set in Dropbox `/company website/wallpapers/BEST` is now an approved visual reference/source set; final page-level usage remains subject to visual, accessibility, performance, and provenance QA.
- Custom `.ir` domain remains deferred.
- Corporate email remains separate from website hosting and is not yet published.
- Project repository links remain unpublished until release readiness.

## Repository visibility note

The repository is intentionally public by project decision. The earlier private-repository wording is historical and no longer governs the project. Public visibility does not relax the security baseline: secrets, credentials, private keys, and restricted company information remain prohibited from Git.
