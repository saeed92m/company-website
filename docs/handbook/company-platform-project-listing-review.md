# Company Platform project listing — review evidence

**Date:** 2026-11-04  
**Status:** Awaiting user visual approval; not merged to production.

## Change

- Added `Company Platform` as the third project in the centralized content model.
- Added localized descriptions for fa, en, ar, ru, de, zh, fr, and es.
- The description identifies it as a unified digital platform that supports management, coordination, and development of company activities and projects.
- The public status is explicitly under development.
- No repository URL or external action is exposed.
- The Company Platform implementation remains a separate repository and is not combined with the corporate website codebase.

## Scope

- `src/content/site.ts`
- `docs/ux/02-information-architecture.md`
- `docs/ux/03-page-content-contracts.md`
- `CHANGELOG.md`
- `.github/workflows/browser-qa.yml`

The existing homepage and Projects page render the project list from the same localized content model. This keeps the new item consistent across both surfaces and all supported locales.

## Validation

The Browser QA workflow now asserts that every localized Projects page contains exactly three project cards and includes the Company Platform entry. CI also runs Astro type checking and a production build on pull requests.

**Pending:** CI result and user visual approval. GitHub Pages production deployment is intentionally not triggered from this review branch.
