# ADR 0003 — Brand Architecture and Website Identity

- **Status:** Accepted for initial website release
- **Date:** 2026-10-02

## Decision

Use **ALPHA TEAM** as the public-facing technology/team brand while retaining the legal corporate identity:

**Pishgaman Novandish Fannavargostar Keyhan (Ltd.)**  
**شرکت پیشگامان نواندیش فناورگستر کیهان (مسئولیت محدود)**

The website must make the relationship between the public brand and legal entity clear rather than replacing the legal identity.

**Alpha Team Startup** is not used as the primary public brand because “startup” describes an organizational stage rather than a durable brand architecture.

## Visual source of truth

The approved brand sources for this project are the supplied project assets:

- `Logo-1 (1).png` — supplied logo artwork
- `Logo - Color Code.JPEG` — supplied color/wordmark reference

The supplied color reference defines:
- Brand Blue: `#003C91`
- Brand Gray: `#A8A8A8`

Wallpapers are optional presentation assets, not required UI chrome.

## Implementation note

The current frontend uses the approved colors and a lightweight inline mark/wordmark treatment so the site can progress without blocking on binary asset transfer. The supplied binary assets remain the preferred source package for final visual QA; they must not be recreated, recolored, stretched, or otherwise altered.

## Consequences

- Corporate/legal identity remains explicit.
- Public-facing pages can use the concise ALPHA TEAM identity.
- Future products and projects can sit under the same technology brand without tying the brand to the word “startup”.
- Brand assets remain separate from content and application logic.
