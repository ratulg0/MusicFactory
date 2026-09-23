/**
 * THE MUSIC ROOM — Contact Form
 * Validates and submits to Netlify Forms via fetch.
 */

export function initContact() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();

    if (!validate(form)) return;

    const btn    = form.querySelector('[type="submit"]');
    const status = form.querySelector('.form-status');

    btn.textContent = 'Sending…';
    btn.disabled    = true;

    try {
      const res = await fetch('/', {
        method:  'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body:    new URLSearchParams(new FormData(form)).toString()
      });

      if (res.ok) {
        btn.textContent = 'Message Sent ✓';
        if (status) {
          status.textContent = 'Thank you! We\'ve received your message and will get back to you soon.';
          status.classList.remove('visually-hidden');
        }
        form.reset();
        setTimeout(() => {
          btn.textContent = 'Send Message';
          btn.disabled    = false;
          if (status) status.classList.add('visually-hidden');
        }, 5000);
      } else {
        throw new Error('Network response was not ok');
      }
    } catch {
      btn.textContent = 'Send Message';
      btn.disabled    = false;
      if (status) {
        status.textContent = 'Something went wrong. Please email us directly at hello@themusicfactory.in';
        status.classList.remove('visually-hidden');
      }
    }
  });

  form.querySelectorAll('[required]').forEach(field => {
    field.addEventListener('input', () => {
      field.classList.remove('error');
      const error = field.parentElement.querySelector('.form-error');
      if (error) error.textContent = '';
    });
  });
}

function validate(form) {
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    const error = field.parentElement.querySelector('.form-error');
    if (!field.value.trim()) {
      field.classList.add('error');
      if (error) error.textContent = 'This field is required.';
      valid = false;
    } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
      field.classList.add('error');
      if (error) error.textContent = 'Please enter a valid email.';
      valid = false;
    } else {
      field.classList.remove('error');
      if (error) error.textContent = '';
    }
  });
  return valid;
}
