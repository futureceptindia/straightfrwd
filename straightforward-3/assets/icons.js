/* StraightFrwd icon set: flat, duotone, brand colours, 64x64. Drawn for this site. */
(function(){
const B='#4B2E20', T='#AE5D40', O='#E0822F', G='#1F4A33', L='#8DC63F', C='#E7D8BE', Y='#F2B544', W='#FBF7F1', P='#C9B48A';
const s = (body) => `<svg viewBox="0 0 64 64" aria-hidden="true">${body}</svg>`;
window.ICONS = {
  soy: s(`<path d="M14 48c-4-10 2-26 16-32 10-4 20 0 22 6 3 8-6 12-12 16-7 5-9 13-15 14-5 1-9-1-11-4z" fill="${P}"/>
    <circle cx="25" cy="36" r="6" fill="${Y}"/><circle cx="35" cy="27" r="6" fill="${Y}"/><circle cx="45" cy="21" r="5" fill="${Y}"/>
    <path d="M14 48c-4-10 2-26 16-32" fill="none" stroke="${B}" stroke-width="2.5" stroke-linecap="round"/>`),
  pea: s(`<path d="M8 40c10-18 34-26 48-22-6 16-30 28-48 22z" fill="${L}"/>
    <circle cx="22" cy="34" r="5" fill="${G}"/><circle cx="32" cy="30" r="5" fill="${G}"/><circle cx="42" cy="25" r="5" fill="${G}"/>
    <path d="M8 40c14 2 36-8 48-22" fill="none" stroke="${G}" stroke-width="2.5" stroke-linecap="round"/><path d="M56 18c2-4 2-8 0-10" stroke="${G}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`),
  rice: s(`<ellipse cx="22" cy="24" rx="5" ry="11" transform="rotate(-25 22 24)" fill="${P}"/>
    <ellipse cx="38" cy="22" rx="5" ry="11" transform="rotate(20 38 22)" fill="#B89868"/>
    <ellipse cx="30" cy="42" rx="5" ry="11" transform="rotate(-5 30 42)" fill="#B89868"/>
    <ellipse cx="46" cy="42" rx="5" ry="10" transform="rotate(35 46 42)" fill="${P}"/>
    <path d="M22 16v6M38 14v6M30 34v6" stroke="${B}" stroke-width="2" stroke-linecap="round" opacity=".5"/>`),
  cocoa: s(`<path d="M32 6c12 6 16 18 14 30s-8 22-14 22-12-10-14-22S20 12 32 6z" fill="${T}"/>
    <path d="M32 8v48M24 12c-2 14-2 30 2 42M40 12c2 14 2 30-2 42" stroke="${B}" stroke-width="2.2" fill="none" stroke-linecap="round" opacity=".7"/>`),
  mango: s(`<path d="M36 14c12 2 20 14 16 28-3 12-16 18-28 14S6 38 12 26c4-8 12-13 24-12z" fill="${O}"/>
    <path d="M44 22c2 6 1 12-2 16" stroke="${Y}" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M34 14c0-4 2-7 5-9" stroke="${B}" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M38 9c6-4 13-3 16 1-6 3-12 3-16-1z" fill="${G}"/>`),
  kulfi: s(`<path d="M20 8h24v30c0 6-5 10-12 10s-12-4-12-10z" fill="${C}"/><path d="M20 26h24v12c0 6-5 10-12 10s-12-4-12-10z" fill="${Y}" opacity=".7"/>
    <rect x="29" y="46" width="6" height="14" rx="2" fill="#B89868"/>
    <circle cx="27" cy="18" r="2" fill="${L}"/><circle cx="36" cy="14" r="2" fill="${L}"/><circle cx="34" cy="24" r="2" fill="${L}"/>`),
  kahwa: s(`<path d="M12 28h34v8c0 10-8 18-17 18S12 46 12 36z" fill="${T}"/><path d="M46 32h4a6 6 0 0 1 0 12h-6" stroke="${T}" stroke-width="4" fill="none"/>
    <path d="M12 28h34" stroke="${B}" stroke-width="2"/><path d="M22 20c-2-4 2-6 0-10M30 20c-2-4 2-6 0-10M38 20c-2-4 2-6 0-10" stroke="${O}" stroke-width="2.5" fill="none" stroke-linecap="round" class="steam"/>
    <path d="M24 34l3 6M32 33l1 7M38 35l-2 5" stroke="${Y}" stroke-width="2" stroke-linecap="round"/>`),
  ginger: s(`<path d="M10 36c4-8 12-6 16-12 4-6 10-8 14-4 3 3 1 7 4 9 4 2 10 0 12 5 2 6-4 10-10 9-6-1-8 4-14 5-8 1-12-4-18-3-6 1-8-4-4-9z" fill="#D9A55B"/>
    <path d="M18 38c6-1 10 2 16 0M36 30c4 2 8 2 12 2" stroke="${B}" stroke-width="2" fill="none" stroke-linecap="round" opacity=".5"/>`),
  tulsi: s(`<path d="M32 58V20" stroke="${G}" stroke-width="3" stroke-linecap="round"/>
    <path d="M32 30c-12 0-20-8-20-18 12 0 20 8 20 18z" fill="${L}"/><path d="M32 30c12 0 20-8 20-18-12 0-20 8-20 18z" fill="${G}"/>
    <path d="M32 46c-10 0-16-6-16-14 10 0 16 6 16 14z" fill="${G}"/><path d="M32 46c10 0 16-6 16-14-10 0-16 6-16 14z" fill="${L}"/>`),
  lemon: s(`<circle cx="32" cy="32" r="24" fill="${Y}"/><circle cx="32" cy="32" r="19" fill="#FBE29A"/>
    <path d="M32 13v38M13 32h38M18.6 18.6l26.8 26.8M45.4 18.6L18.6 45.4" stroke="${Y}" stroke-width="2.4"/><circle cx="32" cy="32" r="3" fill="${W}"/>`),
  glass: s(`<path d="M16 10h32l-4 46a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4z" fill="${C}"/><path d="M18 24h28l-2.8 32a4 4 0 0 1-4 4H24.8a4 4 0 0 1-4-4z" fill="${T}"/>
    <path d="M38 4l-4 22" stroke="${B}" stroke-width="3" stroke-linecap="round"/><ellipse cx="32" cy="24" rx="14" ry="2.5" fill="#C97A5B"/>`),
  sachet: s(`<path d="M16 6h32v52H16z" fill="${O}"/><path d="M16 6h32v6H16zM16 52h32v6H16z" fill="${T}"/>
    <path d="M16 12l2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2" stroke="${B}" stroke-width="1" fill="none" opacity=".4"/>
    <path d="M22 24h10l4 5-4 5H22l4-5z" fill="${B}"/><path d="M22 40h20M22 45h14" stroke="${B}" stroke-width="2.5" stroke-linecap="round"/>`),
  water: s(`<path d="M32 6c10 14 18 24 18 34a18 18 0 0 1-36 0c0-10 8-20 18-34z" fill="#7FB8D6"/><path d="M24 42a8 8 0 0 0 8 8" stroke="${W}" stroke-width="3" fill="none" stroke-linecap="round"/>`),
  spoon: s(`<ellipse cx="24" cy="20" rx="10" ry="13" transform="rotate(-35 24 20)" fill="#B9B3A8"/><path d="M30 28l22 26" stroke="#8E877C" stroke-width="5" stroke-linecap="round"/>`),
  fibre: s(`<path d="M32 58V14" stroke="${G}" stroke-width="2.5" stroke-linecap="round"/>
    ${[16,24,32,40].map((y,i)=>`<ellipse cx="25" cy="${y}" rx="7" ry="4" transform="rotate(-35 25 ${y})" fill="${i%2?Y:P}"/><ellipse cx="39" cy="${y}" rx="7" ry="4" transform="rotate(35 39 ${y})" fill="${i%2?P:Y}"/>`).join('')}
    <ellipse cx="32" cy="9" rx="4" ry="6" fill="${Y}"/>`),
  vitamin: s(`<rect x="8" y="24" width="48" height="18" rx="9" transform="rotate(-35 32 33)" fill="${O}"/>
    <path d="M32 33l-12.9 9.1A9 9 0 0 1 9 27.4l10-7 13 12.6z" fill="${Y}" transform="translate(0 0)"/>
    <circle cx="48" cy="48" r="7" fill="${L}"/><circle cx="14" cy="50" r="5" fill="${T}"/>`),
  enzyme: s(`<circle cx="20" cy="22" r="8" fill="${T}"/><circle cx="44" cy="20" r="6" fill="${O}"/><circle cx="34" cy="44" r="9" fill="${G}"/><circle cx="14" cy="46" r="5" fill="${Y}"/>
    <path d="M20 22l24-2M20 22l14 22M44 20l-10 24M34 44l-20 2" stroke="${B}" stroke-width="2.4"/>`),
  protein: s(`<path d="M10 40c0-12 10-22 22-22s22 10 22 22" fill="${T}"/><rect x="6" y="40" width="52" height="8" rx="4" fill="${B}"/>
    <path d="M20 30l4 4M30 24l2 5M42 28l-3 4" stroke="${W}" stroke-width="2.5" stroke-linecap="round"/>`),
  flame: s(`<path d="M32 6c4 10 16 16 16 30a16 16 0 0 1-32 0c0-8 4-12 8-16 0 6 2 10 6 10-2-10 0-18 2-24z" fill="${O}"/><path d="M32 30c3 5 8 8 8 14a8 8 0 0 1-16 0c0-4 4-8 8-14z" fill="${Y}"/>`),
  sugar: s(`<path d="M14 24l18-10 18 10v20L32 54 14 44z" fill="${W}" stroke="${P}" stroke-width="2"/><path d="M14 24l18 10 18-10M32 34v20" stroke="${P}" stroke-width="2" fill="none"/>`),
  blender: s(`<path d="M20 8h24l-4 32H24z" fill="#BFD7E2"/><rect x="18" y="40" width="28" height="16" rx="4" fill="${B}"/><circle cx="32" cy="48" r="3" fill="${O}"/><path d="M26 30l12-4" stroke="${W}" stroke-width="2.5" stroke-linecap="round"/>`),
  scale: s(`<rect x="10" y="30" width="44" height="22" rx="6" fill="${C}"/><rect x="18" y="36" width="28" height="9" rx="2" fill="${B}"/><path d="M8 26h48" stroke="${T}" stroke-width="4" stroke-linecap="round"/><text x="32" y="43.5" font-size="7" text-anchor="middle" fill="${L}" font-family="monospace">050</text>`),
  shaker: s(`<path d="M20 16h24v38a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4z" fill="${G}"/><rect x="18" y="8" width="28" height="9" rx="3" fill="${B}"/><path d="M26 28h12M26 34h12M26 40h12" stroke="${L}" stroke-width="2" stroke-linecap="round"/>`),
  milk: s(`<path d="M22 6h20v8l6 10v34H16V24l6-10z" fill="${W}" stroke="${P}" stroke-width="2"/><path d="M16 34h32v14H16z" fill="#7FB8D6"/><path d="M22 14h20" stroke="${P}" stroke-width="2"/>`),
  sun: s(`<circle cx="32" cy="34" r="12" fill="${Y}"/><g stroke="${O}" stroke-width="3" stroke-linecap="round"><path d="M32 12v-6M32 62v-6M10 34H4M60 34h-6M16.4 18.4l-4-4M51.6 18.4l4-4M16.4 49.6l-4 4M51.6 49.6l4 4"/></g>`),
  desk: s(`<rect x="8" y="12" width="48" height="30" rx="3" fill="${B}"/><rect x="12" y="16" width="40" height="22" fill="#7FB8D6"/><path d="M26 42l-4 10h20l-4-10" fill="${P}"/><path d="M18 52h28" stroke="${B}" stroke-width="3" stroke-linecap="round"/>`),
  shoe: s(`<path d="M6 40c8 0 12-4 16-12l10 4c6 2 10 6 22 6 4 0 6 4 4 8H6z" fill="${T}"/><path d="M6 46h52v4H6z" fill="${B}"/><path d="M24 32l4 2M28 29l4 2" stroke="${W}" stroke-width="2" stroke-linecap="round"/>`),
  moon: s(`<path d="M40 8a24 24 0 1 0 16 38A20 20 0 0 1 40 8z" fill="${C}"/><circle cx="20" cy="22" r="2" fill="${Y}"/><circle cx="48" cy="16" r="1.6" fill="${Y}"/>`),
  dumbbell: s(`<rect x="4" y="22" width="8" height="20" rx="2" fill="${B}"/><rect x="12" y="18" width="8" height="28" rx="2" fill="${T}"/><rect x="44" y="18" width="8" height="28" rx="2" fill="${T}"/><rect x="52" y="22" width="8" height="20" rx="2" fill="${B}"/><rect x="20" y="29" width="24" height="6" fill="${P}"/>`),
  leaf: s(`<path d="M10 54C10 26 26 10 54 10c0 28-16 44-44 44z" fill="${L}"/><path d="M10 54L42 22" stroke="${G}" stroke-width="3" stroke-linecap="round"/>`),
  clock: s(`<circle cx="32" cy="32" r="24" fill="${C}"/><circle cx="32" cy="32" r="24" fill="none" stroke="${B}" stroke-width="3"/><path d="M32 18v14l9 6" stroke="${T}" stroke-width="4" fill="none" stroke-linecap="round"/>`),
  allergen: s(`<path d="M32 6l26 46H6z" fill="${Y}"/><path d="M32 24v14" stroke="${B}" stroke-width="5" stroke-linecap="round"/><circle cx="32" cy="45" r="3" fill="${B}"/>`),
  cross: s(`<path d="M10 10l44 44M54 10L10 54" stroke="${T}" stroke-width="6" stroke-linecap="round"/>`),
};
window.icon = (k, cls='') => `<i class="ic ${cls}">${window.ICONS[k]||''}</i>`;
})();
