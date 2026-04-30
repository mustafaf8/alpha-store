import {
  brands,
  categories,
  featureImages,
  homeSections,
  productReviews,
  products,
  sideBanners,
} from "./catalog";

const clone = (data) => JSON.parse(JSON.stringify(data));
const ok = (data) => ({ status: 200, statusText: "OK", data, headers: {}, config: {} });

const getPathAndParams = (url) => {
  const parsed = new URL(url, "http://localhost");
  let path = parsed.pathname;
  if (path.startsWith("/api")) {
    path = path.replace("/api", "");
  }
  return { path, params: parsed.searchParams };
};


const filterProducts = (params) => {
  let list = [...products];
  const category = params.get("category");
  const brand = params.get("brand");
  const keyword = (params.get("keyword") || "").toLowerCase();
  if (category) list = list.filter((item) => category.split(",").includes(item.category));
  if (brand) list = list.filter((item) => brand.split(",").includes(item.brand));
  if (keyword) {
    list = list.filter(
      (item) =>
        item.title.toLowerCase().includes(keyword) ||
        item.description.toLowerCase().includes(keyword),
    );
  }
  const sortBy = params.get("sortBy");
  switch (sortBy) {
    case "price-lowtohigh":
      list.sort((a, b) => (a.salePrice || a.price || 0) - (b.salePrice || b.price || 0));
      break;
    case "price-hightolow":
      list.sort((a, b) => (b.salePrice || b.price || 0) - (a.salePrice || a.price || 0));
      break;
    case "title-atoz":
      list.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
      break;
    case "title-ztoa":
      list.sort((a, b) => (b.title || "").localeCompare(a.title || ""));
      break;
    case "salesCount-desc":
      list.sort((a, b) => (b.salesCount || 0) - (a.salesCount || 0));
      break;
    case "createdAt-desc":
      list.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
      break;
    default:
      break;
  }
  return list;
};

export const mockApiAdapter = async (config) => {
  const method = (config.method || "get").toLowerCase();
  const { path, params } = getPathAndParams(config.url || "");

  if (method === "get" && path === "/maintenance/status") {
    return ok({ success: true, data: { isActive: false, message: "", returnDate: null } });
  }

  if (method === "get" && path === "/common/feature/get") return ok({ success: true, data: clone(featureImages) });
  if (method === "get" && path === "/common/side-banners/get") return ok({ success: true, data: clone(sideBanners) });
  if (method === "get" && path === "/common/categories/list") return ok({ success: true, data: clone(categories) });
  if (method === "get" && path === "/common/brands/list") return ok({ success: true, data: clone(brands) });
  if (method === "get" && path === "/shop/home-sections/active") {
    return ok({ success: true, data: clone(homeSections.filter((item) => item.isActive)) });
  }

  if (method === "get" && path === "/shop/products/get") {
    const page = Number(params.get("page")) || 1;
    const limit = Number(params.get("limit")) || 0;
    const filtered = filterProducts(params);
    if (!limit) {
      return ok({ success: true, data: clone(filtered) });
    }
    const start = (page - 1) * limit;
    return ok({
      success: true,
      data: {
        items: clone(filtered.slice(start, start + limit)),
        total: filtered.length,
        page,
        limit,
      },
    });
  }
  if (method === "get" && path.startsWith("/shop/products/get/")) {
    const id = path.split("/").pop();
    return ok({ success: true, data: clone(products.find((item) => item._id === id) || null) });
  }

  if (method === "get" && path === "/shop/search") {
    const qs = new URLSearchParams(config.params || {});
    return ok({ success: true, data: clone(filterProducts(qs)) });
  }
  if (method === "get" && path === "/shop/search/suggest") {
    const keyword = (params.get("keyword") || "").toLowerCase().trim();
    if (!keyword) return ok({ success: true, data: { products: [], categories: [], brands: [] } });

    // Recursive category search
    const matchedCategories = [];
    const findInCategories = (list) => {
      for (const cat of list) {
        if (cat.name.toLowerCase().includes(keyword)) {
          matchedCategories.push({ _id: cat._id, name: cat.name, slug: cat.slug });
        }
        if (cat.children && cat.children.length > 0) {
          findInCategories(cat.children);
        }
      }
    };
    findInCategories(categories);

    return ok({
      success: true,
      data: {
        products: products
          .filter(
            (item) =>
              item.title.toLowerCase().includes(keyword) ||
              item.description.toLowerCase().includes(keyword)
          )
          .slice(0, 8)
          .map((item) => ({ 
            _id: item._id, 
            title: item.title, 
            image: item.image,
            price: item.salePrice || item.price 
          })),
        categories: matchedCategories.slice(0, 8),
        brands: brands
          .filter((item) => item.name.toLowerCase().includes(keyword))
          .slice(0, 8)
          .map((item) => ({ _id: item._id, name: item.name, slug: item.slug })),
      },
    });
  }

  if (method === "get" && path.startsWith("/shop/review/")) {
    const id = path.split("/").pop();
    return ok({ success: true, data: clone(productReviews[id] || []) });
  }

  return ok({ success: true, data: [] });
};
