/* StraightFrwd v3. Catalogue only: no cart, no prices. Facts come off the approved pack artwork. */
document.documentElement.classList.add('js');

const ARROW = '<svg viewBox="394.69 277.69 52.61 39.75" fill="currentColor" aria-hidden="true"><path d="M429.94 304.52v-13.9l7.65 6.95zM429.94 278.09h-8.94v38.95h8.94l16.96-16.17v-6.61z"/><path d="M404.03 304.52v-13.9l7.65 6.95zM404.03 278.09h-8.94v38.95h8.94l16.97-16.17v-6.61z"/></svg>';

const PROTEIN = [
  {id:'choc',  name:'Chocolate', shot:'pack-choc',  life:'lsp-choc-hand',  field:'f-brown',
   gallery:['pack-choc','lsp-choc-hand','lsp-morning','slide-c-mix'],
   note:'Dark cocoa, barely sweet. The one most people start on and stay on.'},
  {id:'mango', name:'Mango',     shot:'pack-mango', life:'lsp-mango-hand', field:'f-orange',
   gallery:['pack-mango','pack-pouch','lsp-mango-hand','lsp-mango'],
   note:'Ripe mango, thick enough to feel like a lassi.'},
  {id:'kulfi', name:'Kulfi',     shot:'pack-kulfi', life:'lsp-kulfi-hand', field:'f-tan',
   gallery:['pack-kulfi','lsp-kulfi-hand','lsp-kulfi','slide-k-mix'],
   note:'Cardamom and pistachio. For people who find chocolate boring.'},
];
const HERBAL = [
  {id:'kahwa',  name:'Kashmiri Kahwa', shot:'sachet-kahwa',  life:'energy-kahwa',  field:'f-terra',
   gallery:['sachet-kahwa','energy-kahwa'], note:'Saffron and almond, the way it is made up north.'},
  {id:'ginger', name:'Ginger',         shot:'sachet-ginger', life:'energy-ginger', field:'f-orange',
   gallery:['sachet-ginger','energy-ginger'], note:'Sharp and warming. For mornings that started badly.'},
  {id:'tulsi',  name:'Tulsi',          shot:'sachet-tulsi',  life:'energy-tulsi',  field:'f-green',
   gallery:['sachet-tulsi','energy-tulsi'], note:'Holy basil. Earthy, and the least sweet of the four.'},
  {id:'lemon',  name:'Lemon',          shot:'sachet-lemon',  life:'energy-lemon',  field:'f-tan',
   gallery:['sachet-lemon','energy-lemon'], note:'Plain and clean. The afternoon one.'},
];
const ALL = [...PROTEIN, ...HERBAL];
const isProtein = id => PROTEIN.some(p => p.id === id);
const kind = p => isProtein(p.id) ? 'Daily Protein' : 'Herbal Drink';

/* The back of the pack, grouped so a person can read it. Amounts only where the label states them. */
const LABEL = [
  {k:'Protein', amt:'45 g per 100 g',
   items:['Soya protein isolate','Pea protein','Brown rice protein'],
   why:'Three plant proteins. A 50 g serving gives you 22.5 g of protein.'},
  {k:'Creamy base', amt:'',
   items:['Soy fat powder: soy oil, maltodextrin, sodium caseinate','Stabiliser INS 340(ii)','Emulsifier INS 471','Antioxidant INS 304'],
   why:'This is why it mixes creamy in plain water. Sodium caseinate comes from milk, so the shake is not dairy-free.'},
  {k:'Fibre', amt:'8.8 g per 100 g',
   items:['Soya fibre','FOS (2 g per 100 g)'],
   why:'4.4 g of dietary fibre in a serving.'},
  {k:'Carbohydrate', amt:'',
   items:['Maltodextrin'],
   why:'Body for the shake. A full 50 g serving comes to 200 kcal.'},
  {k:'Sweetness', amt:'0 g added sugar',
   items:['Sucralose (INS 955)','Acesulfame potassium (INS 950)','Nature identical flavouring'],
   why:'Sweetened without sugar. Both sweeteners are declared on the front of the pack too.'},
  {k:'Vitamins and minerals', amt:'25+',
   items:['Each one listed on the back with its % of daily value'],
   why:'Listed one by one, against ICMR 2020 reference values.'},
  {k:'Botanicals', amt:'',
   items:['Garcinia cambogia (833.33 mg per 100 g, 60% HCA)','Cissus quadrangularis extract (150 mg per 100 g)','Curcumin'],
   why:'Named, with the amount, instead of a "proprietary blend".'},
  {k:'Digestive enzymes', amt:'',
   items:['α-amylase','Protease','Lipase','Cellulase','Lactase'],
   why:'Five enzymes, each named on the pack.'},
  {k:'Allergens', amt:'',
   items:['Contains soy','Made in a facility that also processes wheat, milk, oats and nuts'],
   why:'Printed on every pack, in the same words.'},
];

function header(page){
  const links = [['products.html','Products'],['label.html','The label'],['about.html','About'],['contact.html','Contact']];
  document.body.insertAdjacentHTML('afterbegin', `
  <a class="skip" href="#main">Skip to content</a>
  <header class="top" id="top">
    <a class="mark" href="index.html" aria-label="StraightFrwd home">${window.LOGO_SVG}</a>
    <nav id="nav">${links.map(([h,l])=>`<a href="${h}"${h===page?' aria-current="page"':''}>${l}</a>`).join('')}</nav>
    <a class="btn" href="products.html"><span>See Our Products</span>${ARROW}</a>
    <button class="menu" aria-expanded="false" aria-controls="nav">Menu</button>
  </header>`);
  const top = document.getElementById('top');
  top.querySelector('.menu').onclick = e => {
    const o = top.classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', o);
    e.currentTarget.textContent = o ? 'Close' : 'Menu';
  };
}

function footer(){
  document.body.insertAdjacentHTML('beforeend', `
  <footer class="foot" data-ink="light">
    <div class="big" aria-hidden="true">${window.LOGO_SVG}</div>
    <div class="cols">
      <div><b>Daily Protein</b>${PROTEIN.map(p=>`<a href="product.html#${p.id}">${p.name}</a>`).join('')}</div>
      <div><b>Herbal Drinks</b>${HERBAL.map(p=>`<a href="product.html#${p.id}">${p.name}</a>`).join('')}</div>
      <div><b>Read</b><a href="label.html">The label</a><a href="about.html">About</a><a href="index.html#faq">Questions</a></div>
      <div><b>Talk to us</b><a href="contact.html">Contact</a><a href="contact.html#trade">Trade and bulk</a></div>
      <div><b>Customer care</b><a href="tel:+919672227666">+91 96722 27666</a><a href="https://wa.me/919057119000">WhatsApp 90571 19000</a><a href="mailto:care@straightfrwd.com">care@straightfrwd.com</a></div>
    </div>
    <div class="last"><span>© 2026 Shiv Protein Private Limited. StraightFrwd is part of Shiv Group.</span>
      <a class="btn small on-dark" href="#top">Back to top</a></div>
  </footer>`);
}

/* the fixed header takes the ink of the field it sits over */
function inkFollow(){
  const top = document.getElementById('top');
  const set = () => {
    const fields = [...document.querySelectorAll('main [data-ink], footer[data-ink]')];
    const y = top.offsetHeight / 2;
    const f = fields.find(el => { const r = el.getBoundingClientRect(); return r.top <= y && r.bottom > y; });
    if(!f) return;
    top.dataset.ink = f.dataset.ink;
    top.style.setProperty('--top-bg', getComputedStyle(f).backgroundColor);
  };
  // tuck the header away while reading down, bring it back on the way up
  let last = scrollY;
  const hide = () => { const y = scrollY; top.classList.toggle('away', y > last && y > 300 && !top.classList.contains('open')); last = y; };
  addEventListener('scroll', () => { set(); hide(); }, {passive:true}); addEventListener('resize', set); set();
}

function reveal(){
  const els = document.querySelectorAll('.rv');
  if(!('IntersectionObserver' in window)){ els.forEach(e=>e.classList.add('in')); return; }
  const io = new IntersectionObserver(es => es.forEach(e => {
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  }), {rootMargin:'0px 0px -10% 0px'});
  els.forEach(e => {
    const sibs = [...e.parentElement.children].filter(c=>c.classList.contains('rv'));
    e.style.transitionDelay = (sibs.indexOf(e) * 80) + 'ms';
    // anything already on screen shows straight away; the rest waits for the observer
    if(e.getBoundingClientRect().top < innerHeight) requestAnimationFrame(()=>e.classList.add('in'));
    else io.observe(e);
  });
}

function boot(page){
  header(page); footer(); inkFollow(); reveal();
  document.head.insertAdjacentHTML('beforeend','<link rel="icon" type="image/svg+xml" href="assets/favicon.svg"><link rel="apple-touch-icon" href="assets/favicon-180.png">');
}
