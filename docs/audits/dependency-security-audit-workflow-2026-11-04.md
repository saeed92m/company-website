# Dependency Security Audit Workflow

- **Date:** 2026-11-04
- **Repository:** `saeed92m/company-website`
- **Baseline:** `9528341b6ef9bf0a6d67cc0bf3cc730af552e20b`
- **Change branch:** `security/dependency-audit-workflow`

## Inspection

The current `main` branch contains:
- `package.json` with Astro `7.4.2`, Playwright `1.64.1`, TypeScript `^6.0.3`, and `@astrojs/check`.
- A committed npm v3 `package-lock.json`.
- CI and Pages deployment workflows that install from the lockfile with `npm ci`.
- Weekly Dependabot update configuration for npm and GitHub Actions.

The older readiness audit contains historical statements that the lockfile was absent and workflows used `npm install`. Those statements do not describe the current `main` baseline. The current package and workflow files were inspected directly for this update.

## Change

Added `.github/workflows/dependency-audit.yml` with:
- pull request and main-branch push triggers;
- weekly scheduled execution;
- manual dispatch;
- read-only `contents` permission;
- full-SHA-pinned checkout and setup-node actions;
- Node.js `22.23.4` and npm lockfile caching;
- lockfile presence/version validation;
- `npm ci` installation;
- full dependency audit with a high-severity failure threshold;
- production dependency audit with a low-severity failure threshold.

The install step uses `--ignore-scripts` because the audit job only needs the locked package graph. It does not run the application build. The normal CI workflow remains responsible for build and project validation.

## Validation status

- Static review of the workflow and existing package manifest/lockfile: completed.
- Workflow execution and npm registry audit results: pending GitHub Actions execution on the pull request.
- This change does not claim that the current dependency graph has zero vulnerabilities until the audit workflow completes.
- GitHub security settings and alert inventory remain separate verification gates. A successful npm audit does not prove that Secret Scanning, Push Protection, Dependabot alerts, or CodeQL alert triage are complete.

## Remaining operational gates

- Verify repository security settings and alert inventories in GitHub Settings/Security.
- Review unsafe DOM sinks, content injection, and external-link handling.
- Verify deployed security headers and decide on hosting/CDN controls.
- Run Firefox and WebKit production QA.
- Complete independent WCAG 2.2 AA and Lighthouse/Core Web Vitals assessment.
- Complete physical-device review and backup/restore/rollback drills.
- Establish an approved private vulnerability-reporting channel.

Track acceptance evidence in [Issue #69](https://github.com/saeed92m/company-website/issues/69). Keep the issue open until all gates have verified evidence.
