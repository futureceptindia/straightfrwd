document.querySelectorAll('[data-logo]').forEach(function(el){ if (window.LOGO_SVG) el.innerHTML = window.LOGO_SVG; });
(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var v = document.querySelector('.band-video');
  if (v) { v.muted = true; if (reduce) { v.removeAttribute('autoplay'); v.pause(); } }
  if (reduce || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('js-reveal');
  var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }); }, {rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
})();
