import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axiosInstance";
import { shopReadRepository } from "@/services/shop/repositories/shopReadRepository";

const initialState = {
  categoryList: [],
  isLoading: false,
  error: null,
};

export const fetchAllCategories = createAsyncThunk(
  "categories/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const payload = await shopReadRepository.getCategories();
      return { success: true, data: payload };
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Categories could not be fetched." },
      );
    }
  },
);

export const addCategory = createAsyncThunk(
  "categories/add",
  async (categoryData, { rejectWithValue }) => {
    try {
      const response = await api.post(`/admin/categories/add`, categoryData);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Category could not be added." }
      );
    }
  }
);

export const updateCategory = createAsyncThunk(
  "categories/update",
  async ({ id, categoryData }, { rejectWithValue }) => {
    try {
      const response = await api.put(
        `/admin/categories/update/${id}`,
        categoryData
      );
      return response.data; 
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Category could not be updated." }
      );
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "categories/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/admin/categories/delete/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Category could not be deleted." }
      );
    }
  }
);

export const fetchAllCategoriesAdmin = createAsyncThunk(
  "categories/fetchAllAdmin",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`/admin/categories/list`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Categories could not be fetched (admin)." }
      );
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    clearCategoryError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categoryList = action.payload?.data || [];
      })
      .addCase(fetchAllCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Categories could not be loaded.";
        state.categoryList = [];
      })
      .addCase(addCategory.fulfilled, (state, action) => {
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.error = action.payload?.message || "Category could not be added.";
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.error = action.payload?.message || "Category could not be updated.";
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.error = action.payload?.message || "Category could not be deleted.";
      })
      .addCase(fetchAllCategoriesAdmin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCategoriesAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categoryList = action.payload?.data || [];
      })
      .addCase(fetchAllCategoriesAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.payload?.message || "Categories could not be loaded (admin).";
        state.categoryList = [];
      });
  },
});

export const { clearCategoryError } = categoriesSlice.actions;
export default categoriesSlice.reducer;
