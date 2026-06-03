// Scroll-triggered reveal via IntersectionObserver.
// Elements with .scroll-reveal or .scroll-reveal-scale become visible
// when they enter the viewport. Stat numbers count up from zero.
(function () {
  // ── Count-up animation for stat numbers ──
  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-target')) || 0;
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1200; // ms
    var start = null;

    function frame(now) {
      if (start === null) start = now;
      var progress = Math.min((now - start) / duration, 1);
      // easeOutCubic for a fast-then-settle ticker feel
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = Math.round(target * eased);
      el.textContent = prefix + value + suffix;
      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        el.textContent = prefix + target + suffix;
      }
    }
    requestAnimationFrame(frame);
  }

  function runCounters(root) {
    var stats = root.matches && root.matches('.stat-number')
      ? [root]
      : root.querySelectorAll('.stat-number');
    Array.prototype.forEach.call(stats, function (el) {
      if (!el.dataset.counted) {
        el.dataset.counted = '1';
        countUp(el);
      }
    });
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          runCounters(entry.target);
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
