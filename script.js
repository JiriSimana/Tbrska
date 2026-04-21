/* =============================================
   tbrska — interaction layer + i18n
   ============================================= */

(() => {
  'use strict';

  /* ======== I18N DICTIONARY ======== */
  const I18N = {
    cs: {
      'meta.title': 'tbrska',
      'meta.description': 'tbrska',
      'aria.nav': 'Hlavní navigace',
      'nav.portfolio': 'Portfolio',
      'nav.studio': 'Studio',
      'nav.contact': 'Kontakt',
      'nav.lang_cs': 'Čeština',
      'nav.lang_sk': 'Slovenčina',
      'nav.lang_hu': 'Magyarul',
      'hero.meta': 'Studio · CZ / SK / HU · 2026',
      'hero.word1': 'Plátno,',
      'hero.word2': 'štětec,',
      'hero.word3': 'ty.',
      'hero.sub.html': 'Originální malby na zakázku.<br>Portréty, abstraktní kompozice, dárky se smyslem.',
      'hero.cta1.html': 'Chci svůj obraz <span class="btn-arrow">→</span>',
      'hero.cta2': 'Prohlédnout portfolio',
      'hero.scroll': 'Scroll',
      'hero.scroll_aria': 'Posunout dolů',
      'strip.text.html': '<em>tbrska</em> — Domenique Táborská. Malba za hranicí fotografie. Akryl, grafit. Díla v interiérech po celé Evropě.',
      'work.label': 'Portfolio',
      'work.title.html': 'Pár věcí, <em>co už někde visí</em>',
      'work.lead': 'Malý výběr z realizovaných zakázek za poslední roky. Některé obrazy si majitelé nechávají pro sebe — ale tohle prošlo.',
      'work.cat_portraits': 'Portréty',
      'work.cat_abstract': 'Abstraktní portréty',
      'work.cat_paintings': 'Malby',
      'work.cat_cta.html': 'Otevřít galerii <span class="btn-arrow">→</span>',
      'work.cat_aria_prefix': 'Otevřít galerii',
      'work.cat_alt_prefix': 'Ukázka z galerie',
      'work.more.html': 'Další práce na Instagramu <span class="btn-arrow">↗</span>',
      'work.empty': 'Zatím tady nic není — ale chystá se.',
      'work.count_one': '$n obraz',
      'work.count_few': '$n obrazy',
      'work.count_many': '$n obrazů',
      'work.gallery_eyebrow': 'Galerie',
      'studio.label': 'Studio',
      'studio.location': 'Česko · Slovensko · Maďarsko',
      'studio.working': 'Pracuji s akrylem a grafitem.',
      'studio.fact1_title': 'CZ · SK · HU',
      'studio.fact1_sub': 'Jazyky',
      'studio.fact2_title': 'Akryl · Grafit',
      'studio.fact2_sub': 'Techniky',
      'studio.fact3_title': '3–6 týdnů',
      'studio.fact3_sub': 'Obvyklá lhůta',
      'studio.fact4_title': 'Na zakázku',
      'studio.fact4_sub': 'Vždy originál',
      'studio.title.html': '<em>Štětec</em><br>místo slov.',
      'studio.lead': 'Vyrostla jsem mezi dvěma jazyky a dvěma zeměmi — a možná proto jsem nakonec našla třetí řeč: barvu.',
      'studio.p1': 'K malování jsem se dostala přirozeně, skoro neviditelně. Nejdřív to byly skicy do sešitů, pak portréty blízkých, pak lidé, které jsem nikdy neviděla, ale cítila. Dneska tvořím obrazy, které visí v bytech v Česku, na Slovensku i dál — a pokaždé je to trochu jako dát kus sebe někomu jinému.',
      'studio.p2': 'Maluji portréty, které se dívají zpátky. Abstrakce, které nevysvětlují, ale cítí. A obrazy na míru — pro dárek, pro vzpomínku, pro zeď, která volá.',
      'studio.closer': 'Klid. Soustředění. Sebe.',
      'studio.signature': '— Domenique',
      'studio.alt': 'Domenique v ateliéru při kresbě portrétu',
      'process.label': 'Proces',
      'process.title.html': 'Každá zakázka je <em>malý rozhovor.</em>',
      'process.s1_title': 'Napsání',
      'process.s1_text': 'Piš mi klidně i když ještě nevíš, co přesně chceš — od toho jsem tady.',
      'process.s2_title': 'Návrh',
      'process.s2_text': 'Probereme náladu, velikost, techniku. Řeknu cenu a termín.',
      'process.s3_title': 'Malba',
      'process.s3_text': 'Po záloze začínám. Posílám průběžné fotky ze studia.',
      'process.s4_title': 'Předání',
      'process.s4_text': 'Doručení osobně nebo poštou. Klidně i zabalené jako překvapení.',
      'insitu.label': 'Na stěně',
      'insitu.title.html': 'Malba v <em>reálném prostoru</em>',
      'insitu.lead': 'Krátká ukázka realizace přímo u zákazníka.',
      'test.label': 'Reference & reakce',
      'test.title.html': 'Co říkají ti, <em>pro které maluji</em>',
      'test.lead': 'Dlouhé reference i krátké reakce na konkrétní obrazy — některé v maďarštině, tak jak přišly.',
      'test.reactions_label': 'Reakce od autorů, které namalovala',
      'test.reaction_prefix': 'reakce na obraz',
      'review.kristian.quote.html': '<p>S Dominikou mám veľmi dobrú skúsenosť. Namaľovala mi krásne obrazy presne podľa toho, čo som si predstavoval. Všetko prebehlo v pohode, bez komplikácií, a výsledok ma fakt potešil. Obrazy už mám zavesené na stene a som s nimi veľmi spokojný. Určite si od nej dám niečo namaľovať aj nabudúce, keď ma zaujme nejaký ďalší motív.</p>',
      'review.flora.quote.html': '<p>Jsem s obrazem velmi spokojená, naprosto odpovídá mým představám. Zpracování je precizní, detaily propracované a barvy krásně vynikají. Hlavní motiv je skvěle zvýrazněný na pozadí, které dotváří celkovou atmosféru.</p><p>Komunikace i domluva probíhaly bez problémů a měla jsem možnost vybírat z několika povedených návrhů. Díky tomu mám doma originální a stylový obraz přesně podle svých představ. Dominika splnila všechna má přání a výsledek mluví sám za sebe.</p><p>Doporučuji každému, kdo chce svůj interiér oživit jedinečným obrazem, který se stane jeho dominantou.</p>',
      'review.jan.quote.html': '<p>Ještě jednou ti děkuju za obraz motorky. A namalovala si ho nad moje očekávání 😁 můžu jenom doporučit!</p>',
      'contact.label': 'Kontakt',
      'contact.title.html': 'Napiš mi.<br><em>Jedna zpráva</em> a máme to.',
      'contact.lead': 'Formulář slouží pro nezávaznou poptávku na zakázkový obraz. Odpovídám obvykle do 2 pracovních dnů.',
      'contact.meta_email': 'E-mail',
      'contact.meta_instagram': 'Instagram',
      'contact.meta_location': 'Lokace',
      'contact.location_value': 'Česko · Slovensko · Maďarsko',
      'form.name': 'Jméno',
      'form.email': 'E-mail',
      'form.message': 'Zpráva',
      'form.message_placeholder': 'Popiš, co máš na mysli — námět, velikost, termín.',
      'form.gdpr': 'Souhlasím se zpracováním osobních údajů pro účely odpovědi na poptávku.',
      'form.submit.html': 'Odeslat <span class="btn-arrow">→</span>',
      'form.error': 'Zkontroluj prosím vyplněná pole a souhlas s GDPR.',
      'form.success': 'Má to. Zpráva je u mě — ozvu se zpátky během pár dní.',
      'form.network_error': 'Odeslání se nepovedlo. Zkus to prosím znova nebo napiš přímo na domi.taborska@icloud.com.',
      'form.subject_prefix': 'Poptávka od',
      'form.mail_name': 'Jméno',
      'form.mail_email': 'E-mail',
      'form.mail_message': 'Zpráva',
      'form.mail_footer': 'Odesláno z webu tbrska',
      'footer.slogan': 'art · CZ / SK / HU',
      'footer.copy': '© tbrska 2026 — bez kopií, bez printů, bez výmluv',
      'footer.top': '↑ Nahoru',
      'footer.top_aria': 'Zpět nahoru',
      'cookie.text': 'Používáme cookies pro analýzu návštěvnosti. Podrobnosti v Zásadách ochrany.',
      'cookie.decline': 'Odmítnout',
      'cookie.accept': 'Přijmout',
      'aria.gallery_close': 'Zavřít galerii',
      'aria.lightbox_close': 'Zavřít náhled',
      'aria.lightbox_dialog': 'Detail obrazu',
      'aria.gallery_item_prefix': 'Otevřít detail'
    },
    sk: {
      'meta.title': 'tbrska',
      'meta.description': 'tbrska',
      'aria.nav': 'Hlavná navigácia',
      'nav.portfolio': 'Portfólio',
      'nav.studio': 'Ateliér',
      'nav.contact': 'Kontakt',
      'nav.lang_cs': 'Čeština',
      'nav.lang_sk': 'Slovenčina',
      'nav.lang_hu': 'Maďarčina',
      'hero.meta': 'Ateliér · CZ / SK / HU · 2026',
      'hero.word1': 'Plátno,',
      'hero.word2': 'štetec,',
      'hero.word3': 'ty.',
      'hero.sub.html': 'Originálne maľby na zákazku.<br>Portréty, abstraktné kompozície, darčeky so zmyslom.',
      'hero.cta1.html': 'Chcem svoj obraz <span class="btn-arrow">→</span>',
      'hero.cta2': 'Prezrieť portfólio',
      'hero.scroll': 'Scroll',
      'hero.scroll_aria': 'Posunúť nadol',
      'strip.text.html': '<em>tbrska</em> — Domenique Táborská. Maľba za hranicou fotografie. Akryl, grafit. Diela v interiéroch po celej Európe.',
      'work.label': 'Portfólio',
      'work.title.html': 'Pár vecí, <em>čo už niekde visí</em>',
      'work.lead': 'Malý výber z realizovaných zákaziek za posledné roky. Niektoré obrazy si majitelia nechávajú pre seba — ale toto prešlo.',
      'work.cat_portraits': 'Portréty',
      'work.cat_abstract': 'Abstraktné portréty',
      'work.cat_paintings': 'Maľby',
      'work.cat_cta.html': 'Otvoriť galériu <span class="btn-arrow">→</span>',
      'work.cat_aria_prefix': 'Otvoriť galériu',
      'work.cat_alt_prefix': 'Ukážka z galérie',
      'work.more.html': 'Ďalšie práce na Instagrame <span class="btn-arrow">↗</span>',
      'work.empty': 'Zatiaľ tu nič nie je — ale chystá sa.',
      'work.count_one': '$n obraz',
      'work.count_few': '$n obrazy',
      'work.count_many': '$n obrazov',
      'work.gallery_eyebrow': 'Galéria',
      'studio.label': 'Ateliér',
      'studio.location': 'Česko · Slovensko · Maďarsko',
      'studio.working': 'Pracujem s akrylom a grafitom.',
      'studio.fact1_title': 'CZ · SK · HU',
      'studio.fact1_sub': 'Jazyky',
      'studio.fact2_title': 'Akryl · Grafit',
      'studio.fact2_sub': 'Techniky',
      'studio.fact3_title': '3–6 týždňov',
      'studio.fact3_sub': 'Obvyklá lehota',
      'studio.fact4_title': 'Na zákazku',
      'studio.fact4_sub': 'Vždy originál',
      'studio.title.html': '<em>Štetec</em><br>namiesto slov.',
      'studio.lead': 'Vyrastala som medzi dvoma jazykmi a dvoma krajinami — a možno preto som nakoniec našla tretiu reč: farbu.',
      'studio.p1': 'K maľovaniu som sa dostala prirodzene, takmer neviditeľne. Najprv to boli skice do zošitov, potom portréty blízkych, potom ľudia, ktorých som nikdy nevidela, ale cítila. Dnes tvorím obrazy, ktoré visia v bytoch v Česku, na Slovensku aj ďalej — a zakaždým je to trochu ako dať kus seba niekomu inému.',
      'studio.p2': 'Maľujem portréty, ktoré sa dívajú späť. Abstrakcie, ktoré nevysvetľujú, ale cítia. A obrazy na mieru — pre darček, pre spomienku, pre stenu, ktorá volá.',
      'studio.closer': 'Pokoj. Sústredenie. Seba.',
      'studio.signature': '— Domenique',
      'studio.alt': 'Domenique v ateliéri pri kresbe portrétu',
      'process.label': 'Proces',
      'process.title.html': 'Každá zákazka je <em>malý rozhovor.</em>',
      'process.s1_title': 'Správa',
      'process.s1_text': 'Píš mi pokojne aj keď ešte nevieš, čo presne chceš — na to som tu.',
      'process.s2_title': 'Návrh',
      'process.s2_text': 'Preberieme náladu, veľkosť, techniku. Poviem cenu a termín.',
      'process.s3_title': 'Maľba',
      'process.s3_text': 'Po zálohe začínam. Posielam priebežné fotky z ateliéru.',
      'process.s4_title': 'Odovzdanie',
      'process.s4_text': 'Doručenie osobne alebo poštou. Pokojne aj zabalené ako prekvapenie.',
      'insitu.label': 'Na stene',
      'insitu.title.html': 'Maľba v <em>reálnom priestore</em>',
      'insitu.lead': 'Krátka ukážka realizácie priamo u zákazníka.',
      'test.label': 'Referencie & reakcie',
      'test.title.html': 'Čo hovoria tí, <em>pre ktorých maľujem</em>',
      'test.lead': 'Dlhé referencie aj krátke reakcie na konkrétne obrazy — niektoré v maďarčine, tak ako prišli.',
      'test.reactions_label': 'Reakcie od autorov, ktoré namaľovala',
      'test.reaction_prefix': 'reakcia na obraz',
      'review.kristian.quote.html': '<p>S Dominikou mám veľmi dobrú skúsenosť. Namaľovala mi krásne obrazy presne podľa toho, čo som si predstavoval. Všetko prebehlo v pohode, bez komplikácií, a výsledok ma fakt potešil. Obrazy už mám zavesené na stene a som s nimi veľmi spokojný. Určite si od nej dám niečo namaľovať aj nabudúce, keď ma zaujme nejaký ďalší motív.</p>',
      'review.flora.quote.html': '<p>Som s obrazom veľmi spokojná, úplne zodpovedá mojim predstavám. Spracovanie je precízne, detaily prepracované a farby krásne vyniknú. Hlavný motív je skvele zvýraznený na pozadí, ktoré dotvára celkovú atmosféru.</p><p>Komunikácia aj dohoda prebiehali bez problémov a mala som možnosť vyberať si z niekoľkých vydarených návrhov. Vďaka tomu mám doma originálny a štýlový obraz presne podľa svojich predstáv. Dominika splnila všetky moje priania a výsledok hovorí sám za seba.</p><p>Odporúčam každému, kto chce svoj interiér oživiť jedinečným obrazom, ktorý sa stane jeho dominantou.</p>',
      'review.jan.quote.html': '<p>Ešte raz ti ďakujem za obraz motorky. A namaľovala si ho nad moje očakávania 😁 môžem len odporučiť!</p>',
      'contact.label': 'Kontakt',
      'contact.title.html': 'Napíš mi.<br><em>Jedna správa</em> a máme to.',
      'contact.lead': 'Formulár slúži na nezáväznú dopyt zákazkového obrazu. Odpovedám zvyčajne do 2 pracovných dní.',
      'contact.meta_email': 'E-mail',
      'contact.meta_instagram': 'Instagram',
      'contact.meta_location': 'Lokácia',
      'contact.location_value': 'Česko · Slovensko · Maďarsko',
      'form.name': 'Meno',
      'form.email': 'E-mail',
      'form.message': 'Správa',
      'form.message_placeholder': 'Opíš, čo máš na mysli — námet, veľkosť, termín.',
      'form.gdpr': 'Súhlasím so spracovaním osobných údajov na účely odpovede na dopyt.',
      'form.submit.html': 'Odoslať <span class="btn-arrow">→</span>',
      'form.error': 'Skontroluj prosím vyplnené polia a súhlas s GDPR.',
      'form.success': 'Mám to. Správa dorazila — ozvem sa ti späť počas pár dní.',
      'form.network_error': 'Odoslanie sa nepodarilo. Skús to prosím znova alebo napíš priamo na domi.taborska@icloud.com.',
      'form.subject_prefix': 'Dopyt od',
      'form.mail_name': 'Meno',
      'form.mail_email': 'E-mail',
      'form.mail_message': 'Správa',
      'form.mail_footer': 'Odoslané z webu tbrska',
      'footer.slogan': 'art · CZ / SK / HU',
      'footer.copy': '© tbrska 2026 — bez kópií, bez printov, bez výhovoriek',
      'footer.top': '↑ Hore',
      'footer.top_aria': 'Späť hore',
      'cookie.text': 'Používame cookies na analýzu návštevnosti. Podrobnosti v Zásadách ochrany.',
      'cookie.decline': 'Odmietnuť',
      'cookie.accept': 'Prijať',
      'aria.gallery_close': 'Zavrieť galériu',
      'aria.lightbox_close': 'Zavrieť náhľad',
      'aria.lightbox_dialog': 'Detail obrazu',
      'aria.gallery_item_prefix': 'Otvoriť detail'
    },
    hu: {
      'meta.title': 'tbrska',
      'meta.description': 'tbrska',
      'aria.nav': 'Fő navigáció',
      'nav.portfolio': 'Portfólió',
      'nav.studio': 'Stúdió',
      'nav.contact': 'Kapcsolat',
      'nav.lang_cs': 'Cseh',
      'nav.lang_sk': 'Szlovák',
      'nav.lang_hu': 'Magyar',
      'hero.meta': 'Stúdió · CZ / SK / HU · 2026',
      'hero.word1': 'Vászon,',
      'hero.word2': 'ecset,',
      'hero.word3': 'te.',
      'hero.sub.html': 'Egyedi festmények rendelésre.<br>Portrék, absztrakt kompozíciók, értelmes ajándékok.',
      'hero.cta1.html': 'Saját képet szeretnék <span class="btn-arrow">→</span>',
      'hero.cta2': 'Portfólió megtekintése',
      'hero.scroll': 'Görgess',
      'hero.scroll_aria': 'Görgess lejjebb',
      'strip.text.html': '<em>tbrska</em> — Domenique Táborská. Festészet a fotográfia határán túl. Akril, grafit. Képeim otthonokban kapnak helyet Európa-szerte.',
      'work.label': 'Portfólió',
      'work.title.html': 'Néhány darab, <em>ami már valahol a falon van</em>',
      'work.lead': 'Kis válogatás az elmúlt évek elkészült munkáiból. Néhány képet a tulajdonosok maguknak tartanak — de ezek bemutathatók.',
      'work.cat_portraits': 'Portrék',
      'work.cat_abstract': 'Absztrakt portrék',
      'work.cat_paintings': 'Festmények',
      'work.cat_cta.html': 'Galéria megnyitása <span class="btn-arrow">→</span>',
      'work.cat_aria_prefix': 'Galéria megnyitása',
      'work.cat_alt_prefix': 'Példa a galériából',
      'work.more.html': 'További munkák Instagramon <span class="btn-arrow">↗</span>',
      'work.empty': 'Itt még nincs semmi — de készül.',
      'work.count_one': '$n kép',
      'work.count_few': '$n kép',
      'work.count_many': '$n kép',
      'work.gallery_eyebrow': 'Galéria',
      'studio.label': 'Stúdió',
      'studio.location': 'Csehország · Szlovákia · Magyarország',
      'studio.working': 'Akrillal és grafittal dolgozom.',
      'studio.fact1_title': 'CZ · SK · HU',
      'studio.fact1_sub': 'Nyelvek',
      'studio.fact2_title': 'Akril · Grafit',
      'studio.fact2_sub': 'Technikák',
      'studio.fact3_title': '3–6 hét',
      'studio.fact3_sub': 'Szokásos határidő',
      'studio.fact4_title': 'Rendelésre',
      'studio.fact4_sub': 'Mindig eredeti',
      'studio.title.html': '<em>Ecset</em><br>a szavak helyett.',
      'studio.lead': 'Két nyelv és két ország között nőttem fel — talán ezért találtam meg végül a harmadik nyelvet: a színt.',
      'studio.p1': 'A festéshez természetesen jutottam el, szinte észrevétlenül. Eleinte vázlatok voltak a füzetekbe, aztán közeli hozzátartozók portréi, aztán olyan emberek, akiket sosem láttam, de éreztem. Ma olyan képeket alkotok, amelyek Csehországban, Szlovákiában és azon túl is lakásokban lógnak — és mindig egy kicsit olyan, mintha egy darabot adnék magamból valaki másnak.',
      'studio.p2': 'Olyan portrékat festek, amelyek visszanéznek. Absztrakciókat, amelyek nem magyaráznak, csak éreznek. És egyedi képeket — ajándéknak, emléknek, a falnak, amely hív.',
      'studio.closer': 'Nyugalom. Fókusz. Önmagam.',
      'studio.signature': '— Domenique',
      'studio.alt': 'Domenique a stúdióban portrét rajzol',
      'process.label': 'Folyamat',
      'process.title.html': 'Minden megrendelés <em>egy kis beszélgetés.</em>',
      'process.s1_title': 'Írj',
      'process.s1_text': 'Nyugodtan írj akkor is, ha még nem tudod pontosan, mit szeretnél — ezért vagyok itt.',
      'process.s2_title': 'Javaslat',
      'process.s2_text': 'Átbeszéljük a hangulatot, méretet, technikát. Megmondom az árat és a határidőt.',
      'process.s3_title': 'Festés',
      'process.s3_text': 'Az előleg után kezdem. Folyamatosan küldök fotókat a stúdióból.',
      'process.s4_title': 'Átadás',
      'process.s4_text': 'Átadás személyesen vagy postán. Ajándéknak becsomagolva is.',
      'insitu.label': 'A falon',
      'insitu.title.html': 'Festmény <em>valós térben</em>',
      'insitu.lead': 'Rövid bemutató közvetlenül az ügyfélnél.',
      'test.label': 'Vélemények & reakciók',
      'test.title.html': 'Mit mondanak azok, <em>akiknek festek</em>',
      'test.lead': 'Hosszabb vélemények és rövid reakciók konkrét képekre — néhány magyarul, ahogy érkezett.',
      'test.reactions_label': 'Reakciók a megfestett alkotóktól',
      'test.reaction_prefix': 'reakció a képre',
      'review.kristian.quote.html': '<p>Nagyon jó tapasztalatom volt Dominikával. Olyan festményeket készített, amelyek teljes mértékben megfeleltek az elképzeléseimnek, és a végeredmény igazán lenyűgözött.</p><p>A folyamat végig zökkenőmentes volt, a kommunikáció pedig kellemes és profi. A képek már a falon vannak, és nagyon elégedett vagyok velük.</p><p>Biztosan rendelek tőle újra, ha megtetszik egy újabb motívum.</p>',
      'review.flora.quote.html': '<p>Nagyon elégedett vagyok a festménnyel, teljes mértékben megfelel az elképzeléseimnek. A kidolgozottsága igényes, a részletek pontosak, és szép színekben pompázik. A festmény fő alakja jól ki van emelve a hangulatos háttérből.</p><p>Az egyeztetés és a kommunikáció is gördülékenyen ment, és jól kinéző vázlatok közül válogathattam, így egy egyedi és menő festmény tulajdonosa lehetek. Minden kérésem teljesült, amiket én elképzeltem, azokat Dominika megvalósította, a végeredmény pedig magáért beszél.</p><p>Bátran ajánlom mindenkinek, aki szeretné feldobni az otthonát egy egyedi festménnyel, ami garantáltan a lakás ékköve lesz.</p>',
      'review.jan.quote.html': '<p>Még egyszer köszönöm a motoros festményt. A várakozásaimat is felülmúltad vele 😁 csak ajánlani tudom!</p>',
      'contact.label': 'Kapcsolat',
      'contact.title.html': 'Írj nekem.<br><em>Egy üzenet</em> és megvan.',
      'contact.lead': 'Írj bátran — semmire sem kötelez. Általában 2 munkanapon belül válaszolok.',
      'contact.meta_email': 'E-mail',
      'contact.meta_instagram': 'Instagram',
      'contact.meta_location': 'Helyszín',
      'contact.location_value': 'Csehország · Szlovákia · Magyarország',
      'form.name': 'Név',
      'form.email': 'E-mail',
      'form.message': 'Üzenet',
      'form.message_placeholder': 'Írd le, mire gondolsz — téma, méret, határidő.',
      'form.gdpr': 'Hozzájárulok személyes adataim kezeléséhez a megkeresésre adott válasz céljából.',
      'form.submit.html': 'Küldés <span class="btn-arrow">→</span>',
      'form.error': 'Kérlek, ellenőrizd a kitöltött mezőket és a GDPR hozzájárulást.',
      'form.success': 'Megkaptam. Az üzenet megérkezett — pár napon belül válaszolok.',
      'form.network_error': 'A küldés nem sikerült. Kérlek, próbáld újra, vagy írj közvetlenül a domi.taborska@icloud.com címre.',
      'form.subject_prefix': 'Megkeresés tőle:',
      'form.mail_name': 'Név',
      'form.mail_email': 'E-mail',
      'form.mail_message': 'Üzenet',
      'form.mail_footer': 'Küldve a tbrska weboldalról',
      'footer.slogan': 'art · CZ / SK / HU',
      'footer.copy': '© tbrska 2026 — másolatok, printek, kifogások nélkül',
      'footer.top': '↑ Fel',
      'footer.top_aria': 'Vissza a tetejére',
      'cookie.text': 'Cookie-kat használunk a látogatottság elemzéséhez. Részletek az Adatvédelmi tájékoztatóban.',
      'cookie.decline': 'Elutasítás',
      'cookie.accept': 'Elfogadás',
      'aria.gallery_close': 'Galéria bezárása',
      'aria.lightbox_close': 'Előnézet bezárása',
      'aria.lightbox_dialog': 'Kép részletei',
      'aria.gallery_item_prefix': 'Részletek megnyitása'
    }
  };

  const getDict = (lang) => I18N[lang] || I18N.cs;
  let currentLang = 'cs';

  /* ======== NAV SCROLLED ======== */
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ======== ACTIVE LINK ON SCROLL ======== */
  const sections = ['#home', '#work', '#studio', '#testimonials', '#contact'];
  const navLinks = document.querySelectorAll('.nav-links a');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = '#' + entry.target.id;
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => {
    const el = document.querySelector(s);
    if (el) observer.observe(el);
  });

  /* ======== WORK — COUNTS PER CATEGORY ======== */
  const tiles = document.querySelectorAll('.work-tile');
  const categoryCounts = { portraits: 0, abstract: 0, paintings: 0 };
  tiles.forEach(t => {
    const cat = t.dataset.cat;
    if (categoryCounts[cat] !== undefined) categoryCounts[cat]++;
  });
  const fmtCount = (n, lang) => {
    const dict = getDict(lang);
    let key;
    if (lang === 'hu') {
      key = 'work.count_many';
    } else if (n === 1) {
      key = 'work.count_one';
    } else if (n >= 2 && n <= 4) {
      key = 'work.count_few';
    } else {
      key = 'work.count_many';
    }
    return (dict[key] || '').replace('$n', n);
  };
  const setCount = (id, n, lang) => {
    const el = document.getElementById(id);
    if (el) el.textContent = fmtCount(n, lang || currentLang);
  };

  /* ======== LIGHTBOX ======== */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCap = document.getElementById('lightboxCap');
  const lightboxClose = document.getElementById('lightboxClose');

  const openLightboxFromTile = (tile) => {
    const img = tile.querySelector('img');
    if (!img) return;
    const title = tile.dataset.title || '';
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt || '';
    lightboxCap.textContent = title;
    lightbox.hidden = false;
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
  };
  const closeLightbox = () => {
    lightbox.hidden = true;
    lightbox.setAttribute('aria-hidden', 'true');
    if (galleryModal.hidden) document.body.classList.remove('lightbox-open');
    lightboxImg.src = '';
  };

  lightboxClose.addEventListener('click', (e) => { e.stopPropagation(); closeLightbox(); });
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  /* ======== CATEGORY GALLERY MODAL ======== */
  const catCards = document.querySelectorAll('.cat-card');
  const galleryModal = document.getElementById('galleryModal');
  const galleryGrid = document.getElementById('galleryGrid');
  const galleryLabel = document.getElementById('galleryLabel');
  const galleryClose = document.getElementById('galleryClose');

  const getCatLabel = (cat) => getDict(currentLang)[`work.cat_${cat}`] || cat;

  const openGallery = (cat) => {
    const dict = getDict(currentLang);
    galleryModal.dataset.currentCat = cat;
    galleryLabel.textContent = getCatLabel(cat);
    galleryGrid.innerHTML = '';
    document.querySelectorAll(`.work-tile[data-cat="${cat}"]`).forEach(tile => {
      const srcImg = tile.querySelector('img');
      if (!srcImg) return;
      const title = tile.dataset.title || '';
      const item = document.createElement('button');
      item.className = 'gallery-item';
      item.type = 'button';
      item.setAttribute('aria-label', `${dict['aria.gallery_item_prefix']}: ${title || srcImg.alt}`);
      const imgEl = document.createElement('img');
      imgEl.src = srcImg.src;
      imgEl.alt = srcImg.alt || '';
      imgEl.loading = 'lazy';
      item.appendChild(imgEl);
      if (title) {
        const cap = document.createElement('span');
        cap.className = 'gallery-item-caption';
        cap.textContent = title;
        item.appendChild(cap);
      }
      item.addEventListener('click', () => openLightboxFromTile(tile));
      galleryGrid.appendChild(item);
    });
    galleryModal.hidden = false;
    galleryModal.setAttribute('aria-hidden', 'false');
    galleryModal.scrollTop = 0;
    document.body.classList.add('lightbox-open');
  };
  const closeGallery = () => {
    galleryModal.hidden = true;
    galleryModal.setAttribute('aria-hidden', 'true');
    galleryGrid.innerHTML = '';
    delete galleryModal.dataset.currentCat;
    if (lightbox.hidden) document.body.classList.remove('lightbox-open');
  };

  catCards.forEach(card => {
    card.addEventListener('click', () => openGallery(card.dataset.cat));
  });
  galleryClose.addEventListener('click', closeGallery);

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (!lightbox.hidden) { closeLightbox(); return; }
    if (!galleryModal.hidden) closeGallery();
  });

  /* ======== APPLY LANGUAGE ======== */
  const applyLanguage = (lang) => {
    const dict = getDict(lang);
    currentLang = lang;
    document.documentElement.lang = lang;

    // <title> + meta description
    if (dict['meta.title']) document.title = dict['meta.title'];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict['meta.description']) metaDesc.setAttribute('content', dict['meta.description']);

    // textContent
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    // innerHTML
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    // Attribute helpers
    const attrs = ['placeholder', 'aria-label', 'alt', 'title'];
    attrs.forEach(attr => {
      document.querySelectorAll(`[data-i18n-${attr}]`).forEach(el => {
        const key = el.getAttribute(`data-i18n-${attr}`);
        if (dict[key] !== undefined) el.setAttribute(attr, dict[key]);
      });
    });

    // Dynamic: counts
    setCount('count-portraits', categoryCounts.portraits, lang);
    setCount('count-abstract', categoryCounts.abstract, lang);
    setCount('count-paintings', categoryCounts.paintings, lang);

    // Dynamic: cat-card aria-label + inner img alt
    catCards.forEach(card => {
      const cat = card.dataset.cat;
      const label = dict[`work.cat_${cat}`] || cat;
      card.setAttribute('aria-label', `${dict['work.cat_aria_prefix']} ${label}`);
      const inner = card.querySelector('.cat-card-media img');
      if (inner) inner.alt = `${dict['work.cat_alt_prefix']} ${label}`;
    });

    // Dynamic: gallery label if open
    if (!galleryModal.hidden && galleryModal.dataset.currentCat) {
      galleryLabel.textContent = getCatLabel(galleryModal.dataset.currentCat);
    }
  };

  /* ======== CONTACT FORM ======== */
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  const showFeedback = (msg, type) => {
    feedback.textContent = msg;
    feedback.className = 'form-feedback ' + type;
    feedback.hidden = false;
    feedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/domi.taborska@icloud.com';
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const dict = getDict(currentLang);

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const gdpr = form.gdpr.checked;

    // Basic validation
    let valid = true;
    [form.name, form.email, form.message].forEach(f => f.classList.remove('error'));

    if (!name) { form.name.classList.add('error'); valid = false; }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      form.email.classList.add('error'); valid = false;
    }
    if (!message || message.length < 5) {
      form.message.classList.add('error'); valid = false;
    }
    if (!gdpr) { valid = false; }

    if (!valid) {
      showFeedback(dict['form.error'], 'error');
      return;
    }

    if (submitBtn) submitBtn.disabled = true;

    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `${dict['form.subject_prefix']} ${name}`,
          _captcha: 'false',
          _template: 'table',
          _language: currentLang
        })
      });
      if (!res.ok) throw new Error('submit failed');
      showFeedback(dict['form.success'], 'success');
      form.reset();
    } catch (err) {
      showFeedback(dict['form.network_error'], 'error');
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });

  /* ======== COOKIE BANNER ======== */
  const banner = document.getElementById('cookieBanner');
  const cookieConsent = localStorage.getItem('tbrska_cookie_consent');
  const hideBanner = () => {
    banner.hidden = true;
    banner.style.display = 'none';
  };
  if (!cookieConsent) {
    setTimeout(() => {
      banner.hidden = false;
      banner.style.display = '';
    }, 1500);
  }
  document.querySelectorAll('[data-cookie]').forEach(btn => {
    btn.addEventListener('click', () => {
      const accept = btn.dataset.cookie === 'accept';
      localStorage.setItem('tbrska_cookie_consent', accept ? 'accepted' : 'declined');
      hideBanner();
    });
  });
  window.handleCookie = (accept) => {
    localStorage.setItem('tbrska_cookie_consent', accept ? 'accepted' : 'declined');
    hideBanner();
  };

  /* ======== LANGUAGE SWITCH (CZ / SK / HU) ======== */
  const langBtns = document.querySelectorAll('.lang-btn');
  const setActiveLangBtn = (lang) => {
    langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  };

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.disabled) return;
      const lang = btn.dataset.lang;
      if (!I18N[lang]) return;
      setActiveLangBtn(lang);
      applyLanguage(lang);
      localStorage.setItem('tbrska_lang', lang);
    });
  });

  // Initial apply: load saved lang (fallback to browser-pref, then cs)
  const savedLang = localStorage.getItem('tbrska_lang');
  const browserLang = (navigator.language || 'cs').slice(0, 2).toLowerCase();
  const initialLang = I18N[savedLang] ? savedLang : (I18N[browserLang] ? browserLang : 'cs');
  setActiveLangBtn(initialLang);
  applyLanguage(initialLang);

  /* ======== SCROLL REVEAL ======== */
  const revealTargets = document.querySelectorAll(
    '.section-header, .strip-inner, .studio-meta, .studio-copy, .process-step, .review, .reaction, .contact-copy, .contact-form'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

  revealTargets.forEach(el => revealObs.observe(el));

  /* ======== SMOOTH INTERNAL ANCHOR ======== */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
