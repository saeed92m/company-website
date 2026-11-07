import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const layout = await readFile(new URL("../src/layouts/SiteLayout.astro", import.meta.url), "utf8");
const styles = await readFile(new URL("../src/styles/global.css", import.meta.url), "utf8");

test("primary navigation contains localized links and native disclosure groups", () => {
  assert.match(layout, /id="primary-navigation"[^>]*data-primary-nav/);
  assert.match(layout, /aria-label=\{menuUi\[locale\]\.navigation\}/);
  assert.match(layout, /<details class="nav-group" data-nav-group data-current=/);
  assert.match(layout, /site\.fields\.map\(\(field\)/);
  assert.doesNotMatch(layout, /<details[^>]+ open=/);
});

test("mobile menu exposes an accessible toggle and closes after link selection", () => {
  assert.match(layout, /aria-controls="primary-navigation"[^>]*aria-expanded="false"/);
  assert.match(layout, /menuToggle\?\.addEventListener\("click"/);
  assert.match(layout, /menu\?\.addEventListener\("click"/);
  assert.match(layout, /closeMobileMenu\(\)/);
});

test("mobile overlay locks body scrolling and restores focus on Escape", () => {
  assert.match(layout, /document\.body\.style\.overflow = "hidden"/);
  assert.match(layout, /event\.key === "Escape"/);
  assert.match(layout, /closeMobileMenu\(\{ restoreFocus: true \}\)/);
  assert.match(layout, /event\.key === "Tab"/);
});

test("Company and six-domain groups are native accordion disclosures", () => {
  assert.match(layout, /<details class="nav-group" data-nav-group/);
  assert.match(layout, /menuGroups\.forEach\(\(group\) => group\.addEventListener\("toggle"/);
  assert.match(layout, /if \(group\.open\) menuGroups\.forEach/);
});

test("language and theme controls remain available in the mobile overlay", () => {
  assert.match(layout, /<div class="header-tools">[\s\S]*language-select[\s\S]*theme-toggle[\s\S]*<\/div>/);
  assert.match(styles, /\.site-header\[data-mobile-open\] \.header-tools\s*\{\s*display:flex; position:fixed/s);
});

test("variant 3 uses a full-screen fixed navigation panel", () => {
  assert.match(styles, /Mobile navigation variant 3: SpaceX-inspired full-screen navigation overlay/);
  assert.match(styles, /\.site-header \.primary-nav\s*\{[^}]*position:fixed; inset:0/s);
  assert.match(styles, /\.site-header\[data-mobile-open\] \.primary-nav \{ display:flex; \}/);
  assert.match(styles, /max-height:100dvh/);
});

test("mobile navigation controls meet minimum touch-target dimensions", () => {
  assert.match(styles, /\.site-header \.mobile-menu-toggle\s*\{[^}]*width:2\.9rem; height:2\.9rem/s);
  assert.match(styles, /\.site-header \.primary-nav > a,[\s\S]*min-height:3\.6rem/);
});

test("desktop navigation remains horizontal and mobile styles respect reduced motion", () => {
  assert.match(styles, /\.primary-nav\{display:flex/);
  assert.match(styles, /@media \(min-width:721px\)/);
  assert.match(styles, /@media \(prefers-reduced-motion:reduce\)/);
});
