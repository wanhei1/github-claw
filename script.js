/**
 * script.js – Personal Portfolio
 * Features:
 *  - Dark / light mode toggle (persisted to localStorage)
 *  - Smooth-scroll active nav-link highlight on scroll
 *  - Navbar scroll shadow + scroll progress bar
 *  - Mobile hamburger menu toggle
 */

(function () {
  'use strict';

  /* ── Scroll progress bar ── */
  const progressBar = document.createElement('div');
  progressBar.id = 'scroll-progress';
  progressBar.setAttribute('role', 'progressbar');
  progressBar.setAttribute('aria-hidden', 'true');
  document.body.prepend(progressBar);

  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }

  /* ── Theme toggle ── */
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('.theme-icon') : null;

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('aria-label',
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  // Initialise theme from storage or system preference
  const storedTheme = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('portfolio-theme', next);
    });
  }

  /* ── Navbar: scrolled class ── */
  const navbar = document.getElementById('navbar');

  function updateNavbar() {
    if (!navbar) return;
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  /* ── Active nav-link on scroll ── */
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));

  function updateActiveLink() {
    if (!sections.length || !navLinks.length) return;
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 68;
    const scrollY = window.scrollY + navH + 8;

    let current = sections[0].id;
    sections.forEach(function (section) {
      if (scrollY >= section.offsetTop) {
        current = section.id;
      }
    });

    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  /* ── Unified scroll handler ── */
  function onScroll() {
    updateScrollProgress();
    updateNavbar();
    updateActiveLink();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on load

  /* ── Mobile hamburger ── */
  const navToggle = document.getElementById('navToggle');
  const navLinksContainer = document.getElementById('navLinks');

  if (navToggle && navLinksContainer) {
    navToggle.addEventListener('click', function () {
      const isOpen = navLinksContainer.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when a link is clicked
    navLinksContainer.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinksContainer.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Close mobile menu on outside click ── */
  document.addEventListener('click', function (e) {
    if (!navbar) return;
    if (!navbar.contains(e.target) && navLinksContainer) {
      navLinksContainer.classList.remove('open');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  /* ── Smooth scroll for all internal anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ── Intersection Observer: fade-in animation ── */
  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply initial hidden state and observe
  const animatables = document.querySelectorAll(
    '.project-card, .skill-group, .research-card, .stat-card, .contact-card'
  );

  animatables.forEach(function (el, i) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease ' + (i * 0.06) + 's, transform 0.5s ease ' + (i * 0.06) + 's';
    observer.observe(el);
  });

  // Respect reduced-motion preference
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReduced.matches) {
    animatables.forEach(function (el) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.transition = 'none';
    });
  }

})();
