// ---------- Hero slideshow ----------
(function(){
  const slides = document.querySelectorAll('.hero-bg');
  const dotsWrap = document.getElementById('heroDots');
  if(!slides.length || !dotsWrap) return;

  let current = 0;
  let timer = null;

  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    if(i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap.querySelectorAll('span');

  function goTo(index){
    current = index;
    slides.forEach((s, i) => {
      const active = i === current;
      s.classList.toggle('active', active);
      if(active){
        s.style.animation = 'none';
        void s.offsetWidth;
        s.style.animation = '';
      }
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
    restart();
  }

  function next(){
    goTo((current + 1) % slides.length);
  }

  function restart(){
    clearInterval(timer);
    timer = setInterval(next, 5000);
  }

  restart();
})();

const photos = [
    // ---- Landscapes (12) ----
    {cat:'landscape', title:'Valley at First Light', place:'Highland Basin', src:'https://picsum.photos/id/1018/700/900'},
    {cat:'landscape', title:'Ridge Line', place:'Coastal Range', src:'https://picsum.photos/id/1036/700/600'},
    {cat:'landscape', title:'Where the Fog Sits', place:'River Delta', src:'https://picsum.photos/id/1043/700/560'},
    {cat:'landscape', title:'Cliffs Above the Bay', place:'Western Shoreline', src:'https://picsum.photos/id/1044/700/860'},
    {cat:'landscape', title:'Terraced Fields', place:'Upper Valley', src:'https://picsum.photos/id/1047/700/620'},
    {cat:'landscape', title:'River Bend at Dawn', place:'Lowland Basin', src:'https://picsum.photos/id/1015/700/900'},
    {cat:'landscape', title:'Highland Pass', place:'Northern Ridge', src:'https://picsum.photos/id/1002/700/560'},
    {cat:'landscape', title:'Salt Flats, Midday', place:'Interior Basin', src:'https://picsum.photos/id/1003/700/900'},
    {cat:'landscape', title:'Pine Line Descending', place:'Forest Slope', src:'https://picsum.photos/id/1004/700/620'},
    {cat:'landscape', title:'Glacier Edge', place:'High Country', src:'https://picsum.photos/id/1005/700/860'},
    {cat:'landscape', title:'Dune Shadows', place:'Southern Desert', src:'https://picsum.photos/id/1006/700/600'},
    {cat:'landscape', title:'Lake Still as Glass', place:'Alpine Basin', src:'https://picsum.photos/id/1008/700/900'},

    // ---- Architecture (12) ----
    {cat:'architecture', title:'Concrete & Sky', place:'Downtown District', src:'https://picsum.photos/id/164/700/520'},
    {cat:'architecture', title:'Glass Corridor', place:'Financial Quarter', src:'https://picsum.photos/id/250/700/900'},
    {cat:'architecture', title:'Stairwell Study', place:'Civic Hall', src:'https://picsum.photos/id/493/700/820'},
    {cat:'architecture', title:'Arches, Repeated', place:'Old Arcade', src:'https://picsum.photos/id/1076/700/560'},
    {cat:'architecture', title:'Rooftop Geometry', place:'West End', src:'https://picsum.photos/id/1048/700/900'},
    {cat:'architecture', title:'Colonnade at Noon', place:'University Quarter', src:'https://picsum.photos/id/1031/700/620'},
    {cat:'architecture', title:'Steel Lattice', place:'Rail Yards', src:'https://picsum.photos/id/1033/700/860'},
    {cat:'architecture', title:'Courtyard Symmetry', place:'Old Town Hall', src:'https://picsum.photos/id/1040/700/600'},
    {cat:'architecture', title:'Facade, Late Light', place:'Merchant Row', src:'https://picsum.photos/id/1051/700/900'},
    {cat:'architecture', title:'Spiral Ascent', place:'Lighthouse Point', src:'https://picsum.photos/id/1058/700/620'},
    {cat:'architecture', title:'Brutalist Corner', place:'Civic Center', src:'https://picsum.photos/id/1063/700/860'},
    {cat:'architecture', title:'Skylight Study', place:'Gallery Annex', src:'https://picsum.photos/id/1072/700/600'},

    // ---- Wildlife (12) ----
    {cat:'wildlife', title:'Watching the Treeline', place:'Northern Reserve', src:'https://picsum.photos/id/1074/700/820'},
    {cat:'wildlife', title:'Low Tide Forager', place:'Estuary Flats', src:'https://picsum.photos/id/1024/700/520'},
    {cat:'wildlife', title:'Quiet Pond Residents', place:'Marsh Reserve', src:'https://picsum.photos/id/1039/700/900'},
    {cat:'wildlife', title:'Herd at Dusk', place:'Open Plain', src:'https://picsum.photos/id/1084/700/600'},
    {cat:'wildlife', title:'Resting in Tall Grass', place:'Savannah Edge', src:'https://picsum.photos/id/219/700/860'},
    {cat:'wildlife', title:'Coastal Watcher', place:'Rocky Point', src:'https://picsum.photos/id/237/700/620'},
    {cat:'wildlife', title:'Morning Grazers', place:'Open Range', src:'https://picsum.photos/id/1025/700/900'},
    {cat:'wildlife', title:'Nest in the Rafters', place:'Barn Hollow', src:'https://picsum.photos/id/1010/700/600'},
    {cat:'wildlife', title:'Alert at the Waterhole', place:'Dry Season Reserve', src:'https://picsum.photos/id/1011/700/860'},
    {cat:'wildlife', title:'Fox at the Treeline', place:'Forest Edge', src:'https://picsum.photos/id/1012/700/620'},
    {cat:'wildlife', title:'Gulls Over the Pier', place:'Harbor Point', src:'https://picsum.photos/id/1013/700/900'},
    {cat:'wildlife', title:'Deer in Half-Light', place:'Northern Woods', src:'https://picsum.photos/id/1016/700/600'},

    // ---- Street (12) ----
    {cat:'street', title:'Rain on Fifth', place:'Old Quarter', src:'https://picsum.photos/id/1071/700/560'},
    {cat:'street', title:'Corner Store Light', place:'Market Row', src:'https://picsum.photos/id/1062/700/900'},
    {cat:'street', title:'Vendors, Early', place:'Harbor Market', src:'https://picsum.photos/id/1059/700/620'},
    {cat:'street', title:'Alleyway Signage', place:'Lantern District', src:'https://picsum.photos/id/1080/700/520'},
    {cat:'street', title:'Market Row, Morning', place:'Central Bazaar', src:'https://picsum.photos/id/1057/700/860'},
    {cat:'street', title:'Neon After Midnight', place:'Theatre District', src:'https://picsum.photos/id/1060/700/600'},
    {cat:'street', title:'Crosswalk Study', place:'Financial Quarter', src:'https://picsum.photos/id/1067/700/900'},
    {cat:'street', title:'Steam from the Vents', place:'Garment District', src:'https://picsum.photos/id/1069/700/620'},
    {cat:'street', title:'Newsstand Corner', place:'Old Quarter', src:'https://picsum.photos/id/1019/700/860'},
    {cat:'street', title:'Against the Wall', place:'University Row', src:'https://picsum.photos/id/1050/700/600'},
    {cat:'street', title:'Umbrella Crowd', place:'Central Square', src:'https://picsum.photos/id/1053/700/900'},
    {cat:'street', title:'Last Train Platform', place:'Union Station', src:'https://picsum.photos/id/1017/700/620'},
  ];

  const masonry = document.getElementById('masonry');
  const countEl = document.getElementById('count');

  photos.forEach((p, i) => {
    const fig = document.createElement('figure');
    fig.className = 'plate reveal';
    fig.dataset.cat = p.cat;
    fig.dataset.index = i;
    fig.style.transitionDelay = (i % 6) * 0.08 + 's';
    fig.innerHTML = `
      <div class="frame">
        <img src="${p.src}" alt="${p.title}" loading="lazy">
        <span class="peek">${p.place}</span>
      </div>
      <figcaption>
        <span class="title">${p.title}</span>
        <span class="plate-no">Plate ${String(i+1).padStart(2,'0')}</span>
      </figcaption>
    `;
    fig.addEventListener('click', () => openLightbox(i));
    masonry.appendChild(fig);

    const img = fig.querySelector('img');
    if(img.complete){
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => img.classList.add('loaded'));
    }
  });

  // ---------- 3D tilt on hover (mouse-tracked) ----------
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!reduceMotion){
    document.querySelectorAll('figure.plate').forEach(card => {
      const maxTilt = 6; // degrees
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;  // 0..1
        const py = (e.clientY - rect.top) / rect.height;  // 0..1
        const rotateY = (px - 0.5) * maxTilt * 2;
        const rotateX = (0.5 - py) * maxTilt * 2;
        card.style.transform = `translateY(-4px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // ---------- Filtering ----------
  const filterBtns = document.querySelectorAll('.filter-btn');
  let currentFilter = 'all';

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      applyFilter();
    });
  });

  function applyFilter(){
    let visibleCount = 0;
    document.querySelectorAll('figure.plate').forEach(fig => {
      const show = currentFilter === 'all' || fig.dataset.cat === currentFilter;
      fig.classList.toggle('hide', !show);
      if(show) visibleCount++;
    });
    countEl.textContent = visibleCount + (visibleCount === 1 ? ' plate' : ' plates');
  }

  // ---------- Lightbox ----------
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbTitle = document.getElementById('lbTitle');
  const lbSub = document.getElementById('lbSub');
  let activeIndex = 0;

  function visibleIndices(){
    return photos
      .map((p, i) => i)
      .filter(i => currentFilter === 'all' || photos[i].cat === currentFilter);
  }

  function openLightbox(index){
    activeIndex = index;
    renderLightbox();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox(){
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function renderLightbox(){
    const p = photos[activeIndex];
    lbImg.src = p.src;
    lbImg.alt = p.title;
    lbTitle.textContent = p.title;
    lbSub.textContent = p.place;
  }

  function step(dir){
    const vis = visibleIndices();
    if(vis.length === 0) return;
    const pos = vis.indexOf(activeIndex);
    let nextPos = pos === -1 ? 0 : (pos + dir + vis.length) % vis.length;
    activeIndex = vis[nextPos];

    const inner = document.querySelector('.lightbox-inner');
    const flipClass = dir > 0 ? 'flip-next' : 'flip-prev';
    inner.classList.add(flipClass);
    setTimeout(() => {
      renderLightbox();
      inner.classList.remove(flipClass);
    }, 180);
  }

  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  document.getElementById('lbPrev').addEventListener('click', () => step(-1));
  document.getElementById('lbNext').addEventListener('click', () => step(1));
  lightbox.addEventListener('click', (e) => { if(e.target === lightbox) closeLightbox(); });

  document.addEventListener('keydown', (e) => {
    if(!lightbox.classList.contains('open')) return;
    if(e.key === 'Escape') closeLightbox();
    if(e.key === 'ArrowLeft') step(-1);
    if(e.key === 'ArrowRight') step(1);
  });

  applyFilter();

  // ---------- Mobile nav toggle ----------
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // ---------- Scroll reveal ----------
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ---------- About portrait fade-in ----------
  const aboutImg = document.querySelector('.about-portrait img');
  if(aboutImg){
    if(aboutImg.complete){ aboutImg.classList.add('loaded'); }
    else { aboutImg.addEventListener('load', () => aboutImg.classList.add('loaded')); }
  }

  // ---------- Active nav link on scroll ----------
  const navAnchors = document.querySelectorAll('.sitenav-links a');
  const sectionEls = ['home','gallery','about','contact']
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        navAnchors.forEach(a => a.classList.remove('active'));
        const match = document.querySelector(`.sitenav-links a[href="#${entry.target.id}"]`);
        if(match) match.classList.add('active');
      }
    });
  }, {rootMargin:'-45% 0px -50% 0px'});
  sectionEls.forEach(el => navObserver.observe(el));

  // ---------- Contact form (demo only, no backend) ----------
  const contactForm = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.classList.add('show');
    contactForm.reset();
    setTimeout(() => formNote.classList.remove('show'), 4000);
  });
