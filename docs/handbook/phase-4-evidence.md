# Phase 4 Evidence — Brand/UI Integration and GitHub Pages Readiness

## Status

In Progress

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

- Import exact binary Logo/Wordmark files into the repository asset package.
- Harden shared navigation and root redirect for the configured GitHub Pages base path.
- Run CI for the Phase 4 branch.
- Merge only after CI passes.
- Activate GitHub Pages if the account plan permits it; otherwise decide whether to use a public mirror/site repository or upgrade the GitHub plan.
- Validate the deployed site at the real GitHub Pages URL.
- Select and optimize one or two wallpapers only if they improve the final visual hierarchy.
- Complete final SEO/OG/sitemap configuration after the public site URL is confirmed.
