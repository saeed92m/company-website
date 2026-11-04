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

**Production acceptance: In Progress.** The current production `main` baseline is `06af87e1053e7d25a3efd263ba8fefde0d997589`.

The following main-branch workflows passed on that commit:

- CI [41896492766](https://github.com/saeed92m/company-website/actions/runs/41896492766): repository validation, JSON-LD regression tests, Astro check, and production build.
- CodeQL [41896492580](https://github.com/saeed92m/company-website/actions/runs/41896492580): analysis completed successfully. This does not prove that the alert backlog is empty.
- GitHub Pages [41896492601](https://github.com/saeed92m/company-website/actions/runs/41896492601): build, deploy, and smoke jobs passed.
- Dependency Security Audit [41896492684](https://github.com/saeed92m/company-website/actions/runs/41896492684): full and production npm audits each reported zero vulnerabilities in the locked dependency graph.
- Chromium production Browser QA [41896664184](https://github.com/saeed92m/company-website/actions/runs/41896664184): 96 route/viewport checks passed.

PR [#81](https://github.com/saeed92m/company-website/pull/81) expands Browser QA to Chromium, Firefox, and WebKit. Earlier head `cda633885acd460fbe25e4bc7613c3282c6a90ba` passed **288 production route/viewport checks** (96 per engine). The current head `83a8882c8839a00ed9cb9ca4df1232208a149684` also builds the proposed PR and tests it through a local static preview under the GitHub Pages base path. In run [41908868252](https://github.com/saeed92m/company-website/actions/runs/41908868252), Chromium and Firefox each passed 96 PR-build checks; WebKit browser installation is still in progress. CI, CodeQL, and Dependency Audit passed on this head. PR #81 remains open and unmerged.

Open acceptance work includes GitHub security-setting and alert-backlog verification, branch protection, deployed response-header review, independent WCAG 2.2 AA assessment, Lighthouse/Core Web Vitals, physical-device review, backup/restore and rollback drills, and a verified private vulnerability-reporting route. Track evidence in [Issue #69](https://github.com/saeed92m/company-website/issues/69).

The logo refresh is deferred. The current repository-local brand asset remains in use; PR #75 was closed without merge. Passing automated checks do not prove full production readiness.
