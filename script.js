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

  /* ======== WORK FILTER ======== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const tiles = document.querySelectorAll('.work-tile');
  const descTexts = document.querySelectorAll('.work-desc-text');
  const emptyBox = document.querySelector('.work-empty');

  // Count tiles per category
  const categoryCounts = { all: tiles.length, portraits: 0, abstract: 0, paintings: 0 };
  tiles.forEach(t => {
    const cat = t.dataset.cat;
    if (categoryCounts[cat] !== undefined) categoryCounts[cat]++;
  });
  document.getElementById('count-all').textContent = categoryCounts.all;
  document.getElementById('count-portraits').textContent = categoryCounts.portraits;
  document.getElementById('count-abstract').textContent = categoryCounts.abstract;
  document.getElementById('count-paintings').textContent = categoryCounts.paintings;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      let visibleCount = 0;
      tiles.forEach((tile, i) => {
        const show = filter === 'all' || tile.dataset.cat === filter;
        if (show) {
          tile.classList.remove('hidden');
          tile.style.setProperty('--delay', i);
          visibleCount++;
        } else {
          tile.classList.add('hidden');
        }
      });

      descTexts.forEach(d => {
        d.hidden = d.dataset.cat !== filter;
      });

      if (emptyBox) emptyBox.hidden = visibleCount > 0;
    });
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
  if (!cookieConsent) {
    setTimeout(() => { banner.hidden = false; }, 1500);
  }
  window.handleCookie = (accept) => {
    localStorage.setItem('tbrska_cookie_consent', accept ? 'accepted' : 'declined');
    banner.hidden = true;
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
