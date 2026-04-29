const categories = [
  {
    _id: "cat-fashion",
    name: "Moda / Giyim",
    slug: "moda-giyim",
    icon: "tshirt",
    isActive: true,
    children: [
      { _id: "cat-fashion-women", name: "Kadın", slug: "kadin", isActive: true, children: [] },
      { _id: "cat-fashion-men", name: "Erkek", slug: "erkek", isActive: true, children: [] },
      { _id: "cat-fashion-kids", name: "Çocuk", slug: "cocuk", isActive: true, children: [] },
      { _id: "cat-fashion-shoes", name: "Ayakkabı", slug: "ayakkabi", isActive: true, children: [] },
      { _id: "cat-fashion-accessories", name: "Aksesuar", slug: "aksesuar", isActive: true, children: [] },
    ],
  },
  {
    _id: "cat-electronics",
    name: "Elektronik",
    slug: "elektronik",
    icon: "smartphone",
    isActive: true,
    children: [
      { _id: "cat-elec-phone", name: "Telefon & Aksesuar", slug: "telefon", isActive: true, children: [] },
      { _id: "cat-elec-laptop", name: "Bilgisayar / Laptop", slug: "bilgisayar", isActive: true, children: [] },
      { _id: "cat-elec-tablet", name: "Tablet", slug: "tablet", isActive: true, children: [] },
      { _id: "cat-elec-audio", name: "TV & Ses Sistemleri", slug: "ses-sistemleri", isActive: true, children: [] },
      { _id: "cat-elec-console", name: "Oyun Konsolları", slug: "oyun-konsollari", isActive: true, children: [] },
    ],
  },
  {
    _id: "cat-home",
    name: "Ev & Yaşam",
    slug: "ev-yasam",
    icon: "home",
    isActive: true,
    children: [
      { _id: "cat-home-furniture", name: "Mobilya", slug: "mobilya", isActive: true, children: [] },
      { _id: "cat-home-decor", name: "Dekorasyon", slug: "dekorasyon", isActive: true, children: [] },
      { _id: "cat-home-lighting", name: "Aydınlatma", slug: "aydinlatma", isActive: true, children: [] },
      { _id: "cat-home-textile", name: "Ev Tekstili", slug: "ev-tekstili", isActive: true, children: [] },
    ],
  },
  {
    _id: "cat-appliances",
    name: "Beyaz Eşya & Küçük Ev Aletleri",
    slug: "beyaz-esya",
    icon: "refrigerator",
    isActive: true,
    children: [
      { _id: "cat-app-fridge", name: "Buzdolabı", slug: "buzdolabi", isActive: true, children: [] },
      { _id: "cat-app-washer", name: "Çamaşır Makinesi", slug: "camasir-makinesi", isActive: true, children: [] },
      { _id: "cat-app-vacuum", name: "Süpürge", slug: "supurge", isActive: true, children: [] },
      { _id: "cat-app-coffee", name: "Kahve Makineleri", slug: "kahve-makineleri", isActive: true, children: [] },
    ],
  },
  {
    _id: "cat-cosmetics",
    name: "Kozmetik & Kişisel Bakım",
    slug: "kozmetik",
    icon: "sparkles",
    isActive: true,
    children: [
      { _id: "cat-cos-makeup", name: "Makyaj", slug: "makyaj", isActive: true, children: [] },
      { _id: "cat-cos-skincare", name: "Cilt Bakımı", slug: "cilt-bakimi", isActive: true, children: [] },
      { _id: "cat-cos-perfume", name: "Parfüm", slug: "parfum", isActive: true, children: [] },
      { _id: "cat-cos-hair", name: "Saç Bakımı", slug: "sac-bakimi", isActive: true, children: [] },
    ],
  },
  {
    _id: "cat-supermarket",
    name: "Süpermarket / Gıda",
    slug: "supermarket",
    icon: "shopping-basket",
    isActive: true,
    children: [
      { _id: "cat-sup-basic", name: "Temel Gıda", slug: "temel-gida", isActive: true, children: [] },
      { _id: "cat-sup-snacks", name: "Atıştırmalık", slug: "atistirmalik", isActive: true, children: [] },
      { _id: "cat-sup-drinks", name: "İçecekler", slug: "icecekler", isActive: true, children: [] },
      { _id: "cat-sup-organic", name: "Organik Ürünler", slug: "organik-urunler", isActive: true, children: [] },
    ],
  },
  {
    _id: "cat-baby",
    name: "Anne & Bebek",
    slug: "anne-bebek",
    icon: "baby",
    isActive: true,
    children: [
      { _id: "cat-baby-diaper", name: "Bebek Bezi", slug: "bebek-bezi", isActive: true, children: [] },
      { _id: "cat-baby-food", name: "Mama", slug: "mama", isActive: true, children: [] },
      { _id: "cat-baby-toy", name: "Oyuncak", slug: "oyuncak", isActive: true, children: [] },
      { _id: "cat-baby-clothes", name: "Bebek Giyim", slug: "bebek-giyim", isActive: true, children: [] },
    ],
  },
  {
    _id: "cat-toys",
    name: "Oyuncak & Hobi",
    slug: "oyuncak-hobi",
    icon: "puzzle",
    isActive: true,
    children: [
      { _id: "cat-toy-toys", name: "Oyuncaklar", slug: "oyuncaklar", isActive: true, children: [] },
      { _id: "cat-toy-puzzle", name: "Puzzle", slug: "puzzle", isActive: true, children: [] },
      { _id: "cat-toy-hobby", name: "Hobi Malzemeleri", slug: "hobi-malzemeleri", isActive: true, children: [] },
      { _id: "cat-toy-collection", name: "Koleksiyon Ürünleri", slug: "koleksiyon-urunleri", isActive: true, children: [] },
    ],
  },
  {
    _id: "cat-books",
    name: "Kitap, Müzik, Film",
    slug: "kitap-muzik-film",
    icon: "book",
    isActive: true,
    children: [
      { _id: "cat-book-books", name: "Kitaplar", slug: "kitaplar", isActive: true, children: [] },
      { _id: "cat-book-magazines", name: "Dergiler", slug: "dergiler", isActive: true, children: [] },
      { _id: "cat-book-vinyl", name: "Plak / CD", slug: "plak-cd", isActive: true, children: [] },
      { _id: "cat-book-media", name: "Film & Dizi İçerikleri", slug: "film-dizi", isActive: true, children: [] },
    ],
  },
  {
    _id: "cat-auto",
    name: "Otomotiv",
    slug: "otomotiv",
    icon: "car",
    isActive: true,
    children: [
      { _id: "cat-auto-acc", name: "Araç Aksesuarları", slug: "arac-aksesuarlari", isActive: true, children: [] },
      { _id: "cat-auto-parts", name: "Yedek Parça", slug: "yedek-parca", isActive: true, children: [] },
      { _id: "cat-auto-tires", name: "Lastik", slug: "lastik", isActive: true, children: [] },
    ],
  },
  {
    _id: "cat-sports",
    name: "Spor & Outdoor",
    slug: "spor-outdoor",
    icon: "dumbbell",
    isActive: true,
    children: [
      { _id: "cat-sport-fitness", name: "Fitness Ekipmanları", slug: "fitness-ekipmanlari", isActive: true, children: [] },
      { _id: "cat-sport-camp", name: "Kamp Malzemeleri", slug: "kamp-malzemeleri", isActive: true, children: [] },
      { _id: "cat-sport-wear", name: "Spor Giyim", slug: "spor-giyim", isActive: true, children: [] },
    ],
  },
  {
    _id: "cat-jewelry",
    name: "Takı & Mücevher",
    slug: "taki-mucevher",
    icon: "gem",
    isActive: true,
    children: [
      { _id: "cat-jewel-gold", name: "Altın", slug: "altin", isActive: true, children: [] },
      { _id: "cat-jewel-silver", name: "Gümüş", slug: "gumus", isActive: true, children: [] },
      { _id: "cat-jewel-watches", name: "Saat", slug: "saat", isActive: true, children: [] },
    ],
  },
  {
    _id: "cat-pets",
    name: "Evcil Hayvan Ürünleri",
    slug: "evcil-hayvan",
    icon: "paw",
    isActive: true,
    children: [
      { _id: "cat-pet-food", name: "Mama", slug: "evcil-hayvan-mamasi", isActive: true, children: [] },
      { _id: "cat-pet-toy", name: "Oyuncak", slug: "evcil-hayvan-oyuncagi", isActive: true, children: [] },
      { _id: "cat-pet-acc", name: "Aksesuar", slug: "evcil-hayvan-aksesuar", isActive: true, children: [] },
    ],
  },
  {
    _id: "cat-travel",
    name: "Seyahat & Valiz",
    slug: "seyahat-valiz",
    icon: "briefcase",
    isActive: true,
    children: [
      { _id: "cat-travel-luggage", name: "Valiz", slug: "valiz", isActive: true, children: [] },
      { _id: "cat-travel-acc", name: "Seyahat Aksesuarları", slug: "seyahat-aksesuarlari", isActive: true, children: [] },
    ],
  },
  {
    _id: "cat-office",
    name: "Ofis & Kırtasiye",
    slug: "ofis-kirtasiye",
    icon: "paperclip",
    isActive: true,
    children: [
      { _id: "cat-office-notebooks", name: "Defter", slug: "defter", isActive: true, children: [] },
      { _id: "cat-office-pens", name: "Kalem", slug: "kalem", isActive: true, children: [] },
      { _id: "cat-office-printer", name: "Yazıcı Ürünleri", slug: "yazici-urunleri", isActive: true, children: [] },
    ],
  },
  {
    _id: "cat-tools",
    name: "Yapı Market & Bahçe",
    slug: "yapi-market-bahce",
    icon: "hammer",
    isActive: true,
    children: [
      { _id: "cat-tools-handtools", name: "El Aletleri", slug: "el-aletleri", isActive: true, children: [] },
      { _id: "cat-tools-paint", name: "Boya", slug: "boya", isActive: true, children: [] },
      { _id: "cat-tools-garden", name: "Bahçe Ürünleri", slug: "bahce-urunleri", isActive: true, children: [] },
    ],
  },
  {
    _id: "cat-gifts",
    name: "Hediyelik & Özel Gün",
    slug: "hediyelik-ozel-gun",
    icon: "gift",
    isActive: true,
    children: [
      { _id: "cat-gift-sets", name: "Hediye Setleri", slug: "hediye-setleri", isActive: true, children: [] },
      { _id: "cat-gift-custom", name: "Kişiye Özel Ürünler", slug: "kisiye-ozel", isActive: true, children: [] },
    ],
  },
  {
    _id: "cat-digital",
    name: "Dijital Ürünler",
    slug: "dijital-urunler",
    icon: "monitor",
    isActive: true,
    children: [
      { _id: "cat-dig-software", name: "Yazılım", slug: "yazilim", isActive: true, children: [] },
      { _id: "cat-dig-games", name: "Oyun", slug: "oyun", isActive: true, children: [] },
      { _id: "cat-dig-subs", name: "Abonelikler", slug: "abonelikler", isActive: true, children: [] },
    ],
  },
];

const brands = [
  { _id: "brand-novatek", name: "Novatek", slug: "novatek", isActive: true },
  { _id: "brand-lumina", name: "Lumina", slug: "lumina", isActive: true },
  { _id: "brand-audiox", name: "AudioX", slug: "audiox", isActive: true },
  { _id: "brand-orbit", name: "Orbit", slug: "orbit", isActive: true },
  { _id: "brand-alpha", name: "Alpha", slug: "alpha", isActive: true },
  { _id: "brand-step", name: "Step", slug: "step", isActive: true },
];

const productsRaw = [
  // Fashion Products
  {
    _id: "prd-17",
    title: "Basic Oversize Tişört",
    description: "Premium %100 pamuklu, günlük kullanıma uygun oversize tişört.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=900&q=80",
    ],
    brand: "alpha",
    category: "kadin",
    price: 349.99,
    salePrice: 299.99,
    totalStock: 50,
    averageReview: 4.8,
    numReviews: 124,
    salesCount: 890,
    createdAt: "2026-04-01T10:00:00.000Z",
    technicalSpecs: [
      { key: "Material", value: "100% Cotton" },
      { key: "Fit", value: "Oversize" },
    ],
    variantOptions: {
      size: ["XS", "S", "M", "L", "XL"],
      color: ["#000000", "#FFFFFF", "#808080"], // Black, White, Grey
    },
  },
  {
    _id: "prd-18",
    title: "Pro Runner X1 Sneakers",
    description: "Yüksek taban destekli, nefes alabilen koşu ayakkabısı.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&q=80",
    ],
    brand: "step",
    category: "ayakkabi",
    price: 2499.99,
    salePrice: 1999.99,
    totalStock: 30,
    averageReview: 4.9,
    numReviews: 210,
    salesCount: 1500,
    createdAt: "2026-04-05T10:00:00.000Z",
    technicalSpecs: [
      { key: "Material", value: "Mesh & Rubber" },
      { key: "Usage", value: "Running" },
      { key: "Weight", value: "280g" },
    ],
    variantOptions: {
      size: ["38", "39", "40", "41", "42", "43"],
      color: ["#FF0000", "#000000", "#0000FF"], // Red, Black, Blue
    },
  },
  {
    _id: "prd-19",
    title: "Classic Denim Jacket",
    description: "Premium denim kumaş, rahat kesim kadın ceket.",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=900&q=80",
    images: ["https://images.unsplash.com/photo-1544441893-675973e31985?w=900&q=80"],
    brand: "alpha",
    category: "kadin",
    price: 899.99,
    salePrice: 799.99,
    totalStock: 25,
    averageReview: 4.6,
    numReviews: 45,
    salesCount: 320,
    createdAt: "2026-04-10T10:00:00.000Z",
    technicalSpecs: [
      { key: "Material", value: "100% Cotton Denim" },
      { key: "Fit", value: "Regular" },
    ],
    variantOptions: {
      size: ["S", "M", "L"],
      color: ["#0000FF", "#000000"], // Blue, Black
    },
  },
  {
    _id: "prd-20",
    title: "Summer Flowy Dress",
    description: "Hafif ve terletmez kumaştan şık yazlık elbise.",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=900&q=80",
    images: ["https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=900&q=80"],
    brand: "step",
    category: "kadin",
    price: 549.99,
    salePrice: 449.99,
    totalStock: 40,
    averageReview: 4.9,
    numReviews: 89,
    salesCount: 540,
    createdAt: "2026-04-12T10:00:00.000Z",
    technicalSpecs: [
      { key: "Material", value: "Viscose" },
      { key: "Pattern", value: "Floral" },
    ],
    variantOptions: {
      size: ["XS", "S", "M", "L"],
      color: ["#FF0000", "#FFFF00"], // Red, Yellow
    },
  },
  {
    _id: "prd-21",
    title: "Sport Leggings Pro",
    description: "Yüksek bel, toparlayıcı etkili spor taytı.",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=900&q=80",
    images: ["https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=900&q=80"],
    brand: "alpha",
    category: "kadin",
    price: 399.99,
    salePrice: 349.99,
    totalStock: 60,
    averageReview: 4.7,
    numReviews: 156,
    salesCount: 1100,
    createdAt: "2026-04-15T10:00:00.000Z",
    technicalSpecs: [
      { key: "Material", value: "Polyester & Spandex" },
      { key: "Feature", value: "Squat Proof" },
    ],
    variantOptions: {
      size: ["XS", "S", "M", "L", "XL"],
      color: ["#000000", "#808080", "#000080"], // Black, Grey, Navy
    },
  },
  {
    _id: "prd-22",
    title: "Minimalist Leather Backpack",
    description: "Günlük kullanıma uygun, şık ve su geçirmez vegan deri sırt çantası.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=80",
    images: ["https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=80"],
    brand: "step",
    category: "kadin",
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
    description: "UV400 korumalı, hafif çerçeveli klasik güneş gözlüğü.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&q=80",
    images: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&q=80"],
    brand: "alpha",
    category: "kadin",
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

  // Electronics Products
  {
    _id: "prd-1",
    title: "Orbit Phone X",
    description: "High-performance smartphone.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80",
    ],
    brand: "orbit",
    category: "telefon",
    price: 38999,
    salePrice: 36999,
    totalStock: 19,
    averageReview: 4.7,
    numReviews: 42,
    salesCount: 330,
    createdAt: "2026-03-01T10:00:00.000Z",
    technicalSpecs: [
      { key: "Display", value: "6.7 OLED" },
      { key: "Storage", value: "256 GB" },
    ],
    variantOptions: {
      color: ["#000000", "#C0C0C0"],
      storage: ["128GB", "256GB"],
    },
  },
  {
    _id: "prd-2",
    title: "Orbit Phone Mini",
    description: "Compact daily smartphone.",
    image:
      "https://images.unsplash.com/photo-1512499617640-c2f999098c01?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1512499617640-c2f999098c01?w=900&q=80",
    ],
    brand: "orbit",
    category: "telefon",
    price: 23999,
    salePrice: 21999,
    totalStock: 22,
    averageReview: 4.4,
    numReviews: 26,
    salesCount: 280,
    createdAt: "2026-03-03T10:00:00.000Z",
    technicalSpecs: [
      { key: "Display", value: "6.1 OLED" },
      { key: "Storage", value: "128 GB" },
    ],
  },
  {
    _id: "prd-3",
    title: "Novatek Phone Pro",
    description: "Smartphone with high camera performance.",
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=900&q=80",
    ],
    brand: "novatek",
    category: "telefon",
    price: 35999,
    salePrice: 33999,
    totalStock: 15,
    averageReview: 4.6,
    numReviews: 33,
    salesCount: 265,
    createdAt: "2026-03-05T10:00:00.000Z",
    technicalSpecs: [
      { key: "Camera", value: "50 MP" },
      { key: "Storage", value: "256 GB" },
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
    category: "telefon",
    price: 27999,
    salePrice: 25999,
    totalStock: 27,
    averageReview: 4.5,
    numReviews: 19,
    salesCount: 230,
    createdAt: "2026-03-07T10:00:00.000Z",
    technicalSpecs: [
      { key: "Display", value: "6.6 AMOLED" },
      { key: "Battery", value: "5000 mAh" },
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
    category: "telefon",
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
    image:
      "/bannar2.avif",
    images: [
      "/bannar2.avif",
    ],
    brand: "orbit",
    category: "telefon",
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
    category: "telefon",
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
    category: "telefon",
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
    title: "AudioX Wave Buds",
    description: "Wireless earbuds.",
    image:
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=900&q=80",
    ],
    brand: "audiox",
    category: "ses-sistemleri",
    price: 4499,
    salePrice: 3899,
    totalStock: 35,
    averageReview: 4.5,
    numReviews: 55,
    salesCount: 410,
    createdAt: "2026-01-05T10:00:00.000Z",
    technicalSpecs: [
      { key: "Bluetooth", value: "5.3" },
      { key: "Protection", value: "IPX5" },
    ],
    variantOptions: {
      color: ["#FFFFFF", "#000000"],
    },
  },
  {
    _id: "prd-10",
    title: "AudioX Bass Boom 500",
    description: "Portable powerful bluetooth speaker.",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=900&q=80",
    ],
    brand: "audiox",
    category: "ses-sistemleri",
    price: 5799,
    salePrice: 5199,
    totalStock: 21,
    averageReview: 4.6,
    numReviews: 44,
    salesCount: 260,
    createdAt: "2026-02-18T10:00:00.000Z",
    technicalSpecs: [
      { key: "Power", value: "120W" },
      { key: "Connection", value: "Bluetooth 5.2" },
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
    category: "ses-sistemleri",
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
    category: "ses-sistemleri",
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
    category: "ses-sistemleri",
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
    category: "ses-sistemleri",
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
    category: "ses-sistemleri",
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
    title: "Lumina FrostFree Refrigerator",
    description: "Multi-door smart refrigerator with intelligent cooling and energy efficiency.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=80",
    images: ["https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=80"],
    brand: "lumina",
    category: "buzdolabi",
    price: 45999,
    salePrice: 42999,
    totalStock: 12,
    averageReview: 4.8,
    numReviews: 35,
    salesCount: 120,
    technicalSpecs: [
      { key: "Dimensions", value: "185 x 70 x 75 cm" },
      { key: "Capacity", value: "500 Liters" },
      { key: "Energy Class", value: "A+++" },
      { key: "Color", value: "Inox" },
    ],
    variantOptions: {
      color: ["#C0C0C0", "#000000"], // Silver, Black
    }
  },
  {
    _id: "prd-app-2",
    title: "Novatek EcoWash 9kg",
    description: "Smart washing machine with steam care and eco-drive technology.",
    image: "https://images.unsplash.com/photo-1582730147233-0df63bd1b232?w=900&q=80",
    brand: "novatek",
    category: "camasir-makinesi",
    price: 18999,
    salePrice: 16999,
    totalStock: 15,
    technicalSpecs: [
      { key: "Capacity", value: "9 kg" },
      { key: "Spin Speed", value: "1400 RPM" },
    ]
  },
  {
    _id: "prd-app-3",
    title: "Orbit Cyclone V10",
    description: "Cordless vacuum cleaner with powerful suction and HEPA filtration.",
    image: "https://images.unsplash.com/photo-1558317374-067df5f15430?w=900&q=80",
    brand: "orbit",
    category: "supurge",
    price: 12499,
    salePrice: 10999,
    totalStock: 25,
    technicalSpecs: [
      { key: "Runtime", value: "60 minutes" },
      { key: "Weight", value: "2.5 kg" },
    ]
  },
  {
    _id: "prd-app-4",
    title: "AudioX Barista One",
    description: "Professional espresso machine with integrated grinder.",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=900&q=80",
    brand: "audiox",
    category: "kahve-makineleri",
    price: 8999,
    salePrice: 7999,
    totalStock: 10,
    technicalSpecs: [
      { key: "Pressure", value: "15 Bar" },
      { key: "Tank", value: "2 Liters" },
    ]
  },

  // --- Home & Life ---
  {
    _id: "prd-home-1",
    title: "Nordic Velvet Sofa",
    description: "Elegant 3-seater sofa with velvet upholstery and wooden legs.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80",
    brand: "alpha",
    category: "mobilya",
    price: 12999,
    salePrice: 10999,
    totalStock: 5,
    technicalSpecs: [
      { key: "Dimensions", value: "210 x 90 x 85 cm" },
      { key: "Material", value: "Velvet & Solid Wood" },
    ]
  },
  {
    _id: "prd-home-2",
    title: "Modern Floor Lamp",
    description: "Minimalist floor lamp with adjustable head and warm glow.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=900&q=80",
    brand: "lumina",
    category: "aydinlatma",
    price: 1499,
    salePrice: 1199,
    totalStock: 30,
    technicalSpecs: [
      { key: "Height", value: "160 cm" },
      { key: "Bulb", value: "E27 LED" },
    ]
  },

  // --- Cosmetics ---
  {
    _id: "prd-cos-1",
    title: "Lumina Silk Foundation",
    description: "Long-lasting full coverage foundation with SPF 15.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=80",
    brand: "lumina",
    category: "makyaj",
    price: 449,
    salePrice: 399,
    totalStock: 100,
    variantOptions: {
      shade: ["Fair", "Natural", "Honey", "Deep"],
    }
  },
  {
    _id: "prd-cos-2",
    title: "Lumina Night Repair Serum",
    description: "Advanced night repair serum with hyaluronic acid.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=80",
    brand: "lumina",
    category: "cilt-bakimi",
    price: 899,
    salePrice: 749,
    totalStock: 50,
  },

  // --- Supermarket ---
  {
    _id: "prd-sup-1",
    title: "Organic Olive Oil 1L",
    description: "Extra virgin cold-pressed organic olive oil.",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=900&q=80",
    brand: "alpha",
    category: "temel-gida",
    price: 189,
    salePrice: 169,
    totalStock: 200,
  },

  // --- Baby ---
  {
    _id: "prd-baby-1",
    title: "SoftTouch Eco Diapers",
    description: "Hypoallergenic and eco-friendly baby diapers.",
    image: "https://images.unsplash.com/photo-1522771935876-2497116a7a9e?w=900&q=80",
    brand: "alpha",
    category: "bebek-bezi",
    price: 349,
    salePrice: 299,
    totalStock: 150,
    variantOptions: {
      size: ["Newborn", "Mini", "Midi", "Maxi"],
    }
  },

  // --- Sports ---
  {
    _id: "prd-sport-1",
    title: "Orbit Adjustable Dumbbells",
    description: "Space-saving adjustable dumbbell set (2-24kg).",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=80",
    brand: "orbit",
    category: "fitness-ekipmanlari",
    price: 4999,
    salePrice: 4499,
    totalStock: 10,
    technicalSpecs: [
      { key: "Weight Range", value: "2 kg to 24 kg" },
      { key: "Material", value: "Steel & Rubber" },
    ]
  },

  // --- Travel ---
  {
    _id: "prd-travel-1",
    title: "Step Carry-On Luggage",
    description: "Durable hardshell carry-on suitcase with 360 wheels.",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=900&q=80",
    brand: "step",
    category: "valiz",
    price: 2899,
    salePrice: 2499,
    totalStock: 20,
    technicalSpecs: [
      { key: "Size", value: "20 inch" },
      { key: "Weight", value: "2.8 kg" },
    ],
    variantOptions: {
      color: ["#0000FF", "#000000", "#FF0000"], // Blue, Black, Red
    }
  },

  // --- Toys & Hobbies ---
  {
    _id: "prd-toy-1",
    title: "Eco-Friendly Wooden Train Set",
    description: "Classic 50-piece wooden train set made from sustainable wood.",
    image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=900&q=80",
    brand: "alpha",
    category: "oyuncaklar",
    price: 599,
    salePrice: 499,
    totalStock: 40,
  },
  {
    _id: "prd-toy-2",
    title: "1000 Piece Scenic Puzzle",
    description: "Challenging 1000-piece puzzle featuring a beautiful mountain landscape.",
    image: "https://images.unsplash.com/photo-1585338927000-1c787b17eb5e?w=900&q=80",
    brand: "alpha",
    category: "puzzle",
    price: 249,
    salePrice: 199,
    totalStock: 100,
  },

  // --- Books & Media ---
  {
    _id: "prd-book-1",
    title: "The Art of Modern Living",
    description: "A comprehensive guide to minimalist design and intentional living.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=900&q=80",
    brand: "alpha",
    category: "kitaplar",
    price: 129,
    salePrice: 99,
    totalStock: 200,
  },

  // --- Automotive ---
  {
    _id: "prd-auto-1",
    title: "Premium Car Floor Mats",
    description: "All-weather heavy-duty rubber floor mats for cars and SUVs.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80",
    brand: "orbit",
    category: "arac-aksesuarlari",
    price: 799,
    salePrice: 649,
    totalStock: 50,
  },

  // --- Jewelry ---
  {
    _id: "prd-jewel-1",
    title: "18K Gold Minimalist Necklace",
    description: "Elegant 18K gold chain with a small minimalist pendant.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=80",
    brand: "lumina",
    category: "altin",
    price: 3499,
    salePrice: 2999,
    totalStock: 15,
  },

  // --- Pets ---
  {
    _id: "prd-pet-1",
    title: "Premium Grain-Free Dog Food",
    description: "High-protein salmon and sweet potato formula for adult dogs.",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=900&q=80",
    brand: "alpha",
    category: "evcil-hayvan-mamasi",
    price: 549,
    salePrice: 499,
    totalStock: 80,
  },

  // --- Tools ---
  {
    _id: "prd-tool-1",
    title: "100-Piece Multi-Tool Set",
    description: "Complete home repair tool kit with drill, hammer, and wrenches.",
    image: "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?w=900&q=80",
    brand: "orbit",
    category: "el-aletleri",
    price: 1899,
    salePrice: 1599,
    totalStock: 30,
    technicalSpecs: [
      { key: "Pieces", value: "100" },
      { key: "Case", value: "Hard Plastic" },
    ]
  }
];

const defaultHighlights = {
  telefon: ["Advanced performance", "Clear display", "Long battery life"],
  "ses-sistemleri": ["Balanced sound", "Strong connection", "All-day use"],
  kadin: ["Premium fabric", "Comfortable fit", "Modern design"],
  ayakkabi: ["Breathable", "Shock absorption", "Lightweight"],
};

const defaultDelivery = {
  mainCities: ["Riyadh", "Jeddah"],
  otherCities: ["Dammam", "Khobar", "Taif"],
  etaMainDays: 1,
  etaOtherDays: 5,
};

const defaultReturns = {
  message: "Exchange/return options are provided based on product eligibility. Details on the order page.",
};

const defaultWarranty = {
  message: "Warranty coverage varies by product category. Support is provided through authorized service centers.",
};

const defaultInTheBox = ["Product", "User manual", "Warranty card"];

const defaultColors = {
  telefon: ["Black", "Blue", "Silver"],
  "ses-sistemleri": ["Black", "Gray"],
  kadin: ["Black", "White", "Navy"],
  ayakkabi: ["Red", "Black", "Blue"],
};

const enrichProduct = (p) => {
  const category = p?.category;

  return {
    ...p,
    highlights: Array.isArray(p.highlights)
      ? p.highlights
      : defaultHighlights[category] || defaultHighlights.telefon,
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
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&q=80",
    link: "/shop/listing?category=kadin",
  },
  {
    _id: "feat-2",
    title: "Phone Campaigns",
    image: "/banner1.png",
    link: "/shop/listing?category=telefon",
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
    link: "/shop/listing?category=telefon",
  },
  {
    _id: "side-2",
    title: "Sport & Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=80",
    link: "/shop/listing?category=ayakkabi",
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
    title: "Best Selling",
    contentType: "BEST_SELLING",
    contentValue: "",
    itemLimit: 20,
    isActive: true,
  },
  {
    _id: "hs-2",
    title: "New Fashion Arrivals",
    contentType: "CATEGORY",
    contentValue: "kadin",
    itemLimit: 20,
    isActive: true,
  },
  {
    _id: "hs-3",
    title: "AudioX Campaigns",
    contentType: "BRAND",
    contentValue: "audiox",
    itemLimit: 20,
    isActive: true,
  },
];

const productReviews = {
  "prd-1": [
    {
      user: { name: "Ahmet Y." },
      rating: 5,
      comment: "The screen is very clear and the performance is really good. Great for the price.",
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
      user: { name: "Ayşe S." },
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
      comment: "Tam istediğim kalıp! Kumaşı çok kaliteli ve oversize duruşu mükemmel.",
      createdAt: "2026-04-10T12:00:00.000Z",
      verified: true,
    },
  ],
  "prd-18": [
    {
      user: { name: "Caner T." },
      rating: 5,
      comment: "Koşu için harika, çok hafif ve tabanı çok rahat.",
      createdAt: "2026-04-12T14:30:00.000Z",
      verified: true,
    },
  ]
};

export {
  brands,
  categories,
  featureImages,
  homeSections,
  productReviews,
  products,
  sideBanners,
};
