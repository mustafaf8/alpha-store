import { apiShopReadDataSource } from "@/services/shop/datasources/apiShopReadDataSource";
import { mockShopReadDataSource } from "@/services/shop/datasources/mockShopReadDataSource";
import {
  ensureProductShape,
  normalizeListResponse,
  normalizeProductsPayload,
} from "@/services/shop/mappers/shopReadMappers";

const useMockApi = import.meta.env.VITE_USE_MOCK_API !== "false";

const dataSource = useMockApi ? mockShopReadDataSource : apiShopReadDataSource;

export const shopReadRepository = {
  async getProducts({ filterParams = {}, sortParams = "", page = 1, limit = 0 } = {}) {
    const payload = await dataSource.getProducts({
      filterParams,
      sortParams,
      page,
      limit,
    });
    return normalizeProductsPayload(payload, page, limit);
  },

  async getProductById(id) {
    const payload = await dataSource.getProductById(id);
    return ensureProductShape(payload);
  },

  async searchProducts(keyword) {
    const payload = await dataSource.searchProducts(keyword);
    return normalizeProductsPayload(payload).items;
  },

  async getFeatureImages() {
    const payload = await dataSource.getFeatureImages();
    return normalizeListResponse(payload).items;
  },

  async getSideBanners() {
    const payload = await dataSource.getSideBanners();
    return normalizeListResponse(payload).items;
  },

  async getActiveHomeSections() {
    const payload = await dataSource.getActiveHomeSections();
    return normalizeListResponse(payload).items;
  },

  async getCategories() {
    const payload = await dataSource.getCategories();
    return normalizeListResponse(payload).items;
  },

  async getBrands() {
    const payload = await dataSource.getBrands();
    return normalizeListResponse(payload).items;
  },

  async getProductReviews(productId) {
    const payload = await dataSource.getProductReviews(productId);
    return normalizeListResponse(payload).items;
  },
};
