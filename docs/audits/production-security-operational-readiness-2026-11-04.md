# Production Security and Operational Readiness Audit

- **Audit date:** 2026-11-04
- **Repository:** `saeed92m/company-website`
- **Audited production commit:** `c3793220bd637007ea9e4a1f336ba888192a600b`
- **Overall result:** Partial pass; production deployment gates pass, but security settings and operational acceptance are not fully verified.
- **Tracking:** GitHub issue [#69](https://github.com/saeed92m/company-website/issues/69)

## 1. Verified deployment evidence

The following GitHub Actions runs completed successfully on the audited commit:

| Workflow | Run ID | Result | Evidence |
|---|---:|---|---|
| CI | 41734610325 | Success | Repository baseline, Astro check, production build |
| CodeQL | 41734610364 | Success | JavaScript/TypeScript analysis job completed |
| Deploy GitHub Pages | 41734610458 | Success | Build, Pages artifact, deploy, deployed-route smoke tests |
| Browser QA | 41734793383 | Success | Production Chromium checks |

The Browser QA workflow checks eight locales (`fa`, `en`, `ar`, `ru`, `de`, `zh`, `fr`, `es`) at mobile (390×844) and desktop (1440×900) viewports. It checks six route families, language and direction metadata, horizontal overflow, structural accessibility markers, keyboard access to the skip link, project cards, project summary dialogs, and Escape dismissal.

The Pages smoke job checks localized route HTTP responses, sitemap/robots markers, SEO metadata, CSS markers, and brand/domain assets.

These results verify the configured automated checks. They do not establish a full penetration test, WCAG conformance, cross-browser coverage, or physical-device acceptance.

## 2. Repository security controls observed

- `SECURITY.md` defines repository security expectations and incident handling.
- `.github/dependabot.yml` configures weekly npm and GitHub Actions update checks.
- `.github/workflows/ci.yml` has top-level `contents: read` permissions.
- `.github/workflows/codeql.yml` has top-level `contents: read`; the analysis job grants `security-events: write` and `actions: read`.
- `.github/workflows/deploy-pages.yml` grants `contents: read`, `pages: write`, and `id-token: write` for Pages deployment.
- `astro.config.mjs` configures static output.
- The Contact route currently displays informational content. It does not implement a data-submission form or backend.

## 3. Findings and limitations

### 3.1 GitHub repository settings — not verified

The integration could read repository metadata but received HTTP 403 when requesting branch protection for `main`. Rulesets returned an empty list. This does not prove that branch protection is absent; the connected integration may not have the required administration permission.

The integration could not retrieve Secret Scanning, Push Protection, Dependabot alert, or code-scanning alert endpoints through the available fetch interface. Their enabled state and alert inventory remain unverified.

**Required evidence:** repository Settings screenshots or an authorized settings/API export showing branch protection, secret scanning, push protection, Dependabot alerts/security updates, and private vulnerability reporting status.

### 3.2 Workflow action pinning — improvement required

Current workflows reference GitHub Actions by version tags (for example, `actions/checkout@v7`, `actions/setup-node@v7`, and `github/codeql-action@v4`). Version tags are easier to maintain but do not provide the immutability of full commit-SHA pinning.

Review each third-party action and pin to a verified full commit SHA, with a comment containing the corresponding version. Do not copy unverified SHAs.

### 3.3 Dependency reproducibility — improvement required

The repository tree inspected during this audit did not contain a `package-lock.json`. CI and deployment currently run `npm install`. This does not provide the same deterministic dependency installation as `npm ci` with a committed lockfile.

Generate the lockfile using the project's supported Node/npm toolchain, validate the build, then change CI and deployment to `npm ci`. Do not fabricate lockfile contents.

### 3.4 Security headers — not verified

Repository configuration alone does not prove which response headers the deployed GitHub Pages origin returns. The public-site fetch tool could not retrieve the production page during this audit. Therefore CSP, HSTS, Referrer-Policy, X-Content-Type-Options, and framing policy are not verified.

Collect response headers from the deployed origin and decide whether a CDN/proxy is required. Do not add a CDN or alter DNS without an approved design and validation.

### 3.5 Contact and privacy

The localized Contact page is an informational placeholder. There is no active contact form in the inspected route. Do not add a form, data collection, or backend until privacy notice, data minimization, retention, access, and incident-handling requirements are approved.

### 3.6 Human QA and operational recovery

Automated Chromium checks pass. The following are still outstanding:
- Firefox and WebKit browser coverage.
- Independent accessibility audit against WCAG 2.2 AA, including keyboard and screen-reader review.
- Lighthouse and field performance measurements.
- Physical-device visual review.
- Backup/restore and rollback drill with recorded recovery evidence.
- A private vulnerability reporting channel. `SECURITY.md` currently refers to a designated channel once established.

### 3.7 Existing Supabase provenance issue

Supabase migration provenance remains tracked separately in issue #57. Supabase is not part of the static website runtime. Do not change production database state as part of this website audit.

## 4. Acceptance plan

Track remediation and evidence in issue #69. Close each item only after the evidence is attached:
1. Verify GitHub repository security settings and alert inventories.
2. Review and pin workflow actions to verified full commit SHAs.
3. Generate and commit a valid npm lockfile; use `npm ci`.
4. Review application source for unsafe DOM sinks, untrusted content injection, and external-link risks.
5. Verify deployed HTTPS and response security headers.
6. Run dependency and code-scanning reviews; triage findings.
7. Run Firefox/WebKit and independent accessibility checks.
8. Measure Lighthouse/Core Web Vitals on representative routes.
9. Complete physical-device review.
10. Execute and record backup/restore and rollback drills.
11. Establish a private vulnerability reporting channel.
12. Synchronize Handbook, ADR, and Changelog with verified outcomes.

## 5. Audit conclusion

The audited commit is deployed, and the configured CI, CodeQL, Pages deployment/smoke, and Chromium Browser QA workflows pass. This is a strong automated baseline.

The website is **not yet independently certified as fully production-secure or operationally accepted**. The unverified repository settings, dependency reproducibility, workflow action pinning, response headers, full accessibility/browser review, and recovery drill must be completed before closing production acceptance.


## 6. Follow-up review — 2026-11-04

- Rechecked the current production commit `3792f1d04f1d607d017463fd03467fc1c97982bc`. CI, CodeQL, GitHub Pages deployment/smoke, and production Browser QA completed successfully on this commit. Browser QA run `41840387446` reports 96 route/viewport checks across eight locales, six route families, and two viewport sizes.
- Confirmed that the Browser QA workflow installs Playwright `1.55.0` transiently with `--no-save --no-package-lock`. Its npm output reports one high-severity audit finding but does not identify the package or dependency path. Treat this as an unresolved transient-install finding; do not infer that it is a production dependency vulnerability. The exact advisory and affected dependency remain unknown.
- Source review found one use of Astro `set:html` for JSON-LD. The payload is currently generated from repository-controlled structured data with `JSON.stringify`, not directly from request input. Defense-in-depth hardening is proposed in PR `security/jsonld-script-escaping`: escape HTML-significant characters and Unicode line separators before inserting the JSON text into the script element. This does not replace a broader source and dependency review.
- The repository still has no committed `package-lock.json`; CI and Pages build use `npm install`. Reproducible dependency installation remains open.
- The Actions version tags, GitHub security-setting visibility, response headers, Firefox/WebKit, independent WCAG review, physical-device QA, and restore/rollback drill remain open as described above.

### Follow-up acceptance evidence

Do not close issue #69 until the transient npm advisory is identified or the QA dependency installation is replaced with a reproducible, audited setup; the lockfile and CI installation are deterministic; the JSON-LD hardening PR passes checks; and all remaining human/operational gates have recorded evidence.


## 7. Dependency reproducibility and Browser QA advisory — 2026-11-04

- Generated `package-lock.json` on a GitHub-hosted runner with Node.js `22.23.4`; no lockfile content was hand-authored.
- Validated a clean `npm ci`, `npm test`, `npm run check`, and `npm run build`. The build produced 98 static pages. The Astro check passed with two existing unused-variable warnings: `content` in `src/pages/404.astro` and `assetBase` in `src/pages/[locale]/company/ceo.astro`.
- Reproduced the Browser QA warning in an isolated lockfile-backed package. The finding is GHSA-7mvr-c777-76hp: Playwright versions below `1.55.1` do not verify the authenticity of the SSL certificate when downloading/installing browsers. npm reports High severity and identifies direct dependency `playwright@1.55.0`; the advisory's affected range is `<1.55.1`.
- Updated the Browser QA dependency to exact version `1.64.1`, added it to `devDependencies`, and changed Browser QA to use the committed lockfile through `npm ci`. This removes the transient, untracked install.
- Re-generated the lockfile and audited the complete locked dependency graph. Both `npm audit` and `npm audit --omit=dev` report zero vulnerabilities on the validated branch. Raw JSON evidence is retained in Actions artifact `locked-dependency-audit` from run [41845743167](https://github.com/saeed92m/company-website/actions/runs/41845743167).
- The successful lockfile validation is run [41845178268](https://github.com/saeed92m/company-website/actions/runs/41845178268). The isolated advisory reproduction is run [41845492777](https://github.com/saeed92m/company-website/actions/runs/41845492777); its artifact identified the advisory and the affected package.
- CI, Pages build, and Browser QA now use `npm ci` on this branch. Production is unchanged until the pull request is reviewed and merged.

This resolves the previously unclassified High npm warning for the exact Playwright dependency and provides a reproducible dependency graph. It does not complete the remaining repository security, accessibility, cross-browser, performance, or operational recovery gates.
