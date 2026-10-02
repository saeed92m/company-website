# Phase 4 Evidence — Brand/UI Integration and GitHub Pages Readiness

## Status

In Progress — deployment activation and final validation remain open

## Completed

- Added a formal brand architecture decision for **ALPHA TEAM** plus the legal company identity.
- Applied the approved brand colors `#003C91` and `#A8A8A8` to the frontend system.
- Reworked the header, hero, CTA, cards and footer hierarchy around the brand system.
- Added responsive brand/hero behavior and stronger focus states.
- Added Pages-safe route generation so the same site can run under `/company-website/` now and a root custom domain later.
- Added a GitHub Pages deployment workflow using the official Pages artifact/deploy actions.
- Preserved the six-domain corporate content baseline and eight-locale architecture.
- Kept Alpha Linux and ZTF Classifier repository links unpublished.

## Source assets

Brand source of truth:
`/company website/` in Dropbox.

Approved assets:
- `Logo.png`
- `wordmark.png`
- `Color Code.JPEG`
- optional wallpapers under `wallpapers/`

## Current deployment constraint

The repository is private. GitHub documents that GitHub Pages is available from private repositories only on GitHub Pro, Team, Enterprise Cloud, or Enterprise Server; on GitHub Free the repository must be public. The deployment workflow is therefore prepared, but Pages activation remains dependent on the account/repository plan and Pages settings.

## Remaining

- Exact supplied binary Logo/Wordmark files are still not committed; the implementation retains a lightweight inline/vector derivative and now includes a repository favicon derivative.
- Hardened shared navigation and root redirect for the configured GitHub Pages base path in PR #15; merged to `main` as `bec682f0c71ede5d854fcb582b504e74b12ba364`.
- PR #15 CI run `37002030730` passed: repository baseline, dependency install, Astro check, and production build.
- Activate GitHub Pages if the account plan permits it; otherwise decide whether to use a public mirror/site repository or upgrade the GitHub plan.
- Validate the deployed site at the real GitHub Pages URL after activation.
- Select and optimize one or two wallpapers only if they improve the final visual hierarchy.
- Complete final SEO/OG/sitemap configuration after the public site URL is confirmed.
- Phase 4 polish branch adds `public/favicon.svg` and `public/robots.txt`, and aligns the CSS brand-blue token to the approved `#003C91` reference.
