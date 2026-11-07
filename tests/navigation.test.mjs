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


test("closed disclosure groups do not render submenu content", () => {
  assert.match(styles, /\.nav-group:not\(\[open\]\)\s*>\s*\.nav-submenu\s*\{\s*display:\s*none;?\s*\}/);
});

test("mobile header keeps brand and tools above a wrapping navigation row", () => {
  assert.match(styles, /@media\\s*\\(max-width:\\s*720px\\)[\\s\\S]*?\\.site-header\\s*\\{\\s*display:\\s*grid;\\s*grid-template-columns:\\s*minmax\\(0,1fr\\)\\s+auto/);
  assert.doesNotMatch(styles, /\\.header-tools\\s*\\{\\s*order:\\s*2;\\s*flex:\\s*1\\s+1\\s+100%/);
});

test("mobile disclosure menus are not clipped by a horizontal scroller", () => {
  assert.ok(styles.includes("/* Mobile disclosure menus must remain visible outside the navigation row. */"));
  assert.ok(styles.includes("flex-wrap:wrap;"));
  assert.ok(styles.includes("overflow:visible;"));
  assert.ok(styles.includes(".nav-group[open] { flex:1 0 100%; min-width:0; }"));
  assert.ok(styles.includes("position:static;"));
  assert.ok(styles.includes("width:100%;"));
});


test("mobile v3 uses an accessible glass drawer with language and theme controls", () => {
  assert.match(layout, /data-mobile-nav-open/);
  assert.match(layout, /data-mobile-nav-backdrop/);
  assert.match(layout, /role="dialog" aria-modal="true"/);
  assert.match(layout, /data-mobile-nav-close/);
  assert.match(layout, /mobile-nav-tools[\s\S]*language-select[\s\S]*theme-toggle/);
  assert.match(styles, /background:rgba\(7,17,31,\.75\)/);
  assert.match(styles, /backdrop-filter:blur\(28px\)/);
  assert.match(styles, /overflow-y:auto/);
  assert.match(layout, /closeMobileMenu\(\)/);
});
