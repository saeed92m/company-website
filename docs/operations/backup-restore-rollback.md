# Repository Backup, Restore, and Production Rollback Runbook

**Scope:** `saeed92m/company-website` source repository and GitHub Pages deployment.  
**Production branch:** `main`.  
**Status:** Automated Git backup/restore validation is being introduced. A separate off-platform backup and a production rollback drill remain pending.

## 1. Automated repository backup

The `Repository Backup and Restore Validation` workflow creates a complete Git bundle from all fetched refs, verifies it, clones it into a clean directory, runs `git fsck --full`, and compares restored refs with the source refs. It uploads the validated bundle as a GitHub Actions artifact with 30-day retention.

This is a short-retention recovery copy. It is not a substitute for an owner-controlled off-platform backup.

## 2. Off-platform backup procedure

Run from a trusted workstation with GitHub access:

```bash
git clone --mirror git@github.com:saeed92m/company-website.git company-website.git
git -C company-website.git bundle create ../company-website-$(date -u +%Y%m%dT%H%M%SZ).bundle --all
git bundle verify ../company-website-*.bundle
```

Store the mirror and bundle in the approved encrypted backup location. Do not store credentials or private keys inside the backup repository. Define retention and access controls before treating this as the company backup.

## 3. Restore test

Use a copy of the bundle. Do not overwrite the working repository:

```bash
git clone company-website-YYYYMMDDTHHMMSSZ.bundle company-website-restore
git -C company-website-restore fsck --full
git -C company-website-restore show-ref
git -C company-website-restore log -1 --oneline
```

Compare the restored refs and latest commit with the source backup manifest. Record bundle SHA-256, source commit, date, operator, and restore result.

## 4. Production rollback

Do not force-push, reset `main`, change DNS, or change the hosting provider.

1. Identify the last known-good production commit from successful Pages deployment and smoke-test evidence.
2. Open a rollback branch from current `main`.
3. Revert the faulty commit. For a merge commit, identify and use the correct mainline parent.
4. Open a pull request. Keep all required CI, CodeQL, dependency audit, and browser checks enabled.
5. Review the diff. Confirm it only reverses the intended faulty change.
6. Merge through the normal protected-branch process.
7. Wait for GitHub Pages build, deploy, smoke, and post-deployment Browser QA.
8. Record the rollback commit, workflow run IDs, and result in Issue #69 and the Handbook.

A production rollback has not been executed as part of this documentation or workflow change. Do not execute one unless a production incident or an explicit owner-approved drill authorizes it.

## 5. Recovery boundaries

- Git bundle covers tracked Git objects and refs. It does not back up GitHub Issues, PR discussions, Actions logs/artifacts, repository settings, secrets, Pages configuration, DNS, or external accounts.
- Export repository issues/PR metadata and settings separately as part of the broader GitHub backup plan.
- Supabase is not in the static website runtime and has no public tables at the last inspection. Do not create database objects to support this website.
- Business email and DNS remain outside this repository backup scope.

## 6. Acceptance evidence still required

- [ ] Weekly Git bundle workflow succeeds and artifact can be downloaded.
- [ ] Owner-controlled off-platform backup exists and its SHA-256 is recorded.
- [ ] Owner/operator completes a restore test from the off-platform backup.
- [ ] Production rollback procedure is rehearsed in a controlled environment.
- [ ] Production rollback is executed only under approved change/incident control.
