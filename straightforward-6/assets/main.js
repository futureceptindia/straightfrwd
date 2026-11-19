/* StraightFrwd v6: shared behaviour + catalogue data */
var SF = {
  protein: ['choc','mango','kulfi'],
  items: {
    choc:  {name:'Chocolate', kind:'Daily Protein', ill:'i-cocoa', col:'c-brown', accent:'#E0822F',
            note:'Dark cocoa, barely sweet.', shot:'pack-choc.jpg',
            gallery:[['pack-choc.jpg','Chocolate sachet and box'],['lsp-choc-hand.jpg','Holding a Chocolate sachet'],['slide-c-protein.jpg','22.5 g protein per serving'],['slide-c-comp.jpg','What goes into the mix'],['slide-c-mix.jpg','50 g powder into 250 ml water'],['slide-c-fibre.jpg','4.4 g dietary fibre per serving'],['slide-nutrition.jpg','Nutrition per serving'],['slide-c-allergen.jpg','Allergen information'],['slide-howto.jpg','How to make it'],['lsp-morning.jpg','Chocolate shake in the morning']]},
    mango: {name:'Mango', kind:'Daily Protein', ill:'i-mango', col:'c-brown', accent:'#1F4A33',
            note:'Ripe mango, thick like a lassi.', shot:'pack-mango-clean.jpg', pouch:'pack-pouch.jpg',
            gallery:[['pack-mango-clean.jpg','Mango sachet and box'],['lsp-mango-hand.jpg','Holding a Mango sachet'],['slide-m-protein.jpg','22.5 g protein per serving'],['slide-c-comp.jpg','What goes into the mix'],['slide-m-mix.jpg','50 g powder into 250 ml water'],['slide-c-fibre.jpg','4.4 g dietary fibre per serving'],['slide-nutrition.jpg','Nutrition per serving'],['slide-c-allergen.jpg','Allergen information'],['slide-howto.jpg','How to make it'],['lsp-mango.jpg','Mango sachet with a mango shake'],['pack-pouch.jpg','Mango 1 kg pouch']]},
    kulfi: {name:'Kulfi', kind:'Daily Protein', ill:'i-cardamom', col:'c-brown', accent:'#AE5D40',
            note:'Cardamom and pistachio.', shot:'pack-kulfi-clean.jpg',
            gallery:[['pack-kulfi-clean.jpg','Kulfi sachet and box'],['lsp-kulfi-hand.jpg','Holding a Kulfi sachet'],['slide-k-protein.jpg','22.5 g protein per serving'],['slide-c-comp.jpg','What goes into the mix'],['slide-k-mix.jpg','50 g powder into 250 ml water'],['slide-c-fibre.jpg','4.4 g dietary fibre per serving'],['slide-nutrition.jpg','Nutrition per serving'],['slide-c-allergen.jpg','Allergen information'],['slide-howto.jpg','How to make it'],['lsp-kulfi.jpg','Kulfi sachet with a kulfi shake']]},
    kahwa: {name:'Kashmiri Kahwa', kind:'Herbal Drink', ill:'i-saffron', col:'c-brown', accent:'#8a2f3c',
            note:'Saffron and almond.', shot:'sachet-kahwa.jpg',
            gallery:[['energy-kahwa.jpg','A cup of kahwa with saffron and cinnamon'],['hero-4.jpg','Steaming kahwa on a wooden table'],['lsp-herbal.jpg','Kahwa sachet beside a cup of tea'],['sachet-kahwa.jpg','Kashmiri Kahwa sachet']]},
    ginger:{name:'Ginger', kind:'Herbal Drink', ill:'i-ginger', col:'c-brown', accent:'#c08a1e',
            note:'Sharp and warming.', shot:'sachet-ginger.jpg',
            gallery:[['energy-ginger.jpg','A cup of ginger tea with fresh ginger'],['sachet-ginger.jpg','Ginger sachet']]},
    tulsi: {name:'Tulsi', kind:'Herbal Drink', ill:'i-tulsi', col:'c-green', accent:'#1F4A33',
            note:'Holy basil, earthy.', shot:'sachet-tulsi.jpg',
            gallery:[['energy-tulsi.jpg','A cup of tulsi tea with fresh leaves'],['sachet-tulsi.jpg','Tulsi sachet']]},
    lemon: {name:'Lemon', kind:'Herbal Drink', ill:'i-lemon', col:'c-green', accent:'#1F4A33',
            note:'Plain and clean.', shot:'sachet-lemon.jpg',
            gallery:[['energy-lemon.jpg','A cup of lemon tea with a cut lemon'],['ls-desk.jpg','A warm cup at the desk'],['sachet-lemon.jpg','Lemon sachet']]}
  },
  ingredients: [
    ['Protein', 'Soya protein isolate, pea protein, brown rice protein'],
    ['Creamy base', 'Soy fat powder (soy oil, maltodextrin, sodium caseinate, stabiliser INS 340(ii), emulsifier INS 471, antioxidant INS 304), maltodextrin'],
    ['Fibre', 'Soya fibre, FOS'],
    ['Sweetness', 'No added sugar. Sweeteners: sucralose (INS 955) and acesulfame potassium (INS 950). Nature identical flavouring substances'],
    ['Vitamins & minerals', '25+ vitamins and minerals, listed in full on the back of the pack'],
    ['Botanicals', 'Garcinia cambogia, cissus quadrangularis extract, curcumin'],
    ['Digestive enzymes', 'α-amylase, protease, lipase, cellulase, lactase'],
    ['Allergens', 'Contains soy and milk (sodium caseinate). Made in a facility that also handles wheat, milk, oats and nuts']
  ]
};

(function(){
  document.querySelectorAll('[data-logo]').forEach(function(el){ if(window.LOGO_SVG) el.innerHTML = window.LOGO_SVG; });
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var nav = document.querySelector('.nav');
  if (nav) window.addEventListener('scroll', function(){ nav.classList.toggle('scrolled', window.scrollY > 10); }, {passive:true});

  /* active nav */
  var pg = (location.pathname.split('/').pop() || 'index.html');
  var key = {'products.html':'products','product.html':'products','about.html':'about','contact.html':'contact'}[pg];
  if (key) document.querySelectorAll('[data-nav="'+key+'"]').forEach(function(a){ a.setAttribute('aria-current','page'); });

  /* mobile menu */
  var burger = document.querySelector('.burger'), mnav = document.getElementById('mnav');
  if (burger && mnav) {
    burger.addEventListener('click', function(){
      var open = burger.getAttribute('aria-expanded') !== 'true';
      burger.setAttribute('aria-expanded', open); document.body.classList.toggle('menu-open', open);
    });
    mnav.addEventListener('click', function(e){ if (e.target.tagName === 'A') { burger.setAttribute('aria-expanded','false'); document.body.classList.remove('menu-open'); } });
  }

  /* product page */
  var pdp = document.getElementById('pdp');
  if (pdp) {
    var render = function(){
      var id = (location.hash || '').slice(1);
      if (!SF.items[id]) id = 'choc';
      var p = SF.items[id], isP = SF.protein.indexOf(id) > -1;
      document.title = p.name + ' ' + p.kind + ' | StraightFrwd';
      var gallery = p.gallery.map(function(g,i){
        return '<button class="thumb'+(i===0?' on':'')+'" data-src="assets/img/'+g[0]+'" data-alt="'+g[1]+'" aria-label="Show: '+g[1]+'"><img src="assets/img/'+g[0]+'" alt="" loading="lazy"></button>';
      }).join('');
      var sizes = isP ? '<div class="sizes" role="group" aria-label="Pack size">'+
          '<button class="size on" data-size="sachet" aria-pressed="true">50 g sachet</button>'+
          '<button class="size" data-size="pouch" aria-pressed="false">1 kg pouch</button></div>'+
          '<p class="size-note" id="size-note">One serving. Tear, pour, stir.</p>' : '';
      var nums = isP
        ? [['22.5 g','protein'],['4.4 g','fibre, 1 g of it FOS'],['0 g','added sugar'],['200','kcal per serving']]
        : [['1 g','sachet'],['150 ml','hot water'],['1 min','to make']];
      var numHtml = '<ul class="pdp-nums">'+nums.map(function(n){return '<li><b>'+n[0]+'</b><span>'+n[1]+'</span></li>';}).join('')+'</ul>';
      var detail = isP
        ? '<div class="pdp-detail"><div class="wrap">'+
            '<div class="sec-head"><p class="hand kicker">everything in the sachet</p><h2>What goes into it</h2><p class="sub">Same formulation in Chocolate, Mango and Kulfi. Per 100 g: 45 g protein, 8.8 g fibre.</p></div>'+
            '<dl class="ing-list">'+SF.ingredients.map(function(r){return '<div class="ing-g"><dt>'+r[0]+'</dt><dd>'+r[1]+'</dd></div>';}).join('')+'</dl>'+
            '<div class="use-grid">'+
              '<div class="use"><h3>How to make it</h3><p>Add 50 g to 250 ml water. Stir well until fully dissolved. Drink straight away.</p></div>'+
              '<div class="use"><h3>How much</h3><p>One serving a day. Recommended as a one meal replacement. Do not exceed the recommended daily usage.</p></div>'+
              '<div class="use warn"><h3>Not for</h3><p>Not to be used by pregnant, nursing and lactating women, children under 5, adolescents or the elderly, except when medically advised by a physician, certified dietitian or nutrition professional.</p></div>'+
            '</div></div></div>'
        : '<div class="pdp-detail"><div class="wrap"><div class="herbal-how">'+
            '<svg class="ill-lg c-brown" aria-hidden="true"><use href="#i-kahwa"/></svg>'+
            '<div><p class="hand kicker">how to make it</p><h2>1 g in 150 ml hot water.</h2><p>Tear the sachet, empty it into a cup of 150 ml hot water and stir. Give it a minute, then sip.</p></div>'+
          '</div></div></div>';
      pdp.innerHTML =
        '<div class="wrap pdp-grid">'+
          '<div class="pdp-media">'+
            '<figure class="sticker pdp-shot xf" style="--tilt:-2deg"><img class="on" id="pdp-img" src="assets/img/'+p.gallery[0][0]+'" alt="'+p.gallery[0][1]+'" width="1200" height="1200"><img class="xf-b" src="assets/img/'+p.shot+'" alt=""></figure>'+
            '<svg class="pdp-ill '+p.col+'" aria-hidden="true"><use href="#'+p.ill+'"/></svg>'+
            '<div class="thumbs">'+gallery+'</div>'+
          '</div>'+
          '<div class="pdp-copy">'+
            '<p class="crumbs"><a href="products.html">Products</a> / <a href="products.html#'+(isP?'protein':'herbal')+'">'+p.kind+'</a></p>'+
            '<h1>'+p.name+'</h1>'+
            '<p class="pdp-kind" style="--accent:'+p.accent+'">'+p.kind+'</p>'+
            '<p class="hand pdp-note">"'+p.note+'"</p>'+
            sizes + numHtml +
            (isP ? '<p class="tiny">Per 50 g serving. Plant protein, not whey.</p>' : '') +
            '<div class="pdp-cta"><a class="btn" href="contact.html#buy">Ask where to buy</a><a class="link-doodle" href="products.html">All products</a></div>'+
          '</div>'+
        '</div>' + detail;

      var show = function(src, alt){
        var fig = pdp.querySelector('.pdp-shot'), cur = fig.querySelector('img.on'), nxt = fig.querySelector('img:not(.on)');
        if (cur.getAttribute('src') === src) return;
        nxt.onload = function(){ nxt.classList.add('on'); cur.classList.remove('on'); nxt.id='pdp-img'; cur.removeAttribute('id'); nxt.alt = alt; cur.alt=''; };
        nxt.src = src; if (nxt.complete && nxt.naturalWidth) nxt.onload();
      };
      pdp.querySelectorAll('.thumb').forEach(function(t){
        t.addEventListener('click', function(){
          pdp.querySelectorAll('.thumb').forEach(function(x){x.classList.remove('on');}); t.classList.add('on');
          show(t.dataset.src, t.dataset.alt);
        });
      });
      pdp.querySelectorAll('.size').forEach(function(b){
        b.addEventListener('click', function(){
          pdp.querySelectorAll('.size').forEach(function(x){x.classList.remove('on'); x.setAttribute('aria-pressed','false');});
          b.classList.add('on'); b.setAttribute('aria-pressed','true');
          var pouch = b.dataset.size === 'pouch';
          if (pouch && p.pouch) show('assets/img/'+p.pouch, p.name+' 1 kg pouch');
          else show('assets/img/'+p.shot, p.name+' '+p.kind+' pack');
          document.getElementById('size-note').textContent = pouch ? '1 kg pouch, 20 servings of 50 g.' : 'One serving. Tear, pour, stir.';
        });
      });
      var others = document.getElementById('others');
      if (others) others.innerHTML = Object.keys(SF.items).filter(function(k){return k!==id;}).map(function(k,i){
        var o = SF.items[k];
        return '<a class="other" href="product.html#'+k+'" style="--tilt:'+(i%2?'1.5deg':'-1.5deg')+'"><span class="sticker"><img src="assets/img/'+o.shot+'" alt="" loading="lazy"></span><span class="o-name">'+o.name+'</span><span class="o-kind">'+o.kind+'</span></a>';
      }).join('');
      if (render.ran) window.scrollTo({top:0, behavior: reduce ? 'auto' : 'smooth'});
      render.ran = true;
    };
    render();
    window.addEventListener('hashchange', render);
  }

  /* contact form -> mailto */
  var form = document.getElementById('contact-form');
  if (form) form.addEventListener('submit', function(e){
    e.preventDefault();
    var f = form.elements;
    if (!f.name.value.trim()) { f.name.focus(); document.getElementById('form-note').textContent = 'Please add your name.'; return; }
    var body = 'Name: '+f.name.value+'\nPhone: '+f.phone.value+'\nEmail: '+f.email.value+'\nTopic: '+f.topic.value+'\nProduct: '+f.product.value+'\n\n'+f.message.value;
    var url = 'mailto:care@straightfrwd.com?subject='+encodeURIComponent(f.topic.value+' - '+f.product.value)+'&body='+encodeURIComponent(body);
    document.getElementById('form-note').textContent = 'Opening your email app. If nothing happens, write to care@straightfrwd.com.';
    window.location.href = url;
  });
  if (location.hash === '#buy' && form) { var t = form.elements.topic; if (t) t.value = 'Where to buy'; }

  window.SF_REDUCE = reduce;
})();

/* ===== motion engine: transform/opacity only, IO-driven, reduced-motion safe ===== */
window.SFmotion = function(reduce){
  var root = document.documentElement;
  var bar = document.querySelector('.progress i');
  var nav = document.querySelector('.nav');
  var pars = [].slice.call(document.querySelectorAll('[data-par]'));
  var lastY = window.scrollY, ticking = false;

  function frame(){
    ticking = false;
    var y = window.scrollY, max = document.documentElement.scrollHeight - innerHeight;
    if (bar) bar.style.transform = 'scaleX(' + (max > 0 ? y / max : 0) + ')';
    if (nav) { nav.classList.toggle('hide', y > 300 && y > lastY && !document.body.classList.contains('menu-open')); }
    lastY = y;
    if (!reduce) pars.forEach(function(el){
      var r = el.getBoundingClientRect(); if (r.bottom < -200 || r.top > innerHeight + 200) return;
      var off = (r.top + r.height/2 - innerHeight/2) * parseFloat(el.dataset.par);
      el.style.translate = '0 ' + off.toFixed(1) + 'px';
    });
  }
  window.addEventListener('scroll', function(){ if (!ticking) { ticking = true; requestAnimationFrame(frame); } }, {passive:true});
  frame();

  /* fade sliders (hero sticker) */
  document.querySelectorAll('.fade-slider').forEach(function(s){
    var imgs = s.querySelectorAll('img'), i = 0;
    if (reduce || imgs.length < 2) return;
    setInterval(function(){ if (document.hidden) return; imgs[i].classList.remove('on'); i = (i+1) % imgs.length; imgs[i].classList.add('on'); }, +s.dataset.interval || 4000);
  });

  /* day slider with progress dots */
  document.querySelectorAll('.slider').forEach(function(sl){
    var slides = sl.querySelectorAll('.slide'), dots = sl.querySelector('.dots'), i = 0, timer;
    slides.forEach(function(_, k){ var b = document.createElement('button'); b.setAttribute('aria-label','Slide '+(k+1)); b.innerHTML='<i></i>'; b.onclick=function(){ go(k); }; dots.appendChild(b); });
    function go(k){
      slides[i].classList.remove('on'); dots.children[i].removeAttribute('aria-current');
      i = (k + slides.length) % slides.length;
      slides[i].classList.add('on'); var d = dots.children[i]; d.setAttribute('aria-current','true');
      var bar = d.querySelector('i'); bar.style.animation='none'; void bar.offsetWidth; bar.style.animation='';
      clearTimeout(timer); if (!reduce) timer = setTimeout(function(){ go(i+1); }, +sl.dataset.interval || 6000);
    }
    sl.querySelector('.prev').onclick = function(){ go(i-1); };
    sl.querySelector('.next').onclick = function(){ go(i+1); };
    go(0);
  });

  /* accordion: smooth open/close of the answer (opacity + translate) */
  document.querySelectorAll('details').forEach(function(d){
    var s = d.querySelector('summary'), p = d.querySelector('p');
    s.addEventListener('click', function(e){
      if (reduce || !p) return;
      e.preventDefault();
      if (d.open) { d.classList.add('closing'); setTimeout(function(){ d.open = false; d.classList.remove('closing'); }, 220); }
      else { d.open = true; }
    });
  });

  /* magnetic buttons */
  if (!reduce && matchMedia('(hover:hover)').matches) {
    document.querySelectorAll('.btn, .chip').forEach(function(b){
      b.addEventListener('pointermove', function(e){ var r = b.getBoundingClientRect(); b.style.translate = ((e.clientX-r.left-r.width/2)*.15).toFixed(1)+'px '+((e.clientY-r.top-r.height/2)*.25).toFixed(1)+'px'; });
      b.addEventListener('pointerleave', function(){ b.style.translate = ''; });
    });
    /* sticker cards tilt toward the pointer */
    document.querySelectorAll('.card .sticker, .pdp-shot').forEach(function(st){
      var host = st.closest('.card') || st;
      host.addEventListener('pointermove', function(e){ var r = st.getBoundingClientRect(); var x = (e.clientX-r.left)/r.width-.5, y = (e.clientY-r.top)/r.height-.5;
        st.style.setProperty('--rx', (-y*8).toFixed(2)+'deg'); st.style.setProperty('--ry', (x*10).toFixed(2)+'deg'); });
      host.addEventListener('pointerleave', function(){ st.style.removeProperty('--rx'); st.style.removeProperty('--ry'); });
    });
  }

  if (reduce || !('IntersectionObserver' in window)) return;

  /* count-ups */
  var cio = new IntersectionObserver(function(es){ es.forEach(function(e){
    if (!e.isIntersecting) return; cio.unobserve(e.target);
    var el = e.target, to = parseFloat(el.dataset.count), dec = +el.dataset.dec || 0, unit = el.dataset.unit || '', t0 = performance.now(), dur = 1200;
    (function step(t){ var k = Math.min(1,(t-t0)/dur), v = to * (1 - Math.pow(1-k,3));
      el.textContent = v.toFixed(dec) + unit; if (k < 1) requestAnimationFrame(step); else { el.textContent = to.toFixed(dec)+unit; el.classList.add('bump'); } })(t0);
  }); }, {threshold:.6});
  document.querySelectorAll('[data-count]').forEach(function(el){ cio.observe(el); });

  /* staggered reveals */
  root.classList.add('js-reveal');
  var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, {rootMargin:'0px 0px -10% 0px'});
  var groups = '.cards, .ing-row, .extras, .steps, .faq-list, .ways, .ing-list, .use-grid, .other-list, .pdp-nums, .thumbs, .foot-grid';
  document.querySelectorAll(groups).forEach(function(g){
    [].forEach.call(g.children, function(c, i){ c.classList.add('rv'); c.style.setProperty('--d', Math.min(i,8)*90 + 'ms'); io.observe(c); });
  });
  document.querySelectorAll('.sec-head, .life-media, .close-in, .split > *, .banner, .slider, .life-copy, .roots > *, .promise, .form, .form-intro').forEach(function(el){
    if (el.classList.contains('rv')) return; el.classList.add('rv'); io.observe(el);
  });
  /* re-run for content the product template re-renders */
  window.addEventListener('hashchange', function(){ setTimeout(function(){
    document.querySelectorAll('.pdp-nums, .thumbs, .ing-list, .use-grid, .other-list').forEach(function(g){
      [].forEach.call(g.children, function(c, i){ if (c.classList.contains('rv')) return; c.classList.add('rv'); c.style.setProperty('--d', Math.min(i,8)*70+'ms'); io.observe(c); });
    });
  }, 30); });
};

window.SFmotion(window.SF_REDUCE);
if (window.SF_REDUCE) document.querySelectorAll('video').forEach(function(v){ v.pause(); v.removeAttribute('autoplay'); });
