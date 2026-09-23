/**
 * THE MUSIC ROOM — Theme Module
 * Toggles between dark (default) and light themes via the navbar
 * switch button. Persists the choice in localStorage.
 */

const STORAGE_KEY = 'theme';

function currentTheme() {
  return document.documentElement.getAttribute('data-theme') || 'dark';
}

export function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.setAttribute('aria-checked', String(theme === 'dark'));
  });
  document.querySelectorAll('meta[name="theme-color"]').forEach(meta => {
    meta.setAttribute('content', theme === 'dark' ? '#0B0B0B' : '#f5f5f5');
  });
}

export function initTheme() {
  const toggles = document.querySelectorAll('.theme-toggle');
  if (!toggles.length) return;

  applyTheme(currentTheme());

  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const next = currentTheme() === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* private mode */ }
      applyTheme(next);
    });
  });
}
