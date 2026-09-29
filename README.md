# StraightFrwd — website mockup

Catalogue site for **StraightFrwd** (*Nutrition, Made Easy*) — daily protein and
energy drink mixes by Shiv Protein Private Limited, Delhi.

Live preview: https://futureceptindia.github.io/straightfrwd/

## Pages
| File | What it is |
|---|---|
| `index.html` | Home |
| `products.html` | Catalogue — all seven products |
| `product.html` | Product detail (`#choc`, `#mango`, `#kulfi`, `#kahwa`, `#ginger`, `#tulsi`, `#lemon`) |
| `science.html` | What's Inside — the full label |
| `about.html` | Story and company details |
| `distributors.html` | Trade terms + distributor enquiry form |
| `contact.html` | Consumer contact form, licences, addresses |

Static HTML. No build step. Header and footer come from `assets/app.js`.

## Not a storefront
No cart, no prices, no checkout. "Where to buy" points at marketplaces;
trade goes to the distributor form.

## Still placeholder — replace before launch
1. **Retailer links** (Amazon, Flipkart, Blinkit, Zepto, Instamart) show a toast
   instead of linking. Need real listing URLs, or trim the list to what exists.
2. **Both forms are inert** — they `preventDefault()` and show a toast. They need a
   destination (inbox, Sheet or CRM).
3. **Product photography** is AI-generated placeholder, deliberately shot without
   logos or packaging so nothing misrepresents the real product. Packshots are
   rendered in CSS from the packaging artwork, so those colours and layout are accurate.
4. **"North India"** on the distributor page is a placeholder claim.
5. Every page carries `<meta name="robots" content="noindex,nofollow">` because this
   is a review preview. Remove it when the site goes live.

Nutrition figures are taken from the approved packaging artwork (`SF_50g Protein.pdf`).
