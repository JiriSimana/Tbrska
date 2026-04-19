/* =============================================
   tbrska — interaction layer
   ============================================= */

(() => {
  'use strict';

  /* ======== NAV SCROLLED ======== */
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ======== ACTIVE LINK ON SCROLL ======== */
  const sections = ['#home', '#work', '#studio', '#services', '#testimonials', '#contact'];
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
  const fmtCount = (n) => `${n} ${n === 1 ? 'obraz' : (n >= 2 && n <= 4 ? 'obrazy' : 'obrazů')}`;
  const setCount = (id, n) => {
    const el = document.getElementById(id);
    if (el) el.textContent = fmtCount(n);
  };
  setCount('count-portraits', categoryCounts.portraits);
  setCount('count-abstract', categoryCounts.abstract);
  setCount('count-paintings', categoryCounts.paintings);

  /* ======== LIGHTBOX ======== */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCap = document.getElementById('lightboxCap');
  const lightboxClose = document.getElementById('lightboxClose');

  const openLightboxFromTile = (tile) => {
    const img = tile.querySelector('img');
    if (!img) return;
    const title = tile.querySelector('.tile-title')?.textContent?.trim() || '';
    const cat = tile.querySelector('.tile-cat')?.textContent?.trim() || '';
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt || '';
    lightboxCap.textContent = cat && title ? `${cat} — ${title}` : (title || cat);
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

  const catLabels = {
    portraits: 'Portréty',
    abstract: 'Abstraktní portréty',
    paintings: 'Malby'
  };

  const openGallery = (cat) => {
    galleryLabel.textContent = catLabels[cat] || cat;
    galleryGrid.innerHTML = '';
    document.querySelectorAll(`.work-tile[data-cat="${cat}"]`).forEach(tile => {
      const srcImg = tile.querySelector('img');
      if (!srcImg) return;
      const item = document.createElement('button');
      item.className = 'gallery-item';
      item.type = 'button';
      item.setAttribute('aria-label', `Otevřít detail: ${srcImg.alt || ''}`);
      const imgEl = document.createElement('img');
      imgEl.src = srcImg.src;
      imgEl.alt = srcImg.alt || '';
      imgEl.loading = 'lazy';
      item.appendChild(imgEl);
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

  /* ======== CONTACT FORM ======== */
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  const showFeedback = (msg, type) => {
    feedback.textContent = msg;
    feedback.className = 'form-feedback ' + type;
    feedback.hidden = false;
    feedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

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
      showFeedback('Zkontroluj prosím vyplněná pole a souhlas s GDPR.', 'error');
      return;
    }

    // For static host — mailto fallback
    // (In production, napoj na backend / Formspree / Make)
    const subject = encodeURIComponent(`Poptávka od ${name}`);
    const body = encodeURIComponent(
      `Jméno: ${name}\nE-mail: ${email}\n\nZpráva:\n${message}\n\n—\nOdesláno z webu tbrska`
    );

    window.location.href = `mailto:domi.taborska@icloud.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      showFeedback(
        'Má to. Držím u štětce, píšu zpátky. (Otevřel se ti e-mailový klient — pokud ne, pošli zprávu přímo na domi.taborska@icloud.com.)',
        'success'
      );
      form.reset();
    }, 500);
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

  /* ======== LANGUAGE SWITCH (CZ/SK — hook for future i18n) ======== */
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.disabled) return;
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const lang = btn.dataset.lang;
      document.documentElement.lang = lang;
      // Future: swap text via dictionary; for now CZ/SK texts are very close,
      // Dominika doplní SK mutaci později.
      localStorage.setItem('tbrska_lang', lang);
    });
  });
  const savedLang = localStorage.getItem('tbrska_lang');
  if (savedLang) {
    const savedBtn = document.querySelector(`.lang-btn[data-lang="${savedLang}"]`);
    if (savedBtn && !savedBtn.disabled) savedBtn.click();
  }

  /* ======== SCROLL REVEAL ======== */
  const revealTargets = document.querySelectorAll(
    '.section-header, .strip-inner, .studio-meta, .studio-copy, .service, .process-step, .testi-empty, .contact-copy, .contact-form'
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

  /* ======== SMOOTH INTERNAL ANCHOR (for browsers without smooth behavior) ======== */
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
