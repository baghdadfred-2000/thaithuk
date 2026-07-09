# ThaiThuk.com — Site Guide

An independent English-language magazine celebrating Thai culture, travel and community.
Static site: Tailwind (CDN) + vanilla JS. No build step required.

## File map

| File | Purpose |
|---|---|
| `index.html` | Homepage: hero, featured story, filterable latest grid, network cards, forum teaser |
| `news.html` | News listing with search + category filters |
| `in-depth.html` | Long-form features listing with filters |
| `article-secret-islands.html` | Island guide: Koh Kood, Koh Lipe, Kradan, Mook, Krabi lagoons, Koh Tao |
| `article-isan-heart.html` | Feature: Isan family culture |
| `article-thai-hospitality.html` | Feature: nam jai / Thai hospitality |
| `article-pattaya-jomtien.html` | Feature: Pattaya & Jomtien coastal life |
| `forum.html` | Demo community forum (localStorage) |
| `about.html`, `contact.html` | Mission & contact (JS mock success state) |
| `privacy-policy.html`, `terms-of-service.html`, `disclaimer.html`, `cookie-policy.html` | Legal |
| `assets/tw-config.js` | Shared Tailwind theme (colors, fonts, shadows) |
| `assets/site.js` | Shared header/footer injection, dark mode, filters, forum, forms |
| `assets/site.css` | Image placeholders, article typography, ad slots |

## How the shared theme works

Every page contains only two placeholders — `<div id="site-header"></div>` and
`<div id="site-footer"></div>` — which `assets/site.js` replaces with the shared
header/nav and footer at load. Edit navigation or footer **once** in `site.js`
and every page updates. The color palette lives in `assets/tw-config.js`:
cream `#FDF8F0`, night `#0F172A`, ink `#111827`, hot red `#B91C1C`,
gold `#C9A227`/`#B8860B`, teal `#0D9488`, emerald `#059669`, surface `#FFFBF0`.

## Adding a new article page

1. Duplicate `article-thai-hospitality.html`, rename it (e.g. `article-loy-krathong.html`).
2. Update `<title>`, `<meta name="description">`, the JSON-LD block, headline, date and body.
3. Add a card for it on `news.html` or `in-depth.html` (copy an existing `<article data-cat="...">` block; set `data-cat` to `news|culture|coastal|travel|festivals`).
4. Optionally add it to the homepage grid the same way.

## Local Wire

The "Local Wire" sections on `index.html` and `news.html` are curated headline
links to original reporting (currently The Pattaya News). Refresh them by
swapping the `<a class="wire-row">` blocks — keep summaries factual, keep
"allegedly" where charges are unproven, and always link the source. Linking
headlines with attribution is fine; don't copy article text.

## Images

Your photos live in `images/` and are wired into the hero and most cards
(`<img class="card-img street-photo">`). Remaining `.img-ph` divs are styled
placeholders whose `data-label` describes the photo to source — replace the
same way. Two housekeeping notes: `temple-sunset.jpg` carries a
"www.GodPictures.in" watermark (bottom-right) — crop it or replace before
launch and confirm the license; `bangkok.jpeg` and `rayong.jpg` are large
(1.9 MB / 7.5 MB) — compress to WebP ~1600px (squoosh.app) for faster loads.

## Deployment

**Netlify (easiest):** drag the folder onto app.netlify.com, or connect a Git repo.
For the contact form, add `name="contact" method="POST" data-netlify="true"` to the
form in `contact.html` and delete `initContactForm()` in `site.js`.

**Vercel / Cloudflare Pages / GitHub Pages:** all work as-is — it's plain static files.

**Before going live:** point the `thaithuk.com` DNS at your host, add a favicon,
create `sitemap.xml` + `robots.txt`, and if using AdSense, replace the `.ad-slot`
divs with your ad units and add a consent banner (required in the EU/UK).

**Later, if the site grows:** move to Eleventy or Astro so header/footer become
real build-time includes, and Tailwind CDN becomes a compiled stylesheet. The
class names carry over unchanged.

## Editorial notes (important)

- **Features vs. news:** features are openly affectionate magazine writing;
  news briefs are neutral and sourced. Keeping that line clean is what makes
  the affection credible.
- **Disclosure:** the network tool sites are ours — that's disclosed on the
  About and Disclaimer pages. Keep it that way.

## Future article ideas (magazine features)

1. **A year of Thai festivals, month by month** — Songkran, Loy Krathong, the Ubon Candle Festival, Isan rocket festivals; how to join respectfully.
2. **The 1,000-baht day** — travelling on a local budget with real numbers from ThaiHolidayBudget.
3. **Learning to read Thailand** — a Thai-script learner's diary, with ThaiLetters milestones.
4. **Draw days** — the culture of the twice-monthly lottery; hope, ritual and community (with a responsible-play note); results via ThaiLotteryNumbers.
5. **Visa options explained like a friend would** — plain-English guide to current rules, kept updated; ThaiVisaFinder as the tool.
6. **Som tam: one dish, a hundred arguments** — regional styles and the great pla ra debate.
7. **Thailand's morning economy** — alms rounds, wet markets and jok stalls before 8am.
8. **Long-stayers who got it right** — profiles of retirees and remote workers who integrated well: language, volunteering, community.
9. **The songthaew guide to the Eastern Seaboard** — car-free travel between Pattaya, Jomtien and Bang Saray.
10. **Beach clean-up culture** — the volunteer groups keeping Jomtien and Dongtan sands clean.
11. **Molam rising** — how Isan's music went from country fairs to festival main stages.
12. **Temple etiquette, kindly explained** — what to wear, how to wai, what the murals mean.
13. **Thailand's dinosaur province** — Kalasin's fossils, reservoirs and slow-travel charm.
14. **Muay Thai for beginners in Thailand** — how to train respectfully at a real gym.
15. **The kingdom in four bowls** — boat noodles, khao soi, kanom jeen, kuay jab: a noodle road-trip.
