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

function home(){
  /* hero reel: the six clips play in turn and loop; the poster stays if motion is reduced */
  const v = document.getElementById('reel'), poster = document.getElementById('poster');
  const clips = ['v-hr7','v-hr4b','v-hr5b','v-hr6b','v-hr2c','v-hr8'].map(n=>'assets/video/'+n+'.mp4');
  if(v && !matchMedia('(prefers-reduced-motion: reduce)').matches){
    let i = 0;
    const go = n => { i = n % clips.length; v.src = clips[i]; v.play().catch(()=>{}); };
    v.addEventListener('ended', ()=>go(i+1));
    v.addEventListener('error', ()=>go(i+1));
    v.addEventListener('playing', ()=>{ poster.style.opacity = 0; }, {once:true});
    document.addEventListener('visibilitychange', ()=> document.hidden ? v.pause() : v.play().catch(()=>{}));
    go(0);
  }

  /* steps: one open at a time */
  const acc = document.querySelector('.acc');
  if(acc) acc.addEventListener('click', e=>{
    const b = e.target.closest('.s'); if(!b) return;
    acc.querySelectorAll('.s').forEach(s=>s.setAttribute('aria-expanded', s===b));
  });

  /* range list; the pack shot follows the pointer on devices that hover */
  const row = p => `<li class="rv"><a href="product.html#${p.id}" data-img="${p.shot}">
      <img class="th" src="assets/img/${p.shot}.jpg" alt="" loading="lazy"><b>${p.name}</b><span>${kind(p)}</span></a></li>`;
  document.getElementById('rp').innerHTML = PROTEIN.map(row).join('');
  document.getElementById('rh').innerHTML = HERBAL.map(row).join('');
  const tray = document.getElementById('tray'), timg = tray.querySelector('img');
  document.querySelectorAll('.range li a').forEach(a=>{
    a.addEventListener('mouseenter', ()=>{ timg.src = 'assets/img/'+a.dataset.img+'.jpg'; tray.classList.add('on'); });
    a.addEventListener('mouseleave', ()=> tray.classList.remove('on'));
  });
  addEventListener('mousemove', e=>{ tray.style.left = (e.clientX+170)+'px'; tray.style.top = e.clientY+'px'; }, {passive:true});

  labelReader(document.getElementById('labelList'), document.getElementById('rawText'));

  /* pouch planner: 20 servings in a 1 kg pouch */
  const r = document.getElementById('perwk'), o = document.getElementById('planOut');
  const plan = () => {
    const n = +r.value, days = Math.round(20 / n * 7);
    o.textContent = `${n} a week: about ${days} days`;
  };
  r.addEventListener('input', plan); plan();

  // re-run reveal for rows built after boot
  reveal();
}
