import type { APIRoute } from "astro";
import { locales } from "../data/locales";
import { content } from "../content/site";
import { route } from "../data/routes";

const siteUrl = (import.meta.env.PUBLIC_SITE_URL || "https://saeed92m.github.io/company-website").replace(/\/$/, "");

export const GET: APIRoute = () => {
  const urls = new Set<string>();

  for (const locale of locales) {
    urls.add(new URL(route(locale), siteUrl).toString());
    urls.add(new URL(route(locale, "company"), siteUrl).toString());
    urls.add(new URL(route(locale, "company/ceo"), siteUrl).toString());
    urls.add(new URL(route(locale, "fields"), siteUrl).toString());
    urls.add(new URL(route(locale, "projects"), siteUrl).toString());
    urls.add(new URL(route(locale, "contact"), siteUrl).toString());

    for (const field of content[locale].fields) {
      urls.add(new URL(route(locale, "fields/" + field.slug), siteUrl).toString());
    }
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...urls].sort().map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
};
