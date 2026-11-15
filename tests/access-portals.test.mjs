import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const layout = await readFile(new URL("../src/layouts/SiteLayout.astro", import.meta.url), "utf8");
const component = await readFile(new URL("../src/components/AccessPortal.astro", import.meta.url), "utf8");
const content = await readFile(new URL("../src/content/access.ts", import.meta.url), "utf8");
const userPage = await readFile(new URL("../src/pages/[locale]/company/user-panel.astro", import.meta.url), "utf8");
const adminPage = await readFile(new URL("../src/pages/[locale]/company/admin-panel.astro", import.meta.url), "utf8");
const sitemap = await readFile(new URL("../src/pages/sitemap.xml.ts", import.meta.url), "utf8");
const deploy = await readFile(new URL("../.github/workflows/deploy-pages.yml", import.meta.url), "utf8");
const browserQa = await readFile(new URL("../.github/workflows/browser-qa.yml", import.meta.url), "utf8");

const locales = ["fa", "en", "ar", "ru", "de", "zh", "fr", "es"];

test("company submenu places both portal links after Board of Directors", () => {
  const companyGroup = layout.indexOf('data-current={path.startsWith(route(locale,"company"))');
  const start = layout.indexOf('<div class="nav-submenu">', companyGroup);
  const end = layout.indexOf("</div>", start);
  const submenu = layout.slice(start, end);
  const board = submenu.indexOf('route(locale,"company/ceo")');
  const user = submenu.indexOf('route(locale,"company/user-panel")');
  const admin = submenu.indexOf('route(locale,"company/admin-panel")');
  assert.ok(board >= 0 && user > board && admin > user);
  assert.ok(submenu.includes("menuUi[locale].userPanel"));
  assert.ok(submenu.includes("menuUi[locale].adminPanel"));
});

test("all eight locales have user and administrator navigation labels", () => {
  for (const locale of locales) assert.ok(layout.includes(`${locale}: {`), `missing navigation locale ${locale}`);
  for (const locale of locales) assert.ok(content.includes(`${locale}: {`), `missing portal locale ${locale}`);
  for (const label of [
    "پنل کاربری", "پنل مدیریت", "User Portal", "Admin Panel",
    "بوابة المستخدم", "لوحة الإدارة", "Личный кабинет", "Панель управления",
    "Benutzerportal", "Administrationsbereich", "用户中心", "管理面板",
    "Espace utilisateur", "Panneau d’administration", "Portal de usuario", "Panel de administración"
  ]) assert.ok(layout.includes(label) || content.includes(label), `missing translation: ${label}`);
});

test("user and admin entry pages render the requested identifiers and password", () => {
  assert.ok(userPage.includes('mode="user"'));
  assert.ok(adminPage.includes('mode="admin"'));
  assert.ok(component.includes('name={isAdmin ? "username_or_email" : "username"}'));
  assert.ok(component.includes('type="password"'));
  assert.ok(component.includes('autocomplete="username"'));
  assert.ok(component.includes('autocomplete="current-password"'));
  assert.ok(content.includes('adminIdentifier: "نام کاربری یا ایمیل"'));
  assert.ok(content.includes('adminIdentifier: "Username or email"'));
});

test("sign-in stays inactive and the static pages cannot submit credentials", () => {
  assert.ok(component.includes('type="button" data-auth-inactive disabled'));
  assert.ok(!component.includes("<form"));
  assert.ok(!component.includes("fetch("));
  assert.ok(!component.includes("localStorage"));
  assert.ok(!component.includes("sessionStorage"));
  assert.ok(!component.includes("service_role"));
});

test("portal pages are noindex and excluded from sitemap routes", () => {
  assert.ok(layout.includes('noindex ? "noindex,nofollow,noarchive"'));
  assert.ok(userPage.includes(" noindex>"));
  assert.ok(adminPage.includes(" noindex>"));
  assert.ok(!sitemap.includes("user-panel") && !sitemap.includes("admin-panel"));
});

test("deployment smoke and browser QA include both portal routes and metadata checks", () => {
  assert.ok(deploy.includes('/${locale}/company/user-panel/'));
  assert.ok(deploy.includes('/${locale}/company/admin-panel/'));
  assert.ok(deploy.includes('name="robots" content="noindex,nofollow,noarchive"'));
  assert.ok(browserQa.includes('"company/user-panel/"'));
  assert.ok(browserQa.includes('"company/admin-panel/"'));
  assert.ok(browserQa.includes("hasAccessPassword"));
  assert.ok(browserQa.includes("hasDisabledAccessButton"));
});
