/**
 * THE MUSIC ROOM — FAQ Module
 * Accessible accordion: one panel open at a time, keyboard friendly.
 */

export function initFAQ() {
  const questions = document.querySelectorAll('.faq__question');
  if (!questions.length) return;

  questions.forEach(btn => {
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      questions.forEach(other => {
        other.setAttribute('aria-expanded', 'false');
        const body = document.getElementById(other.getAttribute('aria-controls'));
        if (body) body.setAttribute('aria-hidden', 'true');
      });
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        const body = document.getElementById(btn.getAttribute('aria-controls'));
        if (body) body.setAttribute('aria-hidden', 'false');
      }
    });
  });
}