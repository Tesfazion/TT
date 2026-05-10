import type { APIRoute } from "astro";

const robots = (sitemapUrl: URL) => `User-agent: *
Allow: /

Sitemap: ${sitemapUrl.href}
`;

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://tesfazion.github.io");
  const sitemapUrl = new URL("sitemap-index.xml", base);
  return new Response(robots(sitemapUrl), {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
};
