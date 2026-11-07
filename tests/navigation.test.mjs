import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const layout = await readFile(new URL("../src/layouts/SiteLayout.astro", import.meta.url), "utf8");
const styles = await readFile(new URL("../src/styles/global.css", import.meta.url), "utf8");

test("primary navigation remains visible and uses native expandable groups", () => {
  assert.match(layout, /id="primary-navigation"[^>]*data-primary-nav/);
  assert.doesNotMatch(layout, /data-menu-toggle/);
  assert.match(layout, /<details class="nav-group" data-nav-group data-current=/);
  assert.doesNotMatch(layout, /<details[^>]+ open=/);
  assert.match(layout, /site\.fields\.map\(\(field\)/);
  assert.doesNotMatch(layout, /role="menu"/);
  assert.match(styles, /\.nav-group\s*\{\s*position:relative/);
  assert.match(styles, /\.nav-submenu\s*\{\s*position:absolute/);
});

test("navigation groups close after selection, on Escape, and outside click", () => {
  assert.match(layout, /menu\?\.addEventListener\("click"/);
  assert.match(layout, /event\.key !== "Escape"/);
  assert.match(layout, /openGroup\.querySelector\("summary"\)\?\.focus\(\)/);
  assert.match(layout, /menuGroups\.forEach\(\(group\) => \{ group\.open = false; \}\)/);
});

test("language and theme controls remain in the persistent header", () => {
  assert.match(layout, /<div class="header-tools">[\s\S]*language-select[\s\S]*theme-toggle[\s\S]*<\/div>/);
  assert.match(layout, /aria-label=\{menuUi\[locale\]\.navigation\}/);
});

test("navigation controls meet the minimum 44px touch target", () => {
  assert.match(styles, /\.primary-nav > a, \.nav-group > summary[\s\S]*min-height:\s*2\.9rem/);
  assert.match(styles, /\.language-select select, \.theme-toggle \{ min-height:2\.75rem/);
});
