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

**Production acceptance: In Progress.** The current Production `main` baseline is `3dad024ea6c4261dc6153db0bbcca9f04f3d45c2` (PR #88, merged 2026-11-05).

The following post-merge workflows passed on this exact Production commit:

- CI [42022156023](https://github.com/saeed92m/company-website/actions/runs/42022156023): Repository baseline succeeded.
- CodeQL [42022156078](https://github.com/saeed92m/company-website/actions/runs/42022156078): analysis job succeeded. The alert backlog is a separate check.
- GitHub Pages [42022156060](https://github.com/saeed92m/company-website/actions/runs/42022156060): build, deploy, and smoke jobs succeeded.
- Dependency Security Audit [42022156007](https://github.com/saeed92m/company-website/actions/runs/42022156007): audit job succeeded. The run log and alert inventories must be read separately before claiming no vulnerabilities.

The last recorded three-engine production Browser QA passed on the pre-PR-88 baseline. It has not been rerun on `3dad024...`; post-merge browser acceptance remains open.

The active `main-protection` ruleset requires pull requests and six required checks: Repository baseline, CodeQL, locked dependency audit, and Chromium, Firefox, and WebKit Browser QA. It blocks branch deletion and non-fast-forward updates. It has no bypass actors and currently requires zero approving reviews.

PRs [#84](https://github.com/saeed92m/company-website/pull/84), [#85](https://github.com/saeed92m/company-website/pull/85), [#86](https://github.com/saeed92m/company-website/pull/86), [#87](https://github.com/saeed92m/company-website/pull/87), and [#88](https://github.com/saeed92m/company-website/pull/88) are merged. Production acceptance remains **In Progress**; successful automated workflows do not prove full security, accessibility, or operational readiness.

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
- Enable and verify GitHub private vulnerability reporting; update SECURITY.md after the reporting path is confirmed.

The latest post-merge verification and remaining owner-dependent gates are recorded in [the 2026-11-05 acceptance addendum](docs/audits/production-acceptance-addendum-2026-11-05.md) and [Issue #69](https://github.com/saeed92m/company-website/issues/69). Automated checks do not prove full Production readiness. Keep Production unchanged until the remaining acceptance gates pass and the owner gives separate release authorization.
