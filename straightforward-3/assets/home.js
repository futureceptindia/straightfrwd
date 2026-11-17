/* Home-page behaviour: hero reel, step accordion, range list, the label reader, pouch planner. */

function labelReader(listEl, rawEl){
  listEl.innerHTML = LABEL.map((g,i)=>`
    <details${i===0?' open':''} data-k="${i}">
      <summary>${g.k}${g.amt?`<em>${g.amt}</em>`:''}<i aria-hidden="true">+</i></summary>
      <div class="in"><ul>${g.items.map(t=>`<li>${t}</li>`).join('')}</ul><p>${g.why}</p></div>
    </details>`).join('');
  if(!rawEl) return;
  // the raw line, with each group's words wrapped so opening a group lights them up
  const RAW = 'Soya Protein Isolate, Pea Protein, Soy Fat Powder [Soy Oil, Maltodextrin, Sodium Caseinate, Stabilizer (INS 340(ii)), Emulsifier (INS 471), Anti-oxidant (INS 304)], Maltodextrin, Soya Fiber, Brown Rice Protein, Nature Identical Flavouring Substances, FOS, Minerals, Garcinia Cambogia, Curcumin, Vitamins, Cissus Quadrangularis Extract, Digestive Enzyme (α-amylase, protease, lipase, cellulase and lactase), Sweeteners (INS 955 & INS 950) Sucralose & Acesulfame potassium.';
  const MAP = [
    ['Soya Protein Isolate',0],['Pea Protein',0],['Brown Rice Protein',0],
    ['Soy Fat Powder [Soy Oil, Maltodextrin, Sodium Caseinate, Stabilizer (INS 340(ii)), Emulsifier (INS 471), Anti-oxidant (INS 304)]',1],
    ['Soya Fiber',2],['FOS',2],
    ['Maltodextrin, Soya',3],
    ['Nature Identical Flavouring Substances',4],['Sweeteners (INS 955 & INS 950) Sucralose & Acesulfame potassium',4],
    ['Minerals',5],['Vitamins',5],
    ['Garcinia Cambogia',6],['Curcumin',6],['Cissus Quadrangularis Extract',6],
    ['Digestive Enzyme (α-amylase, protease, lipase, cellulase and lactase)',7],
  ];
  let html = RAW.replace(/&/g,'&amp;');
  MAP.forEach(([t,k])=>{
    const safe = t.replace(/&/g,'&amp;');
    if(t === 'Maltodextrin, Soya'){ html = html.replace('], Maltodextrin, Soya', `], <span data-g="3">Maltodextrin</span>, Soya`); return; }
    html = html.replace(safe, `<span data-g="${k}">${safe}</span>`);
  });
  rawEl.innerHTML = html;
  const light = () => {
    const open = [...listEl.querySelectorAll('details[open]')].map(d=>d.dataset.k);
    rawEl.querySelectorAll('span[data-g]').forEach(s=>{
      const on = open.includes(s.dataset.g);
      if(on && s.parentElement.tagName!=='MARK'){ const m=document.createElement('mark'); s.replaceWith(m); m.appendChild(s); }
      if(!on && s.parentElement.tagName==='MARK'){ const m=s.parentElement; m.replaceWith(s); }
    });
  };
  listEl.addEventListener('toggle', light, true); light();
}


const FLAV_ICON = {choc:'cocoa', mango:'mango', kulfi:'kulfi', kahwa:'kahwa', ginger:'ginger', tulsi:'tulsi', lemon:'lemon'};

function home(){
  const $ = id => document.getElementById(id);
  const pressOne = (wrap, btn) => wrap.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed', b===btn));

  /* 1. hero: ingredients orbit the glass; flavour buttons recolour it */
  const ORBIT = ['soy','pea','rice','fibre','vitamin','enzyme','water','spoon'];
  $('ring').innerHTML = ORBIT.map((k,i)=>{
    const a = i/ORBIT.length*2*Math.PI - Math.PI/2;
    return `<span style="position:absolute;left:${50+46*Math.cos(a)}%;top:${50+46*Math.sin(a)}%">${icon(k)}</span>`;
  }).join('');
  // the icon itself carries the counter-spin so it stays upright
  $('ring').querySelectorAll('span').forEach(s=>{ const i=s.firstChild; s.replaceWith(i); i.style.cssText = s.style.cssText; });
  $('cup').innerHTML = icon('glass');
  const SHADES = {choc:['#5D3E26','#7A5640','#AE5D40'], mango:['#E0822F','#F2B544','#C9701F'], kulfi:['#E7D8BE','#D0BB92','#B89868']};
  const pickFlav = p => {
    const [liquid, foam, disc] = SHADES[p.id];
    const svg = $('cup').querySelector('svg');
    svg.querySelectorAll('path')[1].setAttribute('fill', liquid);
    svg.querySelector('ellipse').setAttribute('fill', foam);
    $('disc').style.background = disc;
    $('flavNote').textContent = p.note;
  };
  $('flav').innerHTML = PROTEIN.map((p,i)=>`<button aria-pressed="${i===0}" data-id="${p.id}">${icon(FLAV_ICON[p.id])}${p.name}</button>`).join('');
  $('flav').addEventListener('click', e=>{
    const b = e.target.closest('button'); if(!b) return;
    pressOne($('flav'), b); pickFlav(PROTEIN.find(p=>p.id===b.dataset.id));
  });
  pickFlav(PROTEIN[0]);

  /* 2. stat tiles that count up when they come into view */
  const STATS = [
    ['protein', 22.5, ' g', 'protein, from three plants'],
    ['fibre',   4.4,  ' g', 'dietary fibre, 1 g of it FOS'],
    ['sugar',   0,    ' g', 'added sugar'],
    ['flame',   200,  '',   'kcal in a full serving'],
    ['vitamin', 25,   '+',  'vitamins and minerals, each listed'],
    ['enzyme',  5,    '',   'digestive enzymes, each named'],
  ];
  $('tiles').innerHTML = STATS.map(([k,n,u,t])=>`<div class="tile rv">${icon(k)}<div><b data-n="${n}" data-u="${u}">${n}${u}</b><span>${t}</span></div></div>`).join('');
  const count = el => {
    const n = +el.dataset.n, u = el.dataset.u, dec = n % 1 ? 1 : 0, t0 = performance.now();
    const step = t => { const k = Math.min(1,(t-t0)/1100), v = n*(1-Math.pow(1-k,3));
      el.textContent = v.toFixed(dec) + u; if(k<1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  };
  const cio = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ count(e.target); cio.unobserve(e.target); } }), {threshold:.6});
  $('tiles').querySelectorAll('b').forEach(b=>cio.observe(b));

  /* 3. fill the glass: each ingredient pours a layer */
  const POUR = [
    ['soy',    'Soya protein isolate', 'Protein',  '#C9B48A', 'The main protein. With pea and brown rice it adds up to 45 g of protein in every 100 g.'],
    ['pea',    'Pea protein',          'Protein',  '#8DC63F', 'The second plant protein in the mix.'],
    ['rice',   'Brown rice protein',   'Protein',  '#B89868', 'The third. Three plant proteins, 22.5 g in a 50 g serving.'],
    ['fibre',  'Soya fibre and FOS',   '4.4 g fibre', '#F2B544', '8.8 g of dietary fibre per 100 g, of which 2 g is FOS.'],
    ['vitamin','Vitamins and minerals','25+',      '#E0822F', 'Each one listed on the back with its share of your daily value.'],
    ['enzyme', 'Digestive enzymes',    '5 named',  '#AE5D40', 'α-amylase, protease, lipase, cellulase and lactase. Named, not hidden.'],
  ];
  const H = 300/POUR.length;
  $('vessel').innerHTML = `<svg viewBox="0 0 300 400">
    <defs><clipPath id="glassIn"><path d="M40 40h220l-24 330a20 20 0 0 1-20 18H84a20 20 0 0 1-20-18z"/></clipPath></defs>
    <g clip-path="url(#glassIn)">${POUR.map((p,i)=>`<rect class="layer" data-i="${i}" x="0" y="${388-(i+1)*H*1.12}" width="300" height="${H*1.12+1}" fill="${p[3]}"/>`).join('')}</g>
    <path d="M40 40h220l-24 330a20 20 0 0 1-20 18H84a20 20 0 0 1-20-18z" fill="none" stroke="#4B2E20" stroke-width="8" stroke-linejoin="round"/>
    <path d="M70 70l-6 80" stroke="#fff" stroke-width="8" stroke-linecap="round" opacity=".5"/></svg>
    ${POUR.map((p,i)=>`<span class="tag" data-i="${i}" style="top:${(388-(i+.55)*H*1.12)/4}%">${p[1]}</span>`).join('')}`;
  $('chips').innerHTML = POUR.map((p,i)=>`<button class="chip" aria-pressed="false" data-i="${i}">${icon(p[0])}<span>${p[1]}<small>${p[2]}</small></span></button>`).join('');
  const setLayer = (i,on) => {
    $('vessel').querySelector(`.layer[data-i="${i}"]`).classList.toggle('on',on);
    $('vessel').querySelector(`.tag[data-i="${i}"]`).classList.toggle('on',on);
    $('chips').querySelector(`.chip[data-i="${i}"]`).setAttribute('aria-pressed',on);
  };
  $('chips').addEventListener('click', e=>{
    const b = e.target.closest('.chip'); if(!b) return;
    const i = +b.dataset.i, on = b.getAttribute('aria-pressed')!=='true';
    setLayer(i,on); $('why').textContent = on ? POUR[i][4] : 'Taken out. Tap it again to pour it back.';
  });
  $('fillAll').onclick = () => { POUR.forEach((_,i)=>setTimeout(()=>setLayer(i,true), i*180));
    $('why').textContent = 'That is the whole glass: 22.5 g protein, 4.4 g fibre, 200 kcal, 0 g added sugar.'; };
  $('empty').onclick = () => { POUR.forEach((_,i)=>setLayer(i,false)); $('why').textContent = 'Start with the protein.'; };

  /* 4. things you can skip: the cross lands when the card comes into view */
  const SKIP = [['blender','A blender','A spoon does it.'],['scale','A kitchen scale','Each sachet is one 50 g serving.'],
                ['shaker','A shaker bottle','Any glass works.'],['sugar','Added sugar','0 g. Sweetened with sucralose and acesulfame K.'],
                ['milk','Milk','Optional. It goes creamy in water.']];
  $('nn').innerHTML = SKIP.map(([k,b,t])=>`<div class="rv"><div class="ico">${icon(k)}${k==='milk'?'':icon('cross','x')}</div><b>${b}</b><span>${t}</span></div>`).join('');
  const xio = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ setTimeout(()=>e.target.classList.add('in'),350); xio.unobserve(e.target); } }), {threshold:.5});
  $('nn').querySelectorAll(':scope > div').forEach(d=>xio.observe(d));

  /* 5. the day: the sun (or moon) travels the arc to the chosen time */
  const DAY = [
    ['sun', '7 am', 'Breakfast in a glass. Daily Protein is recommended as a one meal replacement, so on a rushed morning it can be the meal.'],
    ['desk','11 am','The long stretch before lunch. One sachet, one glass of water, back to work in thirty seconds.'],
    ['lemon','4 pm','A cup of Lemon or Tulsi herbal drink. One gram in 150 ml of hot water.'],
    ['shoe','6 pm', 'After a walk or a workout. Whichever meal you swap for a shake, keep it to one serving a day.'],
    ['kahwa','9 pm','Kashmiri Kahwa, the way it is made up north. Warm, with saffron and almond.'],
  ];
  $('times').innerHTML = DAY.map((d,i)=>`<button aria-pressed="${i===0}" data-i="${i}">${icon(d[0])}${d[1]}</button>`).join('');
  const goTime = i => {
    const t = i/(DAY.length-1), x = 40 + t*920, y = (1-t)*(1-t)*360 + 2*(1-t)*t*(-120) + t*t*360;
    $('orb').style.left = (x/10)+'%'; $('orb').style.top = (y/380*100)+'%';
    $('orb').innerHTML = icon(i===DAY.length-1 ? 'moon' : 'sun');
    $('moment').textContent = DAY[i][2];
  };
  $('times').addEventListener('click', e=>{ const b=e.target.closest('button'); if(!b) return; pressOne($('times'),b); goTime(+b.dataset.i); });
  goTime(0);

  /* 6. the shelf */
  const card = p => `<a class="pc rv ${isProtein(p.id)?'':'cup-steam'}" href="product.html#${p.id}">
      <div class="ph2"><img src="assets/img/${p.shot}.jpg" alt="${p.name} ${kind(p)}" loading="lazy"></div>${icon(FLAV_ICON[p.id])}
      <div class="meta"><div><b>${p.name}</b><br><span>${kind(p)}</span></div><i class="arrow">${ARROW}</i></div></a>`;
  $('shelfP').innerHTML = PROTEIN.map(card).join('');
  $('shelfH').innerHTML = HERBAL.map(card).join('');

  /* 7. chat */
  const QA = [
    ['Is it whey?', 'No. It is plant protein: soya protein isolate, pea protein and brown rice protein. The creamy base has sodium caseinate, from milk, so it is not dairy-free.'],
    ['Is it a meal replacement?', 'Yes. The pack says "recommended as a one meal replacement". One serving a day, or as a physician or dietitian advises.'],
    ['Water or milk?', 'Water. 50 g into 250 ml, stir, drink. Milk works too, but it adds calories the label does not count.'],
    ['How long does a 1 kg pouch last?', '20 servings of 50 g. At one a day, about three weeks.'],
    ['Who should not take it?', 'Pregnant, nursing and lactating women, children under 5, adolescents and the elderly, unless a physician or dietitian advises it. Contains soy.'],
  ];
  const AV = '<span class="av">' + ARROW + '</span>';
  $('thread').innerHTML = QA.map(([q,a],i)=>`<div class="qrow rv"><button aria-expanded="false" aria-controls="a${i}">${q}</button></div>
    <div class="arow" id="a${i}">${AV}<p data-a="${a.replace(/"/g,'&quot;')}"></p></div>`).join('');
  $('thread').addEventListener('click', e=>{
    const b = e.target.closest('.qrow button'); if(!b) return;
    const row = $(b.getAttribute('aria-controls')), p = row.querySelector('p');
    const open = b.getAttribute('aria-expanded')!=='true';
    b.setAttribute('aria-expanded', open); row.classList.toggle('open', open);
    if(open){ p.innerHTML = '<span class="typing"><i></i><i></i><i></i></span>'; setTimeout(()=>{ p.textContent = p.dataset.a; }, 650); }
  });

  /* 8. the icon belt, doubled so it loops */
  const all = Object.keys(ICONS).filter(k=>!['cross','allergen','clock'].includes(k));
  $('belt').innerHTML = [...all,...all].map(k=>icon(k)).join('');

  reveal();
}
