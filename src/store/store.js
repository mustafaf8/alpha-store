import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import shopProductsSlice from "./shop/products-slice";
import shopSearchSlice from "./shop/search-slice";
import commonFeatureSlice from "./common-slice";
import sideBannerReducer from "./common-slice/side-banner-slice";
import categoriesReducer from "./common-slice/categories-slice"; 
import homeSectionsReducer from "./common-slice/home-sections-slice"; 
import brandsReducer from "./common-slice/brands-slice";
import cartReducer from "./shop/cart-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    shopProducts: shopProductsSlice,
    shopSearch: shopSearchSlice,
    commonFeature: commonFeatureSlice,
    sideBanners: sideBannerReducer,
    categories: categoriesReducer,
    homeSections: homeSectionsReducer,
    brands: brandsReducer,
    cart: cartReducer,
  },
});

export default store;
