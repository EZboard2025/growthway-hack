function initNavigation() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        var offset = 80;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }

      // Close mobile menu if open
      var menu = document.getElementById('nav-menu');
      var toggle = document.getElementById('nav-toggle');
      if (menu && menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
        toggle.classList.remove('is-active');
      }
    });
  });

  // Mobile menu toggle
  var menuToggle = document.getElementById('nav-toggle');
  var menuPanel = document.getElementById('nav-menu');

  if (menuToggle && menuPanel) {
    menuToggle.addEventListener('click', function() {
      menuPanel.classList.toggle('is-open');
      menuToggle.classList.toggle('is-active');
    });
  }

  // Sticky nav background on scroll
  var nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
    }, { passive: true });
  }
}
