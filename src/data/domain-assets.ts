import type { Field } from "../content/site";

export const domainImageBySlug: Record<Field["slug"], string> = {
  astronomy: "assets/domains/astronomy.webp",
  aerospace: "assets/domains/aerospace.webp",
  "remote-sensing": "assets/domains/remote-sensing.webp",
  energy: "assets/domains/energy.webp",
  "artificial-intelligence": "assets/domains/artificial-intelligence.webp",
  motorsport: "assets/domains/motorsports.webp"
};

/** Build a domain-art URL that remains valid with or without a trailing base-path slash. */
export function domainImageUrl(slug: Field["slug"], baseUrl = import.meta.env.BASE_URL): string {
  const base = baseUrl.replace(/\/+$/, "");
  const asset = domainImageBySlug[slug].replace(/^\/+/, "");
  return `${base}/${asset}`;
}
