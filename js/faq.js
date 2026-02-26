function initFaqAccordion() {
  var faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function(item) {
    var question = item.querySelector('.faq-question');

    question.addEventListener('click', function() {
      var isActive = item.classList.contains('active');

      // Close all items
      faqItems.forEach(function(i) {
        i.classList.remove('active');
      });

      // Toggle clicked item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}
