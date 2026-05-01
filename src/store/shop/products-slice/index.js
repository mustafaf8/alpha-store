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
        error?.response?.data || { message: "Products could not be fetched." },
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
        error?.response?.data || { message: "Product details could not be fetched." },
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
          state.error = action.payload?.message || "Products could not be loaded.";
        }
      })
      .addCase(fetchAllFilteredProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.productList = [];
        state.error = action.payload?.message || "An unexpected error occurred.";
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
          state.error =
            action.payload?.message || "Product details could not be loaded.";
        }
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.isDetailsLoading = false;
        state.productDetails = null;
        state.error = action.payload?.message || "An unexpected error occurred.";
      });
  },
});

export const { setProductDetails, clearProductError } =
  shoppingProductSlice.actions;

export default shoppingProductSlice.reducer;
