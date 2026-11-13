# UI/UX Handoff Package — Read Me

This folder contains the project-specific brief for the independent UI/UX team.

## Package contents
- `UIUX-TEAM-BRIEF.md`: authoritative engagement brief, project constraints, required deliverables, Figma structure, and acceptance gates.
- The repository root contains the complete source tree at the package baseline, including:
  - Astro/TypeScript source;
  - localized content and route definitions;
  - images, logos, SVG artwork, and self-hosted fonts;
  - design-system and global styles;
  - tests and validation scripts;
  - existing UX, visual-design, architecture, ADR, audit, and operations documentation;
  - GitHub Actions workflows and dependency lockfile.

## Baseline
- Branch: `main`
- Commit: `ad395c19f958f0bdc2f0ac235c7264e584347c9a`
- Prepared: 2026-11-13

## How to obtain the complete source
Download the repository ZIP from the branch archive link supplied with this handoff, or clone the repository. The ZIP contains the full source snapshot, not a flattened website screenshot.

For a local build:
1. Install Node.js 22.23.4 or newer.
2. Run `npm ci`.
3. Run `npm run check`.
4. Run `npm test`.
5. Run `npm run build`.
6. Run `npm run preview` and inspect the generated site.

Use the existing project instructions and environment variables. Do not commit secrets or private credentials.

## Important distinction
This is a complete source-and-documentation handoff snapshot. It is not a claim that every UX decision, every translation, every accessibility requirement, contact/privacy flow, or production acceptance gate is complete. The UI/UX team must verify the live deployment and record findings before finalizing design.
