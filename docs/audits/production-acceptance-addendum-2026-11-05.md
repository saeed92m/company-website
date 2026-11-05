# Production acceptance addendum — 2026-11-05

**Repository:** `saeed92m/company-website`  
**Production branch:** `main`  
**Current main HEAD:** `6b220525f9d2e7a443fa8cac63d99b377e9d0f00`  
**Current application-source commit:** `3dad024ea6c4261dc6153db0bbcca9f04f3d45c2`  
**Latest application PR:** [#88](https://github.com/saeed92m/company-website/pull/88), merged 2026-11-05 11:50:05 UTC  
**Latest documentation PR:** [#89](https://github.com/saeed92m/company-website/pull/89), merged 2026-11-05  
**Overall status:** In Progress. This addendum separates source-code evidence, deployment evidence, and open owner-dependent controls.

## Current main and deployment evidence

PR #89 changed documentation only. Its merge commit is the current `main` HEAD. The Pages workflow deployed that commit successfully.

- CI [42053095375](https://github.com/saeed92m/company-website/actions/runs/42053095375): success.
- CodeQL [42053095890](https://github.com/saeed92m/company-website/actions/runs/42053095890): success.
- Dependency Security Audit [42053095564](https://github.com/saeed92m/company-website/actions/runs/42053095564): success.
- GitHub Pages [42053095907](https://github.com/saeed92m/company-website/actions/runs/42053095907): build, deploy, and smoke jobs succeeded on `6b220525...`.
- Browser QA [42053363792](https://github.com/saeed92m/company-website/actions/runs/42053363792): post-deployment Chromium, Firefox, and WebKit matrix started for `6b220525...`. Its final conclusion must be recorded before this checkpoint is marked complete.

The prior application-source commit `3dad024...` also passed CI [42022156023](https://github.com/saeed92m/company-website/actions/runs/42022156023), CodeQL [42022156078](https://github.com/saeed92m/company-website/actions/runs/42022156078), Dependency Security Audit [42022156007](https://github.com/saeed92m/company-website/actions/runs/42022156007), and Pages deployment [42022156060](https://github.com/saeed92m/company-website/actions/runs/42022156060).

Production Browser QA [42022265665](https://github.com/saeed92m/company-website/actions/runs/42022265665) passed on `3dad024...`: 96 route/viewport checks in each of Chromium, Firefox, and WebKit (288 total). PR #89 changed documentation only. The new deployment QA run is tracked separately above.

## Verified repository controls

- Repository visibility is public by accepted project decision.
- The active `main-protection` ruleset (ID `26575062`) targets the default branch, requires pull requests and six status checks, blocks branch deletion and non-fast-forward updates, and has no bypass actors.
- The ruleset requires zero approving reviews. This is a governance limitation; it is not evidence of a failed workflow.
- PR #88 narrowed GitHub Pages workflow token permissions to the deploy job and removed an unused public asset-share URL.
- Supabase project `jjypkzunhwtkxzeepgag` was reported `ACTIVE_HEALTHY` on PostgreSQL 17.11 in the read-only assessment.
- The latest Supabase Security Advisor and Performance Advisor calls returned zero findings at the assessment checkpoint.
- The Supabase `public` schema had no application tables at that checkpoint. The remote migration inventory contained one migration: `20261014120423_revoke_public_execution_on_rls_auto_enable`.
- Supabase is not a runtime dependency of the static website. No database grants, policies, schema, data, keys, or settings were changed in this work.

## Security source review

- Indexed source searches found no `innerHTML`, `outerHTML`, `insertAdjacentHTML`, `document.write`, `eval(`, or `dangerouslySetInnerHTML` usage.
- One Astro `set:html` use inserts JSON-LD produced by `serializeJsonLd`. The serializer escapes `<`, `>`, `&`, U+2028, and U+2029. Regression tests verify script-context escaping and JSON round-trip behavior.
- Inspected external links using `target="_blank"` include `rel="noopener noreferrer"` (one also includes `me`).
- These searches and file reviews are limited evidence. They do not replace a complete manual source review or secret-history scan.

## Open gates — not verified as passed

1. **GitHub security settings and alert inventory:** Secret Scanning, Push Protection, Dependabot alerts/security updates, and CodeQL alert inventory could not be verified through the connected GitHub interface. Successful workflow runs do not prove alert inventories are empty.
2. **Private vulnerability reporting:** not verified as enabled. `SECURITY.md` now avoids directing reporters to public issues. The owner must enable and test GitHub private vulnerability reporting, or approve a monitored private contact and response owner.
3. **Live HTTPS headers:** CSP, HSTS, Referrer-Policy, X-Content-Type-Options, Permissions-Policy, and frame protection remain unverified. Direct inspection was unavailable from this execution environment. GitHub Pages does not provide repository-level custom response-header configuration. Do not add a non-functional `_headers` file.
4. **Accessibility:** automated browser checks do not replace manual WCAG 2.2 AA testing with keyboard and assistive technology.
5. **Performance:** Lighthouse and Core Web Vitals measurements are not recorded for representative routes and locales.
6. **Physical devices and network reachability:** physical-device checks and VPN-free reachability from intended target networks are not recorded. Browser Use could not run because its connected project had insufficient credits.
7. **Recovery:** the procedure is documented in [the production recovery runbook](../operations/production-recovery.md). No production rollback drill or backup-restore drill is recorded.
8. **Backup policy:** destination, encryption, access control, retention, cadence, and recovery objectives have not been approved. Git history is not a complete backup of repository settings, secrets, Actions variables, releases, issues, or pull requests.
9. **Branch hygiene:** do not bulk-delete branches. Map each branch to a merged PR or active work item and review it for secrets and unpublished content before deletion.
10. **Supabase future privilege posture:** default privileges for future public objects were broader than least privilege in the prior assessment. This is a latent risk, not evidence of current application-data exposure. Do not change production grants until migration ownership and a tested baseline strategy are approved. Revisit before creating any application table or function.

## Supabase migration scope decision

Supabase remains provisioned but outside the current static website runtime. The original migration source file was not recovered. The exact remote SQL statement and its live effect were documented in the Supabase assessment. Do not fabricate original provenance or mutate production to make local and remote migration histories appear aligned.

Issue #57 is closed as **not planned for the current static-site release**. This is a scope exception: no application schema changes, no Supabase runtime integration, and no production migration until a future backend feature is approved. Reopen the work before the first schema change. This exception does not certify a reproducible migration baseline.

## Change and validation record

- PR #88 is merged. Its six required checks passed before merge.
- PR #89 is merged. Its four PR workflows passed: CI [42023230885](https://github.com/saeed92m/company-website/actions/runs/42023230885), Dependency Security Audit [42023230876](https://github.com/saeed92m/company-website/actions/runs/42023230876), Browser QA [42023230947](https://github.com/saeed92m/company-website/actions/runs/42023230947), and CodeQL [42023230740](https://github.com/saeed92m/company-website/actions/runs/42023230740).
- The post-PR-89 Pages deployment, CI, CodeQL, and dependency audit runs succeeded on current `main`. The post-deployment Browser QA matrix is still in progress at this record.
- PR #90 remains open and paused by owner direction. GA4 and Search Console work is deferred. No measurement ID or Google account configuration was added.
- No production DNS, hosting architecture, database, credentials, account authentication, or repository visibility settings were changed.
- Keep Issue #69 open until each applicable gate has evidence or an explicit owner-approved exception.
