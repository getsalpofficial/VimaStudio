/* =========================================================
   VIMA STUDIO — shared interactions + project data
   ========================================================= */
const WA_NUMBER = "918448833970";
const WA_TEXT   = encodeURIComponent("Hi Vima Studio! I'd love to know more about your design services.");
const WA_LINK   = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;

/* ---------- project dataset ---------- */
const IMG = "assets/img/";
const PROJECTS = [
  {n:"Daily Post News",       c:"commercial",   t:"Media Office",        loc:"Sector 82, Mohali",        img:"daily-post-news.jpg",        year:"2024", area:"6,200 sq.ft", scope:"Workspace · Newsroom · Branding", span:5, h:480, blurb:"A high-energy editorial headquarters where open newsroom floors meet acoustically refined broadcast rooms."},
  {n:"Corporate Boardroom",   c:"commercial",   t:"Boardroom",           loc:"Private Premises",         img:"corporate-boardroom.png",    year:"2023", area:"900 sq.ft",   scope:"Executive Interiors", span:4, h:480, blurb:"A statement boardroom in walnut and brass — engineered for presence and quiet authority."},
  {n:"Executive Office Suite",c:"commercial",   t:"Office",              loc:"Bihani Marketing, Gurgaon",img:"executive-office-suite.png", year:"2023", area:"1,400 sq.ft", scope:"Cabin · Lounge · Storage", span:3, h:480, blurb:"A refined leadership cabin balancing focus zones with an inviting client lounge."},
  {n:"Office Lounge Area",    c:"commercial",   t:"Breakout Lounge",     loc:"Sector 54, Gurgaon",       img:"office-lounge-area.jpg",     year:"2024", area:"700 sq.ft",   scope:"Hospitality-led Workspace", span:4, h:420, blurb:"An informal breakout lounge that softens the corporate floor with texture and warmth."},
  {n:"Honourable Client Office",c:"commercial", t:"Prestige Office",     loc:"North India",              img:"honourable-client-office.png",year:"2024",area:"2,100 sq.ft", scope:"Bespoke Joinery", span:5, h:420, blurb:"A dignified office commission detailed with custom millwork and layered lighting."},
  {n:"Helping Hands Clinic",  c:"commercial",   t:"Healthcare",          loc:"Rohtak",                   img:"helping-hands-clinic.jpg",   year:"2022", area:"3,000 sq.ft", scope:"Clinic · Reception · Wards", span:3, h:420, blurb:"A calming healthcare environment where clinical precision meets human comfort."},

  {n:"Kinara Cafe",           c:"hospitality",  t:"Café",                loc:"Gurugram",                 img:"kinara-cafe.jpg",            year:"2024", area:"1,800 sq.ft", scope:"F&B · Bar · Seating", span:3, h:430, blurb:"A riverside-inspired café wrapped in earthy tones, rattan and warm pendant light."},
  {n:"Mixnosh Art Café",      c:"hospitality",  t:"Art Café",            loc:"JP Nagar, Bangalore",      img:"mixnosh-art-caf.jpg",        year:"2023", area:"2,400 sq.ft", scope:"Concept · Gallery · F&B", span:4, h:430, blurb:"An art-forward café where rotating gallery walls turn dining into a curated experience."},
  {n:"Mixnosh — Dining Floor",c:"hospitality",  t:"F&B Floor",           loc:"JP Nagar, Bangalore",      img:"mixnosh-dining-floor.jpg",   year:"2023", area:"—",            scope:"Dining Zones", span:5, h:430, blurb:"Flexible dining zones flowing between intimate booths and communal tables."},
  {n:"Mixnosh — Gallery Wall",c:"hospitality",  t:"Art Café",            loc:"JP Nagar, Bangalore",      img:"mixnosh-gallery-wall.jpg",   year:"2023", area:"—",            scope:"Feature Wall", span:4, h:440, blurb:"A sculptural feature wall designed as the visual heartbeat of the space."},
  {n:"Mixnosh — Display Zone",c:"hospitality",  t:"Retail Café",         loc:"JP Nagar, Bangalore",      img:"mixnosh-display-zone.jpg",   year:"2023", area:"—",            scope:"Retail Merchandising", span:4, h:440, blurb:"An integrated retail display that merchandises product without breaking the café mood."},

  {n:"Luxury Living Room",    c:"residential",  t:"Living",              loc:"Private Residence",        img:"luxury-living-room.jpg",     year:"2024", area:"650 sq.ft",   scope:"Living · Styling", span:4, h:440, blurb:"A layered living room composed in warm neutrals, statement art and tactile fabrics."},
  {n:"Warm Living Suite",     c:"residential",  t:"Living",              loc:"Private Residence",        img:"warm-living-suite.jpg",      year:"2023", area:"720 sq.ft",   scope:"Living · Lighting", span:5, h:420, blurb:"An inviting living suite balancing daylight, ambient layers and cosy textures."},
  {n:"Elegant Dining Room",   c:"residential",  t:"Dining",              loc:"Private Residence",        img:"elegant-dining-room.jpg",    year:"2023", area:"320 sq.ft",   scope:"Dining · Joinery", span:3, h:420, blurb:"A refined dining room anchored by bespoke joinery and sculptural lighting."},
  {n:"Classic Master Bedroom",c:"residential",  t:"Bedroom",             loc:"Private Residence",        img:"classic-master-bedroom.png", year:"2022", area:"400 sq.ft",   scope:"Bedroom · Wardrobe", span:3, h:420, blurb:"A serene master retreat with paneled headboard and quiet, classic detailing."},
  {n:"Modern Bedroom Suite",  c:"residential",  t:"Bedroom",             loc:"Private Residence",        img:"modern-bedroom-suite.png",   year:"2024", area:"380 sq.ft",   scope:"Bedroom · Study Nook", span:3, h:420, blurb:"A contemporary bedroom suite combining rest, storage and a compact study nook."},
  {n:"Study-Bedroom Combo",   c:"residential",  t:"Study",               loc:"Private Residence",        img:"study-bedroom-combo.jpg",    year:"2023", area:"360 sq.ft",   scope:"Multifunctional Room", span:5, h:400, blurb:"A dual-purpose room where a working study folds seamlessly into restful sleep."},
  {n:"Luxury Spa Bathroom",   c:"residential",  t:"Bathroom",            loc:"Private Residence",        img:"luxury-spa-bathroom.png",    year:"2024", area:"180 sq.ft",   scope:"Wet Areas · Stone", span:4, h:400, blurb:"A spa-grade bathroom in honed stone with a sculptural freestanding focal point."},
  {n:"Heritage Library Bar",  c:"residential",  t:"Library & Bar",       loc:"Private Residence",        img:"heritage-library-bar.jpg",   year:"2024", area:"540 sq.ft",   scope:"Library · Bar · Lounge", span:6, h:460, blurb:"A moody heritage library-bar layered in deep timber, leather and collector lighting."},
  {n:"Pool Terrace Retreat",  c:"landscape",    t:"Terrace & Landscape", loc:"Outdoor, India",           img:"pool-terrace-retreat.jpg",   year:"2023", area:"2,800 sq.ft", scope:"Pool · Deck · Planting", span:6, h:460, blurb:"An outdoor retreat pairing a sculpted pool with shaded lounging and lush planting."}
];

/* ---------- helpers ---------- */
const $  = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
function waFor(name){
  const txt = encodeURIComponent(`Hi Vima Studio! I'm interested in a project like "${name}". Can we talk?`);
  return `https://wa.me/${WA_NUMBER}?text=${txt}`;
}

/* ---------- nav ---------- */
function initNav(){
  const nav = $('#nav'); if(!nav) return;
  const onScroll = ()=>nav.classList.toggle('scrolled', scrollY>40);
  onScroll(); addEventListener('scroll', onScroll, {passive:true});

  const burger = $('#burger');
  if(burger){
    burger.setAttribute('aria-expanded','false');
    burger.addEventListener('click', ()=>{
      const open=nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open?'true':'false');
    });
  }
  // close the mobile menu when a link is tapped or when tapping outside
  const close=()=>{ nav.classList.remove('open'); if(burger) burger.setAttribute('aria-expanded','false'); };
  $$('.nav-links a').forEach(a=>a.addEventListener('click', close));
  document.addEventListener('click', e=>{ if(nav.classList.contains('open') && !nav.contains(e.target)) close(); });
  addEventListener('resize', ()=>{ if(innerWidth>980) close(); });

  // active link — robust against clean URLs (/about) and .html (/about.html)
  const norm=p=>{ p=(p.split('/').pop()||'').replace(/\.html$/,''); return p===''?'index':p; };
  const here=norm(location.pathname);
  $$('.nav-links a').forEach(a=>{ if(norm(a.getAttribute('href'))===here) a.classList.add('active'); });
}

/* ---------- reveal on scroll ---------- */
function initReveal(){
  const io = new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  }), {threshold:.12});
  $$('.reveal').forEach(el=>io.observe(el));
}

/* ---------- counters ---------- */
function initCounters(){
  const io = new IntersectionObserver(es=>es.forEach(e=>{
    if(!e.isIntersecting) return;
    const el=e.target, target=+el.dataset.target; let c=0;
    const step=target/45;
    const t=setInterval(()=>{ c+=step; if(c>=target){el.textContent=target;clearInterval(t);}
      else el.textContent=Math.floor(c); },22);
    io.unobserve(el);
  }), {threshold:.6});
  $$('.counter').forEach(el=>io.observe(el));
}

/* ---------- hero parallax (3D) ---------- */
function initHeroParallax(){
  const stage = $('#heroStage'); if(!stage) return;
  let tx=0,ty=0,cx=0,cy=0;
  addEventListener('mousemove', e=>{
    tx=(e.clientX/innerWidth-.5); ty=(e.clientY/innerHeight-.5);
  });
  addEventListener('scroll', ()=>{ stage.style.setProperty('--sy', scrollY*0.18+'px'); }, {passive:true});
  (function loop(){
    cx+=(tx-cx)*.06; cy+=(ty-cy)*.06;
    stage.style.transform=`translateY(var(--sy,0)) rotateX(${cy*-4}deg) rotateY(${cx*5}deg) scale(1.04)`;
    requestAnimationFrame(loop);
  })();
}

/* ---------- 3D tilt on cards (with glare) ---------- */
function initTilt(scope=document){
  $$('.tilt', scope).forEach(card=>{
    if(card._tilt) return; card._tilt=true;
    const strength = card.classList.contains('card') ? 11 : 8;
    card.addEventListener('mousemove', e=>{
      const r=card.getBoundingClientRect();
      const px=(e.clientX-r.left)/r.width-.5, py=(e.clientY-r.top)/r.height-.5;
      card.style.transform=`perspective(900px) rotateX(${py*-strength}deg) rotateY(${px*strength*1.3}deg) translateY(-8px) scale(1.015)`;
      card.style.setProperty('--gx',(px+.5)*100+'%');
      card.style.setProperty('--gy',(py+.5)*100+'%');
    });
    card.addEventListener('mouseleave', ()=>{ card.style.transform=''; });
  });
}

/* ---------- magnetic buttons ---------- */
function initMagnetic(){
  if(matchMedia('(pointer:coarse)').matches) return;
  $$('.btn, .wa-btn, .nav-wa').forEach(b=>{
    b.addEventListener('mousemove', e=>{
      const r=b.getBoundingClientRect();
      const x=e.clientX-r.left-r.width/2, y=e.clientY-r.top-r.height/2;
      b.style.transform=`translate(${x*.3}px, ${y*.4}px)`;
    });
    b.addEventListener('mouseleave', ()=>{ b.style.transform=''; });
  });
}

/* ---------- scroll progress bar ---------- */
function initScrollProgress(){
  const bar=document.createElement('div'); bar.className='scroll-prog';
  document.body.appendChild(bar);
  const upd=()=>{
    const h=document.documentElement;
    const p=h.scrollTop/(h.scrollHeight-h.clientHeight||1);
    bar.style.transform=`scaleX(${p})`;
  };
  upd(); addEventListener('scroll',upd,{passive:true}); addEventListener('resize',upd);
}

/* ---------- scroll parallax for [data-par] ---------- */
function initParallax(){
  // target containers only — never .tilt/.badge (they own their own transform)
  const items=$$('[data-par], .img-pair');
  if(!items.length) return;
  let ticking=false;
  const run=()=>{
    items.forEach(el=>{
      const r=el.getBoundingClientRect();
      const mid=r.top+r.height/2-innerHeight/2;
      const sp=parseFloat(el.dataset.par||'0.05');
      el.style.transform=`translate3d(0,${mid*-sp}px,0)`;
    });
    ticking=false;
  };
  addEventListener('scroll',()=>{ if(!ticking){requestAnimationFrame(run);ticking=true;} },{passive:true});
  run();
}

/* ---------- inject decorative orbs ---------- */
function initOrbs(){
  if(innerWidth < 900) return;  // skip decorative bleed on tablet/mobile (avoids overflow)
  $$('.section, .quote, .cta').forEach((s,i)=>{
    if(s.querySelector('.orb')) return;
    const o=document.createElement('div');
    o.className='orb'+(i%2?' clay':'');
    const size=240+(i%3)*120;
    o.style.width=o.style.height=size+'px';
    o.style.top=(i%2?'auto':'-60px'); o.style.bottom=(i%2?'-80px':'auto');
    o.style[i%2?'left':'right']='-80px';
    o.style.animationDelay=(i*1.4)+'s';
    s.appendChild(o);
  });
}

/* ---------- inject 3D wireframe into page heads + reverse marquee ---------- */
function initDecor(){
  const ph=$('.page-head');
  if(ph && !ph.querySelector('.head3d')){
    const c=document.createElement('div'); c.className='head3d';
    c.innerHTML='<i></i><i></i><i></i><i></i><i></i><i></i>';
    ph.prepend(c);
  }
  const mq=$('.marquee');
  if(mq && !$('.marquee.rev')){
    const rev=mq.cloneNode(true); rev.classList.add('rev');
    mq.after(rev);
  }
}

/* ---------- Live Design Studio (raw → final reveal) ---------- */
function initLiveStudio(){
  const stage=$('#rsStage'); if(!stage) return;
  const raw=$('#rsRaw'), scan=$('#rsScan'), handle=$('#rsHandle'),
        hud=$('#rsHud b'), stagesEls=$$('#rsStages span'),
        rawImg=$('#rsRaw img'), finalImg=$('#rsFinal'),
        tabs=$$('#rsTabs .rs-tab');
  let pos=100;             // 100 = all raw, 0 = all final
  let auto=true, dir=-1, dragging=false, holdUntil=0;
  const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;

  function setPos(p){
    pos=Math.max(0,Math.min(100,p));
    stage.style.setProperty('--pos',pos+'%');
    const rendered=Math.round(100-pos);
    if(hud) hud.textContent=rendered+'%';
    // stage stepper: 0-25 sketch,25-50 model,50-85 light,85-100 final
    const idx = rendered>=88?3 : rendered>=55?2 : rendered>=25?1 : 0;
    stagesEls.forEach((s,i)=>s.classList.toggle('on',i===idx));
  }
  setPos(100);

  // auto render sweep
  let last=0;
  function loop(ts){
    if(!last) last=ts; const dt=ts-last; last=ts;
    if(auto && !dragging && ts>holdUntil){
      pos += dir*dt*0.045;            // sweep speed
      if(pos<=0){ pos=0; dir=1;  holdUntil=ts+1400; }   // hold on final
      if(pos>=100){ pos=100; dir=-1; holdUntil=ts+700; } // hold on raw
      setPos(pos);
    }
    requestAnimationFrame(loop);
  }
  if(!reduce) requestAnimationFrame(loop); else setPos(35);

  // manual scrub
  function fromEvent(e){
    const r=stage.getBoundingClientRect();
    const x=(e.touches?e.touches[0].clientX:e.clientX)-r.left;
    setPos((x/r.width)*100);
  }
  function down(e){ dragging=true; auto=false; stage.style.cursor='grabbing'; fromEvent(e); }
  function move(e){ if(dragging){ e.preventDefault(); fromEvent(e); } }
  function up(){ dragging=false; stage.style.cursor='ew-resize'; }
  stage.addEventListener('mousedown',down); stage.addEventListener('touchstart',down,{passive:true});
  addEventListener('mousemove',move,{passive:false}); addEventListener('touchmove',move,{passive:false});
  addEventListener('mouseup',up); addEventListener('touchend',up);
  // resume auto a moment after the user lets go and leaves
  stage.addEventListener('mouseleave',()=>{ if(!dragging) setTimeout(()=>{auto=true;dir=-1;},900); });

  // project tabs swap both layers
  tabs.forEach(t=>t.addEventListener('click',()=>{
    tabs.forEach(x=>x.classList.remove('active')); t.classList.add('active');
    const src=IMG+t.dataset.img;
    rawImg.src=src; finalImg.src=src;
    auto=true; dir=-1; setPos(100); holdUntil=performance.now()+300;
  }));
}

/* ---------- Construction Reel (video-style build timelapse) ---------- */
function initBuildReel(){
  const screen=$('#reelScreen'); if(!screen) return;
  const fill=$('#reelFill'), playBtn=$('#reelPlay'), bar=$('#reelBar'),
        cap=$('#reelCap'), time=$('#reelTime'), chips=$$('#reelPhases span');
  const PHASES=['Foundation & Layout','Structure','Interiors & Materials','Lighting & Styling'];
  const DUR=10000;            // ms for a full build
  let p=0, playing=true, last=0, hold=0, scrub=false;
  const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;

  const fmt=s=>'0:'+String(Math.floor(s)).padStart(2,'0');
  function set(v){
    p=Math.max(0,Math.min(100,v));
    screen.style.setProperty('--p',p);
    if(fill) fill.style.width=p+'%';
    const idx=p>=75?3:p>=50?2:p>=25?1:0;
    if(cap) cap.textContent='Phase 0'+(idx+1)+' — '+PHASES[idx];
    chips.forEach((c,i)=>c.classList.toggle('on',i===idx));
    if(time) time.textContent=fmt(p/100*12)+' / 0:12';
  }
  set(0);

  function loop(ts){
    if(!last) last=ts; const dt=ts-last; last=ts;
    if(playing && !scrub && ts>hold){
      p += dt/DUR*100;
      if(p>=100){ p=100; hold=ts+1600; set(100); setTimeout(()=>{ if(playing){p=0;hold=0;} },1600); }
      else set(p);
    }
    requestAnimationFrame(loop);
  }
  if(reduce){ playing=false; set(100); } else requestAnimationFrame(loop);

  function toggle(){ playing=!playing; playBtn.textContent=playing?'❚❚':'►'; if(playing&&p>=100)p=0; }
  playBtn.addEventListener('click',e=>{e.stopPropagation();toggle();});
  screen.addEventListener('click',e=>{ if(!e.target.closest('.reel-ctrl')) toggle(); });
  playBtn.textContent='❚❚';

  // scrub the timeline
  function fromBar(e){
    const r=bar.getBoundingClientRect();
    const x=(e.touches?e.touches[0].clientX:e.clientX)-r.left;
    set((x/r.width)*100); hold=0;
  }
  bar.addEventListener('mousedown',e=>{e.stopPropagation();scrub=true;fromBar(e);});
  bar.addEventListener('touchstart',e=>{e.stopPropagation();scrub=true;fromBar(e);},{passive:true});
  addEventListener('mousemove',e=>{if(scrub)fromBar(e);});
  addEventListener('touchmove',e=>{if(scrub)fromBar(e);},{passive:true});
  addEventListener('mouseup',()=>scrub=false); addEventListener('touchend',()=>scrub=false);
}

/* ---------- WebGL hero scene (Three.js) ---------- */
function initHero3D(){
  const host=$('#heroStage');
  if(!host || typeof THREE==='undefined') return;
  if(matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  if(innerWidth < 768) return;  // skip heavy WebGL on phones (perf/battery)

  const canvas=document.createElement('canvas'); canvas.className='hero-canvas';
  host.appendChild(canvas);
  const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  const scene=new THREE.Scene();
  const cam=new THREE.PerspectiveCamera(55,1,.1,100); cam.position.z=14;

  const GOLD=0xB8853C, INK=0x23201B, CLAY=0xA65B36;
  const group=new THREE.Group(); scene.add(group);
  const defs=[
    {g:new THREE.IcosahedronGeometry(2.4,0), c:GOLD,  p:[5,1.5,0]},
    {g:new THREE.TorusGeometry(1.7,.5,10,28), c:INK,  p:[8.5,-2.5,-3]},
    {g:new THREE.OctahedronGeometry(1.5,0),   c:CLAY, p:[3.5,-3,-1]},
    {g:new THREE.BoxGeometry(2,2,2),          c:GOLD, p:[9,2.6,-2]},
    {g:new THREE.IcosahedronGeometry(1,0),    c:INK,  p:[6.5,3.2,-4]},
    {g:new THREE.TorusKnotGeometry(1,.32,64,8),c:CLAY,p:[7,-.4,-1]}
  ];
  const meshes=defs.map(d=>{
    const m=new THREE.Mesh(d.g,new THREE.MeshBasicMaterial({color:d.c,wireframe:true,transparent:true,opacity:.55}));
    m.position.set(...d.p);
    m.userData={rx:(Math.sin(d.p[0])*.4+.5)*.004, ry:(Math.cos(d.p[1])*.4+.5)*.005, fy:d.p[1], ph:d.p[0]};
    group.add(m); return m;
  });

  // particle dust
  const N=240, pos=new Float32Array(N*3);
  for(let i=0;i<N;i++){ pos[i*3]=(Math.random()-.2)*22; pos[i*3+1]=(Math.random()-.5)*16; pos[i*3+2]=(Math.random()-.5)*10; }
  const pg=new THREE.BufferGeometry(); pg.setAttribute('position',new THREE.BufferAttribute(pos,3));
  const pts=new THREE.Points(pg,new THREE.PointsMaterial({color:GOLD,size:.06,transparent:true,opacity:.6}));
  scene.add(pts);

  let mx=0,my=0,tmx=0,tmy=0,sy=0;
  addEventListener('mousemove',e=>{ tmx=e.clientX/innerWidth-.5; tmy=e.clientY/innerHeight-.5; });
  addEventListener('scroll',()=>{ sy=scrollY; },{passive:true});

  function resize(){
    const w=host.clientWidth,h=host.clientHeight;
    renderer.setSize(w,h,false); cam.aspect=w/h; cam.updateProjectionMatrix();
  }
  resize(); addEventListener('resize',resize);

  let t=0;
  (function render(){
    t+=.01; mx+=(tmx-mx)*.05; my+=(tmy-my)*.05;
    meshes.forEach(m=>{
      m.rotation.x+=m.userData.rx; m.rotation.y+=m.userData.ry;
      m.position.y=m.userData.fy+Math.sin(t+m.userData.ph)*.4;
    });
    group.rotation.y=mx*.6; group.rotation.x=my*.4;
    group.position.y=sy*0.012;
    pts.rotation.y+=.0007; pts.rotation.x=my*.2;
    cam.position.x=mx*2; cam.lookAt(6,0,0);
    renderer.render(scene,cam);
    requestAnimationFrame(render);
  })();
}

/* ---------- render projects ---------- */
function projectCard(p, idx){
  const el=document.createElement('div');
  el.className=`card tilt s${p.span} reveal`;
  el.style.height=p.h+'px';
  el.dataset.cat=p.c;
  el.dataset.idx=idx;
  el.innerHTML=`
    <img src="${IMG}${p.img}" alt="${p.n}" loading="lazy">
    <div class="glare"></div>
    <div class="plus">+</div>
    <div class="ov">
      <div class="cat">${cap(p.c)} — ${p.t}</div>
      <div class="nm">${p.n}</div>
      <div class="lo">${p.loc} · ${p.year}</div>
    </div>`;
  return el;
}
const cap = s=>s.charAt(0).toUpperCase()+s.slice(1);

function renderGrid(targetSel, list){
  const grid=$(targetSel); if(!grid) return;
  grid.innerHTML='';
  list.forEach((p,i)=>grid.appendChild(projectCard(p, PROJECTS.indexOf(p))));
  initReveal(); initTilt(grid); initLightbox();
}

/* ---------- filters ---------- */
function initFilters(){
  const bar=$('#filters'); if(!bar) return;
  bar.addEventListener('click', e=>{
    const b=e.target.closest('.filter'); if(!b) return;
    $$('.filter',bar).forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    const f=b.dataset.filter;
    $$('.card', $('#grid')).forEach(c=>{
      c.classList.toggle('hide', !(f==='all'||c.dataset.cat===f));
    });
  });
}

/* ---------- lightbox ---------- */
let lbList=[], lbIdx=0;
function initLightbox(){
  const lb=$('#lb'); if(!lb) return;
  const cards=$$('.card');
  cards.forEach(c=>{
    if(c._lbBound) return; c._lbBound=true;
    c.addEventListener('click', ()=>{
      lbList=$$('.card').filter(x=>!x.classList.contains('hide'));
      lbIdx=lbList.indexOf(c);
      showLb();
    });
  });
}
function showLb(){
  const lb=$('#lb'); const c=lbList[lbIdx]; if(!c) return;
  const p=PROJECTS[+c.dataset.idx];
  $('#lbImg').src=c.querySelector('img').src;
  $('#lbName').textContent=p?p.n:'';
  $('#lbLoc').textContent=p?`${p.loc} · ${p.year}`:'';
  lb.classList.add('open'); document.body.style.overflow='hidden';
}
function bindLightboxControls(){
  const lb=$('#lb'); if(!lb) return;
  const close=()=>{lb.classList.remove('open');document.body.style.overflow='';};
  $('#lbClose').onclick=close;
  $('#lbPrev').onclick=()=>{lbIdx=(lbIdx-1+lbList.length)%lbList.length;showLb();};
  $('#lbNext').onclick=()=>{lbIdx=(lbIdx+1)%lbList.length;showLb();};
  lb.addEventListener('click',e=>{if(e.target===lb)close();});
  addEventListener('keydown',e=>{
    if(!lb.classList.contains('open'))return;
    if(e.key==='Escape')close();
    if(e.key==='ArrowLeft')$('#lbPrev').click();
    if(e.key==='ArrowRight')$('#lbNext').click();
  });
}

/* ---------- WhatsApp widget ---------- */
function initWhatsApp(){
  const wrap=$('#wa'); if(!wrap) return;
  const pop=$('#waPop'), btn=$('#waBtn'), close=$('#waClose');
  setTimeout(()=>pop.classList.add('show'), 2500);
  btn.addEventListener('click', ()=>pop.classList.toggle('show'));
  close.addEventListener('click', e=>{e.stopPropagation();pop.classList.remove('show');});
  document.addEventListener('click', e=>{
    if(!wrap.contains(e.target)) pop.classList.remove('show');
  });
}

/* ---------- contact form ---------- */
const SHEET_URL = "https://script.google.com/macros/s/AKfycbxKG6cLFycaT7CyJrFNtQEDPAbIRCqH_3Xvx-cQBd2bYC1-8y15e-SYbAykJLZxsvSm3A/exec";
function initForm(){
  const form=$('#leadForm'); if(!form) return;
  form.addEventListener('submit', async e=>{
    e.preventDefault();
    const btn=$('#fBtn'), st=$('#fStatus');
    btn.disabled=true; btn.textContent='Sending…'; st.className='fstatus';
    try{
      await fetch(SHEET_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          firstName:$('#fFirst').value, lastName:$('#fLast').value,
          email:$('#fEmail').value, phone:$('#fPhone')?$('#fPhone').value:'',
          projectType:$('#fType').value, message:$('#fMsg').value
        })});
      st.className='fstatus ok';
      st.textContent='✓ Thank you! Your enquiry has been received — we’ll be in touch within 24 hours.';
      form.reset();
    }catch(err){
      st.className='fstatus err';
      st.textContent='Something went wrong. Please WhatsApp us at +91 84488 33970.';
    }finally{
      btn.disabled=false; btn.textContent='Send Enquiry →';
      st.scrollIntoView({behavior:'smooth',block:'nearest'});
    }
  });
}

/* ---------- boot ---------- */
document.addEventListener('DOMContentLoaded', ()=>{
  // inject WA links everywhere
  $$('[data-wa]').forEach(a=>a.href=WA_LINK);
  initNav(); initReveal(); initCounters(); initHeroParallax();
  initWhatsApp(); initForm(); bindLightboxControls();
  initScrollProgress(); initOrbs(); initDecor(); initHero3D(); initLiveStudio(); initBuildReel();

  // page-specific renders
  if($('#featured')) renderGrid('#featured', PROJECTS.slice(0,6));
  if($('#grid')){ renderGrid('#grid', PROJECTS); initFilters(); }

  initTilt();       // non-project tilt elements
  initMagnetic();   // buttons
  initParallax();   // scroll-linked depth
});
