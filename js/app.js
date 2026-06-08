const productData = {
  inflation: {
    title: "Pelosi ETP",
    ticker: "PELOSI",
    badge: "Political Alpha",
    riskLabel: "High Risk",
    riskClass: "risk-high",
    summary: "A politician-inspired thematic ETP that tracks publicly disclosed congressional trading activity, with emphasis on technology, cybersecurity, AI infrastructure, defense, energy, and cash-like buffers.",
    price: "$48.76",
    delta: "▲ $1.12 (2.35%) 1D",
    sideChange: "▲ $1.12 (2.35%)",
    nav: "$48.62",
    inav: "$48.70 ●",
    aum: "$245.8M",
    volume: "$21.7M",
    expense: "0.95%",
    story1: "Pelosi ETP follows publicly disclosed trading activity associated with Nancy Pelosi and other U.S. politicians, using those disclosures as signals for policy-linked equity exposure.",
    story2: "The product focuses on politicians whose portfolios have historically leaned toward technology and policy-sensitive sectors. Pelosi retires in January 2027, leaving more than a year of disclosed trading signals to follow, while the portfolio can also draw inspiration from other politicians.",
    videoTitle: "Watch the Pelosi ETP Story",
    videoCaption: "A 3 minute overview of disclosed congressional trading signals, policy catalysts, portfolio rules, and risk controls.",
    aiSubtitle: "Ask AI to understand congressional trading disclosures, policy catalysts, portfolio construction, and risks.",
    ask: "Ask anything about political-trade tracking...",
    icon: `<svg class="al-icon" aria-hidden="true" focusable="false"><use href="#icon-watch"></use></svg>`,
    allocations: [["Semiconductors & AI","27.0%"],["Cybersecurity & Software","20.0%"],["Mega-Cap Platforms","21.0%"],["Energy & Infrastructure","12.0%"],["Short-Term Treasuries / Cash","20.0%"]],
    holdings: [["AVGO","Broadcom Inc.","15.00%"],["GOOGL","Alphabet Inc.","13.00%"],["PANW","Palo Alto Networks","12.00%"],["AMZN","Amazon.com Inc.","8.00%"],["CRWD","CrowdStrike Holdings","8.00%"],["VST","Vistra Corp.","7.00%"]]
  },
  arb: {
    title: "Jim Simons ETP",
    ticker: "JSIM",
    badge: "Quantitative Alpha",
    riskLabel: "Middle Risk",
    riskClass: "risk-middle",
    summary: "A Jim Simons-inspired quantitative ETP shaped by the legacy of Renaissance Technologies, using rigorous data analysis, statistical probabilities, and systematic equity selection.",
    price: "$29.17",
    delta: "▲ $0.29 (1.02%) 1D",
    sideChange: "▲ $0.29 (1.02%)",
    nav: "$29.11",
    inav: "$29.16 ●",
    aum: "$118.4M",
    volume: "$12.8M",
    expense: "0.85%",
    story1: "Jim Simons was an MIT-trained mathematician and former code breaker who founded Renaissance Technologies and helped define the modern quantitative investing playbook.",
    story2: "Although Jim Simons recently passed away, his fund and legacy live on. This ETP draws inspiration from the Renaissance style: advanced mathematical models, algorithmic signals, and disciplined portfolio construction rooted in data rather than narrative.",
    videoTitle: "Watch the Jim Simons ETP Story",
    videoCaption: "A 3 minute overview of Renaissance-style quant investing, statistical signals, portfolio rules, and risk controls.",
    aiSubtitle: "Ask AI to understand quantitative signals, data-driven stock selection, factor models, and risk management.",
    ask: "Ask anything about Jim Simons-inspired quant investing...",
    icon: `<svg class="al-icon" aria-hidden="true" focusable="false"><use href="#icon-search"></use></svg>`,
    allocations: [["Quant Models & Data Signals","24.0%"],["Semiconductors & Compute","20.0%"],["Healthcare & Biotech","18.0%"],["Gold & Macro Hedges","16.0%"],["Platforms, Software & Cash Buffer","22.0%"]],
    holdings: [["PLTR","Palantir Technologies","11.00%"],["UTHR","United Therapeutics","10.00%"],["MU","Micron Technology","10.00%"],["AAPL","Apple Inc.","8.00%"],["KGC","Kinross Gold","8.00%"],["VRSN","VeriSign Inc.","7.00%"]]
  },
  stable: {
    title: "Stable Yield ETP",
    ticker: "SYD",
    badge: "Market Neutral Yield",
    riskLabel: "Low Risk",
    riskClass: "risk-low",
    summary: "A market-neutral crypto yield product designed to capture funding, basis, and liquidity-premium opportunities while minimizing directional exposure to BTC and ETH.",
    price: "$1.08",
    delta: "▲ $0.002 (0.21%) 1D",
    sideChange: "▲ $0.002 (0.21%)",
    nav: "$1.079",
    inav: "$1.080 ●",
    aum: "$224.6M",
    volume: "$33.4M",
    expense: "0.48%",
    story1: "Crypto markets contain persistent yield sources from funding, basis, lending spreads, and liquidity premiums. These opportunities can be harvested without taking large directional exposure to BTC or ETH.",
    story2: "The Stable Yield ETP (SYD) combines market-neutral positioning with risk controls around venue concentration, depeg risk, margin buffers, and liquidity conditions.",
    videoTitle: "Watch the Stable Yield Story",
    videoCaption: "A 3 minute overview of funding capture, basis opportunities, liquidity premiums, and market-neutral crypto yield construction.",
    aiSubtitle: "Ask AI to understand funding, basis, liquidity premiums, depeg risk, margin buffers, and market-neutral execution.",
    ask: "Ask anything about stable yield strategies...",
    icon: `<svg class="al-icon" aria-hidden="true" focusable="false"><use href="#icon-stable"></use></svg>`,
    allocations: [["Funding Capture","34.0%"],["Basis Strategies","28.0%"],["Liquidity Premium","18.0%"],["Lending & Cash","12.0%"],["Risk Buffer","8.0%"]],
    holdings: [["USDC","Stablecoin Reserve","19.0%"],["T-Bill","Tokenized Treasury","12.0%"],["BTC-HEDGE","BTC Delta Hedge","9.4%"],["ETH-HEDGE","ETH Delta Hedge","8.7%"],["PERP-FUND","Funding Basket","7.9%"],["CASH","Liquidity Buffer","5.4%"]]
  }
}
;
productData.duan = {
  ...productData.arb,
  title: "Duan Yongping ETP",
  ticker: "DUAN",
  badge: "Value Discipline",
  riskLabel: "Middle Risk",
  riskClass: "risk-middle",
  summary: "A value-investing themed ETP inspired by Duan Yongping's long-term discipline, consumer brands, platform businesses, and quality compounders.",
  price: "$36.42",
  delta: "▲ $0.84 (2.36%) 1D",
  sideChange: "▲ $0.84 (2.36%)",
  nav: "$36.31",
  inav: "$36.39 ●",
  aum: "$156.2M",
  volume: "$9.6M",
  expense: "0.78%",
  story1: "Duan Yongping ETP follows a quality-and-value framework inspired by long-term ownership, durable consumer brands, and disciplined capital allocation.",
  story2: "The portfolio emphasizes resilient cash flow, founder-led culture, pricing power, and businesses that can compound over long time horizons.",
  videoTitle: "Watch the Duan Yongping ETP Story",
  videoCaption: "A 3 minute overview of value discipline, consumer compounders, portfolio rules, and risk controls.",
  aiSubtitle: "Ask AI to understand value investing, quality compounders, consumer brands, and long-term portfolio construction.",
  ask: "Ask anything about Duan Yongping-inspired value investing..."
};
productData.leopold = {
  ...productData.inflation,
  title: "Leopold ETP",
  ticker: "LEO",
  badge: "AI Supercycle",
  riskLabel: "High Risk",
  riskClass: "risk-high",
  summary: "An AI-supercycle themed ETP inspired by accelerated AI capability growth, compute demand, power infrastructure, and national-scale AI investment.",
  price: "$22.18",
  delta: "▲ $0.53 (2.45%) 1D",
  sideChange: "▲ $0.53 (2.45%)",
  nav: "$22.09",
  inav: "$22.16 ●",
  aum: "$98.7M",
  volume: "$7.4M",
  expense: "0.92%",
  story1: "Leopold ETP packages the AI supercycle thesis into a tradeable product, focusing on compute, power, semiconductors, data-center infrastructure, and AI platforms.",
  story2: "The product is designed for investors seeking exposure to accelerated AI capability, infrastructure bottlenecks, and the economic layer around frontier models.",
  videoTitle: "Watch the Leopold ETP Story",
  videoCaption: "A 3 minute overview of AI supercycle exposure, compute bottlenecks, infrastructure demand, and risk controls.",
  aiSubtitle: "Ask AI to understand AI capex, compute constraints, power demand, semiconductors, and frontier-model infrastructure.",
  ask: "Ask anything about the AI supercycle..."
}

let currentProduct = 'inflation';
function setText(id, value) { const el = document.getElementById(id); if(el) el.textContent = value; }
function renderProduct(productKey) {
  currentProduct = productKey || 'inflation';
  const p = productData[currentProduct] || productData.inflation;
  const title = document.getElementById('detailTitle');
  if(title) title.innerHTML = `${p.title} <span class="ticker" id="detailTicker">(${p.ticker})</span>`;
  const detailRiskTag = document.getElementById('detailRiskTag');
  if(detailRiskTag){
    detailRiskTag.className = `risk-pill title-risk-tag ${p.riskClass || ''}`.trim();
    detailRiskTag.textContent = p.riskLabel || 'Risk';
  }
  const icon = document.getElementById('detailIcon'); if(icon) icon.innerHTML = p.icon;
  const tradeMiniIcon = document.getElementById('tradeMiniIcon'); if(tradeMiniIcon) tradeMiniIcon.innerHTML = p.icon;
  const mintMiniIcon = document.getElementById('mintMiniIcon'); if(mintMiniIcon) mintMiniIcon.innerHTML = p.icon;
  setText('tradeProductName', p.title);
  setText('tradeProductTicker', p.ticker);
  setText('detailBadgeTheme', p.badge);
  setText('detailSummary', p.summary);
  setText('overviewPrice', p.price);
  setText('overviewDelta', p.delta);
  setText('storyP1', p.story1);
  setText('storyP2', p.story2);
  setText('videoTitle', p.videoTitle);
  setText('aiSubtitle', p.aiSubtitle);
  setText('sidePrice', p.price);
  setText('sideChange', p.sideChange);
  setText('sideNav', p.nav);
  setText('sideInav', p.inav);
  setText('sideAum', p.aum);
  setText('sideVolume', p.volume);
  setText('sideExpense', p.expense);
  const sideTitle = document.getElementById('sideTitle');
  if(sideTitle) sideTitle.innerHTML = `${p.title} <span style="font-size:16px;font-weight:500;color:#31415f">(${p.ticker})</span>`;
  const aiAsk = document.getElementById('aiAskInput'); if(aiAsk) aiAsk.placeholder = p.ask;
  setText('mintTickerOut', p.ticker);
  const caption = document.getElementById('videoCaption'); if(caption) caption.textContent = p.videoCaption;
  const allocationRows = document.querySelectorAll('.allocation-card .legend-row');
  p.allocations.forEach((row, i)=>{
    const target = allocationRows[i];
    if(target) {
      const spans = target.querySelectorAll('span');
      const strong = target.querySelector('strong');
      if(spans[1]) spans[1].textContent = row[0];
      if(strong) strong.textContent = row[1];
    }
  });
  const holdingRows = document.querySelectorAll('.holdings-table tr');
  p.holdings.forEach((row, i)=>{
    const target = holdingRows[i+1];
    if(target) {
      const tds = target.querySelectorAll('td');
      if(tds[0]) tds[0].innerHTML = `<strong>${row[0]}</strong>`;
      if(tds[1]) tds[1].textContent = row[1];
      if(tds[2]) tds[2].textContent = row[2];
    }
  });
  setText('compactRiskLevel', (p.riskLabel || '').replace(' Risk',''));
  const detailHeroArt = document.getElementById('detailHeroArt');
  if(detailHeroArt) detailHeroArt.style.backgroundImage = `url(${p.heroArt || ''})`;
  const detailScreen = document.getElementById('detail');
  if(detailScreen) detailScreen.dataset.product = currentProduct;
  const detail = document.querySelector('#detail .detail-main');
  if(detail) { detail.classList.remove('detail-fade'); void detail.offsetWidth; detail.classList.add('detail-fade'); }
}


productData.inflation.heroArt = "assets/image_12a96d4b7dc5.png";
productData.stable.heroArt = "assets/image_438837b9bc0d.png";
productData.duan.heroArt = "assets/image_7059c68c2ab2.png";
productData.leopold.heroArt = "assets/image_5710c459408f.png";


/* Detail hero uses transparent cutout elements instead of full image panels */
productData.inflation.heroArt = "assets/image_b198fbfc075c.png";
productData.stable.heroArt = "assets/image_293102eb11ac.png";
productData.duan.heroArt = "assets/image_a8e67386fe0b.png";
productData.leopold.heroArt = "assets/image_7174578cea78.png";


/* Product detail overrides for current Top Performers list */
productData.inflation.ticker = "PLSI";
productData.inflation.badge = "Congress Trades";
productData.inflation.riskLabel = "High Risk";
productData.inflation.riskClass = "risk-high";
productData.inflation.summary = "Political signal investing through public disclosure data.";
productData.inflation.price = "$48.76";
productData.inflation.delta = "▲ $1.12 (2.35%) 1D";
productData.inflation.sideChange = "▲ $1.12 (2.35%)";
productData.inflation.aum = "$245.8M";

productData.duan.ticker = "DYP";
productData.duan.badge = "Value Discipline";
productData.duan.riskLabel = "Middle Risk";
productData.duan.riskClass = "risk-middle";
productData.duan.summary = "Value investing with discipline, patience, and brand conviction.";
productData.duan.price = "$36.42";
productData.duan.delta = "▲ $0.84 (2.36%) 1D";
productData.duan.sideChange = "▲ $0.84 (2.36%)";
productData.duan.aum = "$156.2M";

productData.leopold.ticker = "AGI";
productData.leopold.badge = "AI";
productData.leopold.riskLabel = "High Risk";
productData.leopold.riskClass = "risk-high";
productData.leopold.summary = "Investing in the infrastructure behind the AGI race.";
productData.leopold.price = "$22.18";
productData.leopold.delta = "▲ $0.53 (2.45%) 1D";
productData.leopold.sideChange = "▲ $0.53 (2.45%)";
productData.leopold.aum = "$98.7M";

productData.stable.ticker = "SYD";
productData.stable.badge = "Stable Yield";
productData.stable.riskLabel = "Low Risk";
productData.stable.riskClass = "risk-low";
productData.stable.summary = "Market-neutral yield from liquidity and funding markets.";
productData.stable.price = "$12.84";
productData.stable.delta = "▲ $0.08 (0.63%) 1D";
productData.stable.sideChange = "▲ $0.08 (0.63%)";
productData.stable.aum = "$224.6M";

const screens=[...document.querySelectorAll('.screen')];
const navs=[...document.querySelectorAll('.nav a')];
const toast=document.getElementById('toast');
function go(id){screens.forEach(s=>{const active=s.id===id; s.classList.toggle('active',active); if(active) s.scrollTop=0;});navs.forEach(n=>n.classList.toggle('active',n.dataset.target===id)); if(id==='detail'){setDetailTab('trade');} if(id==='create' && typeof window.resetLauncherWizard==='function'){window.resetLauncherWizard();}}
document.addEventListener('click',e=>{const t=e.target.closest('[data-target]'); if(t){const p=t.dataset.product || t.closest('[data-product]')?.dataset.product; if(t.dataset.target==='detail' && p) renderProduct(p); go(t.dataset.target);}});
function note(msg){toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800)}
const login=document.getElementById('login');
document.getElementById('signinBtn').onclick=()=>login.classList.add('show');
const walletModal=document.getElementById('walletModal');
const walletClose=document.getElementById('walletClose');
const walletSearch=document.getElementById('walletSearch');
function openWalletModal(){walletModal.classList.add('show');walletModal.setAttribute('aria-hidden','false');setTimeout(()=>walletSearch?.focus(),80)}
function closeWalletModal(){walletModal.classList.remove('show');walletModal.setAttribute('aria-hidden','true')}
document.getElementById('walletBtn').onclick=openWalletModal;
walletClose.onclick=closeWalletModal;
walletModal.onclick=e=>{if(e.target===walletModal)closeWalletModal()};
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&walletModal.classList.contains('show'))closeWalletModal()});
document.querySelectorAll('.insight-btn').forEach(btn=>{if(btn.textContent.trim().toLowerCase()==='connect wallet')btn.addEventListener('click',openWalletModal)});
document.querySelectorAll('.wallet-row').forEach(row=>row.addEventListener('click',()=>{closeWalletModal();note(row.dataset.wallet+' selected')}));
walletSearch?.addEventListener('input',()=>{const q=walletSearch.value.trim().toLowerCase();document.querySelectorAll('.wallet-row').forEach(row=>{row.style.display=row.dataset.wallet.toLowerCase().includes(q)?'grid':'none'})});
document.getElementById('continueBtn').onclick=()=>{login.classList.remove('show');note('Signed in');};
login.onclick=e=>{if(e.target===login)login.classList.remove('show')};
const legacyPublishBtn=document.getElementById('publishBtn'); if(legacyPublishBtn){legacyPublishBtn.onclick=()=>note('ETP draft published');}
const detailTabs=[...document.querySelectorAll('[data-detail-tab]')];
const detailPanels={trade:document.getElementById('detail-trade'),documents:document.getElementById('detail-documents')};
function setDetailTab(tab){detailTabs.forEach(el=>el.classList.toggle('active',el.dataset.detailTab===tab)); Object.entries(detailPanels).forEach(([k,p])=>p.classList.toggle('active',k===tab));}
detailTabs.forEach(el=>el.addEventListener('click',()=>setDetailTab(el.dataset.detailTab)));
[...document.querySelectorAll('.product[data-target="detail"], .view-link[data-target="detail"], .pill[data-target="detail"]')].forEach(el=>el.addEventListener('click',()=>setDetailTab('trade')));
[...document.querySelectorAll('.outline-btn'), ...document.querySelectorAll('.doc-btn')].forEach(el=>el.addEventListener('click',()=>note('Demo action')));
[...document.querySelectorAll('.secondary-btn')].forEach(el=>el.addEventListener('click',()=>note('Support flow opened')));
const reviewBtn=document.querySelector('.review-btn'); if(reviewBtn){reviewBtn.onclick=()=>note('Order review opened');}



const heroStats=[...document.querySelectorAll('.hero-stat-number')];
function animateHeroStat(el){
  if(el.dataset.done==='1') return;
  el.dataset.done='1';
  const end=parseFloat(el.dataset.value || '0');
  const prefix=el.dataset.prefix || '';
  const suffix=el.dataset.suffix || '';
  const decimals=parseInt(el.dataset.decimals || '0',10);
  const duration=1200;
  const start=performance.now();
  function frame(now){
    const t=Math.min((now-start)/duration,1);
    const eased=1-Math.pow(1-t,3);
    const val=end*eased;
    el.textContent = prefix + val.toFixed(decimals) + suffix;
    if(t<1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
const heroStatObserver=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) animateHeroStat(entry.target); });
},{threshold:.45});
heroStats.forEach(el=>heroStatObserver.observe(el));

const assetTable=document.getElementById('assetTable');
const assetRows=assetTable ? [...assetTable.querySelectorAll('tbody .asset-row')] : [];
const assetSearchInput=document.getElementById('assetSearchInput');
const assetSearchBtn=document.getElementById('assetSearchBtn');
const assetCount=document.getElementById('assetCount');
const assetFilterBtns=[...document.querySelectorAll('.asset-chip')];
const sortBtns=[...document.querySelectorAll('.sort-btn')];
let activeFilter='all';
let sortState={key:null,dir:1};
function trendLabel(score){ if(score>=70) return 'Strong'; if(score>=60) return 'Positive'; return 'Stable'; }
function updateAssetCount(){
  const visible=assetRows.filter(r=>!r.classList.contains('hidden')).length;
  if(assetCount) assetCount.textContent = `${visible} asset${visible===1?'':'s'}`;
  let empty=document.getElementById('assetEmptyState');
  if(visible===0){
    if(!empty){
      empty=document.createElement('div');
      empty.id='assetEmptyState';
      empty.className='asset-empty';
      empty.textContent='No assets match your current search or filter.';
      assetTable.parentElement.appendChild(empty);
    }
  }else if(empty){ empty.remove(); }
}
function applyAssetFilters(){
  const q=(assetSearchInput?.value || '').trim().toLowerCase();
  assetRows.forEach(row=>{
    const hay=(row.dataset.name+' '+row.dataset.theme+' '+row.dataset.category).toLowerCase();
    const matchText=!q || hay.includes(q);
    const matchFilter=activeFilter==='all' || row.dataset.category===activeFilter;
    row.classList.toggle('hidden', !(matchText && matchFilter));
  });
  updateAssetCount();
}
function sortAssetRows(key){
  if(!assetTable) return;
  sortState.dir = sortState.key===key ? sortState.dir * -1 : 1;
  sortState.key = key;
  sortBtns.forEach(btn=>btn.classList.toggle('active', btn.dataset.sort===key));
  const tbody=assetTable.querySelector('tbody');
  const rows=[...assetRows];
  rows.sort((a,b)=>{
    let av,bv;
    if(key==='product'){ av=a.dataset.name.toLowerCase(); bv=b.dataset.name.toLowerCase(); }
    else if(key==='theme'){ av=a.dataset.theme.toLowerCase(); bv=b.dataset.theme.toLowerCase(); }
    else if(key==='price'){ av=parseFloat(a.dataset.price); bv=parseFloat(b.dataset.price); }
    else if(key==='volume'){ av=parseFloat(a.dataset.volume); bv=parseFloat(b.dataset.volume); }
    else if(key==='alltime'){ av=parseFloat(a.dataset.alltime); bv=parseFloat(b.dataset.alltime); }
    else if(key==='return3m'){ av=parseFloat(a.dataset.return3m); bv=parseFloat(b.dataset.return3m); }
    else if(key==='trend'){ av=parseFloat(a.dataset.trend || a.dataset.return3m || 0); bv=parseFloat(b.dataset.trend || b.dataset.return3m || 0); }
    else if(key==='risk'){ av=parseFloat(a.dataset.risk); bv=parseFloat(b.dataset.risk); }
    else { av=0; bv=0; }
    if(typeof av === 'string') return av.localeCompare(bv) * sortState.dir;
    return (av - bv) * sortState.dir;
  });
  rows.forEach(r=>tbody.appendChild(r));
  applyAssetFilters();
}
if(assetSearchInput){
  assetSearchInput.addEventListener('input', applyAssetFilters);
  assetSearchInput.addEventListener('keydown', e=>{ if(e.key==='Enter') applyAssetFilters(); });
}
if(assetSearchBtn){ assetSearchBtn.addEventListener('click', ()=>{ assetSearchInput?.focus(); applyAssetFilters(); }); }
assetFilterBtns.forEach(btn=>btn.addEventListener('click', ()=>{
  assetFilterBtns.forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  activeFilter=btn.dataset.filter;
  applyAssetFilters();
}));
sortBtns.forEach(btn=>btn.addEventListener('click', ()=>sortAssetRows(btn.dataset.sort)));
assetRows.forEach(row=>row.addEventListener('click', e=>{ if(!e.target.closest('button')){ renderProduct(row.dataset.product || 'inflation'); go('detail'); }}));
applyAssetFilters();


const themeSections=[...document.querySelectorAll('#themes .section')];
function setupThemeReveal(){
  const root = document.querySelector('#themes');
  if(!themeSections.length) return;
  themeSections[0].classList.add('reveal');

  if(!('IntersectionObserver' in window)){
    themeSections.forEach(section=>section.classList.add('reveal'));
    return;
  }

  const revealObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('reveal');
      }else if(entry.boundingClientRect.top > 40){
        entry.target.classList.remove('reveal');
      }
    });
  },{
    root: root || null,
    threshold: .24,
    rootMargin: '-6% 0px -10% 0px'
  });

  themeSections.forEach(section=>revealObserver.observe(section));
}
setupThemeReveal();



function initInsightGlobe(){
  const canvas = document.getElementById('globeCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let width=0,height=0,dpr=window.devicePixelRatio||1;
  let globeRadius=0,centerX=0,centerY=0,rotation=0;
  let dots=[],photons=[];
  let pointer={x:.5,y:.5,active:false};
  function buildDots(){
    dots=[];
    for(let lat=-78;lat<=78;lat+=5){
      const latR=lat*Math.PI/180;
      const count=Math.max(18, Math.floor(48*Math.cos(latR)*Math.cos(latR)+18));
      for(let i=0;i<count;i++) dots.push({lat:latR, lon:(i/count)*Math.PI*2, size:1.2+Math.random()*1.8});
    }
  }
  function buildPhotons(){
    photons=Array.from({length:18},()=>({
      lon:Math.random()*Math.PI*2,
      latBase:(-58+Math.random()*116)*Math.PI/180,
      latAmp:(5+Math.random()*11)*Math.PI/180,
      speed:0.0018+Math.random()*0.0022,
      phase:Math.random()*Math.PI*2,
      size:1.5+Math.random()*2.4,
      glow:10+Math.random()*16,
      trail:[]
    }));
  }
  function resize(){
    const rect=canvas.getBoundingClientRect();
    width=rect.width; height=rect.height; dpr=window.devicePixelRatio||1;
    canvas.width=Math.round(width*dpr); canvas.height=Math.round(height*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    globeRadius=Math.min(width*0.34,height*0.45);
    centerX=width*0.62; centerY=height*0.5;
    buildDots(); buildPhotons();
  }
  function project(lat,lon){
    return {x:Math.cos(lat)*Math.cos(lon), y:Math.sin(lat), z:Math.cos(lat)*Math.sin(lon)};
  }
  function drawBackground(){
    const grad=ctx.createRadialGradient(centerX,centerY,globeRadius*0.14,centerX,centerY,globeRadius*1.55);
    grad.addColorStop(0,'rgba(63,96,156,0.18)');
    grad.addColorStop(0.42,'rgba(28,54,102,0.12)');
    grad.addColorStop(1,'rgba(9,28,69,0)');
    ctx.fillStyle=grad; ctx.fillRect(0,0,width,height);
  }
  function drawFrame(t){
    ctx.clearRect(0,0,width,height); drawBackground(); rotation+=0.0019;
    const tiltX=pointer.active ? (pointer.y-.5)*0.35 : 0.06;
    const tiltY=pointer.active ? (pointer.x-.5)*0.45 : -0.14;
    const halo=ctx.createRadialGradient(centerX,centerY,globeRadius*0.1,centerX,centerY,globeRadius*1.25);
    halo.addColorStop(0,'rgba(70,112,186,0.10)'); halo.addColorStop(0.7,'rgba(24,44,88,0.06)'); halo.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=halo; ctx.beginPath(); ctx.arc(centerX,centerY,globeRadius*1.28,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle='rgba(78,118,186,0.12)'; ctx.lineWidth=1; ctx.beginPath(); ctx.arc(centerX,centerY,globeRadius,0,Math.PI*2); ctx.stroke();

    const transformed=[];
    for(const dot of dots){
      const p=project(dot.lat, dot.lon+rotation);
      const y1=p.y*Math.cos(tiltX)-p.z*Math.sin(tiltX);
      const z1=p.y*Math.sin(tiltX)+p.z*Math.cos(tiltX);
      const x2=p.x*Math.cos(tiltY)+z1*Math.sin(tiltY);
      const z2=-p.x*Math.sin(tiltY)+z1*Math.cos(tiltY);
      if(z2<-0.2) continue;
      transformed.push({x:x2,y:y1,z:z2,size:dot.size});
    }
    transformed.sort((a,b)=>a.z-b.z);
    for(const d of transformed){
      const sx=centerX+d.x*globeRadius, sy=centerY+d.y*globeRadius;
      const alpha=0.10+(d.z+1)*0.18;
      const s=d.size*(0.68+(d.z+1)*0.22);
      ctx.fillStyle=`rgba(82,122,186,${alpha})`;
      if(ctx.roundRect){ ctx.beginPath(); ctx.roundRect(sx-s*.65, sy-s*.65, s*1.3, s*1.3, 1.4); ctx.fill(); }
      else { ctx.fillRect(sx-s*.65, sy-s*.65, s*1.3, s*1.3); }
    }
    for(const ph of photons){
      ph.lon += ph.speed;
      const lat=ph.latBase + Math.sin(t*0.00115 + ph.phase) * ph.latAmp;
      const p=project(lat, ph.lon+rotation);
      const y1=p.y*Math.cos(tiltX)-p.z*Math.sin(tiltX);
      const z1=p.y*Math.sin(tiltX)+p.z*Math.cos(tiltX);
      const x2=p.x*Math.cos(tiltY)+z1*Math.sin(tiltY);
      const z2=-p.x*Math.sin(tiltY)+z1*Math.cos(tiltY);
      const sx=centerX+x2*globeRadius, sy=centerY+y1*globeRadius;
      ph.trail.unshift({x:sx,y:sy,z:z2}); if(ph.trail.length>12) ph.trail.pop();
      for(let i=ph.trail.length-1;i>=0;i--){
        const tr=ph.trail[i]; if(tr.z<-0.06) continue;
        const a=(1-i/ph.trail.length)*(0.10+(tr.z+1)*0.16); const size=ph.size*(1-i/ph.trail.length*0.74);
        ctx.fillStyle=`rgba(176,202,232,${a})`; ctx.beginPath(); ctx.arc(tr.x,tr.y,size,0,Math.PI*2); ctx.fill();
      }
      if(z2>-0.08){
        const grd=ctx.createRadialGradient(sx,sy,0,sx,sy,ph.glow);
        grd.addColorStop(0,'rgba(219,232,245,.78)'); grd.addColorStop(.22,'rgba(122,164,210,.34)'); grd.addColorStop(1,'rgba(122,164,210,0)');
        ctx.fillStyle=grd; ctx.beginPath(); ctx.arc(sx,sy,ph.glow,0,Math.PI*2); ctx.fill();
      }
    }
    requestAnimationFrame(drawFrame);
  }
  canvas.addEventListener('mousemove',e=>{const r=canvas.getBoundingClientRect(); pointer.x=(e.clientX-r.left)/r.width; pointer.y=(e.clientY-r.top)/r.height; pointer.active=true;});
  canvas.addEventListener('mouseleave',()=>{pointer.active=false;});
  window.addEventListener('resize',resize);
  resize(); requestAnimationFrame(drawFrame);
}
initInsightGlobe();


function initLauncher(){
  const missionInput = document.getElementById('missionInput');
  const missionCount = document.getElementById('missionCount');
  const etpNameInput = document.getElementById('etpNameInput');
  const tickerInput = document.getElementById('tickerInput');
  const themeChoices = [...document.querySelectorAll('.theme-choice[data-theme]')];
  const structureCards = [...document.querySelectorAll('.structure-card')];
  const assetBuilder = document.getElementById('assetBuilder');
  const addAssetBtn = document.getElementById('addAssetBtn');
  const feeInput = document.getElementById('feeInput');
  const rebalanceInput = document.getElementById('rebalanceInput');
  const navMethodInput = document.getElementById('navMethodInput');
  const domicileInput = document.getElementById('domicileInput');
  const launcherDefaults = {structure:'Theme Basket', domicile:'Cayman Islands', fee:'0.60', rebalance:'Quarterly', nav:'Daily'};
  const modal = document.getElementById('draftModal');

  const preview = {
    ticker: document.getElementById('previewTicker'),
    name: document.getElementById('previewName'),
    subtitle: document.getElementById('previewSubtitle'),
    mission: document.getElementById('previewMission'),
    structure: document.getElementById('previewStructureTag'),
    holdings: document.getElementById('previewHoldings'),
    investor: document.getElementById('investorViewText')
  };

  const assetPool = [
    ['AAPL','Apple'],
    ['MSFT','Microsoft'],
    ['TSLA','Tesla'],
    ['NEE','NextEra Energy'],
    ['SMR','NuScale Power'],
    ['AMZN','Amazon'],
    ['GOOGL','Alphabet'],
    ['COP','ConocoPhillips']
  ];
  let poolIndex = 0;

  function getTheme(){
    return document.querySelector('.theme-choice.active[data-theme]')?.dataset.theme || 'Political Alpha';
  }

  function getStructure(){
    return document.querySelector('.structure-card.active input')?.value || launcherDefaults.structure;
  }

  function getAssets(){
    return [...document.querySelectorAll('#assetBuilder .asset-pill')].map(el=>[
      el.dataset.ticker || el.childNodes[0]?.textContent?.trim() || 'ASSET',
      el.dataset.name || el.querySelector('span')?.textContent || 'Asset'
    ]);
  }

  function updateProgress(){
    const missionDone = missionInput.value.trim().length > 8;
    const nameDone = etpNameInput.value.trim().length > 2 && tickerInput.value.trim().length > 1;
    const basketDone = getAssets().length >= 3;
    const structureDone = !!getStructure();
    const nodes = [...document.querySelectorAll('.progress-node')];
    const lines = [...document.querySelectorAll('.progress-line')];
    const states = [missionDone || nameDone, basketDone, structureDone, missionDone && nameDone && basketDone && structureDone];
    nodes.forEach((node,i)=>{
      node.classList.toggle('done', states[i] && i < 3);
      node.classList.toggle('active', !states[i] && (i===0 || states[i-1]));
    });
    lines.forEach((line,i)=>line.classList.toggle('active', states[i]));
  }

  function updatePreview(){
    const name = etpNameInput.value.trim() || 'Untitled Future ETP';
    const ticker = tickerInput.value.trim().toUpperCase() || 'DRAFT';
    const theme = getTheme();
    const structure = getStructure();
    const mission = missionInput.value.trim() || `A transparent, NAV-based ETP offering diversified exposure to ${theme.toLowerCase()}, built with institutional-grade standards and a long-term view.`;
    const assets = getAssets();
    const weights = ['25.0%','20.0%','18.0%','15.0%','12.0%','10.0%'];

    preview.ticker.textContent = ticker;
    preview.name.textContent = name;
    preview.subtitle.textContent = `Helping investors access ${theme.toLowerCase()} through a transparent ETP.`;
    preview.mission.textContent = mission;
    preview.structure.textContent = structure.toUpperCase();
    preview.investor.textContent = `${name} packages ${theme.toLowerCase()} into a NAV-based product with ${domicileInput?.value || launcherDefaults.domicile} domicile, ${feeInput?.value || launcherDefaults.fee}% management fee, ${(rebalanceInput?.value || launcherDefaults.rebalance).toLowerCase()} rebalance, and ${(navMethodInput?.value || launcherDefaults.nav).toLowerCase()} NAV methodology.`;
    preview.holdings.innerHTML = assets.slice(0,6).map((asset,i)=>`<div><b>${asset[0]}</b><span>${asset[1]}</span><strong>${weights[i] || '8.0%'}</strong></div>`).join('');
    if(missionCount) missionCount.textContent = missionInput.value.length;
    updateProgress();
  }

  [missionInput, etpNameInput, tickerInput, feeInput, rebalanceInput, navMethodInput, domicileInput].forEach(el=>{
    if(!el) return;
    el.addEventListener('input', updatePreview);
    el.addEventListener('change', updatePreview);
  });

  themeChoices.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      themeChoices.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      updatePreview();
    });
  });

  structureCards.forEach(card=>{
    card.addEventListener('click', ()=>{
      structureCards.forEach(c=>c.classList.remove('active'));
      card.classList.add('active');
      const radio = card.querySelector('input');
      if(radio) radio.checked = true;
      updatePreview();
    });
  });

  assetBuilder?.addEventListener('click', e=>{
    const remove = e.target.closest('.asset-pill button');
    if(remove){
      remove.closest('.asset-pill')?.remove();
      updatePreview();
      return;
    }
  });

  addAssetBtn?.addEventListener('click', ()=>{
    const asset = assetPool[poolIndex % assetPool.length];
    poolIndex++;
    const pill = document.createElement('div');
    pill.className = 'asset-pill';
    pill.dataset.ticker = asset[0];
    pill.dataset.name = asset[1];
    pill.innerHTML = `${asset[0]} <span>${asset[1]}</span><button>×</button>`;
    assetBuilder.insertBefore(pill, addAssetBtn);
    updatePreview();
  });

  document.getElementById('generateDraftBtn')?.addEventListener('click', ()=>{
    updatePreview();
    modal?.classList.add('show');
    note('ETP draft generated');
  });
  document.getElementById('draftCloseBtn')?.addEventListener('click', ()=>modal?.classList.remove('show'));
  document.getElementById('continueEditingBtn')?.addEventListener('click', ()=>modal?.classList.remove('show'));
  modal?.addEventListener('click', e=>{ if(e.target===modal) modal.classList.remove('show'); });
  document.getElementById('academyPlayBtn')?.addEventListener('click', ()=>note('Academy video opened'));

  updatePreview();
}
initLauncher();


function initPortfolioRecommender(){
  const riskTolerance=document.getElementById('riskTolerance');
  const returnObjective=document.getElementById('returnObjective');
  const liquidityNeed=document.getElementById('liquidityNeed');
  const timeHorizon=document.getElementById('timeHorizon');
  const minimizeBtcEth=document.getElementById('minimizeBtcEth');
  const preferRealAssets=document.getElementById('preferRealAssets');
  const profileBtns=[...document.querySelectorAll('.risk-profile-btn')];
  const scoreBadge=document.getElementById('riskScoreBadge');
  const status=document.getElementById('riskEngineStatus');
  const summary=document.getElementById('recommendationSummary');
  const donut=document.getElementById('recommendedDonut');
  const legend=document.getElementById('recommendedLegend');
  const list=document.getElementById('recommendationList');

  if(!riskTolerance || !list) return;

  const products=[
    {key:'inflation',name:'Pelosi ETP',risk:'High',color:'#111',desc:'Best fit for investors who want exposure to disclosed political trading signals and policy-linked technology themes.'},
    {key:'arb',name:'Jim Simons ETP',risk:'Middle',color:'#6b6b63',desc:'Best fit for investors who want a systematic, data-driven equity strategy inspired by Jim Simons and Renaissance Technologies.'},
    {key:'stable',name:'Stable Yield ETP',risk:'Low',color:'#d7d7d0',desc:'Best fit for investors prioritizing funding, basis, and liquidity-premium yield with lower directional exposure.'}
  ];

  function setProfile(profile){
    const presets={
      conservative:[25,30,82,32,true,false],
      balanced:[55,60,45,65,true,false],
      growth:[82,86,28,84,false,true]
    }[profile] || [55,60,45,65,true,false];
    [riskTolerance.value,returnObjective.value,liquidityNeed.value,timeHorizon.value]=presets;
    minimizeBtcEth.checked=presets[4];
    preferRealAssets.checked=presets[5];
    profileBtns.forEach(btn=>btn.classList.toggle('active',btn.dataset.profile===profile));
    updateRecommendation();
  }

  function computeWeights(){
    const r=+riskTolerance.value;
    const ret=+returnObjective.value;
    const liq=+liquidityNeed.value;
    const hor=+timeHorizon.value;
    let inflation=18 + r*.32 + ret*.22 + hor*.16 - liq*.10 + (preferRealAssets.checked?14:0);
    let arb=30 + r*.10 + ret*.14 + liq*.08 + (minimizeBtcEth.checked?6:0);
    let stable=52 - r*.26 - ret*.20 + liq*.18 - hor*.06 + (minimizeBtcEth.checked?8:0);
    inflation=Math.max(5,inflation);
    arb=Math.max(8,arb);
    stable=Math.max(5,stable);
    const total=inflation+arb+stable;
    return [inflation/total*100,arb/total*100,stable/total*100];
  }

  function updateRecommendation(){
    const vals=[
      ['riskToleranceValue',riskTolerance.value],
      ['returnObjectiveValue',returnObjective.value],
      ['liquidityNeedValue',liquidityNeed.value],
      ['timeHorizonValue',timeHorizon.value]
    ];
    vals.forEach(([id,val])=>{const el=document.getElementById(id); if(el) el.textContent=val;});

    const score=Math.round((+riskTolerance.value*.36)+(+returnObjective.value*.28)+(+timeHorizon.value*.22)-(+liquidityNeed.value*.10)+(preferRealAssets.checked?6:0)+(minimizeBtcEth.checked?-4:0));
    const clamped=Math.max(0,Math.min(100,score));
    scoreBadge.textContent=`Score ${clamped} / 100`;

    let mode='Balanced mode';
    if(clamped<38) mode='Conservative mode';
    if(clamped>68) mode='Growth mode';
    status.textContent=mode;

    const weights=computeWeights();
    const rounded=weights.map(v=>Math.round(v));
    const diff=100-rounded.reduce((a,b)=>a+b,0);
    rounded[rounded.indexOf(Math.max(...rounded))]+=diff;

    summary.textContent = clamped < 38
      ? 'Conservative allocation prioritizing liquidity, stable yield, and lower directional exposure.'
      : clamped > 68
        ? 'Growth allocation emphasizing political-trade signals and longer-term policy-linked thematic exposure.'
        : 'Balanced allocation with moderate growth, arbitrage exposure, and controlled drawdown.';

    donut.style.background=`conic-gradient(${products[0].color} 0 ${rounded[0]}%, ${products[1].color} ${rounded[0]}% ${rounded[0]+rounded[1]}%, ${products[2].color} ${rounded[0]+rounded[1]}% 100%)`;

    legend.innerHTML=products.map((p,i)=>`
      <div class="recommended-legend-row">
        <span class="legend-swatch" style="background:${p.color}"></span>
        <span>${p.name}</span>
        <b>${rounded[i]}%</b>
      </div>
    `).join('');

    list.innerHTML=products.map((p,i)=>`
      <div class="recommendation-item" data-target="detail" data-product="${p.key}">
        <div>
          <h4>${p.name}</h4>
          <p>${p.desc}</p>
          <div class="recommendation-meta">
            <span>${p.risk} risk</span>
            <span>${i===0?'Theme growth':i===1?'Arbitrage': 'Stable yield'}</span>
          </div>
        </div>
        <div class="recommendation-weight">${rounded[i]}%</div>
      </div>
    `).join('');
  }

  profileBtns.forEach(btn=>btn.addEventListener('click',()=>setProfile(btn.dataset.profile)));
  [riskTolerance,returnObjective,liquidityNeed,timeHorizon,minimizeBtcEth,preferRealAssets].forEach(el=>{
    el.addEventListener('input',()=>{
      profileBtns.forEach(btn=>btn.classList.remove('active'));
      updateRecommendation();
    });
    el.addEventListener('change',updateRecommendation);
  });
  document.getElementById('rebalanceBtn')?.addEventListener('click',()=>note('Recommended mix applied in demo mode'));
  list.addEventListener('click',e=>{
    const item=e.target.closest('[data-product]');
    if(item){ renderProduct(item.dataset.product); go('detail'); }
  });
  updateRecommendation();
}
initPortfolioRecommender();


function initFeaturedThemeInteractions(){
  const cards = [...document.querySelectorAll('.products-market-style .market-card')];
  if(!cards.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const resetCard = (card) => {
    card.style.transform = '';
    const panel = card.querySelector('.market-panel');
    const logo = card.querySelector('.market-logo');
    if(panel) panel.style.transform = '';
    if(logo) logo.style.transform = '';
  };

  cards.forEach((card) => {
    if(!reduceMotion){
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        const rotY = (px - 0.5) * 5.5;
        const rotX = (0.5 - py) * 4.2;
        card.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
        const panel = card.querySelector('.market-panel');
        const logo = card.querySelector('.market-logo');
        if(panel){
          panel.style.transform = `translateY(-2px) translateX(${(px - 0.5) * 6}px)`;
        }
        if(logo){
          logo.style.transform = `translate3d(${(px - 0.5) * 3}px, ${(py - 0.5) * 2}px, 0) scale(1.03)`;
        }
      });
      card.addEventListener('mouseleave', () => resetCard(card));
      card.addEventListener('blur', () => resetCard(card), true);
    }
  });

  const replayCharts = () => {
    const paths = document.querySelectorAll('.products-market-style .market-panel-chart path');
    paths.forEach((path) => {
      path.style.animation = 'none';
      path.getBoundingClientRect();
      path.style.animation = '';
    });
  };

  // Initial replay after layout paint so lines draw when the page opens.
  requestAnimationFrame(() => {
    setTimeout(replayCharts, 80);
  });
}
initFeaturedThemeInteractions();



function initInteractiveTradeChart(){
  const root = document.getElementById('interactiveTradeChart');
  const svg = document.getElementById('tradeInteractiveSvg');
  const tabs = document.getElementById('interactiveRangeTabs');
  const tooltip = document.getElementById('tradeChartTooltip');
  if(!root || !svg || !tabs || !tooltip) return;

  const W = 980, H = 360;
  const pad = {l:40, r:66, t:46, b:48};
  const plotW = W - pad.l - pad.r;
  const plotH = H - pad.t - pad.b;
  const gridLayer = svg.querySelector('.chart-grid-layer');
  const axisLayer = svg.querySelector('.chart-axis-layer');
  const linePath = svg.querySelector('.chart-line-path');
  const areaPath = svg.querySelector('.chart-area-path');
  const cx = svg.querySelector('.chart-crosshair-x');
  const cy = svg.querySelector('.chart-crosshair-y');
  const dot = svg.querySelector('.chart-hover-dot');

  const ranges = {
    '1D': {n:96, start:31.10, drift:.77, noise:.035, labelStep:19, labels:['05/29 08:30','05/29 14:00','05/29 20:00','05/30 02:00','05/30 07:30']},
    '1W': {n:120, start:29.72, drift:2.12, noise:.065, labelStep:24, labels:['Mon','Tue','Wed','Thu','Fri']},
    '1M': {n:140, start:27.84, drift:3.95, noise:.085, labelStep:28, labels:['May 01','May 08','May 15','May 22','May 30']},
    '3M': {n:156, start:24.62, drift:7.30, noise:.105, labelStep:31, labels:['Mar','Apr','May','Jun','Now']},
    '1Y': {n:180, start:19.88, drift:11.82, noise:.15, labelStep:36, labels:['Jun','Sep','Dec','Mar','Now']},
    'ALL': {n:210, start:15.40, drift:16.12, noise:.18, labelStep:42, labels:['2024','Q3 24','2025','Q3 25','2026']}
  };

  const clamp = (v,min,max)=>Math.max(min,Math.min(max,v));
  function seededNoise(i, seed){
    const a = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
    return (a - Math.floor(a)) - .5;
  }
  function makeData(range){
    const cfg = ranges[range] || ranges['1D'];
    const seed = range.split('').reduce((a,c)=>a+c.charCodeAt(0),0);
    let data=[];
    let value = cfg.start;
    for(let i=0;i<cfg.n;i++){
      const t = i/(cfg.n-1);
      const wave = Math.sin(t*Math.PI*3.2+seed*.01)*0.12 + Math.sin(t*Math.PI*9.4)*0.045;
      const pulse = Math.max(0, Math.sin((t-.58)*Math.PI*3))*0.25;
      value = cfg.start + cfg.drift*t + wave + pulse + seededNoise(i,seed)*cfg.noise;
      data.push({i, value});
    }
    data[data.length-1].value = 31.84;
    return data;
  }

  let currentRange='1D';
  let data = makeData(currentRange);
  let viewStart = 0;
  let viewEnd = data.length - 1;
  let isDragging = false;
  let dragX = 0;
  let dragStart = 0;
  let dragEnd = 0;

  function visibleData(){
    const a = Math.floor(viewStart), b = Math.ceil(viewEnd);
    return data.slice(a,b+1);
  }
  function getScales(){
    const vis = visibleData();
    let min = Math.min(...vis.map(d=>d.value));
    let max = Math.max(...vis.map(d=>d.value));
    const gap = Math.max(.16,(max-min)*.16);
    min -= gap; max += gap;
    const x = idx => pad.l + ((idx-viewStart)/(viewEnd-viewStart))*plotW;
    const y = val => pad.t + (1-(val-min)/(max-min))*plotH;
    return {min,max,x,y};
  }
  function smoothPath(points){
    if(points.length<2) return '';
    let d = `M${points[0][0].toFixed(2)} ${points[0][1].toFixed(2)}`;
    for(let i=0;i<points.length-1;i++){
      const p0 = points[Math.max(0,i-1)], p1 = points[i], p2 = points[i+1], p3 = points[Math.min(points.length-1,i+2)];
      const cp1x = p1[0] + (p2[0]-p0[0]) / 6;
      const cp1y = p1[1] + (p2[1]-p0[1]) / 6;
      const cp2x = p2[0] - (p3[0]-p1[0]) / 6;
      const cp2y = p2[1] - (p3[1]-p1[1]) / 6;
      d += ` C${cp1x.toFixed(2)} ${cp1y.toFixed(2)},${cp2x.toFixed(2)} ${cp2y.toFixed(2)},${p2[0].toFixed(2)} ${p2[1].toFixed(2)}`;
    }
    return d;
  }
  function render(){
    const scale = getScales();
    const vis = visibleData();
    const pts = vis.map(d=>[scale.x(d.i), scale.y(d.value)]);
    const line = smoothPath(pts);
    linePath.setAttribute('d', line);
    if(pts.length){
      areaPath.setAttribute('d', `${line} L${pts[pts.length-1][0].toFixed(2)} ${pad.t+plotH} L${pts[0][0].toFixed(2)} ${pad.t+plotH} Z`);
    }

    const yTicks = 5;
    gridLayer.innerHTML = '';
    axisLayer.innerHTML = '';
    for(let i=0;i<yTicks;i++){
      const y = pad.t + i*(plotH/(yTicks-1));
      const val = scale.max - i*((scale.max-scale.min)/(yTicks-1));
      gridLayer.insertAdjacentHTML('beforeend', `<line class="chart-grid-line" x1="${pad.l}" y1="${y}" x2="${pad.l+plotW}" y2="${y}"/>`);
      axisLayer.insertAdjacentHTML('beforeend', `<text class="chart-axis-text" x="${pad.l+plotW+18}" y="${y+4}">${val.toFixed(2)}</text>`);
    }
    const labels = ranges[currentRange].labels;
    labels.forEach((label,i)=>{
      const x = pad.l + i*(plotW/(labels.length-1));
      axisLayer.insertAdjacentHTML('beforeend', `<text class="chart-axis-text" x="${x}" y="${H-13}" text-anchor="${i===0?'start':i===labels.length-1?'end':'middle'}">${label}</text>`);
    });

    const last = data[data.length-1].value;
    const first = data[0].value;
    const change = last-first;
    const pct = change/first*100;
    const priceEl = document.getElementById('overviewPrice');
    const deltaEl = document.getElementById('overviewDelta');
    if(priceEl) priceEl.textContent = `$${last.toFixed(2)}`;
    if(deltaEl) deltaEl.textContent = `▲ $${Math.abs(change).toFixed(2)} (${pct.toFixed(2)}%) ${currentRange}`;
  }
  function showHover(clientX){
    const rect = root.getBoundingClientRect();
    const px = clamp(clientX - rect.left, 0, rect.width);
    const svgX = px / rect.width * W;
    const rel = clamp((svgX - pad.l) / plotW, 0, 1);
    const idx = Math.round(viewStart + rel*(viewEnd-viewStart));
    const d = data[clamp(idx,0,data.length-1)];
    const scale = getScales();
    const x = scale.x(d.i), y = scale.y(d.value);
    cx.setAttribute('x1', x); cx.setAttribute('x2', x);
    cy.setAttribute('y1', y); cy.setAttribute('y2', y);
    dot.setAttribute('cx', x); dot.setAttribute('cy', y);
    const displayX = (x / W) * rect.width;
    const displayY = (y / H) * rect.height;
    tooltip.style.left = `${displayX}px`;
    tooltip.style.top = `${Math.max(48,displayY-8)}px`;
    tooltip.querySelector('.tooltip-time').textContent = makeTimeLabel(d.i);
    tooltip.querySelector('strong').textContent = `$${d.value.toFixed(2)}`;
  }
  function makeTimeLabel(i){
    if(currentRange==='1D'){
      const mins = 8*60+30 + Math.round(i*15);
      const day = mins >= 24*60 ? '05/30' : '05/29';
      const m = mins % (24*60);
      return `${day} ${String(Math.floor(m/60)).padStart(2,'0')}:${String(m%60).padStart(2,'0')}`;
    }
    if(currentRange==='1W') return `Day ${Math.floor(i/24)+1}, ${String(9+i%8).padStart(2,'0')}:00`;
    if(currentRange==='1M') return `May ${String(1+Math.floor(i/5)).padStart(2,'0')}`;
    if(currentRange==='3M') return `Session ${i+1}`;
    if(currentRange==='1Y') return `Month ${Math.max(1,Math.round(i/15))}`;
    return `Point ${i+1}`;
  }
  function zoom(factor, center=.5){
    const span = viewEnd - viewStart;
    const minSpan = Math.max(18, data.length*.12);
    const maxSpan = data.length - 1;
    let nextSpan = clamp(span * factor, minSpan, maxSpan);
    const centerIdx = viewStart + span*center;
    viewStart = clamp(centerIdx - nextSpan*center, 0, data.length-1-nextSpan);
    viewEnd = viewStart + nextSpan;
    render();
  }
  function resetView(){
    viewStart = 0; viewEnd = data.length - 1; render();
  }

  tabs.addEventListener('click', e=>{
    const btn = e.target.closest('button[data-range]');
    if(!btn) return;
    currentRange = btn.dataset.range;
    tabs.querySelectorAll('button').forEach(b=>b.classList.toggle('active', b===btn));
    data = makeData(currentRange);
    resetView();
    showHover(root.getBoundingClientRect().left + root.getBoundingClientRect().width*.86);
  });

  root.addEventListener('mousemove', e=>{
    if(isDragging){
      const rect = root.getBoundingClientRect();
      const dx = (e.clientX - dragX) / rect.width * (dragEnd-dragStart);
      const span = dragEnd-dragStart;
      viewStart = clamp(dragStart - dx, 0, data.length-1-span);
      viewEnd = viewStart + span;
      render();
    }
    showHover(e.clientX);
  });
  root.addEventListener('mouseenter', e=>showHover(e.clientX));
  root.addEventListener('mouseleave', ()=>{ isDragging=false; root.classList.remove('is-dragging'); });
  root.addEventListener('mousedown', e=>{
    isDragging=true; root.classList.add('is-dragging');
    dragX=e.clientX; dragStart=viewStart; dragEnd=viewEnd;
  });
  window.addEventListener('mouseup', ()=>{ isDragging=false; root.classList.remove('is-dragging'); });
  root.addEventListener('wheel', e=>{
    e.preventDefault();
    const rect = root.getBoundingClientRect();
    const center = clamp((e.clientX-rect.left)/rect.width,0,1);
    zoom(e.deltaY < 0 ? .82 : 1.22, center);
    showHover(e.clientX);
  }, {passive:false});

  document.querySelectorAll('.chart-zoom-controls button').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const type = btn.dataset.zoom;
      if(type==='in') zoom(.78);
      if(type==='out') zoom(1.25);
      if(type==='reset') resetView();
    });
  });

  render();
  requestAnimationFrame(()=>{
    const rect = root.getBoundingClientRect();
    showHover(rect.left + rect.width*.86);
  });
}
initInteractiveTradeChart();


(function(){
  const carousel = document.querySelector('[data-featured-carousel]');
  if(!carousel) return;
  const track = carousel.querySelector('.featured-track');
  const slides = [...carousel.querySelectorAll('.featured-rotator-slide')];
  const dots = [...carousel.querySelectorAll('.featured-dot')];
  let index = 0;
  let timer = null;
  const interval = 4200;

  function visibleCount(){
    if(window.matchMedia('(max-width:760px)').matches) return 1;
    if(window.matchMedia('(max-width:1200px)').matches) return 2;
    return 3;
  }
  function maxIndex(){ return Math.max(0, slides.length - visibleCount()); }
  function step(){
    if(slides.length < 2) return 0;
    const a = slides[0].getBoundingClientRect();
    const b = slides[1].getBoundingClientRect();
    return b.left - a.left;
  }
  function show(i){
    const max = maxIndex();
    index = Math.max(0, Math.min(i, max));
    if(track) track.style.transform = `translateX(${-index * step()}px)`;
    dots.forEach((dot, idx)=>{
      dot.classList.toggle('active', Math.min(idx, max) === index);
    });
  }
  function play(){
    stop();
    timer = setInterval(()=>show(index >= maxIndex() ? 0 : index + 1), interval);
  }
  function stop(){ if(timer) clearInterval(timer); timer = null; }
  dots.forEach((dot, i)=>dot.addEventListener('click', e=>{ e.stopPropagation(); show(i); play(); }));
  window.addEventListener('resize', ()=>show(index));
  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', play);
  show(0);
  play();
})();
