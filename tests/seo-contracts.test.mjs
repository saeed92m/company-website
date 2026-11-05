import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const layout = await readFile(new URL("../src/layouts/SiteLayout.astro", import.meta.url), "utf8");
const root = await readFile(new URL("../src/pages/index.astro", import.meta.url), "utf8");
const sitemap = await readFile(new URL("../src/pages/sitemap.xml.ts", import.meta.url), "utf8");
const robots = await readFile(new URL("../src/pages/robots.txt.ts", import.meta.url), "utf8");
const locales = await readFile(new URL("../src/data/locales.ts", import.meta.url), "utf8");

test("localized pages expose canonical URLs and complete language alternates", () => {
  assert.match(layout, /rel="canonical"/);
  assert.match(layout, /hreflang=\{code\}/);
  assert.match(layout, /hreflang="x-default"/);
  for (const locale of ["fa", "en", "ar", "ru", "de", "zh", "fr", "es"]) {
    assert.match(locales, new RegExp('"' + locale + '"'));
  }
});

test("localized pages are indexable and the root redirect is not indexed", () => {
  assert.match(layout, /isNotFoundPage \? "noindex,follow" : "index,follow"/);
  assert.match(root, /name="robots" content="noindex,follow"/);
  assert.match(root, /http-equiv="refresh"/);
  assert.match(root, /rel="canonical"/);
});

test("sitemap includes all localized route families and hreflang alternates", () => {
  for (const route of ["company", "company/ceo", "fields", "projects", "contact"]) {
    assert.ok(sitemap.includes('"'+route+'"'), 'sitemap route missing: ' + route);
  }
  assert.match(sitemap, /xhtml:link rel="alternate" hreflang=/);
  assert.match(sitemap, /hreflang="x-default"/);
  assert.match(sitemap, /sitemap\.org\/schemas\/sitemap\/0\.9/);
});

test("robots.txt permits public crawling and points to the sitemap", () => {
  assert.match(robots, /User-agent: \*/);
  assert.match(robots, /Allow: \\/"/);
  assert.match(robots, /Sitemap: /);
});
