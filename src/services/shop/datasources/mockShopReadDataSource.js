import {
  brands,
  categories,
  featureImages,
  homeSections,
  productReviews,
  products,
  sideBanners,
} from "@/mockSite/catalog";

const deepClone = (value) => JSON.parse(JSON.stringify(value));

const sortProducts = (list, sortBy = "") => {
  const sorted = [...list];
  switch (sortBy) {
    case "price-lowtohigh":
      sorted.sort((a, b) => (a.salePrice || a.price || 0) - (b.salePrice || b.price || 0));
      break;
    case "price-hightolow":
      sorted.sort((a, b) => (b.salePrice || b.price || 0) - (a.salePrice || a.price || 0));
      break;
    case "title-atoz":
      sorted.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
      break;
    case "title-ztoa":
      sorted.sort((a, b) => (b.title || "").localeCompare(a.title || ""));
      break;
    case "salesCount-desc":
      sorted.sort((a, b) => (b.salesCount || 0) - (a.salesCount || 0));
      break;
    case "createdAt-desc":
      sorted.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
      break;
    default:
      break;
  }
  return sorted;
};

const filterProducts = (allProducts, filterParams = {}, keyword = "") => {
  let list = [...allProducts];

  const categoryFilters = Array.isArray(filterParams.category)
    ? filterParams.category
    : typeof filterParams.category === "string" && filterParams.category
      ? filterParams.category.split(",")
      : [];
  const brandFilters = Array.isArray(filterParams.brand)
    ? filterParams.brand
    : typeof filterParams.brand === "string" && filterParams.brand
      ? filterParams.brand.split(",")
      : [];

  if (categoryFilters.length > 0) {
    list = list.filter((item) => categoryFilters.includes(item.category));
  }

  if (brandFilters.length > 0) {
    list = list.filter((item) => brandFilters.includes(item.brand));
  }

  const normalizedKeyword = keyword.trim().toLowerCase();
  if (normalizedKeyword) {
    list = list.filter(
      (item) =>
        (item.title || "").toLowerCase().includes(normalizedKeyword) ||
        (item.description || "").toLowerCase().includes(normalizedKeyword),
    );
  }

  return list;
};

const paginate = (list, page = 1, limit = 0) => {
  if (!limit || limit <= 0) {
    return {
      items: list,
      total: list.length,
      page,
      limit: list.length,
    };
  }

  const start = (page - 1) * limit;
  return {
    items: list.slice(start, start + limit),
    total: list.length,
    page,
    limit,
  };
};

export const mockShopReadDataSource = {
  async getProducts({ filterParams = {}, sortParams = "", page = 1, limit = 0 } = {}) {
    const filtered = filterProducts(products, filterParams);
    const sorted = sortProducts(filtered, sortParams);
    return deepClone(paginate(sorted, page, limit));
  },

  async getProductById(id) {
    return deepClone(products.find((item) => item._id === id) || null);
  },

  async searchProducts(keyword) {
    return deepClone(filterProducts(products, {}, keyword));
  },

  async getFeatureImages() {
    return deepClone(featureImages);
  },

  async getSideBanners() {
    return deepClone(sideBanners);
  },

  async getActiveHomeSections() {
    return deepClone(homeSections.filter((item) => item.isActive));
  },

  async getCategories() {
    return deepClone(categories);
  },

  async getBrands() {
    return deepClone(brands);
  },

  async getProductReviews(productId) {
    return deepClone(productReviews[productId] || []);
  },
};
