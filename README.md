# Tesfatseyon Merkinh — Portfolio

Personal portfolio website for **Tesfatseyon Merkinh** — full-stack web developer and short-form video editor based in Wolaita-Sodo, Ethiopia.

**Live:** <https://tesfatseyon.dev>

## Features

- **Dual-mode portfolio** — Web Developer and Video Editor, each with its own hero, résumé, skills, services, and projects
- **Clean URLs** — `BrowserRouter` with a Vercel SPA rewrite, so routes are `/web` and `/video` rather than `/#/web`
- **Dark / light theme** — persisted in `localStorage`, resolved before first paint so there is no flash
- **Single-source content** — every word, project, and link lives in `src/config.js`
- **Real, downloadable résumés** — one-page PDFs served from `public/`
- **Tokenised design system** — the light theme is one token override, not a second copy of every rule
- **One hover system, one ambient layer, no decorative loops** — motion only where it carries meaning
- **Structured data** — JSON-LD `Person` schema, Open Graph card, canonical, `robots.txt`, `sitemap.xml`
- **Accessible** — `prefers-reduced-motion`, `focus-visible`, skip-safe landmarks, ARIA throughout

## Tech stack

| Layer      | Tech                          |
|------------|-------------------------------|
| Framework  | React 19 + Vite 7             |
| Routing    | React Router v7 (BrowserRouter) |
| Styling    | Plain CSS custom properties   |
| Fonts      | Inter + Space Grotesk         |
| Deployment | Vercel                        |

No UI library, no CSS framework, no state manager — the whole site is React plus one stylesheet.

## Project structure

```
public/
  me.jpg               profile photo
  og.jpg               1200x630 social share card
  favicon.svg
  apple-touch-icon.png 180x180 iOS home-screen icon
  icon-512.png         512x512 PNG icon
  robots.txt
  sitemap.xml
  404.html
  resume-web.pdf       generated one-page résumé
  resume-video.pdf
tools/
  make_icons.py        regenerates the PNG icons from the brand gradient
src/
  components/
    About.jsx
    Contact.jsx
    FabControls.jsx    single floating button (scroll to top)
    Footer.jsx
    Hero.jsx
    Icon.jsx           inline SVG icon set
    Navbar.jsx
    Projects.jsx
    Resume.jsx
    Reveal.jsx         scroll-triggered fade-up
    NotFound.jsx       in-app 404 for unknown routes
    Seo.jsx            per-route title / description / canonical / OG
    Services.jsx
    TechStack.jsx      tech badge grid + capability groups
    ThemeToggle.jsx    dark/light, also syncs <meta theme-color>
  pages/
    Landing.jsx        service chooser
    PortfolioPage.jsx  per-mode page
  App.jsx              router + page transitions
  config.js            all content — single source of truth
  hooks.js             useTypewriter, useInView, useCountUp
  index.css            design system
  main.jsx             entry + pre-paint theme resolution
  PortfolioContext.jsx
  portfolio-context.js
vercel.json            build config + SPA rewrite
```

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build
npm run preview
npm run lint
```

## Deployment

### Vercel

1. Push this repo to GitHub
2. Import the repo into Vercel
3. Set **Root Directory** to `portfolio`
4. `vercel.json` handles the build and the SPA rewrite — no other config needed
5. Add the custom domain under Settings → Domains

The rewrite in `vercel.json` sends every unmatched path to `index.html` so
`/web` and `/video` resolve on a hard refresh. Vercel checks the filesystem
before applying rewrites, so anything in `public/` (résumés, images,
`sitemap.xml`) is still served directly.

### GitHub Pages

GitHub Pages has no rewrite support, so switch `BrowserRouter` back to
`HashRouter` in `src/App.jsx` if you deploy there.

## Editing content

Everything you are likely to change is in **`src/config.js`**:

- `profile` — name, contact details, photo, links
- `socials` — social URLs
- `modes.web` / `modes.video` — tagline, bio, highlights, stats, skills, services, projects, résumé link
- `navLinks` — navbar and footer links

Adding a project is one object in the relevant `projects` array. Set `link` for
a live demo and `github` for the repository; leave either `null` and the
corresponding button is not rendered.

Page titles, meta descriptions, canonical URLs, and Open Graph tags are also
per-route. Edit `site.seo` for the landing page and `seo` inside each mode:

```js
modes.video.seo = {
  title: "Video Editor — Your Name",
  description: "One or two sentences, ideally under 160 characters.",
};
```

`Seo.jsx` applies these on navigation. `index.html` still ships correct
defaults so a cold load and a link preview are never blank.

## Contact

- Email: tesfatseyon16@gmail.com
- Telegram: [t.me/Zizo1616](https://t.me/Zizo1616)
- GitHub: [github.com/Tesfazion](https://github.com/Tesfazion)
- LinkedIn: [linkedin.com/in/tesfatseyon-merkinh-becho-a38626402](https://www.linkedin.com/in/tesfatseyon-merkinh-becho-a38626402)
