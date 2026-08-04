/**
 * THE MUSIC FACTORY — Gallery Module
 * Lightbox open/close/navigation
 */

export function initGallery() {
  const lightbox = document.querySelector('.lightbox');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox__img');
  const closeBtn = lightbox.querySelector('.lightbox__close');
  const prevBtn = lightbox.querySelector('.lightbox__prev');
  const nextBtn = lightbox.querySelector('.lightbox__next');
  const items = [...document.querySelectorAll('.gallery-item[data-src]')];
  let current = 0;

  function open(index) {
    current = index;
    lightboxImg.src = items[current].dataset.src;
    lightboxImg.alt = items[current].dataset.caption || '';
    lightbox.classList.add('is-open');
    document.body.classList.add('menu-open');
    closeBtn.focus();
  }

  function close() {
    lightbox.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    items[current]?.focus();
  }

  function navigate(dir) {
    current = (current + dir + items.length) % items.length;
    lightboxImg.src = items[current].dataset.src;
    lightboxImg.alt = items[current].dataset.caption || '';
  }

  items.forEach((item, i) => {
    item.setAttribute('tabindex', '0');
    item.addEventListener('click', () => open(i));
    item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i); } });
  });

  closeBtn?.addEventListener('click', close);
  prevBtn?.addEventListener('click', () => navigate(-1));
  nextBtn?.addEventListener('click', () => navigate(1));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
}
