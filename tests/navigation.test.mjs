import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const layout = await readFile(new URL("../src/layouts/SiteLayout.astro", import.meta.url), "utf8");
const styles = await readFile(new URL("../src/styles/global.css", import.meta.url), "utf8");
const ceoPage = await readFile(new URL("../src/pages/[locale]/company/ceo.astro", import.meta.url), "utf8");

test("navigation uses a persistent header toggle and an initially closed overlay panel", () => {
  assert.match(layout, /data-menu-toggle/);
  assert.match(layout, /aria-controls="primary-navigation"/);
  assert.match(layout, /id="primary-navigation"[^>]*data-primary-nav hidden/);
  assert.match(layout, /data-menu-close/);
  assert.match(layout, /<details class="nav-group" data-nav-group/);
  assert.doesNotMatch(layout, /<details[^>]+ open=/);
});

test("language and theme controls stay in the header, outside the menu panel", () => {
  assert.match(layout, /<div class="header-tools">[\s\S]*language-select[\s\S]*theme-toggle[\s\S]*<\/div>[\s\S]*data-menu-toggle/);
  assert.match(layout, /aria-label=\{labels\.language\}/);
  assert.match(layout, /aria-label=\{labels\.theme\}/);
});

test("menu opens and closes with focus management and Escape", () => {
  assert.match(layout, /const setMenuOpen = \(open\)/);
  assert.match(layout, /menuToggle\.setAttribute\("aria-expanded", String\(open\)\)/);
  assert.match(layout, /menu\.querySelector\("a, summary"\)\?\.focus\(\)/);
  assert.match(layout, /menuToggle\.focus\(\)/);
  assert.match(layout, /if \(menu && !menu\.hidden\)/);
  assert.match(layout, /setMenuOpen\(false\)/);
});

test("selecting a destination closes the overlay and its disclosure groups", () => {
  assert.match(layout, /menuGroups\.forEach\(\(group\) => \{ group\.open = false; \}\)/);
  assert.match(layout, /menu\?\.addEventListener\("click"/);
});

test("the navigation panel fills the available viewport and supports independent scrolling", () => {
  assert.match(styles, /\.primary-nav\[hidden\]\s*\{\s*display:none !important/);
  assert.match(styles, /position:fixed/);
  assert.match(styles, /bottom:max\(\.75rem, env\(safe-area-inset-bottom\)\)/);
  assert.match(styles, /overflow-y:auto/);
  assert.match(styles, /overscroll-behavior:contain/);
  assert.match(styles, /backdrop-filter:blur\(18px\)/);
  assert.match(styles, /body\.menu-open \{ overflow:hidden; \}/);
});

test("the header stays sticky and keeps persistent controls visible", () => {
  assert.match(styles, /\.site-header \{[\s\S]*position:sticky/);
  assert.match(styles, /\.site-header \.header-tools \{ order:2; margin-inline:auto; \}/);
  assert.match(styles, /\.menu-toggle \{[\s\S]*min-height:3rem/);
  assert.match(styles, /\.language-select select,\.theme-toggle,\.menu-toggle \{ min-height:3rem; \}/);
  assert.match(styles, /grid-template-areas: "brand tools menu"/);
  assert.match(styles, /\.site-header \.menu-toggle \{[\s\S]*grid-area: menu/);
  assert.match(styles, /\.site-header \.primary-nav \{[\s\S]*position: fixed[\s\S]*inset-block-end:[\s\S]*max-height: none/);
});

test("all eight locales have translated menu controls and navigation labels", () => {
  for (const locale of ["fa","en","ar","ru","de","zh","fr","es"]) {
    assert.ok(layout.includes(`  ${locale}: {`) || layout.includes(`${locale}: {`));
  }
  assert.match(layout, /intro: "معرفی", board: "هیئت‌مدیره"/);
  assert.match(layout, /menuUi\[locale\]\.intro/);
  assert.match(layout, /menuUi\[locale\]\.board/);
});

test("company submenu keeps the Company group label and renames only its children", () => {
  assert.match(layout, /<details class="nav-group" data-nav-group data-current=/);
  assert.match(layout, /menuUi\[locale\]\.intro/);
  assert.match(layout, /menuUi\[locale\]\.board/);
  assert.doesNotMatch(layout, /menuUi\[locale\]\.ceo/);
});

test("CEO profile page omits the large decorative brand mark but keeps the shared site header", () => {
  assert.match(ceoPage, /hero-profile--text-only/);
  assert.doesNotMatch(ceoPage, /BrandMark|hero-mark/);
  assert.match(layout, /<span class="brand-mark" aria-hidden="true"><BrandMark/);
  assert.match(styles, /\.hero-profile--text-only\{grid-template-columns:minmax\(0,1fr\);min-height:auto\}/);
});


test("the navigation overlay is outside the sticky header and fills the viewport", () => {
  const headerMarkup = layout.match(/<header\b[\s\S]*?<\/header>/)?.[0] ?? "";
  assert.ok(headerMarkup, "site header markup must be present");
  assert.doesNotMatch(headerMarkup, /<nav id="primary-navigation"/);
  assert.match(layout, /<\/header>\s*<nav id="primary-navigation"/);
  assert.match(styles, /\.primary-nav\s*\{[\s\S]*position:\s*fixed/);
  assert.match(styles, /\.primary-nav\s*\{[\s\S]*inset-block-end:[^;]+/);
  assert.match(styles, /\.primary-nav\s*\{[\s\S]*overflow-y:\s*auto/);
  assert.match(styles, /\.primary-nav\[hidden\]\s*\{\s*display:\s*none !important/);
});


test("menu panel omits the company name and logo while the sticky header retains a one-line short brand name", () => {
  const menu = layout.match(/<nav id="primary-navigation"[\s\S]*?<\/nav>/)?.[0] ?? "";
  const header = layout.match(/<header\b[\s\S]*?<\/header>/)?.[0] ?? "";
  assert.doesNotMatch(menu, /nav-panel-brand|BrandMark|site\.companyName/);
  assert.match(header, /brand-wordmark/);
  assert.match(header, /brandNames\[locale\]/);
  assert.match(layout, /fa: "شرکت پیشگامان نواندیش فناورگستر کیهان"/);
  assert.match(css, /\.brand-wordmark\{[^}]*white-space:nowrap/);
  assert.match(css, /\.site-header \.brand-wordmark \{ display:inline/);
});
