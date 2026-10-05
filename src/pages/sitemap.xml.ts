import type { APIRoute } from "astro";
import { locales } from "../data/locales";
import { content } from "../content/site";
import { route } from "../data/routes";

const siteUrl = (import.meta.env.PUBLIC_SITE_URL || "https://saeed92m.github.io/company-website").replace(/\/$/, "");

const xmlEscape = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");

export const GET: APIRoute = () => {
  const paths = new Set<string>();

  for (const locale of locales) {
    paths.add(route(locale));
    paths.add(route(locale, "company"));
    paths.add(route(locale, "company/ceo"));
    paths.add(route(locale, "fields"));
    paths.add(route(locale, "projects"));
    paths.add(route(locale, "contact"));

    for (const field of content[locale].fields) {
      paths.add(route(locale, "fields/" + field.slug));
    }
  }

  const urls = [...paths].sort();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map((path) => {
    const loc = new URL(path, siteUrl).toString();
    const localeMatch = path.match(/^.*\/(fa|en|ar|ru|de|zh|fr|es)\/(.*)$/);
    const locale = localeMatch?.[1];
    const localizedPath = locale ? localeMatch[2] : "";
    const alternates = locale
      ? locales.map((code) => `    <xhtml:link rel="alternate" hreflang="${code}" href="${xmlEscape(new URL(route(code, localizedPath), siteUrl).toString())}" />`).concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(new URL(route("en", localizedPath), siteUrl).toString())}" />`).join("\n")
      : "";
    return `  <url>
    <loc>${xmlEscape(loc)}</loc>
${alternates}
  </url>`;
  }).join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
};
