# Portal Entry Implementation — 2026-11-15

- **Repository:** `saeed92m/company-website`
- **Production baseline:** `ad395c19f958f0bdc2f0ac235c7264e584347c9a`
- **Feature branch:** `feat/company-user-admin-portals`
- **Production branch:** `main`
- **Status:** Frontend entry routes implemented on a feature branch; backend authentication and full administration remain blocked.

## User requirement

- Add User Portal and Admin Panel under Company, after Board of Directors.
- User Portal: username and password entry only. Do not add post-login features in this phase.
- Admin Panel: username or email plus password. The target is a complete website administration system.
- Preserve the current site and verify the changes before merge.

## Repository findings

- The website uses Astro 7.4.2 and static output on GitHub Pages.
- The website has eight locales: Persian, English, Arabic, Russian, German, Chinese, French, and Spanish. Persian and Arabic use RTL.
- The current website has no authentication client or protected backend route.
- The connected Supabase project is `company-website` (`jjypkzunhwtkxzeepgag`), reported as `ACTIVE_HEALTHY`.
- The Supabase function inventory returned no Edge Functions.
- A live table and migration inspection could not complete. The database connector returned PostgreSQL error `28P01` (password authentication failed). This change did not retry with guessed credentials or alter database state.
- The previous repository audit recorded zero public application tables and no website/Supabase runtime integration. This historical snapshot is not treated as a fresh database inspection.

## Implemented in this branch

- Added localized User Portal and Admin Panel links after Board of Directors in the Company submenu.
- Added localized sign-in entry routes for all eight locales.
- User Portal asks for username and password.
- Admin Panel asks for username or email and password.
- The sign-in action is disabled. The page does not include a form submission handler or an API request.
- The pages show a clear notice that sign-in is not active. The page does not send or store the entered values.
- Added `noindex,nofollow,noarchive` metadata. Excluded the pages from sitemap generation.
- Added smoke-test routes for GitHub Pages and browser test routes for Chromium, Firefox, and WebKit.
- Added regression tests for menu order, translations, disabled sign-in, no client credential submission, noindex, sitemap exclusion, and test-route coverage.

## Not implemented

- No account registration or password recovery.
- No real user or administrator authentication.
- No user dashboard after login.
- No administrator dashboard or CRUD operations.
- No user/role database tables, RLS policies, migrations, or Edge Functions.
- No administrator account or credential was created.
- No Supabase project settings, database, hosting, DNS, or production configuration was changed.

## Security rationale

- Static GitHub Pages cannot validate credentials or protect server-side resources.
- Supabase's standard password sign-in accepts email or phone with a password. It does not accept a username as the identifier. The administrator username option requires a private server-side resolver.
- Administrator permissions must be enforced by a protected API and database policies. A frontend-only role check is not sufficient.
- Privileged Supabase keys must remain server-side.
- Administrator MFA, rate limits, audit logs, session controls, and RLS tests are prerequisites for activation.

## Verification record

The implementation must not be marked complete until the PR checks pass. Required evidence:

- `npm test`
- `npm run check`
- `npm run build`
- GitHub Actions CI
- CodeQL
- Dependency Security Audit
- Browser QA (8 locales, 2 viewports, 3 browser engines)
- GitHub Pages build/deploy/smoke workflow after merge

The public production branch remains unchanged by this feature branch. The PR must remain unmerged until the Product Owner reviews it and the required checks pass.

## Next blocker

Before activating login, reconcile the Supabase database migration baseline and inspect Auth provider settings. Provision the first administrator through a secure, verified process. Then implement the private username resolver, server-side RBAC, MFA, RLS, audit logs, and protected admin API. Re-test anonymous and ordinary-user denial before enabling any administrative action.

## PR #135 verification — 2026-11-15

Commit: `0c3169f8c9a8f430078d4ce4030c8f4b1f5949f8`

| Check | Result | Evidence |
|---|---|---|
| CI | Passed | 46 tests passed; `astro check` reported 0 warnings; build generated 138 pages |
| CodeQL | Passed | Workflow run 43710031660 |
| Browser QA — Chromium | Passed | 128 route/viewport checks |
| Browser QA — Firefox | Passed | 128 route/viewport checks |
| Browser QA — WebKit | Passed | 128 route/viewport checks |
| Automated accessibility | Passed | Axe reported 0 violations |
| Repository backup/restore validation | Passed | Workflow run 43710031628 |
| Dependency Security Audit | **Failed** | Existing locked Astro dependency is `7.4.2`; npm audit reports two moderate advisories affecting Astro versions through 7.4.6 |

The dependency audit reported:
- `GHSA-mh32-jxcr-mh9f` — dynamic tag-name attribute injection.
- `GHSA-r3h5-4585-7x3w` — case-variant sibling output-directory read in the `@astrojs/node` image endpoint.

The audit output identifies `astro@7.4.12` as a fix, outside the package's current pinned version. This PR does not modify the dependency manifest or lockfile. Do not apply a forced dependency update without a separate compatibility and regression review.

All three browser engines passed the new access-page checks. The tests verify the identifier field, password field, disabled sign-in action, and noindex metadata.

The GitHub Pages deployment/smoke workflow is configured for the new routes but has not run against Production. It runs on the production deployment workflow after merge. No production deployment has occurred.

**Merge status:** Do not merge while the required Dependency Security Audit is failing. The branch and PR remain open. Production `main` is unchanged.


## Dependency remediation — 2026-11-15

The earlier dependency failure is resolved on the PR branch.

- Pinned `astro` to `7.4.11` in `package.json`.
- Regenerated `package-lock.json` with npm 10.9.9 on Node.js 22.23.4.
- Verified the lockfile root dependency and resolved package both equal `7.4.11`.
- Ran a clean `npm ci --ignore-scripts --no-audit --no-fund`.
- `npm audit --audit-level=high`: passed.
- `npm audit --omit=dev --audit-level=low`: passed with no remaining reported vulnerabilities.
- `npm test`: passed (46 tests).
- `npm run check`: passed with 0 warnings.
- `npm run build`: passed; the static build completed.

The official Astro release notes identify `7.4.7` as the patch for the case-sensitive output-path issue. The dynamic-tag XSS issue was fixed in `7.4.5`. Version `7.4.11` is a later stable patch release. References:
- https://github.com/withastro/astro/blob/main/packages/astro/CHANGELOG.md
- https://github.com/advisories/GHSA-mh32-jxcr-mh9f
- https://github.com/advisories/GHSA-r3h5-4585-7x3w

The remediation verification ran in GitHub Actions run [43711651694](https://github.com/saeed92m/company-website/actions/runs/43711651694). That workflow committed the verified manifest and lockfile update to the feature branch, then removed itself. The resulting dependency commit is `0bb592385d9a0857e3a815699e5aec525612cc5b`.

The standard PR workflows must pass on the final documentation commit before merge. The production Pages deployment and smoke workflow has not run. Production `main` remains unchanged.
