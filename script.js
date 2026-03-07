// script.js - VERSIÓN MODIFICADA (imágenes enlazadas, botón eliminado)

const products = [
    // ============================================
    // ELECTRONICS
    // ============================================
    {
        id: 1,
        title: "Sony Wireless Headphones",
        price: "$99.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/51pQ2Ew7LxL._AC_SX679_.jpg",
        category: "electronics",
        link: "https://www.amazon.com/dp/B0XXXXXXXX/?tag=A3C2V47BQBV1OM-20"
    },
    {
        id: 2,
        title: "Echo Dot Smart Speaker",
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
        title: "Non-Stick Frying Pan 28cm",
        price: "$34.50",
        image: "https://images-na.ssl-images-amazon.com/images/I/81QyVc5PkGL._AC_SX679_.jpg",
        category: "home",
        link: "https://www.amazon.com/dp/B0YYYYYYYY/?tag=A3C2V47BQBV1OM-20"
    },
    {
        id: 4,
        title: "Coffee Maker Machine",
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
        title: "Yoga Mat Non-Slip",
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
        title: "The Great Novel",
        price: "$15.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/81l3rV4qM-L.jpg",
        category: "books",
        link: "https://www.amazon.com/dp/B0DDDDDDDD/?tag=A3C2V47BQBV1OM-20"
    },
    {
        id: 8,
        title: "Learn JavaScript",
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
        title: "Lego Creative Building Set",
        price: "$49.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/81fUdwXjWlL.jpg",
        category: "toys",
        link: "https://www.amazon.com/dp/B08FFFFF/?tag=A3C2V47BQBV1OM-20"
    },
    {
        id: 10,
        title: "Nerf Blaster Toy Gun",
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
        title: "Revlon Hair Dryer",
        price: "$34.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/71QkQq8YjPL.jpg",
        category: "beauty",
        link: "https://www.amazon.com/dp/B08IIIIII/?tag=A3C2V47BQBV1OM-20"
    },
    {
        id: 12,
        title: "Makeup Set 40-Piece",
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
        title: "Men's Running Shoes",
        price: "$59.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/71bYfVwYjPL.jpg",
        category: "fashion",
        link: "https://www.amazon.com/dp/B08LLLLLL/?tag=A3C2V47BQBV1OM-20"
    },
    {
        id: 14,
        title: "Women's Winter Jacket",
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
        title: "Dog Food 15lb Bag",
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
        title: "Rechargeable Personal Massager",
        price: "$21.99",
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
        title: "Air Pulse Personal Massager",
        price: "$21.99",
        image: "https://m.media-amazon.com/images/I/61p4jM0a1eL._AC_SL1500_.jpg",
        category: "wellness",
        link: "https://www.amazon.com/dp/B0C5H7YQNG/?tag=A3C2V47BQBV1OM-20"
    },
    {
        id: 20,
        title: "Couples Intimate Massage Kit",
        price: "$49.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/71mN6fXqVgL._AC_SX679_.jpg",
        category: "wellness",
        link: "https://www.amazon.com/dp/B09ABC1234/?tag=A3C2V47BQBV1OM-20"
    }
];

// --- FUNCIÓN MODIFICADA: imagen enlazada, sin botón ---
function displayProducts(productsToShow) {
    const container = document.getElementById('products-container');
    
    if (!productsToShow || productsToShow.length === 0) {
        container.innerHTML = '<p>No products found in this category.</p>';
        return;
    }

    let html = '';
    for(let i = 0; i < productsToShow.length; i++) {
        const p = productsToShow[i];
        html += '<div class="product-card">';
        // La imagen ahora es un enlace
        html += '<a href="' + p.link + '" target="_blank" rel="nofollow sponsored">';
        html += '<img src="' + p.image + '" alt="' + p.title + '" loading="lazy">';
        html += '</a>';
        html += '<h3>' + p.title + '</h3>';
        html += '<p class="price">' + p.price + '</p>';
        // EL BOTÓN HA SIDO ELIMINADO
        html += '</div>';
    }
    
    container.innerHTML = html;
}

// --- FILTRAR POR CATEGORÍA ---
const categoryLinks = document.querySelectorAll('nav.categories a');

for(let i = 0; i < categoryLinks.length; i++) {
    categoryLinks[i].addEventListener('click', function(event) {
        event.preventDefault();
        
        for(let j = 0; j < categoryLinks.length; j++) {
            categoryLinks[j].classList.remove('active');
        }
        
        this.classList.add('active');
        
        const selectedCategory = this.getAttribute('data-category');
        
        const filtered = [];
        for(let j = 0; j < products.length; j++) {
            if(products[j].category === selectedCategory) {
                filtered.push(products[j]);
            }
        }
        
        displayProducts(filtered);
    });
}

// --- MOSTRAR TODOS LOS PRODUCTOS AL INICIO ---
displayProducts(products);
