import type { APIRoute } from "astro";

const siteUrl = (import.meta.env.PUBLIC_SITE_URL || "https://saeed92m.github.io/company-website").replace(/\/$/, "");

export const GET: APIRoute = () => {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    "Sitemap: " + siteUrl + "/sitemap.xml",
    ""
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
};
