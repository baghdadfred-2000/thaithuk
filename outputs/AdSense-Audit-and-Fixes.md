# ThaiThuk.com — Google AdSense Compliance Audit & Remediation

**Audited:** local working folder `C:\CLAUDE\thaithuk` — 22 HTML pages, `assets/site.js`, `assets/site.css`, `assets/tw-config.js`, `robots.txt`, `sitemap.xml`, image folders, and stray build files.
**Date:** 18 July 2026
**Standard:** Google Publisher Policies / AdSense Program Policies (2026).
**Verdict:** Fundamentally approvable. The site is a genuine, well-written independent magazine with real, original content and complete legal pages. The one hard blocker was a **competing ad network (Adsterra)**, which has now been removed and replaced with AdSense. A few lower-severity items are noted below; the fixes have been applied directly to your files.

A note on framing: this site is a legitimate Thailand travel-and-culture magazine. The images are landmarks, food and signage — there is **no explicit or adult imagery**, and Pattaya is covered the way any city is (temples, gardens, water parks, markets, beaches). Where "risk" is flagged below it refers to specific *literal text strings* that Google's automated ad classifier reacts to on individual pages — not a judgment about the site's subject matter.

---

## PART 1 — Audit Report

### 1. Technical Foundation & UX

**Strengths.** Clean static architecture: shared header/footer injected once from `site.js`, consistent nav (`Home / Quiz / Tools / About / Contact`), Tailwind theming, dark mode, responsive layout, a real 404 page with search, `robots.txt` and `sitemap.xml` present, canonical tags and JSON-LD structured data on every page. Internal linking is healthy — articles cross-link via "Keep reading" blocks and the homepage grid.

**Findings / fixes applied.**

- **Stray build/junk files** — `__wtest.txt` (empty), `__pycache__/_seo_apply.cpython-310.pyc`, and `testdir/SSb0Y.jpg` (a duplicate image) were sitting in the web root. These are crawlable clutter and look unprofessional to a reviewer. **Fixed:** all three removed.
- **Placeholder image folder** — `images/islands/.keep` is an empty scaffold folder. Harmless; left in place.
- **Nav vs. content** — the "Tools" nav item points to `index.html#network` (an on-page anchor), which is fine. No broken internal links were found among the article cross-links.
- **Third-party embeds** — the homepage loads a `weatherwidget.io` script and Google Fonts + Tailwind CDN. All are reputable and disclosed; no action needed, though each is an external dependency to be aware of for privacy/consent.

### 2. Content Quality & Volume

This is the site's biggest strength and the thing AdSense reviewers weight most heavily.

- **Substantial original articles.** Word counts (visible text): Isan food guide ~2,600; "17 things to do in Pattaya" ~1,860; secret islands ~1,790; curry row ~1,000; candle festival ~950; plus 800–870-word pieces on the baht bus, low-season economics, Isan heart, hospitality, visa rules, and Pattaya/Jomtien. The 50-question quiz adds a large body of original trivia with explanatory answers. This clears AdSense's "thin content / low-value" bar comfortably.
- **Original voice, real E-E-A-T signals.** The writing is clearly first-hand ("we live here"), the About page states editorial standards, and the news brief cites Al Jazeera/AFP, Bangkok Post and CNN with a presumption-of-innocence note. Good.
- **E-E-A-T gap — no named authors.** Every article's structured-data `author` is the Organization, and there are no visible bylines or author bios. AdSense doesn't require them, but named authors with short bios materially strengthen trust/credibility. **Recommended (not applied — needs your real contributor info):** add a byline + 1–2 line bio to feature articles.
- **Affiliate/monetisation balance.** Fine. The "Tools & Guides" network links (ThaiVisaFinder, ThaiHolidayBudget, etc.) are disclosed as your own on the About and Disclaimer pages — exactly the right way to handle it.

### 3. Policy Compliance & Prohibited Content

No prohibited content (no hate speech, no illegal-goods facilitation, no malware, no copyrighted-text scraping). Two items warrant care:

- **`pattaya-case.html` — shocking content involving a minor (highest-severity item).** This is a factual, responsibly-sourced news brief about the murder of a 17-year-old, including a charge of "taking a minor for an indecent purpose." Regardless of location, Google's policies treat crime/violence involving a minor as **shocking content** and generally will **not serve ads** on such a page. Your reporting is ethical and well-handled; the issue is purely monetisation. **Fixed (per your choice):** the page stays live for readers, but the ad unit was removed, `robots` set to `noindex, follow`, and the page removed from `sitemap.xml` so it stays out of the ad-review surface.
- **Quiz nightlife references (low-severity).** A handful of quiz questions name adult-entertainment venues in phrasing Google's automated classifier keys on — e.g. Q29 "go-go bars," Q31 Nana Plaza billed as "World's Largest Adult Playground," Q33 "Boyztown … go-go bars." This is non-explicit travel/culture trivia; at worst it limits ad fill on the single `quiz.html` page and does not threaten site approval. **Per your decision, left as-is.** (If ad fill on the quiz ever looks weak, softening those few phrasings is the lever.)

### 4. Trust & Legal Pages

Complete and genuinely good. Present and substantive: **Privacy Policy, Terms of Service, Disclaimer, Cookie Policy, Accessibility, About, Contact.** The Contact page has a working form (Web3Forms) with topic routing and a privacy note. This is a stronger legal footing than most sites entering AdSense review.

- **Fix applied:** every legal page referenced **Adsterra** as the ad provider. All references were updated to **Google AdSense**, and the Privacy and Cookie policies now disclose Google's use of cookies (including the DoubleClick/DART cookie), personalised advertising, and the opt-out links (`policies.google.com` and Google Ads Settings) — which AdSense requires you to disclose.
- **Minor note (no action needed):** the Web3Forms `access_key` in `contact.html` is a *publishable* client key by design, not a secret — safe to leave.

### 5. Ad Placement, Competitor Ads & Monetisation

**This was the one true blocker.** The site served ads through **Adsterra** — a competing ad network. Running another network's monetisation while applying for AdSense is a direct conflict, and Adsterra's ad quality/redirect behaviour is exactly what AdSense review scrutinises.

- **Adsterra ad engine** in `site.js` (`highperformanceformat.com/…/invoke.js` injected via `document.write` into iframes), plus a leaderboard key hardcoded across all 22 pages. **Fixed:** the entire Adsterra loader was replaced with a Google AdSense `<ins class="adsbygoogle">` injector; the loader `adsbygoogle.js` and your `<meta name="google-adsense-account" content="ca-pub-2738929737632064">` verification tag were added to every page `<head>`.
- **Ad density.** One in-content leaderboard per page — well within AdSense's "content must exceed ads" expectation. Good.
- **Quiz ad-refresh.** The quiz re-requested a fresh ad on every question. That's fine for Adsterra but AdSense discourages refreshing ads without a genuine pageview. **Fixed:** the quiz now loads its unit once.

### 6. Traffic Sources & Invalid Activity Risk

Nothing in the files indicates bought traffic, pop-unders, forced clicks, or auto-refresh spam (the one auto-refresh, on the quiz, is fixed). The consent model already blocks ads until the visitor opts in, which is good practice. Keep traffic organic/social and never click your own ads.

### 7. Other Compliance Factors

- **Language:** clean, professional English throughout. No derogatory or harassing content.
- **Image licensing (verify before launch):** `README.md` itself flags that `temple-sunset.jpg` carries a "www.GodPictures.in" watermark — **crop/replace it and confirm the license.** The many short-hash filenames in `images/` (e.g. `2oX3D.jpg`, `SSb0Y.jpg`) suggest mixed sources; make sure every image is owned, licensed, or royalty-free. Copyright is an AdSense policy area.
- **Consent / GDPR:** you have a working consent banner. For personalised ads in the EEA/UK, AdSense now expects a certified Consent Management Platform (CMP) — see recommendations.

---

## PART 2 — Fixes Applied (copy-paste-ready equivalents)

All of the following were **written directly into your files**. The snippets are reproduced so you can verify or reapply them.

### Fix 1 — AdSense verification + loader on every page

Inserted into the `<head>` of all 22 HTML pages, right after `<meta charset="UTF-8">`:

```html
<meta name="google-adsense-account" content="ca-pub-2738929737632064">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2738929737632064" crossorigin="anonymous"></script>
```

### Fix 2 — Ad containers switched from Adsterra to AdSense slots

Every ad container was changed from:

```html
<div class="flex justify-center" data-ad-key="0e4413079c83946d9cd8e7cb5dc1781e" data-ad-w="728" data-ad-h="90"></div>
```

to:

```html
<div class="flex justify-center" data-ad-slot="1234567890"></div>
```

> **Action required from you:** replace the placeholder `1234567890` with a real **ad-unit slot ID** from your AdSense dashboard (Ads → By ad unit → create a Display unit). Until then units render but won't fill. Use find-and-replace across the folder to set all of them at once.

### Fix 3 — New AdSense ad engine in `assets/site.js`

The Adsterra `document.write`/iframe loader was replaced with:

```js
const TT_ADSENSE_CLIENT = 'ca-pub-2738929737632064';

/* Load / refresh one Google AdSense unit into a container element. */
function ttLoadAd(el) {
  if (!el || !el.getAttribute) return;
  const slot = el.getAttribute('data-ad-slot');
  if (!slot) return;
  const w = parseInt(el.getAttribute('data-ad-w'), 10) || 728;
  const h = parseInt(el.getAttribute('data-ad-h'), 10) || 90;
  el.innerHTML = '';
  if (!ttAdsAllowed()) {
    el.innerHTML = `<div class="tt-ad-ph" style="width:${w}px;height:${h}px;max-width:100%;display:flex;align-items:center;justify-content:center;` +
      `border:1px dashed rgba(201,162,39,.4);border-radius:8px;font-size:11px;letter-spacing:.15em;text-transform:uppercase;opacity:.5">Advertisement</div>`;
    return;
  }
  const ins = document.createElement('ins');
  ins.className = 'adsbygoogle';
  ins.style.cssText = 'display:block;margin:0 auto;text-align:center';
  ins.setAttribute('data-ad-client', TT_ADSENSE_CLIENT);
  ins.setAttribute('data-ad-slot', slot);
  ins.setAttribute('data-ad-format', 'auto');
  ins.setAttribute('data-full-width-responsive', 'true');
  el.appendChild(ins);
  try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
}
function ttLoadAllAds() { document.querySelectorAll('[data-ad-slot]').forEach(ttLoadAd); }
```

The consent banner and settings modal wording were also updated from "Adsterra" to "Google AdSense." The consent gate still holds — no ad requests fire until the visitor accepts advertising.

### Fix 4 — `pattaya-case.html` taken out of ad serving

- Ad unit removed (replaced with an HTML comment).
- `<meta name="robots" content="index, follow">` → `<meta name="robots" content="noindex, follow">`.
- URL entry deleted from `sitemap.xml`.

### Fix 5 — Legal pages updated for AdSense disclosure

`privacy-policy.html` and `cookie-policy.html` now name Google AdSense and disclose Google's advertising cookies and opt-out. Example (Privacy Policy → Advertising & cookies):

```html
<p>With your consent, ThaiThuk displays advertising served by <strong>Google AdSense</strong>. Google is a third-party vendor that uses cookies — including the DoubleClick/DART cookie — to serve ads based on your prior visits to this and other websites. Google and its partners may collect and use data as described in <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener" class="text-teal underline">How Google uses information from sites that use its services</a>. You can opt out of personalised advertising in <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener" class="text-teal underline">Google Ads Settings</a>. Ads do not load until you accept them…</p>
```

`terms-of-service.html`, `disclaimer.html`, and `accessibility.html` had their "Adsterra" mentions changed to "Google AdSense." `README.md` advertising docs were updated to match.

### Fix 6 — Junk files removed

`__wtest.txt`, `__pycache__/`, and `testdir/` deleted from the web root.

---

## Remaining actions for you (cannot be done from the files alone)

1. **Create ad units in AdSense** and paste each real slot ID into the `data-ad-slot="1234567890"` placeholders.
2. **Confirm image licenses**; crop the `GodPictures.in` watermark off `temple-sunset.jpg` or replace it.
3. **Add author bylines/bios** to feature articles to strengthen E-E-A-T (optional but valuable).
4. **Add a Google-certified CMP** for EEA/UK personalised-ad consent (e.g. Google's own Funding Choices / Privacy & messaging).
5. **Submit for review** once the site is live at `thaithuk.com` with the AdSense code in place. The `google-adsense-account` meta tag is already on every page for site verification.
