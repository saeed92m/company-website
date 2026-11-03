# Project listings and summary dialogs — review evidence

**Date:** 2026-11-04  
**Status:** Awaiting user visual approval; not merged to production.

## User-visible change

- Three projects appear on the homepage and Projects page: Alpha Linux, ZTF Classifier, and Company Platform.
- Each project card has a localized **Project summary** action.
- The action opens a modal with the project title, a summary heading, a source-grounded overview, a close control, and a localized collaboration/contact action.
- The modal uses the existing dark visual language, blue border accents, rounded corners, and a blurred backdrop. It adapts to mobile and desktop layouts, RTL/LTR, light/dark themes, and reduced-motion preferences.

## Content provenance and accuracy

- **Alpha Linux:** Based on the Alpha Linux repository README. It is described as an Ubuntu 26.04 LTS and COSMIC-based AI-native workstation in the Alpha release phase. The copy explicitly avoids claiming universal hardware or stable-release readiness.
- **ZTF Classifier:** Based on the ZTF Classifier repository README. It describes the CPU-first ZTF data workflow and core scientific diagnostics. It distinguishes the published software version 1.0.1 from ongoing cross-platform product development and states the benchmark limitations.
- **Company Platform:** Based on the Company-Platform repository README. It describes the modular digital foundation for company information, domains, projects, products, services, collaboration, consultations, meetings, and future web/Telegram channels. It is marked as under development and remains a separate product from the website.

No repository URL is published for any of the three projects.

## Localization

- Project overviews: fa, en, ar, ru, de, zh, fr, es.
- Modal labels, close action, and collaboration action: all eight locales.
- Existing locale direction metadata remains authoritative: Persian and Arabic RTL; other locales LTR.

## Implementation scope

- `src/content/site.ts`
- `src/content/ui.ts`
- `src/components/ProjectCards.astro`
- `src/pages/[locale]/index.astro`
- `src/pages/[locale]/projects/index.astro`
- `src/styles/global.css`
- `.github/workflows/browser-qa.yml`
- `docs/ux/03-page-content-contracts.md`
- `CHANGELOG.md`

## Validation

- Browser QA asserts exactly three project cards and three summary controls on both the homepage and Projects page for each locale.
- Browser QA opens the first dialog, checks that the overview is non-empty, and verifies Escape dismissal.
- CI runs Astro type checking and a production build on pull requests.

## Validation status

- **CI:** PASS — GitHub Actions run `41720979899` (Astro type check and production build).
- **CodeQL:** In progress — run `41720979829` at the time of this record.
- **Browser interaction QA:** Automated assertions are added to the production Browser QA workflow, but they have not yet run against this branch. That workflow currently tests the deployed production URL only.
- **Visual preview:** No staging host or PR preview deployment is configured. The live production site remains unchanged; deploying this branch to the production Pages environment would violate the approval gate.

Visual acceptance on the user's device remains pending.
