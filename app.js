// Application Data
const appData = {
  platforms: [
    {
      id: "zepto",
      name: "Zepto",
      logo: "🟢",
      color: "#1DB584",
      deliveryTime: "10 mins",
      description: "10-minute grocery delivery"
    },
    {
      id: "blinkit",
      name: "Blinkit", 
      logo: "🟡",
      color: "#FFC107",
      deliveryTime: "15 mins",
      description: "India's fastest grocery delivery"
    },
    {
      id: "instamart",
      name: "Instamart",
      logo: "🟠", 
      color: "#FF6B35",
      deliveryTime: "20 mins",
      description: "Swiggy's grocery delivery service"
    },
    {
      id: "bigbasket",
      name: "BigBasket",
      logo: "🔴",
      color: "#84C441",
      deliveryTime: "30 mins", 
      description: "India's largest online supermarket"
    },
    {
      id: "jiomart",
      name: "JioMart",
      logo: "🔵",
      color: "#0066CC",
      deliveryTime: "30 mins",
      description: "Reliance's digital commerce platform"
    },
    {
      id: "flipkart",
      name: "Flipkart Minutes",
      logo: "⚡",
      color: "#047BD0",
      deliveryTime: "15 mins",
      description: "Flipkart's quick commerce service"
    }
  ],
  products: [
    {
      id: "milk-amul-1l",
      name: "Amul Taaza Toned Milk",
      category: "Dairy & Eggs",
      image: "🥛",
      unit: "1L Pack",
      prices: {
        zepto: {price: 62, available: true, offer: ""},
        blinkit: {price: 58, available: true, offer: "Buy 2 Get 5% off"},
        instamart: {price: 60, available: true, offer: ""},
        bigbasket: {price: 56, available: true, offer: ""},
        jiomart: {price: 55, available: true, offer: "Special Price"},
        flipkart: {price: 59, available: false, offer: ""}
      }
    },
    {
      id: "bread-britannia",
      name: "Britannia White Bread", 
      category: "Bakery",
      image: "🍞",
      unit: "400g Pack",
      prices: {
        zepto: {price: 28, available: true, offer: ""},
        blinkit: {price: 26, available: true, offer: ""},
        instamart: {price: 27, available: true, offer: ""},
        bigbasket: {price: 25, available: true, offer: "Lowest Price"},
        jiomart: {price: 26, available: true, offer: ""},
        flipkart: {price: 28, available: true, offer: ""}
      }
    },
    {
      id: "rice-india-gate-5kg",
      name: "India Gate Classic Basmati Rice",
      category: "Pantry Staples", 
      image: "🍚",
      unit: "5kg Pack",
      prices: {
        zepto: {price: 685, available: true, offer: ""},
        blinkit: {price: 670, available: true, offer: ""},
        instamart: {price: 675, available: false, offer: ""},
        bigbasket: {price: 650, available: true, offer: "Best Price"},
        jiomart: {price: 645, available: true, offer: "Mega Deal"},
        flipkart: {price: 680, available: true, offer: ""}
      }
    },
    {
      id: "eggs-country-eggs",
      name: "Country Eggs Fresh",
      category: "Dairy & Eggs",
      image: "🥚", 
      unit: "12 pieces",
      prices: {
        zepto: {price: 84, available: true, offer: ""},
        blinkit: {price: 82, available: true, offer: ""},
        instamart: {price: 80, available: true, offer: "Fresh Guarantee"},
        bigbasket: {price: 78, available: true, offer: ""},
        jiomart: {price: 76, available: true, offer: "Farm Fresh"},
        flipkart: {price: 85, available: true, offer: ""}
      }
    },
    {
      id: "oil-fortune-sunflower-1l",
      name: "Fortune Sunflower Oil",
      category: "Cooking Essentials",
      image: "🛢️",
      unit: "1L Bottle", 
      prices: {
        zepto: {price: 165, available: true, offer: ""},
        blinkit: {price: 162, available: true, offer: ""},
        instamart: {price: 160, available: true, offer: ""},
        bigbasket: {price: 158, available: true, offer: "Member Special"},
        jiomart: {price: 155, available: true, offer: "Best Deal"},
        flipkart: {price: 167, available: false, offer: ""}
      }
    },
    {
      id: "onion-red-1kg",
      name: "Red Onion", 
      category: "Fresh Produce",
      image: "🧅",
      unit: "1kg",
      prices: {
        zepto: {price: 45, available: true, offer: ""},
        blinkit: {price: 42, available: true, offer: "Fresh Pick"},
        instamart: {price: 40, available: true, offer: ""},
        bigbasket: {price: 38, available: true, offer: "Lowest Price"},
        jiomart: {price: 36, available: true, offer: "Farm Direct"},
        flipkart: {price: 44, available: true, offer: ""}
      }
    },
    {
      id: "maggi-noodles-pack",
      name: "Maggi 2-Minute Noodles",
      category: "Snacks & Instant Food",
      image: "🍜",
      unit: "12 Pack Combo",
      prices: {
        zepto: {price: 144, available: true, offer: ""},
        blinkit: {price: 140, available: true, offer: ""},
        instamart: {price: 138, available: true, offer: "Combo Deal"},
        bigbasket: {price: 135, available: true, offer: ""},
        jiomart: {price: 132, available: true, offer: "Bulk Saver"},
        flipkart: {price: 145, available: true, offer: ""}
      }
    },
    {
      id: "tea-tata-tea-250g",
      name: "Tata Tea Premium",
      category: "Beverages",
      image: "🍵", 
      unit: "250g Pack",
      prices: {
        zepto: {price: 115, available: true, offer: ""},
        blinkit: {price: 112, available: true, offer: ""},
        instamart: {price: 110, available: true, offer: ""},
        bigbasket: {price: 108, available: true, offer: "Member Price"},
        jiomart: {price: 105, available: true, offer: "Special Offer"},
        flipkart: {price: 118, available: true, offer: ""}
      }
    }
  ],
  categories: [
    {id: "dairy", name: "Dairy & Eggs", icon: "🥛"},
    {id: "fresh-produce", name: "Fresh Produce", icon: "🥕"},
    {id: "pantry", name: "Pantry Staples", icon: "🍚"},
    {id: "snacks", name: "Snacks & Beverages", icon: "🍿"},
    {id: "personal-care", name: "Personal Care", icon: "🧴"},
    {id: "household", name: "Household Items", icon: "🧽"},
    {id: "bakery", name: "Bakery", icon: "🍞"},
    {id: "beverages", name: "Beverages", icon: "☕"}
  ]
};

// App State
let currentLocation = "Jaipur, Rajasthan";
let searchResults = [];
let recentSearches = [];

// Popular search suggestions
const popularSearches = [
  "milk", "bread", "eggs", "rice", "oil", "onion", "tea", "noodles",
  "butter", "sugar", "wheat flour", "dal", "potato", "tomato",
  "cheese", "yogurt", "biscuits", "coffee"
];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app...');
  initializeApp();
});

function initializeApp() {
  console.log('Initializing app...');
  setupEventListeners();
  renderCategories();
  renderPlatforms();
  updateLocation();
  loadRecentSearches();
  populatePlatformFilter();
  console.log('App initialization complete');
}

function setupEventListeners() {
  console.log('Setting up event listeners...');
  
  // Get DOM elements
  const locationDisplay = document.getElementById('locationDisplay');
  const changeLocationBtn = document.getElementById('changeLocationBtn');
  const locationModal = document.getElementById('locationModal');
  const closeLocationModal = document.getElementById('closeLocationModal');
  const cancelLocationBtn = document.getElementById('cancelLocationBtn');
  const saveLocationBtn = document.getElementById('saveLocationBtn');
  const detectLocationBtn = document.getElementById('detectLocationBtn');
  
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const searchSuggestions = document.getElementById('searchSuggestions');
  
  const backToHomeBtn = document.getElementById('backToHomeBtn');
  
  const sortSelect = document.getElementById('sortSelect');
  const platformFilter = document.getElementById('platformFilter');
  const priceRange = document.getElementById('priceRange');
  
  const productModal = document.getElementById('productModal');
  const closeProductModal = document.getElementById('closeProductModal');
  
  // Location events
  if (locationDisplay) {
    locationDisplay.addEventListener('click', showLocationModal);
  }
  if (changeLocationBtn) {
    changeLocationBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showLocationModal();
    });
  }
  if (closeLocationModal) {
    closeLocationModal.addEventListener('click', hideLocationModal);
  }
  if (cancelLocationBtn) {
    cancelLocationBtn.addEventListener('click', hideLocationModal);
  }
  if (saveLocationBtn) {
    saveLocationBtn.addEventListener('click', saveLocation);
  }
  if (detectLocationBtn) {
    detectLocationBtn.addEventListener('click', detectLocation);
  }
  
  // Search events
  if (searchInput) {
    searchInput.addEventListener('input', handleSearchInput);
    searchInput.addEventListener('keypress', handleSearchKeypress);
  }
  if (searchBtn) {
    searchBtn.addEventListener('click', performSearch);
  }
  
  // Navigation events
  if (backToHomeBtn) {
    backToHomeBtn.addEventListener('click', showHomepage);
  }
  
  // Filter events
  if (sortSelect) {
    sortSelect.addEventListener('change', applyFiltersAndSort);
  }
  if (platformFilter) {
    platformFilter.addEventListener('change', applyFiltersAndSort);
  }
  if (priceRange) {
    priceRange.addEventListener('input', updatePriceRange);
    priceRange.addEventListener('change', applyFiltersAndSort);
  }
  
  // Product modal events
  if (closeProductModal) {
    closeProductModal.addEventListener('click', hideProductModal);
  }
  
  // Click outside modals to close
  if (locationModal) {
    locationModal.addEventListener('click', (e) => {
      if (e.target === locationModal) hideLocationModal();
    });
  }
  
  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) hideProductModal();
    });
  }
  
  console.log('Event listeners setup complete');
}

// Location functions
function showLocationModal() {
  console.log('Showing location modal...');
  const locationModal = document.getElementById('locationModal');
  const locationInput = document.getElementById('locationInput');
  
  if (locationModal) {
    locationModal.classList.remove('hidden');
    if (locationInput) {
      locationInput.value = currentLocation;
      locationInput.focus();
    }
  }
}

function hideLocationModal() {
  console.log('Hiding location modal...');
  const locationModal = document.getElementById('locationModal');
  if (locationModal) {
    locationModal.classList.add('hidden');
  }
}

function saveLocation() {
  const locationInput = document.getElementById('locationInput');
  const newLocation = locationInput ? locationInput.value.trim() : '';
  
  if (newLocation) {
    currentLocation = newLocation;
    updateLocation();
    hideLocationModal();
  }
}

function detectLocation() {
  const locationText = document.getElementById('locationText');
  if (locationText) {
    locationText.textContent = "Detecting location...";
  }
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        currentLocation = "Jaipur, Rajasthan";
        updateLocation();
        const locationInput = document.getElementById('locationInput');
        if (locationInput) {
          locationInput.value = currentLocation;
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        currentLocation = "Jaipur, Rajasthan";
        updateLocation();
        const locationInput = document.getElementById('locationInput');
        if (locationInput) {
          locationInput.value = currentLocation;
        }
      }
    );
  } else {
    currentLocation = "Jaipur, Rajasthan";
    updateLocation();
    const locationInput = document.getElementById('locationInput');
    if (locationInput) {
      locationInput.value = currentLocation;
    }
  }
}

function updateLocation() {
  const locationText = document.getElementById('locationText');
  if (locationText) {
    locationText.textContent = currentLocation;
  }
}

// Search functions
function handleSearchInput(e) {
  const query = e.target.value.toLowerCase().trim();
  
  if (query.length > 0) {
    showSearchSuggestions(query);
  } else {
    hideSearchSuggestions();
  }
}

function handleSearchKeypress(e) {
  if (e.key === 'Enter') {
    performSearch();
  }
}

function showSearchSuggestions(query) {
  const searchSuggestions = document.getElementById('searchSuggestions');
  
  const suggestions = popularSearches
    .filter(item => item.toLowerCase().includes(query))
    .slice(0, 5);
  
  if (suggestions.length > 0 && searchSuggestions) {
    searchSuggestions.innerHTML = suggestions
      .map(suggestion => `<div class="suggestion-item" onclick="selectSuggestion('${suggestion}')">${suggestion}</div>`)
      .join('');
    searchSuggestions.classList.remove('hidden');
  } else {
    hideSearchSuggestions();
  }
}

function hideSearchSuggestions() {
  const searchSuggestions = document.getElementById('searchSuggestions');
  if (searchSuggestions) {
    searchSuggestions.classList.add('hidden');
  }
}

function selectSuggestion(suggestion) {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.value = suggestion;
  }
  hideSearchSuggestions();
  performSearch();
}

function performSearch() {
  const searchInput = document.getElementById('searchInput');
  const query = searchInput ? searchInput.value.trim() : '';
  
  console.log('Performing search for:', query);
  
  if (!query) return;
  
  // Add to recent searches
  addToRecentSearches(query);
  
  // Filter products based on query
  searchResults = appData.products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );
  
  console.log('Search results found:', searchResults.length);
  
  // Show results
  showSearchResults(query);
  hideSearchSuggestions();
}

function addToRecentSearches(query) {
  if (!recentSearches.includes(query)) {
    recentSearches.unshift(query);
    if (recentSearches.length > 5) {
      recentSearches = recentSearches.slice(0, 5);
    }
    updateRecentSearches();
  }
}

function loadRecentSearches() {
  if (recentSearches.length > 0) {
    updateRecentSearches();
  }
}

function updateRecentSearches() {
  const recentSearchesList = document.getElementById('recentSearchesList');
  const recentSearchesEl = document.getElementById('recentSearches');
  
  if (recentSearches.length > 0 && recentSearchesList && recentSearchesEl) {
    recentSearchesList.innerHTML = recentSearches
      .map(search => `<div class="recent-search-item" onclick="selectSuggestion('${search}')">${search}</div>`)
      .join('');
    recentSearchesEl.classList.remove('hidden');
  }
}

// Navigation functions
function showSearchResults(query) {
  const homepageSection = document.getElementById('homepageSection');
  const searchResultsSection = document.getElementById('searchResultsSection');
  const searchQuery = document.getElementById('searchQuery');
  const resultsCount = document.getElementById('resultsCount');
  
  if (homepageSection) homepageSection.classList.add('hidden');
  if (searchResultsSection) searchResultsSection.classList.remove('hidden');
  if (searchQuery) searchQuery.textContent = `Results for "${query}"`;
  if (resultsCount) resultsCount.textContent = `${searchResults.length} products found`;
  
  renderSearchResults();
}

function showHomepage() {
  const homepageSection = document.getElementById('homepageSection');
  const searchResultsSection = document.getElementById('searchResultsSection');
  const searchInput = document.getElementById('searchInput');
  
  if (searchResultsSection) searchResultsSection.classList.add('hidden');
  if (homepageSection) homepageSection.classList.remove('hidden');
  if (searchInput) searchInput.value = '';
}

// Render functions
function renderCategories() {
  const categoriesGrid = document.getElementById('categoriesGrid');
  
  if (categoriesGrid) {
    categoriesGrid.innerHTML = appData.categories
      .map(category => `
        <div class="category-card" onclick="searchByCategory('${category.name}')">
          <div class="category-icon">${category.icon}</div>
          <div class="category-name">${category.name}</div>
        </div>
      `)
      .join('');
  }
}

function renderPlatforms() {
  const platformsGrid = document.getElementById('platformsGrid');
  
  if (platformsGrid) {
    platformsGrid.innerHTML = appData.platforms
      .map(platform => `
        <div class="platform-card">
          <div class="platform-logo">${platform.logo}</div>
          <div class="platform-name">${platform.name}</div>
          <div class="platform-delivery">⚡ ${platform.deliveryTime}</div>
          <div class="platform-description">${platform.description}</div>
        </div>
      `)
      .join('');
  }
}

function searchByCategory(categoryName) {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.value = categoryName;
  }
  performSearch();
}

function renderSearchResults() {
  const searchResultsGrid = document.getElementById('searchResultsGrid');
  
  if (!searchResultsGrid) return;
  
  if (searchResults.length === 0) {
    searchResultsGrid.innerHTML = `
      <div class="no-results">
        <h3>No products found</h3>
        <p>Try searching for something else</p>
      </div>
    `;
    return;
  }
  
  searchResultsGrid.innerHTML = searchResults
    .map(product => renderProductComparison(product))
    .join('');
}

function renderProductComparison(product) {
  const platforms = appData.platforms;
  const availablePrices = [];
  
  platforms.forEach(platform => {
    const priceData = product.prices[platform.id];
    if (priceData && priceData.available) {
      availablePrices.push({
        platform,
        ...priceData
      });
    }
  });
  
  const cheapestPrice = availablePrices.length > 0 ? Math.min(...availablePrices.map(p => p.price)) : 0;
  
  return `
    <div class="product-comparison">
      <div class="product-header">
        <div class="product-image">${product.image}</div>
        <div class="product-info">
          <h3>${product.name}</h3>
          <div class="product-details">${product.unit} • ${product.category}</div>
        </div>
      </div>
      <div class="platform-prices">
        ${platforms.map(platform => {
          const priceData = product.prices[platform.id];
          const isBestPrice = priceData.available && priceData.price === cheapestPrice;
          
          return `
            <div class="platform-price-card ${isBestPrice ? 'best-price' : ''} ${!priceData.available ? 'out-of-stock' : ''}">
              ${isBestPrice ? '<div class="best-price-badge">Best Price</div>' : ''}
              <div class="platform-header">
                <div class="platform-info">
                  <div class="platform-logo-small">${platform.logo}</div>
                  <div class="platform-name-small">${platform.name}</div>
                </div>
                <div class="delivery-time">${platform.deliveryTime}</div>
              </div>
              <div class="price-display">
                <div class="price">₹${priceData.price}</div>
              </div>
              ${priceData.offer ? `<div class="offer-text">${priceData.offer}</div>` : ''}
              <div class="availability ${priceData.available ? 'in-stock' : 'out-of-stock'}">
                ${priceData.available ? '✓ Available' : '✗ Out of Stock'}
              </div>
              <button class="btn btn--outline btn--sm view-details-btn" onclick="showProductDetails('${product.id}', '${platform.id}')">
                View Details
              </button>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// Filter and sort functions
function populatePlatformFilter() {
  const platformFilter = document.getElementById('platformFilter');
  
  if (platformFilter) {
    const options = appData.platforms
      .map(platform => `<option value="${platform.id}">${platform.name}</option>`)
      .join('');
    
    platformFilter.innerHTML = `
      <option value="all">All Platforms</option>
      ${options}
    `;
  }
}

function updatePriceRange() {
  const priceRange = document.getElementById('priceRange');
  const priceRangeValue = document.getElementById('priceRangeValue');
  
  if (priceRange && priceRangeValue) {
    priceRangeValue.textContent = priceRange.value;
  }
}

function applyFiltersAndSort() {
  let filteredResults = [...searchResults];
  
  const platformFilter = document.getElementById('platformFilter');
  const priceRange = document.getElementById('priceRange');
  const sortSelect = document.getElementById('sortSelect');
  const resultsCount = document.getElementById('resultsCount');
  
  // Platform filter
  if (platformFilter) {
    const platformFilterValue = platformFilter.value;
    if (platformFilterValue !== 'all') {
      filteredResults = filteredResults.filter(product => 
        product.prices[platformFilterValue] && product.prices[platformFilterValue].available
      );
    }
  }
  
  // Price range filter
  if (priceRange) {
    const maxPrice = parseInt(priceRange.value);
    filteredResults = filteredResults.filter(product => {
      const prices = Object.values(product.prices)
        .filter(p => p.available)
        .map(p => p.price);
      return prices.some(price => price <= maxPrice);
    });
  }
  
  // Sort
  if (sortSelect) {
    const sortBy = sortSelect.value;
    filteredResults.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          const aMinPrice = Math.min(...Object.values(a.prices).filter(p => p.available).map(p => p.price));
          const bMinPrice = Math.min(...Object.values(b.prices).filter(p => p.available).map(p => p.price));
          return aMinPrice - bMinPrice;
        case 'price-high':
          const aMaxPrice = Math.max(...Object.values(a.prices).filter(p => p.available).map(p => p.price));
          const bMaxPrice = Math.max(...Object.values(b.prices).filter(p => p.available).map(p => p.price));
          return bMaxPrice - aMaxPrice;
        case 'delivery-time':
          return 0; // All have similar delivery times
        case 'availability':
          const aAvailable = Object.values(a.prices).filter(p => p.available).length;
          const bAvailable = Object.values(b.prices).filter(p => p.available).length;
          return bAvailable - aAvailable;
        default:
          return 0;
      }
    });
  }
  
  // Update display
  searchResults = filteredResults;
  if (resultsCount) {
    resultsCount.textContent = `${searchResults.length} products found`;
  }
  renderSearchResults();
}

// Product details modal
function showProductDetails(productId, platformId) {
  const product = appData.products.find(p => p.id === productId);
  const platform = appData.platforms.find(p => p.id === platformId);
  
  if (!product || !platform) return;
  
  const priceData = product.prices[platformId];
  
  const productModalTitle = document.getElementById('productModalTitle');
  const productModalBody = document.getElementById('productModalBody');
  const productModal = document.getElementById('productModal');
  
  if (productModalTitle) {
    productModalTitle.textContent = product.name;
  }
  
  if (productModalBody) {
    productModalBody.innerHTML = `
      <div class="product-detail-content">
        <div class="product-detail-header">
          <div class="product-image-large" style="font-size: 4rem; margin-bottom: 1rem;">${product.image}</div>
          <div class="product-detail-info">
            <h3>${product.name}</h3>
            <p class="product-unit">${product.unit}</p>
            <p class="product-category">Category: ${product.category}</p>
          </div>
        </div>
        
        <div class="platform-detail-card" style="margin: 2rem 0; padding: 1rem; border: 1px solid var(--color-border); border-radius: var(--radius-base);">
          <div class="platform-detail-header" style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
            <div class="platform-logo-large" style="font-size: 2rem;">${platform.logo}</div>
            <div>
              <h4>${platform.name}</h4>
              <p class="platform-description" style="color: var(--color-text-secondary); margin: 0;">${platform.description}</p>
            </div>
          </div>
          
          <div class="price-detail">
            <div class="price-large" style="font-size: 2rem; font-weight: bold; color: var(--color-primary); margin-bottom: 0.5rem;">₹${priceData.price}</div>
            <div class="delivery-info" style="color: var(--color-success); margin-bottom: 0.5rem;">Delivery in ${platform.deliveryTime}</div>
            ${priceData.offer ? `<div class="offer-detail" style="background: var(--color-warning); color: white; padding: 0.5rem; border-radius: var(--radius-sm); margin-bottom: 0.5rem;">${priceData.offer}</div>` : ''}
            <div class="availability-detail ${priceData.available ? 'available' : 'unavailable'}" style="color: ${priceData.available ? 'var(--color-success)' : 'var(--color-error)'};">
              ${priceData.available ? '✓ In Stock' : '✗ Out of Stock'}
            </div>
          </div>
        </div>
        
        <div class="price-comparison-summary">
          <h4>Price Comparison</h4>
          <div class="comparison-list" style="display: flex; flex-direction: column; gap: 0.5rem;">
            ${appData.platforms.map(p => {
              const pData = product.prices[p.id];
              return `
                <div class="comparison-item" style="display: flex; justify-content: space-between; padding: 0.5rem; border-radius: var(--radius-sm); background: ${pData.available ? 'var(--color-surface)' : 'var(--color-secondary)'};">
                  <span>${p.logo} ${p.name}</span>
                  <span style="font-weight: bold; color: ${pData.available ? 'var(--color-text)' : 'var(--color-error)'};">
                    ${pData.available ? `₹${pData.price}` : 'Out of Stock'}
                  </span>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }
  
  if (productModal) {
    productModal.classList.remove('hidden');
  }
}

function hideProductModal() {
  const productModal = document.getElementById('productModal');
  if (productModal) {
    productModal.classList.add('hidden');
  }
}