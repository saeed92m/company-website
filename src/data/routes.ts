import type { Locale } from "./locales";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function route(locale: Locale, path = ""): string {
  const normalized = path.replace(/^\/+|\/+$/g, "");
  return normalized ? `${base}/${locale}/${normalized}/` : `${base}/${locale}/`;
}
