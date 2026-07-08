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

  // ── Cycling role titles (team section) ──
  // Each .role-cycle element rotates through its pipe-separated data-roles
  // with a short fade. Honors prefers-reduced-motion (instant swap, no fade).
  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('.role-cycle').forEach(function (el) {
    var roles = (el.getAttribute('data-roles') || '')
      .split('|')
      .map(function (s) { return s.trim(); })
      .filter(Boolean);
    if (roles.length < 2) return;

    var i = 0;
    var fade = 400;   // ms fade duration
    var hold = 2200;  // ms each role stays fully visible

    if (!reduceMotion) el.style.transition = 'opacity ' + fade + 'ms ease';

    setInterval(function () {
      var next = (i + 1) % roles.length;
      if (reduceMotion) {
        i = next;
        el.textContent = roles[i];
        return;
      }
      el.style.opacity = '0';
      setTimeout(function () {
        i = next;
        el.textContent = roles[i];
        el.style.opacity = '1';
      }, fade);
    }, hold + fade);
  });
})();
