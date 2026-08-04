/**
 * THE MUSIC FACTORY — Gallery Module
 * Category filters + lightbox with keyboard/swipe navigation.
 */

export function initGallery() {
  initFilters();
  initLightbox();
}

function initFilters() {
  const filters = [...document.querySelectorAll('.gallery-filter')];
  const items = [...document.querySelectorAll('.gallery-masonry__item')];
  if (!filters.length || !items.length) return;

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filters.forEach(b => {
        b.classList.toggle('is-active', b === btn);
        b.setAttribute('aria-pressed', String(b === btn));
      });
      items.forEach(item => {
        const show = filter === 'all' || item.dataset.category === filter;
        item.classList.toggle('is-hidden', !show);
      });
    });
  });
}

function initLightbox() {
  const lightbox = document.querySelector('.lightbox');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox__img');
  const caption = lightbox.querySelector('.lightbox__caption');
  const closeBtn = lightbox.querySelector('.lightbox__close');
  const prevBtn = lightbox.querySelector('.lightbox__prev');
  const nextBtn = lightbox.querySelector('.lightbox__next');
  const getItems = () => [...document.querySelectorAll('.gallery-masonry__item[data-src], .gallery-item[data-src]')]
    .filter(el => !el.classList.contains('is-hidden'));
  let items = getItems();
  let current = 0;

  function render(i) {
    items = getItems();
    if (!items.length) return;
    current = (i + items.length) % items.length;
    lightboxImg.src = items[current].dataset.src;
    lightboxImg.alt = items[current].dataset.caption || '';
    if (caption) caption.textContent = items[current].dataset.caption || '';
  }

  function open(index) {
    render(index);
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
    render(current + dir);
    [1, -1].forEach(d => {
      const idx = (current + d + items.length) % items.length;
      if (items[idx]) { const img = new Image(); img.src = items[idx].dataset.src; }
    });
  }

  items.forEach((item, i) => {
    item.addEventListener('click', () => {
      items = getItems();
      open(items.indexOf(item));
    });
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(items.indexOf(item)); }
    });
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

  let touchX = null;
  lightbox.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  lightbox.addEventListener('touchend', e => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) > 40) navigate(dx < 0 ? 1 : -1);
  }, { passive: true });
}