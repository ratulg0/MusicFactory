/**
 * THE MUSIC ROOM — Main JS Entry Point
 * Initialises all modules after DOM is ready
 */
import { initNavbar } from './navbar.js';
import { initAnimations, initCounters, initCarousel } from './animations.js';
import { initGallery } from './gallery.js';
import { initContact } from './contact.js';
import { initFAQ } from './faq.js';
import { initCourseCards } from './courses.js';
import { initTheme } from './theme.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initTheme();
  initCourseCards();
  initAnimations();
  initCounters();
  initCarousel();
  initGallery();
  initContact();
  initFAQ();

  // Back to top
  const btn = document.querySelector('.back-to-top');
  if (btn) {
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
});