# Approved official logo asset — 2026-11-04

## Owner decision

The company owner approved the supplied official logo preview on 2026-11-04. This change applies the approved asset to the website brand mark and PNG favicon.

## Implementation

- Use the owner-approved public PNG in Supabase Storage bucket `site_assets`.
- Render it through the shared `BrandMark` component.
- Set the favicon MIME type to `image/png`.
- Preserve the current JSON-LD serializer and all other current `SiteLayout.astro` behavior from `main`.
- Keep the public logo URL centralized in `src/data/brand.ts`.

## Runtime dependency and risk

The browser must retrieve the logo from Supabase Storage. If the object is unavailable, blocked, or deleted, the brand mark and favicon may not render. The public image response could not be independently checked in this session because the read-only browser runner was unavailable. This limitation must be closed by verifying HTTP 200, `Content-Type: image/png`, and the expected intrinsic dimensions during preview/production QA.

## Rollback

Revert the logo change commit. This restores the repository-local SVG mark and favicon. Do not delete the Supabase Storage object during code rollback.

## Validation

- Prior preview branch CI and CodeQL both passed on its head commit, but those checks do not validate this refreshed branch.
- Require fresh CI and CodeQL on this branch.
- Verify all eight locale routes and both light/dark themes after deployment.
- Verify favicon, Open Graph image metadata, and actual image loading.
- Run post-deployment Browser QA.
