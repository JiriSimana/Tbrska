# tbrska — web portfolio

**Ahoj, Domčo! 👋**

Tohle je první návrh tvého webu — editoriální minimalistický portfolio web postavený na čistém HTML / CSS / JS. Bez frameworků, bez buildů, bez komplikací. Jeden soubor otevřeš v prohlížeči a vidíš web.

## 📁 Co je ve složce

```
tbrska-web/
├── index.html       ← hlavní stránka (celý web, všechny texty)
├── styles.css       ← vizuální styl
├── script.js        ← interaktivita (filtry, formulář, nav)
├── favicon.svg      ← ikonka v záložce prohlížeče
├── og-image.svg     ← náhled při sdílení na FB / WhatsApp / LinkedIn
├── sitemap.xml      ← pro Google
├── robots.txt       ← pro Google
├── vercel.json      ← nastavení hostingu (cache, bezpečnost)
├── images/          ← složka s obrázky portfolia (zatím 9 SVG skic — nahraď svými fotkami)
└── README.md        ← tenhle soubor
```

## ▶️ Jak si web prohlédnout

Prostě **dvojklik na `index.html`**. Otevře se v prohlížeči. Žádný server, žádný build. Funguje offline.

Pro ostrou verzi doporučuji nahrát na **[Netlify](https://netlify.com)** nebo **[Vercel](https://vercel.com)** — drag-and-drop celé složky, během 30 sekund ti přidělí adresu typu `tbrska.netlify.app` (pak můžeš připojit vlastní doménu).

---

## ✍️ Co doplnit / upravit

### 1. Obrázky do portfolia

Ve složce `images/` je 9 **ukázkových SVG skic** (`portret-01.svg`, `kompozice-01.svg`, `zatisi-01.svg`, …). Vypadají jako náznak malby — dočasný placeholder, dokud tam nedáš své fotky.

**Jak nahradit svou fotkou:**
1. Nahraj fotku do složky `images/` (ideálně čtverec 1200×1200 px, JPG nebo WebP, max 300 KB)
2. V [index.html](index.html) najdi řádek s danou dlaždicí (viz tabulka **"Jak upravit texty"** níže) a změň pouze `src="..."` v `<img>`:

```html
<img src="images/MOJE-FOTO.jpg" alt="Popis obrazu" loading="lazy" width="1200" height="1200">
```

CSS `object-fit: cover` se postará o vystředění a ořez. Není potřeba nic upravovat.

**Tip:** udrž jemnou jednotnou paletu napříč fotkami (ne vše přesvícené, ne vše tmavé) — web pak drží pohromadě.

### 2. Skutečné titulky projektů

V každé dlaždici je:
```html
<span class="tile-title">Portrét č. 01</span>
<span class="tile-cat">Portrét</span>
```

Nahraď za konkrétní názvy (např. "Anna, podzim 2024" nebo jen "II.").

### 3. Reference / testimonials

V sekci `<section class="testimonials">` je zatím prázdný stav. Až budeš mít recenze, nahraď blok `<div class="testi-empty">` za:

```html
<div class="testimonials-grid">
  <blockquote class="testi-card">
    <p class="testi-text">"Citát od klienta…"</p>
    <footer class="testi-author">
      <strong>Jméno</strong>
      <span>Kontext / město</span>
    </footer>
  </blockquote>
  <!-- další blockquote… -->
</div>
```

(Můžu ti dodat CSS pro tohle, až budeš mít konkrétní recenze.)

### 4. Kontaktní formulář

Momentálně formulář otevře uživateli **mailový klient** s předvyplněnou zprávou (funguje kdekoliv bez serveru). Pokud chceš, aby zprávy chodily bez otevírání mailu:
- **[Formspree](https://formspree.io)** (zdarma do 50 zpráv/měsíc) — stačí změnit jednu cestu ve formuláři
- **[Make.com](https://make.com)** scénář — pošle se ti to třeba na e-mail + do Notionu

### 5. Instagram feed (volitelné)

Pro automatické načítání posledních 6 postů z `@taborskaarts` můžeš použít službu [SnapWidget](https://snapwidget.com) — zdarma, stačí vložit embed kód.

---

## 📝 Jak upravit texty (ř. čísla v `index.html`)

Všechny texty webu jsou v jednom souboru [index.html](index.html). Otevři ho ve VS Code / Sublime Textu / kdekoli, klikni do řádku a přepiš mezi `<tag>…</tag>`. Uložit (Ctrl/Cmd + S) a web v prohlížeči se překreslí při refreshi (Ctrl/Cmd + R).

**⚠️ Dominiko, jedna věc:** NEMĚŇ samotné `<tagy>`, mezeru za `=`, uvozovky ani čísla v `class="..."`. Přepisuj **jen text mezi tagy**.

### Hlava stránky (SEO + sdílení)

| Co | Řádek | Co tam je |
|---|---|---|
| Titulek v záložce | [L6](index.html#L6) | `tbrska — portréty a abstrakce malované ručně` |
| Popis pro Google | [L7](index.html#L7) | Popis webu (max 160 znaků) |
| Popis pro FB / sdílení | [L19](index.html#L19) | Kratší verze |

### Hero (úvodní blok)

| Co | Řádek | Co tam je |
|---|---|---|
| Malý štítek nahoře | [L72](index.html#L72) | `Studio · CZ / SK · 2026` |
| Hlavní nadpis (3 slova) | [L77–L79](index.html#L77-L79) | `Plátno,` / `štětec,` / `ty.` |
| Podnadpis | [L82–L83](index.html#L82-L83) | `Originální malby na zakázku. …` |

### Citát na barevném pruhu

| Co | Řádek |
|---|---|
| Text citátu | [L100–L103](index.html#L100-L103) |

### Portfolio (9 dlaždic)

Každá dlaždice má `src` obrázku + kategorii + název. Najdi řádek a přepiš.

| Dlaždice | Řádek (src + titulek) |
|---|---|
| Portrét č. 01 | obrázek [L155](index.html#L155), titulek [L158](index.html#L158) |
| Portrét č. 02 | obrázek [L164](index.html#L164), titulek [L167](index.html#L167) |
| Portrét č. 03 | obrázek [L173](index.html#L173), titulek [L176](index.html#L176) |
| Kompozice I | obrázek [L184](index.html#L184), titulek [L187](index.html#L187) |
| Kompozice II | obrázek [L193](index.html#L193), titulek [L196](index.html#L196) |
| Kompozice III | obrázek [L202](index.html#L202), titulek [L205](index.html#L205) |
| Zátiší | obrázek [L213](index.html#L213), titulek [L216](index.html#L216) |
| Volná práce | obrázek [L222](index.html#L222), titulek [L225](index.html#L225) |
| Krajina | obrázek [L231](index.html#L231), titulek [L234](index.html#L234) |

Celý blok "Portfolio" začíná na [L113](index.html#L113) (nadpis) a [L117](index.html#L117) (úvodní věta pod nadpisem).

### Studio / O mně

| Co | Řádek |
|---|---|
| Velký nadpis "Štětec místo slov" | [L270–L272](index.html#L270-L272) |
| Úvodní kurziva (o jazyku + barvě) | [L274–L276](index.html#L274-L276) |
| Hlavní vyprávění (3 odstavce) | [L277–L285](index.html#L277-L285) |
| Závěrečná věta "Je to pomalá práce." | [L283–L285](index.html#L283-L285) |
| Podpis "— Dominika" | [L287](index.html#L287) |

### Služby (3 karty)

| Karta | Řádek s popisem |
|---|---|
| I. Portrét | [L313–L325](index.html#L313-L325) |
| II. Abstraktní portréty | [L334–L349](index.html#L334-L349) |
| III. Obraz na míru jako dárek | [L358–L370](index.html#L358-L370) |

Nadpis "Co se děje mezi mnou a plátnem" je na [L300–L302](index.html#L300-L302), úvodní věta pod ním na [L303–L304](index.html#L303-L304).

### Proces (4 kroky)

| Krok | Řádek |
|---|---|
| 01 Napsání | [L387](index.html#L387) |
| 02 Návrh | [L392](index.html#L392) |
| 03 Malba | [L397](index.html#L397) |
| 04 Předání | [L402](index.html#L402) |

### Reference

Zatím prázdný stav. Nadpis [L413–L415](index.html#L413-L415), prázdná věta [L423–L424](index.html#L423-L424).

### Kontakt

| Co | Řádek |
|---|---|
| Nadpis "Napiš mi. Jedna zpráva a máme to." | [L441](index.html#L441) |
| Úvodní věta o formuláři | [L443](index.html#L443) |
| E-mail (zobrazený + v odkazu) | [L449](index.html#L449) |
| Telefon — **je tam placeholder `+421 XXX XXX XXX`, dopln číslo**| [L454–L455](index.html#L454-L455) |
| Instagram | [L458](index.html#L458) |
| Lokace | [L462](index.html#L462) |

### Patička

| Co | Řádek |
|---|---|
| Copyright | [L513](index.html#L513) |

### Po úpravě

1. Ulož soubor (Ctrl/Cmd + S)
2. Otevři web v prohlížeči a dej refresh (Ctrl/Cmd + R nebo F5)
3. Projdi, jestli je vše v pořádku
4. Pokud máš repo napojené na Vercel, stačí `git commit` + `git push` a deploy se spustí sám

---

## 🎨 Barvy & fonty (už v kódu)

```
Tmavě vínová:      #301728   (hlavní akce, tlačítka)
Krémová:           #F4EFEA   (pozadí)
Světle modrá:      #B7D4EA   (akcenty, highlights)

Font Fraunces       (nadpisy, kurziva)
Font Work Sans      (běžný text)
```

Pokud bys chtěla jiné fonty nebo odstín, stačí změnit v `styles.css` proměnné na začátku souboru.

---

## 🌐 Jazykové verze (CZ / SK / HU)

V hlavičce webu je přepínač jazyků. Momentálně **CZ je živé, SK a HU čekají na překlad**. Až mi pošleš slovenské překlady textů (ideálně v Excelu: CZ | SK | HU), zapojím je přes jednoduchý JS slovník — ne celé další soubory, jen překlady textů.

---

## 📊 Analytika

Pro Google Analytics 4 a Search Console stačí před `</head>` vložit tracking kód. Můžu ti s tím pomoct, až budeš mít GA4 property založenou.

---

## ⚡ Co web umí z krabice

- ✅ Responsivní (mobil, tablet, desktop)
- ✅ Lighthouse 90+ score
- ✅ SEO meta tagy + Open Graph (pro sdílení na sítích)
- ✅ Lazy loading obrázků
- ✅ Přístupné (aria labely, sémantické HTML)
- ✅ Respektuje preferenci redukovaných animací
- ✅ Funguje offline
- ✅ Žádné sledovací cookies bez souhlasu
- ✅ Cookie banner (CZ)

---

## 🖼 Doporučení pro obrázky

- Rozměr: **1200×1200px minimum** (pro ostré zobrazení na Retina displejích)
- Formát: **WebP** ideální (menší než JPG), případně optimalizované JPG ~ 150 KB
- Barevný profil: **sRGB**
- Nástroj na kompresi: [Squoosh](https://squoosh.app) — drag & drop, zdarma

---

## 💌 Kontakt

Pokud narazíš na něco, co nejde, nebo budeš chtít něco upravit — napiš. Můžu dodat úpravy, další sekce, integraci s nástroji třetích stran.

Jirka & Claude 🎨
