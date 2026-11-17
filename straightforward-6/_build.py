import sys,os
os.chdir(sys.argv[1])
h=open('index.html').read()
head=h[:h.index('<main id="main">')+len('<main id="main">')]
tail=h[h.index('</main>'):]
def page(fn,title,desc,body,cls=''):
    t=head.replace('<title>StraightFrwd | Nutrition, Made Easy.</title>',f'<title>{title}</title>')
    t=t.replace(t[t.index('<meta name="description"'):t.index('>',t.index('<meta name="description"'))+1],f'<meta name="description" content="{desc}">')
    if cls: t=t.replace('<body>',f'<body class="{cls}">')
    open(fn,'w').write(t+body+tail)

def card(id,name,img,ill,col,note,tilt,sm=False,sub=''):
    return f'''<a class="card{' sm' if sm else ''}" href="product.html#{id}" style="--tilt:{tilt}">
        <figure class="sticker"><img src="assets/img/{img}" alt="{name} {'herbal drink sachet' if sm else 'Daily Protein sachet and box'}" loading="lazy"></figure>
        <svg class="card-ill {col}" aria-hidden="true"><use href="#{ill}"/></svg>
        <h3>{name}</h3><p>{note}</p>{f'<p class="size">{sub}</p>' if sub else ''}<span class="more">Have a look</span>
      </a>'''
P=[('choc','Chocolate','pack-choc.jpg','i-cocoa','c-brown','Dark cocoa, barely sweet.','-2deg'),
   ('mango','Mango','pack-mango-clean.jpg','i-mango','c-brown','Ripe mango, thick like a lassi.','1.5deg'),
   ('kulfi','Kulfi','pack-kulfi-clean.jpg','i-cardamom','c-brown','Cardamom and pistachio.','-1deg')]
H=[('kahwa','Kashmiri Kahwa','sachet-kahwa.jpg','i-saffron','c-brown','Saffron and almond.','1deg'),
   ('ginger','Ginger','sachet-ginger.jpg','i-ginger','c-brown','Sharp and warming.','-1.5deg'),
   ('tulsi','Tulsi','sachet-tulsi.jpg','i-tulsi','c-green','Holy basil, earthy.','2deg'),
   ('lemon','Lemon','sachet-lemon.jpg','i-lemon','c-green','Plain and clean.','-1deg')]

wave=lambda fill,flip='': f'<svg class="wave {flip}" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 30c120-26 240-26 360 0s240 26 360 0 240-26 360 0 240 26 360 0v30H0z" fill="var({fill})"/></svg>'

# ---------- products ----------
body=f'''
<section class="page-hero">
  <div class="wrap ph-in">
    <p class="hand kicker">the whole range, all seven</p>
    <h1>Our <span class="ul">products.<svg aria-hidden="true"><use href="#d-under"/></svg></span></h1>
    <p class="lead">Three protein shakes for the meal you would otherwise skip. Four herbal drinks for a warm cup in between. Tap any pack to see what is in it.</p>
    <div class="jump"><a class="chip" href="#protein">Daily Protein</a><a class="chip" href="#herbal">Herbal Drinks</a></div>
    <svg class="ill ph1 c-brown" aria-hidden="true"><use href="#i-cocoa"/></svg>
    <svg class="ill ph2 c-green" aria-hidden="true"><use href="#i-tulsi"/></svg>
    <svg class="ill ph3 c-brown" aria-hidden="true"><use href="#i-mango"/></svg>
  </div>
</section>
{wave('--tan-l')}
<section class="range tint" id="protein">
  <div class="wrap">
    <div class="sec-head">
      <p class="hand kicker">plant protein shakes</p>
      <h2>Daily Protein</h2>
      <p class="sub">Same formulation in all three. 22.5 g protein and 4.4 g fibre in every 50 g serving, no added sugar. Comes in 50 g sachets and 1 kg pouches (20 servings).</p>
    </div>
    <div class="cards cards-3">
      {''.join(card(*p,sub='50 g sachet · 1 kg pouch') for p in P)}
    </div>
  </div>
</section>
{wave('--tan-l','flip')}
<section class="range" id="herbal">
  <div class="wrap">
    <div class="sec-head">
      <p class="hand kicker">for the in-between hours</p>
      <h2>Herbal Drinks</h2>
      <p class="sub">1 g sachets. Empty one into 150 ml hot water, stir, sip.</p>
    </div>
    <div class="cards cards-4">
      {''.join(card(*p,sm=True,sub='1 g sachet') for p in H)}
    </div>
  </div>
</section>
<section class="close close-cream">
  <div class="wrap close-in">
    <svg class="ill c1 c-brown" aria-hidden="true"><use href="#i-kahwa"/></svg>
    <svg class="ill c4 c-brown" aria-hidden="true"><use href="#i-kulfi"/></svg>
    <p class="hand kicker">can't find us nearby?</p>
    <h2>Ask us where to buy.</h2>
    <p class="sub">Tell us your city. We will point you to the nearest shop or online listing.</p>
    <a class="btn btn-lg" href="contact.html#buy">Ask where to buy</a>
  </div>
</section>
'''
page('products.html','Products | StraightFrwd','Daily Protein in Chocolate, Mango and Kulfi. Herbal Drinks in Kashmiri Kahwa, Ginger, Tulsi and Lemon.',body,'pg-products')

# ---------- product ----------
body='''
<section class="pdp" id="pdp" aria-live="polite">
  <noscript><div class="wrap"><p class="lead">This page needs JavaScript to show a product. <a href="products.html">See all products</a>.</p></div></noscript>
</section>
<section class="others">
  <div class="wrap">
    <div class="sec-head"><p class="hand kicker">while you're here</p><h2>Other flavours</h2></div>
    <div class="other-list" id="others"></div>
  </div>
</section>
'''
page('product.html','Product | StraightFrwd','StraightFrwd product details: tasting notes, nutrition, ingredients and how to make it.',body,'pg-product')

# ---------- about ----------
body=f'''
<section class="page-hero">
  <div class="wrap ph-in">
    <p class="hand kicker">about StraightFrwd</p>
    <h1>Nutrition, <span class="ul">made easy.<svg aria-hidden="true"><use href="#d-under"/></svg></span></h1>
    <p class="lead">Looking after your health, and the health of the people you love, should not feel like a second job.</p>
    <svg class="ill ph1 c-brown" aria-hidden="true"><use href="#i-soya"/></svg>
    <svg class="ill ph2 c-green" aria-hidden="true"><use href="#i-pea"/></svg>
    <svg class="ill ph3 c-brown" aria-hidden="true"><use href="#i-rice"/></svg>
  </div>
</section>
<section class="ab-split">
  <div class="wrap split">
    <div>
      <h2>A gap nobody notices.</h2>
      <p>Even in homes where meals are cooked fresh and plates are full, a gap goes unnoticed. Most Indian diets fall short on daily protein. Turn to the supplement aisle and you meet intimidating tubs, chemical jargon, and a nagging question about what you can actually trust.</p>
      <p>We created StraightFrwd to replace that noise with calm, everyday certainty.</p>
    </div>
    <figure class="frame tilt-r"><img src="assets/img/ab-lifestyle.jpg" alt="A woman stirring a chocolate shake in her kitchen" loading="lazy"></figure>
  </div>
</section>
{wave('--tan-l')}
<section class="tint ab-who">
  <div class="wrap split rev">
    <figure class="frame tilt-l"><img src="assets/img/ab-band-trek.jpg" alt="A trekker on a forest trail" loading="lazy"></figure>
    <div>
      <p class="hand kicker">who it is for</p>
      <h2>Built for people who plan ahead.</h2>
      <p>StraightFrwd is for those who do not wait for a wake-up call to start caring about their wellbeing. People who think in decades rather than crash diets.</p>
      <p>The best nutrition is not the most complicated formula on the shelf. It is the habit you actually keep.</p>
    </div>
  </div>
</section>
{wave('--tan-l','flip')}
<section class="ab-three">
  <div class="wrap">
    <div class="sec-head"><p class="hand kicker">our philosophy</p><h2>Three simple commitments.</h2></div>
    <div class="ing-row">
      <article class="ing"><svg class="ill-lg c-green" aria-hidden="true"><use href="#i-tulsi"/></svg><h3>Nature and science</h3><p>Plant protein from soya, pea and brown rice, with dietary fibre, vitamins, minerals and digestive enzymes. Every one named on the pack, with its amount.</p></article>
      <article class="ing"><svg class="ill-lg c-brown" aria-hidden="true"><use href="#i-kahwa"/></svg><h3>Everyday ease</h3><p>A pre-measured sachet, plain water and a spoon. No blender, no kitchen scale, no routine to learn.</p></article>
      <article class="ing"><svg class="ill-lg c-brown" aria-hidden="true"><use href="#i-soya"/></svg><h3>Built for the long game</h3><p>Real health is built in the small, quiet choices you repeat every day, with no added sugar and a label you can read in full.</p></article>
    </div>
  </div>
</section>
{wave('--brown')}
<section class="how ab-roots">
  <div class="wrap roots">
    <div class="roots-big"><span class="big-num">40+</span><span>years of Shiv Group in Indian industry</span></div>
    <div class="roots-big"><span class="big-num">20+</span><span>years working with soya</span></div>
    <div class="roots-copy">
      <p class="hand kicker">where we come from</p>
      <h2>A new name, with decades behind it.</h2>
      <p>StraightFrwd is part of Shiv Group. For over forty years Shiv Group has been a name in Indian industry. For more than two decades the work has centred on one ingredient, soya, what the team here calls the miracle seed.</p>
      <p>StraightFrwd is the first time we have brought that expertise directly to you and your family.</p>
    </div>
  </div>
</section>
{wave('--brown','flip')}
<section class="ab-promise">
  <div class="wrap promise">
    <p class="hand kicker">our promise</p>
    <h2>We want you to feel one thing. <span class="ul">Relaxed.<svg aria-hidden="true"><use href="#d-under"/></svg></span></h2>
    <p>Relaxed because you know what is going into your body. Relaxed because closing your family's daily nutrition gap takes less than a minute. And relaxed because your long-term health is in your hands.</p>
    <p class="hand sign">Simple, natural and straightforward.</p>
  </div>
</section>
<section class="close">
  <div class="wrap close-in">
    <svg class="ill c1 c-brown" aria-hidden="true"><use href="#i-cocoa"/></svg>
    <svg class="ill c2 c-green" aria-hidden="true"><use href="#i-lemon"/></svg>
    <svg class="ill c3 c-brown" aria-hidden="true"><use href="#i-kahwa"/></svg>
    <svg class="ill c4 c-brown" aria-hidden="true"><use href="#i-mango"/></svg>
    <p class="hand kicker">start today</p>
    <h2>Give your day the protein it is missing.</h2>
    <p class="sub">Less effort than making chai.</p>
    <a class="btn btn-lg" href="products.html">See Our Products</a>
  </div>
</section>
'''
page('about.html','About | StraightFrwd','Why we started StraightFrwd. Part of Shiv Group, 40+ years in Indian industry and 20+ years with soya.',body,'pg-about')

# ---------- contact ----------
opts=''.join(f'<option>{n}</option>' for n in ['Chocolate Daily Protein','Mango Daily Protein','Kulfi Daily Protein','Kashmiri Kahwa','Ginger','Tulsi','Lemon','Not sure yet'])
body=f'''
<section class="page-hero">
  <div class="wrap ph-in">
    <p class="hand kicker">say hello</p>
    <h1>Talk to <span class="ul">us.<svg aria-hidden="true"><use href="#d-under"/></svg></span></h1>
    <p class="lead">Questions about a flavour, where to buy, or how to fit it into your day. A real person reads every message.</p>
    <svg class="ill ph1 c-brown" aria-hidden="true"><use href="#i-kahwa"/></svg>
    <svg class="ill ph2 c-green" aria-hidden="true"><use href="#i-lemon"/></svg>
  </div>
</section>
<section class="contact-ways">
  <div class="wrap ways">
    <a class="way" href="tel:+919672227666" style="--tilt:-1.5deg"><span class="hand">call</span><b>+91 96722 27666</b><span>Customer care</span></a>
    <a class="way" href="https://wa.me/919057119000" style="--tilt:1deg"><span class="hand">WhatsApp</span><b>90571 19000</b><span>Message any time</span></a>
    <a class="way" href="mailto:care@straightfrwd.com" style="--tilt:-.5deg"><span class="hand">email</span><b>care@straightfrwd.com</b><span>We reply on working days</span></a>
  </div>
</section>
{wave('--tan-l')}
<section class="tint form-sec" id="buy">
  <div class="wrap form-wrap">
    <div class="form-intro">
      <p class="hand kicker">write to us</p>
      <h2>Ask where to buy, or anything else.</h2>
      <p>Fill this in and press send. Your email app opens with everything ready. Nothing is stored on this site.</p>
      <svg class="ill-lg c-brown" aria-hidden="true"><use href="#i-mango"/></svg>
    </div>
    <form class="form" id="contact-form" action="mailto:care@straightfrwd.com" method="post" enctype="text/plain">
      <label>Your name<input name="name" required autocomplete="name"></label>
      <div class="row2">
        <label>Phone<input name="phone" type="tel" autocomplete="tel" inputmode="tel"></label>
        <label>Email<input name="email" type="email" autocomplete="email"></label>
      </div>
      <div class="row2">
        <label>Topic<select name="topic"><option>Where to buy</option><option>Product question</option><option>Bulk or retail enquiry</option><option>Feedback</option><option>Something else</option></select></label>
        <label>Product<select name="product">{opts}</select></label>
      </div>
      <label>Message<textarea name="message" rows="5" placeholder="Your city helps if you are asking where to buy."></textarea></label>
      <button class="btn" type="submit">Open my email app</button>
      <p class="form-note" id="form-note" role="status"></p>
    </form>
  </div>
</section>
'''
page('contact.html','Contact | StraightFrwd','Call, WhatsApp or email StraightFrwd customer care, or ask where to buy.',body,'pg-contact')
print('ok')
