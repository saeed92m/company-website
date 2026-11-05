# Production recovery and rollback runbook

**System:** Company corporate website  
**Production host:** GitHub Pages  
**Preview host:** Cloudflare Pages (pull requests only)  
**Status:** Procedure documented; no production rollback or backup-restore drill is claimed.

## 1. Purpose and scope

Use this runbook to recover the static website after a failed or harmful production deployment.

The production deployment workflow is `.github/workflows/deploy-pages.yml`. It builds the site from `main`, deploys the Pages artifact, and runs HTTP, sitemap, SEO, stylesheet, and asset smoke checks.

This procedure does not cover Supabase recovery. Supabase is not part of the website runtime. Do not change its schema, data, grants, or migration history as part of a website rollback.

## 2. Rollback triggers

Start a rollback assessment when one or more of these conditions is confirmed:

- The production Pages deployment or its smoke job fails.
- A production route, locale, stylesheet, script, or required asset has a release-blocking defect.
- A change exposes confidential information or creates a security risk.
- A production change causes a serious accessibility or navigation regression.

Record the affected deployment, commit SHA, observed impact, and evidence in Issue #69 or a dedicated incident record.

Do not roll back based only on an unverified report. Reproduce the issue where practical.

## 3. Identify the last known-good deployment

1. Open the GitHub Actions history for the repository.
2. Find the latest successful **Deploy GitHub Pages** run before the incident.
3. Confirm that its `head_sha` is the commit that produced the deployed artifact.
4. Confirm that its `build`, `deploy`, and `smoke` jobs succeeded.
5. Record the run URL, commit SHA, timestamp, and relevant logs.
6. Check the Browser QA run associated with that deployment. Record its browser engines, locales, routes, and viewport coverage.

Do not assume that a successful build alone means the site was deployed or that the deployed site passed browser checks.

## 4. Preferred rollback method: revert through a pull request

The `main` branch is protected by the active `main-protection` ruleset. Keep that protection in place during recovery.

1. Confirm the exact commit or commits that introduced the defect.
2. Create a recovery branch from the current `main`.
3. Revert the offending commit. PR squash commits normally have one parent and use a standard `git revert <sha>`. Inspect the commit first. Use `git revert -m 1 <sha>` only when the target is a merge commit with multiple parents and the first parent is the correct mainline.
4. If several commits must be reverted, revert them in reverse chronological order. Do not revert unrelated changes.
5. Resolve conflicts without removing unrelated fixes. Review the full resulting diff.
6. Open a pull request to `main` and describe the incident, affected commit, rollback scope, and validation evidence.
7. Require all configured checks to pass. Do not bypass the ruleset or force-push `main`.
8. Merge the rollback pull request using an allowed merge method.
9. Confirm that the Pages workflow on the resulting `main` commit completed its build, deploy, and smoke jobs successfully.
10. Confirm that the production Browser QA workflow completed for the deployment. Review the results for Chromium, Firefox, and WebKit.

The Pages workflow also supports manual dispatch. Do not use manual dispatch as a substitute for a reviewed source rollback. A workflow run must deploy the intended source revision and must be verified by its run metadata and smoke results.

## 5. Rollback acceptance criteria

A rollback is complete only when all of these conditions are true:

- The recovery pull request is merged and its commit SHA is recorded.
- The successful Pages deployment run identifies that expected commit.
- Build, deploy, and smoke jobs all pass.
- The production Browser QA run for that deployment passes.
- Representative routes in all eight locales load correctly.
- No known release-blocking defect remains.
- The incident record contains the cause, impact, rollback commit, workflow links, test evidence, and follow-up actions.

If any required check fails, keep the incident open. Do not report rollback completion.

## 6. Backup and restore boundaries

Git history provides versioned source and configuration. It is not a complete backup of the GitHub service.

A repository recovery plan must separately account for:

- Git objects, branches, and tags.
- Releases and release assets.
- Issues, pull requests, comments, and other required project records.
- Repository rulesets, Pages settings, environments, variables, and workflow configuration.
- Any required external assets or service configuration.

Do not export secrets into ordinary files or commit them to Git. Handle credentials only through an approved secret-management process.

A backup destination, encryption method, access policy, retention period, backup cadence, and recovery objectives have not been approved in this repository. No backup-restore drill is recorded. Do not claim that backup or restore is verified until an owner-approved backup exists and a restore test has passed.

## 7. Required evidence record

For each recovery event, record:

| Field | Required evidence |
|---|---|
| Incident | Issue or incident record URL |
| Trigger | Reproduced defect and affected routes/locales |
| Last known-good | Pages run URL and deployed commit SHA |
| Recovery change | Pull request URL and merged commit SHA |
| Deployment | Pages run URL and build/deploy/smoke conclusions |
| Browser validation | Browser QA run URL and engine results |
| Outcome | Accepted, unresolved, or escalated |
| Follow-up | Root cause and corrective actions |

## 8. Safety rules

- Never force-push, reset, or rewrite the protected production branch.
- Never disable required checks to complete a rollback.
- Never change DNS, hosting architecture, repository secrets, or Supabase as an improvised recovery step.
- Preserve workflow logs and incident evidence.
- Keep Production acceptance open until all applicable recovery criteria are met.
