/**
 * Seo — sets document title, meta description, canonical and Open Graph
 * tags for the current route.
 *
 * index.html ships sensible defaults for the landing page so crawlers and
 * link previews get something correct on a cold load. This component then
 * overrides them per route, because a SPA that never touches document.head
 * makes /web and /video look like duplicates of the homepage.
 */

import { useEffect } from "react";
import { site } from "../config";

function setMeta(selector, attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function Seo({ title, description, path = "/" }) {
  useEffect(() => {
    if (title) document.title = title;

    const url = `${site.url}${path}`;

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    const canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", url);
  }, [title, description, path]);

  return null;
}
