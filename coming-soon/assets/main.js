(function(){
  var d=document,b=d.body;
  var logo=d.getElementById('logo'); if(window.LOGO_SVG) logo.innerHTML=window.LOGO_SVG;
  var S=[
    {k:'Something straightforward is coming',n:'Soon',u:'',s:'A plant protein shake and four herbal drinks. First on Amazon and Flipkart.',bg:'#4B2E20',fg:'#FBF7F1',hi:'#E0822F'},
    {k:'Plant protein, every serving',n:'22.5',u:'g',s:'From soya, pea and brown rice. Not whey.',bg:'#BC5A3A',fg:'#FBF7F1',hi:'#4B2E20'},
    {k:'Added sugar',n:'0',u:'g',s:'Nothing added. Sweet enough anyway.',bg:'#1F4A33',fg:'#F4EAD6',hi:'#8DC63F'},
    {k:'Dietary fibre',n:'4.4',u:'g',s:'With prebiotic FOS. Easy on the stomach.',bg:'#E7D8BE',fg:'#4B2E20',hi:'#BC5A3A'},
    {k:'Vitamins and minerals',n:'25',u:'+',s:'Plus five digestive enzymes. All printed on the back.',bg:'#E0822F',fg:'#2B1A12',hi:'#FBF7F1'},
    {k:'To make one',n:'1',u:'min',s:'Plain water, a spoon, done. No blender.',bg:'#FBF7F1',fg:'#4B2E20',hi:'#E0822F'},
    {k:'Flavours',n:'3+4',u:'',s:'Chocolate, Mango, Kulfi. And Kahwa, Ginger, Tulsi, Lemon to sip.',bg:'#4B2E20',fg:'#FBF7F1',hi:'#D0BB92'}
  ];
  var i=0,timer,poster=d.getElementById('poster'),dots=d.getElementById('dots'),nx=d.getElementById('next');
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  dots.innerHTML=S.map(function(_,j){return '<li><button type="button" aria-label="Slide '+(j+1)+'"></button></li>';}).join('');
  var db=[].slice.call(dots.querySelectorAll('button'));
  function paint(){
    var s=S[i],r=d.documentElement.style;
    r.setProperty('--bg',s.bg);r.setProperty('--fg',s.fg);r.setProperty('--hi',s.hi);
    d.getElementById('kick').textContent=s.k;
    d.getElementById('big').innerHTML='<span>'+s.n+(s.u?'<small>'+s.u+'</small>':'')+'</span>';
    d.getElementById('say').textContent=s.s;
    db.forEach(function(x,j){x.setAttribute('aria-current',j===i);});
    poster.classList.remove('out');poster.classList.remove('in');void poster.offsetWidth;poster.classList.add('in');
  }
  function go(n){
    i=(n+S.length)%S.length;
    poster.classList.add('out');
    setTimeout(paint,reduce?0:220);
    clearTimeout(timer); if(!reduce) timer=setTimeout(function(){go(i+1);},5200);
  }
  nx.addEventListener('click',function(){nx.classList.remove('push');void nx.offsetWidth;nx.classList.add('push');go(i+1);});
  db.forEach(function(x,j){x.addEventListener('click',function(){go(j);});});
  d.addEventListener('keydown',function(e){if(e.target.tagName==='INPUT')return;if(e.key==='ArrowRight'||e.key===' '){e.preventDefault();go(i+1);}if(e.key==='ArrowLeft')go(i-1);});
  var x0=null;
  poster.parentNode.addEventListener('touchstart',function(e){x0=e.touches[0].clientX;},{passive:true});
  poster.parentNode.addEventListener('touchend',function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>50)go(i+(dx<0?1:-1));x0=null;});
  var em=d.getElementById('email');
  em.addEventListener('focus',function(){clearTimeout(timer);});
  var f=d.getElementById('nform');
  f.addEventListener('submit',function(e){e.preventDefault();
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value.trim())){f.classList.remove('err');void f.offsetWidth;f.classList.add('err');em.focus();return;}
    f.hidden=true;d.getElementById('thanks').hidden=false;});
  go(0);
})();
