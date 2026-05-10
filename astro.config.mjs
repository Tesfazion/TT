import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const siteUrl = process.env.SITE_URL || "https://tesfazion.github.io";

export default defineConfig({
  site: siteUrl,
  integrations: [
    sitemap()
  ]
});
