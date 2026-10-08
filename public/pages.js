/* Light / dark switch for the static pages. Uses the same saved choice as the main site. */
(function () {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  var root = document.documentElement;

  function label() {
    var dark = root.classList.contains('dark');
    btn.textContent = dark ? 'Light mode' : 'Dark mode';
    btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  btn.addEventListener('click', function () {
    var next = !root.classList.contains('dark');
    root.classList.toggle('dark', next);
    try { localStorage.setItem('navastha-theme', next ? 'dark' : 'light'); } catch (e) {}
    label();
  });
  label();
})();
