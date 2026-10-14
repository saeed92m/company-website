# Supabase Assessment and Architecture Decision

**Status:** Provisioned for future evaluation; not integrated into the current static website  
**Reviewed:** 2026-10-14  
**Scope:** Corporate website repository and connected Supabase project

## Decision summary

The website remains an Astro static site deployed through GitHub Pages. Its current content and public routes are generated from repository-managed source files. No current requirement justifies adding a runtime database dependency to the public website.

A Supabase project named `company-website` is now present in the connected account. The project is healthy, but its application schema is intentionally empty and the website has no configured Supabase client, Edge Functions, or application data tables. Creating the project does not by itself connect it to the site. Do not add browser-side credentials or migrate static content into a database without an approved feature requirement and reviewed implementation plan.

## Verified Supabase state — 2026-10-14

- Project: `company-website`
- Project ref: `jjypkzunhwtkxzeepgag`
- Status: `ACTIVE_HEALTHY`
- Region: `ap-south-1`
- PostgreSQL: 17.11
- Public application tables: 0
- Public views: 0
- Public policies: 0
- Public functions: 1 — `public.rls_auto_enable()`, a SECURITY DEFINER event-trigger function with `search_path=pg_catalog`
- Recorded database migration: `20261014120423_revoke_public_execution_on_rls_auto_enable`
- The repository tree currently has no `supabase/` directory or checked-in migration file for the remote migration. Read-only inspection recovered the exact remote statement: `REVOKE EXECUTE ON FUNCTION public.rls_auto_enable() FROM PUBLIC, anon, authenticated;`. The live ACL is `{postgres=X/postgres,service_role=X/postgres}`, matching that statement; event trigger `ensure_rls` remains enabled and calls the function for public-table creation DDL. This confirms the remote migration's effect is present, but not why its source was omitted from this website repository. Because the accepted architecture decision is not to integrate Supabase into the current static site, no migration file is being invented or added here. If Supabase is adopted later, decide ownership of the existing remote project and establish a canonical, tested migration baseline before schema changes.
- GitHub's Supabase Preview check is skipped because preview branches are disabled in the project's integration settings. This is currently non-blocking because the website has no database migrations to preview; enabling preview branches is deferred pending a real backend workflow and cost review.
- Supabase Edge Functions: 0
- Development branches: only the default `main` branch
- Supabase Security Advisor: no findings returned at audit time
- Supabase Performance Advisor: no findings returned at audit time

The advisors are point-in-time checks, not a guarantee of production security. Read-only inspection retrieved the live function definition, event-trigger binding, migration statement, and function ACL. No schema, data, policy, function, grant, key, or project setting was changed during this audit.

## Integration boundary

For the current release:
- GitHub repository content remains the source of truth for public website content.
- GitHub Pages remains the production delivery platform.
- Supabase is not a runtime dependency and is not represented as a working CMS, contact-form backend, CRM, or portal.
- Do not create placeholder tables or copy website content into Supabase just to make the systems appear connected.

Before integration:
1. Approve a concrete feature and define its data owner and users.
2. Compare Supabase with simpler form/CRM or CMS options, including cost and operational burden.
3. Define data minimization, consent, retention, deletion, backup/restore, incident ownership, and failure behavior.
4. Design least-privilege grants and Row Level Security for every exposed table; test allowed and denied operations for anonymous and authenticated roles.
5. Keep service-role credentials server-side only; never expose them in browser bundles or commit secrets.
6. Manage schema changes as reviewed, versioned migrations in the repository and validate them in a non-production environment before production application.
7. Update this assessment, architecture documentation, handbook, and changelog together when the decision changes.

## Acceptance gate

A named feature requirement, cost/architecture comparison, security and privacy review, tested failure behavior, and explicit go/no-go decision are required before introducing a backend dependency.

## Changelog

- 2026-10-14: Replaced the stale “no projects” statement with the observed connected project state. Confirmed the project is provisioned but intentionally not integrated; read-only schema inventory and both Supabase advisor checks completed.
- 2026-10-14: Verified the remote migration SQL and current function ACL match. Documented the repository provenance gap without adding an unreviewed migration or changing the database.
- 2026-10-12: Added initial assessment; no website code or hosting changes.
