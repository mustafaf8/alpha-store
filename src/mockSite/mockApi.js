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
  return { path: parsed.pathname, params: parsed.searchParams };
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

  if (method === "get" && path === "/shop/products/get") return ok({ success: true, data: clone(filterProducts(params)) });
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
    return ok({
      success: true,
      data: {
        products: products
          .filter((item) => item.title.toLowerCase().includes(keyword))
          .slice(0, 6)
          .map((item) => ({ _id: item._id, title: item.title })),
        categories: categories
          .filter((item) => item.name.toLowerCase().includes(keyword))
          .slice(0, 6)
          .map((item) => ({ _id: item._id, name: item.name, slug: item.slug })),
        brands: brands
          .filter((item) => item.name.toLowerCase().includes(keyword))
          .slice(0, 6)
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
