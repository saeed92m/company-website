/**
 * Resolve an absolute site URL from a route and the configured site origin.
 * The route helper returns a path that already includes Astro's deployment base.
 */
export function resolveSiteUrl(path, origin) {
  if (!origin) return "";
  return new URL(path, origin.endsWith("/") ? origin : `${origin}/`).toString();
}
