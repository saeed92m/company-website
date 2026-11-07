import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const layout = await readFile(new URL("../src/layouts/SiteLayout.astro", import.meta.url), "utf8");
const styles = await readFile(new URL("../src/styles/global.css", import.meta.url), "utf8");

test("primary navigation uses an accessible inline expandable menu", () => {
  assert.match(layout, /aria-controls="primary-navigation"/);
  assert.match(layout, /aria-expanded="false"/);
  assert.match(layout, /id="primary-navigation"[^>]*hidden/);
  assert.match(layout, /<details class="nav-group" data-nav-group>/);
  assert.match(layout, /site\.fields\.map\(\(field\)/);
  assert.doesNotMatch(layout, /role="menu"/);
  assert.match(styles, /\.primary-nav:not\(\[hidden\]\)/);
  assert.doesNotMatch(styles, /position:\s*fixed[^;]*inset:\s*0/);
});

  assert.match(layout, /menu\?\.addEventListener\("click"/);
  assert.match(layout, /menu\\\?\.addEventListener\\\("click"/);
  assert.match(layout, /event\.key === "Escape"/);
  assert.match(layout, /menuToggle\.focus\(\)/);
  assert.match(layout, /menuGroups\.forEach\(\(group\) => \{ group\.open = false; \}\)/);
});

test("language and theme controls remain in the persistent header", () => {
  assert.match(layout, /<div class="header-tools">[\s\S]*language-select[\s\S]*theme-toggle[\s\S]*<\/div>/);
  for (const locale of ["fa", "en", "ar", "ru", "de", "zh", "fr", "es"]) {
    assert.match(layout, new RegExp(locale + ": \\{ open:"));
  }
});

test("navigation controls meet the minimum 44px touch target", () => {
  assert.match(styles, /\.menu-toggle[\s\S]*min-height:\s*2\.75rem/);
  assert.match(styles, /\.primary-nav > a, \.nav-group > summary[\s\S]*min-height:\s*2\.9rem/);
});
