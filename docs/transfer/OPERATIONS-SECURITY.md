# Operations, Security and Deployment

## 1. Runtime and build

The current application is an Astro static site. It is not a server-rendered application by default.

Verified package configuration:
- Astro: `7.4.2`
- Node.js: `>=22.23.4`
- npm scripts: `dev`, `build`, `preview`, `check`, `test`
- Dependency lock: `package-lock.json`

Clean build sequence:

```bash
node --version
npm --version
npm ci
npm run check
npm test
npm run build
npm run preview
```

Record full output and tool versions. Check generated `dist/` output, route count, localized metadata, asset references, sitemap, robots, canonical URLs, and base-path behavior.

## 2. Hosting and delivery

- Production: GitHub Pages.
- Pull-request preview: Cloudflare Pages.
- Cloudflare Pages is not the Production hosting dependency.
- Custom .ir domain and DNS configuration are deferred in the current handbook.
- Access from intended user networks, including Iranian mobile networks, has not been universally verified.

Never change hosting provider, DNS, custom domain, email routing, or production deployment as part of a design-only handoff.

## 3. Configuration and secrets

`astro.config.mjs` reads:
- `PUBLIC_SITE_URL`
- `PUBLIC_BASE_PATH`

Inspect workflow YAML and repository settings for the exact environment-specific values. Public build variables are not secrets. Tokens, credentials, private keys, deployment secrets, and personal access tokens must never be committed or copied into a public handoff package.

The public repository does not provide a safe export of GitHub Secrets or account settings. The repository owner must transfer these through GitHub's authorized settings and secret-management controls, if required.

## 4. CI/CD and quality workflows

The current tree includes:
- `.github/workflows/ci.yml`
- `.github/workflows/codeql.yml`
- `.github/workflows/dependency-audit.yml`
- `.github/workflows/deploy-pages.yml`
- `.github/workflows/browser-qa.yml`
- `.github/workflows/accessibility-audit.yml`
- `.github/workflows/lighthouse-audit.yml`
- `.github/workflows/security-headers-audit.yml`
- `.github/workflows/backup-restore-validation.yml`
- `.github/dependabot.yml`

Inspect each workflow's triggers, permissions, pinned actions, environment, artifacts, retention, required checks, and failure behavior. A workflow file existing in Git does not prove it ran successfully. Use the exact commit's workflow runs and logs as evidence.

## 5. Security and privacy boundaries

The README and security documentation identify remaining work. Current Production acceptance is In Progress.

The current open gates include:
- verify Secret Scanning and Push Protection settings;
- review Dependabot alerts and security-update configuration;
- review CodeQL alert inventory, including high/critical findings;
- review GitHub Actions permissions and workflow security;
- complete source review for unsafe DOM sinks, content injection, and external-link handling;
- verify deployed HTTPS response headers;
- verify private vulnerability reporting;
- complete privacy and contact-form architecture before collecting personal data.

Do not claim that an automated security scan proves the system secure. Record tool, commit, date, scope, findings, severity, exceptions, and remediation.

## 6. Accessibility, performance, browser and device QA

Target WCAG 2.2 AA. Required evidence includes:
- manual keyboard and screen-reader review;
- contrast in Night and Day themes;
- zoom/text resize and focus behavior;
- reduced-motion behavior;
- touch target and mobile review;
- RTL/LTR review with actual translated content;
- Chromium, Firefox, and WebKit coverage;
- physical-device testing;
- Lighthouse and Core Web Vitals on representative routes/locales.

Automated accessibility scans and browser tests are necessary but do not replace manual review. Do not state conformance without an independent assessment and recorded exceptions.

## 7. Backup, restore and rollback

See:
- `docs/operations/backup-restore-rollback.md`
- `docs/operations/production-recovery.md`
- `.github/workflows/backup-restore-validation.yml`

Important boundaries from the runbook:
- A Git bundle backs up Git objects and refs only.
- It does not back up Issues, PR conversations, review comments, Actions logs/artifacts, repository settings, secrets, Pages settings, DNS, or external accounts.
- The Actions artifact is a short-retention recovery copy; it is not an owner-controlled off-platform backup.
- An off-platform encrypted backup destination, retention, and access policy require owner approval.
- Restore and production rollback drills must not be claimed as complete until executed and recorded.
- Do not force-push, reset `main`, or change DNS to roll back production.

## 8. Business email and external systems

Business email must remain independent of website hosting. The current site content says contact details and collaboration processes are pending privacy review and corporate email configuration.

No live CMS, CRM, portal, form-processing backend, or production database is confirmed in this repository. Supabase assessment records state that Supabase is outside the static website runtime. Treat future integrations as separate architecture work with an ADR, threat model, data-flow map, privacy/retention policy, and owner approval.

## 9. Incident and change control

For any production-affecting change:
1. Identify current production commit and last known-good deployment.
2. Create a feature or rollback branch.
3. Make the smallest scoped change.
4. Add regression coverage.
5. Run CI, CodeQL, dependency audit, browser QA, and applicable specialized audits.
6. Review the diff and deployment preview.
7. Merge only through the protected-branch process.
8. Verify deployment and smoke tests.
9. Record evidence, operator, time, commit, workflow IDs, and result.
10. Keep rollback instructions available.

Production release requires explicit owner authorization after all required acceptance gates pass.
