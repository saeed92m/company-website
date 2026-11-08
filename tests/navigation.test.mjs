import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const layout = await readFile(new URL("../src/layouts/SiteLayout.astro", import.meta.url), "utf8");
const styles = await readFile(new URL("../src/styles/global.css", import.meta.url), "utf8");
const ceoPage = await readFile(new URL("../src/pages/[locale]/company/ceo.astro", import.meta.url), "utf8");

test("navigation is inside the header between brand and persistent tools", () => {
  const header = layout.slice(layout.indexOf('<header class="site-header site-shell">'), layout.indexOf("</header>"));
  assert.ok(header.includes("brand-wordmark"));
  assert.ok(header.indexOf('<nav id="primary-navigation"') > header.indexOf("brand-wordmark"));
  assert.ok(header.indexOf("header-tools") > header.indexOf('<nav id="primary-navigation"'));
  assert.ok(header.includes("data-menu-toggle"));
});

test("desktop restores horizontal v2 navigation without hamburger or overlay", () => {
  assert.ok(styles.includes("@media (min-width: 721px)"));
  assert.ok(styles.includes(".site-header .nav-panel-head, .site-header .menu-toggle { display:none !important; }"));
  assert.ok(styles.includes("position:static; inset:auto; z-index:auto; display:flex !important;"));
  assert.ok(styles.includes("width:max-content; min-width:max-content;"));
  assert.ok(styles.includes(".site-header .nav-group { position:relative;"));
});

test("mobile retains the accessible hamburger and independently scrollable overlay", () => {
  assert.ok(layout.includes("data-menu-toggle"));
  assert.ok(layout.includes('aria-controls="primary-navigation"'));
  assert.ok(layout.includes("data-menu-close"));
  assert.ok(styles.includes(".site-header .primary-nav {\n    position: fixed;"));
  assert.ok(styles.includes("overflow-y: auto;"));
  assert.ok(styles.includes("overscroll-behavior: contain;"));
});

test("menu open/close logic is limited to mobile viewports", () => {
  assert.ok(layout.includes('if (!window.matchMedia("(max-width: 720px)").matches) return;'));
  assert.ok(layout.includes("menu.hidden = mobile && menuToggle?.getAttribute(\"aria-expanded\") !== \"true\";"));
  assert.ok(layout.includes('window.matchMedia("(max-width: 720px)").matches'));
});

test("all eight locales retain translated labels and route-aware active states", () => {
  for (const locale of ["fa","en","ar","ru","de","zh","fr","es"]) {
    assert.ok(layout.includes(`${locale}: {`));
  }
  assert.ok(layout.includes('intro: "معرفی", board: "هیئت‌مدیره"'));
  assert.ok(layout.includes("menuUi[locale].intro"));
  assert.ok(layout.includes("menuUi[locale].board"));
  assert.ok(layout.includes("data-current="));
});

test("CEO profile page keeps its text-only hero", () => {
  assert.ok(ceoPage.includes("hero-profile--text-only"));
  assert.ok(!ceoPage.includes("BrandMark") && !ceoPage.includes("hero-mark"));
});
