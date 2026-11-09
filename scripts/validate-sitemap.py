#!/usr/bin/env python3
"""Strict validation for the generated and deployed multilingual XML sitemap.

Uses only Python's standard library so the same checks run in CI without
installing another dependency.
"""
from __future__ import annotations

import argparse
import sys
import xml.etree.ElementTree as ET
from collections import Counter
from pathlib import Path
from urllib.parse import urlparse

LOCALES = ("fa", "en", "ar", "ru", "de", "zh", "fr", "es")
EXPECTED_URLS_PER_LOCALE = 12
EXPECTED_PATHS = {
    "", "company", "company/ceo", "contact", "fields", "projects",
    "fields/aerospace", "fields/artificial-intelligence", "fields/astronomy",
    "fields/energy", "fields/motorsport", "fields/remote-sensing",
}
SITEMAP_NS = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
XHTML_NS = "{http://www.w3.org/1999/xhtml}link"


def fail(message: str) -> None:
    print(f"FAIL sitemap: {message}", file=sys.stderr)
    raise SystemExit(1)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--sitemap", required=True, type=Path)
    parser.add_argument("--base-url", required=True)
    args = parser.parse_args()

    base = args.base_url.rstrip("/")
    base_parts = urlparse(base)
    if base_parts.scheme != "https" or not base_parts.netloc or not base_parts.path:
        fail(f"base URL must be an HTTPS project URL, got {base!r}")

    try:
        root = ET.parse(args.sitemap).getroot()
    except (ET.ParseError, OSError) as exc:
        fail(f"XML cannot be parsed: {exc}")

    expected_root = f"{{{SITEMAP_NS['sm']}}}urlset"
    if root.tag != expected_root:
        fail(f"expected <urlset> root with sitemap namespace, got {root.tag!r}")

    entries = root.findall("sm:url", SITEMAP_NS)
    if not entries:
        fail("no <url> entries found")

    seen: set[str] = set()
    locale_counts: Counter[str] = Counter()
    urls_by_locale_path: dict[tuple[str, str], str] = {}

    for index, entry in enumerate(entries, start=1):
        loc_node = entry.find("sm:loc", SITEMAP_NS)
        if loc_node is None or not (loc_node.text or "").strip():
            fail(f"entry {index} has no non-empty <loc>")
        loc = loc_node.text.strip()
        parts = urlparse(loc)
        if parts.scheme != "https" or parts.netloc != base_parts.netloc:
            fail(f"entry {index} has an unexpected host or scheme: {loc}")
        if not parts.path.startswith(base_parts.path + "/"):
            fail(f"entry {index} is outside the GitHub Pages base path: {loc}")
        if parts.query or parts.fragment:
            fail(f"entry {index} contains a query or fragment: {loc}")
        if loc in seen:
            fail(f"duplicate <loc>: {loc}")
        seen.add(loc)

        relative = parts.path[len(base_parts.path) + 1:]
        segments = relative.strip("/").split("/")
        if not segments or segments[0] not in LOCALES:
            fail(f"URL does not start with a supported locale: {loc}")
        locale = segments[0]
        localized_path = "/".join(segments[1:])
        locale_counts[locale] += 1
        urls_by_locale_path[(locale, localized_path)] = loc

        alternates = entry.findall(XHTML_NS)
        alternate_map: dict[str, str] = {}
        for link in alternates:
            if link.attrib.get("rel") != "alternate":
                fail(f"non-alternate XHTML link in {loc}")
            hreflang = link.attrib.get("hreflang")
            href = link.attrib.get("href")
            if not hreflang or not href or hreflang in alternate_map:
                fail(f"missing or duplicate hreflang on {loc}")
            alternate_map[hreflang] = href

        expected_languages = set(LOCALES) | {"x-default"}
        if set(alternate_map) != expected_languages:
            fail(
                f"{loc} hreflang set mismatch: expected {sorted(expected_languages)}, "
                f"got {sorted(alternate_map)}"
            )

    expected_total = len(LOCALES) * EXPECTED_URLS_PER_LOCALE
    if len(entries) != expected_total:
        fail(f"expected {expected_total} URLs, found {len(entries)}")

    for locale in LOCALES:
        actual_paths = {
            localized_path
            for (entry_locale, localized_path) in urls_by_locale_path
            if entry_locale == locale
        }
        if actual_paths != EXPECTED_PATHS:
            fail(
                f"route set mismatch for {locale}: missing "
                f"{sorted(EXPECTED_PATHS - actual_paths)}, unexpected "
                f"{sorted(actual_paths - EXPECTED_PATHS)}"
            )
        if locale_counts[locale] != EXPECTED_URLS_PER_LOCALE:
            fail(
                f"expected {EXPECTED_URLS_PER_LOCALE} URLs for {locale}, "
                f"found {locale_counts[locale]}"
            )

    for (locale, localized_path), loc in urls_by_locale_path.items():
        entry = next(
            item for item in entries
            if (item.find("sm:loc", SITEMAP_NS).text or "").strip() == loc
        )
        alternate_map = {
            link.attrib["hreflang"]: link.attrib["href"]
            for link in entry.findall(XHTML_NS)
        }
        for target_locale in LOCALES:
            expected = urls_by_locale_path.get((target_locale, localized_path))
            if expected is None or alternate_map[target_locale] != expected:
                fail(f"incorrect {target_locale} alternate for {loc}")
        expected_default = urls_by_locale_path.get(("en", localized_path))
        if alternate_map["x-default"] != expected_default:
            fail(f"incorrect x-default alternate for {loc}")

    print(
        f"PASS sitemap XML: {len(entries)} unique HTTPS URLs; "
        f"{len(LOCALES)} locales x {EXPECTED_URLS_PER_LOCALE} routes; "
        "all hreflang and x-default links resolve within the sitemap"
    )


if __name__ == "__main__":
    main()
