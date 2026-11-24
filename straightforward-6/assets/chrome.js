/* Shared header + footer: the one place to edit site chrome. Pages keep a plain no-JS fallback inside the placeholders. */
(function(){
  var NAV = [['products.html','Products','products'],['index.html#inside',"What's inside",'inside'],['index.html#how','How to make','how'],['about.html','About','about'],['contact.html','Contact','contact']];
  var page = (location.pathname.split('/').pop() || 'index.html');
  var active = {'products.html':'products','product.html':'products','about.html':'about','contact.html':'contact'}[page];
  var cur = function(k){ return k === active ? ' aria-current="page"' : ''; };
  var header =
    '<div class="wrap nav-in">'+
      '<a class="brand" href="index.html" aria-label="StraightFrwd home"><span class="logo" data-logo></span></a>'+
      '<nav class="nav-links" aria-label="Main">'+NAV.map(function(n){ return '<a href="'+n[0]+'" data-nav="'+n[2]+'"'+cur(n[2])+'>'+n[1]+'</a>'; }).join('')+'</nav>'+
      '<a class="btn btn-sm nav-cta" href="products.html">See Our Products</a>'+
      '<button class="burger" aria-label="Open menu" aria-expanded="false" aria-controls="mnav"><span></span><span></span></button>'+
    '</div>'+
    '<nav class="mnav" id="mnav" aria-label="Mobile">'+NAV.map(function(n){ return '<a href="'+n[0]+'"'+cur(n[2])+'>'+n[1]+'</a>'; }).join('')+'</nav>';
  var P = [['choc','Chocolate'],['mango','Mango'],['kulfi','Kulfi'],['kahwa','Kashmiri Kahwa'],['ginger','Ginger'],['tulsi','Tulsi'],['lemon','Lemon']];
  var footer =
    '<div class="wrap foot-grid">'+
      '<div><span class="logo logo-foot" data-logo></span><p>Nutrition, Made Easy.<br>Part of Shiv Group.</p></div>'+
      '<div><h4>Products</h4>'+P.map(function(p){ return '<a href="product.html#'+p[0]+'">'+p[1]+'</a>'; }).join('')+'</div>'+
      '<div><h4>Explore</h4><a href="products.html">All products</a><a href="about.html">About us</a><a href="contact.html">Contact</a><a href="contact.html#buy">Where to buy</a><a href="privacy.html"'+(page==='privacy.html'?' aria-current="page"':'')+'>Privacy</a></div>'+
      '<div><h4>Talk to us</h4><a href="tel:+919672227666">+91 96722 27666</a><a href="https://wa.me/919057119000">WhatsApp 90571 19000</a><a href="mailto:care@straightfrwd.com">care@straightfrwd.com</a></div>'+
    '</div>'+
    '<div class="wrap foot-base">© 2026 StraightFrwd</div>';
  var h = document.querySelector('[data-chrome="header"]'), f = document.querySelector('[data-chrome="footer"]');
  if (h) h.innerHTML = header;
  if (f) f.innerHTML = footer;
})();
