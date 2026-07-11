# ThaiThuk — Google SEO Optimization Report

**Domain determined:** `thaithuk.com` (from the git remote, absolute URLs in the existing `WebSite` schema, and the `og:url` pattern; non-www preferred). All canonicals, Open Graph URLs, sitemap entries, and structured-data IDs use `https://thaithuk.com`.

**Scope:** All 20 HTML pages plus site-wide `robots.txt` and `sitemap.xml`.

**Hard constraint honored:** No visible, user-facing text was added, removed, or reworded. A rendered-text comparison against the previous git version confirms the visible text of all 20 pages is byte-for-byte identical. Every change is a technical/structural element in `<head>`, in JSON-LD, or an image attribute.

---

## What was applied to every page

**Canonical + indexing.** Added a self-referencing `<link rel="canonical">` to all 20 pages. Added `<meta name="robots" content="index, follow">` plus a `googlebot` directive (`max-image-preview:large`) to the 15 public pages. The five legal pages (`accessibility`, `cookie-policy`, `disclaimer`, `privacy-policy`, `terms-of-service`) already carried `noindex` — that intent was preserved, and those pages were deliberately kept out of the sitemap.

**Social / sharing tags.** Completed Open Graph (`og:title`, `og:description`, `og:type`, `og:url`, `og:site_name`, `og:locale`, `og:image` + dimensions) and added Twitter Card (`summary_large_image`) tags across all pages. Article pages use their own hero image as the share image; other pages fall back to the existing `images/og-image.jpg` (already a correct 1200×630). Any pre-existing relative `og:image` was rewritten to an absolute URL.

**Structured data (JSON-LD).**
- Homepage: upgraded the bare `WebSite` block to an `@graph` of `Organization` (with logo) + `WebSite`.
- Articles (11 incl. the `NewsArticle`): the thin `Article` schema was enriched with `description`, absolute `image` (with real dimensions), `dateModified`, `author`, `publisher` (referencing the `Organization` node), `mainEntityOfPage`, `inLanguage`, plus a `BreadcrumbList`. Author is set to the **Organization**, not an invented person — no visible bylines exist on the pages, so no `Person` was fabricated.
- About / Contact / Quiz: added `WebPage` + `Organization` + `BreadcrumbList` schema.
- All 40 JSON-LD blocks validate as parseable JSON.

**Images (Core Web Vitals).** Added intrinsic `width`/`height` (read from the actual files) and `decoding="async"` to every `<img>`. The first (above-the-fold) image on each page gets `loading="eager"` + `fetchpriority="high"` to protect LCP; all others get `loading="lazy"` to reduce initial payload. This is the main CLS/LCP win available at the HTML level.

**Heading hierarchy.** Audited — already healthy. Every page has exactly one H1 and a logical H2→H3 order, so nothing needed restructuring.

---

## New site-wide files

`robots.txt` — allows all crawlers, keeps CSS/JS/images crawlable (so Google can render), disallows only non-public/utility paths, explicitly welcomes `Googlebot`, `Googlebot-Image` and `Google-Extended` (the AI Overviews crawler), and points to the sitemap.

`sitemap.xml` — 15 indexable, canonical URLs with accurate `lastmod` (article dates pulled from each page's schema), plus reasonable `changefreq`/`priority`. The five `noindex` legal pages are excluded.

---

## Recommendations NOT applied (need your call — outside "technical only")

- **Tailwind via CDN** (`cdn.tailwindcss.com`) is a render-blocking script and the single biggest Core Web Vitals lever here — it hurts LCP and INP. For production, compiling Tailwind to a static CSS file would help far more than any tag change. Not done because it's a build change, not an HTML edit.
- **A few titles/meta descriptions run long** (e.g. `article-curry-row` description ~236 chars, several titles >60). These aren't visible page text, so they're editable, but the current ones are well-written and keyword-front-loaded, so I left them intact rather than truncate quality copy. Trim only if you want tighter SERP snippets.
- **`dateModified` currently equals `datePublished`.** When you edit an article, bump its `dateModified` for a freshness signal.

## GSC action plan

1. Upload `robots.txt` and `sitemap.xml` to the site root (`https://thaithuk.com/robots.txt`, `/sitemap.xml`).
2. In Google Search Console, submit `https://thaithuk.com/sitemap.xml` (Sitemaps report).
3. Use URL Inspection → Request Indexing for the homepage and top articles.
4. Watch Pages (coverage), Core Web Vitals, and the Rich Results / structured-data reports over the next 1–2 weeks.
5. Validate a couple of pages in the Rich Results Test and confirm the Organization/Article/Breadcrumb schema is detected.
6. Confirm GA4 ↔ Search Console linking so you can see query-level performance.

## A note on the 2026 assumptions in the prompt

The optimization steps above rely on stable, well-established Google mechanics (canonicals, schema, Open Graph, Core Web Vitals attributes, robots/sitemap). Specific dated claims in the source prompt — a "March 2026 core update" weighting Experience, ongoing 2026 SpamBrain updates, exact AI-Overview behavior — I could not independently verify and did not treat as established fact. None of them changed the technical work.
