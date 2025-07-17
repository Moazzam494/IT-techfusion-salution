document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav__links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.courses__grid');

  if (grid) {
    grid.style.scrollBehavior = 'smooth';
    window.addEventListener('resize', () => {
      grid.scrollLeft = 0;
    });
  }
});

  const toggleBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.header__menu');

    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('header__menu--active');
    });

    // Optional: Close menu after clicking a link (on mobile)
    document.querySelectorAll('.header__menu-link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('header__menu--active');
      });
    });