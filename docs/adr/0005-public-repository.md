# ADR-0005: Keep the Company Website Repository Public

- **Status:** Accepted
- **Date:** 2026-10-02
- **Decision:** The `saeed92m/company-website` repository is public.

## Context

The project is the source repository for the company's public multilingual corporate website. The repository is intentionally structured as a public-facing web project and uses GitHub Pages for deployment.

GitHub documents that public repositories are accessible to everyone on the internet and that GitHub Pages is available for public repositories on GitHub Free. Public repository visibility also makes repository code, history, Actions activity, and other public project metadata visible to visitors.

## Decision

Keep the repository public and treat public visibility as the current project baseline.

The public repository must contain only content approved for public source visibility. The existing security requirements remain mandatory:

- no secrets, credentials, private keys, or production tokens in Git;
- no unpublished sensitive company information;
- public-safe source, content, documentation, and approved brand assets only;
- security-sensitive changes remain subject to validation.

## Consequences

### Positive

- GitHub Pages can operate without the private-repository restriction on GitHub Free.
- Public source visibility is aligned with the role of the repository as the public corporate website project.
- Public project documentation and engineering transparency are possible.
- The deployment path can remain GitHub-native without requiring repository migration.

### Negative / constraints

- Source code and Git history are publicly visible.
- GitHub Actions history and logs are publicly visible.
- Accidental publication of sensitive material becomes a higher-impact incident.
- Public-repository security hygiene must therefore be enforced continuously.

## Reversal

Changing repository visibility is a governance/security decision and requires an explicit ADR or an update to this ADR before treating the repository as private again.
