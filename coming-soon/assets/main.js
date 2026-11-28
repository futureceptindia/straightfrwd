(function(){
  var d=document;d.documentElement.classList.add('js');
  if(window.LOGO_SVG) d.getElementById('logo').innerHTML=window.LOGO_SVG;
  var items=[['High protein','i-soya'],['Chocolate','i-cocoa'],['No added sugar','i-pea'],['Mango','i-mango'],['High fibre','i-rice'],['Kulfi','i-kulfi'],['Kashmiri Kahwa','i-saffron'],['Ginger','i-ginger'],['Tulsi','i-tulsi'],['Lemon','i-lemon']];
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
    var v=em.value.trim(),zf=new URLSearchParams({xnQsjsdp:'cbd916915fdb0b53200112a213b2d6ca58bfa1324651493de2d02a0c5edc5908',zc_gad:'',xmIwtLD:'4ec3a9e42a2d75de7a9946b034ef8967728af92145542f90bec7c498e820863c9e954d439c7a3758e1cc90dcdfa99c52',actionType:'TGVhZHM=',returnURL:'https://straightfrwd.com/',Company:'Pre-registration','Last Name':v.split('@')[0].slice(0,80),Email:v,'Lead Source':'Website - Coming Soon',LEADCF52:'on',LEADCF2:'Flat 50% off first order',LEADCF3:location.href.slice(0,450),aG9uZXlwb3Q:''});
    fetch('https://crm.zoho.in/crm/WebToLeadForm',{method:'POST',mode:'no-cors',body:zf}).catch(function(){});
    fetch('https://formsubmit.co/ajax/care@straightfrwd.com',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({email:em.value.trim(),_subject:'New StraightFrwd pre-registration',_template:'table',_captcha:'false',page:location.href,time:new Date().toISOString()})}).catch(function(){});
    f.hidden=true;d.getElementById('thanks').hidden=false;});
})();
