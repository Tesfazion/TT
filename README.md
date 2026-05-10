# Sunshine Tech solution — Portfolio

Modern, fast, static portfolio website built with Astro + Tailwind CSS.

## Quick start

1) Install

```powershell
npm.cmd install --cache ".npm-cache" --no-audit --no-fund
```

2) Run

```powershell
npm.cmd run dev
```

3) Build / preview

```powershell
npm.cmd run build
npm.cmd run preview
```

## Edit content (no code)

- `src/config/site.ts` (name, emails, phones, links, SEO, services)
- `src/content/projects/*` (Markdown)
- `src/content/case-studies/*` (Markdown)
- `src/content/insights/*` (Markdown)
- `public/brand/*` (logo + photo)

## Domain (SEO + sitemap)

- Update `src/config/site.ts` -> `site.seo.siteUrl` (current placeholder default is `https://tesfazion.github.io`)
- Set `SITE_URL` for builds/deploys (used by sitemap + canonical URLs):

```powershell
$env:SITE_URL="https://your-domain.com"
npm.cmd run build
```

## Deploy

Any static host works. Build output: `dist/`.
