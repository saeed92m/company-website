# ADR-0007 — Locale-aware calendar and date numeral presentation

- **Status:** Accepted
- **Date:** 2026-10-03
- **Scope:** Public website date/year presentation

## Decision

Website date/year presentation is locale-aware:

- Persian (`fa`): Solar Hijri (هجری شمسی) with Persian numerals.
- Arabic (`ar`): lunar Hijri using the Umm al-Qura calendar with Arabic numerals and `هـ` where applicable.
- English, Russian, German, Chinese, French and Spanish: Gregorian calendar with Latin numerals.

Content stores date/year values as canonical Gregorian source years. The presentation layer performs calendar conversion so the same factual source data is not duplicated across locales.

Company founding is sourced from August 2023; therefore its Arabic year presentation is anchored in 1445 AH.

## Scope

This applies to:
- company founding year;
- CEO education and professional periods;
- selected project periods;
- publication years;
- dated professional memberships.

Technical identifiers such as `1U`, `Landsat 8`, `Sentinel-1/2`, and publication numbering are not treated as dates and remain unchanged.

## Implementation

Date formatting is centralized in `src/utils/date-format.ts`. Templates call the formatter at render time instead of hard-coding calendar-specific display values.

## Rationale

This keeps factual source data consistent while providing culturally and linguistically appropriate calendar presentation for each localized website experience.