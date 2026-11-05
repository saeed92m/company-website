# Pishgaman Novandish Fannavargostar Keyhan

Corporate website project for **Pishgaman Novandish Fannavargostar Keyhan (Ltd.)**, an R&D-driven technology company founded in Tabriz in 2023 (Solar Hijri 1402).

## Company focus

- Astronomy
- Aerospace
- Remote Sensing
- Energy
- Artificial Intelligence
- Motorsport

## Project

This repository contains the source code, content, design system, documentation, tests, and deployment configuration for the company's public multilingual corporate website.

The website is designed to be modular, accessible, multilingual, performance-oriented, and future-ready for later integration with APIs, CMS/WordPress, CRM, portals, and research platforms without requiring a full rewrite.

## Languages

Persian, English, Arabic, Russian, German, Chinese, French, and Spanish.

## Documentation

The authoritative project handbook is maintained in the project documentation and the associated Notion master handbook. Architecture decisions, release evidence, and operational decisions are recorded as the project evolves.

## Repository policy

This repository is **public by project decision**. The repository contains only material approved for public source visibility; secrets, credentials, private keys, and other sensitive material must never be committed.

## Status

**Production acceptance: In Progress.** The latest repository `main` commit is `ecaa7ab5b931bd20691f5744298be1a34c151234` (documentation evidence refresh). The deployed application source includes the merged CSS regression fix from PR #83.

The following workflows passed on the latest `main` commit:

- CI [41940065948](https://github.com/saeed92m/company-website/actions/runs/41940065948).
- CodeQL [41940066085](https://github.com/saeed92m/company-website/actions/runs/41940066085).
- GitHub Pages deployment and smoke [41940065926](https://github.com/saeed92m/company-website/actions/runs/41940065926).
- Dependency Security Audit [41940065918](https://github.com/saeed92m/company-website/actions/runs/41940065918).
- Browser QA [41940225986](https://github.com/saeed92m/company-website/actions/runs/41940225986): Chromium, Firefox, and WebKit jobs succeeded.

PR #81 (cross-browser Browser QA) and PR #83 (project-card CSS selector regression fix) are merged. The latest Browser QA matrix runs three browser engines against eight locales and six route families at mobile and desktop viewports.

An active `main-protection` repository ruleset now requires pull requests and the Repository baseline, CodeQL, dependency audit, and Chromium/Firefox/WebKit checks. It blocks branch deletion and non-fast-forward updates. It currently requires zero approving reviews.

Production acceptance remains In Progress. Open manual gates include security-alert inventory, deployed response headers, WCAG 2.2 AA, Lighthouse/Core Web Vitals, physical-device review, backup/restore, rollback, and private vulnerability reporting. Track these in [Issue #69](https://github.com/saeed92m/company-website/issues/69).

The website identity decision is now legal-company-first. See ADR 0008 and the live-site audit at `docs/audits/website-design-architecture-audit-2026-11-05.md`. The supplied transparent logo candidate is not yet approved or committed. Passing automated checks do not prove full production readiness.
