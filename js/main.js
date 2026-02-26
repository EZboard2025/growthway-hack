document.addEventListener('DOMContentLoaded', function() {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Initialize all modules
  initNavigation();
  initTypingEffect();
  initScrollAnimations();
  initFaqAccordion();
  initCounters();

  // Update copyright year
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
