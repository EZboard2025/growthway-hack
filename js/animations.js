function initScrollAnimations() {
  // Global section reveals - every .gs-reveal fades up on scroll
  gsap.utils.toArray('.gs-reveal').forEach(function(el) {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Staggered children reveals (card grids, FAQ items, reasons)
  gsap.utils.toArray('.gs-stagger').forEach(function(container) {
    var children = container.children;
    gsap.to(children, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%'
      }
    });
  });

  // Hero section special animation timeline
  var heroTl = gsap.timeline({ delay: 0.3 });

  heroTl
    .from('.hero__status-bar', {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: 'power2.out'
    })
    .from('.hero .section-label', {
      opacity: 0,
      x: -30,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.3')
    .from('.hero__heading', {
      opacity: 0,
      y: 50,
      duration: 0.9,
      ease: 'power2.out'
    }, '-=0.3')
    .from('.hero__description', {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: 'power2.out'
    }, '-=0.4')
    .from('.hero__cta', {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.3')
    .from('.hero__terminal', {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.2')
    .from('.ascii-art--hero', {
      opacity: 0,
      duration: 1.5,
      ease: 'power1.in'
    }, '-=0.8');

  // Section labels slide in from left
  gsap.utils.toArray('.section-label').forEach(function(label) {
    // Skip hero section label (already animated)
    if (label.closest('.hero')) return;

    gsap.from(label, {
      x: -30,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: label,
        start: 'top 90%'
      }
    });
  });

  // Parallax on decorative ASCII elements
  gsap.utils.toArray('.ascii-art--dim').forEach(function(art) {
    gsap.to(art, {
      y: -60,
      scrollTrigger: {
        trigger: art,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
  });
}
