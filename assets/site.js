/* =========================================================
   ThaiThuk — SHARED SITE JS
   Injects the shared header + footer on every page and wires
   up dark mode, mobile nav, search, filters, forms and forum.
   Every page needs:
     <div id="site-header"></div> ... page content ... <div id="site-footer"></div>
     <script src="assets/site.js"></script>  (at end of <body>)
   ========================================================= */

/* ---------- SHARED HEADER (identical on every page) ---------- */
const NAV_LINKS = [
  ['index.html', 'Home'],
  ['quiz.html', 'Quiz'],
  ['index.html#network', 'Tools'],
  ['about.html', 'About'],
  ['contact.html', 'Contact']
];

const LOGO_SVG = `
<img src="images/logo.png" alt="ThaiThuk" width="36" height="36"
     class="w-9 h-9 rounded-full object-cover ring-2 ring-hot/70 shrink-0"
     style="object-position:50% 28%">`;

function headerHTML() {
  const path = location.pathname.split('/').pop() || 'index.html';
  const links = NAV_LINKS.map(([href, label]) => {
    const active = href === path;
    return `<a href="${href}" class="px-3 py-2 rounded-md text-sm font-medium transition-colors ${active
      ? 'text-hot dark:text-gold font-semibold'
      : 'text-ink/80 dark:text-slate-200 hover:text-hot dark:hover:text-gold'}">${label}</a>`;
  }).join('');
  const mobileLinks = NAV_LINKS.map(([href, label]) =>
    `<a href="${href}" class="block px-4 py-3 border-b border-gold/10 text-ink dark:text-slate-100 hover:bg-gold/10">${label}</a>`).join('');

  return `
  <header class="sticky top-0 z-50 bg-cream/95 dark:bg-night/95 backdrop-blur border-b border-gold/25">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-16 gap-3">
        <a href="index.html" class="flex items-center gap-2.5 shrink-0" aria-label="ThaiThuk home">
          ${LOGO_SVG}
          <span class="flex flex-col leading-tight">
            <span class="flex items-center gap-1.5">
              <span class="font-serif text-2xl font-bold text-ink dark:text-white">Thai<span class="text-gold">Thuk</span></span>
              <svg viewBox="0 0 9 6" width="24" height="16" class="rounded-[2px] ring-1 ring-black/10 dark:ring-white/20 shrink-0" role="img" aria-label="Thai flag"><rect width="9" height="6" fill="#F4F5F8"/><rect width="9" height="1" y="0" fill="#A51931"/><rect width="9" height="1" y="5" fill="#A51931"/><rect width="9" height="2" y="2" fill="#2D2A4A"/></svg>
            </span>
            <span class="hidden sm:block text-[10px] tracking-widest uppercase text-hot">Pattaya &bull; Thailand &bull; Street-Level News</span>
          </span>
        </a>
        <nav class="hidden lg:flex items-center" aria-label="Main">${links}</nav>
        <div class="flex items-center gap-2">
          <button id="theme-toggle" aria-label="Toggle dark mode"
            class="p-2 rounded-full border border-gold/30 dark:border-slate-600 text-ink dark:text-gold hover:bg-gold/10">
            <span class="dark:hidden">🌙</span><span class="hidden dark:inline">☀️</span>
          </button>
          <button id="menu-toggle" aria-label="Open menu" aria-expanded="false"
            class="lg:hidden p-2 rounded-md border border-gold/30 dark:border-slate-600 text-ink dark:text-slate-100">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
    </div>
    <div id="mobile-menu" class="hidden lg:hidden bg-surface dark:bg-slate-900 border-t border-gold/20">
      ${mobileLinks}
    </div>
  </header>`;
}

/* ---------- SHARED FOOTER (identical on every page) ---------- */
function footerHTML() {
  return `
  <footer class="mt-20 bg-night text-slate-300">
    <div class="max-w-7xl mx-auto px-4 py-14 grid gap-10 md:grid-cols-3">
      <div>
        <div class="flex items-center gap-2 mb-3">${LOGO_SVG}
          <span class="font-serif text-xl font-bold text-white">Thai<span class="text-gold">Thuk</span></span>
        </div>
        <p class="text-sm leading-relaxed">Independent English-language news and stories from Pattaya and around Thailand — street level, sourced, and written by people who actually live here.</p>
      </div>
      <div>
        <h3 class="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Explore</h3>
        <ul class="space-y-2 text-sm">
          <li><a class="hover:text-gold" href="about.html">About ThaiThuk</a></li>
          <li><a class="hover:text-gold" href="quiz.html">The ThaiThuk Quiz</a></li>
          <li><a class="hover:text-gold" href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 class="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Tools &amp; Guides</h3>
        <ul class="space-y-2 text-sm">
          <li><a class="hover:text-gold" href="https://thaivisafinder.com" target="_blank" rel="noopener">ThaiVisaFinder</a></li>
          <li><a class="hover:text-gold" href="https://thaiholidaybudget.com" target="_blank" rel="noopener">ThaiHolidayBudget</a></li>
          <li><a class="hover:text-gold" href="https://thailetters.com" target="_blank" rel="noopener">ThaiLetters</a></li>
          <li><a class="hover:text-gold" href="https://thailotterynumbers.com" target="_blank" rel="noopener">ThaiLotteryNumbers</a></li>
          <li><a class="hover:text-gold" href="https://thaitripplanner.com" target="_blank" rel="noopener">ThaiTripPlanner</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-slate-700">
      <div class="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <p>© 2026 Genext Information Systems. All rights reserved. · thaithuk.com · V1.0</p>
        <nav class="flex flex-wrap gap-4" aria-label="Legal">
          <a class="hover:text-gold" href="privacy-policy.html">Privacy</a>
          <a class="hover:text-gold" href="terms-of-service.html">Terms</a>
          <a class="hover:text-gold" href="disclaimer.html">Disclaimer</a>
          <a class="hover:text-gold" href="cookie-policy.html">Cookies</a>
          <a class="hover:text-gold" href="accessibility.html">Accessibility</a>
          <button type="button" data-cookie-settings class="hover:text-gold">Cookie Settings</button>
        </nav>
      </div>
    </div>
  </footer>`;
}

/* ---------- BOOT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const h = document.getElementById('site-header');
  const f = document.getElementById('site-footer');
  if (h) h.outerHTML = headerHTML();
  if (f) f.outerHTML = footerHTML();

  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* Dark mode (persisted) */
  const toggle = document.getElementById('theme-toggle');
  if (toggle) toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('thaituk_theme',
      document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  });

  /* Mobile menu */
  const mt = document.getElementById('menu-toggle');
  const mm = document.getElementById('mobile-menu');
  if (mt && mm) mt.addEventListener('click', () => {
    const open = mm.classList.toggle('hidden') === false;
    mt.setAttribute('aria-expanded', open);
  });

  /* Newsletter forms */
  document.querySelectorAll('[data-newsletter]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      form.classList.add('hidden');
      const msg = form.parentElement.querySelector('[data-newsletter-msg]');
      if (msg) msg.classList.remove('hidden');
    });
  });

  /* Cookie consent + advertising */
  ttInitConsent();
  ttLoadAllAds();

  /* Category filters + search (listing pages) */
  initFilters();
  /* Contact form */
  initContactForm();
  /* Forum */
  initForum();
});

/* Theme applied ASAP to avoid flash (script is at end of body, so also
   inline in <head> via the small snippet each page carries). */

/* ---------- Filters & search ---------- */
function initFilters() {
  const cards = document.querySelectorAll('[data-cat]');
  if (!cards.length) return;
  const buttons = document.querySelectorAll('[data-filter]');
  const empty = document.getElementById('no-results');
  const q = new URLSearchParams(location.search).get('q');
  const searchBox = document.getElementById('list-search');
  if (q && searchBox) searchBox.value = q;

  function apply() {
    const active = document.querySelector('[data-filter].is-active');
    const cat = active ? active.dataset.filter : 'all';
    const term = (searchBox ? searchBox.value : (q || '')).trim().toLowerCase();
    let shown = 0;
    cards.forEach(c => {
      const okCat = cat === 'all' || c.dataset.cat === cat;
      const okTerm = !term || c.textContent.toLowerCase().includes(term);
      const show = okCat && okTerm;
      c.classList.toggle('hidden', !show);
      if (show) shown++;
    });
    if (empty) empty.classList.toggle('hidden', shown > 0);
  }
  buttons.forEach(b => b.addEventListener('click', () => {
    buttons.forEach(x => x.classList.remove('is-active', 'bg-hot', 'text-white'));
    b.classList.add('is-active', 'bg-hot', 'text-white');
    apply();
  }));
  if (searchBox) searchBox.addEventListener('input', apply);
  const all = document.querySelector('[data-filter="all"]');
  if (all) all.classList.add('is-active', 'bg-hot', 'text-white');
  apply();
}

/* ---------- Contact form ---------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.classList.add('hidden');
    document.getElementById('contact-success').classList.remove('hidden');
  });
}

/* ---------- Forum (localStorage mock) ---------- */
const FORUM_KEY = 'thaituk_forum_v1';
const SEED_THREADS = [
  { id: 1, cat: 'Travel Tips', author: 'Nok', title: 'Songkran in Chiang Mai — how to join respectfully',
    body: 'Went last April and locals were so welcoming when we asked before splashing elders. Any other etiquette tips for first-timers?',
    replies: [{ author: 'Mark_BKK', body: 'Wear a floral shirt, protect your phone, and wai the older folks — you will be adopted by a whole soi within an hour.' }] },
  { id: 2, cat: 'Isan Culture', author: 'Ploy_KK', title: 'Best som tam you have ever had?',
    body: 'My grandmother in Khon Kaen makes it with fermented fish sauce and it ruins every restaurant version for me. Where do you go?',
    replies: [{ author: 'DavidJ', body: 'A cart outside Udon Thani bus station. 30 baht. Life-changing.' }] },
  { id: 3, cat: 'Pattaya & Jomtien', author: 'Somchai_P', title: 'Jomtien night market recommendations',
    body: 'The Thepprasit market keeps getting better — great grilled seafood row near the back. What are your favourite stalls?',
    replies: [] },
  { id: 4, cat: 'Language Learning', author: 'Emma_L', title: 'Finally read my first menu in Thai script!',
    body: 'Six months of practice with thailetters.com drills and today I ordered kao pad without pointing. Small win, huge feeling.',
    replies: [{ author: 'Nok', body: 'Geng mak! The menu milestone is a real one. Next stop: motorbike taxi negotiations. 😄' }] }
];

function loadThreads() {
  try { return JSON.parse(localStorage.getItem(FORUM_KEY)) || SEED_THREADS; }
  catch { return SEED_THREADS; }
}
function saveThreads(t) { localStorage.setItem(FORUM_KEY, JSON.stringify(t)); }
function avatar(name) {
  const colors = ['#B91C1C', '#C9A227', '#0D9488', '#059669', '#7C3AED'];
  const c = colors[name.charCodeAt(0) % colors.length];
  return `<span class="inline-flex items-center justify-center w-9 h-9 rounded-full text-white text-sm font-bold shrink-0" style="background:${c}">${name[0].toUpperCase()}</span>`;
}
function esc(s) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

function initForum() {
  const root = document.getElementById('forum-threads');
  if (!root) return;
  let threads = loadThreads();

  function render() {
    root.innerHTML = threads.slice().reverse().map(t => `
      <article class="bg-surface dark:bg-slate-800 rounded-xl shadow-soft border border-gold/15 dark:border-slate-700 p-5">
        <div class="flex items-start gap-3">
          ${avatar(t.author)}
          <div class="flex-1 min-w-0">
            <div class="flex flex-wrap items-center gap-2">
              <h3 class="font-serif font-bold text-lg text-ink dark:text-white">${esc(t.title)}</h3>
              <span class="text-[11px] px-2 py-0.5 rounded-full bg-teal/10 text-teal font-medium">${esc(t.cat)}</span>
            </div>
            <p class="text-xs text-ink/50 dark:text-slate-400 mb-2">by ${esc(t.author)}</p>
            <p class="text-sm text-ink/80 dark:text-slate-300 leading-relaxed">${esc(t.body)}</p>
            <div class="mt-3 space-y-3">
              ${t.replies.map(r => `
                <div class="flex gap-2.5 pl-3 border-l-2 border-gold/40">
                  ${avatar(r.author)}
                  <div><p class="text-xs font-semibold text-ink/70 dark:text-slate-300">${esc(r.author)}</p>
                  <p class="text-sm text-ink/80 dark:text-slate-300">${esc(r.body)}</p></div>
                </div>`).join('')}
            </div>
            <form data-reply="${t.id}" class="mt-3 flex gap-2">
              <input required placeholder="Write a friendly reply…" aria-label="Reply"
                class="flex-1 min-w-0 px-3 py-1.5 text-sm rounded-md border border-gold/25 bg-cream dark:bg-slate-900 dark:border-slate-600 dark:text-slate-100">
              <button class="px-3 py-1.5 text-sm rounded-md bg-teal text-white font-medium hover:bg-teal/90">Reply</button>
            </form>
          </div>
        </div>
      </article>`).join('');

    root.querySelectorAll('[data-reply]').forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const id = Number(form.dataset.reply);
        const input = form.querySelector('input');
        const t = threads.find(x => x.id === id);
        if (t && input.value.trim()) {
          t.replies.push({ author: 'You', body: input.value.trim() });
          saveThreads(threads); render();
        }
      });
    });
  }

  const newForm = document.getElementById('new-thread-form');
  if (newForm) newForm.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(newForm);
    threads.push({
      id: Date.now(), cat: fd.get('cat'), author: (fd.get('author') || 'Guest').toString().trim() || 'Guest',
      title: fd.get('title').toString().trim(), body: fd.get('body').toString().trim(), replies: []
    });
    saveThreads(threads); newForm.reset(); render();
    document.getElementById('forum-threads').scrollIntoView({ behavior: 'smooth' });
  });

  render();
}

/* =========================================================
   ADVERTISING (Google AdSense) + CONSENT
   - Ad/personalisation consent for EEA/UK visitors is handled by Google's
     certified CMP (AdSense → Privacy & messaging), delivered automatically
     through adsbygoogle.js (loaded in each page <head>). Google holds the ad
     auction until the visitor has made a choice, so we load units by default.
   - Ad containers are any element with data-ad-slot.
   - A light first-visit notice covers strictly-necessary on-device storage
     (theme + quiz progress); "Cookie Settings" reopens Google's consent choices.
   - Call ThaiThukAds.load(el) to render/refresh a single unit (quiz banner).
   ========================================================= */
const TT_ADSENSE_CLIENT = 'ca-pub-2738929737632064';
const TT_NOTICE_KEY = 'thaithuk_notice_v2';

/* Render one Google AdSense unit into a container element. */
function ttLoadAd(el) {
  if (!el || !el.getAttribute) return;
  const slot = el.getAttribute('data-ad-slot');
  if (!slot) return;
  el.innerHTML = '';
  /* Inject a responsive AdSense <ins> unit and ask AdSense to fill it.
     adsbygoogle.js (with the CMP) is already loaded from the page <head>. */
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

window.ThaiThukAds = { load: ttLoadAd, refreshAll: ttLoadAllAds };

/* Reopen the visitor's ad-consent choices. In the EEA/UK, Google's CMP
   (Funding Choices) exposes googlefc.showRevocationMessage(); elsewhere there
   is no ad-consent prompt, so we fall back to the Cookie Policy. */
function ttOpenConsentChoices() {
  try {
    if (window.googlefc && typeof window.googlefc.showRevocationMessage === 'function') {
      window.googlefc.showRevocationMessage();
      return;
    }
  } catch (e) {}
  window.location.href = 'cookie-policy.html';
}

/* Light first-visit notice for strictly-necessary on-device storage.
   (Ad/personalisation consent is handled separately by Google's CMP.) */
function ttInitConsent() {
  document.addEventListener('click', e => {
    if (e.target.closest('[data-cookie-settings]')) { e.preventDefault(); ttOpenConsentChoices(); }
    else if (e.target.closest('[data-cc-dismiss]')) {
      try { localStorage.setItem(TT_NOTICE_KEY, '1'); } catch (e) {}
      const b = document.getElementById('tt-cc-banner'); if (b) b.remove();
    }
  });

  let seen = false;
  try { seen = localStorage.getItem(TT_NOTICE_KEY) === '1'; } catch (e) {}
  if (seen) return;

  const banner = document.createElement('div');
  banner.id = 'tt-cc-banner';
  banner.className = 'fixed bottom-0 inset-x-0 z-[90] bg-night text-slate-200 border-t border-gold/30';
  banner.innerHTML = `
    <div class="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center gap-3 text-sm">
      <p class="flex-1">ThaiThuk uses a little on-device storage to remember your theme and quiz progress, and shows ads via Google. EEA/UK visitors are asked about ad personalisation separately. See our <a href="cookie-policy.html" class="text-gold underline">Cookie Policy</a>.</p>
      <div class="flex gap-2 shrink-0">
        <button type="button" data-cookie-settings class="px-4 py-2 rounded-full border border-gold/40 hover:bg-slate-800">Ad settings</button>
        <button type="button" data-cc-dismiss class="px-4 py-2 rounded-full bg-gold text-night font-semibold hover:bg-golddeep">Got it</button>
      </div>
    </div>`;
  document.body.appendChild(banner);
}
