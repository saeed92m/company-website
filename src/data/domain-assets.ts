import type { Field } from "../content/site";

export const domainImageBySlug: Record<Field["slug"], string> = {
  astronomy: "assets/domains/astronomy.svg",
  aerospace: "assets/domains/aerospace.svg",
  "remote-sensing": "assets/domains/remote-sensing.svg",
  energy: "assets/domains/energy.svg",
  "artificial-intelligence": "assets/domains/artificial-intelligence.svg",
  motorsport: "assets/domains/motorsport.svg"
};

/** Build a domain-art URL that remains valid with or without a trailing base-path slash. */
export function domainImageUrl(slug: Field["slug"], baseUrl = import.meta.env.BASE_URL): string {
  const base = baseUrl.replace(/\/+$/, "");
  const asset = domainImageBySlug[slug].replace(/^\/+/, "");
  return `${base}/${asset}`;
}
