# Security assessment — 2026-11-05

## Status

**In Progress — read-only assessment completed for the accessible surfaces; remediation and owner-level verification remain open.**

- Repository: `saeed92m/company-website`
- Production commit inspected: `2e2eac9da0838c0ef4d5b3ba6c264764e662ce58`
- Production URL: `https://saeed92m.github.io/company-website/fa/`
- Supabase project: `company-website`
- Tracking: [Issue #69 — Complete production security and operational acceptance](https://github.com/saeed92m/company-website/issues/69)

## Scope and method

This assessment inspected repository metadata, the active main-branch ruleset, branch inventory, the default-branch file tree, selected workflows and application source, GitHub code-search results for common unsafe DOM and credential patterns, the deployed homepage, and the connected Supabase project's schema, grants, policies, functions, storage inventory, migrations, extensions, and Security/Performance Advisors.

The assessment used read-only operations. It did not run destructive tests, modify production data, change DNS, rotate credentials, or attempt to bypass authentication. The available browser automation service did not have sufficient credits to run a full external header test. The public-page fetch returned HTTP 200 and HTML, but did not expose response headers.

## Verified positive controls

### GitHub repository

- Repository visibility is already **public**. This is an accepted project decision in ADR-0005. Do not treat a visibility change as a security fix.
- The active `main-protection` ruleset requires pull requests, blocks deletion and non-fast-forward updates, requires six CI/security/browser checks, and has no bypass actors.
- The ruleset currently requires zero approving reviews. This is a governance limitation, not a bypass: all merges still require the configured checks and a PR.
- The latest production commit passed CI, CodeQL, Dependency Security Audit, GitHub Pages deployment/smoke, and 288 production Browser QA checks (96 each in Chromium, Firefox, and WebKit).
- The inspected GitHub Actions use full commit-SHA pins for third-party actions.
- CI, CodeQL, Browser QA, and dependency-audit workflows declare read-only repository permissions.
- The source search found no `innerHTML`, `outerHTML`, `eval(`, or `dangerouslySetInnerHTML` use in the indexed default-branch source. One Astro `set:html` use renders JSON-LD through `serializeJsonLd`, which escapes HTML-significant characters and Unicode line separators.
- External links found with `target="_blank"` use `rel="noopener noreferrer"` (one also uses `me`).
- The current default-branch tree contains no obvious `.env`, private-key, certificate, database-dump, or backup file paths. Searches for common GitHub, AWS, Supabase service-key, and private-key patterns returned no matches in the indexed default branch. A separate search did find an unused Dropbox shared-file URL containing an `rlkey` parameter in `src/data/brand.ts`; the URL was not used by the application and has been removed in this PR. This was a public asset-share URL, not confirmed to be a credential or private secret.

These source searches are useful signals only. They do not prove that no credential exists in old commits, other branches, Actions logs, artifacts, or GitHub settings.

### Website runtime

- The application is an Astro static site. The Contact route is informational; it does not submit data to an application endpoint.
- The inspected source and dependency manifest do not show a Supabase client dependency or a website runtime integration with Supabase.
- The deployed homepage returned HTTP 200 in the public-page fetch.
- No application login, session, user-submission, or server-side API surface was identified in the inspected routes.

The static architecture reduces the application's direct attack surface. It does not remove risks in the source repository, deployment pipeline, hosting platform, DNS, or future integrations.

### Cloudflare account and Pages preview

- The connected Cloudflare identity is the account's only listed member and has the **Super Administrator — All Privileges** role. The account member record reports `two_factor_authentication_enabled: false`. This is an account-security gap; enable MFA for the Cloudflare login before using it for production administration. The connector does not provide a safe way to enroll the user's authenticator or recovery method.
- The account's Zone inventory is empty. Therefore, no customer-owned domain/zone is available in this account for DNS, zone-level WAF, or zone security-header configuration. This does not mean Cloudflare's platform-wide protections for `pages.dev` are absent; it means custom zone controls cannot be verified or configured from this account state.
- The only Pages project is `company-website-preview`, linked to `saeed92m/company-website`. Its only configured domain is `company-website-preview.pages.dev`.
- The project is configured for preview deployments. `production_deployments_enabled` is `false`; the most recent deployment inspected is a successful **preview** deployment from PR #88's security branch. This confirms Cloudflare Pages is not the website's Production host and does not currently deploy `main` as a Pages production deployment.
- The account ruleset inventory contains only Cloudflare's managed free firewall ruleset. No custom account-level ruleset was returned. No customer-owned Zone exists for a zone-level WAF configuration review.
- The Cloudflare audit log shows automated Pages certificate provisioning and temporary ACME DNS challenge record creation/deletion for the Pages subdomain. The inspected events are attributed to Cloudflare system actors; no unexplained human administrator action was established by this sample.
- The Pages project has no configured environment variables in the returned project configuration. Its build command is `npm run build`, output directory is `dist`, and framework is Astro. The current preview deployment completed successfully.

**Required action:** enable Cloudflare MFA in the account UI, save recovery codes securely, and verify a second sign-in. Keep Cloudflare Pages preview-only unless a reviewed hosting migration is approved. If a custom domain is added later, onboard the domain/Zone and review DNSSEC, SSL/TLS, WAF, rate limiting, bot controls, cache rules, security headers, and origin exposure before routing Production traffic through it.

### Supabase database

- Project status: `ACTIVE_HEALTHY`; PostgreSQL 17.11.
- Public application schema: zero tables, zero views, zero materialized views, and zero foreign tables.
- Full non-system schema inventory found only Supabase-managed relations in `auth`, `storage`, `realtime`, `vault`, `extensions`, and migration schemas; no application relations were found outside the managed schemas.
- Auth user count: zero.
- Edge Functions: zero.
- Security Advisor: no findings returned at assessment time.
- Performance Advisor: no findings returned at assessment time.
- The public `rls_auto_enable()` event-trigger function is `SECURITY DEFINER`, uses a fixed `search_path = pg_catalog`, and its execution ACL is limited to `postgres` and `service_role`. It is not executable by `PUBLIC`, `anon`, or `authenticated`.
- The `ensure_rls` event trigger is enabled and attempts to enable RLS for new tables created in `public`.
- The `vault` schema denies `USAGE` to `anon` and `authenticated`; the inspected Vault table grants are limited to `service_role`. No SECURITY DEFINER function was found executable by `PUBLIC`, `anon`, or `authenticated` in the non-system schemas.
- The `realtime.messages` relation has RLS enabled and no policies; the default-deny behavior prevents row access through ordinary roles. Auth-managed tables with RLS disabled have no direct table grants to `anon` or `authenticated` in the inspected grants.
- The `site_assets` Storage bucket is public and has a 2 MiB upload-size limit with an image-only MIME allowlist. It contains one PNG object of approximately 1.05 MB. Public read access is expected for a public asset bucket. No Storage RLS policies were found; anonymous uploads or object mutations are therefore not authorized by the inspected policy state.

## Findings and required action

### SEC-01 — GitHub security alert inventories are not verified

**Severity:** High verification priority  
**Status:** Blocked by integration permissions

The connected GitHub interface could not read Secret Scanning alerts, Push Protection configuration, Dependabot alert inventory, or Code Scanning alert inventory. A successful CodeQL workflow does not prove that the alert backlog is empty. The weekly Dependabot configuration file does not prove that Dependabot alerts or security updates are enabled.

**Required evidence:** repository Settings > Security, plus the Security tab alert inventories. Confirm Secret Scanning, Push Protection, Dependabot alerts, Dependabot security updates, and CodeQL alert status. Resolve or explicitly triage all open high/critical alerts. Do not paste secret values into issues or chat.

### SEC-02 — Default privileges in the public schema are broader than required

**Severity:** Medium now; High before adding application tables  
**Status:** Verified; remediation pending migration-governance decision

The live default privileges for objects created by `postgres` in `public` grant table CRUD, function execution, and sequence usage/select to `anon`, `authenticated`, and `service_role`. This is a latent exposure risk for future tables and functions. The current public schema has no application tables or views, and the RLS event trigger is enabled; therefore, this finding is not evidence of current application-row disclosure.

Supabase's current `Securing your API` guide recommends revoking these automatic default grants and granting only the exact access required by each feature. It also documents disabling the Data API when an application does not use Supabase client libraries or REST/GraphQL endpoints.

**Required action:** before the first application table is created, revoke automatic default grants for `anon`, `authenticated`, and `service_role` on tables, functions, and sequences; revoke default function execution from `PUBLIC`; then grant the minimum privileges in the same reviewed migration as each RLS policy. Evaluate disabling the Data API while the website remains static and has no Supabase client integration.

No database grants or settings were changed during this assessment. The existing project has a remote migration-provenance gap tracked in issue #57, and the repository has no canonical Supabase migration baseline. Do not apply a production ACL migration until that provenance and migration ownership are resolved.

### SEC-03 — GitHub Pages deployment token permissions can be narrower

**Severity:** Low  
**Status:** Remediation prepared in this PR

The Pages workflow grants `pages: write` and `id-token: write` at workflow level. Those permissions are therefore available to the build and smoke jobs as well as the deploy job. The deployment action requires these permissions in the deploy job; the build job needs repository read access.

This branch moves the write permissions to the deploy job, keeps `contents: read` for build, and gives the smoke job no token permissions. CI must confirm that the deployment remains functional.

### SEC-04 — Security response headers are not verified

**Severity:** High verification priority  
**Status:** Blocked by hosting visibility

The public fetch confirmed HTTP 200 but did not return response headers. The following remain unverified: HSTS, CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, and frame protection. Existing project audit evidence records that GitHub Pages does not provide repository-level custom response headers.

**Required action:** capture live HTTPS response headers from an independent client. If required headers cannot be enforced on GitHub Pages, evaluate a supported custom-domain/CDN or hosting architecture. Do not change DNS or move hosting without a reviewed migration and rollback plan.

### SEC-05 — Private vulnerability reporting is not established

**Severity:** Medium  
**Status:** Unverified

`SECURITY.md` currently refers to a private reporting channel that will be established later. The private vulnerability reporting setting could not be verified through the connected GitHub interface.

**Required action:** enable GitHub private vulnerability reporting in repository Settings if available, verify the private report flow, and update `SECURITY.md` to point to the working mechanism. Do not direct reporters to public issues for undisclosed vulnerabilities.

### SEC-06 — Public repository branch inventory needs cleanup review

**Severity:** Low  
**Status:** Open

The repository has many unprotected feature, fix, and documentation branches. The `main` ruleset protects the production branch, but the other branches remain publicly readable and are not protected by that ruleset. Public visibility is intentional, but stale branches can expose obsolete source and unreviewed documentation.

**Required action:** map each branch to an open/merged PR or active work item. Delete only branches confirmed merged and no longer needed. Before deletion, scan their reachable history for secrets and unpublished material. Do not bulk-delete branches based only on age or naming.

### SEC-07 — Full secret-history scan is not proven

**Severity:** High verification priority  
**Status:** Unverified

Default-branch code searches for common token patterns returned no matches, and the current tree contains no obvious secret-file paths. The available interface could not retrieve Secret Scanning alerts or prove coverage of all branches, commits, artifacts, and workflow logs.

**Required action:** enable Secret Scanning and Push Protection; review the alert inventory; scan all refs and historical commits with an approved secret scanner. If a credential is found, revoke and rotate it first. Removing a secret from the latest commit is not sufficient.

### SEC-08 — Backup, restore, and rollback evidence is missing

**Severity:** Medium  
**Status:** Pending

No restore or rollback drill was executed in this assessment. A Git repository is not a complete backup of GitHub settings, Actions secrets, deployment configuration, or the Supabase project.

**Required action:** define backup scope, protect backup access, test restoration, and record recovery time and data-loss limits. Run a Pages rollback drill and a separate Supabase backup/restore test before the database is used for application data.

## Repository visibility decision

The repository is already public by accepted ADR-0005. GitHub documents that GitHub Free requires public repositories for GitHub Pages. If this personal account uses GitHub Free, changing the repository to private will automatically unpublish the Pages site. Paid GitHub plans support Pages from private repositories, but the published site remains publicly reachable by default unless an eligible Enterprise access-control feature is configured.

Making a repository private does not make already-public forks private, and it does not erase copies, caches, or previously exposed credentials. Do not change visibility as a substitute for secret rotation or source-history remediation.

## Overall conclusion

The inspected website is a static application with a small runtime attack surface. The production CI, CodeQL, dependency audit, deployment, smoke, and cross-browser checks pass. The Supabase project currently has no application tables, no Auth users, and no Edge Functions.

The project is **not yet verified as fully secure**. The highest-priority remaining items are GitHub security-setting and alert verification, the latent Supabase default-privilege configuration before any future database use, live HTTPS response-header verification, private vulnerability reporting, complete history/branch secret scanning, and recovery drills.

Do not claim a penetration-test certification or a zero-risk posture from these checks. A controlled external penetration test should follow only after scope, test accounts, rate limits, and a staging target are approved.

## References

- [Supabase — Securing your API](https://supabase.com/docs/guides/api/securing-your-api)
- [GitHub — What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [GitHub — Setting repository visibility](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)
- [GitHub — Workflow permissions](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax)
