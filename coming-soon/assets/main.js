(function(){
  var d=document, root=d.documentElement;
  root.classList.add('js');
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // logo
  var logo=d.getElementById('logo');
  if(window.LOGO_SVG&&logo) logo.innerHTML=window.LOGO_SVG;

  // chevron field, pointer-driven
  var field=d.getElementById('chevField'), chevs=[];
  if(field){
    var n=window.innerWidth<600?7:14;
    for(var i=0;i<n;i++){
      var s=d.createElementNS('http://www.w3.org/2000/svg','svg');
      s.innerHTML='<use href="#chev"/>';
      var size=30+Math.random()*120;
      s.style.width=s.style.height=size+'px';
      s.style.left=(Math.random()*95)+'%'; s.style.top=(Math.random()*90)+'%';
      s.dataset.depth=(0.2+Math.random()).toFixed(2);
      field.appendChild(s); chevs.push(s);
    }
    if(!reduce){
      var hero=d.getElementById('hero');
      hero.addEventListener('pointermove',function(e){
        var r=hero.getBoundingClientRect();
        var x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
        chevs.forEach(function(c){var k=c.dataset.depth*40;c.style.transform='translate('+(x*k)+'px,'+(y*k)+'px)';});
      });
      window.addEventListener('scroll',function(){
        var sy=window.scrollY; if(sy>window.innerHeight) return;
        chevs.forEach(function(c){c.style.translate=(sy*c.dataset.depth*.6)+'px 0';});
      },{passive:true});
    }
  }

  // count up
  var nums=d.querySelectorAll('[data-count]');
  function run(el){
    var to=parseFloat(el.dataset.count), dec=+(el.dataset.dec||0);
    if(reduce||to===0){el.textContent=to.toFixed(dec);return;}
    var t0=null;
    function step(t){t0=t0||t;var p=Math.min((t-t0)/1400,1),e=1-Math.pow(1-p,3);
      el.textContent=(to*e).toFixed(dec); if(p<1) requestAnimationFrame(step);}
    requestAnimationFrame(step);
  }
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){run(en.target);io.unobserve(en.target);}});},{threshold:.4});
    nums.forEach(function(el){io.observe(el);});
  }

  // build the shake
  var glass=d.getElementById('glass'), layers=d.getElementById('layers'), foam=d.getElementById('foam'),
      msg=d.getElementById('shakeMsg'), ings=[].slice.call(d.querySelectorAll('.ing'));
  var mixes={chocolate:'#6b3f2a',mango:'#f0a43a',kulfi:'#e6cf9e'};
  function total(){return ings.filter(function(b){return b.getAttribute('aria-pressed')==='true';});}
  function update(){
    var on=total(), h=0;
    on.forEach(function(b){h+= +b.dataset.fill;});
    foam.style.bottom=Math.min(h,92)+'%'; foam.style.opacity=on.length?1:0;
    var full=on.length===ings.length;
    glass.classList.toggle('full',full);
    glass.style.setProperty('--mix',mixes[root.dataset.flavour]);
    msg.textContent=full?'All 7 in. That is one meal, ready in about a minute.':on.length+' of '+ings.length+' in. Keep going.';
  }
  ings.forEach(function(b){
    b.setAttribute('aria-pressed','false');
    b.addEventListener('click',function(){
      var on=b.getAttribute('aria-pressed')==='true';
      b.setAttribute('aria-pressed',on?'false':'true');
      if(on){var l=layers.querySelector('[data-k="'+b.textContent+'"]'); if(l) l.remove();}
      else{var l2=d.createElement('div');l2.className='layer';l2.dataset.k=b.textContent;l2.style.background=b.dataset.c;
        layers.appendChild(l2); requestAnimationFrame(function(){requestAnimationFrame(function(){l2.style.height=b.dataset.fill*glass.clientHeight/100+'px';});});}
      update();
    });
  });
  d.getElementById('shakeReset').addEventListener('click',function(){
    ings.forEach(function(b){b.setAttribute('aria-pressed','false');}); layers.innerHTML=''; update();
  });

  // flavour switcher
  var lines={chocolate:'Chocolate. The one everyone asks for first.',mango:'Mango. Summer in a shaker, any month.',kulfi:'Kulfi. The flavour you grew up with, now with protein.'};
  var fl=d.getElementById('flLine');
  d.querySelectorAll('.fl-switch button').forEach(function(b){
    b.addEventListener('click',function(){
      d.querySelectorAll('.fl-switch button').forEach(function(x){x.setAttribute('aria-checked',x===b?'true':'false');});
      root.dataset.flavour=b.dataset.f; fl.textContent=lines[b.dataset.f]; update();
    });
  });

  // notify form, nothing stored
  var form=d.getElementById('notifyForm');
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var v=form.email.value.trim();
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){form.classList.remove('err');void form.offsetWidth;form.classList.add('err');form.email.focus();return;}
    form.reset(); form.hidden=true; d.getElementById('nnote').hidden=true; d.getElementById('thanks').hidden=false;
  });
})();
