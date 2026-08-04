/**
 * THE MUSIC FACTORY — Animations Module
 * IntersectionObserver scroll reveals, respects prefers-reduced-motion
 */

export function initAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up, .fade-left, .fade-right, .zoom-in')
    .forEach(el => observer.observe(el));
}

export function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const duration = 1500;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(ease * target) + (el.dataset.suffix || '');
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

export function initCarousel() {
  const carousel = document.querySelector('[data-carousel]');
  if (!carousel) return;

  const track = carousel.querySelector('.testimonials__track');
  const prev = carousel.querySelector('[data-carousel-prev]');
  const next = carousel.querySelector('[data-carousel-next]');
  if (!track || !prev || !next) return;

  const card = track.querySelector('.testimonial-card');
  const step = () => {
    if (window.matchMedia('(min-width: 1025px)').matches) return 0;
    const visible = card ? track.clientWidth : 0;
    return Math.max(card ? card.getBoundingClientRect().width + card.clientLeft : 0, 0);
  };

  prev.addEventListener('click', () => {
    const s = step();
    if (s) track.scrollBy({ left: -s, behavior: 'smooth' });
  });
  next.addEventListener('click', () => {
    const s = step();
    if (s) track.scrollBy({ left: s, behavior: 'smooth' });
  });
}
