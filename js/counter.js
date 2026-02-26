function initCounters() {
  var counters = document.querySelectorAll('[data-counter]');

  counters.forEach(function(counter) {
    var target = parseInt(counter.dataset.counter, 10);
    var prefix = counter.dataset.prefix || '';
    var suffix = counter.dataset.suffix || '';

    ScrollTrigger.create({
      trigger: counter,
      start: 'top 85%',
      once: true,
      onEnter: function() {
        gsap.to({ val: 0 }, {
          val: target,
          duration: 1.5,
          ease: 'power2.out',
          onUpdate: function() {
            var current = Math.round(this.targets()[0].val);
            counter.textContent = prefix + current.toLocaleString('pt-BR') + suffix;
          }
        });
      }
    });
  });
}
