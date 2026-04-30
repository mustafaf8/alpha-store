import api from "@/api/axiosInstance";

const ensureData = (response) => response?.data?.data ?? [];

const listToPaginated = (list) => ({
  items: list,
  total: list.length,
  page: 1,
  limit: list.length,
});

export const apiShopReadDataSource = {
  async getProducts({ filterParams = {}, sortParams = "", page = 1, limit = 0 } = {}) {
    const params = {};

    Object.entries(filterParams).forEach(([key, value]) => {
      if (Array.isArray(value) && value.length > 0) {
        params[key] = value.join(",");
      } else if (typeof value === "string" && value) {
        params[key] = value;
      }
    });

    if (sortParams) {
      params.sortBy = sortParams;
    }

    if (page > 0) {
      params.page = page;
    }

    if (limit > 0) {
      params.limit = limit;
    }

    const response = await api.get("/shop/products/get", { params });
    const data = response?.data?.data;

    if (Array.isArray(data)) {
      return listToPaginated(data);
    }

    if (data && Array.isArray(data.items)) {
      return {
        items: data.items,
        total: data.total ?? data.items.length,
        page: data.page ?? page,
        limit: data.limit ?? limit ?? data.items.length,
      };
    }

    return listToPaginated([]);
  },

  async getProductById(id) {
    const response = await api.get(`/shop/products/get/${id}`);
    return response?.data?.data || null;
  },

  async searchProducts(keyword) {
    const response = await api.get("/shop/search", { params: { keyword } });
    return ensureData(response);
  },

  async getFeatureImages() {
    const response = await api.get("/common/feature/get");
    return ensureData(response);
  },

  async getSideBanners() {
    const response = await api.get("/common/side-banners/get");
    return ensureData(response);
  },

  async getActiveHomeSections() {
    const response = await api.get("/shop/home-sections/active");
    return ensureData(response);
  },

  async getCategories() {
    const response = await api.get("/common/categories/list");
    return ensureData(response);
  },

  async getBrands() {
    const response = await api.get("/common/brands/list");
    return ensureData(response);
  },

  async getProductReviews(productId) {
    const response = await api.get(`/shop/review/${productId}`);
    return ensureData(response);
  },
};
