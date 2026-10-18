# Reversible logo preview — 2026-10-19

## Status

In progress — isolated preview branch only. Not merged and not deployed to Production.

## Source

Owner-confirmed official company logo, stored in the public Supabase Storage bucket `site_assets`:

`https://jjypkzunhwtkxzeepgag.supabase.co/storage/v1/object/public/site_assets/46E04CA0-22BD-4B55-B220-E200E8AFF33C.png`

## Scope

- Route the shared logo asset to the supplied PNG.
- Render the same supplied image through the shared `BrandMark` component.
- Use the PNG as the favicon reference where the browser supports it.
- Keep legal company identity and existing public brand text unchanged.
- Do not alter `main` or Production.

## Rollback

Close the preview PR without merging, or revert the preview branch changes. The existing inline/vector mark remains intact on `main`. The Supabase object is not deleted by code rollback.

## Risks and validation still required

- Supabase Storage availability becomes a runtime dependency for logo rendering.
- Confirm the public object returns HTTP 200 and an image/png content type.
- Visually inspect the asset and its intrinsic aspect ratio on desktop/mobile and light/dark themes.
- Run `npm ci`, `npm run check`, and `npm run build`; verify favicon, Open Graph metadata, and all eight locale routes.
- No CI or visual/browser test result is claimed until actually run.
