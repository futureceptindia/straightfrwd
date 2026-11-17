/* StraightFrwd v6: shared behaviour + catalogue data */
var SF = {
  protein: ['choc','mango','kulfi'],
  items: {
    choc:  {name:'Chocolate', kind:'Daily Protein', ill:'i-cocoa', col:'c-brown', accent:'#E0822F',
            note:'Dark cocoa, barely sweet.', shot:'pack-choc.jpg',
            gallery:[['pack-choc.jpg','Chocolate sachet and box'],['lsp-choc-hand.jpg','Holding a Chocolate sachet by a glass of shake'],['life-choc.jpg','Chocolate shake beside the pack on a kitchen counter'],['hero-shake.jpg','A glass of chocolate shake'],['flat-choc.jpg','Chocolate sachet and box on orange']]},
    mango: {name:'Mango', kind:'Daily Protein', ill:'i-mango', col:'c-brown', accent:'#1F4A33',
            note:'Ripe mango, thick like a lassi.', shot:'pack-mango-clean.jpg', pouch:'pack-pouch.jpg',
            gallery:[['pack-mango-clean.jpg','Mango sachet and box'],['pack-pouch.jpg','Mango 1 kg pouch'],['life-pouch.jpg','Mango 1 kg pouch on a kitchen counter'],['mango-shake.jpg','A glass of mango shake with fresh mango']]},
    kulfi: {name:'Kulfi', kind:'Daily Protein', ill:'i-cardamom', col:'c-brown', accent:'#AE5D40',
            note:'Cardamom and pistachio.', shot:'pack-kulfi-clean.jpg',
            gallery:[['pack-kulfi-clean.jpg','Kulfi sachet and box'],['kulfi-shake.jpg','A kulfi shake with pistachios'],['mixing.jpg','Stirring a shake into water']]},
    kahwa: {name:'Kashmiri Kahwa', kind:'Herbal Drink', ill:'i-saffron', col:'c-brown', accent:'#8a2f3c',
            note:'Saffron and almond.', shot:'sachet-kahwa.jpg',
            gallery:[['sachet-kahwa.jpg','Kashmiri Kahwa sachet'],['energy-kahwa.jpg','A cup of kahwa with saffron and cinnamon'],['lsp-herbal.jpg','Kahwa sachet beside a cup of tea']]},
    ginger:{name:'Ginger', kind:'Herbal Drink', ill:'i-ginger', col:'c-brown', accent:'#c08a1e',
            note:'Sharp and warming.', shot:'sachet-ginger.jpg',
            gallery:[['sachet-ginger.jpg','Ginger sachet'],['energy-ginger.jpg','A cup of ginger tea with fresh ginger']]},
    tulsi: {name:'Tulsi', kind:'Herbal Drink', ill:'i-tulsi', col:'c-green', accent:'#1F4A33',
            note:'Holy basil, earthy.', shot:'sachet-tulsi.jpg',
            gallery:[['sachet-tulsi.jpg','Tulsi sachet'],['energy-tulsi.jpg','A cup of tulsi tea with fresh leaves']]},
    lemon: {name:'Lemon', kind:'Herbal Drink', ill:'i-lemon', col:'c-green', accent:'#1F4A33',
            note:'Plain and clean.', shot:'sachet-lemon.jpg',
            gallery:[['sachet-lemon.jpg','Lemon sachet'],['energy-lemon.jpg','A cup of lemon tea with a cut lemon']]}
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
            '<figure class="sticker pdp-shot" style="--tilt:-2deg"><img id="pdp-img" src="assets/img/'+p.shot+'" alt="'+p.name+' '+p.kind+' pack" width="1200" height="1200"></figure>'+
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

      pdp.querySelectorAll('.thumb').forEach(function(t){
        t.addEventListener('click', function(){
          pdp.querySelectorAll('.thumb').forEach(function(x){x.classList.remove('on');}); t.classList.add('on');
          var im = document.getElementById('pdp-img'); im.src = t.dataset.src; im.alt = t.dataset.alt;
        });
      });
      pdp.querySelectorAll('.size').forEach(function(b){
        b.addEventListener('click', function(){
          pdp.querySelectorAll('.size').forEach(function(x){x.classList.remove('on'); x.setAttribute('aria-pressed','false');});
          b.classList.add('on'); b.setAttribute('aria-pressed','true');
          var pouch = b.dataset.size === 'pouch', im = document.getElementById('pdp-img');
          if (pouch && p.pouch) { im.src = 'assets/img/'+p.pouch; im.alt = p.name+' 1 kg pouch'; }
          else { im.src = 'assets/img/'+p.shot; im.alt = p.name+' '+p.kind+' pack'; }
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

  if (reduce) { document.querySelectorAll('video').forEach(function(v){ v.pause(); v.removeAttribute('autoplay'); }); return; }
  if (!('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('js-reveal');
  var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }); }, {rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.sec-head, .ing, .card, .steps li, .extra, .life-media, details, .close-in, .way, .split > *').forEach(function(el, i){
    el.classList.add('rv'); el.style.setProperty('--d', (i % 4) * 70 + 'ms'); io.observe(el);
  });
})();
