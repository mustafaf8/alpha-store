const categories = [
  {
    _id: "cat-fashion",
    name: "Fashion / Apparel",
    slug: "fashion-apparel",
    icon: "tshirt",
    isActive: true,
    children: [
      {
        _id: "cat-fashion-women",
        name: "Women",
        slug: "women",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-fashion-men",
        name: "Men",
        slug: "men",
        isActive: true,
        children: [
          {
            _id: "cat-fashion-men-special",
            name: "Men's Special Offers",
            slug: "mens-special-offers",
            isActive: true,
            children: [],
          },
        ],
      },
      {
        _id: "cat-fashion-kids",
        name: "Kids",
        slug: "kids",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-fashion-shoes",
        name: "Shoes",
        slug: "shoes",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-fashion-accessories",
        name: "Accessories",
        slug: "accessories",
        isActive: true,
        children: [],
      },
    ],
  },
  {
    _id: "cat-electronics",
    name: "Electronics",
    slug: "electronics",
    icon: "smartphone",
    isActive: true,
    children: [
      {
        _id: "cat-elec-phone",
        name: "Phones & Accessories",
        slug: "phones",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-elec-laptop",
        name: "Computers / Laptops",
        slug: "computers",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-elec-tablet",
        name: "Tablets",
        slug: "tablets",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-elec-audio",
        name: "TV & Audio Systems",
        slug: "audio-systems",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-elec-console",
        name: "Game Consoles",
        slug: "game-consoles",
        isActive: true,
        children: [],
      },
    ],
  },
  {
    _id: "cat-home",
    name: "Home & Living",
    slug: "home-living",
    icon: "home",
    isActive: true,
    children: [
      {
        _id: "cat-home-furniture",
        name: "Furniture",
        slug: "furniture",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-home-decor",
        name: "Decoration",
        slug: "decoration",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-home-lighting",
        name: "Lighting",
        slug: "lighting",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-home-textile",
        name: "Home Textile",
        slug: "home-textile",
        isActive: true,
        children: [],
      },
    ],
  },
  {
    _id: "cat-appliances",
    name: "White Goods & Small Appliances",
    slug: "white-goods-appliances",
    icon: "refrigerator",
    isActive: true,
    children: [
      {
        _id: "cat-app-fridge",
        name: "Refrigerator",
        slug: "refrigerators",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-app-washer",
        name: "Washing Machine",
        slug: "washing-machines",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-app-vacuum",
        name: "Vacuum Cleaner",
        slug: "vacuum-cleaners",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-app-coffee",
        name: "Coffee Machines",
        slug: "coffee-machines",
        isActive: true,
        children: [],
      },
    ],
  },
  {
    _id: "cat-cosmetics",
    name: "Cosmetics & Personal Care",
    slug: "cosmetics",
    icon: "sparkles",
    isActive: true,
    children: [
      {
        _id: "cat-cos-makeup",
        name: "Makeup",
        slug: "makeup",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-cos-skincare",
        name: "Skincare",
        slug: "skincare",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-cos-perfume",
        name: "Perfume",
        slug: "perfume",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-cos-hair",
        name: "Hair Care",
        slug: "hair-care",
        isActive: true,
        children: [],
      },
    ],
  },
  {
    _id: "cat-supermarket",
    name: "Supermarket / Food",
    slug: "supermarket",
    icon: "shopping-basket",
    isActive: true,
    children: [
      {
        _id: "cat-sup-basic",
        name: "Basic Food",
        slug: "basic-food",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-sup-snacks",
        name: "Snacks",
        slug: "snacks",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-sup-drinks",
        name: "Beverages",
        slug: "beverages",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-sup-organic",
        name: "Organic Products",
        slug: "organic-products",
        isActive: true,
        children: [],
      },
    ],
  },
  {
    _id: "cat-baby",
    name: "Mother & Baby",
    slug: "mother-baby",
    icon: "baby",
    isActive: true,
    children: [
      {
        _id: "cat-baby-diaper",
        name: "Baby Diapers",
        slug: "baby-diapers",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-baby-food",
        name: "Baby Food",
        slug: "baby-food",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-baby-toy",
        name: "Toy",
        slug: "toy",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-baby-clothes",
        name: "Baby Clothing",
        slug: "baby-clothing",
        isActive: true,
        children: [],
      },
    ],
  },
  {
    _id: "cat-toys",
    name: "Toys & Hobby",
    slug: "toys-hobby",
    icon: "puzzle",
    isActive: true,
    children: [
      {
        _id: "cat-toy-toys",
        name: "Toys",
        slug: "toys",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-toy-puzzle",
        name: "Puzzle",
        slug: "puzzle",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-toy-hobby",
        name: "Hobby Supplies",
        slug: "hobby-supplies",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-toy-collection",
        name: "Collectible Items",
        slug: "collectible-items",
        isActive: true,
        children: [],
      },
    ],
  },
  {
    _id: "cat-books",
    name: "Books, Music, Movies",
    slug: "books-music-movies",
    icon: "book",
    isActive: true,
    children: [
      {
        _id: "cat-book-books",
        name: "Books",
        slug: "books",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-book-magazines",
        name: "Magazines",
        slug: "magazines",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-book-vinyl",
        name: "Vinyl / CD",
        slug: "vinyl-cd",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-book-media",
        name: "Movie & Series Content",
        slug: "movie-series",
        isActive: true,
        children: [],
      },
    ],
  },
  {
    _id: "cat-auto",
    name: "Automotive",
    slug: "automotive",
    icon: "car",
    isActive: true,
    children: [
      {
        _id: "cat-auto-acc",
        name: "Car Accessories",
        slug: "car-accessories",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-auto-parts",
        name: "Spare Parts",
        slug: "spare-parts",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-auto-tires",
        name: "Tires",
        slug: "tires",
        isActive: true,
        children: [],
      },
    ],
  },
  {
    _id: "cat-sports",
    name: "Sports & Outdoor",
    slug: "sports-outdoor",
    icon: "dumbbell",
    isActive: true,
    children: [
      {
        _id: "cat-sport-fitness",
        name: "Fitness Equipment",
        slug: "fitness-equipment",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-sport-camp",
        name: "Camping Gear",
        slug: "camping-gear",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-sport-wear",
        name: "Sportswear",
        slug: "sportswear",
        isActive: true,
        children: [],
      },
    ],
  },
  {
    _id: "cat-jewelry",
    name: "Jewelry & Accessories",
    slug: "jewelry-accessories",
    icon: "gem",
    isActive: true,
    children: [
      {
        _id: "cat-jewel-gold",
        name: "Gold",
        slug: "gold",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-jewel-silver",
        name: "Silver",
        slug: "silver",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-jewel-watches",
        name: "Watches",
        slug: "watches",
        isActive: true,
        children: [],
      },
    ],
  },
  {
    _id: "cat-pets",
    name: "Pet Supplies",
    slug: "pet-supplies",
    icon: "paw",
    isActive: true,
    children: [
      {
        _id: "cat-pet-food",
        name: "Pet Food",
        slug: "pet-food",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-pet-toy",
        name: "Pet Toy",
        slug: "pet-toys",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-pet-acc",
        name: "Accessories",
        slug: "pet-accessories",
        isActive: true,
        children: [],
      },
    ],
  },
  {
    _id: "cat-travel",
    name: "Travel & Luggage",
    slug: "travel-luggage",
    icon: "briefcase",
    isActive: true,
    children: [
      {
        _id: "cat-travel-luggage",
        name: "Luggage",
        slug: "luggage",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-travel-acc",
        name: "Travel Accessories",
        slug: "travel-accessories",
        isActive: true,
        children: [],
      },
    ],
  },
  {
    _id: "cat-office",
    name: "Office & Stationery",
    slug: "office-stationery",
    icon: "paperclip",
    isActive: true,
    children: [
      {
        _id: "cat-office-notebooks",
        name: "Notebooks",
        slug: "notebooks",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-office-pens",
        name: "Pens",
        slug: "pens",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-office-printer",
        name: "Printer Supplies",
        slug: "printer-supplies",
        isActive: true,
        children: [],
      },
    ],
  },
  {
    _id: "cat-tools",
    name: "DIY & Garden",
    slug: "diy-garden",
    icon: "hammer",
    isActive: true,
    children: [
      {
        _id: "cat-tools-handtools",
        name: "Hand Tools",
        slug: "hand-tools",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-tools-paint",
        name: "Paint",
        slug: "paint",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-tools-garden",
        name: "Garden Products",
        slug: "garden-products",
        isActive: true,
        children: [],
      },
    ],
  },
  {
    _id: "cat-gifts",
    name: "Gifts & Special Occasions",
    slug: "gifts-special-occasions",
    icon: "gift",
    isActive: true,
    children: [
      {
        _id: "cat-gift-sets",
        name: "Gift Sets",
        slug: "gift-sets",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-gift-custom",
        name: "Personalized Products",
        slug: "personalized-products",
        isActive: true,
        children: [],
      },
    ],
  },
  {
    _id: "cat-digital",
    name: "Digital Products",
    slug: "digital-products",
    icon: "monitor",
    isActive: true,
    children: [
      {
        _id: "cat-dig-software",
        name: "Software",
        slug: "software",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-dig-games",
        name: "Games",
        slug: "games",
        isActive: true,
        children: [],
      },
      {
        _id: "cat-dig-subs",
        name: "Subscriptions",
        slug: "subscriptions",
        isActive: true,
        children: [],
      },
    ],
  },
];

const brands = [
  { _id: "brand-novatek", name: "Novatek", slug: "novatek", isActive: true },
  { _id: "brand-lumina", name: "Lumina", slug: "lumina", isActive: true },
  { _id: "brand-audiox", name: "AudioX", slug: "audiox", isActive: true },
  { _id: "brand-orbit", name: "Orbit", slug: "orbit", isActive: true },
  { _id: "brand-circle", name: "Circle", slug: "circle", isActive: true },
  { _id: "brand-step", name: "Step", slug: "step", isActive: true },
  { _id: "brand-zenith", name: "Zenith", slug: "zenith", isActive: true },
  { _id: "brand-vera", name: "Vera", slug: "vera", isActive: true },
];

const productsRaw = [
  // Fashion Products
  {
    _id: "prd-17",
    title:
      "Premium Cotton Oversize Comfort Fit Unisex T-Shirt with Reinforced Neckline and Breathable Fabric Technology for All Seasons",
    description:
      "Experience the ultimate comfort with our Premium Cotton Oversize Comfort Fit Unisex T-Shirt. Crafted from 100% sustainable organic cotton, this t-shirt features a reinforced neckline that maintains its shape even after multiple washes. The breathable fabric technology ensures you stay cool during summer and warm during winter. Designed with a modern minimalist aesthetic, it fits perfectly into any wardrobe. Available in a variety of colors, each treated with eco-friendly dyes to prevent fading. Perfect for casual outings, lounging at home, or layering under a jacket for a more sophisticated look. Join the revolution of comfort and style today with Circle's signature collection.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=900&q=80",
    ],
    brand: "circle",
    category: "men",
    price: 349.99,
    salePrice: 299.99,
    totalStock: 50,
    averageReview: 4.8,
    numReviews: 124,
    salesCount: 890,
    createdAt: "2026-04-01T10:00:00.000Z",
    technicalSpecs: [
      { key: "Material", value: "100% Sustainable Organic Cotton" },
      { key: "Dimensions", value: "Available in XS-3XL Sizes" },
      { key: "Weight", value: "220 GSM Heavyweight Fabric" },
      { key: "Fit", value: "Relaxed Oversize Silhouette" },
      { key: "Neckline", value: "Double-stitched Ribbed Crew Neck" },
      { key: "Sleeve Length", value: "Half Sleeves" },
      {
        key: "Washing Instructions",
        value: "Machine wash cold, tumble dry low",
      },
      { key: "Country of Origin", value: "Turkey" },
    ],
    highlights: [
      "Sustainable organic cotton",
      "Heavyweight 220 GSM fabric",
      "Reinforced double-stitched seams",
      "Eco-friendly non-fade dyes",
      "Modern unisex relaxed fit",
      "Breathable moisture-wicking technology",
    ],
    variantOptions: {
      size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
      color: ["#000000", "#FFFFFF", "#808080", "#0000FF", "#FF0000", "#008000"],
    },
  },
  {
    _id: "prd-18",
    title:
      "Pro Runner X1 Ultimate Performance Sneakers - Lightweight Breathable Mesh with Enhanced Arch Support and Carbon Fiber Plate",
    description:
      "Take your running to the next level with the Pro Runner X1 Ultimate Performance Sneakers. Designed for serious athletes, these sneakers feature a lightweight, breathable mesh upper that keeps your feet cool even during the most intense workouts. The high-rebound foam midsole, combined with a built-in carbon fiber plate, provides exceptional energy return and propels you forward with every stride. Enhanced arch support ensures stability and reduces fatigue over long distances. The durable rubber outsole offers superior grip on various surfaces, from city streets to track lanes. Whether you're training for a marathon or just enjoying a morning jog, the Pro Runner X1 delivers the perfect balance of comfort, speed, and durability.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&q=80",
    ],
    brand: "step",
    category: "shoes",
    price: 2499.99,
    salePrice: 1999.99,
    totalStock: 30,
    averageReview: 4.9,
    numReviews: 210,
    salesCount: 1500,
    createdAt: "2026-04-05T10:00:00.000Z",
    technicalSpecs: [
      {
        key: "Material",
        value: "Engineered Breathable Mesh & Synthetic Overlays",
      },
      {
        key: "Material",
        value: "Engineered Breathable Mesh & Synthetic Overlays",
      },
      {
        key: "Material",
        value: "Synthetic Overlays",
      },
      {
        key: "Material",
        value: "Engineered Breathable Mesh",
      },
      { key: "Weight", value: "280g (Size 42)" },
      { key: "Dimensions", value: "Fits True to Size" },
      {
        key: "Midsole",
        value: "Pro-Nitro High-Rebound Foam with Carbon Plate",
      },
      { key: "Outsole", value: "Multi-Surface High-Grip Rubber" },
      { key: "Arch Support", value: "TPU Dynamic Support Bridge" },
      { key: "Drop", value: "8mm (Heel: 32mm / Forefoot: 24mm)" },
      { key: "Lacing", value: "Speed-Lace Locking System" },
    ],
    highlights: [
      "Lightweight breathable mesh upper",
      "Integrated carbon fiber propulsion plate",
      "High-rebound foam for maximum energy return",
      "Durable all-surface traction outsole",
      "Enhanced ergonomic arch support",
      "Reflective elements for low-light visibility",
    ],
    variantOptions: {
      size: ["38", "39", "40", "41", "42", "43", "44"],
      color: ["#FF0000", "#000000", "#0000FF", "#00FF00", "#FFFF00"],
    },
  },
  {
    _id: "prd-19",
    title:
      "Classic Vintage Denim Jacket - Rugged Indigo Blue with Copper Hardware and Multiple Internal Storage Pockets",
    description:
      "The Classic Vintage Denim Jacket is a timeless piece designed for those who value both style and durability. Made from premium, heavy-duty 14oz denim, this jacket features a deep indigo blue wash that only looks better with age. The rugged construction is complemented by genuine copper hardware and reinforced stitching throughout. With multiple external chest pockets and hidden internal storage pockets, it offers plenty of space for your essentials. The relaxed yet structured fit makes it perfect for layering over a sweater or t-shirt. Whether you're heading to a concert or a casual weekend outing, this denim jacket is the ultimate versatile outer layer.",
    image:
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=900&q=80",
    ],
    brand: "circle",
    category: "men",
    price: 899.99,
    salePrice: 799.99,
    totalStock: 25,
    averageReview: 4.6,
    numReviews: 45,
    salesCount: 320,
    createdAt: "2026-04-10T10:00:00.000Z",
    technicalSpecs: [
      { key: "Material", value: "14oz Heavyweight Premium Denim" },
      { key: "Hardware", value: "Custom Copper Buttons & Rivets" },
      { key: "Fit", value: "Structured Classic Fit" },
      { key: "Pockets", value: "4 External, 2 Internal Hidden" },
      { key: "Wash", value: "Deep Indigo Vintage Stone Wash" },
      { key: "Lining", value: "Unlined for Breathability" },
    ],
    highlights: [
      "Heavy-duty 14oz premium denim",
      "Authentic copper button closures",
      "Multiple reinforced storage pockets",
      "Timeless vintage indigo wash",
      "Durable double-needle stitching",
      "Perfect for year-round layering",
    ],
    variantOptions: {
      size: ["S", "M", "L", "XL"],
      color: ["#0000FF", "#000000", "#808080"],
    },
  },
  {
    _id: "prd-20",
    title:
      "Summer Flowy Boho-Style Dress - Lightweight Floral Viscose with Adjustable Waist and Ruffle Hem Detail",
    description:
      "Embrace the sunshine with our Summer Flowy Boho-Style Dress. This elegant piece is crafted from premium, lightweight viscose fabric that offers exceptional breathability and comfort on hot summer days. The beautiful floral pattern is inspired by Mediterranean gardens, adding a touch of romance to your look. Featuring an adjustable drawstring waist, it allows for a customized fit that flatters any silhouette. The delicate ruffle hem adds a playful movement to every step. Whether you're attending a beach wedding, a garden party, or simply enjoying a casual stroll, this dress is the perfect choice for effortless elegance. Pair it with sandals or heels for a versatile look that transitions from day to night.",
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=900&q=80",
    ],
    brand: "step",
    category: "women",
    price: 549.99,
    salePrice: 449.99,
    totalStock: 40,
    averageReview: 4.9,
    numReviews: 89,
    salesCount: 540,
    createdAt: "2026-04-12T10:00:00.000Z",
    technicalSpecs: [
      { key: "Material", value: "100% Breathable Eco-Viscose" },
      { key: "Pattern", value: "Hand-Illustrated Mediterranean Floral" },
      { key: "Fit", value: "Adjustable Wrap-Around Style" },
      { key: "Length", value: "Midi Length (approx. 115cm)" },
      { key: "Hem", value: "Tiered Ruffle Hem Detail" },
      { key: "Care", value: "Gentle Hand Wash Recommended" },
    ],
    highlights: [
      "Ultra-lightweight and breathable fabric",
      "Elegant boho-inspired floral design",
      "Adjustable waist for a personalized fit",
      "Playful ruffle hem for extra movement",
      "Versatile style for day or evening",
      "Eco-friendly viscose material",
    ],
    variantOptions: {
      size: ["XS", "S", "M", "L", "XL"],
      color: ["#FF0000", "#FFFF00", "#0000FF"],
    },
  },
  {
    _id: "prd-21",
    title:
      "Sport Compression Leggings Pro - High-Waisted Seamless Design with Moisture-Wicking and Squat-Proof Technology",
    description:
      "Achieve your fitness goals in style with the Sport Compression Leggings Pro. These high-performance leggings are engineered with advanced compression technology to support your muscles and improve circulation during intense workouts. The seamless design prevents chafing and provides a second-skin feel, while the moisture-wicking fabric keeps you dry and comfortable. Designed with a high-waistband for maximum support and a flattering fit, these leggings are guaranteed to be 100% squat-proof. Whether you're lifting weights, practicing yoga, or going for a run, the Sport Compression Leggings Pro offer the durability and flexibility you need to perform at your best.",
    image:
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=900&q=80",
    ],
    brand: "circle",
    category: "women",
    price: 399.99,
    salePrice: 349.99,
    totalStock: 60,
    averageReview: 4.7,
    numReviews: 156,
    salesCount: 1100,
    createdAt: "2026-04-15T10:00:00.000Z",
    technicalSpecs: [
      { key: "Material", value: "85% Polyester, 15% Spandex Blend" },
      { key: "Construction", value: "Seamless 4-Way Stretch Fabric" },
      { key: "Waistband", value: "Reinforced High-Waist Support" },
      { key: "Technology", value: "Dry-Fit Moisture-Wicking" },
      { key: "Opacity", value: "Guaranteed Squat-Proof (Non-See-Through)" },
      { key: "Compression", value: "Medium-Impact Zonal Support" },
    ],
    highlights: [
      "Advanced muscle-supporting compression",
      "Seamless design for ultimate comfort",
      "Moisture-wicking fabric keeps you dry",
      "100% squat-proof high-waist design",
      "Flattering second-skin aerodynamic fit",
      "Durable and stretch-resistant material",
    ],
    variantOptions: {
      size: ["XS", "S", "M", "L", "XL", "XXL"],
      color: ["#000000", "#808080", "#000080", "#800080"],
    },
  },
  {
    _id: "prd-22",
    title: "Minimalist Leather Backpack",
    description:
      "A stylish and water-resistant vegan leather backpack suitable for daily use.",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=80",
    ],
    brand: "step",
    category: "women",
    price: 1299.99,
    salePrice: 1099.99,
    totalStock: 15,
    averageReview: 4.8,
    numReviews: 62,
    salesCount: 180,
    createdAt: "2026-04-18T10:00:00.000Z",
    technicalSpecs: [
      { key: "Material", value: "Vegan Leather" },
      { key: "Capacity", value: "15 Liters" },
    ],
    variantOptions: {
      color: ["#000000", "#8B4513"], // Black, SaddleBrown
    },
  },
  {
    _id: "prd-23",
    title: "Polarized Retro Sunglasses",
    description:
      "Classic sunglasses with UV400 protection and a lightweight frame.",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&q=80",
    ],
    brand: "circle",
    category: "women",
    price: 649.99,
    salePrice: 499.99,
    totalStock: 35,
    averageReview: 4.5,
    numReviews: 94,
    salesCount: 410,
    createdAt: "2026-04-20T10:00:00.000Z",
    technicalSpecs: [
      { key: "Lens", value: "Polarized UV400" },
      { key: "Frame", value: "Metal Alloy" },
    ],
    variantOptions: {
      color: ["#000000", "#FFD700"], // Black, Gold
    },
  },
  {
    _id: "prd-24",
    title:
      "Elegant Silk Floral Scarf - Hand-Rolled Edges and Vibrant Natural Dyes",
    description:
      "Add a touch of sophistication to your outfit with our Elegant Silk Floral Scarf. Made from 100% pure mulberry silk, this scarf features hand-rolled edges for a premium finish. The vibrant floral pattern is created using traditional natural dyes, ensuring long-lasting color and a soft feel against the skin. Perfect for draping over your shoulders or tying around your neck, it's a versatile accessory for any season.",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&q=80",
    ],
    brand: "circle",
    category: "women",
    price: 249.99,
    salePrice: 199.99,
    totalStock: 45,
    averageReview: 4.7,
    numReviews: 32,
    salesCount: 150,
    createdAt: "2026-04-22T10:00:00.000Z",
    technicalSpecs: [
      { key: "Material", value: "100% Pure Mulberry Silk" },
      { key: "Dimensions", value: "90cm x 90cm" },
    ],
  },
  {
    _id: "prd-25",
    title:
      "Classic Wool Overcoat - Tailored Fit with Sustainable Wool Blend and Internal Quilting",
    description:
      "Stay warm and stylish with our Classic Wool Overcoat. This tailored-fit coat is crafted from a sustainable wool blend, providing excellent insulation without the weight. Featuring a sleek minimalist design, it includes a notched lapel, three-button closure, and deep side pockets. The internal quilting adds an extra layer of warmth, making it ideal for the coldest months. A timeless piece for the modern woman.",
    image:
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=900&q=80",
    ],
    brand: "step",
    category: "men",
    price: 2999.99,
    salePrice: 2499.99,
    totalStock: 20,
    averageReview: 4.9,
    numReviews: 58,
    salesCount: 120,
    createdAt: "2026-04-25T10:00:00.000Z",
    technicalSpecs: [
      { key: "Material", value: "70% Recycled Wool, 30% Polyamide" },
      { key: "Fit", value: "Tailored Slim Fit" },
    ],
  },
  {
    _id: "prd-26",
    title:
      "Urban Denim Shirt Jacket - Relaxed Fit with Washed Cotton and Utility Pockets",
    description:
      "A versatile shirt jacket designed for daily wear with a structured yet soft feel.",
    image:
      "https://images.unsplash.com/photo-1520367745676-81f5d8d3f6f9?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1520367745676-81f5d8d3f6f9?w=900&q=80",
    ],
    brand: "circle",
    category: "men",
    price: 1199.99,
    salePrice: 999.99,
    totalStock: 38,
    averageReview: 4.6,
    numReviews: 42,
    salesCount: 205,
    createdAt: "2026-04-26T10:00:00.000Z",
    technicalSpecs: [
      { key: "Material", value: "100% Washed Cotton" },
      { key: "Fit", value: "Relaxed Utility Fit" },
    ],
  },
  {
    _id: "prd-27",
    title:
      "Performance Chino Pants - Stretch Fabric with Tapered Leg and Flex Waistband",
    description:
      "Smart-casual chino trousers with breathable stretch fabric and day-long comfort.",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=900&q=80",
    ],
    brand: "step",
    category: "men",
    price: 899.99,
    salePrice: 749.99,
    totalStock: 52,
    averageReview: 4.7,
    numReviews: 31,
    salesCount: 188,
    createdAt: "2026-04-27T10:00:00.000Z",
    technicalSpecs: [
      { key: "Material", value: "97% Cotton, 3% Elastane" },
      { key: "Fit", value: "Tapered Fit" },
    ],
  },
  {
    _id: "prd-28",
    title:
      "Minimal Crewneck Knit Sweater - Lightweight Merino Blend for Everyday Layering",
    description:
      "A breathable merino-blend knit sweater that works from office to weekend.",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=900&q=80",
    ],
    brand: "vera",
    category: "men",
    price: 999.99,
    salePrice: 829.99,
    totalStock: 44,
    averageReview: 4.5,
    numReviews: 22,
    salesCount: 141,
    createdAt: "2026-04-28T10:00:00.000Z",
    technicalSpecs: [
      { key: "Material", value: "Merino Wool Blend" },
      { key: "Neckline", value: "Classic Crewneck" },
    ],
  },
  {
    _id: "prd-29",
    title:
      "City Runner Sneakers - Cushioned Midsole with Breathable Mesh Upper",
    description:
      "Modern lifestyle sneakers built with soft cushioning and durable traction grip.",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&q=80",
    ],
    brand: "zenith",
    category: "men",
    price: 1799.99,
    salePrice: 1499.99,
    totalStock: 36,
    averageReview: 4.8,
    numReviews: 47,
    salesCount: 266,
    createdAt: "2026-04-29T10:00:00.000Z",
    technicalSpecs: [
      { key: "Upper", value: "Engineered Breathable Mesh" },
      { key: "Midsole", value: "Responsive EVA Cushioning" },
    ],
  },
  {
    _id: "prd-30",
    title: "Flowy Satin Midi Skirt - High-Waist A-Line Cut with Soft Lining",
    description:
      "Elegant satin midi skirt designed for daily chic looks and special occasions.",
    image:
      "https://images.unsplash.com/photo-1583496661160-fb5886a13d77?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a13d77?w=900&q=80",
    ],
    brand: "lumina",
    category: "women",
    price: 799.99,
    salePrice: 669.99,
    totalStock: 48,
    averageReview: 4.6,
    numReviews: 27,
    salesCount: 159,
    createdAt: "2026-04-30T10:00:00.000Z",
    technicalSpecs: [
      { key: "Material", value: "Satin Blend" },
      { key: "Fit", value: "High-Waist A-Line" },
    ],
  },
  {
    _id: "prd-31",
    title:
      "Structured Blazer Jacket - Modern Fit with Lightweight Stretch Fabric",
    description:
      "Versatile blazer with a clean silhouette for office, city, and evening wear.",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&q=80",
    ],
    brand: "vera",
    category: "women",
    price: 1699.99,
    salePrice: 1399.99,
    totalStock: 34,
    averageReview: 4.8,
    numReviews: 39,
    salesCount: 201,
    createdAt: "2026-05-01T10:00:00.000Z",
    technicalSpecs: [
      { key: "Material", value: "Polyester-Viscose Stretch Blend" },
      { key: "Fit", value: "Modern Tailored Fit" },
    ],
  },

  // Electronics Products
  {
    _id: "prd-1",
    title:
      "Orbit Phone X Pro Max Ultra - 1TB Special Edition with AI Neural Processor and Quantum Display Technology",
    description:
      "The Orbit Phone X Pro Max Ultra represents the pinnacle of mobile engineering. Featuring the revolutionary AI Neural Processor, this device offers unprecedented speed and efficiency. The Quantum Display Technology provides a breathtaking visual experience with over 1 billion colors and 2000 nits of peak brightness. With a massive 1TB of storage, you never have to worry about running out of space for your high-resolution photos and 8K videos. The triple-lens camera system, powered by AI, captures stunning detail even in the lowest light conditions. Encased in a surgical-grade titanium frame, it is as durable as it is beautiful. Experience the future of communication today.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80",
    ],
    brand: "orbit",
    category: "phones",
    price: 88999,
    salePrice: 84999,
    totalStock: 19,
    averageReview: 4.9,
    numReviews: 1542,
    salesCount: 330,
    createdAt: "2026-03-01T10:00:00.000Z",
    technicalSpecs: [
      { key: "Screen", value: "6.9-inch Quantum OLED Pro" },
      { key: "Battery", value: "5500 mAh" },
      { key: "Processor", value: "Orbit A20 Bionic AI" },
      { key: "Storage", value: "1TB" },
      { key: "OS", value: "OrbitOS 18" },
      { key: "Dimensions", value: "163 x 77 x 8.2 mm" },
      { key: "Weight", value: "235g" },
      { key: "Display", value: "6.9-inch Quantum OLED Pro, 120Hz LTPO" },
      {
        key: "Main Camera",
        value: "108MP (Wide) + 48MP (Ultra-Wide) + 48MP (Telephoto)",
      },
      { key: "Front Camera", value: "32MP TrueDepth AI Camera" },
      {
        key: "Connectivity",
        value: "5G (Sub-6GHz and mmWave), Wi-Fi 7, Bluetooth 5.4",
      },
      { key: "Water Resistance", value: "IP68 (up to 6m for 30 mins)" },
    ],
    highlights: [
      "Quantum Display Technology with 2000 nits",
      "Triple-lens AI powered camera system",
      "Surgical-grade titanium frame",
      "A20 Bionic AI Neural Processor",
      "Breathtaking 8K video recording",
      "All-day battery with 100W HyperCharge",
      "Advanced Face and Fingerprint Security",
    ],
    variantOptions: {
      color: ["#000000", "#C0C0C0", "#FFD700", "#1E3A5F"],
      storage: ["256GB", "512GB", "1TB"],
    },
  },
  {
    _id: "prd-2",
    title:
      "Orbit Phone Mini Compact Edition - 128GB with Cinematic Display and All-Day Battery Performance",
    description:
      "Don't let the size fool you. The Orbit Phone Mini Compact Edition packs professional-grade technology into a pocket-friendly design. Featuring a brilliant 6.1-inch Cinematic OLED display, it delivers vivid colors and deep blacks for an immersive viewing experience. The advanced dual-camera system allows you to capture stunning photos and 4K videos with ease. Powered by the efficient Orbit A18 chip, it handles multitasking effortlessly while ensuring all-day battery life. With 5G connectivity, high-quality stereo speakers, and a durable ceramic-shield front, the Orbit Phone Mini is the perfect companion for those who want power without the bulk.",
    image:
      "https://images.unsplash.com/photo-1512499617640-c2f999098c01?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1512499617640-c2f999098c01?w=900&q=80",
    ],
    brand: "orbit",
    category: "phones",
    price: 23999,
    salePrice: 21999,
    totalStock: 22,
    averageReview: 4.4,
    numReviews: 26,
    salesCount: 280,
    createdAt: "2026-03-03T10:00:00.000Z",
    technicalSpecs: [
      { key: "Display", value: "6.1-inch Super Retina XDR OLED" },
      { key: "Chipset", value: "Orbit A18 Bionic Chip" },
      { key: "Storage", value: "128GB NVMe" },
      { key: "Main Camera", value: "Dual 12MP System (Wide/Ultra-Wide)" },
      { key: "Video", value: "4K Dolby Vision HDR at 60fps" },
      { key: "Battery", value: "Up to 19 hours video playback" },
      { key: "Authentication", value: "Advanced Face ID Technology" },
      { key: "Durability", value: "Ceramic Shield Front, Glass Back" },
      { key: "Network", value: "Ultra-Fast 5G Connectivity" },
    ],
    highlights: [
      "Compact 6.1-inch OLED display",
      "Powerful A18 Bionic processor",
      "Advanced dual-camera system",
      "All-day battery performance",
      "Durable ceramic shield protection",
      "Lightweight and portable design",
    ],
  },
  {
    _id: "prd-3",
    title:
      "Novatek Phone Pro Elite - 512GB Cinematic Master Edition with Triple AI Camera System and Nano-Carbon Cooling",
    description:
      "Redefine photography with the Novatek Phone Pro Elite. This Cinematic Master Edition features a groundbreaking triple AI camera system, including a 50MP main sensor with enhanced optical image stabilization. Capture professional-grade portraits and breathtaking night shots with incredible detail. The innovative nano-carbon cooling system ensures the device stays cool even during intensive gaming or video editing sessions. The 6.7-inch Pro-Fluid AMOLED display offers a buttery-smooth 120Hz refresh rate, while the 512GB of internal storage provides vast space for all your high-quality content. Encased in a refined aerospace-grade aluminum body, the Novatek Phone Pro Elite is built for performance and durability.",
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=900&q=80",
    ],
    brand: "novatek",
    category: "phones",
    price: 35999,
    salePrice: 33999,
    totalStock: 15,
    averageReview: 4.6,
    numReviews: 33,
    salesCount: 265,
    createdAt: "2026-03-05T10:00:00.000Z",
    technicalSpecs: [
      { key: "Display", value: "6.7-inch Pro-Fluid AMOLED, 120Hz" },
      { key: "Main Camera", value: "Triple 50MP + 12MP + 12MP with AI" },
      { key: "Processor", value: "Novatek TurboX-9 Gen 2 (5nm)" },
      { key: "Storage", value: "512GB UFS 4.0 Storage" },
      { key: "RAM", value: "12GB High-Speed RAM" },
      { key: "Cooling", value: "Nano-Carbon Liquid Cooling Tech" },
      { key: "Battery", value: "5000 mAh with 80W TurboCharge" },
      { key: "Build", value: "Aerospace-Grade Aluminum Frame" },
    ],
    highlights: [
      "Cinematic Master AI camera system",
      "Pro-Fluid 120Hz AMOLED display",
      "High-capacity 512GB storage",
      "Efficient nano-carbon cooling",
      "Rapid 80W TurboCharge technology",
      "Durable aerospace aluminum build",
    ],
  },
  {
    _id: "prd-4",
    title: "Lumina Phone Neo",
    description: "Balanced performance and long battery life.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&q=80",
    ],
    brand: "lumina",
    category: "phones",
    price: 27999,
    salePrice: 25999,
    totalStock: 27,
    averageReview: 4.5,
    numReviews: 19,
    salesCount: 230,
    createdAt: "2026-03-07T10:00:00.000Z",
    technicalSpecs: [
      { key: "Screen", value: "6.7 inch OLED Super Retina XDR" },
      { key: "Battery", value: "5000 mAh with 45W Fast Charge" },
      { key: "Processor", value: "Novatek A16 Bionic (4nm)" },
      { key: "Storage", value: "256GB NVMe SSD" },
      { key: "OS", value: "NovaOS 17 Pro" },
      { key: "Dimensions", value: "160.8 x 78.1 x 7.65 mm" },
      { key: "Weight", value: "204 grams" },
      { key: "Rear Camera", value: "50MP Triple System with LiDAR" },
      { key: "Front Camera", value: "12MP TrueDepth" },
      { key: "Water Resistance", value: "IP68 (up to 6m for 30 mins)" },
    ],
  },
  {
    _id: "prd-5",
    title: "Novatek Phone Go",
    description: "Price-performance focused model.",
    image:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=900&q=80",
    ],
    brand: "novatek",
    category: "phones",
    price: 16999,
    salePrice: 15499,
    totalStock: 30,
    averageReview: 4.3,
    numReviews: 41,
    salesCount: 210,
    createdAt: "2026-03-09T10:00:00.000Z",
    technicalSpecs: [
      { key: "Display", value: "6.5 IPS" },
      { key: "RAM", value: "6 GB" },
    ],
  },
  {
    _id: "prd-6",
    title: "Orbit Phone Z",
    description: "Gaming and multimedia focused powerful phone.",
    image: "/bannar2.avif",
    images: ["/bannar2.avif"],
    brand: "orbit",
    category: "phones",
    price: 31999,
    salePrice: 29999,
    totalStock: 18,
    averageReview: 4.6,
    numReviews: 28,
    salesCount: 250,
    createdAt: "2026-03-10T10:00:00.000Z",
    technicalSpecs: [
      { key: "Display", value: "6.7 144Hz" },
      { key: "Processor", value: "3.1 GHz" },
    ],
  },
  {
    _id: "prd-7",
    title: "Lumina Phone Air",
    description: "Model with a thin and light body.",
    image:
      "https://images.unsplash.com/photo-1533228100845-08145b01de14?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1533228100845-08145b01de14?w=900&q=80",
    ],
    brand: "lumina",
    category: "phones",
    price: 21999,
    salePrice: 19999,
    totalStock: 26,
    averageReview: 4.2,
    numReviews: 17,
    salesCount: 198,
    createdAt: "2026-03-11T10:00:00.000Z",
    technicalSpecs: [
      { key: "Weight", value: "176 g" },
      { key: "Battery", value: "4700 mAh" },
    ],
  },
  {
    _id: "prd-8",
    title: "Orbit Phone Plus",
    description: "Large screen phone with fast charging.",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=900&q=80",
    ],
    brand: "orbit",
    category: "phones",
    price: 29999,
    salePrice: 28499,
    totalStock: 16,
    averageReview: 4.5,
    numReviews: 23,
    salesCount: 215,
    createdAt: "2026-03-12T10:00:00.000Z",
    technicalSpecs: [
      { key: "Charging", value: "67W fast charging" },
      { key: "Storage", value: "256 GB" },
    ],
  },
  {
    _id: "prd-9",
    title:
      "AudioX Wave Buds Pro - True Wireless Earbuds with Active Noise Cancellation and Spatial Audio Support",
    description:
      "Immerse yourself in pure sound with the AudioX Wave Buds Pro. These next-generation true wireless earbuds feature industry-leading Active Noise Cancellation (ANC) that blocks out unwanted background noise, allowing you to focus on your music or calls. With Spatial Audio support, you'll experience a theater-like surround sound experience wherever you go. The custom-designed high-excursion driver delivers deep, rich bass and crisp, clear highs. Designed for all-day comfort, the earbuds come with multiple sizes of soft silicone tips. With a total battery life of up to 30 hours with the charging case and IPX5 water resistance, the Wave Buds Pro are built to keep up with your active lifestyle.",
    image:
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=900&q=80",
    ],
    brand: "audiox",
    category: "audio-systems",
    price: 4499,
    salePrice: 3899,
    totalStock: 35,
    averageReview: 4.5,
    numReviews: 55,
    salesCount: 410,
    createdAt: "2026-01-05T10:00:00.000Z",
    technicalSpecs: [
      {
        key: "Audio Tech",
        value: "Active Noise Cancellation (ANC) & Transparency Mode",
      },
      { key: "Driver", value: "Custom High-Excursion AudioX Driver" },
      { key: "Bluetooth", value: "Version 5.3 with LE Audio Support" },
      {
        key: "Battery Life",
        value: "Up to 6 hours (buds) / 30 hours (with case)",
      },
      {
        key: "Charging",
        value: "Fast Charging (5 mins = 1 hour) & Wireless Support",
      },
      { key: "Microphones", value: "Triple-Mic Array with Beamforming" },
      { key: "Protection", value: "IPX5 Sweat and Water Resistant" },
      {
        key: "Features",
        value: "Personalized Spatial Audio with Head Tracking",
      },
    ],
    highlights: [
      "Advanced Active Noise Cancellation",
      "Immersive Spatial Audio support",
      "Up to 30 hours total battery life",
      "IPX5 water and sweat resistance",
      "Custom high-fidelity audio driver",
      "Crystal clear calls with beamforming",
    ],
    variantOptions: {
      color: ["#FFFFFF", "#000000", "#808080", "#1E3A5F"],
    },
  },
  {
    _id: "prd-10",
    title:
      "AudioX Bass Boom 500 Ultimate - 120W Portable Bluetooth Speaker with Deep Bass Enhancement and RGB Light Show",
    description:
      "Turn up the volume with the AudioX Bass Boom 500 Ultimate. This powerful portable speaker delivers a staggering 120W of pure audio power, featuring custom-tuned drivers that produce deep, bone-shaking bass and crystal-clear highs. The integrated RGB light show syncs perfectly with your music, creating a vibrant party atmosphere wherever you are. With its rugged, IPX7 waterproof design, you can take the Bass Boom 500 to the pool, the beach, or any outdoor adventure without worry. The long-lasting battery provides up to 24 hours of continuous playtime, and the built-in power bank allows you to charge your devices on the go. Experience music in a whole new light with AudioX.",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=900&q=80",
    ],
    brand: "audiox",
    category: "audio-systems",
    price: 5799,
    salePrice: 5199,
    totalStock: 21,
    averageReview: 4.6,
    numReviews: 44,
    salesCount: 260,
    createdAt: "2026-02-18T10:00:00.000Z",
    technicalSpecs: [
      { key: "Power Output", value: "120W Dynamic Power" },
      { key: "Drivers", value: "Dual Woofers + Dual Tweeters" },
      { key: "Bluetooth", value: "Version 5.2 with Multi-Connect" },
      { key: "Waterproof Rating", value: "IPX7 Submersible Design" },
      { key: "Battery Life", value: "Up to 24 Hours Playback" },
      { key: "Lighting", value: "Customizable Sync RGB Effects" },
      { key: "Extra Feature", value: "Built-in 8000mAh Power Bank" },
      { key: "Dimensions", value: "32 x 15 x 18 cm" },
    ],
    highlights: [
      "Massive 120W pure audio output",
      "Deep Bass Enhancement technology",
      "Immersive sync RGB light show",
      "IPX7 fully waterproof construction",
      "Up to 24 hours of party time",
      "Convenient built-in device charger",
    ],
  },
  {
    _id: "prd-11",
    title: "AudioX Studio Headset Pro",
    description: "Comfortable headset with detailed sound.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=80",
    ],
    brand: "audiox",
    category: "audio-systems",
    price: 6299,
    salePrice: 5699,
    totalStock: 16,
    averageReview: 4.7,
    numReviews: 36,
    salesCount: 190,
    createdAt: "2026-02-20T10:00:00.000Z",
    technicalSpecs: [
      { key: "Driver", value: "50 mm" },
      { key: "Working Time", value: "40 hours" },
    ],
  },
  {
    _id: "prd-12",
    title: "AudioX Home Theater Mini",
    description: "Compact 2.1 channel home sound system.",
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=900&q=80",
    ],
    brand: "audiox",
    category: "audio-systems",
    price: 11299,
    salePrice: 10299,
    totalStock: 9,
    averageReview: 4.5,
    numReviews: 16,
    salesCount: 98,
    createdAt: "2026-02-23T10:00:00.000Z",
    technicalSpecs: [
      { key: "Channel", value: "2.1" },
      { key: "Subwoofer", value: "Wireless" },
    ],
  },
  {
    _id: "prd-13",
    title: "AudioX Wave Buds Plus",
    description: "Next-generation true wireless earbuds.",
    image:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=900&q=80",
    ],
    brand: "audiox",
    category: "audio-systems",
    price: 5199,
    salePrice: 4699,
    totalStock: 28,
    averageReview: 4.5,
    numReviews: 41,
    salesCount: 275,
    createdAt: "2026-02-25T10:00:00.000Z",
    technicalSpecs: [
      { key: "ANC", value: "Hybrid" },
      { key: "Bluetooth", value: "5.3" },
    ],
  },
  {
    _id: "prd-14",
    title: "AudioX Gamer Speaker Duo",
    description: "Desktop speaker with RGB lighting.",
    image:
      "https://images.unsplash.com/photo-1558089687-f282ffcbc0d4?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1558089687-f282ffcbc0d4?w=900&q=80",
    ],
    brand: "audiox",
    category: "audio-systems",
    price: 3999,
    salePrice: 3499,
    totalStock: 30,
    averageReview: 4.4,
    numReviews: 25,
    salesCount: 145,
    createdAt: "2026-02-27T10:00:00.000Z",
    technicalSpecs: [
      { key: "Power", value: "60W" },
      { key: "Lighting", value: "RGB" },
    ],
  },
  {
    _id: "prd-16",
    title: "AudioX SoundBar S2",
    description: "Powerful soundbar for TV and movies.",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=900&q=80",
    ],
    brand: "audiox",
    category: "audio-systems",
    price: 9999,
    salePrice: 8999,
    totalStock: 11,
    averageReview: 4.5,
    numReviews: 18,
    salesCount: 132,
    createdAt: "2026-03-04T10:00:00.000Z",
    technicalSpecs: [
      { key: "Connection", value: "HDMI ARC" },
      { key: "Mode", value: "Movie/Music" },
    ],
  },

  // --- Home Appliances ---
  {
    _id: "prd-app-1",
    title:
      "Lumina FrostFree Pro Series Smart Refrigerator - 4 Door French Design with Dual Ice Maker and Internal Water Dispenser",
    description:
      "Upgrade your kitchen with the Lumina FrostFree Pro Series Smart Refrigerator. This state-of-the-art appliance features a 4-door French design, providing ample space and easy access to all your groceries. The dual ice maker ensures you never run out of ice, while the internal water dispenser offers clean, filtered water at the touch of a button. Powered by intelligent cooling technology, it maintains optimal temperature and humidity levels to keep your food fresher for longer. The energy-efficient compressor operates quietly and reduces your electricity bills. With built-in Wi-Fi, you can control and monitor your refrigerator from anywhere using the Lumina Smart app. Its sleek Inox finish is fingerprint-resistant, keeping your kitchen looking spotless.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=80",
    ],
    brand: "lumina",
    category: "refrigerators",
    price: 45999,
    salePrice: 42999,
    totalStock: 12,
    averageReview: 4.8,
    numReviews: 35,
    salesCount: 120,
    technicalSpecs: [
      { key: "Dimensions", value: "185 x 70 x 75 cm" },
      { key: "Capacity", value: "500 Liters (Fridge: 350L, Freezer: 150L)" },
      { key: "Energy Class", value: "A+++ (Global Efficiency Standard)" },
      { key: "Noise Level", value: "38 dB Ultra-Quiet Operation" },
      { key: "Weight", value: "115 kg" },
      { key: "Warranty", value: "10 Year Compressor Warranty" },
      { key: "Refrigerant", value: "R600a Eco-Friendly Gas" },
    ],
    highlights: [
      "Intelligent Cooling Technology",
      "Dual Ice Maker (Crushed/Cubed)",
      "Internal Water Dispenser",
      "Fingerprint Resistant Inox Finish",
      "Wi-Fi Connected Smart Monitoring",
      "Energy Efficient A+++ Rating",
      "Multi-Air Flow System for Even Cooling",
      "Spacious 4-Door French Design",
    ],
    variantOptions: {
      color: ["#C0C0C0", "#000000", "#FFFFFF"], // Silver, Black, White
    },
  },
  {
    _id: "prd-app-2",
    title:
      "Novatek EcoWash 9kg Pro - Smart Front-Loading Washing Machine with SteamCare and AI-Inverter Technology",
    description:
      "Keep your clothes looking new with the Novatek EcoWash 9kg Pro. This advanced front-loading washing machine features SteamCare technology, which deep-cleans fabrics and removes 99.9% of allergens and bacteria while reducing wrinkles. The AI-Inverter technology optimizes the drum movement and water usage based on the weight and type of laundry, ensuring superior cleaning results with maximum energy efficiency. With a spacious 9kg capacity, it can handle large loads with ease. The ultra-quiet operation makes it perfect for any home, even during the night. Featuring 14 different wash programs and a high-speed spin of 1400 RPM, the EcoWash Pro provides professional-level care for all your favorite garments.",
    image:
      "https://images.unsplash.com/photo-1582730147233-0df63bd1b232?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1582730147233-0df63bd1b232?w=900&q=80",
    ],
    brand: "novatek",
    category: "washing-machines",
    price: 18999,
    salePrice: 16999,
    totalStock: 15,
    averageReview: 4.7,
    numReviews: 42,
    salesCount: 85,
    technicalSpecs: [
      { key: "Load Capacity", value: "9 kg Front Load" },
      { key: "Spin Speed", value: "1400 RPM High Efficiency" },
      { key: "Technology", value: "AI Inverter & SteamCare" },
      { key: "Programs", value: "14 Specialized Wash Cycles" },
      { key: "Energy Rating", value: "A+++ Energy Saving" },
      { key: "Motor Type", value: "Digital Brushless Inverter" },
      { key: "Dimensions", value: "85 x 60 x 55 cm" },
      { key: "Display", value: "LED Smart Control Panel" },
    ],
    highlights: [
      "SteamCare removes 99.9% allergens",
      "Smart AI-Inverter fabric care",
      "Large 9kg capacity for family loads",
      "High-speed 1400 RPM spin cycles",
      "Ultra-quiet brushless motor",
      "Energy-efficient A+++ performance",
      "Modern touch LED control panel",
      "Reinforced tempered glass door",
    ],
    variantOptions: {
      color: ["#FFFFFF", "#808080"], // White, Silver
    },
  },
  {
    _id: "prd-app-3",
    title:
      "Orbit Cyclone V10 Digital Pro - Cordless Stick Vacuum with HEPA Filtration and 120AW Extreme Suction",
    description:
      "Experience effortless cleaning with the Orbit Cyclone V10 Digital Pro. This high-performance cordless stick vacuum is powered by a digital motor that generates an incredible 120AW of suction power, easily picking up fine dust and large debris from both carpets and hard floors. The advanced fully-sealed HEPA filtration system captures 99.99% of particles as small as 0.3 microns, ensuring cleaner air in your home. With a lightweight and ergonomic design, it easily converts to a handheld vacuum for cleaning stairs, cars, and upholstery. The long-lasting battery provides up to 60 minutes of fade-free suction in Eco mode. Includes multiple attachments for every cleaning task.",
    image:
      "https://images.unsplash.com/photo-1558317374-067df5f15430?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1558317374-067df5f15430?w=900&q=80",
    ],
    brand: "orbit",
    category: "vacuum-cleaners",
    price: 12499,
    salePrice: 10999,
    totalStock: 25,
    averageReview: 4.8,
    numReviews: 67,
    salesCount: 245,
    technicalSpecs: [
      { key: "Suction Power", value: "120 Air Watts (AW)" },
      { key: "Runtime", value: "Up to 60 Minutes (Eco Mode)" },
      { key: "Filtration", value: "Advanced HEPA (0.3 Microns)" },
      { key: "Bin Capacity", value: "0.76 Liters Easy-Empty" },
      { key: "Weight", value: "2.5 kg Lightweight Design" },
      { key: "Motor", value: "Orbit Digital V10 (125,000 RPM)" },
      { key: "Charging Time", value: "3.5 Hours Full Charge" },
    ],
    highlights: [
      "Powerful 120AW digital suction",
      "Fully-sealed HEPA filtration system",
      "Versatile cordless stick design",
      "Up to 60 minutes fade-free runtime",
      "Large easy-to-empty dust bin",
      "Includes specialized motorhead tools",
    ],
  },
  {
    _id: "prd-app-4",
    title:
      "AudioX Barista One Ultimate - Professional Grade Espresso Machine with Integrated Precision Grinder",
    description:
      "Bring the coffee house experience home with the AudioX Barista One Ultimate. This professional-grade espresso machine is designed for true coffee enthusiasts. The integrated precision conical burr grinder delivers the right amount of freshly ground coffee directly into the portafilter for your preferred taste with any roast of bean. With a high-pressure 15-bar pump and digital temperature control (PID), it ensures optimal espresso extraction for a rich and aromatic flavor. The powerful steam wand allows you to hand-texture micro-foam milk that enhances flavor and enables the creation of latte art. Crafted from durable stainless steel, it's as beautiful as it is functional.",
    image:
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=900&q=80",
    ],
    brand: "audiox",
    category: "coffee-machines",
    price: 8999,
    salePrice: 7999,
    totalStock: 10,
    averageReview: 4.9,
    numReviews: 31,
    technicalSpecs: [
      { key: "Pump Pressure", value: "15 Bar Italian Pump" },
      { key: "Water Tank", value: "2.0 Liters Removable" },
      { key: "Grinder", value: "Integrated Conical Burr Grinder" },
      { key: "Temp Control", value: "Digital PID Temperature Control" },
      { key: "Steam Wand", value: "Professional 360-degree Swivel" },
      { key: "Material", value: "Brushed Stainless Steel" },
      { key: "Dimensions", value: "40 x 32 x 33 cm" },
    ],
    highlights: [
      "Integrated precision conical burr grinder",
      "High-pressure 15-bar Italian pump",
      "Digital PID temperature control",
      "Professional micro-foam steam wand",
      "Sleek brushed stainless steel design",
      "Large 2L removable water reservoir",
    ],
  },

  // --- Home & Life ---
  {
    _id: "prd-home-1",
    title:
      "Nordic Velvet Grand Sofa - Elegant 3-Seater with Premium Upholstery and Hand-Finished Solid Wood Frame",
    description:
      "Transform your living space with the Nordic Velvet Grand Sofa. This elegant 3-seater combines classic Scandinavian design with modern luxury. The premium velvet upholstery is incredibly soft to the touch and features a sophisticated sheen that adds depth to any room. Underneath the beautiful exterior lies a hand-finished frame made from solid oak, providing exceptional strength and durability. The high-density foam cushions are reinforced with pocket springs to ensure long-lasting comfort and support. Its minimalist silhouette and tapered wooden legs make it a perfect centerpiece for both traditional and contemporary interiors. Assembly is quick and easy, allowing you to enjoy your new piece of furniture in no time.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80",
    ],
    brand: "circle",
    category: "furniture",
    price: 12999,
    salePrice: 10999,
    totalStock: 5,
    averageReview: 4.8,
    numReviews: 12,
    technicalSpecs: [
      { key: "Dimensions", value: "W: 210cm x D: 90cm x H: 85cm" },
      { key: "Upholstery", value: "High-Grade Stain-Resistant Velvet" },
      { key: "Frame Material", value: "Solid Oak & Kiln-Dried Hardwood" },
      { key: "Cushioning", value: "High-Density Foam & Pocket Springs" },
      { key: "Seating Capacity", value: "3 Persons Comfortably" },
      { key: "Leg Finish", value: "Natural Oak Tapered Legs" },
    ],
    highlights: [
      "Luxurious premium velvet upholstery",
      "Strong hand-finished solid wood frame",
      "Superior comfort with pocket springs",
      "Elegant Nordic minimalist design",
      "Stain-resistant and easy-care fabric",
      "Tapered legs for a modern look",
    ],
    variantOptions: {
      color: ["#1E3A5F", "#1A1A1A", "#006400", "#4B0082"], // Navy, Black, DarkGreen, Indigo
    },
  },
  {
    _id: "prd-home-2",
    title: "Modern Floor Lamp",
    description: "Minimalist floor lamp with adjustable head and warm glow.",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=900&q=80",
    brand: "lumina",
    category: "lighting",
    price: 1499,
    salePrice: 1199,
    totalStock: 30,
    technicalSpecs: [
      { key: "Height", value: "160 cm" },
      { key: "Bulb", value: "E27 LED" },
    ],
  },

  // --- Cosmetics ---
  {
    _id: "prd-cos-1",
    title: "Lumina Silk Foundation",
    description: "Long-lasting full coverage foundation with SPF 15.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=80",
    brand: "lumina",
    category: "makeup",
    price: 449,
    salePrice: 399,
    totalStock: 100,
    variantOptions: {
      shade: ["Fair", "Natural", "Honey", "Deep"],
    },
  },
  {
    _id: "prd-cos-2",
    title: "Lumina Night Repair Serum",
    description: "Advanced night repair serum with hyaluronic acid.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=80",
    brand: "lumina",
    category: "skincare",
    price: 899,
    salePrice: 749,
    totalStock: 50,
  },

  // --- Supermarket ---
  {
    _id: "prd-sup-1",
    title: "Organic Olive Oil 1L",
    description: "Extra virgin cold-pressed organic olive oil.",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=900&q=80",
    brand: "circle",
    category: "basic-food",
    price: 189,
    salePrice: 169,
    totalStock: 200,
  },

  // --- Baby ---
  {
    _id: "prd-baby-1",
    title: "SoftTouch Eco Diapers",
    description: "Hypoallergenic and eco-friendly baby diapers.",
    image:
      "https://images.unsplash.com/photo-1522771935876-2497116a7a9e?w=900&q=80",
    brand: "circle",
    category: "baby-diapers",
    price: 349,
    salePrice: 299,
    totalStock: 150,
    variantOptions: {
      size: ["Newborn", "Mini", "Midi", "Maxi"],
    },
  },

  // --- Sports ---
  {
    _id: "prd-sport-1",
    title:
      "Orbit Adjustable Dumbbells Pro - Space-Saving Quick-Select Set (2kg to 24kg) with Non-Slip Grip",
    description:
      "Maximize your home gym potential with the Orbit Adjustable Dumbbells Pro. This innovative set replaces 15 pairs of traditional dumbbells, allowing you to quickly and easily adjust the weight from 2kg to 24kg with a simple turn of a dial. The high-quality steel plates are coated in a durable, noise-reducing material for a quieter workout. Featuring an ergonomic, non-slip handle, these dumbbells provide a secure and comfortable grip even during the most intense exercises. The compact design makes them perfect for small spaces, while the included storage trays keep your workout area organized. Whether you're a beginner or an experienced lifter, the Orbit Adjustable Dumbbells Pro offer the versatility you need for a full-body workout.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=80",
    ],
    brand: "orbit",
    category: "fitness-equipment",
    price: 4999,
    salePrice: 4499,
    totalStock: 10,
    averageReview: 4.9,
    numReviews: 84,
    technicalSpecs: [
      { key: "Weight Range", value: "2 kg to 24 kg per Dumbbell" },
      {
        key: "Weight Increments",
        value: "2, 3, 4, 5, 7, 8, 9, 10, 11, 14, 16, 18, 20, 23, 24 kg",
      },
      { key: "Material", value: "Powder-Coated Steel & Heavy-Duty Nylon" },
      { key: "Mechanism", value: "Quick-Select Dial System" },
      { key: "Handle", value: "Ergonomic Textured Non-Slip Grip" },
      { key: "Dimensions", value: "40 x 20 x 23 cm per tray" },
    ],
    highlights: [
      "Replaces 15 pairs of dumbbells",
      "Easy quick-select weight dial",
      "Durable powder-coated steel plates",
      "Ergonomic non-slip handle design",
      "Compact space-saving storage trays",
      "Versatile for full-body strength training",
    ],
  },

  // --- Travel ---
  {
    _id: "prd-travel-1",
    title:
      "Step Carry-On Pro Luggage - 20-Inch Lightweight Hardshell Suitcase with 360-Degree Silent Spinner Wheels",
    description:
      "Travel with ease and style with the Step Carry-On Pro Luggage. This 20-inch suitcase is engineered from premium aerospace-grade polycarbonate, making it exceptionally lightweight yet incredibly durable and impact-resistant. The hardshell exterior features a scratch-resistant matte finish that maintains its sleek look trip after trip. Four 360-degree silent spinner wheels provide smooth and effortless maneuverability through crowded airports. The integrated TSA-approved combination lock keeps your belongings secure while allowing for easy inspections. Inside, you'll find a spacious, fully-lined compartment with compression straps and multiple mesh pockets to keep your items organized and in place.",
    image:
      "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=900&q=80",
    ],
    brand: "step",
    category: "luggage",
    price: 2899,
    salePrice: 2499,
    totalStock: 20,
    averageReview: 4.7,
    numReviews: 45,
    technicalSpecs: [
      { key: "Size", value: "20-Inch International Carry-On" },
      { key: "Material", value: "Aerospace-Grade Polycarbonate Hardshell" },
      { key: "Weight", value: "2.8 kg Ultra-Lightweight" },
      { key: "Wheels", value: "4x 360-Degree Silent Spinner Wheels" },
      { key: "Lock", value: "Integrated TSA-Approved Combination Lock" },
      { key: "Handle", value: "3-Stage Telescopic Aluminum Handle" },
      { key: "Dimensions", value: "55 x 35 x 23 cm" },
    ],
    highlights: [
      "Lightweight impact-resistant hardshell",
      "Effortless 360-degree silent spinners",
      "Integrated secure TSA combination lock",
      "Spacious organized interior compartments",
      "Scratch-resistant modern matte finish",
      "Ergonomic telescopic handle system",
    ],
    variantOptions: {
      color: ["#0000FF", "#000000", "#FF0000", "#C0C0C0"], // Blue, Black, Red, Silver
    },
  },

  // --- Toys & Hobbies ---
  {
    _id: "prd-toy-1",
    title:
      "Eco-Friendly Master Wooden Train Set - 50-Piece Sustainable Collection with Magnetic Connections and Detailed Scenery",
    description:
      "Spark your child's imagination with the Eco-Friendly Master Wooden Train Set. This comprehensive 50-piece collection is crafted from 100% sustainable, FSC-certified beechwood, ensuring a safe and durable play experience. The set includes a variety of track pieces, bridges, buildings, trees, and figurines, allowing children to build their own miniature world. Each train car features strong magnetic connections for easy assembly and long-lasting play. The smooth, hand-finished edges and non-toxic, water-based paints make it a safe choice for children aged 3 and up. This timeless toy encourages creativity, fine motor skills, and hand-eye coordination while providing hours of screen-free entertainment.",
    image:
      "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=900&q=80",
    ],
    brand: "circle",
    category: "toys",
    price: 599,
    salePrice: 499,
    totalStock: 40,
    averageReview: 4.9,
    numReviews: 28,
    technicalSpecs: [
      { key: "Pieces", value: "50-Piece Comprehensive Set" },
      { key: "Material", value: "100% Sustainable FSC Beechwood" },
      { key: "Paint", value: "Non-Toxic Water-Based Paints" },
      { key: "Age Range", value: "3+ Years Old" },
      { key: "Safety", value: "EN71 and ASTM Certified" },
    ],
    highlights: [
      "Sustainable FSC-certified beechwood",
      "Safe non-toxic water-based finishes",
      "Strong magnetic car connections",
      "Promotes creativity and motor skills",
      "Timeless classic screen-free play",
      "Durable hand-finished construction",
    ],
  },
  {
    _id: "prd-toy-2",
    title:
      "Alpine Vista 1000-Piece Scenic Puzzle - High-Definition Art Print with Anti-Glare Finish and Precision-Fit Pieces",
    description:
      "Lose yourself in the beauty of the mountains with our Alpine Vista 1000-Piece Scenic Puzzle. This high-quality puzzle features a breathtaking high-definition photograph of a serene mountain landscape, printed on premium, heavy-duty cardboard. Each of the 1000 pieces is precision-cut to ensure a perfect fit with a satisfying 'click'. The anti-glare linen finish reduces reflections, making it easier to see the fine details as you build. Completing this puzzle is not only a fun and relaxing activity but also a great way to improve focus and spatial reasoning. Once finished, it makes a stunning piece of wall art for your home or office. Includes a full-size reference poster.",
    image:
      "https://images.unsplash.com/photo-1585338927000-1c787b17eb5e?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1585338927000-1c787b17eb5e?w=900&q=80",
    ],
    brand: "circle",
    category: "puzzle",
    price: 249,
    salePrice: 199,
    totalStock: 100,
    averageReview: 4.7,
    numReviews: 56,
    technicalSpecs: [
      { key: "Piece Count", value: "1000 Precision-Cut Pieces" },
      { key: "Material", value: "Heavy-Duty Recycled Cardboard" },
      { key: "Finish", value: "Anti-Glare Linen Texture" },
      { key: "Completed Size", value: "70 x 50 cm" },
      { key: "Included", value: "Full-Size Reference Poster" },
    ],
    highlights: [
      "Breathtaking high-definition mountain art",
      "Precision-cut pieces for a perfect fit",
      "Anti-glare finish for better visibility",
      "Durable heavy-duty premium cardboard",
      "Relaxing and rewarding hobby activity",
      "Includes helpful reference poster",
    ],
  },

  // --- Books & Media ---
  {
    _id: "prd-book-1",
    title:
      "The Art of Modern Living: A Comprehensive Guide to Minimalism, Intentional Living, and Sustainable Design",
    description:
      "In 'The Art of Modern Living', renowned designer and lifestyle expert Elena Rossi provides a comprehensive roadmap for anyone seeking a more meaningful and organized life. This beautifully illustrated book explores the principles of minimalism, teaching you how to declutter your physical space and your mind to focus on what truly matters. From interior design tips that create a sense of calm to practical advice on sustainable consumption and intentional decision-making, this guide is packed with actionable insights. Whether you're living in a small apartment or a large family home, the strategies shared in these pages will help you create a sanctuary that reflects your values and supports your well-being. A must-read for the modern era.",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=900&q=80",
    brand: "circle",
    category: "books",
    price: 129,
    salePrice: 99,
    totalStock: 200,
  },

  // --- Automotive ---
  {
    _id: "prd-auto-1",
    title:
      "Orbit Premium All-Weather Car Floor Mats - Heavy-Duty Rubber Protection for Cars, SUVs, and Trucks (4-Piece Set)",
    description:
      "Protect your vehicle's interior from the elements with Orbit Premium All-Weather Car Floor Mats. This 4-piece set is manufactured from high-density, heavy-duty rubber that is designed to withstand extreme temperatures without cracking or warping. The deep-dish channels and raised edges are specifically engineered to trap water, mud, sand, and snow, keeping your carpets clean and dry. Featuring a custom-fit design that can be easily trimmed with scissors to fit most car, SUV, and truck models perfectly. The non-slip nibbed backing ensures the mats stay securely in place, providing safety and peace of mind while driving. Easy to clean—simply remove and hose down.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80",
    ],
    brand: "orbit",
    category: "car-accessories",
    price: 799,
    salePrice: 649,
    totalStock: 50,
    averageReview: 4.6,
    numReviews: 89,
    technicalSpecs: [
      { key: "Quantity", value: "4-Piece Complete Set (2 Front, 2 Rear)" },
      { key: "Material", value: "Eco-Friendly High-Density TPR Rubber" },
      { key: "Weatherproof", value: "Rated for -40°C to +80°C" },
      { key: "Safety", value: "Non-Slip Nibbed Anti-Skid Backing" },
      { key: "Fit", value: "Universal Trim-to-Fit Design" },
      { key: "Cleaning", value: "100% Washable & Hose-Off Ready" },
    ],
    highlights: [
      "Heavy-duty all-weather protection",
      "Deep channels trap mud and water",
      "Custom trim-to-fit universal design",
      "Durable high-density rubber material",
      "Secure non-slip anti-skid backing",
      "Easy to clean and maintain",
    ],
  },

  // --- Jewelry ---
  {
    _id: "prd-jewel-1",
    title:
      "Lumina 18K Solid Gold Minimalist Pendant Necklace - Hand-Crafted Fine Jewelry with Adjustable Chain",
    description:
      "Elevate your everyday style with the Lumina 18K Solid Gold Minimalist Pendant Necklace. This exquisite piece is hand-crafted from genuine 18K solid yellow gold, offering a timeless radiance that will never tarnish. The delicate minimalist pendant features a smooth, polished finish that catches the light beautifully from every angle. It comes with a matching 18K gold chain that is adjustable from 40cm to 45cm, allowing you to customize the length to suit your neckline. Perfect for layering with other necklaces or wearing alone for a subtle, sophisticated look. This necklace comes beautifully packaged in a luxury gift box, making it an ideal gift for a loved one or a special treat for yourself.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=80",
    ],
    brand: "lumina",
    category: "gold",
    price: 3499,
    salePrice: 2999,
    totalStock: 15,
    averageReview: 4.9,
    numReviews: 18,
    technicalSpecs: [
      { key: "Material", value: "Genuine 18K Solid Yellow Gold" },
      { key: "Chain Length", value: "Adjustable 40cm to 45cm" },
      { key: "Clasp", value: "Secure Lobster Claw Clasp" },
      { key: "Finish", value: "High-Polished Mirror Shine" },
      { key: "Pendant Size", value: "8mm Minimalist Sphere" },
      { key: "Weight", value: "Approx. 2.4g" },
    ],
    highlights: [
      "Genuine 18K solid yellow gold",
      "Hand-crafted minimalist design",
      "Adjustable chain for versatile fit",
      "Timeless high-polished mirror shine",
      "Hypoallergenic and skin-friendly",
      "Includes luxury gift packaging",
    ],
  },

  // --- Pets ---
  {
    _id: "prd-pet-1",
    title:
      "Circle Premium Grain-Free Adult Dog Food - High-Protein Salmon & Sweet Potato Formula with Omega Fatty Acids",
    description:
      "Give your canine companion the nutrition they deserve with Circle Premium Grain-Free Adult Dog Food. Our high-protein formula features real salmon as the primary ingredient, providing essential amino acids for strong muscles and a healthy heart. The grain-free recipe uses sweet potatoes as a highly digestible source of energy, making it ideal for dogs with sensitivities or allergies. Enriched with Omega-3 and Omega-6 fatty acids, it promotes a shiny coat and healthy skin. We've also included a blend of antioxidants, vitamins, and minerals to support a robust immune system. Free from artificial colors, flavors, and preservatives, this is a wholesome and delicious meal that dogs love.",
    image:
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=900&q=80",
    ],
    brand: "circle",
    category: "pet-food",
    price: 549,
    salePrice: 499,
    totalStock: 80,
    averageReview: 4.8,
    numReviews: 156,
    technicalSpecs: [
      { key: "Main Ingredient", value: "Real Deboned Salmon" },
      { key: "Formula", value: "100% Grain-Free & Gluten-Free" },
      { key: "Life Stage", value: "Formulated for Adult Dogs" },
      { key: "Weight", value: "12 kg Bulk Pack" },
      { key: "Nutrients", value: "Rich in Omega-3, Omega-6 & DHA" },
    ],
    highlights: [
      "Real salmon is the #1 ingredient",
      "Grain-free for sensitive stomachs",
      "Promotes shiny coat and skin",
      "No artificial colors or flavors",
      "Rich in essential vitamins/minerals",
      "High-protein for active muscles",
    ],
  },

  // --- Tools ---
  {
    _id: "prd-tool-1",
    title:
      "Orbit 100-Piece Ultimate Multi-Tool Set - Professional Home Repair Kit with Cordless Drill and Heavy-Duty Carry Case",
    description:
      "Be prepared for any home project with the Orbit 100-Piece Ultimate Multi-Tool Set. This comprehensive kit includes every essential tool you need for furniture assembly, basic repairs, and DIY projects. The centerpiece is a powerful 18V cordless drill with a variable speed trigger and an integrated LED work light. The set also features a wide array of hand tools, including a forged steel hammer, adjustable wrenches, precision screwdrivers, and a complete socket set. Each tool is manufactured from high-quality heat-treated steel for maximum strength and corrosion resistance. Everything stays organized and portable in the included heavy-duty, blow-molded carry case, which is designed to withstand the rigors of the job site.",
    image:
      "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?w=900&q=80",
    ],
    brand: "orbit",
    category: "hand-tools",
    price: 1899,
    salePrice: 1599,
    totalStock: 30,
    averageReview: 4.7,
    numReviews: 52,
    technicalSpecs: [
      { key: "Total Pieces", value: "100-Piece Comprehensive Set" },
      { key: "Power Tool", value: "18V Cordless Drill with Battery" },
      { key: "Material", value: "Heat-Treated Chrome Vanadium Steel" },
      { key: "Case", value: "Heavy-Duty Blow-Molded Storage Case" },
      { key: "Drive Size", value: "1/4 inch and 3/8 inch Sockets" },
      { key: "Grip", value: "Ergonomic Soft-Grip Comfort Handles" },
    ],
    highlights: [
      "Includes powerful 18V cordless drill",
      "100 essential tools for home DIY",
      "Durable heat-treated steel construction",
      "Heavy-duty organized carry case",
      "Ergonomic comfortable soft-grips",
      "Comprehensive socket and bit set",
    ],
  },
];

const defaultHighlights = {
  phones: ["Advanced performance", "Clear display", "Long battery life"],
  "audio-systems": ["Balanced sound", "Strong connection", "All-day use"],
  women: ["Premium fabric", "Comfortable fit", "Modern design"],
  shoes: ["Breathable", "Shock absorption", "Lightweight"],
};

const defaultDelivery = {
  mainCities: ["Riyadh", "Jeddah"],
  otherCities: ["Dammam", "Khobar", "Taif"],
  etaMainDays: 1,
  etaOtherDays: 5,
};

const defaultReturns = {
  message:
    "Exchange/return options are provided based on product eligibility. Details on the order page.",
};

const defaultWarranty = {
  message:
    "Warranty coverage varies by product category. Support is provided through authorized service centers.",
};

const defaultInTheBox = ["Product", "User manual", "Warranty card"];

const defaultColors = {
  phones: ["Black", "Blue", "Silver"],
  "audio-systems": ["Black", "Gray"],
  women: ["Black", "White", "Navy"],
  shoes: ["Red", "Black", "Blue"],
};

const enrichProduct = (p) => {
  const category = p?.category;

  return {
    ...p,
    highlights: Array.isArray(p.highlights)
      ? p.highlights
      : defaultHighlights[category] || defaultHighlights.phones,
    delivery: p.delivery || { ...defaultDelivery },
    returns: p.returns || { ...defaultReturns },
    warranty: p.warranty || { ...defaultWarranty },
    inTheBox: Array.isArray(p.inTheBox) ? p.inTheBox : defaultInTheBox,
  };
};

const products = productsRaw.map(enrichProduct);

const featureImages = [
  {
    _id: "feat-1",
    title: "New Season Fashion",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&q=80",
    link: "/shop/listing?category=women",
  },
  {
    _id: "feat-2",
    title: "Phone Campaigns",
    image: "/banner1.png",
    link: "/shop/listing?category=phones",
  },
  {
    _id: "feat-3",
    title: "AudioX Campaigns",
    image: "/banner1.png",
    link: "/shop/listing?brand=audiox",
  },
];

const sideBanners = [
  {
    _id: "side-1",
    title: "Phone Deals",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80",
    link: "/shop/listing?category=phones",
  },
  {
    _id: "side-2",
    title: "Sport & Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=80",
    link: "/shop/listing?category=shoes",
  },
  {
    _id: "side-3",
    title: "New Arrivals",
    image:
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=900&q=80",
    link: "/shop/listing?sortBy=createdAt-desc",
  },
];

const homeSections = [
  {
    _id: "hs-1",
    title: "BEST SELLING",
    contentType: "BEST_SELLING",
    contentValue: "",
    itemLimit: 20,
    isActive: true,
  },
  {
    _id: "hs-2",
    title: "NEW FASHION ARRIVALS",
    contentType: "CATEGORY",
    contentValue: "women",
    itemLimit: 22,
    isActive: true,
  },
  {
    _id: "hs-3",
    title: "MAN SPECIAL OFFERS",
    contentType: "CATEGORY",
    contentValue: "men",
    itemLimit: 20,
    isActive: true,
  },
];

const productReviews = {
  "prd-1": [
    {
      user: { name: "Ahmet Y." },
      rating: 5,
      comment:
        "The screen is very clear and the performance is really good. Great for the price.",
      createdAt: "2026-03-18T12:00:00.000Z",
      verified: true,
    },
    {
      user: { name: "Elif K." },
      rating: 4,
      comment: "Overall satisfied. The camera is very good in the light.",
      createdAt: "2026-03-22T09:30:00.000Z",
      verified: false,
    },
  ],
  "prd-2": [
    {
      user: { name: "Mehmet A." },
      rating: 4,
      comment: "Compact phone, comfortable in hand. Battery life is not bad.",
      createdAt: "2026-03-25T14:20:00.000Z",
      verified: true,
    },
  ],
  "prd-9": [
    {
      user: { name: "Ayse S." },
      rating: 5,
      comment: "Sound quality is very good, bass is clean and balanced.",
      createdAt: "2026-02-28T10:10:00.000Z",
      verified: true,
    },
    {
      user: { name: "Can T." },
      rating: 4,
      comment: "Connection is stable, easy to use. The design is also stylish.",
      createdAt: "2026-03-02T16:45:00.000Z",
      verified: false,
    },
  ],
  "prd-17": [
    {
      user: { name: "Zeynep B." },
      rating: 5,
      comment:
        "Exactly the fit I wanted! The fabric is very high quality and the oversize look is perfect.",
      createdAt: "2026-04-10T12:00:00.000Z",
      verified: true,
    },
  ],
  "prd-18": [
    {
      user: { name: "Caner T." },
      rating: 5,
      comment:
        "Great for running, very light, and the sole is extremely comfortable.",
      createdAt: "2026-04-12T14:30:00.000Z",
      verified: true,
    },
  ],
};

const quickExploreItems = [
  {
    title: "Phones",
    image: "/bannerx/categori.jpg",
    link: "/shop/listing?category=phones",
  },
  {
    title: "Sound",
    image: "/bannerx/categori1.jpg",
    link: "/shop/listing?category=audio-systems",
  },
  {
    title: "Orbit",
    image: "/bannerx/categori2.jpg",
    link: "/shop/listing?brand=orbit",
  },
  {
    title: "AudioX",
    image: "/bannerx/categori3.jpg",
    link: "/shop/listing?brand=audiox",
  },
  {
    title: "Lumina",
    image: "/bannerx/categori4.jpg",
    link: "/shop/listing?brand=lumina",
  },
  {
    title: "Novatek",
    image: "/bannerx/categori5.jpg",
    link: "/shop/listing?brand=novatek",
  },
  {
    title: "Gadgets",
    image: "/bannerx/categori6.jpg",
    link: "/shop/listing?category=accessories",
  },
  {
    title: "Deals",
    image: "/bannerx/categori7.jpg",
    link: "/shop/listing?category=deals",
  },
];

// Mapping for various home section subcategories
const homeSubcategoriesData = {
  "New Fashion Arrivals": [
    {
      title: "Blouse",
      image: "/sub_woman/1.avif",
      link: "/shop/listing?category=blouse",
    },
    {
      title: "Dress",
      image: "/sub_woman/2.avif",
      link: "/shop/listing?category=dress",
    },
    {
      title: "Sportswear",
      image: "/sub_woman/3.avif",
      link: "/shop/listing?category=sportswear",
    },
    {
      title: "Jewelry",
      image: "/sub_woman/4.avif",
      link: "/shop/listing?category=jewelry",
    },
    {
      title: "Hair Clip",
      image: "/sub_woman/5.avif",
      link: "/shop/listing?category=hair-clip",
    },
    {
      title: "Bag",
      image: "/sub_woman/7.avif",
      link: "/shop/listing?category=bags",
    },
    {
      title: "All",
      image: "/sub_woman/6.avif",
      link: "/shop/listing?category=women-fashion",
    },
    {
      title: "Blouse",
      image: "/sub_woman/1.avif",
      link: "/shop/listing?category=blouse",
    },
  ],
  "Fashion for Men": [
    {
      title: "T-Shirt",
      image: "/bannerx/1.webp",
      link: "/shop/listing?category=t-shirt",
    },
    {
      title: "Pants",
      image: "/bannerx/2.webp",
      link: "/shop/listing?category=pants",
    },
    {
      title: "Jacket",
      image: "/bannerx/3.webp",
      link: "/shop/listing?category=jacket",
    },
    {
      title: "Shoes",
      image: "/bannerx/4.webp",
      link: "/shop/listing?category=men-shoes",
    },
    {
      title: "Watch",
      image: "/bannerx/5.webp",
      link: "/shop/listing?category=watches",
    },
    {
      title: "Sweatshirt",
      image: "/sub_man/7.avif",
      link: "/shop/listing?category=sweatshirt",
    },
    {
      title: "T-Shirt",
      image: "/bannerx/1.webp",
      link: "/shop/listing?category=t-shirt",
    },
  ],
  Electronics: [
    {
      title: "Laptop",
      image: "/Electronics/1.avif",
      link: "/shop/listing?category=laptop",
    },
    {
      title: "Phone",
      image: "/Electronics/2.avif",
      link: "/shop/listing?category=phones",
    },
    {
      title: "Tablet",
      image: "/Electronics/3.avif",
      link: "/shop/listing?category=tablet",
    },
    {
      title: "Headphones",
      image: "/Electronics/4.avif",
      link: "/shop/listing?category=headphones",
    },
    {
      title: "Kamera",
      image: "/Electronics/5.avif",
      link: "/shop/listing?category=cameras",
    },
    {
      title: "Smart Watch",
      image: "/Electronics/7.avif",
      link: "/shop/listing?category=smart-watches",
    },
    {
      title: "All",
      image: "/Electronics/6.avif",
      link: "/shop/listing?category=electronics",
    },
    {
      title: "Laptop",
      image: "/Electronics/1.avif",
      link: "/shop/listing?category=laptop",
    },
  ],
  "Beauty & Care": [
    {
      title: "Makeup",
      image: "/Beauty&Care/1.avif",
      link: "/shop/listing?category=makeup",
    },
    {
      title: "Skincare",
      image: "/Beauty&Care/2.avif",
      link: "/shop/listing?category=skincare",
    },
    {
      title: "Hair Care",
      image: "/Beauty&Care/3.avif",
      link: "/shop/listing?category=hair-care",
    },
    {
      title: "Perfume",
      image: "/Beauty&Care/4.avif",
      link: "/shop/listing?category=perfume",
    },
    {
      title: "Men's Care",
      image: "/Beauty&Care/5.avif",
      link: "/shop/listing?category=men-beauty",
    },
    {
      title: "Shower Gel",
      image: "/Beauty&Care/7.avif",
      link: "/shop/listing?category=shower-gel",
    },
    {
      title: "All",
      image: "/Beauty&Care/6.avif",
      link: "/shop/listing?category=beauty",
    },
    {
      title: "Makeup",
      image: "/Beauty&Care/1.avif",
      link: "/shop/listing?category=makeup",
    },
  ],
  Cosmetics: [
    {
      title: "Lipstick",
      image: "/Cosmetics/1.avif",
      link: "/shop/listing?category=lipstick",
    },
    {
      title: "Eyeshadow Palette",
      image: "/Cosmetics/2.avif",
      link: "/shop/listing?category=makeup",
    },
    {
      title: "Sunscreen",
      image: "/Cosmetics/3.avif",
      link: "/shop/listing?category=skincare",
    },
    {
      title: "Nail Polish",
      image: "/Cosmetics/4.avif",
      link: "/shop/listing?category=nail-polish",
    },
    {
      title: "Mascara",
      image: "/Cosmetics/5.avif",
      link: "/shop/listing?category=mascara",
    },
    {
      title: "Foundation",
      image: "/Cosmetics/7.avif",
      link: "/shop/listing?category=foundation",
    },
    {
      title: "Lipstick",
      image: "/Cosmetics/1.avif",
      link: "/shop/listing?category=lipstick",
    },
  ],
  "Supermarket & Food": [
    {
      title: "Snacks",
      image: "/Supermarket&Food/1.avif",
      link: "/shop/listing?category=snacks",
    },
    {
      title: "Beverage",
      image: "/Supermarket&Food/2.avif",
      link: "/shop/listing?category=beverages",
    },
    {
      title: "Breakfast",
      image: "/Supermarket&Food/3.avif",
      link: "/shop/listing?category=breakfast",
    },
    {
      title: "Cleaning",
      image: "/Supermarket&Food/4.avif",
      link: "/shop/listing?category=cleaning",
    },
    {
      title: "Dairy Products",
      image: "/Supermarket&Food/5.avif",
      link: "/shop/listing?category=market",
    },
    {
      title: "Frozen Food",
      image: "/Supermarket&Food/7.avif",
      link: "/shop/listing?category=frozen-food",
    },
    {
      title: "Snacks",
      image: "/Supermarket&Food/1.avif",
      link: "/shop/listing?category=snacks",
    },
  ],
  "Men's Special Offers": [
    {
      title: "Shirt",
      image: "/sub_man/1.avif",
      link: "/shop/listing?category=shirts",
    },
    {
      title: "Pants",
      image: "/sub_man/2.avif",
      link: "/shop/listing?category=pants",
    },
    {
      title: "Jacket",
      image: "/sub_man/3.avif",
      link: "/shop/listing?category=jacket",
    },
    {
      title: "T-Shirt",
      image: "/sub_man/4.avif",
      link: "/shop/listing?category=t-shirt",
    },
    {
      title: "Shoes",
      image: "/sub_man/5.avif",
      link: "/shop/listing?category=mens-shoes",
    },
    {
      title: "Sweater",
      image: "/sub_man/7.avif",
      link: "/shop/listing?category=sweaters",
    },
    {
      title: "Pants",
      image: "/sub_man/2.avif",
      link: "/shop/listing?category=pants",
    },
  ],
};

export {
  brands,
  categories,
  featureImages,
  homeSections,
  productReviews,
  products,
  sideBanners,
  quickExploreItems,
  homeSubcategoriesData,
};
