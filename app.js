// Momomia Restaurant Menu Data
const MENU_DATA = [
  // NOODLES
  {
    id: "n1",
    name: "Veg Noodles",
    category: "noodles",
    type: "veg",
    description: "Classic stir-fried noodles with fresh garden vegetables and aromatic Chinese spices.",
    prices: { half: 40, full: 70 }
  },
  {
    id: "n2",
    name: "Paneer Noodles",
    category: "noodles",
    type: "veg",
    description: "Stir-fried noodles loaded with wok-tossed paneer cubes and crunchy vegetables.",
    prices: { half: 50, full: 80 }
  },
  {
    id: "n3",
    name: "Hakka Noodles",
    category: "noodles",
    type: "veg",
    description: "Indo-Chinese style noodles prepared with high-flame wok cooking and light soy sauce.",
    prices: { half: 45, full: 80 }
  },
  {
    id: "n4",
    name: "Veg Chilli Garlic Noodles",
    category: "noodles",
    type: "veg",
    description: "Spicy stir-fried noodles infused with robust burnt garlic and hot red chili sauce.",
    prices: { half: 50, full: 80 }
  },
  {
    id: "n5",
    name: "Singapore Veg Noodles",
    category: "noodles",
    type: "veg",
    description: "Yellow-tinted noodles tossed with exotic spices, curry powder, and crunchy veggies.",
    prices: { half: 50, full: 90 }
  },
  {
    id: "n6",
    name: "Chilli Garlic Chicken Noodles",
    category: "noodles",
    type: "non-veg",
    description: "Wok-tossed noodles with tender chicken chunks, garlic, and hot chili paste.",
    prices: { half: 50, full: 90 }
  },
  {
    id: "n7",
    name: "Singapore Chicken Noodles",
    category: "noodles",
    type: "non-veg",
    description: "Vibrant Singapore-style noodles loaded with shredded chicken and rich aromatic spices.",
    prices: { half: 60, full: 99 }
  },

  // MOMOS (VEG & PANEER)
  {
    id: "m1",
    name: "Veg Steam Momos",
    category: "momos",
    type: "veg",
    description: "Freshly steamed dumplings stuffed with finely chopped mixed vegetables, served with hot spicy red chutney.",
    prices: { half: 40, full: 70 }
  },
  {
    id: "m2",
    name: "Veg Fry Momos",
    category: "momos",
    type: "veg",
    description: "Crispy, golden-fried vegetable momos served with a signature creamy mayonnaise and spicy garlic dip.",
    prices: { half: 50, full: 90 }
  },
  {
    id: "m3",
    name: "Veg Chilli Garlic Momos",
    category: "momos",
    type: "veg",
    description: "Crispy vegetable momos tossed in a blazing hot and aromatic chili garlic sauce.",
    prices: { half: 50, full: 90 }
  },
  {
    id: "m4",
    name: "Veg Chilli Chilli Momos",
    category: "momos",
    type: "veg",
    description: "Extra hot momos coated in a rich, fiery Schezwan glaze for the ultimate spice lovers.",
    prices: { half: 50, full: 90 }
  },
  {
    id: "m5",
    name: "Paneer Steam Momos",
    category: "momos",
    type: "veg",
    description: "Soft, steamed momos packed with seasoned paneer filling and select Indian herbs.",
    prices: { single: 50 }
  },
  {
    id: "m6",
    name: "Paneer Fry Momos",
    category: "momos",
    type: "veg",
    description: "Paneer stuffed momos fried to golden perfection, crispy on the outside, juicy inside.",
    prices: { half: 60, full: 100 }
  },
  {
    id: "m7",
    name: "Paneer Kurkure Momos",
    category: "momos",
    type: "veg",
    description: "Crunchy cornflakes-crusted paneer momos offering an incredible bite and flavor explosion.",
    prices: { half: 60, full: 100 }
  },
  {
    id: "m8",
    name: "Paneer Chilli Momos",
    category: "momos",
    type: "veg",
    description: "Crispy paneer momos wok-tossed with capsicum, onions, and spicy soy-chili sauce.",
    prices: { half: 70, full: 110 }
  },

  // CHICKEN MOMOS
  {
    id: "cm1",
    name: "Chicken Steam Momos",
    category: "momos",
    type: "non-veg",
    description: "Juicy, steamed minced chicken dumplings spiced with ginger and green herbs.",
    prices: { single: 50 }
  },
  {
    id: "cm2",
    name: "Chicken Fry Momos",
    category: "momos",
    type: "non-veg",
    description: "Crispy fried chicken momos served with spicy Schezwan sauce.",
    prices: { half: 60, full: 100 }
  },
  {
    id: "cm3",
    name: "Chicken Kurkure Momos",
    category: "momos",
    type: "non-veg",
    description: "Chicken momos rolled in crunchy batter and fried. A textures sensation!",
    prices: { half: 60, full: 100 }
  },
  {
    id: "cm4",
    name: "Chicken Chilli Momos",
    category: "momos",
    type: "non-veg",
    description: "Fried chicken momos tossed in a delicious spicy Indo-Chinese chili sauce.",
    prices: { half: 70, full: 110 }
  },

  // BURGER
  {
    id: "b1",
    name: "Veg Burger",
    category: "burger",
    type: "veg",
    description: "Crispy potato patty, fresh tomato, onion slices, and creamy burger sauce in a soft bun.",
    prices: { single: 50 }
  },
  {
    id: "b2",
    name: "Paneer Burger",
    category: "burger",
    type: "veg",
    description: "Juicy grilled paneer slab layered with cheese, fresh veggies, and spicy burger mayo.",
    prices: { single: 70 }
  },
  {
    id: "b3",
    name: "Chicken Burger",
    category: "burger",
    type: "non-veg",
    description: "Crispy chicken patty topped with fresh lettuce, onions, and zesty signature sauce.",
    prices: { single: 80 }
  },
  {
    id: "b4",
    name: "Pizza Burger",
    category: "burger",
    type: "veg",
    description: "Unique fusion burger stuffed with liquid cheese, pizza sauce, oregano, and mixed toppings.",
    prices: { single: 90 }
  },

  // RICE
  {
    id: "r1",
    name: "Veg Fried Rice",
    category: "rice",
    type: "veg",
    description: "Fluffy basmati rice tossed in high heat with finely chopped veggies and light seasonings.",
    prices: { half: 40, full: 70 }
  },
  {
    id: "r2",
    name: "Paneer Fried Rice",
    category: "rice",
    type: "veg",
    description: "Classic fried rice upgraded with golden pan-seared paneer cubes.",
    prices: { half: 50, full: 90 }
  },
  {
    id: "r3",
    name: "Chicken Fried Rice",
    category: "rice",
    type: "non-veg",
    description: "Aromatic fried rice loaded with scrambled egg, shredded chicken, and green onions.",
    prices: { half: 50, full: 90 }
  },
  {
    id: "r4",
    name: "Egg Fried Rice",
    category: "rice",
    type: "egg",
    description: "Perfectly seasoned fried rice tossed with soft scrambled eggs and garlic.",
    prices: { half: 50, full: 99 }
  },

  // SOUP
  {
    id: "s1",
    name: "Veg Soup",
    category: "soup",
    type: "veg",
    description: "Hot, comforting vegetable clear soup infused with ginger, garlic, and coriander.",
    prices: { single: 40 }
  },
  {
    id: "s2",
    name: "Paneer Soup",
    category: "soup",
    type: "veg",
    description: "A creamy and nourishing hot soup loaded with paneer chunks and sweet corn.",
    prices: { single: 50 }
  },
  {
    id: "s3",
    name: "Chicken Soup",
    category: "soup",
    type: "non-veg",
    description: "Hearty chicken broth packed with shredded chicken, egg drops, and mild spices.",
    prices: { half: 50, full: 99 }
  },

  // ROLL
  {
    id: "ro1",
    name: "Veg Roll",
    category: "roll",
    type: "veg",
    description: "Warm flaky paratha wrap rolled with sautéed vegetables, spices, and tangy chutney.",
    prices: { half: 40, full: 50 }
  },
  {
    id: "ro2",
    name: "Paneer Roll",
    category: "roll",
    type: "veg",
    description: "Tandoori paneer tikka cubes wrapped in flatbread with onions and mint sauce.",
    prices: { half: 50, full: 99 }
  },
  {
    id: "ro3",
    name: "Egg Roll",
    category: "roll",
    type: "egg",
    description: "Traditional street-style roll with egg pan-fried on the paratha, loaded with fresh onions.",
    prices: { half: 40, full: 50 }
  },
  {
    id: "ro4",
    name: "Chicken Kathi Roll",
    category: "roll",
    type: "non-veg",
    description: "Spicy roasted chicken strips wrapped in a fresh flatbread with onions and green peppers.",
    prices: { half: 70, full: 110 }
  },
  {
    id: "ro5",
    name: "Chicken Roll",
    category: "roll",
    type: "non-veg",
    description: "Classic chicken seekh or minced chicken roll with custom mayonnaise sauce.",
    prices: { half: 50, full: 90 }
  },

  // PIZZA & STARTERS
  {
    id: "p1",
    name: "Veg Pizza",
    category: "pizza",
    type: "veg",
    description: "Fresh pizza base topped with marinara sauce, mozzarella cheese, capsicum, tomato, and onion.",
    prices: { single: 99 }
  },
  {
    id: "p2",
    name: "Paneer Pizza",
    category: "pizza",
    type: "veg",
    description: "Spicy paneer chunks, sweet corn, and double mozzarella over a crisp crust.",
    prices: { single: 120 }
  },
  {
    id: "p3",
    name: "Chicken Pizza (Standard)",
    category: "pizza",
    type: "non-veg",
    description: "Topped with seasoned chicken chunks, onions, capsicum, and premium melted mozzarella.",
    prices: { single: 120 }
  },
  {
    id: "p4",
    name: "Chicken Pizza (Supreme)",
    category: "pizza",
    type: "non-veg",
    description: "Fully loaded chicken pizza with extra toppings, mushrooms, and double cheese blanket.",
    prices: { single: 149 }
  },
  {
    id: "p5",
    name: "Chicken Kathi Pizza",
    category: "pizza",
    type: "non-veg",
    description: "Indo-Western fusion pizza featuring flavorful chicken kathi roll spices and cheese.",
    prices: { single: 149 }
  },
  {
    id: "p6",
    name: "Chicken Leg Fry (Starter)",
    category: "pizza",
    type: "non-veg",
    description: "Crispy, deep-fried chicken leg drumstick coated in spicy tandoori herbs. (1 piece)",
    prices: { single: 99 }
  },

  // CHINESE CHILLI
  {
    id: "cc1",
    name: "Paneer Chilli Dry",
    category: "chilli",
    type: "veg",
    description: "Crispy fried paneer cubes tossed in a high-heat wok with soy sauce, bell peppers, and green chillies.",
    prices: { half: 80, full: 150 }
  },
  {
    id: "cc2",
    name: "Chicken Chilli Dry",
    category: "chilli",
    type: "non-veg",
    description: "Boneless chicken pieces stir-fried with hot chillies, onions, garlic, and Chinese sauces.",
    prices: { half: 80, full: 150 }
  },
  {
    id: "cc3",
    name: "Chilli Mushroom",
    category: "chilli",
    type: "veg",
    description: "Button mushrooms pan-fried in hot Schezwan-style chili paste, spring onions, and soy.",
    prices: { single: 50 }
  },

  // SIDES
  {
    id: "f1",
    name: "French Fries",
    category: "fries",
    type: "veg",
    description: "Crispy salted golden french fries served with ketchup.",
    prices: { single: 40 }
  }
];

// App State
let cart = [];
let currentCategory = "all";
let currentType = "all"; // all, veg, non-veg, egg
let searchQuery = "";
let showAllItemsMobile = false;
let wasMobile = window.innerWidth <= 576;

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
      const icon = themeToggle.querySelector("i");
      if (icon) icon.className = "fas fa-sun";
    }
  }

  renderMenu();
  setupEventListeners();
  updateCartUI();

  // Listen for screen resize to handle mobile grid changes dynamically
  window.addEventListener("resize", () => {
    const isMobileNow = window.innerWidth <= 576;
    if (isMobileNow !== wasMobile) {
      wasMobile = isMobileNow;
      renderMenu();
    }
  });
});

// Setup Events
function setupEventListeners() {
  // Theme Toggle
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      const isLight = document.body.classList.contains("light-theme");
      localStorage.setItem("theme", isLight ? "light" : "dark");
      
      const icon = themeToggle.querySelector("i");
      if (icon) {
        icon.className = isLight ? "fas fa-sun" : "fas fa-moon";
      }
    });
  }

  // Order Delivery/Takeaway radio button selection
  const orderTypeRadios = document.querySelectorAll('input[name="order-delivery-type"]');
  orderTypeRadios.forEach(radio => {
    radio.addEventListener("change", (e) => {
      const addressGroup = document.getElementById("address-group");
      if (addressGroup) {
        addressGroup.style.display = e.target.value === "delivery" ? "block" : "none";
      }
      updateCartUI(); // recompute delivery fee dynamically!
    });
  });

  // Category tabs
  const categoryButtons = document.querySelectorAll(".category-btn");
  categoryButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      categoryButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      showAllItemsMobile = false; // Reset mobile show all state
      renderMenu();
    });
  });

  // Food type filters (Veg/Non-Veg toggle buttons)
  const typeButtons = document.querySelectorAll(".type-filter-btn");
  typeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      typeButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentType = btn.dataset.type;
      showAllItemsMobile = false; // Reset mobile show all state
      renderMenu();
    });
  });

  // Search input
  const searchInput = document.getElementById("menu-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      showAllItemsMobile = false; // Reset mobile show all state
      renderMenu();
    });
  }

  // Cart open/close
  const cartToggle = document.getElementById("cart-toggle");
  const cartDrawer = document.getElementById("cart-drawer");
  const closeCart = document.getElementById("close-cart");
  const cartOverlay = document.getElementById("cart-overlay");

  if (cartToggle && cartDrawer) {
    cartToggle.addEventListener("click", () => {
      cartDrawer.classList.add("open");
      if (cartOverlay) cartOverlay.classList.add("active");
    });
  }

  if (closeCart && cartDrawer) {
    closeCart.addEventListener("click", () => {
      cartDrawer.classList.remove("open");
      if (cartOverlay) cartOverlay.classList.remove("active");
    });
  }

  if (cartOverlay && cartDrawer) {
    cartOverlay.addEventListener("click", () => {
      cartDrawer.classList.remove("open");
      cartOverlay.classList.remove("active");
    });
  }

  // Order checkout button
  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", sendWhatsAppOrder);
  }

  // Load More Button
  const loadMoreBtn = document.getElementById("load-more-btn");
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      showAllItemsMobile = true;
      renderMenu();
    });
  }
}

// Render Menu
function renderMenu() {
  const menuGrid = document.getElementById("menu-grid");
  if (!menuGrid) return;

  menuGrid.innerHTML = "";

  // Filter items
  const filteredItems = MENU_DATA.filter(item => {
    const matchesCategory = currentCategory === "all" || item.category === currentCategory;
    const matchesType = currentType === "all" || 
                        (currentType === "veg" && item.type === "veg") || 
                        (currentType === "non-veg" && item.type === "non-veg") ||
                        (currentType === "egg" && item.type === "egg");
    const matchesSearch = item.name.toLowerCase().includes(searchQuery) || 
                          item.description.toLowerCase().includes(searchQuery);

    return matchesCategory && matchesType && matchesSearch;
  });

  if (filteredItems.length === 0) {
    menuGrid.innerHTML = `
      <div class="no-items">
        <i class="fas fa-search"></i>
        <p>No dishes found matching your criteria. Try another filter!</p>
      </div>
    `;
    return;
  }

  // Handle mobile initial limit (6 items)
  let itemsToRender = filteredItems;
  const isMobile = window.innerWidth <= 576;
  const loadMoreContainer = document.getElementById("load-more-container");
  
  if (isMobile && !showAllItemsMobile) {
    if (filteredItems.length > 6) {
      itemsToRender = filteredItems.slice(0, 6);
      if (loadMoreContainer) loadMoreContainer.style.display = "flex";
    } else {
      if (loadMoreContainer) loadMoreContainer.style.display = "none";
    }
  } else {
    if (loadMoreContainer) loadMoreContainer.style.display = "none";
  }

  itemsToRender.forEach(item => {
    const card = document.createElement("div");
    card.className = `menu-card ${item.type}`;
    
    // Check if item has dual pricing (half/full) or single pricing
    const isDualPrice = item.prices.half !== undefined && item.prices.full !== undefined;
    
    let priceHTML = "";
    let selectorHTML = "";

    if (isDualPrice) {
      priceHTML = `
        <div class="price-container">
          <span class="price-val" id="price-${item.id}">₹${item.prices.half}</span>
        </div>
      `;
      selectorHTML = `
        <div class="portion-selector">
          <label class="portion-option">
            <input type="radio" name="portion-${item.id}" value="half" checked onchange="updateCardPrice('${item.id}', ${item.prices.half})">
            <span>Half</span>
          </label>
          <label class="portion-option">
            <input type="radio" name="portion-${item.id}" value="full" onchange="updateCardPrice('${item.id}', ${item.prices.full})">
            <span>Full</span>
          </label>
        </div>
      `;
    } else {
      priceHTML = `
        <div class="price-container">
          <span class="price-val">₹${item.prices.single}</span>
        </div>
      `;
    }

    const typeBadge = item.type === "veg" 
      ? '<span class="badge badge-veg"><span class="dot"></span>Veg</span>' 
      : item.type === "egg"
      ? '<span class="badge badge-egg"><span class="dot"></span>Egg</span>'
      : '<span class="badge badge-nonveg"><span class="dot"></span>Non-Veg</span>';

    // Placeholder icons for categories if images aren't loaded
    let iconClass = "fa-utensils";
    if (item.category === "noodles") iconClass = "fa-bowl-rice";
    else if (item.category === "momos") iconClass = "fa-hotdog"; // soft dumplings
    else if (item.category === "burger") iconClass = "fa-hamburger";
    else if (item.category === "pizza") iconClass = "fa-pizza-slice";
    else if (item.category === "roll") iconClass = "fa-bread-slice";
    else if (item.category === "soup") iconClass = "fa-soup";

    const imgUrl = `images/${item.category}.png`;

    card.innerHTML = `
      <div class="card-img-container">
        <img src="${imgUrl}" alt="${item.name}" class="card-img" loading="lazy">
        ${typeBadge}
      </div>
      <div class="card-content">
        <div class="card-header">
          <h3 class="card-title">${item.name}</h3>
        </div>
        <p class="card-description">${item.description}</p>
        ${selectorHTML}
        <div class="card-footer">
          ${priceHTML}
          <button class="add-to-cart-btn" onclick="handleAddToCart('${item.id}')">
            <i class="fas fa-plus"></i> Add
          </button>
        </div>
      </div>
    `;

    menuGrid.appendChild(card);
  });
}

// Update local price display on portion change
window.updateCardPrice = function(itemId, price) {
  const priceSpan = document.getElementById(`price-${itemId}`);
  if (priceSpan) {
    priceSpan.textContent = `₹${price}`;
  }
};

// Add item to cart
window.handleAddToCart = function(itemId) {
  const item = MENU_DATA.find(i => i.id === itemId);
  if (!item) return;

  // Determine portion selected (half, full, or single)
  let portion = "single";
  let price = item.prices.single;

  const isDualPrice = item.prices.half !== undefined && item.prices.full !== undefined;
  if (isDualPrice) {
    const radioSelected = document.querySelector(`input[name="portion-${itemId}"]:checked`);
    portion = radioSelected ? radioSelected.value : "half";
    price = portion === "half" ? item.prices.half : item.prices.full;
  }

  // Check if item already exists in cart with same portion
  const existingCartIndex = cart.findIndex(c => c.id === itemId && c.portion === portion);

  if (existingCartIndex > -1) {
    cart[existingCartIndex].quantity += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      type: item.type,
      portion: portion,
      price: price,
      quantity: 1
    });
  }

  updateCartUI();
  
  // Show quick cart slide or notification
  const cartDrawer = document.getElementById("cart-drawer");
  const cartOverlay = document.getElementById("cart-overlay");
  if (cartDrawer && !cartDrawer.classList.contains("open")) {
    cartDrawer.classList.add("open");
    if (cartOverlay) cartOverlay.classList.add("active");
  }
};

// Modify item qty in cart
window.changeCartQty = function(index, change) {
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  updateCartUI();
};

// Remove cart item
window.removeCartItem = function(index) {
  cart.splice(index, 1);
  updateCartUI();
};

// Update cart counter & contents
function updateCartUI() {
  const cartBadge = document.getElementById("cart-count");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartSubtotal = document.getElementById("cart-subtotal");
  const cartTax = document.getElementById("cart-tax");
  const cartTotal = document.getElementById("cart-total");
  const checkoutBtn = document.getElementById("checkout-btn");

  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartBadge) {
    cartBadge.textContent = totalItemsCount;
    cartBadge.style.display = totalItemsCount > 0 ? "flex" : "none";
  }

  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart-msg">
        <i class="fas fa-shopping-bag"></i>
        <p>Your cart is empty.</p>
        <button class="browse-menu-btn" onclick="document.getElementById('menu-section').scrollIntoView({behavior: 'smooth'}); document.getElementById('cart-drawer').classList.remove('open'); document.getElementById('cart-overlay').classList.remove('active');">Browse Menu</button>
      </div>
    `;
    if (cartSubtotal) cartSubtotal.textContent = "₹0";
    if (cartTax) cartTax.textContent = "₹0";
    if (cartTotal) cartTotal.textContent = "₹0";
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;

  cartItemsContainer.innerHTML = "";
  let subtotal = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    
    const portionLabel = item.portion !== "single" ? `(${item.portion.toUpperCase()})` : "";
    const typeIndicator = item.type === "veg" 
      ? '<span class="indicator indicator-veg"></span>' 
      : item.type === "egg"
      ? '<span class="indicator indicator-egg"></span>'
      : '<span class="indicator indicator-nonveg"></span>';

    cartItem.innerHTML = `
      <div class="cart-item-details">
        <div class="cart-item-title-row">
          ${typeIndicator}
          <span class="cart-item-name">${item.name} <small class="cart-item-portion">${portionLabel}</small></span>
        </div>
        <span class="cart-item-price">₹${item.price} each</span>
      </div>
      <div class="cart-item-actions">
        <div class="quantity-controls">
          <button class="qty-btn minus" onclick="changeCartQty(${index}, -1)"><i class="fas fa-minus"></i></button>
          <span class="qty-val">${item.quantity}</span>
          <button class="qty-btn plus" onclick="changeCartQty(${index}, 1)"><i class="fas fa-plus"></i></button>
        </div>
        <span class="cart-item-total-price">₹${itemTotal}</span>
        <button class="cart-remove-btn" onclick="removeCartItem(${index})"><i class="far fa-trash-alt"></i></button>
      </div>
    `;

    cartItemsContainer.appendChild(cartItem);
  });

  const orderType = document.querySelector('input[name="order-delivery-type"]:checked')?.value || "delivery";
  const deliveryCharge = orderType === "delivery" ? 30 : 0;
  const grandTotal = subtotal + deliveryCharge;

  if (cartSubtotal) cartSubtotal.textContent = `₹${subtotal}`;
  if (cartTax) cartTax.textContent = `₹${deliveryCharge}`;
  if (cartTotal) cartTotal.textContent = `₹${grandTotal}`;
}

// Send WhatsApp Order
function sendWhatsAppOrder() {
  if (cart.length === 0) return;

  const orderType = document.querySelector('input[name="order-delivery-type"]:checked')?.value || "delivery";
  const customerName = document.getElementById("cust-name")?.value.trim() || "";
  const customerAddress = document.getElementById("cust-address")?.value.trim() || "";
  const customerPhone = document.getElementById("cust-phone")?.value.trim() || "";

  if (!customerName || (orderType === "delivery" && !customerAddress) || !customerPhone) {
    alert("Please fill in your name, contact number, and delivery address before ordering.");
    return;
  }

  let itemsList = "";
  let subtotal = 0;
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    const portionText = item.portion !== "single" ? ` [${item.portion.toUpperCase()}]` : "";
    itemsList += `${index + 1}. ${item.name}${portionText} x ${item.quantity} = ₹${itemTotal}\n`;
  });

  const deliveryCharge = orderType === "delivery" ? 30 : 0;
  const grandTotal = subtotal + deliveryCharge;

  let message = `*🍔 NEW ORDER - MOMOMIA 🍔*\n\n`;
  message += `*Customer Details:*\n`;
  message += `👤 Name: ${customerName}\n`;
  message += `📞 Phone: ${customerPhone}\n`;
  message += `📍 Type: ${orderType === "delivery" ? "Home Delivery" : "Takeaway"}\n`;
  if (orderType === "delivery") {
    message += `🏠 Address: ${customerAddress}\n`;
  }
  message += `\n*Order Summary:*\n`;
  message += itemsList;
  message += `\n*Subtotal:* ₹${subtotal}\n`;
  if (orderType === "delivery") {
    message += `*Delivery Fee:* ₹${deliveryCharge}\n`;
  }
  message += `*Total Amount:* *₹${grandTotal}*\n\n`;
  message += `Thank you! Please confirm my order. 🙏`;

  const momomiaPhoneNumber = "0000000000"; // Country code + phone number
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${momomiaPhoneNumber}&text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");
}
