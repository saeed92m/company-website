# Complete Website Project Transfer Package

**Repository:** https://github.com/saeed92m/company-website  
**Transfer branch:** `docs/uiux-handoff-package-v1`  
**Reference baseline:** `main` at `ad395c19f958f0bdc2f0ac235c7264e584347c9a` (the baseline used by the initial handoff brief)  
**Prepared:** 2026-11-13  
**Status:** Transfer documentation in progress; not a production-readiness certificate.

## Purpose

This package transfers the whole website project, not only UI/UX. It is intended for product, UX, visual design, content, localization, frontend engineering, QA, security, SEO, DevOps, and future operations teams.

The complete repository archive is the primary source payload. These documents are the navigation layer, inventory, content/data map, operational guide, and acceptance ledger. Do not treat this folder as a replacement for source code or for the project Master Handbook in Notion.

## Start here

1. Read this file.
2. Read [System and Repository Inventory](SYSTEM-INVENTORY.md).
3. Read [Content and Data Catalog](CONTENT-DATA-CATALOG.md).
4. Read [Operations, Security and Deployment](OPERATIONS-SECURITY.md).
5. Read [Completeness and Acceptance Matrix](ACCEPTANCE-MATRIX.md).
6. Read [UI/UX Team Brief](../ux/handoff/UIUX-TEAM-BRIEF.md).
7. Read repository `README.md`, `docs/handbook/README.md`, all current ADRs, source-of-truth, UX, design, architecture, audit, SEO, and operations records.
8. Compare the transfer baseline with the current `main` and all open PRs before implementation.

## What is included in the repository snapshot

- Application source and route templates.
- Localized company, founder, activity-domain, project, publication, navigation, and UI copy data.
- Brand assets, domain illustrations, project artwork, icons, and self-hosted fonts.
- Design tokens, global styles, and visual-system documentation.
- Architecture decisions, product/UX specifications, content contracts, and handbook evidence.
- Automated tests, validation scripts, GitHub Actions workflows, dependency manifests and lockfile.
- Security, SEO, production acceptance, backup, restore, and rollback documentation.

See the inventory documents for exact paths and caveats.

## What is not included by a public repository ZIP

A ZIP of the repository does not include Git history, non-default branches, tags unless specifically archived, GitHub Issues and PR conversations, review comments, Actions logs/artifacts, repository rules/settings, Pages configuration, secrets, environment variables, DNS registrar state, email-provider configuration, external Notion handbook, external Dropbox source files, or private credentials. Export or transfer these separately through their approved owners and controls.

A ZIP is a source snapshot. To download it, open the repository, select branch `docs/uiux-handoff-package-v1`, select **Code → Download ZIP**. Alternatively, use the GitHub branch archive endpoint: https://github.com/saeed92m/company-website/archive/refs/heads/docs/uiux-handoff-package-v1.zip. For a history-preserving engineering transfer, use a Git clone or mirror and verify refs. For a complete organizational transfer, also export the GitHub metadata and external project records listed in this package.

## Safety and publication rules

- Never add secrets, tokens, credentials, private keys, private contact details, or unapproved personal data.
- Do not publish Alpha Linux or ZTF Classifier repository URLs. Do not publish the Company Platform repository URL unless the owner explicitly approves it.
- Do not claim a CMS, CRM, portal, backend, contact form delivery, analytics, production backup, or rollback drill is operational unless evidence proves it.
- Preserve the legal distinction between public activity areas and registered statutory scope. Motorsport / Performance Parts is identified in source records as a development-roadmap area pending formal legal addition.
- Do not invent clients, partners, awards, certifications, employees, facilities, metrics, or delivered capabilities.
- Keep this website repository separate from Alpha Linux, ZTF Classifier, and Company Platform repositories.

## Build and local verification

Requirements recorded in `package.json`:
- Node.js `>=22.23.4`
- npm with the committed `package-lock.json`

From the repository root:

```bash
npm ci
npm run check
npm test
npm run build
npm run preview
```

Run these commands from a clean checkout of the exact commit under review. Save command output, commit SHA, runtime versions, date, and operator in the acceptance evidence. A successful local build does not prove production acceptance.

## Baseline and drift control

The UI/UX brief was prepared against the baseline SHA above. This transfer branch adds documentation after that baseline. Before work begins, record:
- current `main` SHA;
- transfer branch SHA;
- open PRs and their head SHAs;
- changed files since the baseline;
- current production deployment SHA;
- current workflow/check results.

If any code or content has changed since the baseline, update the inventory and mark the affected evidence stale until revalidated.

## Completion rule

The transfer is complete only when every acceptance item is either verified with evidence, explicitly not applicable with a reason, or listed as blocked/deferred with an owner and next evidence required. Unknown does not mean passed.
