# Pishgaman Novandish Fannavargostar Keyhan

Corporate website project for **Pishgaman Novandish Fannavargostar Keyhan (Ltd.)**, an R&D-driven technology company founded in Tabriz in 2023 (Solar Hijri 1402).

## Company focus

- Astronomy
- Aerospace
- Remote Sensing
- Energy
- Artificial Intelligence
- Motorsport

These are the six public activity areas. Do not describe all six as the registered statutory scope. The supplied company profile describes Motorsport and Performance Parts as a development-roadmap area pending formal addition to the articles of association. Verify any public statement about the registered legal scope against current official registration documents before publication.

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

**Production acceptance: In Progress.** The current Production `main` baseline is `ecaa7ab5b931bd20691f5744298be1a34c151234`.

The following workflows passed on that Production commit:

- CI [41940065948](https://github.com/saeed92m/company-website/actions/runs/41940065948): repository validation, regression tests, Astro check, and production build.
- CodeQL [41940066085](https://github.com/saeed92m/company-website/actions/runs/41940066085): JavaScript/TypeScript analysis completed successfully. This does not prove that the alert backlog is empty.
- GitHub Pages [41940065926](https://github.com/saeed92m/company-website/actions/runs/41940065926): build, deploy, and smoke jobs passed.
- Dependency Security Audit [41940065918](https://github.com/saeed92m/company-website/actions/runs/41940065918): full and production npm audits passed.
- Cross-browser production Browser QA [41940225986](https://github.com/saeed92m/company-website/actions/runs/41940225986): **288 route/viewport checks passed** (96 each in Chromium, Firefox, and WebKit).

The active `main-protection` ruleset requires pull requests and the repository's required CI, CodeQL, dependency-audit, and three-browser checks. It blocks branch deletion and non-fast-forward updates. It currently requires zero approving reviews.

PRs [#84](https://github.com/saeed92m/company-website/pull/84), [#85](https://github.com/saeed92m/company-website/pull/85), and [#86](https://github.com/saeed92m/company-website/pull/86) remain open and unmerged. The owner has provisionally approved the visual direction in PR #86. This is not merge or Production release authorization. Production remains on `main`.

## Preview and Production hosting

Production deployment uses GitHub Pages. Cloudflare Pages is used for pull-request previews only; it is not a Production hosting dependency. The Cloudflare Preview URL failed to establish a secure connection from the owner's reported network. VPN-free access from intended user networks, including Iranian mobile networks, remains unverified. Do not claim universal reachability until it has been tested.

## Open acceptance work

- Verify Secret Scanning and Push Protection settings.
- Review Dependabot alert inventory and security-update settings.
- Review CodeQL alert inventory; confirm no unresolved high/critical findings.
- Review GitHub Actions permissions and remaining workflow security controls.
- Complete source review for unsafe DOM sinks, content injection, and external-link handling.
- Verify deployed HTTPS response headers and document the hosting/security-header strategy.
- Complete an independent WCAG 2.2 AA assessment.
- Measure Lighthouse and Core Web Vitals on representative locales and routes.
- Complete physical-device visual review and target-network access tests without VPN.
- Document and execute backup/restore and deployment rollback drills.
- Establish a private vulnerability-reporting channel and update SECURITY.md.

Track evidence in [Issue #69](https://github.com/saeed92m/company-website/issues/69). Automated checks do not prove full Production readiness. Keep Production unchanged until the remaining acceptance gates pass and the owner gives separate release authorization.
