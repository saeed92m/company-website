# GitHub Actions pinning and security-settings audit — 2026-11-04

## Scope

Review the workflows on `main` and pin every third-party action reference to a full commit SHA. Keep the existing workflow triggers, job permissions, Node.js version, dependency installation, deployment checks, and browser assertions unchanged.

## Baseline evidence

- Repository: `saeed92m/company-website`
- Baseline commit: `a59bb7fc558be2f31d163fed006c55ddfde7588c`
- Four workflows reviewed: CI, Browser QA, CodeQL, and GitHub Pages deployment.
- Existing job-level permissions were already explicit and narrow:
  - CI and Browser QA: `contents: read`
  - CodeQL: `contents: read`, `security-events: write`, `actions: read`
  - Pages build/deploy: `contents: read`, `pages: write`, `id-token: write`

## Changes prepared on branch

All action references are pinned to the full commit SHAs resolved from the upstream Git reference API:

| Action | Version reference | Pinned commit |
|---|---|---|
| actions/checkout | v7 | `3d3c42e5aac5ba805825da76410c181273ba90b1` |
| actions/setup-node | v7 | `949feb2413d6458794dcd2491c4babbbce0c15c1` |
| github/codeql-action | v4 | `1fc58d04a4d4374f921bdac573c3811c240f9c26` |
| actions/upload-pages-artifact | v5 | `fc324d3547104276b827a68afc52ff2a11cc49c9` |
| actions/deploy-pages | v5 | `368f82528645a54fb793d4d04e342629a3f51346` |

Version comments remain beside each SHA for human review. The CodeQL v4 tag is annotated; the API reported its tag signature as unsigned. SHA pinning prevents a mutable tag from silently changing the selected commit. It does not independently establish that upstream source is benign. Review upstream release provenance when updating these pins.

## Source review

- GitHub code search found no `innerHTML`, `outerHTML`, `insertAdjacentHTML`, `document.write`, or `eval(` usage in the indexed default branch.
- One Astro `set:html` use exists in `src/layouts/SiteLayout.astro`. It inserts the JSON-LD string produced by `serializeJsonLd`; the serializer escapes `<`, `>`, `&`, U+2028, and U+2029. Regression tests were added in the earlier JSON-LD hardening change.
- The inspected external links using `target="_blank"` include `rel="noopener noreferrer"` (one also includes `me`).
- Search results are not a substitute for a complete static-analysis review of every source file.

## GitHub security-setting visibility

The connected GitHub read interface does not expose repository secret-scanning configuration, push-protection configuration, or Dependabot alert details. Attempts to read the relevant alert endpoints did not return usable alert data. Do not interpret this as proof that alerts are disabled or that the alert backlog is empty.

The repository rulesets endpoint returned an empty list. The branch-protection endpoint did not provide a usable policy response through this connection. Therefore, required status checks, branch protection, secret scanning, and push protection remain **unverified** and require confirmation in repository Settings.

## Validation required before merge

- Run PR CI and CodeQL against this branch.
- Confirm all workflow YAML parses and all pinned actions resolve.
- Confirm Pages build, deploy, and smoke checks pass in the PR validation context.
- Confirm post-deployment Browser QA after merge.
- Inspect CodeQL and Dependabot alert backlogs in GitHub Security.
- Confirm main branch rules and secret-scanning controls in repository Settings.

## Non-changes

- No repository secrets, credentials, or private keys were read or changed.
- No production database, DNS, custom domain, email, or GitHub Pages settings were changed.
- No change was made to the open logo-preview PR #64.
