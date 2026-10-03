# Phase 4 Evidence — Brand/UI Integration and GitHub Pages Deployment

## Status

Implementation and deployment are operational; automated production QA passes. Independent visual/browser/device QA remains the final release gate.

## Completed

- Added the ALPHA TEAM brand/UI direction and applied the approved brand colors `#003C91` and `#A8A8A8`.
- Implemented the responsive header, hero, CTA, cards and footer hierarchy.
- Preserved the six-domain corporate content baseline and eight-locale architecture.
- Preserved RTL handling for Persian and Arabic.
- Kept Alpha Linux and ZTF Classifier repository links unpublished.
- Added Pages-safe route generation for `/company-website/` and future root custom-domain deployment.
- Added the GitHub Pages deployment workflow.
- Added an automated deployed-site smoke test covering all eight locales plus core company, CEO, fields, project, contact, six field-detail routes, sitemap and robots.txt.
- Added a generated multilingual XML sitemap covering the public localized routes.
- Added a branded static 404 page.
- Added repository favicon and robots.txt derivatives.
- Confirmed the public repository decision is documented separately.

## Validation evidence — 2026-10-03

- Main validation commit: `88f0ff00468ccadf7956fa675514e5fd7b1ea48a` (`test: expand GitHub Pages locale smoke coverage`).
- CI run `37082875999`: **passed** repository baseline, dependency installation, Astro check and production build.
- CodeQL run `37082876006`: **passed** JavaScript/TypeScript analysis.
- GitHub Pages run `37082876063`: **passed** build, deployment and the expanded deployed-route smoke test.
- The smoke job exercised the deployed `https://saeed92m.github.io/company-website` endpoint and returned HTTP 200 for every configured route.
- GitHub Actions therefore provides current deployment/reachability evidence; independent visual browser/device QA is still intentionally tracked separately.

## Source assets

Approved project assets include the supplied logo and color-code references. The current frontend uses a vector logo derivative based on the approved mark/colors; the supplied binary logo/wordmark asset has not yet been committed as a repository asset.

## Remaining

- Perform live browser/device visual QA across representative desktop/mobile widths and all eight locales.
- Validate navigation, direct routes, refresh behavior, sitemap, robots.txt, canonical/hreflang, JSON-LD and social metadata on the deployed site.
- Complete accessibility and responsive visual QA.
- Add/validate OG/social preview assets after final visual identity treatment.
- Custom `.ir` domain remains deferred.
- Corporate email remains separate from website hosting and is not yet published.
- Project repository links remain unpublished until release readiness.

## Repository visibility note

The repository is intentionally public by project decision. Public visibility does not relax the security baseline: secrets, credentials, private keys, and restricted company information remain prohibited from Git.
