/**
 * THE MUSIC ROOM — Navbar Module
 * Scroll state, mobile drawer, focus trap, ESC close
 */
import { throttle, focusTrap } from './utils.js';

export function initNavbar() {
  const navbar = document.getElementById('site-header');
  const hamburger = document.querySelector('.navbar__hamburger');
  const drawer = document.querySelector('.nav__drawer');
  const overlay = document.querySelector('.nav__overlay');

  if (!navbar) return;

  // Scroll state
  const onScroll = throttle(() => {
    navbar.querySelector('.navbar')?.classList.toggle('scrolled', window.scrollY > 80);
  }, 100);
  window.addEventListener('scroll', onScroll, { passive: true });

  // Active link (aria-current set in markup; fallback for pathname matching)
  const links = document.querySelectorAll('.navbar__link, .nav__drawer-link');
  links.forEach(link => {
    const current = document.querySelector(`a[href="${link.getAttribute('href')}"][aria-current="page"]`);
    if (current) return;
    if (link.getAttribute('href') === window.location.pathname ||
        link.getAttribute('href') === window.location.pathname.split('/').pop()) {
      link.classList.add('active');
    }
  });

  if (!hamburger || !drawer || !overlay) return;

  function openMenu() {
    drawer.classList.add('is-open');
    overlay.style.display = 'block';
    requestAnimationFrame(() => overlay.classList.add('is-open'));
    document.body.classList.add('menu-open');
    hamburger.setAttribute('aria-expanded', 'true');
    focusTrap(drawer);
    drawer.querySelector('a')?.focus();
  }

  function closeMenu() {
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    hamburger.setAttribute('aria-expanded', 'false');
    setTimeout(() => { overlay.style.display = ''; }, 300);
  }

  hamburger.addEventListener('click', () => {
    hamburger.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
  });
  overlay.addEventListener('click', closeMenu);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
}
