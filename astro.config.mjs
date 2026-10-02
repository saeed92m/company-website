import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: process.env.PUBLIC_SITE_URL || undefined,
  base: process.env.PUBLIC_BASE_PATH || "/",
  build: { format: "directory" }
});
