import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { shopReadRepository } from "@/services/shop/repositories/shopReadRepository";

const initialState = {
  isLoading: false,
  searchResults: [],
  error: null,
};

export const getSearchResults = createAsyncThunk(
  "search/getSearchResults",
  async (keyword, { rejectWithValue }) => {
    try {
      const payload = await shopReadRepository.searchProducts(keyword);
      return { success: true, data: payload };
    } catch (error) {
      return rejectWithValue(
        error?.response?.data || {
          message: error?.message || "An error occurred during search.",
        }
      );
    }
  },
);

const searchSlice = createSlice({
  name: "shopSearch",
  initialState,
  reducers: {
    resetSearchResults: (state) => {
      state.searchResults = [];
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchResults.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSearchResults.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchResults = action.payload.data;
      })
      .addCase(getSearchResults.rejected, (state, action) => {
        state.isLoading = false;
        state.searchResults = [];
        state.error =
          action.payload?.message ||
          action.error?.message ||
          "Search failed.";
      });
  },
});

export const { resetSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
