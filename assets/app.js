/* StraightFrwd — catalogue site. No cart, no prices: this site shows the range and
   sends people to a retailer or a distributor form. */

const CHEV = (c, h) => `<svg class="chev" width="${h*1.55}" height="${h}" viewBox="0 0 62 40" fill="${c}" aria-hidden="true">
  <path d="M0 0h18l20 20-20 20H0l20-20z"/><path d="M24 0h18l20 20-20 20H24l20-20z"/></svg>`;

function logo(size, color, tagline){
  const h = size === 'lg' ? 34 : 17;
  return `<a href="index.html" class="logo ${size==='lg'?'lg':''}" style="color:${color}">
    <b>STRAIGHT</b>
    <span class="r2"><b>FRW</b>${CHEV(color,h)}${tagline?`<small>Nutrition,<br>Made Easy</small>`:''}</span>
  </a>`;
}

/* --- the catalogue, taken off the packaging artwork --- */
const PROTEIN = [
  {id:'choc',  name:'Chocolate', cls:'pk-choc',  shot:'hero-shake',  tag:'',
   note:'Dark and not sweet. The one most people start on.'},
  {id:'mango', name:'Mango',     cls:'pk-mango', shot:'mango-shake', tag:'',
   note:'Tastes closer to a lassi than a supplement.'},
  {id:'kulfi', name:'Kulfi',     cls:'pk-kulfi', shot:'kulfi-shake', tag:'New',
   note:'Cardamom and pistachio. Made for people who find chocolate boring.'},
];
const ENERGY = [
  {id:'kahwa',  name:'Kashmiri Kahwa', cls:'pk-kahwa',  shot:'energy-kahwa',  tag:'',
   note:'Saffron and almond, the way it is made up north.'},
  {id:'ginger', name:'Ginger',         cls:'pk-ginger', shot:'energy-ginger', tag:'',
   note:'Sharp and warming. For mornings that started badly.'},
  {id:'tulsi',  name:'Tulsi',          cls:'pk-tulsi',  shot:'energy-tulsi',  tag:'New',
   note:'Holy basil. Earthy, and the least sweet of the four.'},
  {id:'lemon',  name:'Lemon',          cls:'pk-lemon',  shot:'energy-lemon',  tag:'',
   note:'Plain and clean. The afternoon one.'},
];
const ALL = [...PROTEIN, ...ENERGY];
const isProtein = id => PROTEIN.some(p => p.id === id);

/* --- CSS-drawn pack stand-in, so pack colours match the artwork exactly --- */
function pack(p, opts={}){
  const sachet = opts.sachet ?? !isProtein(p.id);
  const mini = opts.mini;
  const qty = opts.qty ?? (sachet ? 'Net qty : 1 g' : 'Net qty : 1 kg');
  return `<div class="pack ${p.cls} ${sachet?'sachet':''} ${mini?'mini':''}">
    <div class="band">
      <span class="logo" style="color:inherit">
        <b>STRAIGHT</b>
        <span class="r2"><b>FRW</b>${CHEV('currentColor', sachet?12:15)}<small>Nutrition,<br>Made Easy</small></span>
      </span>
    </div>
    <div class="body">
      <div class="kind">${sachet ? 'Energy Drink' : 'Daily<br>Protein'}</div>
      <div class="flav">${p.name}</div>
      <div class="qty">${qty}</div>
    </div>
  </div>`;
}

/* --- packshot: the pack rendered as a 3D solid on a studio ground --- */
function packshot(p, opts={}){
  const sachet = opts.sachet ?? !isProtein(p.id);
  return `<div class="shot3d ${p.cls} ${opts.small?'sm':''} ${opts.cls||''}">
    <div class="floor"></div>
    <div class="box ${p.cls} ${sachet?'pouch':''}">
      <div class="f top"></div>
      <div class="f side"></div>
      <div class="f front">${pack(p,{sachet})}</div>
    </div>
  </div>`;
}

/* --- catalogue card --- */
function card(p){
  const sachet = !isProtein(p.id);
  return `<a class="card" href="product.html#${p.id}">
    ${packshot(p,{small:true})}
    <span class="pill" style="align-self:flex-start;margin-bottom:10px;${p.tag?'':'visibility:hidden'}">${p.tag||'–'}</span>
    <h3>${p.name}</h3>
    <div class="sub">${sachet ? '1 g sachet · Energy Drink' : '50 g sachet &amp; 1 kg · Daily Protein'}</div>
    <p class="note">${p.note}</p>
    <span class="more">View details <span aria-hidden="true">→</span></span>
  </a>`;
}

/* --- where to buy (placeholder destinations until the listings exist) --- */
const RETAILERS = ['Amazon','Flipkart','Blinkit','Zepto','Swiggy Instamart'];
const buyRow = () => RETAILERS.map(r =>
  `<a class="retailer" href="#" onclick="event.preventDefault();toast('${r} listing not linked yet')">${r}</a>`).join('');

function toast(m){
  const t = document.getElementById('toast'); if(!t) return;
  t.textContent = m; t.classList.add('on');
  clearTimeout(t._); t._ = setTimeout(()=>t.classList.remove('on'), 2200);
}

/* --- shared chrome --- */
function chrome(page){
  const nav = [['index.html','Home'],['products.html','Products'],['science.html',"What's Inside"],
               ['about.html','About'],['distributors.html','Distributors'],['contact.html','Contact']];
  document.body.insertAdjacentHTML('afterbegin', `
  <div class="announce">Nutrition, Made Easy &nbsp;·&nbsp; <b>Distributor enquiries open</b></div>
  <header class="site"><div class="wrap bar">
    ${logo('', 'var(--brown)', false)}
    <nav>${nav.map(([h,l])=>`<a href="${h}" ${h===page?'aria-current="page"':''}>${l}</a>`).join('')}</nav>
    <span class="sp"></span>
    <a class="btn sm" href="products.html">See the range</a>
  </div></header>`);

  document.body.insertAdjacentHTML('beforeend', `
  <footer class="site"><div class="wrap">
    <div class="cols">
      <div>${logo('','#fff',true)}
        <p style="opacity:.75;font-size:15px;max-width:34ch;margin-top:18px">Protein and energy mixes with the label written in words you already know. Made in Sirmaur, packed in Delhi.</p>
      </div>
      <div><h4>Products</h4><a href="products.html">Daily Protein</a><a href="products.html">Energy Drinks</a><a href="science.html">What's inside</a></div>
      <div><h4>Company</h4><a href="about.html">Our story</a><a href="distributors.html">Become a distributor</a><a href="contact.html">Contact</a></div>
      <div><h4>Talk to us</h4>
        <p style="opacity:.75;font-size:14.5px;margin:0 0 10px">+91 99797 04254<br>writetous@ayushkanutrition.com</p>
        <p style="opacity:.6;font-size:13.5px;margin:0">2-A/3 S/F Front Side, Asafali Road,<br>Turkman Gate, Darya Ganj,<br>New Delhi 110002</p>
      </div>
    </div>
    <div class="legal"><span>© 2026 Shiv Protein Private Limited</span>
      <span>FSSAI Lic. 12200000000000 · Mfg. Lic. RJ/NUT/2026/001</span></div>
  </div></footer>
  <div class="toast" id="toast"></div>`);
}
