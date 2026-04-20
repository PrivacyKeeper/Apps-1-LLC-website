const toggle = document.querySelector('[data-menu-toggle]');
const navLinks = document.querySelector('[data-nav-links]');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const yearTargets = document.querySelectorAll('[data-year]');
const year = new Date().getFullYear();
yearTargets.forEach((el) => {
  el.textContent = String(year);
});

const forms = document.querySelectorAll('[data-email-form]');

forms.forEach((form) => {
  const submitButton = form.querySelector('button[type="submit"]');
  const statusElement = form.querySelector('[data-form-status]');
  const formType = form.dataset.formType;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!submitButton || !statusElement || !formType) return;

    statusElement.textContent = 'Sending...';
    statusElement.classList.remove('error', 'success');
    submitButton.disabled = true;

    try {
      const formData = new FormData(form);
      const payload = {
        formType,
        name: String(formData.get('name') || '').trim(),
        email: String(formData.get('email') || '').trim(),
        phone: String(formData.get('phone') || '').trim(),
        message: String(formData.get('message') || '').trim()
      };

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const responseData = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(responseData.error || 'Unable to send your message right now.');
      }

      statusElement.textContent = 'Message sent successfully. Thank you!';
      statusElement.classList.add('success');
      form.reset();
    } catch (error) {
      statusElement.textContent = error.message || 'Something went wrong. Please try again.';
      statusElement.classList.add('error');
    } finally {
      submitButton.disabled = false;
    }
  });
});
