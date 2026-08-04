/**
 * THE MUSIC FACTORY — Main JS Entry Point
 * Initialises all modules after DOM is ready
 */
import { initNavbar } from './navbar.js';
import { initAnimations, initCounters } from './animations.js';
import { initGallery } from './gallery.js';
import { initContact } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initAnimations();
  initCounters();
  initGallery();
  initContact();

  // Back to top
  const btn = document.querySelector('.back-to-top');
  if (btn) {
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
});
