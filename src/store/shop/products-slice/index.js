import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { shopReadRepository } from "@/services/shop/repositories/shopReadRepository";

const initialState = {
  productList: [],
  productDetails: null,
  isLoading: false,
  isDetailsLoading: false,
  error: null,
};

export const fetchAllFilteredProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async ({ filterParams, sortParams }, { rejectWithValue }) => {
    try {
      const payload = await shopReadRepository.getProducts({
        filterParams,
        sortParams,
      });
      return { success: true, data: payload.items, meta: payload };
    } catch (error) {
      return rejectWithValue(
        error?.response?.data || { message: "Ürünler getirilemedi." },
      );
    }
  },
);

export const fetchProductDetails = createAsyncThunk(
  "products/fetchProductDetails",
  async (id, { rejectWithValue }) => {
    try {
      const payload = await shopReadRepository.getProductById(id);
      return { success: true, data: payload };
    } catch (error) {
      return rejectWithValue(
        error?.response?.data || { message: "Ürün detayı alınamadı." },
      );
    }
  },
);

const shoppingProductSlice = createSlice({
  name: "shoppingProducts",
  initialState,
  reducers: {
    setProductDetails: (state, action) => {
      state.productDetails = action.payload;
    },
    clearProductError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFilteredProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload?.success) {
          state.productList = action.payload.data;
        } else {
          state.productList = [];
          state.error = action.payload?.message || "Ürünler alınamadı.";
        }
      })
      .addCase(fetchAllFilteredProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.productList = [];
        state.error = action.payload?.message || "Bir hata oluştu.";
      })

      .addCase(fetchProductDetails.pending, (state) => {
        state.isDetailsLoading = true;
        state.error = null;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.isDetailsLoading = false;
        if (action.payload?.success) {
          state.productDetails = action.payload.data;
        } else {
          state.productDetails = null;
          state.error = action.payload?.message || "Detaylar alınamadı.";
        }
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.isDetailsLoading = false;
        state.productDetails = null;
        state.error = action.payload?.message || "Bir hata oluştu.";
      });
  },
});

export const { setProductDetails, clearProductError } =
  shoppingProductSlice.actions;

export default shoppingProductSlice.reducer;
