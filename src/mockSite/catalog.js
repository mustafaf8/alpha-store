const categories = [
  {
    _id: "cat-laptop",
    name: "Laptop",
    slug: "laptop",
    isActive: true,
    children: [],
  },
  {
    _id: "cat-phone",
    name: "Phone",
    slug: "telefon",
    isActive: true,
    children: [],
  },
  {
    _id: "cat-audio3",
    name: "Sound Systems",
    slug: "ses-sistemleri",
    isActive: true,
    children: [],
  },
  {
    _id: "cat-audio4",
    name: "Sound4",
    slug: "ses-sistemleri4",
    isActive: true,
    children: [],
  },
  {
    _id: "cat-audio3",
    name: "Sound3",
    slug: "ses-sistemleri3",
    isActive: true,
    children: [],
  },
  {
    _id: "cat-audio2",
    name: "Sound2",
    slug: "ses-sistemleri2",
    isActive: true,
    children: [],
  },
  {
    _id: "cat-audio1",
    name: "Sound1",
    slug: "ses-sistemleri1",
    isActive: true,
    children: [],
  },
];

const brands = [
  { _id: "brand-novatek", name: "Novatek", slug: "novatek", isActive: true },
  { _id: "brand-lumina", name: "Lumina", slug: "lumina", isActive: true },
  { _id: "brand-audiox", name: "AudioX", slug: "audiox", isActive: true },
  { _id: "brand-orbit", name: "Orbit", slug: "orbit", isActive: true },
];

const products = [
  {
    _id: "prd-1",
    title: "Orbit Phone X",
    description: "Yuksek performansli akilli telefon.",
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
      { key: "Ekran", value: "6.7 OLED" },
      { key: "Depolama", value: "256 GB" },
    ],
  },
  {
    _id: "prd-2",
    title: "Orbit Phone Mini",
    description: "Kompakt tasarimli gunluk telefon.",
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
      { key: "Ekran", value: "6.1 OLED" },
      { key: "Depolama", value: "128 GB" },
    ],
  },
  {
    _id: "prd-3",
    title: "Novatek Phone Pro",
    description: "Yuksek kamera performansli akilli telefon.",
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
      { key: "Kamera", value: "50 MP" },
      { key: "Depolama", value: "256 GB" },
    ],
  },
  {
    _id: "prd-4",
    title: "Lumina Phone Neo",
    description: "Dengeli performans ve uzun pil omru.",
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
      { key: "Ekran", value: "6.6 AMOLED" },
      { key: "Batarya", value: "5000 mAh" },
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
      { key: "Ekran", value: "6.5 IPS" },
      { key: "RAM", value: "6 GB" },
    ],
  },
  {
    _id: "prd-6",
    title: "Orbit Phone Z",
    description: "Oyun ve multimedia odakli guclu telefon.",
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
      { key: "Ekran", value: "6.7 144Hz" },
      { key: "Islemci", value: "3.1 GHz" },
    ],
  },
  {
    _id: "prd-7",
    title: "Lumina Phone Air",
    description: "Ince ve hafif govdeye sahip model.",
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
      { key: "Agirlik", value: "176 g" },
      { key: "Batarya", value: "4700 mAh" },
    ],
  },
  {
    _id: "prd-8",
    title: "Orbit Phone Plus",
    description: "Genis ekranli ve hizli sarjli telefon.",
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
      { key: "Sarj", value: "67W hizli sarj" },
      { key: "Depolama", value: "256 GB" },
    ],
  },
  {
    _id: "prd-9",
    title: "AudioX Wave Buds",
    description: "Kablosuz kulaklik.",
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
      { key: "Korumasi", value: "IPX5" },
    ],
  },
  {
    _id: "prd-10",
    title: "AudioX Bass Boom 500",
    description: "Tasinabilir guclu bluetooth hoparlor.",
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
      { key: "Guc", value: "120W" },
      { key: "Baglanti", value: "Bluetooth 5.2" },
    ],
  },
  {
    _id: "prd-11",
    title: "AudioX Studio Headset Pro",
    description: "Konforlu ve detayli ses veren kulaklik.",
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
      { key: "Surucu", value: "50 mm" },
      { key: "Calisma Suresi", value: "40 saat" },
    ],
  },
  {
    _id: "prd-12",
    title: "AudioX Home Theater Mini",
    description: "Kompakt 2.1 kanal ev ses sistemi.",
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
      { key: "Kanal", value: "2.1" },
      { key: "Subwoofer", value: "Kablosuz" },
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
      { key: "ANC", value: "Hibrit" },
      { key: "Bluetooth", value: "5.3" },
    ],
  },
  {
    _id: "prd-14",
    title: "AudioX Gamer Speaker Duo",
    description: "RGB aydinlatmali masaustu hoparlor.",
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
      { key: "Guc", value: "60W" },
      { key: "Aydinlatma", value: "RGB" },
    ],
  },
  {
    _id: "prd-15",
    title: "AudioX Party Tower 900",
    description: "Yuksek ses cikisli parti hoparloru.",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&q=80",
    ],
    brand: "audiox",
    category: "ses-sistemleri",
    price: 14999,
    salePrice: 13499,
    totalStock: 6,
    averageReview: 4.6,
    numReviews: 12,
    salesCount: 72,
    createdAt: "2026-03-02T10:00:00.000Z",
    technicalSpecs: [
      { key: "Toplam Guc", value: "300W" },
      { key: "Ozellik", value: "Karaoke" },
    ],
  },
  {
    _id: "prd-16",
    title: "AudioX SoundBar S2",
    description: "TV ve film icin guclu soundbar.",
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
      { key: "Baglanti", value: "HDMI ARC" },
      { key: "Mod", value: "Film/Muzik" },
    ],
  },
];

const featureImages = [
  {
    _id: "feat-1",
    title: "New Season Tech",
    image: "/000.webp",
    link: "/shop/listing",
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
    title: "Telefon firsatlari",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80",
    link: "/shop/listing?category=telefon",
  },
  {
    _id: "side-2",
    title: "AudioX Campaign",
    image:
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=900&q=80",
    link: "/shop/listing?brand=audiox",
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
    itemLimit: 10,
    isActive: true,
  },
  {
    _id: "hs-2",
    title: "Phone Suggestions",
    contentType: "CATEGORY",
    contentValue: "telefon",
    itemLimit: 10,
    isActive: true,
  },
  {
    _id: "hs-3",
    title: "AudioX Campaigns",
    contentType: "BRAND",
    contentValue: "audiox",
    itemLimit: 10,
    isActive: true,
  },
];

const productReviews = {};

export {
  brands,
  categories,
  featureImages,
  homeSections,
  productReviews,
  products,
  sideBanners,
};
