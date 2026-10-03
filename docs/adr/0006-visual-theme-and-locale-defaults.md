# ADR-0006 — Premium visual system, theme switching, and locale defaults

## Status
Accepted

## Decision
The corporate website uses a premium scientific/engineering visual language rather than a minimal generic corporate template.

- Night/Dark is the current visual baseline and is prepared to consume the approved BEST domain imagery.
- Day/Light is a first-class theme and will receive its dedicated day imagery later without requiring a layout rewrite.
- Theme preference is user-selectable and persisted locally.
- Persian (fa) is the default website locale.
- All eight supported locales remain selectable: fa, en, ar, ru, de, zh, fr, es.
- fa and ar use RTL; the remaining locales use LTR.
- The six domain images are mapped by filename/domain identity and must not be semantically reassigned.

## Rationale
The company operates across six distinct but technically related R&D domains. The interface therefore needs visual depth, strong hierarchy, controlled motion, technical composition, and high-quality typography while retaining corporate restraint.

## Constraints
- No unsupported claims may be introduced through imagery.
- Domain imagery must remain accessible, performant, and readable with text overlays.
- Temporary Dropbox URLs must never be embedded in production.
- Binary source assets will be committed to the repository only through a verified asset-ingestion path.
