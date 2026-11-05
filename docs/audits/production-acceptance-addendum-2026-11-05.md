# Production acceptance addendum — 2026-11-05

**Repository:** `saeed92m/company-website`  
**Production branch:** `main`  
**Production commit:** `3dad024ea6c4261dc6153db0bbcca9f04f3d45c2`  
**PR:** [#88](https://github.com/saeed92m/company-website/pull/88), merged 2026-11-05 11:50:05 UTC  
**Overall status:** In Progress. This addendum records verified post-merge evidence and separates it from owner-dependent or unverified controls.

## Verified on the current production commit

- CI run [42022156023](https://github.com/saeed92m/company-website/actions/runs/42022156023): Repository baseline job completed successfully.
- CodeQL run [42022156078](https://github.com/saeed92m/company-website/actions/runs/42022156078): analysis job completed successfully. This does not prove the Code Scanning alert inventory is empty.
- Dependency Security Audit run [42022156007](https://github.com/saeed92m/company-website/actions/runs/42022156007): audit job completed successfully. This does not prove GitHub Dependabot alert inventory is empty.
- GitHub Pages run [42022156060](https://github.com/saeed92m/company-website/actions/runs/42022156060): build, deploy, and smoke jobs completed successfully.
- PR #88 narrowed Pages workflow token permissions to the deploy job and removed unused public asset-share URL material.
- Repository remains public by accepted project decision. Active `main-protection` ruleset requires PRs and six checks, blocks branch deletion and non-fast-forward updates, and has no bypass actors. It requires zero approving reviews; this is a governance limitation, not a failed workflow.
- Supabase project `jjypkzunhwtkxzeepgag` is `ACTIVE_HEALTHY` on PostgreSQL 17.11.
- Latest Supabase Security Advisor and Performance Advisor calls both returned zero findings.
- The current Supabase `public` schema has no application tables. The remote migration inventory contains one migration, `20261014120423_revoke_public_execution_on_rls_auto_enable`.
- The Supabase project is not a runtime dependency of the static website. No database grants, policies, schema, data, keys, or settings were changed.
- Browser QA for the exact PR #88 merge commit was not verified in this check. The earlier three-engine result remains historical evidence for the previous main baseline only.

## Open gates — not verified as passed

1. **GitHub security settings and alert inventory:** Secret Scanning, Push Protection, Dependabot alerts/security updates, and CodeQL alert inventory could not be read through the connected GitHub integration. A successful CodeQL workflow is not an alert-backlog review.
2. **Private vulnerability reporting:** not verified as enabled. `SECURITY.md` now avoids directing reporters to public issues. The owner must enable the GitHub feature and test its report path, or approve a monitored private contact.
3. **Live HTTPS headers:** CSP, HSTS, Referrer-Policy, X-Content-Type-Options, Permissions-Policy, and frame protection remain unverified. A live request from the current execution environment failed at DNS resolution. GitHub Pages does not provide repository-level custom response-header configuration. Do not add a non-functional `_headers` file.
4. **Accessibility:** automated browser checks do not replace manual WCAG 2.2 AA testing with keyboard and assistive technology.
5. **Performance:** Lighthouse and Core Web Vitals measurements are not recorded for representative routes/locales.
6. **Physical devices and network reachability:** physical-device checks and VPN-free reachability from target networks are not recorded.
7. **Recovery:** no backup restore drill or Pages rollback drill is recorded.
8. **Branch hygiene:** many non-main branches exist. Do not bulk-delete them. Each branch needs a merged-PR or active-work-item mapping and a secret/unpublished-content review before deletion.
9. **Supabase future privilege posture:** current default privileges for future public objects are broader than least privilege. This is a latent risk, not current application-data exposure. Do not alter production grants until migration ownership and a tested baseline strategy are approved. Revisit before creating any application table or function.

## Supabase migration scope decision

Supabase remains provisioned but intentionally outside the current static website runtime. The original migration source file was not recovered. The exact remote SQL statement and its live effect were documented in the Supabase assessment. Do not fabricate original provenance or mutate production to make local and remote migration histories appear aligned.

Issue #57 can be treated as **not planned for the current static-site release**, provided the owner accepts this exception: no application schema changes, no Supabase runtime integration, and no production migration until a future backend feature is approved. Reopen the work before the first schema change. This exception does not certify a reproducible migration baseline.

## Change and validation record

- PR #88 is merged. Its six required checks passed before merge.
- Post-merge CI, CodeQL, Pages deploy/smoke, and dependency audit jobs listed above completed successfully.
- No production DNS, hosting architecture, database, credentials, account authentication, or repository visibility settings were changed in this follow-up.
- Keep Issue #69 open until each applicable gate has evidence or an explicit owner-approved exception.
