// BIGSTAXXSX - Responsive and accessible navigation.
// This file fixes the existing script references in the HTML pages.
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.nav');
  const header = document.querySelector('.topbar-inner');
  if (!nav || !header) return;

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'menu-toggle';
  button.setAttribute('aria-label', 'Open navigation');
  button.setAttribute('aria-expanded', 'false');
  nav.id = nav.id || 'site-nav';
  button.setAttribute('aria-controls', nav.id);
  button.innerHTML = '<span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span>';
  header.insertBefore(button, nav);

  function setMenuOpen(open) {
    nav.classList.toggle('active', open);
    button.classList.toggle('active', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  }

  button.addEventListener('click', function () {
    setMenuOpen(!nav.classList.contains('active'));
  });
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { setMenuOpen(false); });
  });
  document.addEventListener('click', function (event) {
    if (!header.contains(event.target)) setMenuOpen(false);
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && nav.classList.contains('active')) {
      setMenuOpen(false);
      button.focus();
    }
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) setMenuOpen(false);
  });
});
