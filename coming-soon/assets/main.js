(function(){
  var d=document;d.documentElement.classList.add('js');
  if(window.LOGO_SVG) d.getElementById('logo').innerHTML=window.LOGO_SVG;
  var items=[['22.5 g plant protein','i-soya'],['Chocolate','i-cocoa'],['0 g added sugar','i-pea'],['Mango','i-mango'],['Mixes in plain water','i-rice'],['Kulfi','i-kulfi'],['Kashmiri Kahwa','i-saffron'],['Ginger','i-ginger'],['Tulsi','i-tulsi'],['Lemon','i-lemon']];
  var h=items.map(function(x){return '<span>'+x[0]+'</span><svg><use href="#'+x[1]+'"/></svg>';}).join('');
  d.getElementById('trk').innerHTML=h+h;
  var art=d.getElementById('art'),els=[].slice.call(art.querySelectorAll('[data-d]'));
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
    addEventListener('pointermove',function(e){
      var x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;
      els.forEach(function(el){var k=el.dataset.d*18;el.style.translate=(x*k)+'px '+(y*k)+'px';});
    });
    art.addEventListener('click',function(){art.classList.remove('wob');void art.offsetWidth;art.classList.add('wob');});
  }
  var f=d.getElementById('nform'),em=d.getElementById('email');
  f.addEventListener('submit',function(e){e.preventDefault();
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value.trim())){f.classList.remove('err');void f.offsetWidth;f.classList.add('err');em.focus();return;}
    f.hidden=true;d.getElementById('thanks').hidden=false;});
})();
