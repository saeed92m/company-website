# Pishgaman Novandish Fannavargostar Keyhan

Corporate website project for **Pishgaman Novandish Fannavargostar Keyhan (Ltd.)**, an R&D-driven technology company founded in Tabriz in 2023 (Solar Hijri 1402).

## Company focus

- Astronomy
- Aerospace
- Remote Sensing
- Energy
- Artificial Intelligence
- Motorsport

## Project

This repository contains the source code, content, design system, documentation, tests, and deployment configuration for the company's public multilingual corporate website.

The website is designed to be modular, accessible, multilingual, performance-oriented, and future-ready for later integration with APIs, CMS/WordPress, CRM, portals, and research platforms without requiring a full rewrite.

## Languages

Persian, English, Arabic, Russian, German, Chinese, French, and Spanish.

## Documentation

The authoritative project handbook is maintained in the project documentation and the associated Notion master handbook. Architecture decisions, release evidence, and operational decisions are recorded as the project evolves.

## Repository policy

This repository is **public by project decision**. The repository contains only material approved for public source visibility; secrets, credentials, private keys, and other sensitive material must never be committed.

## Status

Phase 7 — automated release gates are passing on `main`: Astro check/build, CodeQL, GitHub Pages deployment smoke tests, and Playwright Chromium Browser QA across eight locales at mobile and desktop viewport sizes.

**Operational acceptance is not fully closed yet.** Independent visual/device-browser acceptance, custom-domain/DNS verification (if a custom domain is configured), and a documented backup/restore or rollback drill remain tracked follow-ups. The Supabase migration provenance issue also remains open; Supabase is not part of the current static-site runtime. Do not interpret passing automated checks as proof that every production-readiness item has been independently verified.
