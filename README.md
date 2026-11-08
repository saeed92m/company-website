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

The [production recovery runbook](docs/operations/production-recovery.md) documents the reviewed rollback procedure. It does not claim that a production rollback or backup-restore drill has been executed.

## Repository policy

This repository is **public by project decision**. The repository contains only material approved for public source visibility; secrets, credentials, private keys, and other sensitive material must never be committed.

## Status

**Production acceptance: In Progress.** The latest application-source change is recorded in the current `main` history. The mobile project-artwork fit correction (PR #114) and the Pages WebP smoke-test repair (PR #115) are merged. Post-merge CI, CodeQL, dependency audit, Pages build/deploy, and deployed smoke checks passed on `3ea71856cae18245c55efc8ef7014a65cff59826`. Manual physical-device review and the remaining acceptance gates are still open. See [the 2026-11-08 evidence record](docs/audits/production-acceptance-addendum-2026-11-08.md) and [Issue #69](https://github.com/saeed92m/company-website/issues/69). Use the repository's [main branch](https://github.com/saeed92m/company-website/tree/main) for the live branch head; this README does not pin a moving branch head to a static SHA.

### Verified workflow evidence

- PR #89 merge deployment [42053095907](https://github.com/saeed92m/company-website/actions/runs/42053095907): Pages build, deploy, and smoke succeeded.
- PR #89 merge CI [42053095375](https://github.com/saeed92m/company-website/actions/runs/42053095375): success.
- PR #89 merge CodeQL [42053095890](https://github.com/saeed92m/company-website/actions/runs/42053095890): success.
- PR #89 merge Dependency Security Audit [42053095564](https://github.com/saeed92m/company-website/actions/runs/42053095564): success.
- PR #89 post-deployment Browser QA [42053363792](https://github.com/saeed92m/company-website/actions/runs/42053363792): still in progress at this checkpoint. WebKit passed; Chromium and Firefox had not completed.
- PR #91 checks all passed before merge: CI [42053712146](https://github.com/saeed92m/company-website/actions/runs/42053712146), CodeQL [42053712142](https://github.com/saeed92m/company-website/actions/runs/42053712142), Dependency Security Audit [42053712064](https://github.com/saeed92m/company-website/actions/runs/42053712064), and Chromium/Firefox/WebKit Browser QA [42053712044](https://github.com/saeed92m/company-website/actions/runs/42053712044).
- PR #91's dependency audit log reported 0 vulnerabilities in the full locked dependency graph and 0 in production dependencies.

PR #91 added the recovery runbook and updated the acceptance records. Its PR Browser QA validates the PR preview; it does not replace the post-deployment production Browser QA run.

The active `main-protection` ruleset requires pull requests and six required checks: Repository baseline, CodeQL, locked dependency audit, and Chromium, Firefox, and WebKit Browser QA. It blocks branch deletion and non-fast-forward updates. It has no bypass actors and currently requires zero approving reviews.

PRs [#84](https://github.com/saeed92m/company-website/pull/84), [#85](https://github.com/saeed92m/company-website/pull/85), [#86](https://github.com/saeed92m/company-website/pull/86), [#87](https://github.com/saeed92m/company-website/pull/87), [#88](https://github.com/saeed92m/company-website/pull/88), [#89](https://github.com/saeed92m/company-website/pull/89), and [#91](https://github.com/saeed92m/company-website/pull/91) are merged. PR #90 remains open and paused by owner direction. GA4 and Search Console work is deferred. Production acceptance remains **In Progress**.

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
- Approve a backup destination, retention, access, and encryption policy; execute and record a backup-restore drill.
- Execute and record a production rollback drill. The procedure is documented in [the production recovery runbook](docs/operations/production-recovery.md).
- Enable and verify GitHub private vulnerability reporting; update SECURITY.md after the reporting path is confirmed.

The latest acceptance evidence and remaining owner-dependent gates are recorded in [the 2026-11-05 acceptance addendum](docs/audits/production-acceptance-addendum-2026-11-05.md) and [Issue #69](https://github.com/saeed92m/company-website/issues/69). Automated checks do not prove full Production readiness. Keep Production unchanged until the remaining acceptance gates pass and the owner gives separate release authorization.
