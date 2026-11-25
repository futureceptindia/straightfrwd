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
    var n=window.innerWidth<600?6:12;
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
      var hero=d.querySelector('.page');
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

  // flavour switcher
  d.querySelectorAll('.fl-switch button').forEach(function(b){
    b.addEventListener('click',function(){
      d.querySelectorAll('.fl-switch button').forEach(function(x){x.setAttribute('aria-checked',x===b?'true':'false');});
      root.dataset.flavour=b.dataset.f;
    });
  });

  // notify form, nothing stored
  var form=d.getElementById('notifyForm');
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var v=form.email.value.trim();
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){form.classList.remove('err');void form.offsetWidth;form.classList.add('err');form.email.focus();return;}
    form.reset(); form.hidden=true; d.getElementById('thanks').hidden=false;
  });
})();
