/**
 * main.js — เปรม นมสด Landing Page
 * แยก JavaScript ออกมาจาก HTML
 */

// ============================================================
//  TRANSLATIONS — ข้อความ 2 ภาษา
// ============================================================
const translations = {
  th: {
    // Navbar
    nav_vibe:    'บรรยากาศร้าน',
    nav_menu:    'เมนูแนะนำ',
    nav_contact: 'ติดต่อเรา',
    // Hero
    hero_tag:    'ร้านนมสด เชียงราย',
    hero_sub:    'หอม หวาน มัน สดชื่นทุกแก้ว',
    hero_desc:   'จุดแวะพักเติมความสุข กับนมสดแท้ 100% และขนมปังปิ้งเตาถ่านหอมกรุ่น',
    hero_cta:    'ดูเมนูแนะนำ',
    // Sections
    section_label_vibe:    'บรรยากาศ',
    vibe_title:            'แวะมานั่งชิลที่ เปรม นมสด',
    vibe_desc:             'บรรยากาศเป็นกันเอง เหมาะสำหรับทุกช่วงเวลาพักผ่อนของคุณ',
    section_label_menu:    'เมนู',
    menu_title:            'เมนูแนะนำจากทางร้าน',
    menu_desc:             'ความอร่อยที่คุณต้องลอง นมสดแท้คู่กับขนมปังหอมกรุ่น',
    search_placeholder:    'ค้นหาเมนู (เช่น ปังปิ้ง, นมสด)...',
    cat_food:              'อาหารและของทานเล่น',
    cat_drink:             'เครื่องดื่ม',
    section_label_contact: 'ติดต่อ',
    contact_title:         'ที่ตั้งร้านและช่องทางติดต่อ',
    // Contact info
    info_address_label: 'ที่อยู่',
    info_address_val:   'ตำบลริมกก อำเภอเมือง เชียงราย<br>(ใกล้แยกไฟแดง)',
    info_hours_label:   'เวลาเปิด - ปิด',
    info_hours_val:     'เปิดทุกวัน 16:00 น. - 23:00 น.',
    info_phone_label:   'เบอร์โทรศัพท์',
    info_social_label:  'ติดตามเรา',
    // Footer
    footer_tagline:     'หอม หวาน มัน สดชื่นทุกแก้ว',
    footer_nav_label:   'เมนูด่วน',
    footer_hours_label: 'เวลาเปิดร้าน',
    footer_hours_val:   'เปิดทุกวัน<br>16:00 น. – 23:00 น.',
    footer_copy:        '© 2024 เปรม นมสด. สงวนลิขสิทธิ์ทุกประการ.',
    // Menu card badge labels
    badge_food:  'อาหาร',
    badge_drink: 'เครื่องดื่ม',
    // View price label (menu card hover)
    view_detail: 'ดูราคา',
  },

  en: {
    // Navbar
    nav_vibe:    'Atmosphere',
    nav_menu:    'Menu',
    nav_contact: 'Contact',
    // Hero
    hero_tag:    'Fresh Milk Shop · Chiang Rai',
    hero_sub:    'Rich, Sweet & Refreshing Every Sip',
    hero_desc:   'Your cozy stop for 100% fresh milk and charcoal-grilled toast',
    hero_cta:    'View Our Menu',
    // Sections
    section_label_vibe:    'Atmosphere',
    vibe_title:            'Chill Out at Prem Nomsod',
    vibe_desc:             'Cozy vibes, perfect for every moment of relaxation',
    section_label_menu:    'Menu',
    menu_title:            'Our Recommended Menu',
    menu_desc:             'Must-try delights — fresh milk paired with fragrant toasted bread',
    search_placeholder:    'Search menu (e.g. toast, milk)...',
    cat_food:              'Food & Snacks',
    cat_drink:             'Beverages',
    section_label_contact: 'Contact',
    contact_title:         'Location & Contact',
    // Contact info
    info_address_label: 'Address',
    info_address_val:   'Rim Kok, Mueang District, Chiang Rai<br>(Near the traffic light junction)',
    info_hours_label:   'Opening Hours',
    info_hours_val:     'Open Daily 4:00 PM – 11:00 PM',
    info_phone_label:   'Phone',
    info_social_label:  'Follow Us',
    // Footer
    footer_tagline:     'Rich, Sweet & Refreshing Every Sip',
    footer_nav_label:   'Quick Links',
    footer_hours_label: 'Opening Hours',
    footer_hours_val:   'Open Daily<br>4:00 PM – 11:00 PM',
    footer_copy:        '© 2024 Prem Nomsod. All rights reserved.',
    // Menu card badge labels
    badge_food:  'Food',
    badge_drink: 'Drink',
    view_detail: 'View Price',
  }
};

// ============================================================
//  MENU DATA — ข้อมูลเมนู (ชื่อ 2 ภาษา, ราคา, รูป, หมวด)
// ============================================================
const menuItems = [
  // ---------- อาหาร ----------
  {
    category: 'food',
    img: 'เมนูร้าน/44318093_775478239458207_3282462492936110080_n.jpg',
    name_th: 'ปังปิ้งช็อกโกแลต',
    name_en: 'Chocolate Toast',
    price: '35',
  },
  {
    category: 'food',
    img: 'เมนูร้าน/44342331_775477832791581_5534039281854578688_n.jpg',
    name_th: 'นักเก็ตทอดกรอบ',
    name_en: 'Crispy Nuggets',
    price: '55',
  },
  {
    category: 'food',
    img: 'เมนูร้าน/492412841_2527023350970345_4918805182070823305_n.jpg',
    name_th: 'ปังปิ้งแยมส้ม',
    name_en: 'Orange Jam Toast',
    price: '40',
  },
  {
    category: 'food',
    img: 'เมนูร้าน/492846847_2529634777375869_7035050521733813971_n.jpg',
    name_th: 'ปังเย็นเครื่องแน่น',
    name_en: 'Loaded Cold Toast',
    price: '65',
  },
  {
    category: 'food',
    img: 'เมนูร้าน/492942909_2528367987502548_811911000064678643_n.jpg',
    name_th: 'เฟรนช์ฟรายส์ทอด',
    name_en: 'French Fries',
    price: '49',
  },
  {
    category: 'food',
    img: 'เมนูร้าน/493540617_2527023530970327_8570458719034524791_n.jpg',
    name_th: 'ปังปิ้งโอวัลติน',
    name_en: 'Ovaltine Toast',
    price: '45',
  },
  // ---------- เครื่องดื่ม ----------
  {
    category: 'drink',
    img: 'เมนูร้าน/493473120_2528534147485932_1438962868243656304_n.jpg',
    name_th: 'นมชมพูเย็น',
    name_en: 'Strawberry Milk (Iced)',
    price: '40',
  },
];

// ============================================================
//  STATE
// ============================================================
let currentLang = localStorage.getItem('lang') || 'th';

// ============================================================
//  I18N — อัปเดตข้อความทั้งหน้า
// ============================================================
function applyTranslations(lang) {
  const t = translations[lang];

  // text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // html lang attribute
  document.documentElement.lang = lang === 'th' ? 'th' : 'en';

  // update menu cards
  renderMenuCards(lang);

  // update lang button states
  updateLangButtons(lang);
}

function updateLangButtons(lang) {
  ['langTH', 'langTH_m'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.classList.toggle('active',   lang === 'th');
    btn.classList.toggle('inactive', lang !== 'th');
  });
  ['langEN', 'langEN_m'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.classList.toggle('active',   lang === 'en');
    btn.classList.toggle('inactive', lang !== 'en');
  });
}

function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
}

// ============================================================
//  RENDER MENU CARDS — สร้างการ์ดเมนูจาก JS (ลด HTML ซ้ำ)
// ============================================================
function renderMenuCards(lang) {
  const t  = translations[lang];
  const foodGrid  = document.getElementById('foodGrid');
  const drinkGrid = document.getElementById('drinkGrid');
  if (!foodGrid || !drinkGrid) return;

  foodGrid.innerHTML  = '';
  drinkGrid.innerHTML = '';

  menuItems.forEach(item => {
    const name  = lang === 'th' ? item.name_th : item.name_en;
    const badge = item.category === 'food' ? t.badge_food : t.badge_drink;
    const badgeColor = item.category === 'food'
      ? 'bg-amber-100 text-amber-800'
      : 'bg-sky-100 text-sky-800';

    const card = document.createElement('article');
    card.className = 'bg-cream rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group menu-item';
    card.setAttribute('data-name-th', item.name_th.toLowerCase());
    card.setAttribute('data-name-en', item.name_en.toLowerCase());

    card.innerHTML = `
      <div class="relative h-64 overflow-hidden">
        <img src="${item.img}"
             alt="${name}"
             class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
             loading="lazy">
        <span class="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${badgeColor}">${badge}</span>
        <div class="menu-card-overlay">
          <span class="text-white text-sm font-semibold tracking-wide">${t.view_detail}</span>
        </div>
      </div>
      <div class="p-6 text-center">
        <h3 class="text-xl font-semibold text-brown-900 mb-2">${name}</h3>
        <p class="text-caramel font-bold text-xl">${item.price}.-</p>
      </div>
    `;

    if (item.category === 'food') {
      foodGrid.appendChild(card);
    } else {
      drinkGrid.appendChild(card);
    }
  });
}

// ============================================================
//  SEARCH MENU — ใช้ classList แทน style.display
// ============================================================
function initSearchMenu() {
  const input = document.getElementById('searchInput');
  if (!input) return;

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase().trim();
    document.querySelectorAll('.menu-item').forEach(item => {
      const nameTh = item.getAttribute('data-name-th') || '';
      const nameEn = item.getAttribute('data-name-en') || '';
      const match  = nameTh.includes(query) || nameEn.includes(query);
      item.classList.toggle('hidden', !match);
    });
  });
}

// ============================================================
//  MOBILE HAMBURGER MENU
// ============================================================
function initMobileMenu() {
  const btn   = document.getElementById('mobileMenuBtn');
  const panel = document.getElementById('mobileMenuPanel');
  const ham   = document.getElementById('iconHam');
  const close = document.getElementById('iconClose');
  if (!btn || !panel) return;

  btn.addEventListener('click', () => {
    const isOpen = panel.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
    ham.classList.toggle('hidden', isOpen);
    close.classList.toggle('hidden', !isOpen);
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      panel.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      ham.classList.remove('hidden');
      close.classList.add('hidden');
    });
  });
}

// ============================================================
//  SLIDESHOW
// ============================================================
function initSlideshow() {
  const slider = document.getElementById('vibeSlider');
  const dots   = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('slidePrev');
  const nextBtn = document.getElementById('slideNext');
  if (!slider || !dots) return;

  let current = 0;
  const total = slider.children.length;

  // Build dots
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `ไปสไลด์ที่ ${i + 1}`);
    dot.className = i === 0
      ? 'w-8 h-3 rounded-full bg-caramel transition-all duration-300'
      : 'w-3 h-3 rounded-full bg-white/70 hover:bg-white transition-all duration-300';
    dot.addEventListener('click', () => goTo(i));
    dots.appendChild(dot);
  }

  function goTo(idx) {
    current = (idx + total) % total;
    slider.style.transform = `translateX(-${current * 100}%)`;
    Array.from(dots.children).forEach((d, i) => {
      d.className = i === current
        ? 'w-8 h-3 rounded-full bg-caramel transition-all duration-300'
        : 'w-3 h-3 rounded-full bg-white/70 hover:bg-white transition-all duration-300';
    });
  }

  prevBtn && prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn && nextBtn.addEventListener('click', () => goTo(current + 1));

  let timer = setInterval(() => goTo(current + 1), 5000);
  const wrapper = document.getElementById('slideshowWrapper');
  wrapper.addEventListener('mouseenter', () => clearInterval(timer));
  wrapper.addEventListener('mouseleave', () => { timer = setInterval(() => goTo(current + 1), 5000); });
}

// ============================================================
//  BACK TO TOP
// ============================================================
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    const show = window.scrollY > 300;
    btn.classList.toggle('opacity-0',   !show);
    btn.classList.toggle('invisible',   !show);
    btn.classList.toggle('opacity-100', show);
    btn.classList.toggle('visible',     show);
  }, { passive: true });
}

// ============================================================
//  SCROLL ANIMATION — Intersection Observer
// ============================================================
function initScrollAnimation() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ============================================================
//  LOADING SCREEN
// ============================================================
function initLoadingScreen() {
  const screen = document.getElementById('loadingScreen');
  if (!screen) return;
  window.addEventListener('load', () => {
    setTimeout(() => screen.classList.add('hidden-loader'), 400);
  });
}

// ============================================================
//  LANGUAGE BUTTONS
// ============================================================
function initLangButtons() {
  ['langTH', 'langTH_m'].forEach(id => {
    const btn = document.getElementById(id);
    btn && btn.addEventListener('click', () => switchLang('th'));
  });
  ['langEN', 'langEN_m'].forEach(id => {
    const btn = document.getElementById(id);
    btn && btn.addEventListener('click', () => switchLang('en'));
  });
}

// ============================================================
//  INIT ALL
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  initLangButtons();
  applyTranslations(currentLang);   // apply saved language & render menu
  initMobileMenu();
  initSlideshow();
  initBackToTop();
  initScrollAnimation();
  initSearchMenu();
});
