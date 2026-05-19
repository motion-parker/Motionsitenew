// Scroll-triggered reveal via IntersectionObserver.
// Elements with .scroll-reveal or .scroll-reveal-scale become visible
// when they enter the viewport.
(function () {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.scroll-reveal, .scroll-reveal-scale').forEach(function (el) {
    observer.observe(el);
  });
})();
