import type { Field } from "../content/site";

export const domainImageBySlug: Record<Field["slug"], string> = {
  astronomy: "assets/domains/astronomy.svg",
  aerospace: "assets/domains/aerospace.svg",
  "remote-sensing": "assets/domains/remote-sensing.svg",
  energy: "assets/domains/energy.svg",
  "artificial-intelligence": "assets/domains/artificial-intelligence.svg",
  motorsport: "assets/domains/motorsport.svg"
};

export const domainDiagramBySlug: Record<Field["slug"], string> = {
  astronomy: "assets/domains/technical/astronomy.svg",
  aerospace: "assets/domains/technical/aerospace.svg",
  "remote-sensing": "assets/domains/technical/remote-sensing.svg",
  energy: "assets/domains/technical/energy.svg",
  "artificial-intelligence": "assets/domains/technical/artificial-intelligence.svg",
  motorsport: "assets/domains/technical/motorsport.svg"
};

/** Build domain asset URLs that remain valid with or without a trailing base-path slash. */
function assetUrl(asset: string, baseUrl = import.meta.env.BASE_URL): string {
  const base = baseUrl.replace(/\/+$/, "");
  return `${base}/${asset.replace(/^\/+/, "")}`;
}

export function domainImageUrl(slug: Field["slug"], baseUrl?: string): string {
  return assetUrl(domainImageBySlug[slug], baseUrl);
}

export function domainDiagramUrl(slug: Field["slug"], baseUrl?: string): string {
  return assetUrl(domainDiagramBySlug[slug], baseUrl);
}
