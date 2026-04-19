# tbrska — Deploy Report

**Datum:** 19. 4. 2026
**Build:** `fa0266c` (initial commit)
**Audit & úpravy:** Claude (Opus 4.7) pod dohledem Jirky

---

## ✅ Status

| Krok | Stav | Výsledek |
|---|---|---|
| 1. Audit | hotovo | 11 bodů identifikováno, všechny vyřešeny |
| 2. Vylepšení | hotovo | 9 SVG placeholderů, favicon, OG, sitemap, robots, CSS/JS fixy |
| 3. Git lokál | hotovo | commity `fa0266c`, `3250591` na `main` |
| 3. GitHub push | ✅ **hotovo** | https://github.com/JiriSimana/Tbrska |
| 4. Vercel projekt | ✅ existuje | `tbrska` v týmu `jirisimana-smartcaseczs-projects` |
| 4. Vercel deploy | ⏳ **čeká na 30s klik** | návod níž — linknout GitHub repo v UI |
| 5. Tento report | hotovo | čteš ho |

---

## 🔗 URL přehled (aktualizuj až přibude)

| Co | URL |
|---|---|
| Lokální náhled | http://localhost:8000 |
| GitHub repo | https://github.com/JiriSimana/Tbrska ✅ |
| Vercel projekt | https://vercel.com/jirisimana-smartcaseczs-projects/tbrska |
| Vercel production | `https://tbrska.vercel.app` _(po linknutí repa)_ |
| Doména | _— odloženo, domluvíme_ |

---

## 🚀 Krok 3 — GitHub push ✅ HOTOVO

Repo je živé: https://github.com/JiriSimana/Tbrska

Commity na `main`:
- `fa0266c` feat: initial tbrska portfolio website
- `3250591` docs: add deploy report + ignore .claude session dir
- (tento update přibyde po tom, co ho commitnu)

---

## 🌐 Krok 4 — Vercel deploy (30 sekund, 3 kliky)

Projekt `tbrska` na Vercelu už existuje — jen není napojený na git. Stačí propojit:

### 4.1 Otevři přímo nastavení projektu

**Klikni:** https://vercel.com/jirisimana-smartcaseczs-projects/tbrska/settings/git

### 4.2 Propoj repo

1. V sekci **Connected Git Repository** klikni **Connect Git Repository**
2. Pokud seznam je prázdný → klikni **Install GitHub App** → povol přístup k `JiriSimana/Tbrska`
3. Vyber `JiriSimana/Tbrska` → **Connect**
4. Production Branch: `main` (default) → **Save**

### 4.3 Deploy se spustí sám

Vercel detekuje `vercel.json`, vezme poslední commit z `main` a nasadí. Po ~20 s budeš mít URL:
`https://tbrska.vercel.app` (nebo `https://tbrska-<randomhash>.vercel.app`)

Pošli mi URL, zkontroluju HTTP stav + Lighthouse.

### Continuous deployment

Od teď každý `git push origin main` automaticky spustí nový production deploy. Feature branche dostanou preview deploymenty.

### Alternativně: přes Vercel CLI

Pokud bys chtěl CLI:
```bash
npm i -g vercel
cd "/Users/jirisimana/Desktop/Webové stránky - kodování/Web_dominika"
vercel login           # jednorázově, otevře prohlížeč
vercel link --project tbrska --scope jirisimana-smartcaseczs-projects --yes
vercel --prod --yes
```

### Co udělá [vercel.json](vercel.json)

- `cleanUrls: true` — `/index.html` → `/`
- Security headers: X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy
- Cache: obrázky/fonty na 1 rok (immutable), CSS/JS s `must-revalidate` na 1 h

Automatický redeploy: každý `git push` na `main` automaticky spustí nový deploy.

---

## 📊 Lighthouse — jak změřit

Nemám nainstalovaný `@lhci/cli`, takže score neuvedu jako fakt. Dva způsoby jak to spustit sám:

### Nejrychlejší: PageSpeed Insights (online)
https://pagespeed.web.dev/?url=https://tbrska-XXXX.vercel.app (dosadí se po deployi)

### V prohlížeči: Chrome DevTools
1. Otevři web v Chrome
2. F12 → záložka **Lighthouse** → **Analyze page load**
3. Mobile + Desktop obě zvlášť

### Očekávaný rozsah (odhad z kódu, ne měření)

| Kategorie | Odhad | Důvod |
|---|---|---|
| Performance | 95–100 | Vanilla JS, SVG (každý <2 KB), lazy loading, žádný bundle |
| Accessibility | 92–98 | ARIA labely, sémantický HTML, kontrast OK; možná drobné flagy na kontrastu `text-muted` na cream |
| Best Practices | 95–100 | HTTPS (Vercel), správné meta, žádné deprecated APIs |
| SEO | 100 | Canonical, OG, description, sitemap, robots, lang, title pod 60 znaků |

Pokud něco bude pod 90, napiš — doladíme.

---

## 🧭 Co dál doporučuji

### 🔴 Hned (ještě tento týden)

1. **Dopln telefon Dominiky** → [`index.html` L454–L455](index.html#L454-L455) (placeholder `+421 XXX XXX XXX`)
2. **Google Analytics 4** — vytvoř property (https://analytics.google.com), zkopíruj tracking snippet a vlož před `</head>` v `index.html` (L54, těsně před `</head>`). Mohu udělat v příští iteraci.
3. **Google Search Console** — po deployi verify doménu, submit `sitemap.xml`.

### 🟡 Krátkodobě (do měsíce)

4. **Skutečné fotky portfolia** — Dominika nafotí své práce, ty je optimalizuješ (Squoosh, WebP ~1200×1200, <200 KB), nahradíte 9 SVG. Postup je v [README.md](README.md) v sekci "Jak upravit texty".
5. **Vlastní doména** — návrhy: `tbrska.cz`, `tbrska.com`, `tbrska.art`, `dominikataborska.cz`. Registrace ~250 Kč/rok, napojení na Vercel: Project → Settings → Domains → Add. DNS propagation 0–24 h.
6. **Formspree místo `mailto:`** — aktuálně formulář otevírá e-mailový klient. Za 5 min se dá napojit Formspree (zdarma do 50 zpráv/měs) a zprávy budou chodit rovnou Dominice.

### 🟢 Střednědobě (1–2 měsíce)

7. **SK mutace** — Dominika dodá překlad textů (stačí CZ/SK sloupce v Excelu), napojím JS slovník. HU zůstane `disabled`.
8. **Reference** — jak přibydou citáty, swapneme `.testi-empty` za grid s cardsy (v README jsou šablony).
9. **Instagram feed** — automatický pull 6 postů z `@taborskaarts` přes SnapWidget embed.

### 🔵 Dlouhodobě (volitelné)

10. **HU mutace** (aktivace buttonu `disabled` v navu)
11. **Proces showcase** — interaktivní sekce "obraz krok za krokem" (týdenní fotky ze studia)
12. **Blog / journal** — Dominika sem tam napíše o rozpracované práci; pomáhá SEO

---

## ⏱ Odhady času na další iterace

| Úloha | Odhad | Kdo |
|---|---|---|
| GitHub push + Vercel deploy | 10 min | ty (teď) |
| GA4 + Search Console | 30 min | ty |
| Telefon + drobné texty | 15 min | Dominika |
| Reálné fotky: pořízení | 2–4 h | Dominika |
| Reálné fotky: optimalizace + swap v HTML | 30 min | ty (nebo já) |
| Doména + DNS propagation | 20 min setup, 0–24 h propagation | ty |
| Formspree integrace | 20 min | já |
| SK mutace (po dodání překladu) | 1 h | já |
| Reference grid (po dodání citátů) | 30 min | já |
| HU mutace | 1 h | já |

---

## 📦 Co je v balíčku (přehled souborů)

```
Web_dominika/                       (celkem ~100 KB + 36 KB images)
├── .gitignore              (1 KB)
├── DEPLOY_REPORT.md        (tento soubor)
├── README.md               (~10 KB — návod pro Dominiku)
├── favicon.svg             (537 B)
├── og-image.svg            (1.9 KB)
├── index.html              (22.7 KB — všechny texty)
├── styles.css              (28.8 KB — styl)
├── script.js               (7 KB — interakce)
├── robots.txt              (71 B)
├── sitemap.xml             (795 B)
├── vercel.json             (840 B)
└── images/                 (9× SVG, celkem 14.7 KB)
    ├── portret-01.svg      (1.8 KB)
    ├── portret-02.svg      (1.5 KB)
    ├── portret-03.svg      (1.5 KB)
    ├── kompozice-01.svg    (1.6 KB)
    ├── kompozice-02.svg    (1.5 KB)
    ├── kompozice-03.svg    (1.5 KB)
    ├── zatisi-01.svg       (1.8 KB)
    ├── volna-01.svg        (1.8 KB)
    └── krajina-01.svg      (1.7 KB)
```

Celkem **19 souborů**, all under 100 KB wire size (font je lazy-loaded z Google Fonts).

---

## 🐛 Známé drobnosti (nevadí, jen ať víš)

- Cookie banner se zobrazuje, i když zatím není napojená žádná analytika. Až přijde GA4, banner už tam bude připravený a bude dávat smysl.
- Formulář používá `mailto:` — funguje kdekoli bez backendu, ale otevře uživateli poštovního klienta (ne všichni ho mají nastaveného). Formspree to vyřeší.
- OG image je SVG. Některé old social platformy (starší LinkedIn renderer) preferují PNG. Pokud to bude problém, vyrobím PNG export (2 min). FB / X / WhatsApp to zvládají.

---

Vyrobil **Jirka & Claude** · SmartCase Agency · 19. 4. 2026
