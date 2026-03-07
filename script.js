// script.js - Versión Profesional

const products = [
    // ============================================
    // ELECTRONICS
    // ============================================
    {
        id: 1,
        title: "Premium Wireless Headphones",
        price: "$99.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/51pQ2Ew7LxL._AC_SX679_.jpg",
        category: "electronics",
        link: "https://www.amazon.com/dp/B0XXXXXXXX/?tag=A3C2V47BQBV1OM-20"
    },
    {
        id: 2,
        title: "Smart Voice Assistant Speaker",
        price: "$49.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/61d8fIuPcML._AC_SX679_.jpg",
        category: "electronics",
        link: "https://www.amazon.com/dp/B0AAAAAAAA/?tag=A3C2V47BQBV1OM-20"
    },
    
    // ============================================
    // HOME & KITCHEN
    // ============================================
    {
        id: 3,
        title: "Professional Non-Stick Fry Pan",
        price: "$34.50",
        image: "https://images-na.ssl-images-amazon.com/images/I/81QyVc5PkGL._AC_SX679_.jpg",
        category: "home",
        link: "https://www.amazon.com/dp/B0YYYYYYYY/?tag=A3C2V47BQBV1OM-20"
    },
    {
        id: 4,
        title: "Automatic Coffee Machine",
        price: "$79.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/61XZQyqGJvL._AC_SX679_.jpg",
        category: "home",
        link: "https://www.amazon.com/dp/B0BBBBBBBB/?tag=A3C2V47BQBV1OM-20"
    },
    
    // ============================================
    // SPORTS & OUTDOORS
    // ============================================
    {
        id: 5,
        title: "Professional Soccer Ball",
        price: "$25.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/81Hp+7y87sL._AC_SX679_.jpg",
        category: "sports",
        link: "https://www.amazon.com/dp/B0ZZZZZZZZ/?tag=A3C2V47BQBV1OM-20"
    },
    {
        id: 6,
        title: "Non-Slip Yoga Mat",
        price: "$29.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/71x6UjWgRqL._AC_SX679_.jpg",
        category: "sports",
        link: "https://www.amazon.com/dp/B0CCCCCCCC/?tag=A3C2V47BQBV1OM-20"
    },
    
    // ============================================
    // BOOKS
    // ============================================
    {
        id: 7,
        title: "The Great Novel - Bestseller",
        price: "$15.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/81l3rV4qM-L.jpg",
        category: "books",
        link: "https://www.amazon.com/dp/B0DDDDDDDD/?tag=A3C2V47BQBV1OM-20"
    },
    {
        id: 8,
        title: "Learn JavaScript - Complete Guide",
        price: "$29.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/91asICNkQlL.jpg",
        category: "books",
        link: "https://www.amazon.com/dp/B0EEEEEEEE/?tag=A3C2V47BQBV1OM-20"
    },
    
    // ============================================
    // TOYS & GAMES
    // ============================================
    {
        id: 9,
        title: "Creative Building Blocks Set",
        price: "$49.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/81fUdwXjWlL.jpg",
        category: "toys",
        link: "https://www.amazon.com/dp/B08FFFFF/?tag=A3C2V47BQBV1OM-20"
    },
    {
        id: 10,
        title: "Foam Blaster Toy",
        price: "$29.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/71ZQrYvX9xL.jpg",
        category: "toys",
        link: "https://www.amazon.com/dp/B08GGGGGG/?tag=A3C2V47BQBV1OM-20"
    },
    
    // ============================================
    // BEAUTY
    // ============================================
    {
        id: 11,
        title: "Professional Hair Dryer",
        price: "$34.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/71QkQq8YjPL.jpg",
        category: "beauty",
        link: "https://www.amazon.com/dp/B08IIIIII/?tag=A3C2V47BQBV1OM-20"
    },
    {
        id: 12,
        title: "Complete Makeup Kit",
        price: "$24.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/81jPqZqQkLL.jpg",
        category: "beauty",
        link: "https://www.amazon.com/dp/B08JJJJJJ/?tag=A3C2V47BQBV1OM-20"
    },
    
    // ============================================
    // FASHION
    // ============================================
    {
        id: 13,
        title: "Men's Running Sneakers",
        price: "$59.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/71bYfVwYjPL.jpg",
        category: "fashion",
        link: "https://www.amazon.com/dp/B08LLLLLL/?tag=A3C2V47BQBV1OM-20"
    },
    {
        id: 14,
        title: "Women's Winter Coat",
        price: "$79.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/81cZqZqQkPL.jpg",
        category: "fashion",
        link: "https://www.amazon.com/dp/B08MMMMMM/?tag=A3C2V47BQBV1OM-20"
    },
    
    // ============================================
    // PET SUPPLIES
    // ============================================
    {
        id: 15,
        title: "Premium Dog Food 15lb",
        price: "$32.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/81eYfYqYkPL.jpg",
        category: "pets",
        link: "https://www.amazon.com/dp/B08OOOOOO/?tag=A3C2V47BQBV1OM-20"
    },
    {
        id: 16,
        title: "Cat Scratching Post",
        price: "$29.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/71fZgZqYkPL.jpg",
        category: "pets",
        link: "https://www.amazon.com/dp/B08PPPPPP/?tag=A3C2V47BQBV1OM-20"
    },
    
    // ============================================
    // WELLNESS
    // ============================================
    {
        id: 17,
        title: "Deep Tissue Massage Gun",
        price: "$59.99",
        image: "https://m.media-amazon.com/images/I/71glwi9dEpL._AC_SL1500_.jpg",
        category: "wellness",
        link: "https://www.amazon.com/dp/B0GJ37MCT3/?tag=A3C2V47BQBV1OM-20"
    },
    {
        id: 18,
        title: "Organic Massage Oil Lavender",
        price: "$19.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/71g8iFhLk7L._AC_SX679_.jpg",
        category: "wellness",
        link: "https://www.amazon.com/dp/B07GJ9M8F6/?tag=A3C2V47BQBV1OM-20"
    },
    {
        id: 19,
        title: "Personal Massager - Rechargeable",
        price: "$21.99",
        image: "https://m.media-amazon.com/images/I/61p4jM0a1eL._AC_SL1500_.jpg",
        category: "wellness",
        link: "https://www.amazon.com/dp/B0C5H7YQNG/?tag=A3C2V47BQBV1OM-20"
    }
];

// ============================================
// FUNCTIONS
// ============================================

// Display products
function displayProducts(productsToShow) {
    const container = document.getElementById('products-container');
    
    if (!productsToShow || productsToShow.length === 0) {
        container.innerHTML = '<p class="no-products">No products found in this category.</p>';
        return;
    }

    let html = '';
    productsToShow.forEach(product => {
        html += `
            <div class="product-card">
                <a href="${product.link}" target="_blank" class="product-card-link">
                    <img src="${product.image}" alt="${product.title}" loading="lazy">
                    <h3>${product.title}</h3>
                    <p class="price">${product.price}</p>
                </a>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Filter by category
function setupCategoryFilters() {
    const categoryLinks = document.querySelectorAll('[data-category]');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            
            const selectedCategory = event.currentTarget.dataset.category;
            
            const filtered = products.filter(product => product.category === selectedCategory);
            
            displayProducts(filtered);
            
            // Smooth scroll to products section
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Show all products (for home)
function showAllProducts() {
    displayProducts(products);
}

// Search functionality
function setupSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    
    function performSearch() {
        const term = searchInput.value.toLowerCase().trim();
        
        if (term === '') {
            showAllProducts();
            return;
        }
        
        const filtered = products.filter(product => 
            product.title.toLowerCase().includes(term) || 
            product.category.toLowerCase().includes(term)
        );
        
        displayProducts(filtered);
        
        if (filtered.length > 0) {
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    showAllProducts();
    setupCategoryFilters();
    setupSearch();
});