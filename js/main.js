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