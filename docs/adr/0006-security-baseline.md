# ADR-0006: Public Repository Security Baseline

- **Status:** Accepted
- **Date:** 2026-10-02
- **Decision:** The public company website repository follows a minimum GitHub security baseline and keeps production changes protected by CI and branch governance.

## Baseline

The repository must maintain:

- no secrets, credentials, private keys, production tokens, or unpublished sensitive company information in Git;
- GitHub Secret Scanning and Push Protection enabled for the public repository;
- Dependabot alerts/security updates and dependency update coverage enabled where supported;
- CodeQL/code scanning for the JavaScript/TypeScript application;
- CI validation on pull requests and production pushes;
- protection of the production `main` branch against force-pushes and accidental deletion;
- pull-request based production changes where branch governance permits;
- least-privilege GitHub Actions permissions;
- security-sensitive changes documented and validated before production deployment.

## Current repository implementation

Repository-controlled configuration now includes:

- `.github/dependabot.yml` for npm and GitHub Actions dependency updates;
- `.github/workflows/codeql.yml` for JavaScript/TypeScript analysis;
- `SECURITY.md` for vulnerability-handling expectations;
- existing CI and GitHub Pages deployment workflows with read-only contents permissions except for the Pages deployment permissions they require.

GitHub account/repository security settings such as Secret Scanning, Push Protection, Dependabot alerts, CodeQL enforcement, and branch/ruleset protection must be verified in GitHub Settings because they are not represented solely by repository files.

## Validation

A pull request must pass the repository CI and CodeQL checks before these security configuration changes are treated as production-complete. GitHub security settings are considered a separate verification gate.
