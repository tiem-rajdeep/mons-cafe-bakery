/**
 * Mon's Café & Bakery — Main Script
 * Handles: navigation, hero animation, scroll reveals,
 *          product cards, order modal, WhatsApp links, AI chatbot
 */

'use strict';

/* ════════════════════════════════════════════════════════════
   PRODUCT DATA
   Add / edit products here without touching HTML
═══════════════════════════════════════════════════════════ */
const PRODUCTS = {
  cakes: [
    {
      id: 'birthday-cake',
      name: 'Birthday Cake',
      desc: 'A celebration masterpiece — layered, frosted, and decorated just for your special day.',
      img: 'assets/images/birthday-cake.jpg',
      badge: 'Best Seller',
      type: 'cake',
      options: { weights: true, eggType: true, flavours: true }
    },
    {
      id: 'anniversary-cake',
      name: 'Anniversary Cake',
      desc: 'Romantic, elegant, and timeless — crafted to make your anniversary unforgettable.',
      img: 'assets/images/anniversary-cake.jpg',
      badge: 'Popular',
      type: 'cake',
      options: { weights: true, eggType: true, flavours: true }
    },
    {
      id: 'bento-cake',
      name: 'Bento Cake',
      desc: 'A cute Korean-style mini cake — personal, pretty, and perfect for gifting.',
      img: 'assets/images/bento-cake.jpg',
      badge: 'Trending',
      type: 'cake',
      options: { weights: false, eggType: true, flavours: true }
    },
    {
      id: 'tub-cake',
      name: 'Tub Cake',
      desc: 'Indulgent layers of cake and cream in a handy jar — every spoonful is pure bliss.',
      img: 'assets/images/tub-cake.jpg',
      badge: 'New',
      type: 'cake',
      options: { weights: false, eggType: true, flavours: true }
    },
    {
      id: 'christmas-cake',
      name: 'Christmas Cake',
      desc: 'Rich, traditional holiday cake packed with festive spices, premium fruits, and frosted elegance.',
      img: 'assets/images/christmas-cake.jpg',
      badge: 'Special',
      type: 'cake',
      options: { weights: true, eggType: true, flavours: false }
    }
  ],
  items: [
    {
      id: 'brownie',
      name: 'Brownie',
      desc: 'Fudgy, rich, and deeply chocolatey — our homemade brownies are melt-in-your-mouth good.',
      img: 'assets/images/brownie.jpg',
      badge: 'Fan Favourite',
      type: 'brownie',
      options: { quantity: true }
    },
    {
      id: 'pizza',
      name: 'Pizza',
      desc: 'Freshly baked artisan pizza with golden crust, melted cheese, and your choice of toppings.',
      img: 'assets/images/pizza.jpg',
      badge: null,
      type: 'pizza',
      options: { pizzaSize: true, pizzaType: true }
    },
    {
      id: 'chicken-bun',
      name: 'Crisscross Chicken Bun',
      desc: 'Soft, golden buns with a crisscross top — filled with flavourful spiced chicken filling.',
      img: 'assets/images/chicken-bun.jpg',
      badge: 'Special',
      type: 'bun',
      options: { quantity: true }
    },
    {
      id: 'ice-cream',
      name: 'Ice Cream Tub',
      desc: 'Creamy, dreamy artisan ice cream tubs — available in Chocolate, Butterscotch, Mango, Vanilla, Blueberry, Strawberry, and Paan flavours.',
      img: 'assets/images/ice-cream.jpg',
      badge: null,
      type: 'icecream',
      options: { iceCreamFlavours: true, quantity: true }
    }
  ]
};

const FLAVOURS = ['Chocolate', 'Mango', 'Butterscotch', 'Vanilla', 'Strawberry', 'Blueberry', 'Coffee', 'Rosmalai'];
const WEIGHTS  = ['0.5 pound', '1 pound', '1.5 pound', '2 pound', 'Custom'];
const PIZZA_SIZES = ['Small (6")', 'Medium (8")', 'Large (10")', 'Extra Large (12")'];
const PIZZA_TYPES = ['Chicken Pizza', 'BBQ Chicken Pizza', 'Paneer Tikka pizza', 'Vegetarian Pizza', 'Paneer Cheese Burst'];
const ICE_CREAM_FLAVOURS = ['Chocolate', 'Butterscotch', 'Mango', 'Vanilla', 'Blueberry', 'Strawberry', 'Paan'];
const WA_NUMBER = '918617878810';

/* ════════════════════════════════════════════════════════════
   UTILITY HELPERS
═══════════════════════════════════════════════════════════ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function encodeWA(text) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

/* ════════════════════════════════════════════════════════════
   NAVBAR — scroll behaviour + hamburger
═══════════════════════════════════════════════════════════ */
(function initNavbar() {
  const navbar     = $('#navbar');
  const hamburger  = $('#hamburger-btn');
  const mobileMenu = $('#mobile-menu');
  const closeBtn   = $('#mobile-menu-close');
  const mobileLinks = $$('.mobile-nav-link');

  // Scroll-aware navbar
  const stickyWA = $('#sticky-wa-bar');

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    // Hide sticky WA bar when scrolled near top
    if (stickyWA) {
      stickyWA.classList.toggle('hidden', currentScroll < 300);
    }
  }, { passive: true });

  // Hamburger toggle
  function openMenu() {
    mobileMenu.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
  });
  closeBtn.addEventListener('click', closeMenu);
  mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

  // Close on outside click
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) closeMenu();
  });
  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
})();

/* ════════════════════════════════════════════════════════════
   LANDING HERO — floating petals effect
═══════════════════════════════════════════════════════════ */
(function initLandingHero() {
  const hero = $('.landing-hero-header');
  if (hero && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    const petalColors = [
      'rgba(219,165,164,0.35)',
      'rgba(245,232,237,0.25)',
      'rgba(133,23,72,0.2)',
      'rgba(255,255,255,0.15)'
    ];
    const PETAL_COUNT = 16;

    for (let i = 0; i < PETAL_COUNT; i++) {
      const petal = document.createElement('div');
      petal.className = 'hero-petal';
      const size = Math.random() * 8 + 4;
      const left = Math.random() * 100;
      const dur  = Math.random() * 12 + 8;
      const delay = Math.random() * -15;
      const color = petalColors[Math.floor(Math.random() * petalColors.length)];

      petal.style.cssText = `
        width:${size}px; height:${size}px;
        left:${left}%;
        bottom:-10px;
        background:${color};
        animation-duration:${dur}s;
        animation-delay:${delay}s;
        border-radius:${Math.random() > 0.5 ? '50%' : '30% 70% 70% 30%'};
      `;
      hero.appendChild(petal);
    }
  }
})();

/* ════════════════════════════════════════════════════════════
   SCROLL REVEAL — IntersectionObserver
═══════════════════════════════════════════════════════════ */
(function initScrollReveal() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    $$('.reveal, .reveal-left, .reveal-right').forEach(el => {
      el.classList.add('visible');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  $$('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
})();

/* ════════════════════════════════════════════════════════════
   PRODUCT CARDS — render from data
═══════════════════════════════════════════════════════════ */
(function renderProducts() {
  function buildCard(product) {
    const card = document.createElement('article');
    card.className = 'product-card reveal';
    card.setAttribute('role', 'article');
    card.setAttribute('aria-label', product.name);
    card.dataset.productId = product.id;

    card.innerHTML = `
      <div class="product-card-img-wrap">
        <img
          src="${product.img}"
          alt="${product.name} — Mon's Café & Bakery"
          loading="lazy"
          width="400"
          height="300"
        />
        ${product.badge ? `<span class="product-card-badge" aria-label="Tag: ${product.badge}">${product.badge}</span>` : ''}
      </div>
      <div class="product-card-body">
        <h3 class="product-card-name">${product.name}</h3>
        <p class="product-card-desc">${product.desc}</p>
        <div class="product-card-footer">
          <button
            class="btn btn-ghost"
            data-product-id="${product.id}"
            id="order-btn-${product.id}"
            aria-label="Customize and order ${product.name}"
          >
            🛒 Customize & Order
          </button>
        </div>
      </div>
    `;
    return card;
  }

  const cakesGrid = $('#cakes-grid');
  const itemsGrid = $('#items-grid');

  PRODUCTS.cakes.forEach(p => cakesGrid.appendChild(buildCard(p)));
  PRODUCTS.items.forEach(p => itemsGrid.appendChild(buildCard(p)));

  // Re-observe newly added cards
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  $$('.product-card.reveal').forEach(el => observer.observe(el));

  // Delegate click to order buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-product-id]');
    if (btn && btn.tagName === 'BUTTON') {
      const id = btn.dataset.productId;
      const product = [...PRODUCTS.cakes, ...PRODUCTS.items].find(p => p.id === id);
      if (product) openOrderModal(product);
    }
  });
})();

/* ════════════════════════════════════════════════════════════
   ORDER MODAL
═══════════════════════════════════════════════════════════ */
let _currentProduct = null;
let _selections     = {};

function openOrderModal(product) {
  _currentProduct = product;
  _selections     = {};

  const overlay   = $('#order-modal');
  const img       = $('#modal-img');
  const nameEl    = $('#modal-product-name');
  const descEl    = $('#modal-product-desc');
  const optArea   = $('#modal-options-area');

  img.src         = product.img;
  img.alt         = product.name;
  nameEl.textContent = product.name;
  descEl.textContent = product.desc;

  // Build option HTML
  optArea.innerHTML = buildOptions(product);

  // Attach chip selection logic
  $$('.option-chip', optArea).forEach(chip => {
    chip.addEventListener('click', () => selectChip(chip));
    chip.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectChip(chip); }
    });
  });

  // Quantity control
  const qtyDisplay = $('#qty-display', optArea);
  if (qtyDisplay) {
    let qty = 1;
    $('#qty-minus', optArea)?.addEventListener('click', () => {
      if (qty > 1) { qty--; qtyDisplay.textContent = qty; _selections.quantity = qty; }
    });
    $('#qty-plus', optArea)?.addEventListener('click', () => {
      qty++;
      qtyDisplay.textContent = qty;
      _selections.quantity = qty;
    });
    _selections.quantity = 1;
  }

  overlay.classList.add('open');
  overlay.removeAttribute('aria-hidden');
  document.body.style.overflow = 'hidden';

  // Focus management
  setTimeout(() => $('#modal-close-btn')?.focus(), 100);
}

function buildOptions(product) {
  const { options } = product;
  let html = '';

  if (options.weights) {
    html += `
      <div class="option-group">
        <span class="option-group-label">Weight / Size</span>
        <div class="option-chips" role="group" aria-label="Select weight">
          ${WEIGHTS.map(w => `
            <button class="option-chip" data-group="weight" data-value="${w}" aria-pressed="false" tabindex="0">${w}</button>
          `).join('')}
        </div>
      </div>`;
  }

  if (options.eggType) {
    html += `
      <div class="option-group">
        <span class="option-group-label">Type</span>
        <div class="option-chips" role="group" aria-label="Select egg type">
          <button class="option-chip" data-group="eggType" data-value="Eggless (Veg)" aria-pressed="false">🌿 Eggless (Veg)</button>
          <button class="option-chip" data-group="eggType" data-value="With Egg" aria-pressed="false">🥚 With Egg</button>
        </div>
      </div>`;
  }

  if (options.pizzaType) {
    html += `
      <div class="option-group">
        <span class="option-group-label">Pizza Type</span>
        <div class="option-chips" role="group" aria-label="Select pizza type">
          ${PIZZA_TYPES.map(t => `
            <button class="option-chip" data-group="pizzaType" data-value="${t}" aria-pressed="false" tabindex="0">${pizzaEmoji(t)} ${t}</button>
          `).join('')}
        </div>
      </div>`;
  }

  if (options.vegType) {
    html += `
      <div class="option-group">
        <span class="option-group-label">Type</span>
        <div class="option-chips" role="group" aria-label="Select type">
          <button class="option-chip" data-group="vegType" data-value="Veg" aria-pressed="false">🌿 Veg</button>
          <button class="option-chip" data-group="vegType" data-value="Non-Veg" aria-pressed="false">🍗 Non-Veg</button>
        </div>
      </div>`;
  }

  if (options.flavours) {
    html += `
      <div class="option-group">
        <span class="option-group-label">Flavour</span>
        <div class="option-chips" role="group" aria-label="Select flavour">
          ${FLAVOURS.map(f => `
            <button class="option-chip" data-group="flavour" data-value="${f}" aria-pressed="false" tabindex="0">${flavourEmoji(f)} ${f}</button>
          `).join('')}
        </div>
      </div>`;
  }

  if (options.iceCreamFlavours) {
    html += `
      <div class="option-group">
        <span class="option-group-label">Flavour</span>
        <div class="option-chips" role="group" aria-label="Select ice cream flavour">
          ${ICE_CREAM_FLAVOURS.map(f => `
            <button class="option-chip" data-group="iceCreamFlavour" data-value="${f}" aria-pressed="false" tabindex="0">${iceCreamFlavourEmoji(f)} ${f}</button>
          `).join('')}
        </div>
      </div>`;
  }

  if (options.pizzaSize) {
    html += `
      <div class="option-group">
        <span class="option-group-label">Size</span>
        <div class="option-chips" role="group" aria-label="Select pizza size">
          ${PIZZA_SIZES.map(s => `
            <button class="option-chip" data-group="pizzaSize" data-value="${s}" aria-pressed="false">${s}</button>
          `).join('')}
        </div>
      </div>`;
  }

  if (options.quantity) {
    html += `
      <div class="option-group">
        <span class="option-group-label">Quantity</span>
        <div class="quantity-control" role="group" aria-label="Quantity">
          <button class="qty-btn" id="qty-minus" aria-label="Decrease quantity">−</button>
          <span class="qty-display" id="qty-display" aria-live="polite">1</span>
          <button class="qty-btn" id="qty-plus" aria-label="Increase quantity">+</button>
        </div>
      </div>`;
  }

  return html;
}

function flavourEmoji(f) {
  const map = {
    Chocolate: '🍫', Mango: '🥭', Butterscotch: '🍮',
    Vanilla: '🍦', Strawberry: '🍓', Blueberry: '🫐', Coffee: '☕', Rosmalai: '🍨'
  };
  return map[f] || '🎂';
}

function iceCreamFlavourEmoji(f) {
  const map = {
    Chocolate: '🍫', Butterscotch: '🍮', Mango: '🥭',
    Vanilla: '🍦', Blueberry: '🫐', Strawberry: '🍓', Paan: '🍃'
  };
  return map[f] || '🍨';
}

function pizzaEmoji(t) {
  if (t.includes('Chicken')) return '🍗';
  if (t.includes('Paneer')) return '🧀';
  if (t.includes('Vegetarian')) return '🌿';
  return '🍕';
}

function selectChip(chip) {
  const group = chip.dataset.group;
  const value = chip.dataset.value;

  // Deselect others in same group
  $$(`[data-group="${group}"]`).forEach(c => {
    c.classList.remove('selected');
    c.setAttribute('aria-pressed', 'false');
  });

  chip.classList.add('selected');
  chip.setAttribute('aria-pressed', 'true');
  _selections[group] = value;
}

function closeOrderModal() {
  const overlay = $('#order-modal');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  _currentProduct = null;
  _selections     = {};
}

$('#modal-close-btn').addEventListener('click', closeOrderModal);
$('#order-modal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeOrderModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && $('#order-modal').classList.contains('open')) {
    closeOrderModal();
  }
});

// WhatsApp order button
$('#modal-whatsapp-btn').addEventListener('click', () => {
  if (!_currentProduct) return;
  const msg = buildWhatsAppMessage(_currentProduct, _selections);
  window.open(encodeWA(msg), '_blank', 'noopener');
  closeOrderModal();
});

function buildWhatsAppMessage(product, sel) {
  const lines = [
    `Hello Mon's Café & Bakery! 🎂`,
    `I'd like to place an order:`,
    ``,
    `📦 *Item:* ${product.name}`,
  ];

  if (sel.weight)          lines.push(`⚖️ *Weight:* ${sel.weight}`);
  if (sel.eggType)         lines.push(`🌿 *Type:* ${sel.eggType}`);
  if (sel.vegType)         lines.push(`🌿 *Type:* ${sel.vegType}`);
  if (sel.pizzaType)       lines.push(`🍕 *Pizza Type:* ${sel.pizzaType}`);
  if (sel.flavour)         lines.push(`🍰 *Flavour:* ${sel.flavour}`);
  if (sel.iceCreamFlavour) lines.push(`🍨 *Flavour:* ${sel.iceCreamFlavour}`);
  if (sel.pizzaSize)       lines.push(`📏 *Size:* ${sel.pizzaSize}`);
  if (sel.quantity)        lines.push(`🔢 *Quantity:* ${sel.quantity}`);

  lines.push(``);
  lines.push(`Please confirm availability and pricing. Thank you! 🙏`);

  return lines.join('\n');
}

/* ════════════════════════════════════════════════════════════
   AI CHAT ASSISTANT
═══════════════════════════════════════════════════════════ */

/**
 * Gemini API Key — replace with your key to enable the AI chatbot.
 * Leave as empty string '' to use the smart fallback mode.
 * IMPORTANT: For production, this should be handled server-side.
 */
const GEMINI_API_KEY = ''; // e.g. 'AIzaSy...'

const SYSTEM_PROMPT = `You are a friendly and helpful assistant for "Mon's Café & Bakery", a home bakery in Saptapalli, Habra, West Bengal, India.

Our menu includes:
CAKES: Birthday Cake, Anniversary Cake, Bento Cake (Korean-style small personal cake), Tub Cake (layered jar cake), Christmas Cake
OTHER ITEMS: Brownies, Pizza (Chicken Pizza, BBQ Chicken Pizza, Paneer Tikka pizza, Vegetarian Pizza, Paneer Cheese Burst), Crisscross Chicken Bun, Ice Cream Tub (Flavours: Chocolate, Butterscotch, Mango, Vanilla, Blueberry, Strawberry, Paan)

CAKE OPTIONS:
- Flavours: Chocolate, Mango, Butterscotch, Vanilla, Strawberry, Blueberry, Coffee, Rosmalai
- Weights: 0.5 pound, 1 pound, 1.5 pound, 2 pound, Custom
- Types: Eggless (Veg) or With Egg

FREE HOME DELIVERY within 5 km of Saptapalli, Habra.
Contact: +91 8617878810 (WhatsApp & Call)
Instagram: @mons_cafe.bakery | Facebook: Mon's Café & Bakery

Your role:
1. Warmly greet customers and understand what they want
2. Suggest the most suitable product(s) from our menu
3. Suggest flavours, weights based on their needs
4. Encourage them to click "Customize & Order" on the product card
5. Keep responses SHORT (2-4 sentences max), friendly, and in simple English
6. Use a few relevant emojis to keep it warm and inviting
7. If asked about pricing, say it's confirmed over WhatsApp with the bakery owner`;

// Rule-based fallback responses
const FALLBACK_RULES = [
  {
    keywords: ['birthday', 'bday', 'b-day'],
    response: `🎂 For birthdays, our **Birthday Cake** is perfect! We can customize it with your choice of flavour (Chocolate, Mango, Rosmalai, Strawberry & more) and weight (0.5 pound to 2 pound+). You can also try a cute **Bento Cake** for a personal touch! Click "Customize & Order" to send your preferences via WhatsApp.`
  },
  {
    keywords: ['anniversary', 'wedding', 'couple', 'love'],
    response: `💑 Our **Anniversary Cake** is designed for romance! Beautifully decorated with rose flowers and gold accents. Choose your favourite flavour and weight in pounds, and we'll craft it with love. WhatsApp us at +91 8617878810 to discuss!`
  },
  {
    keywords: ['bento', 'small', 'mini', 'personal', 'korean'],
    response: `🌸 A **Bento Cake** is a cute, Korean-style mini cake — perfect for personal celebrations or gifting! It's small, beautifully decorated, and comes in all our flavours including Rosmalai. Great for expressing something special! 🎁`
  },
  {
    keywords: ['tub', 'jar', 'cup'],
    response: `🫙 Our **Tub Cake** is a delicious layered dessert served in a jar — alternating cake, cream, and flavouring. Available in Chocolate, Rosmalai, Strawberry, Vanilla and more flavours.`
  },
  {
    keywords: ['christmas', 'xmas', 'holiday', 'fruit', 'dry fruit', 'plum'],
    response: `🎄 Our **Christmas Cake** is a rich, traditional holiday cake packed with festive spices, fruits, and frosted elegance! Made with love to make your holiday celebrations extra special.`
  },
  {
    keywords: ['rosmalai', 'rasmalai'],
    response: `🍨 Our **Rosmalai Cake** is a dream come true for fusion dessert lovers! Authentic Rosmalai flavour blended with soft, cream-layered cake. Choose Rosmalai flavour when placing your cake order!`
  },
  {
    keywords: ['chocolate', 'choco', 'dark'],
    response: `🍫 Chocolate lovers, you're in the right place! Our **Chocolate Birthday Cake, Tub Cake, and Brownies** all come in rich chocolate flavour. Our brownies are fudgy and deeply chocolatey — a must-try!`
  },
  {
    keywords: ['mango', 'alphonso'],
    response: `🥭 Mango is one of our most popular flavours! It pairs beautifully with any of our cakes — Birthday, Bento, or Tub Cake. Fresh and fruity, it's loved by everyone! Would you like to order one?`
  },
  {
    keywords: ['brownie', 'brownies'],
    response: `🍫 Our homemade **Brownies** are fudgy, dense, and deeply chocolatey with a gorgeous crinkle top! They make for the perfect gift or indulgent treat. Order via WhatsApp!`
  },
  {
    keywords: ['pizza'],
    response: `🍕 Yes, we make **Pizza** too! Options: Chicken Pizza, BBQ Chicken Pizza, Paneer Tikka pizza, Vegetarian Pizza, and Paneer Cheese Burst. Choose your size (6" to 12") and pizza type!`
  },
  {
    keywords: ['bun', 'chicken', 'crisscross'],
    response: `🍗 Our **Crisscross Chicken Bun** is a bakery favourite! Soft, golden buns with a classic crisscross pattern, filled with spiced chicken. Perfect as a savory snack!`
  },
  {
    keywords: ['ice cream', 'icecream', 'ice cream tub', 'paan'],
    response: `🍦 Our **Ice Cream Tub** is creamy, dreamy, and available in Chocolate 🍫, Butterscotch 🍮, Mango 🥭, Vanilla 🍦, Blueberry 🫐, Strawberry 🍓, and Paan 🍃! Click "Customize & Order" to pick your favourite flavour!`
  },
  {
    keywords: ['delivery', 'deliver', 'location', 'area', 'habra', 'km'],
    response: `🚚 We offer **free home delivery within 5 km of Saptapalli, Habra**! For delivery outside this radius, please WhatsApp us at +91 8617878810 to discuss.`
  },
  {
    keywords: ['price', 'cost', 'how much', 'rate', 'pricing'],
    response: `💬 Pricing depends on the size (in pounds), flavour, and design. All pricing is confirmed personally over WhatsApp by our bakery owner at **+91 8617878810**!`
  },
  {
    keywords: ['eggless', 'veg', 'vegetarian', 'without egg'],
    response: `🌿 Great news — most of our cakes are available **eggless (veg)**! Simply select "Eggless (Veg)" in the options.`
  },
  {
    keywords: ['flavour', 'flavor', 'taste', 'which flavor'],
    response: `🍰 We offer 8 amazing flavours: **Chocolate 🍫, Mango 🥭, Butterscotch 🍮, Vanilla 🍦, Strawberry 🍓, Blueberry 🫐, Coffee ☕, and Rosmalai 🍨**! What's your favourite?`
  },
  {
    keywords: ['hi', 'hello', 'hey', 'namaste', 'hola'],
    response: `🌸 Hello! Welcome to Mon's Café & Bakery! 🎂 Are you looking for a **birthday cake, anniversary cake, bento cake, Christmas cake**, or savory treats? Tell me what you're celebrating!`
  }
];

function getFallbackResponse(message) {
  const lower = message.toLowerCase();
  for (const rule of FALLBACK_RULES) {
    if (rule.keywords.some(k => lower.includes(k))) {
      return rule.response;
    }
  }
  return `🎂 I'd love to help you find the perfect treat! We have custom **Birthday Cakes, Anniversary Cakes, Bento Cakes, Tub Cakes, Fruit Cakes, Brownies, Pizza, Chicken Buns, and Ice Cream Tubs**. Could you tell me more about the occasion or what you're craving? 😊`;
}

async function getGeminiResponse(message) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;
  const body = {
    contents: [
      { role: 'user', parts: [{ text: `${SYSTEM_PROMPT}\n\nCustomer says: ${message}` }] }
    ],
    generationConfig: {
      maxOutputTokens: 200,
      temperature: 0.7
    }
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!res.ok) throw new Error('API error');
  const data = await res.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || null;
}

// ─── Chat Widget UI ──────────────────────────────────────
(function initChatWidget() {
  const fab          = $('#chat-fab-btn');
  const widget       = $('#chat-widget-panel');
  const closeBtn     = $('#chat-close-btn');
  const inputField   = $('#chat-input-field');
  const sendBtn      = $('#chat-send-btn');
  const messagesEl   = $('#chat-messages');

  let isOpen = false;

  function openChat() {
    isOpen = true;
    widget.classList.add('open');
    fab.setAttribute('aria-expanded', 'true');
    inputField.focus();
  }

  function closeChat() {
    isOpen = false;
    widget.classList.remove('open');
    fab.setAttribute('aria-expanded', 'false');
  }

  fab.addEventListener('click', () => isOpen ? closeChat() : openChat());
  closeBtn.addEventListener('click', closeChat);

  function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${sender}`;

    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';

    // Convert markdown-style **bold** to <strong>
    bubble.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    msgDiv.appendChild(bubble);
    messagesEl.appendChild(msgDiv);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return msgDiv;
  }

  function showTyping() {
    const typing = document.createElement('div');
    typing.className = 'chat-msg bot';
    typing.id = 'chat-typing';
    typing.innerHTML = `<div class="chat-typing"><span></span><span></span><span></span></div>`;
    messagesEl.appendChild(typing);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return typing;
  }

  async function handleSend() {
    const text = inputField.value.trim();
    if (!text) return;

    inputField.value = '';
    sendBtn.disabled = true;
    appendMessage(text, 'user');

    const typingEl = showTyping();

    try {
      let response;
      if (GEMINI_API_KEY) {
        response = await getGeminiResponse(text);
      }
      if (!response) {
        // Use fallback
        await new Promise(r => setTimeout(r, 800)); // simulate thinking
        response = getFallbackResponse(text);
      }
      typingEl.remove();
      appendMessage(response, 'bot');
    } catch (err) {
      typingEl.remove();
      appendMessage(getFallbackResponse(text), 'bot');
    } finally {
      sendBtn.disabled = false;
      inputField.focus();
    }
  }

  sendBtn.addEventListener('click', handleSend);
  inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  });
})();

// Global function for chip quick-sends in welcome message
function sendChatMessage(text) {
  const inputField = $('#chat-input-field');
  if (inputField) {
    inputField.value = text;
    $('#chat-send-btn')?.click();
  }
}

/* ════════════════════════════════════════════════════════════
   EXPLORE CARDS — keyboard accessibility
═══════════════════════════════════════════════════════════ */
['#explore-cakes-card', '#explore-items-card'].forEach(sel => {
  const card = $(sel);
  if (card) {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.querySelector('a')?.click();
      }
    });
  }
});

/* ════════════════════════════════════════════════════════════
   SMOOTH SCROLL POLYFILL (for older Safari)
═══════════════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ════════════════════════════════════════════════════════════
   LOGO FALLBACK — copy logo from brand image to assets
   (If logo.png is missing, hide gracefully)
═══════════════════════════════════════════════════════════ */
document.querySelectorAll('img[src="assets/images/logo.png"]').forEach(img => {
  img.addEventListener('error', function() {
    this.style.display = 'none';
  });
});

