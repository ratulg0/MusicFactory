/**
 * THE MUSIC FACTORY — Contact Form Module
 * Client-side validation
 */

export function initContact() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
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

    if (valid) {
      const btn = form.querySelector('[type="submit"]');
      const status = form.querySelector('.form-status');
      btn.textContent = 'Sending…';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Message Sent!';
        if (status) {
          status.textContent = 'Thank you! We have received your message and will get back to you soon.';
          status.classList.remove('visually-hidden');
        }
        form.reset();
        setTimeout(() => { btn.textContent = 'Send Message'; btn.disabled = false; }, 4000);
      }, 900);
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
