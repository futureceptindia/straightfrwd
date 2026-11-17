(function(){
  document.querySelectorAll('[data-logo]').forEach(function(el){ if(window.LOGO_SVG) el.innerHTML = window.LOGO_SVG; });
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.add('js');

  // reveal
  var els = document.querySelectorAll('.r');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function(es){ es.forEach(function(e){
      if (e.isIntersecting){ var sibs=[].slice.call(e.target.parentNode.children).filter(function(n){return n.classList.contains('r')});
        e.target.style.transitionDelay = Math.min(sibs.indexOf(e.target),5)*70+'ms';
        e.target.classList.add('in'); io.unobserve(e.target); } }); }, {threshold:.12, rootMargin:'0px 0px -40px 0px'});
    els.forEach(function(el){ io.observe(el); });
  } else els.forEach(function(el){ el.classList.add('in'); });

  // counters
  var counted = document.querySelectorAll('[data-count]');
  if (!reduce && 'IntersectionObserver' in window) {
    var co = new IntersectionObserver(function(es){ es.forEach(function(e){ if(!e.isIntersecting) return; co.unobserve(e.target);
      var el=e.target, to=parseFloat(el.dataset.count), d=+(el.dataset.dec||0), t0=performance.now();
      (function tick(t){ var p=Math.min((t-t0)/1400,1); p=1-Math.pow(1-p,3); el.textContent=(to*p).toFixed(d); if(p<1) requestAnimationFrame(tick); })(t0);
    }); }, {threshold:.6});
    counted.forEach(function(el){ co.observe(el); });
  }

  // flavour switcher
  var notes = {choc:'Dark cocoa, barely sweet.', mango:'Ripe mango, thick like a lassi.', kulfi:'Cardamom and pistachio.'};
  var tabs = document.querySelectorAll('.switch button'), note = document.getElementById('flav-note');
  tabs.forEach(function(b){ b.addEventListener('click', function(){
    var f=b.dataset.f;
    tabs.forEach(function(x){ x.setAttribute('aria-selected', x===b); });
    document.querySelectorAll('.pack').forEach(function(p){ p.classList.toggle('is-on', p.dataset.f===f); });
    note.textContent = notes[f];
  }); });
})();
