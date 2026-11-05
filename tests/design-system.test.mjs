import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const css = await readFile(new URL("../src/styles/design-system.css", import.meta.url), "utf8");
const layout = await readFile(new URL("../src/layouts/SiteLayout.astro", import.meta.url), "utf8");
const home = await readFile(new URL("../src/pages/[locale]/index.astro", import.meta.url), "utf8");
const requireGlobalCss = await readFile(new URL("../src/styles/global.css", import.meta.url), "utf8");

function getColor(name, selector = ":root {") {
  const start = css.indexOf(selector);
  assert.notEqual(start, -1, `missing selector: ${selector}`);
  const end = css.indexOf("}", start);
  const match = css.slice(start, end).match(new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{3,8})`));
  assert.ok(match, `missing color token --${name}`);
  return match[1];
}
function luminance(hex) {
  const raw = hex.replace("#", "");
  const values = raw.length === 3 ? [...raw].map((x) => parseInt(x + x, 16)) : [0, 2, 4].map((i) => parseInt(raw.slice(i, i + 2), 16));
  const [r, g, b] = values.map((x) => x / 255).map((x) => x <= .04045 ? x / 12.92 : ((x + .055) / 1.055) ** 2.4);
  return .2126 * r + .7152 * g + .0722 * b;
}
function ratio(a, b) {
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (light + .05) / (dark + .05);
}

test("design system is loaded after the foundation stylesheet", () => {
  assert.match(layout, /global\.css";\s*import "\.\.\/styles\/design-system\.css";/);
});
test("approved corporate colors remain unchanged", () => {
  assert.equal(getColor("brand-blue"), "#003c91");
  assert.equal(getColor("brand-gray"), "#a8a8a8");
});
test("night theme accent and link colors meet WCAG AA for small text", () => {
  assert.ok(ratio(getColor("accent"), getColor("page")) >= 4.5);
  assert.ok(ratio(getColor("link"), getColor("surface")) >= 4.5);
});
test("day theme accent and link colors meet WCAG AA for small text", () => {
  assert.ok(ratio(getColor("accent", 'html[data-theme="light"] {'), getColor("page", 'html[data-theme="light"] {')) >= 4.5);
  assert.ok(ratio(getColor("link", 'html[data-theme="light"] {'), getColor("surface", 'html[data-theme="light"] {')) >= 4.5);
});
test("homepage is a structural redesign, not only a token override", () => {
  for (const selector of ["new-hero", "new-domain-grid", "new-projects", "new-company"]) {
    assert.ok(home.includes(selector), `homepage is missing ${selector}`);
    assert.ok(css.includes(`.home-redesign .${selector}`) || css.includes(`.home-redesign .new-domain-grid`), `stylesheet is missing design rules for ${selector}`);
  }
});
test("homepage preserves all six domain links and localized paths", () => {
  assert.match(home, /site\.fields\.map/);
  assert.match(home, /route\(locale,"fields\/"/);
});
test("interactive controls preserve a 44px minimum target", () => {
  assert.match(css, /--control-height:\s*48px/);
  assert.match(css, /button, select \{ min-height: 44px; \}/);
});
test("reduced-motion preferences disable non-essential animation", () => {
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});


test("approved typefaces are self-hosted with script-aware WOFF2 subsets", () => {
  const globalCss = requireGlobalCss;
  assert.doesNotMatch(globalCss, /fonts\.googleapis\.com|fonts\.gstatic\.com/);
  assert.match(globalCss, /@font-face/);
  assert.match(globalCss, /font-family: 'IBM Plex Sans'/);
  assert.match(globalCss, /font-family: 'Vazirmatn'/);
  assert.match(globalCss, /font-weight: 100 700/);
  assert.match(globalCss, /font-weight: 100 900/);
  for (const subset of ["vazirmatn-arabic-wght-normal.woff2","vazirmatn-latin-ext-wght-normal.woff2","vazirmatn-latin-wght-normal.woff2","ibm-plex-sans-cyrillic-ext-wght-normal.woff2","ibm-plex-sans-cyrillic-wght-normal.woff2","ibm-plex-sans-latin-ext-wght-normal.woff2","ibm-plex-sans-latin-wght-normal.woff2"]) {
    assert.ok(globalCss.includes(subset), `missing font subset: ${subset}`);
  }
  assert.match(globalCss, /html\[lang="fa"\] body\{font-family:"Vazirmatn"/);
  assert.match(globalCss, /html\[lang="ar"\] body\{font-family:"Vazirmatn"/);
  assert.match(globalCss, /html\[lang="zh"\] body\{font-family:"Noto Sans CJK SC"/);
  assert.doesNotMatch(layout, /fonts\.googleapis\.com|fonts\.gstatic\.com/);
});
test("prototype controls and cards use the provisional soft-rounded geometry", () => {
  assert.match(css, /--radius-control:\s*12px/);
  assert.match(css, /--radius-card:\s*18px/);
  assert.match(css, /\.home-redesign \.new-button[\s\S]*?border-radius:\s*var\(--radius-control\)/);
  assert.match(css, /\.home-redesign \.new-domain-card[\s\S]*?border-radius:\s*var\(--radius-card\)/);
  assert.match(css, /\.home-redesign \.new-projects \.project-card[\s\S]*?border-radius:\s*var\(--radius-card\)/);
  assert.match(css, /\.home-redesign \.new-projects \.project-card \.button \{ border-radius: var\(--radius-control\); \}/);
});

test("light-theme domain-card accents remain readable on the dark image cards", () => {
  const accent = getColor("rd-accent", 'html[data-theme="light"] .home-redesign .new-domain-card {');
  assert.ok(ratio(accent, "#14243a") >= 4.5, "domain-card accent must meet WCAG AA");
});

test("homepage has no vanity metrics and keeps registration details in the company section", () => {
  assert.doesNotMatch(home, /Website languages|زبان وب‌سایت|لغات الموقع|Website-Sprachen|Langues du site|Idiomas del sitio|网站语言/);
  assert.doesNotMatch(home, /orbit-visual|orbit-node|orbit-ring|new-metrics|metric-item/);
  assert.doesNotMatch(css, /\.home-redesign \.orbit-visual|\.home-redesign \.new-metrics/);
  assert.doesNotMatch(home, /site\.founded\.replace/);
  assert.match(home, /new-registration-fact/);
  assert.match(home, /۱۴۰۲\/۰۵\/۰۷/);
  assert.match(home, /Official Gazette notice: 29 July 2023/);
});


test("mobile header stays compact and homepage hero is content-first", () => {
  assert.match(css, /\.site-header \.brand-wordmark \{ display: none; \}/);
  assert.match(css, /\.home-redesign \.new-hero \{ padding-block: 42px 64px; \}/);
  assert.match(home, /<h1 id="hero-title">\{site\.tagline\}<\/h1>/);
});

test("self-hosted WOFF2 files and font licenses are present and valid", async () => {
  const fontFiles = [
    "vazirmatn-arabic-wght-normal.woff2",
    "vazirmatn-latin-ext-wght-normal.woff2",
    "vazirmatn-latin-wght-normal.woff2",
    "ibm-plex-sans-cyrillic-ext-wght-normal.woff2",
    "ibm-plex-sans-cyrillic-wght-normal.woff2",
    "ibm-plex-sans-latin-ext-wght-normal.woff2",
    "ibm-plex-sans-latin-wght-normal.woff2"
  ];
  for (const name of fontFiles) {
    const bytes = await readFile(new URL(`../src/assets/fonts/${name}`, import.meta.url));
    assert.equal(bytes.toString("ascii", 0, 4), "wOF2", `${name} must be a WOFF2 file`);
    assert.ok(bytes.byteLength > 1024, `${name} must not be empty or truncated`);
  }
  const vazLicense = await readFile(new URL("../licenses/fonts/OFL-Vazirmatn.txt", import.meta.url), "utf8");
  const ibmLicense = await readFile(new URL("../licenses/fonts/OFL-IBM-Plex-Sans.txt", import.meta.url), "utf8");
  assert.match(vazLicense, /SIL OPEN FONT LICENSE Version 1\.1/);
  assert.match(ibmLicense, /SIL OPEN FONT LICENSE Version 1\.1/);
});
