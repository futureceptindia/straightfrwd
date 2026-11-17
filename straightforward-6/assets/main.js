(function(){
  document.querySelectorAll('[data-logo]').forEach(function(el){ if(window.LOGO_SVG) el.innerHTML = window.LOGO_SVG; });
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var nav = document.querySelector('.nav');
  window.addEventListener('scroll', function(){ nav.classList.toggle('scrolled', window.scrollY > 10); }, {passive:true});
  if (reduce) { document.querySelectorAll('video').forEach(function(v){ v.pause(); v.removeAttribute('autoplay'); }); return; }
  if (!('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('js-reveal');
  var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }); }, {rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.sec-head, .ing, .card, .steps li, .extra, .life-media, details, .close-in').forEach(function(el, i){
    el.classList.add('rv'); el.style.setProperty('--d', (i % 4) * 70 + 'ms'); io.observe(el);
  });
})();
