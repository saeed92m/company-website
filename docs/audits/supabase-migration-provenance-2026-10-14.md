# Supabase Migration Provenance Verification

**Date:** 2026-10-14  
**Project:** `company-website` (`jjypkzunhwtkxzeepgag`)  
**Method:** Read-only PostgreSQL inspection through the connected Supabase integration.

## Result

The previously noted migration gap has been narrowed: the remote migration history exposes the full statement for migration `20261014120423`, named `revoke_public_execution_on_rls_auto_enable`:

```sql
REVOKE EXECUTE ON FUNCTION public.rls_auto_enable() FROM PUBLIC, anon, authenticated;
```

The live function ACL is `{postgres=X/postgres,service_role=X/postgres}`. This matches the intended effect of the recorded statement. The function remains owned by `postgres`, is `SECURITY DEFINER`, and has `search_path=pg_catalog`.

The enabled event trigger `ensure_rls` invokes `public.rls_auto_enable()` at `ddl_command_end` for `CREATE TABLE`, `CREATE TABLE AS`, and `SELECT INTO`. The function attempts to enable RLS on newly created tables in `public`; exceptions are logged. The public application schema currently has zero tables and zero views.

## Repository alignment decision

The website repository still has no `supabase/` migration directory and no checked-in source for this remote migration. The live state and recorded remote migration are consistent, but repository provenance is not complete.

The accepted architecture decision remains: the current website is an Astro static site on GitHub Pages and does not integrate Supabase. Therefore, this follow-up does **not** create a Supabase migration directory or claim a reconstructed file is the original source. Before any future database/schema change, explicitly decide whether this existing Supabase project becomes repository-managed, establish a canonical migration baseline, and validate it in a non-production environment.

## Change and validation boundary

- Read-only inspection only; no database DDL, data, grants, project settings, or secrets were changed.
- The remote migration's intended ACL effect is verified against the current live ACL.
- No backup/restore test, form submission test, or physical-device visual QA was performed.
- Security and Performance Advisor results were empty at the time of the broader audit; those are point-in-time results, not a production guarantee.
