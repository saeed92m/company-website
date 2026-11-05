# Security Policy

## Scope

This policy covers the company's corporate website source repository and deployed website.

## Reporting

Do not disclose suspected vulnerabilities, credentials, or sensitive data in public issues or pull requests.

If GitHub **Private vulnerability reporting** is enabled for this repository, use the repository's **Report a vulnerability** action. The feature is not yet verified as enabled. Until the owner confirms that private reporting works, do not treat a public issue as an accepted disclosure channel. A separate company security contact must be published only after the owner approves a monitored address and response owner.

## Repository rules

- Never commit secrets, credentials, private keys, or private customer data.
- Store production credentials in approved secret-management facilities.
- Review and update dependencies regularly.
- Validate security-sensitive changes before production deployment.
- Handle contact-form and other user-submitted data under approved privacy, retention, and access requirements.
- Keep the static website independent of Supabase until a concrete backend feature is approved.

## Incident handling

Security incidents must be documented, contained, investigated, remediated, and followed by a recovery and lessons-learned record.
