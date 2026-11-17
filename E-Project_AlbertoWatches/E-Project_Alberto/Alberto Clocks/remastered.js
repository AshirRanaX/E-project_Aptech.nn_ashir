/**
 * ============================================================================
 * ALBERTO WATCH COMPANY - MAIN CONTROLLER SCRIPT
 * Product data, shopping bag + checkout, theme, catalog, hero and exploded view.
 * ============================================================================
 */

// Central Product Inventory Database
const watchInventoryDatabase = [
  {
    id: 1,
    title: "Rolex Submariner Date",
    brand: "Rolex",
    category: "luxury",
    price: 14200,
    img: "Rolex Submariner Date.PNG",
    desc: "The benchmark among diving watches. Features Oystersteel case, black Cerachrom bezel, and automatic caliber 3235 movement.",
    movement: "Automatic Swiss"
  },
  {
    id: 2,
    title: "Garmin Venu 4",
    brand: "Garmin",
    category: "smart",
    price: 450,
    img: "Garmin Venu 4.PNG",
    desc: "A lifestyle-oriented GPS smartwatch blending a refined circular aesthetic with hardcore athletic telemetry, sleep coaching, and a multi-week battery footprint.",
    movement: "Digital Smart"
  },
  {
    id: 3,
    title: "Google Pixel Watch 4",
    brand: "Google",
    category: "smart",
    price: 350,
    img: "Google Pixel Watch 4.PNG",
    desc: "Features a minimalist circular dome-glass aesthetic, deep integration with Fitbit health ecosystems, dual-band GPS, and hands-free Gemini AI voice assistance.",
    movement: "Digital Smart"
  },
  {
    id: 4,
    title: "Samsung Galaxy Watch 8 Classic",
    brand: "Samsung",
    category: "smart",
    price: 450,
    img: "Samsung Galaxy Watch 8 Classic.PNG",
    desc: "Known for its physical rotating stainless steel bezel, elegant traditional watch aesthetics, advanced body composition tracking, and deep Wear OS productivity features.",
    movement: "Digital Smart"
  },
  {
    id: 5,
    title: "Louis Vuitton Tambour Horizon Light Up",
    brand: "Louis Vuitton",
    category: "smart",
    price: 3500,
    img: "Louis Vuitton Tambour Horizon Light Up.PNG",
    desc: "A luxury fashion-forward smartwatch featuring a custom operating system, 24 vibrant animated LED monogram lights glowing beneath a curved sapphire ring, and quick-change designer straps.",
    movement: "Digital Smart"
  },

  {
    id: 6,
    title: "TAG Heuer Connected Calibre E4",
    brand: "TAG Heuer",
    category: "smart",
    price: 2300,
    img: "TAG Heuer Connected Calibre E4.PNG",
    desc: "Bridges the gap between mechanical watchmaking and digital utility, featuring a sleek high-end steel or ceramic case, a rotating mechanical crown, and custom chronograph-style digital dials running on Wear OS.",
    movement: "Digital Smart"
  },

  {
    id: 7,
    title: "Garmin MARQ Gen 2 (Athlete Edition)",
    brand: "Garmin",
    category: "smart",
    price: 1900,
    img: "Garmin MARQ Gen 2 (Athlete Edition).PNG",
    desc: "A luxury ultra-premium tool watch crafted from grade-5 titanium, a domed sapphire crystal lens, and an AMOLED display, built specifically for high-end endurance tracking, multi-band GPS, and topographical mapping.",
    movement: "Digital Smart"
  },

  {
    id: 8,
    title: "Rolex Daytona Paul Newman",
    brand: "Rolex",
    category: "vintage",
    price: 150000,
    img: "Rolex Daytona Paul Newman.PNG",
    desc: "Perhaps the most legendary vintage chronograph in existence, featuring an exotic step dial, art-deco font subdials, and a contrasting outer minute track that cemented its cult status among racers and collectors alike.",
    movement: "Hand-Wound Mechanical"
  },

  {
    id: 9,
    title: "Cartier Santos Carrée",
    brand: "Cartier",
    category: "vintage",
    price: 9500,
    img: "Cartier Santos Carrée.PNG",
    desc: "Released in the late 1970s as Cartier's modern steel-and-gold sports icon, this vintage square piece features distinct exposed bezel screws, an integrated bracelet, and classic Roman numerals.",
    movement: "Hand-Wound Mechanical"
  },

  {
    id: 10,
    title: "Universal Genève Polerouter",
    brand: "Universal Genève",
    category: "vintage",
    price: 4500,
    img: "Universal Genève Polerouter.PNG",
    desc: "Designed by a young Gérald Genta in the 1950s, this vintage piece was built for SAS pilots flying polar routes, featuring a distinctive twisted-lug case and a micro-rotor movement.",
    movement: "Hand-Wound Mechanical"
  },

  {
    id: 11,
    title: "Rado DiaStar The Original (1970)",
    brand: "Rado",
    category: "vintage",
    price: 500,
    img: "Rado DiaStar The Original (1970).PNG",
    desc: "Widely celebrated as the world's first scratch-proof watch, built with a heavy tungsten-carbide bezel and a polished oval case design that catches the light uniquely.",
    movement: "Hand-Wound Mechanical"
  },

  {
    id: 12,
    title: "Seiko 6138-0049 Bullhead Chronograph",
    brand: "Seiko",
    category: "vintage",
    price: 1000,
    img: "Seiko 6138-0049 Bullhead Chronograph.PNG",
    desc: "A funky 1970s sports chronograph featuring pushers positioned at the top of the case (resembling bull horns), a dual-register layout, and a vibrant brown gradient dial.",
    movement: "Hand-Wound Mechanical"
  },

  {
    id: 13,
    title: "Longines Conquest Calendar",
    brand: "Longines",
    category: "vintage",
    price: 1400,
    img: "Longines Conquest Calendar.PNG",
    desc: "A refined mid-century dress-sports watch with a day-date calendar complication, a clean silvered dial and a slim steel case that balances everyday wearability with vintage charm.",
    movement: "Hand-Wound Mechanical"
  },

  {
    id: 14,
    title: "Omega Seamaster 300",
    brand: "Omega",
    category: "vintage",
    price: 6000,
    img: "Omega Seamaster 300.PNG",
    desc: "A rugged vintage military and professional dive watch from the mid-1960s, featuring sword hands, a bakelite-style bezel insert, and a reliable automatic movement.",
    movement: "Hand-Wound Mechanical"
  },

  {
    id: 15,
    title: "Rolex GMT-Master",
    brand: "Rolex",
    category: "vintage",
    price: 15600,
    img: "Rolex GMT-Master.PNG",
    desc: "Produced from the late 1950s through the 1980s, this classic traveler's watch features the iconic bidirectional Pepsi bezel and a practical independent GMT hand.",
    movement: "Hand-Wound Mechanical"
  },

  {
    id: 16,
    title: "TAG Heuer Monaco (1969)",
    brand: "Tag Heuer",
    category: "vintage",
    price: 20000,
    img: "Tag Heuer Monaco(1969).PNG",
    desc: "Introduced in 1969, this square-cased chronograph became a legend due to its association with Steve McQueen and its daring blue metallic dial paired with red hands.",
    movement: "Hand-Wound Mechanical"
  },

  {
    id: 17,
    title: "Patek Philippe Calatrava",
    brand: "Patek Philippe",
    category: "vintage",
    price: 14000,
    img: "Patek Philippe Calatrava.PNG",
    desc: "A timeless dress watch representing pure minimalist elegance, featuring a clean manual-wind movement, a delicate small-seconds subdial at 6 o'clock, and a classic round gold case.",
    movement: "Hand-Wound Mechanical"
  },

  {
    id: 18,
    title: "Cartier Tank Louis Cartier(1970)",
    brand: "Cartier",
    category: "vintage",
    price: 7280,
    img: "Cartier Tank Louis Cartier(1970).PNG",
    desc: "An epitome of classic art deco elegance, featuring a rectangular 18k yellow gold case, distinctive Roman numerals, blued-steel hands, and a sapphire cabochon crown.",
    movement: "Hand-Wound Mechanical"
  },

  {
    id: 19,
    title: "Omega Speedmaster Professional",
    brand: "Omega",
    category: "vintage",
    price: 5500,
    img: "Omega Speedmaster Professional.PNG",
    desc: "Known famously as the Moonwatch, this 1970s classic houses the legendary manual-wind Calibre 861 and features a step dial with Hesalite crystal.",
    movement: "Hand-Wound Mechanical"
  },

   {
    id: 20,
    title: "Rolex Submariner",
    brand: "Rolex",
    category: "vintage",
    price: 12000,
    img: "Rolex Submariner.PNG",
    desc: "Produced for decades starting in the 1960s, this quintessential tool watch features a clean matte black dial, iconic Mercedes hands, and a robust stainless steel case built for deep-sea diving.",
    movement: "Hand-Wound Mechanical"
  },


 
   {
    id: 21,
    title: "Patek Philippe Grand Complications",
    brand: "Patek Philippe",
    category: "luxury",
    price: 248000,
    img: "Patek Philippe Grand Complications.PNG",
    desc: "Crafted in 950 Platinum measuring 41 mm in diameter and 12.4 mm in thickness, featuring a subtle diamond set discreetly into the case flank between the lugs at 6 o'clock.",
    movement: "Hand-Wound Mechanical"
  },

   {
    id: 22,
    title: "Chopard Alpine Eagle Large",
    brand: "Chopard",
    category: "luxury",
    price: 15300,
    img: "Chopard Alpine Eagle Large.PNG",
    desc: "A contemporary sports-chic timepiece crafted from proprietary high-resistance Lucent Steel. Features a galvanic textured dial reminiscent of an eagle's iris paired with an integrated tapering bracelet.",
    movement: "Hand-Wound Mechanical"
  },

   {
    id: 23,
    title: "Blancpain Fifty Fathoms Automatique",
    brand: "Blancpain",
    category: "luxury",
    price: 16500,
    img: "Blancpain Fifty Fathoms Automatique.PNG",
    desc: "Widely regarded as the archetype of the modern mechanical diving watch, featuring a convex sapphire-insert bezel and high-performance automatic movement. Encased in satin-finished titanium with superior water resistance and a robust power reserve.",
    movement: "Hand-Wound Mechanical"
  },

   {
    id: 24,
    title: "TAG Heuer Monaco Calibre 11",
    brand: "TAG Heuer",
    category: "luxury",
    price: 7350,
    img: "TAG Heuer Monaco Calibre 11.PNG",
    desc: "A daring square-cased avant-garde chronograph made famous by Steve McQueen, boasting a distinct matte blue dial and horizontal white index markers. Powered by an automatic chronograph movement housed in a striking geometry.",
    movement: "Hand-Wound Mechanical"
  },

   {
    id: 25,
    title: "Hublot Classic Fusion Titanium",
    brand: "Hublot",
    category: "luxury",
    price: 8400,
    img: "Hublot Classic Fusion Titanium.PNG",
    desc: "A striking fusion of modern industrial design and Swiss horology, featuring a lightweight satin-finished titanium case secured by signature H-shaped titanium bezel screws. Paired with a sleek sunburst dial and an integrated black rubber strap.",
    movement: "Hand-Wound Mechanical"
  },

   {
    id: 26,
    title: "TAG Heuer Monaco Chronograph",
    brand: "TAG Heuer",
    category: "luxury",
    price: 8250,
    img: "TAG Heuer Monaco Chronograph.PNG",
    desc: "An avant-garde square-cased racing chronograph immortalized by Steve McQueen, boasting a striking blue dial with contrasting white sub-counters. Features a sophisticated automatic chronograph movement housed in a water-resistant geometric steel case.",
    movement: "Hand-Wound Mechanical"
  },

   {
    id: 27,
    title: "IWC Portugieser Automatic",
    brand: "IWC",
    category: "luxury",
    price: 13100,
    img: "IWC Portugieser Automatic.PNG",
    desc: "A timeless masterpiece of clean engineering featuring a balanced silver-plated dial, slender feuille hands, and classic Arabic numerals. Houses a high-efficiency Pellaton automatic winding system visible through an exhibition sapphire case back.",
    movement: "Hand-Wound Mechanical"
  },

   {
    id: 28,
    title: "Breitling Navitimer B01 Chronograph",
    brand: "Breitling",
    category: "luxury",
    price: 9100,
    img: "Breitling Navitimer B01 Chronograph.PNG",
    desc: "A legendary aviation chronograph equipped with an integrated circular slide rule bezel for performing crucial flight navigation calculations. Powered by the high-performance in-house Breitling Manufacture Calibre 01 with a robust 70-hour power reserve.",
    movement: "Hand-Wound Mechanical"
  },

   {
    id: 29,
    title: "Rolex Submariner Date",
    brand: "Rolex",
    category: "luxury",
    price: 10250,
    img: "Rolex Submariner Date.PNG",
    desc: "The ultimate benchmark of luxury diving watches, featuring a robust Oystersteel case, a black Cerachrom ceramic bezel, and high-legibility Chromalight display. Water-resistant to 300 meters and driven by an advanced self-winding mechanical caliber.",
    movement: "Hand-Wound Mechanical"
  },

   {
    id: 30,
    title: "A. Lange & Sohne Lange",
    brand: "A. Lange",
    category: "luxury",
    price: 48900,
    img: "A. Lange & Sohne Lange.PNG",
    desc: "An iconic luxury dress watch distinguished by its unique offset dial layout and signature outsize date mechanism. Crafted with a polished rose gold case and matching bracelet, it epitomizes master German watchmaking elegance.",
    movement: "Hand-Wound Mechanical"
  },

   {
    id: 31,
    title: "Audemars Piguet Royal OAK",
    brand: "Audemars Piguet",
    category: "luxury",
    price: 25500,
    img: "Audemars Piguet Royal OAK.PNG",
    desc: "Celebrated as the original luxury sports watch, this timepiece showcases a signature silver octagonal bezel paired with a textured light grey dial. It is presented on a sophisticated leather strap, blending rugged utility with refined style",
    movement: "Hand-Wound Mechanical"
  },

   {
    id: 32,
    title: "Cartier Santos De Cartier",
    brand: "Cartier",
    category: "luxury",
    price: 7450,
    img: "Cartier Santos de Cartier.PNG",
    desc: "A bold take on a classic silhouette, featuring a striking black square case accented with signature gold screws. It highlights an intricate skeleton dial that reveals the delicate mechanical movement within.",
    movement: "Hand-Wound Mechanical"
  },

   {
    id: 33,
    title: "Omega SpeedMaster Moonwalk",
    brand: "Omega",
    category: "luxury",
    price: 6400,
    img: "Omega SpeedMaster Moonwalk.PNG",
    desc: "A legendary chronograph famously recognized as the first watch worn on the moon during historic lunar missions. It features a robust stainless steel case, matching bracelet, and a functional tachymeter bezel.",
    movement: "Hand-Wound Mechanical"
  },

   {
    id: 34,
    title: "Panerai Luminor Marina",
    brand: "Panerai",
    category: "luxury",
    price: 8100,
    img: "Panerai Luminor Marina.PNG",
    desc: "A robust and iconic sports-dress timepiece equipped with the brand's unmistakable crown-protecting bridge. It features a high-readability sandwich dial paired with an automatic mechanical movement.",
    movement: "Hand-Wound Mechanical"
  },

   {
    id: 35,
    title: "Patek Philippe Nautilus",
    brand: "Patek Philippe",
    category: "luxury",
    price: 125000,
    img: "Patek Philippe  Nautilus.PNG",
    desc: "An ultimate icon of steel luxury sports watches, defined by its rounded octagonal bezel and signature horizontal embossed dial. It features an exhibition sapphire case back showcasing exceptional haute horlogerie craftsmanship",
    movement: "Automatic Mechanical"
  },

   {
    id: 36,
    title: "Vacheron Constantin Overseas",
    brand: "Vacheron Constantin",
    category: "luxury",
    price: 23500,
    img: "Vacheron Constatin overseas.PNG",
    desc: "An exquisite high-horology sports timepiece characterized by its distinctive Maltese cross bezel and robust stainless steel construction. It offers high versatility through an innovative interchangeable strap system.",
    movement: "Hand-Wound Mechanical"
  },
];

/**
 * ============================================================================
 * SHOPPING CART, CHECKOUT & THEME CONTROLLER
 * ============================================================================
 */
const TAX_RATE = 0.08;
const SHIPPING_OPTIONS = {
  standard: { label: 'Insured Standard', cost: 25, freeOver: 1000, eta: '3–5 business days' },
  express:  { label: 'Insured Express',  cost: 60, eta: 'Next business day' },
  pickup:   { label: 'Boutique Pickup',  cost: 0,  eta: 'Ready within 24 hours' }
};
const PAYMENT_LABELS = { card: 'Credit / Debit Card', bank: 'Bank Transfer', boutique: 'Pay at Boutique' };

let shoppingCartState = [];
let checkoutStep = 'bag';          // 'bag' | 'checkout' | 'done'
let selectedShipping = 'standard';
let selectedPayment = 'card';
let lastOrder = null;

/* ---------- helpers ---------- */
const $id = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const money = n => '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const findWatch = id => watchInventoryDatabase.find(w => w.id === id);

function storageGet(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
function storageSet(key, val) { try { localStorage.setItem(key, val); } catch (e) { /* storage unavailable */ } }

/* ---------- cart state ---------- */
function loadCartFromStorage() {
  const saved = storageGet('alberto_cart');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      shoppingCartState = (Array.isArray(parsed) ? parsed : [])
        .filter(i => i && findWatch(i.id))
        .map(i => ({ id: i.id, quantity: Math.max(1, parseInt(i.quantity, 10) || 1) }));
    } catch (e) { shoppingCartState = []; }
  }
  updateCartUI();
}

function saveCartToStorage() {
  storageSet('alberto_cart', JSON.stringify(shoppingCartState));
  updateCartUI();
}

function addItemToCart(productId) {
  if (!findWatch(productId)) return;
  const existing = shoppingCartState.find(i => i.id === productId);
  if (existing) existing.quantity += 1;
  else shoppingCartState.push({ id: productId, quantity: 1 });
  if (checkoutStep !== 'bag') setCheckoutStep('bag');
  saveCartToStorage();
  openCartDrawer();
}

function updateItemQuantity(productId, delta) {
  const idx = shoppingCartState.findIndex(i => i.id === productId);
  if (idx === -1) return;
  shoppingCartState[idx].quantity += delta;
  if (shoppingCartState[idx].quantity <= 0) shoppingCartState.splice(idx, 1);
  saveCartToStorage();
}

function removeItemFromCart(productId) {
  shoppingCartState = shoppingCartState.filter(i => i.id !== productId);
  saveCartToStorage();
}

function cartLines() {
  return shoppingCartState.map(i => ({ ...findWatch(i.id), quantity: i.quantity }));
}

function getTotals() {
  const lines = cartLines();
  const subtotal = lines.reduce((s, l) => s + l.price * l.quantity, 0);
  const tax = subtotal * TAX_RATE;
  const opt = SHIPPING_OPTIONS[selectedShipping];
  let shipping = lines.length ? opt.cost : 0;
  if (opt.freeOver && subtotal >= opt.freeOver) shipping = 0;
  return { subtotal, tax, shipping, total: subtotal + tax + shipping };
}

/* ---------- rendering ---------- */
function updateDrawerTitle() {
  const count = shoppingCartState.reduce((s, i) => s + i.quantity, 0);
  const titles = {
    bag: `YOUR SHOPPING BAG (${count})`,
    checkout: 'SECURE CHECKOUT',
    done: 'ORDER CONFIRMED'
  };
  $id('cartDrawerTitle').textContent = titles[checkoutStep];
}

function updateCartUI() {
  const lines = cartLines();
  const count = lines.reduce((s, l) => s + l.quantity, 0);
  const badge = $id('cartBadgeCount');
  if (badge) badge.textContent = count;
  updateDrawerTitle();

  const box = $id('cartItemsContainer');
  if (!box) return;
  const btn = $id('proceedCheckoutBtn');

  if (!lines.length) {
    box.innerHTML = '<div class="cart-empty-msg"><i class="fa-solid fa-bag-shopping"></i>Your shopping bag is currently empty.</div>';
    if (btn) btn.disabled = true;
  } else {
    if (btn) btn.disabled = false;
    box.innerHTML = lines.map(l => `
      <div class="cart-item-row">
        <img src="${esc(l.img)}" alt="${esc(l.title)}" class="cart-item-img">
        <div class="cart-item-info">
          <h4>${esc(l.title)}</h4>
          <div class="cart-item-price">${money(l.price)} USD</div>
          <div class="cart-qty-controls">
            <button class="qty-btn" onclick="updateItemQuantity(${l.id}, -1)" aria-label="Decrease quantity">&minus;</button>
            <span>${l.quantity}</span>
            <button class="qty-btn" onclick="updateItemQuantity(${l.id}, 1)" aria-label="Increase quantity">+</button>
            <button class="cart-remove-btn" onclick="removeItemFromCart(${l.id})" aria-label="Remove ${esc(l.title)}"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
      </div>`).join('');
  }

  const t = getTotals();
  $id('cartSubtotalText').textContent = money(t.subtotal);
  $id('cartTaxText').textContent = money(t.tax);
  $id('cartTotalText').textContent = money(t.subtotal + t.tax);

  if (checkoutStep === 'checkout') {
    if (!lines.length) { setCheckoutStep('bag'); return; }
    renderCheckoutSummary();
  }
}

function renderCheckoutSummary() {
  const lines = cartLines();
  $id('checkoutItems').innerHTML = lines.map(l => `
    <div class="co-summary-item">
      <img src="${esc(l.img)}" alt="">
      <div class="t">${esc(l.title)}<small>Qty ${l.quantity} · ${money(l.price)}</small></div>
      <div class="p">${money(l.price * l.quantity)}</div>
    </div>`).join('');

  const t = getTotals();
  const opt = SHIPPING_OPTIONS[selectedShipping];
  $id('coSubtotal').textContent = money(t.subtotal);
  $id('coTax').textContent = money(t.tax);
  $id('coShipLabel').textContent = 'Shipping · ' + opt.label;
  $id('coShipping').innerHTML = t.shipping === 0 ? '<span class="free">Free</span>' : money(t.shipping);
  $id('coTotal').textContent = money(t.total);

  // per-option prices (standard becomes free over the threshold)
  Object.keys(SHIPPING_OPTIONS).forEach(key => {
    const el = document.querySelector(`[data-ship-price="${key}"]`);
    if (!el) return;
    const o = SHIPPING_OPTIONS[key];
    const free = o.cost === 0 || (o.freeOver && t.subtotal >= o.freeOver);
    el.textContent = free ? 'Free' : money(o.cost);
  });
}

/* ---------- drawer navigation ---------- */
function setCheckoutStep(step) {
  checkoutStep = step;
  const panel = $id('cartDrawerPanel');
  if (panel) panel.dataset.step = step;
  const order = ['bag', 'checkout', 'done'];
  document.querySelectorAll('#checkoutSteps li').forEach(li => {
    const i = order.indexOf(li.dataset.step), cur = order.indexOf(step);
    li.classList.toggle('active', i === cur);
    li.classList.toggle('done', i < cur);
  });
  updateDrawerTitle();
  if (step === 'checkout') { applyShippingPaymentState(); renderCheckoutSummary(); }
}

function goToCheckout() {
  if (!shoppingCartState.length) return;
  setCheckoutStep('checkout');
  const sc = document.querySelector('.checkout-scroll');
  if (sc) sc.scrollTop = 0;
}
function processCheckout() { goToCheckout(); }   // kept for backwards compatibility
function backToBag() { setCheckoutStep('bag'); }

function openCartDrawer() {
  $id('cartDrawerOverlay').classList.add('active');
  document.body.classList.add('no-scroll');
}
function closeCartDrawer() {
  $id('cartDrawerOverlay').classList.remove('active');
  document.body.classList.remove('no-scroll');
  if (checkoutStep === 'done') setCheckoutStep('bag');
}
function toggleCartDrawer() {
  if ($id('cartDrawerOverlay').classList.contains('active')) closeCartDrawer();
  else openCartDrawer();
}
function closeCartDrawerOnOverlay(event) {
  if (event.target.id === 'cartDrawerOverlay') closeCartDrawer();
}

/* ---------- checkout form logic ---------- */
function applyShippingPaymentState() {
  selectedShipping = (document.querySelector('input[name="shipping"]:checked') || {}).value || 'standard';
  const pickup = selectedShipping === 'pickup';

  // address block is not needed for boutique pickup
  $id('shippingAddressGroup').style.display = pickup ? 'none' : '';

  // "Pay at Boutique" only works with pickup
  const boutiqueInput = document.querySelector('input[name="payment"][value="boutique"]');
  const boutiqueCard = $id('payBoutiqueCard');
  boutiqueInput.disabled = !pickup;
  boutiqueCard.classList.toggle('disabled', !pickup);
  if (!pickup && boutiqueInput.checked) document.querySelector('input[name="payment"][value="card"]').checked = true;

  selectedPayment = (document.querySelector('input[name="payment"]:checked') || {}).value || 'card';
  $id('payPanelCard').hidden = selectedPayment !== 'card';
  $id('payPanelBank').hidden = selectedPayment !== 'bank';
  $id('payPanelBoutique').hidden = selectedPayment !== 'boutique';
  renderCheckoutSummary();
}

function luhnValid(num) {
  let sum = 0, alt = false;
  for (let i = num.length - 1; i >= 0; i--) {
    let n = parseInt(num[i], 10);
    if (alt) { n *= 2; if (n > 9) n -= 9; }
    sum += n; alt = !alt;
  }
  return num.length >= 13 && sum % 10 === 0;
}

/* ---------- NAME FIELDS: alphabets (and spaces) only ---------- */
const NAME_ONLY = /^\p{L}+(?:\s\p{L}+)*$/u;          // letters separated by single spaces
const cleanName = v => v.replace(/[^\p{L}\s]/gu, '').replace(/\s{2,}/g, ' ').replace(/^\s+/, '');
function nameError(v, what) {
  const t = v.trim();
  if (!t) return `Please enter your ${what}.`;
  if (!NAME_ONLY.test(t)) return 'Use alphabets only (no numbers or symbols).';
  if (t.replace(/\s/g, '').length < 2) return 'Enter at least 2 letters.';
  return true;
}
function initNameFields() {
  const selectors = ['#coName', '#coCardName', '#repair-name', '#exploded-form input[name="name"]'];
  selectors.forEach(sel => {
    const el = document.querySelector(sel);
    if (!el) return;
    el.setAttribute('autocapitalize', 'words');
    el.setAttribute('spellcheck', 'false');
    const check = () => {
      const r = nameError(el.value, 'name');
      el.setCustomValidity(r === true ? '' : r);       // native forms (repair + reservation) show this message
    };
    el.addEventListener('input', () => {
      const cleaned = cleanName(el.value);
      if (cleaned !== el.value) el.value = cleaned;    // typing or pasting digits/symbols is removed instantly
      check();
    });
    el.addEventListener('blur', () => { el.value = el.value.trim(); check(); });
    check();
  });
}

const FIELD_RULES = {
  coName:       v => nameError(v, 'full name'),
  coEmail:      v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Enter a valid email address.',
  coPhone:      v => v.replace(/\D/g, '').length >= 7 || 'Enter a valid phone number.',
  coCountry:    v => !!v || 'Select a country.',
  coAddress:    v => v.trim().length >= 5 || 'Enter your street address.',
  coCity:       v => v.trim().length >= 2 || 'Enter your city.',
  coState:      v => v.trim().length >= 2 || 'Enter your state or province.',
  coZip:        v => v.trim().length >= 3 || 'Enter your postal code.',
  coCardName:   v => nameError(v, 'name on the card'),
  coCardNumber: v => luhnValid(v.replace(/\D/g, '')) || 'Enter a valid card number.',
  coExpiry: v => {
    const m = v.match(/^(\d{2})\/(\d{2})$/);
    if (!m) return 'Use the format MM/YY.';
    const month = +m[1], year = 2000 + +m[2];
    if (month < 1 || month > 12) return 'Invalid month.';
    const now = new Date();
    if (year < now.getFullYear() || (year === now.getFullYear() && month < now.getMonth() + 1)) return 'This card has expired.';
    return true;
  },
  coCvv: v => /^\d{3,4}$/.test(v) || 'Enter the 3 or 4 digit code.'
};

function activeFieldIds() {
  const ids = ['coName', 'coEmail', 'coPhone'];
  if (selectedShipping !== 'pickup') ids.push('coCountry', 'coAddress', 'coCity', 'coState', 'coZip');
  if (selectedPayment === 'card') ids.push('coCardName', 'coCardNumber', 'coExpiry', 'coCvv');
  return ids;
}

function setFieldError(input, message) {
  const wrap = input.closest('.co-field');
  if (!wrap) return;
  wrap.classList.toggle('invalid', !!message);
  const small = wrap.querySelector('.co-error');
  if (small) small.textContent = message || '';
}

function validateField(id) {
  const input = $id(id);
  const result = FIELD_RULES[id](input.value);
  setFieldError(input, result === true ? '' : result);
  return result === true;
}

function validateCheckout() {
  let firstBad = null;
  activeFieldIds().forEach(id => { if (!validateField(id) && !firstBad) firstBad = $id(id); });
  const terms = $id('coTerms');
  const termsOk = terms.checked;
  $id('coTermsWrap').classList.toggle('invalid', !termsOk);
  if (!termsOk && !firstBad) firstBad = terms;
  if (firstBad) { firstBad.scrollIntoView({ block: 'center', behavior: 'smooth' }); firstBad.focus({ preventScroll: true }); }
  return !firstBad;
}

function initCheckoutForm() {
  const form = $id('checkoutForm');
  if (!form) return;

  form.addEventListener('change', e => {
    if (e.target.name === 'shipping' || e.target.name === 'payment') applyShippingPaymentState();
  });

  // live formatting
  $id('coCardNumber').addEventListener('input', e => {
    const d = e.target.value.replace(/\D/g, '').slice(0, 19);
    e.target.value = d.replace(/(.{4})/g, '$1 ').trim();
  });
  $id('coExpiry').addEventListener('input', e => {
    let d = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (d.length >= 3) d = d.slice(0, 2) + '/' + d.slice(2);
    e.target.value = d;
  });
  $id('coCvv').addEventListener('input', e => { e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4); });
  $id('coPhone').addEventListener('input', e => { e.target.value = e.target.value.replace(/[^\d+()\-\s]/g, ''); });

  // validate on blur, clear on input
  Object.keys(FIELD_RULES).forEach(id => {
    const el = $id(id);
    if (!el) return;
    el.addEventListener('blur', () => { if (el.value !== '') validateField(id); });
    el.addEventListener('input', () => { if (el.closest('.co-field').classList.contains('invalid')) validateField(id); });
  });
  $id('coTerms').addEventListener('change', e => $id('coTermsWrap').classList.toggle('invalid', !e.target.checked));

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!shoppingCartState.length) { setCheckoutStep('bag'); return; }
    applyShippingPaymentState();
    if (!validateCheckout()) return;
    placeOrder();
  });
}

function placeOrder() {
  const btn = $id('placeOrderBtn');
  btn.disabled = true;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> PROCESSING…';

  const lines = cartLines();
  const totals = getTotals();
  const pickup = selectedShipping === 'pickup';
  const cardDigits = $id('coCardNumber').value.replace(/\D/g, '');

  const order = {
    id: 'AWC-' + Date.now().toString(36).toUpperCase().slice(-5) + Math.random().toString(36).slice(2, 5).toUpperCase(),
    placedAt: new Date().toISOString(),
    customer: { name: $id('coName').value.trim(), email: $id('coEmail').value.trim(), phone: $id('coPhone').value.trim() },
    shipping: {
      method: SHIPPING_OPTIONS[selectedShipping].label,
      eta: SHIPPING_OPTIONS[selectedShipping].eta,
      address: pickup ? 'Boutique pickup — 740 Fifth Avenue, Suite 1200, New York, NY 10019'
        : [$id('coAddress').value.trim(), $id('coAddress2').value.trim(), $id('coCity').value.trim(), $id('coState').value.trim(), $id('coZip').value.trim(), $id('coCountry').value].filter(Boolean).join(', ')
    },
    payment: { method: PAYMENT_LABELS[selectedPayment], last4: selectedPayment === 'card' ? cardDigits.slice(-4) : null },   // full card data is never stored
    notes: $id('coNotes').value.trim(),
    items: lines.map(l => ({ id: l.id, title: l.title, price: l.price, quantity: l.quantity })),
    totals
  };

  setTimeout(() => {
    // keep a local order history (no card data)
    let orders = [];
    try { orders = JSON.parse(storageGet('alberto_orders') || '[]'); } catch (e) { orders = []; }
    orders.unshift(order);
    storageSet('alberto_orders', JSON.stringify(orders.slice(0, 20)));

    lastOrder = order;
    shoppingCartState = [];
    saveCartToStorage();
    $id('checkoutForm').reset();
    document.querySelectorAll('.co-field.invalid').forEach(f => f.classList.remove('invalid'));
    $id('coTermsWrap').classList.remove('invalid');
    selectedShipping = 'standard'; selectedPayment = 'card';
    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-lock"></i> PLACE ORDER';
    renderConfirmation(order);
    setCheckoutStep('done');
  }, 1100);
}

function renderConfirmation(o) {
  const payNote = o.payment.method === 'Bank Transfer'
    ? 'Bank transfer details will be emailed to you shortly. Your watch is reserved for 48 hours.'
    : o.payment.method === 'Pay at Boutique'
      ? 'Please bring a photo ID and your order number when you collect.'
      : 'Your card payment was accepted.';
  $id('cartViewDone').innerHTML = `
    <div class="done-check"><i class="fa-solid fa-check"></i></div>
    <h4>Thank you, ${esc(o.customer.name.split(' ')[0])}!</h4>
    <p>Your order has been received. A confirmation was sent to <strong>${esc(o.customer.email)}</strong>.</p>
    <div class="order-code">${esc(o.id)}</div>
    <div class="done-summary">
      ${o.items.map(i => `<div class="cart-summary-row"><span>${esc(i.title)} × ${i.quantity}</span><span>${money(i.price * i.quantity)}</span></div>`).join('')}
      <div class="cart-summary-row"><span>Tax</span><span>${money(o.totals.tax)}</span></div>
      <div class="cart-summary-row"><span>${esc(o.shipping.method)}</span><span>${o.totals.shipping ? money(o.totals.shipping) : 'Free'}</span></div>
      <div class="cart-summary-row total-row"><span>Total</span><span>${money(o.totals.total)}</span></div>
    </div>
    <p><strong>${esc(o.shipping.method)}</strong> · ${esc(o.shipping.eta)}<br>${esc(o.shipping.address)}</p>
    <p>${esc(payNote)}</p>
    <button class="btn-primary" onclick="closeCartDrawer(); location.hash='product-catalog-section'">CONTINUE SHOPPING</button>
    <button class="btn-secondary" onclick="window.print()">PRINT RECEIPT</button>`;
}

/* ---------- THEME ---------- */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = $id('themeIcon');
  const btn = $id('themeToggleButton');
  if (icon) icon.className = theme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  if (btn) btn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
}
function toggleWebsiteTheme() {
  const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  storageSet('alberto_theme', next);
  applyTheme(next);
}

/* ---------- MOBILE MENU ---------- */
function toggleMobileMenu(force) {
  const menu = $id('navMenuLinks'), btn = $id('menuToggleBtn');
  const open = typeof force === 'boolean' ? force : !menu.classList.contains('open');
  menu.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', String(open));
  btn.querySelector('i').className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}

/**
 * ============================================================================
 * PRODUCT CATALOG & MODAL
 * ============================================================================
 */
function renderProductCatalog(items) {
  const grid = $id('productGridContainer');
  if (!grid) return;
  grid.innerHTML = items.map(w => `
    <div class="product-card-item">
      <div class="product-image-wrapper">
        <span class="product-brand-badge">${esc(w.brand)}</span>
        <img src="${esc(w.img)}" alt="${esc(w.title)}" loading="lazy" decoding="async">
      </div>
      <div class="product-card-body">
        <h3>${esc(w.title)}</h3>
        <div class="product-movement-spec">${esc(w.movement)}</div>
        <div class="product-card-footer">
          <span class="product-price-amount">$${w.price.toLocaleString('en-US')}</span>
          <div class="card-actions-group">
            <button class="details-action-btn" onclick="openProductModal(${w.id})">Details</button>
            <button class="add-cart-icon-btn" onclick="addItemToCart(${w.id})" title="Add to Bag" aria-label="Add ${esc(w.title)} to bag"><i class="fa-solid fa-plus"></i></button>
          </div>
        </div>
      </div>
    </div>`).join('');
}

function filterProductLineup(categoryKey, event) {
  document.querySelectorAll('.category-filter-tabs .custom-tab-button').forEach(b => b.classList.remove('active'));
  if (event && event.currentTarget) event.currentTarget.classList.add('active');
  renderProductCatalog(categoryKey === 'all' ? watchInventoryDatabase : watchInventoryDatabase.filter(w => w.category === categoryKey));
}

function openProductModal(watchId) {
  const w = findWatch(watchId);
  if (!w) return;
  const img = $id('modalWatchImg');
  img.src = w.img; img.alt = w.title;
  $id('modalBrandTag').textContent = w.brand;
  $id('modalWatchTitle').textContent = w.title;
  $id('modalWatchPrice').textContent = '$' + w.price.toLocaleString('en-US');
  $id('modalWatchDesc').textContent = w.desc;
  $id('modalLineupText').textContent = w.category.toUpperCase();
  $id('modalMovementText').textContent = w.movement;
  $id('modalAddToCartBtn').onclick = () => { addItemToCart(w.id); closeProductModal(); };
  $id('productDetailsModal').classList.add('active');
  document.body.classList.add('no-scroll');
}
function closeProductModal() {
  $id('productDetailsModal').classList.remove('active');
  if (!$id('cartDrawerOverlay').classList.contains('active')) document.body.classList.remove('no-scroll');
}

/* ---------- global keys + scroll spy + init ---------- */
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if ($id('productDetailsModal').classList.contains('active')) closeProductModal();
  else if ($id('cartDrawerOverlay').classList.contains('active')) closeCartDrawer();
  toggleMobileMenu(false);
});

function initScrollSpy() {
  const links = [...document.querySelectorAll('.nav-menu-links .nav-link')];
  const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
  const targets = [...map.keys()].map(id => $id(id)).filter(Boolean);
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      links.forEach(l => l.classList.remove('active'));
      const a = map.get(en.target.id);
      if (a) a.classList.add('active');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  targets.forEach(t => io.observe(t));
  document.querySelectorAll('.nav-menu-links a').forEach(a => a.addEventListener('click', () => toggleMobileMenu(false)));
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
  renderProductCatalog(watchInventoryDatabase);
  initCheckoutForm();
  initNameFields();
  loadCartFromStorage();
  initScrollSpy();
});


/* ===================== HERO ===================== */
//hero//
(function () {
  var cv = document.getElementById('c');
  var hero = document.getElementById('hero');
  if (!cv || !hero) return;
  var ctx = cv.getContext('2d');
  var W, H, D;
  var t0 = performance.now();
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* floating gold dust */
  var dust = [];
  for (var i = 0; i < 46; i++) {
    dust.push({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.6 + 0.4,
      s: Math.random() * 0.02 + 0.005,
      p: Math.random() * 6.28
    });
  }

  function size() {
    D = Math.min(devicePixelRatio || 1, 2);
    W = cv.clientWidth;
    H = cv.clientHeight;
    cv.width = W * D;
    cv.height = H * D;
    ctx.setTransform(D, 0, 0, D, 0, 0);
  }
  addEventListener('resize', size);
  size();

  function ease(x) {
    x = Math.max(0, Math.min(1, x));
    return 1 - Math.pow(1 - x, 3);
  }

  function ring(cx, cy, r1, r2, stops) {
    var g = ctx.createLinearGradient(cx - r2, cy - r2, cx + r2, cy + r2);
    stops.forEach(function (s, i) { g.addColorStop(i / (stops.length - 1), s); });
    ctx.beginPath();
    ctx.arc(cx, cy, r2, 0, 6.2832);
    ctx.arc(cx, cy, r1, 0, 6.2832, true);
    ctx.fillStyle = g;
    ctx.fill();
  }

  function hand(cx, cy, ang, len, wid, col, tail) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(ang);
    ctx.shadowColor = 'rgba(0,0,0,.6)';
    ctx.shadowBlur = wid * 2;
    ctx.shadowOffsetY = wid;
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.moveTo(-wid / 2, tail);
    ctx.lineTo(-wid / 2, -len * 0.9);
    ctx.lineTo(0, -len);
    ctx.lineTo(wid / 2, -len * 0.9);
    ctx.lineTo(wid / 2, tail);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function frame(now) {
    var t = (now - t0) / 1000;

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#050506';
    ctx.fillRect(0, 0, W, H);

    var fade = ease(t / 3.2);                    // fade in from black
    var zoom = 1.35 - 0.35 * ease(t / 12);       // slow camera pull-back (change 12 to adjust speed)
    var R = Math.min(W, H) * 0.52 * zoom;
    var cx = W / 2 + Math.sin(t * 0.15) * 6;
    var cy = H / 2 + Math.cos(t * 0.12) * 4;

    ctx.globalAlpha = fade * 0.9;

    /* warm backlight */
    var bg = ctx.createRadialGradient(cx, cy, R * 0.2, cx, cy, R * 1.6);
    bg.addColorStop(0, 'rgba(184,150,74,.22)');
    bg.addColorStop(1, 'rgba(5,5,6,0)');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    /* case + bezel */
    ring(cx, cy, R * 0.93, R, ['#f4ecd6', '#b8964a', '#3a2d12', '#e8d08a', '#6b5424']);
    ring(cx, cy, R * 0.88, R * 0.93, ['#1a1507', '#7d6428', '#0a0803']);

    /* dial */
    var dg = ctx.createRadialGradient(cx - R * 0.2, cy - R * 0.25, R * 0.1, cx, cy, R * 0.88);
    dg.addColorStop(0, '#1c1b1a');
    dg.addColorStop(1, '#060606');
    ctx.beginPath();
    ctx.arc(cx, cy, R * 0.88, 0, 6.2832);
    ctx.fillStyle = dg;
    ctx.fill();

    /* engine-turned rings */
    ctx.lineWidth = 1;
    for (var k = 1; k < 26; k++) {
      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.86 * k / 26, 0, 6.2832);
      ctx.strokeStyle = 'rgba(232,208,138,' + (0.035 + (k % 2) * 0.03) + ')';
      ctx.stroke();
    }

    /* minute track + hour markers */
    for (var m = 0; m < 60; m++) {
      var a = m / 60 * 6.2832;
      var big = m % 5 === 0;
      var r1 = R * (big ? 0.68 : 0.78);
      var r2 = R * 0.83;
      ctx.beginPath();
      ctx.moveTo(cx + Math.sin(a) * r1, cy - Math.cos(a) * r1);
      ctx.lineTo(cx + Math.sin(a) * r2, cy - Math.cos(a) * r2);
      ctx.lineWidth = big ? Math.max(3, R * 0.016) : 1;
      ctx.strokeStyle = big ? '#e8d08a' : 'rgba(232,208,138,.45)';
      ctx.stroke();
    }

    /* dial text */
    ctx.fillStyle = '#e8d08a';
    ctx.textAlign = 'center';
    ctx.font = '600 ' + Math.round(R * 0.065) + 'px Cinzel, serif';
    ctx.fillText('ALBERTO', cx, cy - R * 0.34);
    ctx.font = '400 ' + Math.round(R * 0.04) + 'px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = 'rgba(232,208,138,.7)';
    ctx.fillText('AUTOMATIC \u2022 SWISS MADE', cx, cy + R * 0.42);

    /* hands: 10:10 with a live sweeping seconds hand */
    var sec = (now / 1000) % 60;
    var min = 10 + sec / 60;
    var hr = 10 + min / 60;
    hand(cx, cy, (hr % 12) / 12 * 6.2832, R * 0.44, R * 0.045, '#e8d08a', R * 0.06);
    hand(cx, cy, min / 60 * 6.2832, R * 0.68, R * 0.032, '#f4ecd6', R * 0.08);
    hand(cx, cy, sec / 60 * 6.2832, R * 0.78, R * 0.01, '#c9a24a', R * 0.2);
    ctx.beginPath();
    ctx.arc(cx, cy, R * 0.03, 0, 6.2832);
    ctx.fillStyle = '#e8d08a';
    ctx.fill();

    /* light glint across the glass every ~7s */
    if (t > 3 && !reduce) {
      var gp = ((t - 3) % 7) / 7;
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.93, 0, 6.2832);
      ctx.clip();
      var gx = cx - R * 1.5 + gp * R * 3;
      var gl = ctx.createLinearGradient(gx - R * 0.25, 0, gx + R * 0.25, 0);
      gl.addColorStop(0, 'rgba(255,240,200,0)');
      gl.addColorStop(0.5, 'rgba(255,240,200,.16)');
      gl.addColorStop(1, 'rgba(255,240,200,0)');
      ctx.globalCompositeOperation = 'lighter';
      ctx.translate(cx, cy);
      ctx.rotate(0.5);
      ctx.translate(-cx, -cy);
      ctx.fillStyle = gl;
      ctx.fillRect(gx - R * 0.25, cy - R * 2, R * 0.5, R * 4);
      ctx.restore();
    }

    /* gold dust */
    ctx.fillStyle = '#e8d08a';
    dust.forEach(function (p) {
      var y = (p.y - t * p.s) % 1;
      if (y < 0) y += 1;
      var x = p.x + Math.sin(t * 0.4 + p.p) * 0.01;
      ctx.globalAlpha = fade * (0.15 + 0.35 * Math.abs(Math.sin(t + p.p)));
      ctx.beginPath();
      ctx.arc(x * W, y * H, p.r, 0, 6.2832);
      ctx.fill();
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(frame);
  }

  /* start / replay the intro */
  function start() {
    hero.classList.remove('go');
    t0 = performance.now();
    void hero.offsetWidth;
    setTimeout(function () { hero.classList.add('go'); }, 400);
  }

  var replay = document.getElementById('replay');
  if (replay) replay.onclick = start;

  start();
  requestAnimationFrame(frame);
})();

/* ================= EXPLODED VIEW ================= */
(function(){
const $=s=>document.querySelector(s),clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)),ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
const poly=a=>s=>'M'+a.map(([x,y])=>(x*s)+' '+((y-490)*s)).join('L')+'Z';
const rect=(a,b,c,d)=>poly([[a,b],[c,b],[c,d],[a,d]]);
const ell=(x,y,rx,ry)=>s=>{const X=x*s,Y=(y-490)*s,A=rx*s,B=ry*s;return`M${X-A} ${Y}A${A} ${B} 0 1 0 ${X+A} ${Y}A${A} ${B} 0 1 0 ${X-A} ${Y}Z`};
const W_=[[285,640],[790,640],[870,780],[865,1000],[850,1090],[330,1090],[290,1000],[270,800]];
const SHELL=[[440,535],[520,515],[590,520],[650,545],[800,575],[930,650],[985,780],[1000,900],[985,1100],[960,1190],[900,1235],[760,1255],[540,1262],[330,1255],[180,1235],[115,1180],[95,1080],[78,930],[90,800],[140,680],[260,590]];
const cL=[280,1345,105,115],cR=[810,1345,105,105],cC=[540,1445,90,85];
// name, desc, shapes, dx%W, dy%H, side, anchor(x,y)
const C=[
['Movement Bed','Skeletonised baseplate that carries the whole engine',[poly(W_)],0,12,'r',[560,1070]],
['W16 Engine Block','16 cylinders in four banks, 578 parts and 51 jewels',[rect(385,850,700,1060)],0,-2,'l',[480,960]],
['Power Reserve','Gauge for the 60-hour manual-wind reserve',[ell(295,880,62,62)],-48,-10,'l',[250,880]],
['Barrel & Gear Train','Mainspring barrel feeding the tourbillon',[ell(790,935,85,85)],48,8,'r',[850,935]],
['Jacob & Co Plate','Signed plate in the engine bay',[rect(475,1013,607,1048)],0,24,'l',[480,1030]],
['Tourbillon Cage','Rose gold cage, blue springs and the B-logo hub',[ell(555,790,250,130)],0,-22,'r',[800,760]],
['Horseshoe Grille','Black radiator front with the Chiron nameplate',[rect(150,1220,900,1545),ell(...cL),ell(...cR),ell(...cC)],0,30,'r',[880,1300]],
['Rubber Strap','Black rubber, 18K rose gold deployant',[rect(240,1500,840,1870)],0,50,'l',[300,1700]],
['Left Crown','Winding and setting crown',[ell(...cL)],-46,24,'l',[200,1350]],
['Centre Crown','Engine start-style crown',[ell(...cC)],0,52,'r',[600,1470]],
['Right Crown','Mode crown with the EB emblem',[ell(...cR)],46,24,'r',[890,1340]],
['Rose Gold Case','Sculpted 18K rose gold shell of the Chiron',[poly(SHELL),poly(W_)],0,-44,'r',[960,900]]
];
const watch=$('#exploded-watch'),labs=$('#exploded-labels'),svg=$('#exploded-lines');
const L=C.map((c,i)=>{const e=document.createElement('div');e.className='exploded-part';watch.appendChild(e);
 const l=document.createElement('div');l.className='exploded-label exploded-'+c[5];l.innerHTML=`<b>${c[0]}</b><span>${c[1]}</span>`;labs.appendChild(l);
 const ln=document.createElementNS('http://www.w3.org/2000/svg','line'),dt=document.createElementNS('http://www.w3.org/2000/svg','circle');dt.setAttribute('r',3);svg.append(ln,dt);
 return{e,l,ln,dt,c,i}});
let Wd,Hd;function clips(){Wd=watch.offsetWidth;Hd=watch.offsetHeight;const s=Wd/1080;L.forEach(o=>o.e.style.clipPath=`path(evenodd,"${o.c[2].map(f=>f(s)).join('')}")`)}
clips();addEventListener('resize',clips);
const exNav=$('#exploded-nav'),sec=$('#exploded-scroll'),brand=$('#exploded-brand'),cap=$('#exploded-caption'),hint=$('#exploded-hint'),bar=$('#exploded-progress');
let cur=0;
function apply(p){const sc=1.42-.66*ease(clamp((p-.1)/.5)),cx=innerWidth/2,cy=innerHeight/2,s=Wd/1080,mob=innerWidth<760,lw=mob?104:190;
 watch.style.transform=`scale(${sc})`;
 const colR=Math.min(cx+Wd*.78*.5+Wd*.45*.78+30,innerWidth-lw-8),colL=Math.max(cx-Wd*.78*.5-Wd*.45*.78-30,lw+8),side={l:[],r:[]};
 L.forEach(o=>{const e=ease(clamp((p-.12-o.i*.035)/.4)),c=o.c;o.e.style.transform=`translate(${c[3]*Wd/100*e}px,${c[4]*Hd/100*e}px)`;
  if(o.i===0)o.e.style.filter=`brightness(${1-.7*e})`;
  const ax=cx+sc*(c[6][0]*s-Wd/2+c[3]*Wd/100*e),ay=cy+sc*((c[6][1]-490)*s-Hd/2+c[4]*Hd/100*e);
  o.ax=ax;o.ay=ay;o.o=clamp((e-.8)/.2);side[c[5]].push(o)});
 for(const k in side){const a=side[k].sort((x,y)=>x.ay-y.ay);let last=-1e9;a.forEach(o=>{o.ly=Math.max(o.ay,last+(mob?34:58),70);last=o.ly;
  const x=k==='r'?colR:colL;o.l.style.opacity=o.o;o.l.style.transform=`translate(${k==='r'?x:x-lw}px,${o.ly-14}px)`;
  o.ln.setAttribute('x1',o.ax);o.ln.setAttribute('y1',o.ay);o.ln.setAttribute('x2',x);o.ln.setAttribute('y2',o.ly);o.ln.style.opacity=o.o;
  o.dt.setAttribute('cx',o.ax);o.dt.setAttribute('cy',o.ay);o.dt.style.opacity=o.o})}
 const b=1-clamp(p/.09);brand.style.opacity=b;brand.style.transform=`translateY(${(1-b)*30}px)`;hint.style.opacity=b;
 cap.style.opacity=clamp((p-.45)/.2);bar.style.width=(p*100)+'%'}
(function loop(){const r=sec.getBoundingClientRect(),t=clamp(-r.top/(sec.offsetHeight-innerHeight));exNav.classList.toggle('exploded-show',r.top<innerHeight*.6&&r.bottom>innerHeight*.4);cur+=(t-cur)*.09;if(Math.abs(t-cur)<.0004)cur=t;apply(cur);requestAnimationFrame(loop)})();

const dm=$('#exploded-details-modal'),bm=$('#exploded-booking-modal');
function openM(m){m.classList.add('exploded-open');document.body.style.overflow='hidden'}
function closeM(m){m.classList.remove('exploded-open');if(!document.querySelector('.exploded-open'))document.body.style.overflow=''}
sec.addEventListener('click',()=>openM(dm));
['#exploded-nav-btn','#exploded-end-btn'].forEach(s=>$(s).addEventListener('click',e=>{e.stopPropagation();openM(dm)}));
$('#exploded-book-btn').onclick=()=>{closeM(dm);setTimeout(()=>openM(bm),250)};
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>closeM(b.closest('.exploded-modal')));
document.querySelectorAll('.exploded-modal').forEach(m=>m.addEventListener('mousedown',e=>{if(e.target===m)closeM(m)}));
addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.exploded-open').forEach(closeM)});
const d=new Date();d.setDate(d.getDate()+1);$('#exploded-date').min=d.toISOString().slice(0,10);
$('#exploded-form').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);
 $('#exploded-code').textContent='JC-'+Math.random().toString(36).slice(2,8).toUpperCase();
 $('#exploded-msg').textContent=`Thank you, ${f.get('name').split(' ')[0]}. Your private viewing of the Bugatti Chiron Tourbillon is reserved for ${f.get('date')} at ${f.get('time')}. A confirmation has been sent to ${f.get('email')}.`;
 $('#exploded-booking-card').classList.add('exploded-done')});
})();
