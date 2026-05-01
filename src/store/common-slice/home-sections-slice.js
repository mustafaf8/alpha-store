import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axiosInstance";
import { shopReadRepository } from "@/services/shop/repositories/shopReadRepository";
const initialState = {
  homeSections: [],
  activeHomeSections: [],
  isLoading: false,
  error: null,
};

export const fetchActiveHomeSections = createAsyncThunk(
  "homeSections/fetchActive",
  async (_, { rejectWithValue }) => {
    try {
      const payload = await shopReadRepository.getActiveHomeSections();
      return { success: true, data: payload };
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Home sections could not be fetched." },
      );
    }
  },
);

export const fetchAllHomeSections = createAsyncThunk(
  "homeSections/fetchAllAdmin",
  async (_, { rejectWithValue }) => { 
    try {
      const response = await api.get(`/admin/home-sections/list`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || {
          message: "Home sections could not be fetched for admin.",
        }
      );
    }
  }
);

export const addHomeSection = createAsyncThunk(
  "homeSections/add",
  async (sectionData, { rejectWithValue }) => {
    try {
      const response = await api.post(`/admin/home-sections/add`, sectionData);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Home section could not be added." }
      );
    }
  }
);

export const updateHomeSection = createAsyncThunk(
  "homeSections/update",
  async ({ id, sectionData }, { rejectWithValue }) => {
    try {
      const response = await api.put(
        `/admin/home-sections/update/${id}`,
        sectionData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Home section could not be updated." }
      );
    }
  }
);

export const deleteHomeSection = createAsyncThunk(
  "homeSections/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/admin/home-sections/delete/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Home section could not be deleted." }
      );
    }
  }
);

export const updateHomeSectionsOrder = createAsyncThunk(
  "homeSections/reorder",
  async (orderedIds, { rejectWithValue }) => {
    try {
      const response = await api.put(`/admin/home-sections/reorder`, {
        orderedIds,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Section order could not be updated." }
      );
    }
  }
);

const homeSectionsSlice = createSlice({
  name: "homeSections",
  initialState,
  reducers: {
    clearHomeSectionsError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchActiveHomeSections.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchActiveHomeSections.fulfilled, (state, action) => {
        state.isLoading = false;
        state.activeHomeSections = action.payload?.data || [];
      })
      .addCase(fetchActiveHomeSections.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Active sections could not be loaded.";
        state.activeHomeSections = [];
      })
      .addCase(fetchAllHomeSections.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllHomeSections.fulfilled, (state, action) => {
        state.isLoading = false;
        state.homeSections = action.payload?.data || [];
      })
      .addCase(fetchAllHomeSections.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.payload?.message || "Sections could not be loaded for admin.";
        state.homeSections = [];
      })
      .addCase(addHomeSection.fulfilled, (state, action) => {
        if (action.payload?.success && action.payload?.data) {
          state.homeSections.push(action.payload.data);
        }
      })
      .addCase(addHomeSection.rejected, (state, action) => {
        state.error = action.payload?.message || "Section could not be added.";
      })
      .addCase(updateHomeSection.fulfilled, (state, action) => {
        if (action.payload?.success && action.payload?.data) {
          const index = state.homeSections.findIndex(
            (sec) => sec._id === action.payload.data._id
          );
          if (index !== -1) {
            state.homeSections[index] = action.payload.data;
          }
          const activeIndex = state.activeHomeSections.findIndex(
            (sec) => sec._id === action.payload.data._id
          );
          if (activeIndex !== -1) {
            if (action.payload.data.isActive) {
              state.activeHomeSections[activeIndex] = action.payload.data;
            } else {
              state.activeHomeSections.splice(activeIndex, 1);
            }
          } else if (action.payload.data.isActive) {
            state.activeHomeSections.push(action.payload.data);
          }
        }
      })
      .addCase(updateHomeSection.rejected, (state, action) => {
        state.error = action.payload?.message || "Section could not be updated.";
      })
      .addCase(deleteHomeSection.fulfilled, (state, action) => {
        if (action.payload?.success && action.payload?.data?._id) {
          state.homeSections = state.homeSections.filter(
            (sec) => sec._id !== action.payload.data._id
          );
          state.activeHomeSections = state.activeHomeSections.filter(
            (sec) => sec._id !== action.payload.data._id
          );
        }
      })
      .addCase(deleteHomeSection.rejected, (state, action) => {
        state.error = action.payload?.message || "Section could not be deleted.";
      })
      .addCase(updateHomeSectionsOrder.fulfilled, (state, action) => {
        if (action.payload?.success && action.payload?.data) {
          state.homeSections = action.payload.data;
          state.activeHomeSections = action.payload.data.filter(
            (sec) => sec.isActive
          );
        }
      })
      .addCase(updateHomeSectionsOrder.rejected, (state, action) => {
        state.error = action.payload?.message || "Order could not be updated.";
      });
  },
});

export const { clearHomeSectionsError } = homeSectionsSlice.actions;
export default homeSectionsSlice.reducer;
