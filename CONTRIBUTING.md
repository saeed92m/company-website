# Contributing

## Workflow

1. Create a focused feature, fix, content, or documentation branch from `main`.
2. Keep changes small and logically grouped.
3. Run the relevant checks locally.
4. Open a pull request with a clear description, validation evidence, and any known limitations.
5. Merge only after required checks pass and the change satisfies the applicable Definition of Done.

## Branches

- `main`: production-ready baseline.
- `feat/*`: features and planned enhancements.
- `fix/*`: defect fixes.
- `content/*`: approved content changes.
- `docs/*`: documentation-only changes.
- `chore/*`: maintenance and tooling.

## Quality principles

- Preserve the documented architecture and design system.
- Keep content separate from presentation and application logic where practical.
- Treat multilingual correctness, RTL/LTR behavior, accessibility, SEO, and performance as first-class requirements.
- Never commit secrets, credentials, private keys, or production access tokens.
- Record significant architectural decisions in an ADR or the project decision log.
