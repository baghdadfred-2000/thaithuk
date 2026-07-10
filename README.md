# ThaiThuk.com — Site Guide

An independent English-language magazine celebrating Thai culture, travel and community.
Static site: Tailwind (CDN) + vanilla JS. No build step required.

## File map

| File | Purpose |
|---|---|
| `index.html` | Homepage: hero, featured story, filterable latest grid, network cards |
| `quiz.html` | The ThaiThuk Quiz — 50-question interactive quiz (score as a %, confetti finish, ad refreshes per question) |
| `article-*.html`, `pattaya-case.html` | Feature and article pages (e.g. `article-secret-islands.html`, `article-isan-heart.html`, `article-pattaya-jomtien.html`, `article-thai-hospitality.html`) |
| `about.html`, `contact.html` | Mission & contact (JS mock success state) |
| `privacy-policy.html`, `terms-of-service.html`, `disclaimer.html`, `cookie-policy.html`, `accessibility.html` | Legal |
| `assets/tw-config.js` | Shared Tailwind theme (colors, fonts, shadows) |
| `assets/site.js` | Shared header/footer injection, dark mode, mobile nav, filters, forms, ads + cookie consent |
| `assets/site.css` | Image placeholders and article typography |

## How the shared theme works

Every page contains only two placeholders — `<div id="site-header"></div>` and
`<div id="site-footer"></div>` — which `assets/site.js` replaces with the shared
header/nav and footer at load. Edit navigation or footer **once** in `site.js`
and every page updates. The color palette lives in `assets/tw-config.js`:
cream `#FDF8F0`, night `#0F172A`, ink `#111827`, hot red `#B91C1C`,
gold `#C9A227`/`#B8860B`, teal `#0D9488`, emerald `#059669`, surface `#FFFBF0`.

## Advertising & cookie consent

Ads are served by **Adsterra** and wired through `site.js`. To place an ad, drop a
container anywhere with the data attributes for the unit you want:

```html
<div class="flex justify-center" data-ad-key="0e4413079c83946d9cd8e7cb5dc1781e" data-ad-w="728" data-ad-h="90"></div>
```

- `site.js` finds every `[data-ad-key]` element and loads the Adsterra unit into it.
- The current leaderboard key is `0e4413079c83946d9cd8e7cb5dc1781e` (728×90); a
  320×50 unit (`b2b93ad1cbc896a5a1d5fb03f3876532`) is available if a smaller slot
  is ever needed.
- Ads **only load after the visitor consents.** A first-visit consent banner
  (Reject / Customise / Accept all) plus a settings modal are built into `site.js`;
  the **Cookie Settings** link in the footer reopens it. Until consent, each slot
  shows a subtle "Advertisement" placeholder.
- The quiz calls `window.ThaiThukAds.load(el)` to refresh its banner on every question.

Consent choice is stored on-device in `localStorage` (`thaithuk_consent_v1`).

## Adding a new article page

1. Duplicate `article-thai-hospitality.html`, rename it (e.g. `article-loy-krathong.html`).
2. Update `<title>`, `<meta name="description">`, the JSON-LD block, headline, date and body.
3. Add a card to the homepage grid (copy an existing `<article data-cat="...">` block; set `data-cat` to `news|culture|coastal|travel|festivals`).
4. Keep an in-article ad container if you want one (see Advertising above).

## Local Wire

The "Local Wire" section on `index.html` is curated headline links to original
reporting (currently The Pattaya News). Refresh it by swapping the
`<a class="wire-row">` blocks — keep summaries factual, keep "allegedly" where
charges are unproven, and always link the source. Linking headlines with
attribution is fine; don't copy article text.

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
and create `sitemap.xml` + `robots.txt`. The Adsterra ad slots and the cookie-consent
banner are already in place — just confirm your Adsterra account is approved for the
domain.

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
