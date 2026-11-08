import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const layout = await readFile(new URL("../src/layouts/SiteLayout.astro", import.meta.url), "utf8");
const styles = await readFile(new URL("../src/styles/global.css", import.meta.url), "utf8");
const ceoPage = await readFile(new URL("../src/pages/[locale]/company/ceo.astro", import.meta.url), "utf8");

test("navigation is inside the header between brand and persistent tools", () => {
  const header = layout.match(/<header\\b[\\s\\S]*?<\\/header>/)?.[0] ?? "";
  assert.ok(header);
  assert.match(header, /brand-wordmark[\\s\\S]*<nav id="primary-navigation"/);
  assert.match(header, /<nav id="primary-navigation"[\\s\\S]*header-tools/);
  assert.match(header, /data-menu-toggle/);
});

test("desktop restores horizontal v2 navigation without hamburger or overlay", () => {
  assert.match(styles, /@media \\(min-width: 721px\\)[\\s\\S]*\.site-header \.primary-nav/);
  assert.match(styles, /\.site-header \.menu-toggle \\{ display:none !important; \\}/);
  assert.match(styles, /position:static;[\\s\\S]*display:flex !important/);
  assert.match(styles, /width:max-content/);
  assert.match(styles, /min-width:max-content/);
  assert.match(styles, /\.site-header \.nav-group \\{ position:relative/);
});

test("mobile retains the accessible hamburger and independently scrollable overlay", () => {
  assert.match(layout, /data-menu-toggle/);
  assert.match(layout, /aria-controls="primary-navigation"/);
  assert.match(layout, /data-menu-close/);
  assert.match(styles, /@media\\(max-width:720px\\)/);
  assert.match(styles, /position:fixed/);
  assert.match(styles, /overflow-y:auto/);
  assert.match(styles, /overscroll-behavior:contain/);
});

test("menu open/close logic is limited to mobile viewports", () => {
  assert.match(layout, /matchMedia\\("\\(max-width: 720px\\)"\\)/);
  assert.match(layout, /menu.hidden = mobile &&/);
  assert.match(layout, /if \\(!window.matchMedia\\("\\(max-width: 720px\\)"\\).matches\\) return/);
});

test("all eight locales retain translated labels and route-aware active states", () => {
  for (const locale of ["fa","en","ar","ru","de","zh","fr","es"]) {
    assert.ok(layout.includes(`  ${locale}: {`) || layout.includes(`${locale}: {`));
  }
  assert.match(layout, /intro: "معرفی", board: "هیئت‌مدیره"/);
  assert.match(layout, /menuUi\\[locale\\]\\.intro/);
  assert.match(layout, /menuUi\\[locale\\]\\.board/);
  assert.match(layout, /data-current=/);
});

test("CEO profile page keeps its text-only hero", () => {
  assert.match(ceoPage, /hero-profile--text-only/);
  assert.doesNotMatch(ceoPage, /BrandMark|hero-mark/);
});
