/* StraightFrwd — catalogue site. No cart, no prices: this site shows the range and
   sends people to a retailer or a distributor form. */

// Real lockup, extracted as vector from SF_Guidelines.pdf (assets/logo.svg).
// fill="currentColor" so one file serves both the light and the dark ground.
const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="327.61 254.69 186.48 86.03" fill="currentColor" fill-rule="nonzero" role="img" aria-label="StraightFrwd">
<path d="M 417.984375 327.796875 L 417.984375 313.894531 L 425.636719 320.847656 Z M 409.042969 324.933594 L 409.042969 340.324219 L 417.984375 340.324219 L 434.949219 324.148438 L 434.949219 317.542969 L 417.984375 301.371094 L 409.042969 301.371094 Z M 443.890625 327.796875 L 443.890625 313.894531 L 451.542969 320.847656 Z M 434.949219 324.933594 L 434.949219 340.324219 L 443.890625 340.324219 L 460.855469 324.148438 L 460.855469 317.542969 L 443.890625 301.371094 L 434.949219 301.371094 Z M 399.722656 301.371094 L 408.007812 301.371094 L 401.265625 340.324219 L 392.734375 340.324219 L 389.890625 321.28125 L 389.644531 321.28125 L 386.800781 340.324219 L 378.265625 340.324219 L 371.527344 301.371094 L 380.183594 301.371094 L 383.273438 321.339844 L 383.523438 321.339844 L 386.613281 301.371094 L 393.292969 301.371094 L 396.382812 321.339844 L 396.628906 321.339844 Z M 358.105469 319.054688 C 361.753906 319.054688 363.175781 317.878906 363.175781 313.921875 C 363.175781 310.398438 361.753906 308.667969 358.105469 308.667969 L 357.242188 308.667969 L 357.242188 319.054688 Z M 363.238281 340.324219 C 362.742188 338.839844 362.621094 336.550781 362.371094 331.851562 C 362.1875 328.140625 361.261719 326.226562 358.414062 326.226562 L 357.242188 326.226562 L 357.242188 340.324219 L 348.277344 340.324219 L 348.277344 301.371094 L 359.46875 301.371094 C 368.183594 301.371094 372.078125 305.945312 372.078125 312.871094 C 372.078125 318.992188 369.296875 322.023438 365.339844 322.703125 C 369.421875 323.628906 370.78125 326.535156 371.089844 331.417969 C 371.398438 336.550781 371.339844 338.527344 372.203125 340.324219 Z M 328.007812 340.324219 L 328.007812 301.371094 L 346.988281 301.371094 L 346.988281 308.851562 L 337.09375 308.851562 L 337.09375 317.878906 L 344.328125 317.878906 L 344.328125 325.238281 L 337.09375 325.238281 L 337.09375 340.324219 Z M 335.980469 281.371094 L 335.980469 282.917969 C 335.980469 285.824219 337.21875 287.742188 339.628906 287.742188 C 341.730469 287.742188 342.84375 286.566406 342.84375 284.402344 C 342.84375 282.175781 341.421875 281.3125 339.074219 280.011719 L 335.796875 278.21875 C 331.652344 275.929688 328.066406 273.148438 328.066406 266.472656 C 328.066406 259.546875 332.582031 255.09375 339.257812 255.09375 C 346.367188 255.09375 350.449219 259.175781 350.449219 267.152344 L 350.449219 268.699219 L 342.472656 268.699219 L 342.472656 267.089844 C 342.472656 263.9375 341.484375 262.390625 339.257812 262.390625 C 337.34375 262.390625 336.351562 263.75 336.351562 265.855469 C 336.351562 267.832031 337.464844 269.070312 339.320312 270.058594 L 342.96875 272.035156 C 348.101562 274.820312 351.191406 277.539062 351.191406 283.597656 C 351.191406 291.140625 346.554688 295.035156 339.628906 295.035156 C 332.703125 295.035156 328.007812 291.203125 328.007812 282.855469 L 328.007812 281.371094 Z M 497.058594 294.542969 L 497.058594 263.070312 L 489.636719 263.070312 L 489.636719 255.589844 L 513.6875 255.589844 L 513.6875 263.070312 L 506.085938 263.070312 L 506.085938 294.542969 Z M 463.957031 294.542969 L 463.957031 255.589844 L 473.046875 255.589844 L 473.046875 271.046875 L 479.476562 271.046875 L 479.476562 255.589844 L 488.566406 255.589844 L 488.566406 294.542969 L 479.476562 294.542969 L 479.476562 278.464844 L 473.046875 278.464844 L 473.046875 294.542969 Z M 456.351562 294.542969 L 455.671875 291.078125 C 454.679688 293.738281 451.898438 295.035156 448.808594 295.035156 C 441.078125 295.035156 437.800781 288.914062 437.800781 277.722656 L 437.800781 272.40625 C 437.800781 261.21875 441.449219 255.09375 450.351562 255.09375 C 459.195312 255.09375 462.410156 260.660156 462.410156 269.75 L 462.410156 270.738281 L 453.566406 270.738281 L 453.566406 268.140625 C 453.566406 264.679688 453.011719 262.453125 450.351562 262.453125 C 447.695312 262.453125 447.136719 264.679688 447.136719 268.140625 L 447.136719 281.804688 C 447.136719 285.269531 447.878906 287.492188 450.476562 287.492188 C 453.136719 287.492188 453.816406 285.269531 453.816406 281.804688 L 453.816406 281.25 L 450.972656 281.25 L 450.972656 274.449219 L 462.410156 274.449219 L 462.410156 294.542969 Z M 436.132812 294.542969 L 427.042969 294.542969 L 427.042969 255.589844 L 436.132812 255.589844 Z M 410.097656 280.753906 L 415.230469 280.753906 L 412.878906 267.894531 L 412.632812 267.894531 Z M 418.382812 255.589844 L 426.789062 294.542969 L 417.765625 294.542969 L 416.464844 287.617188 L 408.800781 287.617188 L 407.4375 294.542969 L 399.152344 294.542969 L 407.5625 255.589844 Z M 385.394531 273.273438 C 389.039062 273.273438 390.464844 272.097656 390.464844 268.140625 C 390.464844 264.617188 389.039062 262.886719 385.394531 262.886719 L 384.527344 262.886719 L 384.527344 273.273438 Z M 390.523438 294.542969 C 390.03125 293.058594 389.90625 290.769531 389.660156 286.070312 C 389.472656 282.359375 388.546875 280.445312 385.703125 280.445312 L 384.527344 280.445312 L 384.527344 294.542969 L 375.5625 294.542969 L 375.5625 255.589844 L 386.753906 255.589844 C 395.472656 255.589844 399.367188 260.164062 399.367188 267.089844 C 399.367188 273.210938 396.585938 276.242188 392.628906 276.921875 C 396.707031 277.847656 398.066406 280.753906 398.378906 285.636719 C 398.6875 290.769531 398.625 292.75 399.488281 294.542969 Z M 357.835938 294.542969 L 357.835938 263.070312 L 350.417969 263.070312 L 350.417969 255.589844 L 374.46875 255.589844 L 374.46875 263.070312 L 366.863281 263.070312 L 366.863281 294.542969 Z M 357.835938 294.542969 "/>
</svg>`;

function logo(size, color, tagline){
  return `<a href="index.html" class="logo ${size==='lg'?'lg':''}" style="color:${color}" aria-label="StraightFrwd">
    <span class="mark">${LOGO_SVG}</span>${tagline?`<small>Nutrition,<br>Made Easy</small>`:''}
  </a>`;
}

/* --- the catalogue, taken off the packaging artwork --- */
const PROTEIN = [
  {id:'choc',  name:'Chocolate', cls:'pk-choc',  shot:'pack-choc',  real:true, sachet_g:50, tag:'', gallery:['pack-choc','lsp-choc-hand','slide-c-protein','slide-c-comp','slide-c-mix','slide-c-fibre','slide-nutrition','slide-c-allergen','slide-howto','lsp-morning'],
   note:'Dark cocoa, barely sweet, no chalk. The one most people start on and stay on.',
   gallery_lead:'pack-choc'},
  {id:'mango', name:'Mango',     cls:'pk-mango', shot:'pack-mango', real:true, sachet_g:30, tag:'', gallery:['pack-mango','lsp-mango-hand','slide-m-protein','slide-c-comp','slide-m-mix','slide-c-fibre','slide-nutrition','slide-c-allergen','slide-howto','lsp-mango'],
   note:'Ripe alphonso, thick enough to chew. Closer to a lassi than a supplement.',
   gallery_lead:'pack-mango'},
  {id:'kulfi', name:'Kulfi',     cls:'pk-kulfi', shot:'pack-kulfi', real:true, sachet_g:30, tag:'New', gallery:['pack-kulfi','lsp-kulfi-hand','slide-k-protein','slide-c-comp','slide-k-mix','slide-c-fibre','slide-nutrition','slide-c-allergen','slide-howto','lsp-kulfi'],
   note:'Cardamom, pistachio, a little bit of childhood. For people who find chocolate boring.',
   gallery_lead:'pack-kulfi'},
];

// One formulation across all three flavours — the approved label artwork carries an
// identical ingredient list and nutrition panel on every variant.
const COMPOSITION = [
  {name:'Soya protein isolate'},
  {name:'Pea protein'},
  {name:'Soy fat powder'},
  {name:'Maltodextrin'},
  {name:'Soya fibre'},
  {name:'Brown rice protein'},
  {name:'Vitamins, minerals, botanicals &amp; enzymes'},
];

const NOT_IN_IT = ['no added sugar','no added colour','no proprietary blends',
                   'no unnamed botanicals','no hidden asterisks'];

const LABEL = {
  serving: 50, perKg: 20,
  ingredients: "Soya Protein Isolate, Pea Protein, Soy Fat Powder [Soy Oil, Maltodextrin, Sodium Caseinate, Stabilizer (INS 340(ii)), Emulsifier (INS 471), Anti-oxidant (INS 304)], Maltodextrin, Soya Fiber, Brown Rice Protein, Nature Identical Flavouring Substances, FOS, Minerals, Garcinia Cambogia, Curcumin, Vitamins, Cissus Quadrangularis Extract, Digestive Enzyme (α-amylase, protease, lipase, cellulase and lactase), Sweeteners (INS 955 &amp; INS 950) Sucralose &amp; Acesulfame potassium.",
  allergen: "Contains soy. Manufactured in a facility which processes wheat, milk, oats and nuts.",
  claims: [
    '45 g protein per 100 g — 22.5 g in a 50 g serving',
    '8.8 g dietary fibre per 100 g, of which 2 g is FOS',
    'No added sugar — sweetened with sucralose and acesulfame potassium',
    'Digestive enzymes, vitamins and minerals in the mix',
    'Contains soy. Made in a facility that also handles wheat, milk, oats and nuts.'
  ],
  recommendedAs: 'Recommended as a one meal replacement.',
  notFor: 'Not to be used by pregnant, nursing and lactating women, children under 5, adolescents or the elderly, except when medically advised by a physician, certified dietitian or nutrition professional.',
  usage: '1 serving per day, or as directed by a physician, certified dietitian or nutritional professional. Not to exceed the recommended daily usage.',
  howTo: 'Add 50 g of powder to 250 mL of water and stir well until the powder has completely dissolved. Consume immediately after preparation.',
  disclaimer: 'The product is not intended to treat, cure, mitigate or prevent any specific disease, disorder or condition. For oral consumption only.',
};
const ENERGY = [
  {id:'kahwa',  name:'Kashmiri Kahwa', cls:'pk-kahwa',  shot:'sachet-kahwa',  real:true, gallery:['sachet-kahwa','energy-kahwa'],  tag:'',
   note:'Saffron and almond, the way it is made up north.'},
  {id:'ginger', name:'Ginger',         cls:'pk-ginger', shot:'sachet-ginger', real:true, gallery:['sachet-ginger','energy-ginger'], tag:'',
   note:'Sharp and warming. For mornings that started badly.'},
  {id:'tulsi',  name:'Tulsi',          cls:'pk-tulsi',  shot:'sachet-tulsi',  real:true, gallery:['sachet-tulsi','energy-tulsi'],  tag:'New',
   note:'Holy basil. Earthy, and the least sweet of the four.'},
  {id:'lemon',  name:'Lemon',          cls:'pk-lemon',  shot:'sachet-lemon',  real:true, gallery:['sachet-lemon','energy-lemon'],  tag:'',
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
        <span class="mark">${LOGO_SVG}</span><small>Nutrition,<br>Made Easy</small>
      </span>
      </span>
    </div>
    <div class="body">
      <div class="kind">${sachet ? 'Herbal Drink' : 'Daily<br>Protein'}</div>
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

/* full product name as it reads on the pack, without the brand */
function fullName(p){ return `${p.name} ${isProtein(p.id) ? 'Protein Powder' : 'Herbal Drink'}`; }

/* --- catalogue card --- */
function card(p){
  const sachet = !isProtein(p.id);
  return `<a class="card" href="product.html#${p.id}">
    ${p.real ? `<div class="shot"><img src="assets/img/${p.shot}.jpg" alt=""></div>` : packshot(p,{small:true})}
    <span class="pill" style="align-self:flex-start;margin-bottom:10px;${p.tag?'':'visibility:hidden'}">${p.tag||'–'}</span>
    <h3>${fullName(p)}</h3>
    <div class="sub">${sachet ? '1 g sachet' : `${p.sachet_g} g sachet &amp; 1 kg`}</div>
    <p class="note">${p.note}</p>
    <span class="more">View details</span>
  </a>`;
}

/* --- where to buy ---
   RETAILERS carries a url per platform. A platform with a url renders as a link;
   one without renders as a plain chip, so the page never tells a visitor that a
   listing is missing. Drop the real urls in as each one goes live. */
const RETAILERS = [
  {name:'Amazon',           url:''},
  {name:'Flipkart',         url:''},
  {name:'Blinkit',          url:''},
  {name:'Zepto',            url:''},
  {name:'Swiggy Instamart', url:''}
];
const buyRow = () => RETAILERS.map(r => r.url
  ? `<a class="retailer" href="${r.url}" target="_blank" rel="noopener">${r.name}</a>`
  : `<span class="retailer">${r.name}</span>`).join('');

function toast(m){
  const t = document.getElementById('toast'); if(!t) return;
  t.textContent = m; t.classList.add('on');
  clearTimeout(t._); t._ = setTimeout(()=>t.classList.remove('on'), 2200);
}

/* --- social icons (inline SVG, 24px grid) --- */
const SOCIAL_PATHS = {
  Instagram:'<path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.86s0 3.6-.07 4.86c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.86.07s-3.6 0-4.86-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.6 2.2 15.2 2.2 12s0-3.6.07-4.86c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.46 2.21 8.84 2.2 12 2.2Zm0 1.8c-3.14 0-3.5.01-4.74.07-.9.04-1.38.19-1.7.31-.43.17-.73.37-1.05.69-.32.32-.52.62-.69 1.05-.12.32-.27.8-.31 1.7C3.45 8.5 3.44 8.86 3.44 12s.01 3.5.07 4.74c.04.9.19 1.38.31 1.7.17.43.37.73.69 1.05.32.32.62.52 1.05.69.32.12.8.27 1.7.31 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.7-.31.43-.17.73-.37 1.05-.69.32-.32.52-.62.69-1.05.12-.32.27-.8.31-1.7.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.38-.31-1.7a2.8 2.8 0 0 0-.69-1.05 2.8 2.8 0 0 0-1.05-.69c-.32-.12-.8-.27-1.7-.31C15.5 4.01 15.14 4 12 4Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 8.08a3.18 3.18 0 1 0 0-6.36 3.18 3.18 0 0 0 0 6.36Zm6.24-8.28a1.14 1.14 0 1 1-2.28 0 1.14 1.14 0 0 1 2.28 0Z"/>',
  Facebook:'<path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z"/>',
  YouTube:'<path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.42-4.81ZM10 15.02V8.98L15.2 12 10 15.02Z"/>',
  LinkedIn:'<path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.2 8.98h3.47V21H3.2V8.98Zm5.65 0h3.33v1.64h.05c.46-.88 1.6-1.8 3.29-1.8 3.52 0 4.17 2.32 4.17 5.33V21h-3.47v-5.33c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21H8.85V8.98Z"/>',
  X:'<path d="M17.53 3h3.04l-6.64 7.59L21.75 21h-6.13l-4.8-6.28L5.32 21H2.28l7.1-8.12L2.5 3h6.28l4.34 5.74L17.53 3Zm-1.07 16.17h1.69L7.63 4.74H5.82l10.64 14.43Z"/>',
};
const SOCIALS = Object.entries(SOCIAL_PATHS).map(([name, d]) =>
  `<a class="social" href="#" aria-label="${name}" title="${name}"
      onclick="event.preventDefault();toast('${name} profile not linked yet')">
     <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">${d}</svg>
   </a>`).join('');

/* --- shared chrome --- */
function chrome(page){
  const nav = [['index.html','Home'],['products.html','Products'],
               ['about-v3.html','About'],['contact.html','Contact']];
  document.body.insertAdjacentHTML('afterbegin', `
  <div class="announce">Nutrition, Made Easy &nbsp;·&nbsp; <b>Plant protein &amp; herbal mixes</b></div>
  <header class="site"><div class="wrap bar">
    ${logo('', 'var(--brown)', false)}
    <nav id="siteNav">${nav.map(([h,l])=>{
      const cur = h===page?'aria-current="page"':'';
      if(h!=='products.html') return `<a href="${h}" ${cur}>${l}</a>`;
      return `<div class="navdd"><a href="${h}" ${cur} aria-haspopup="true">${l}<i class="caret" aria-hidden="true"></i></a>
        <div class="navdd-menu"><a href="products.html#protein">Protein</a><a href="products.html#herbal">Herbal Drinks</a></div></div>`;
    }).join('')}</nav>
    <span class="sp"></span>
    <a class="btn sm" href="products.html">See the range</a>
    <button class="navtoggle" id="navToggle" aria-label="Open menu" aria-expanded="false" aria-controls="siteNav">
      <span></span><span></span><span></span>
    </button>
  </div></header>
  <div class="navscrim" id="navScrim" hidden></div>`);

  /* mobile sidebar */
  (function(){
    const t=document.getElementById('navToggle'), sc=document.getElementById('navScrim');
    if(!t) return;
    const set = open => {
      document.body.classList.toggle('navopen', open);
      t.setAttribute('aria-expanded', String(open));
      t.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      sc.hidden = !open;
    };
    t.addEventListener('click', () => set(!document.body.classList.contains('navopen')));
    sc.addEventListener('click', () => set(false));
    document.addEventListener('keydown', e => { if(e.key === 'Escape') set(false); });
    document.querySelectorAll('#siteNav a').forEach(a => a.addEventListener('click', () => set(false)));
    addEventListener('resize', () => { if(innerWidth > 820) set(false); });
  })();

  document.body.insertAdjacentHTML('beforeend', `
  <footer class="site"><div class="wrap">
    <div class="cols">
      <div class="brandcol">
        ${logo('', '#fff', false)}
        <p>Protein and herbal mixes from Shiv Protein Private Limited, part of Shiv Group. Over twenty years with soya.</p>
        <div class="socials">${SOCIALS}</div>
      </div>
      <div><h4>Products</h4><a href="products.html">Daily Protein</a><a href="products.html">Herbal Drinks</a><a href="science.html">What's Inside</a></div>
      <div><h4>Company</h4><a href="about.html">Our Story</a><a href="faq.html">FAQs</a><a href="contact.html">Contact</a></div>
      <div><h4>Talk to us</h4>
        <a href="tel:+919672227666" class="plain big">+91 96722 27666</a>
        <a href="https://wa.me/919057119000" class="plain big">WhatsApp 90571 19000</a>
        <a href="mailto:care@straightfrwd.com" class="plain big">care@straightfrwd.com</a>
        <p class="addr">2-A/3 S/F Front Side, Asafali Road,<br>Turkman Gate, Darya Ganj,<br>New Delhi 110002</p>
      </div>
    </div>
    <div class="legal">
      <span>&copy; 2026 Shiv Protein Private Limited</span>
      <span>Marketed by Shiv Protein Pvt Ltd</span>
    </div>
  </div></footer>
  <div class="toast" id="toast"></div>`);
}
