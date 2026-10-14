# Company Website — Repository and Supabase Alignment Audit

**Audit date:** 2026-10-14  
**Repository:** `saeed92m/company-website`  
**Production branch:** `main`  
**Audited main commit:** `7ce4895c7f83892c38eacaa773ae6fb5ad18c6e3`  
**Scope:** Repository structure, current project documentation, CI/deployment configuration, and connected Supabase project. This is an evidence-based point-in-time audit, not a claim that every browser/device or external Notion page was independently revalidated.

## Executive result

**Repository status:** Current static-site implementation and documented release baseline are coherent.  
**Supabase status:** Project exists and is healthy, but is not integrated with the website. Its public application schema is empty.  
**Production posture:** Keep GitHub Pages + Astro static delivery as-is. Do not create database tables or wire a frontend client without a real feature requirement.  
**Changes made by this audit:** Documentation-only changes proposed on a dedicated branch. No production database mutation was performed.

## Evidence reviewed

- Repository metadata: public repository, default branch `main`, connected account has administrative/push permissions.
- README: describes six company domains, eight supported locales, and static corporate-site scope.
- `package.json`: Astro 7.3.5; Node.js >=22.19.0; scripts for development, build, preview, and Astro checks.
- `astro.config.mjs`: static output; site/base values are environment-configurable.
- GitHub Actions: CI, CodeQL, browser QA, and GitHub Pages deployment workflows exist.
- Latest retrieved Browser QA run: `38321957682`, completed successfully on 2026-10-12 for the audited main SHA.
- Content architecture: localized content is repository-managed under `src/content` and `src/data`; public routes cover company, management/CEO, fields, projects, and contact.
- Existing Supabase assessment was stale: it said no projects existed, while the connected account now lists a healthy `company-website` project.

## Supabase inventory

| Item | Observed state |
|---|---|
| Project | `company-website` |
| Project ref | `jjypkzunhwtkxzeepgag` |
| Region / database | `ap-south-1` / PostgreSQL 17.11 |
| Status | `ACTIVE_HEALTHY` |
| Public application tables / views | 0 / 0 |
| Public policies | 0 |
| Public functions | 1: `rls_auto_enable()` |
| Recorded migration | `20261014120423_revoke_public_execution_on_rls_auto_enable` |
| Edge Functions | 0 |
| Development branches | Default `main` only |
| Security Advisor | No findings returned |
| Performance Advisor | No findings returned |

The public function is a SECURITY DEFINER event-trigger function and has `search_path=pg_catalog`. No public application tables currently exist, so there are no application-table RLS policies to validate. Advisor results are not a substitute for authorization tests once tables are introduced.

## Cross-system alignment

- **Content:** Keep approved source content in repository files for the current static website. Supabase is not a content database.
- **Deployment:** GitHub Pages remains the configured production host; the Supabase project does not deploy or serve the website.
- **Secrets:** No Supabase keys are needed in the current frontend. Never place service-role credentials in public code, Git history, or client-side environment variables.
- **Schema management:** If a backend feature is approved later, introduce reviewed migrations and RLS tests in Git before changing production.
- **Notion:** The repository handbook states that Notion's Corporate Website Master Handbook is the project-level decision record. This audit does not claim the Notion page was updated; it must be synchronized after the repository PR is accepted if the connected Notion page is accessible.
- **Release evidence:** Keep audit evidence in version control and retain CI/deployment checks as the gate for merging.

## Follow-up checklist

- [x] Inspect repository metadata and main-branch structure.
- [x] Review README, architecture, source-of-truth, security baseline, Phase 7 evidence, and Supabase assessment.
- [x] Inspect Supabase project status, public schema inventory, migrations, extensions, Edge Functions, branches, and Security/Performance Advisors.
- [x] Confirm no application tables or public RLS policies exist.
- [x] Keep database unchanged because no approved backend feature requires schema changes.
- [ ] Merge the documentation PR only after its required CI/CodeQL checks pass.
- [ ] Synchronize the Notion Master Handbook after confirming access to the canonical page.
- [ ] Revisit Supabase only when a specific form, CMS, authenticated portal, or other persistent-data requirement is approved.

## Limitations

This audit did not perform a physical-device visual inspection, restore a database backup, test any form submission (the current project has no Supabase-backed form), or validate private Notion content. These remain separate checks when relevant to the next release or an approved backend feature.
