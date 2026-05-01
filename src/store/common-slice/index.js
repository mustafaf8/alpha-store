import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/axiosInstance";
import { shopReadRepository } from "@/services/shop/repositories/shopReadRepository";

const initialState = {
  isLoading: false,
  featureImageList: [],
  error: null,
};

export const getFeatureImages = createAsyncThunk(
  "commonFeature/getFeatureImages",
  async (_, { rejectWithValue }) => {
    try {
      const payload = await shopReadRepository.getFeatureImages();
      return { success: true, data: payload };
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Banners could not be fetched." },
      );
    }
  },
);

export const addFeatureImage = createAsyncThunk(
  "commonFeature/addFeatureImage",
  async (bannerData, { rejectWithValue }) => {
    try {
      const response = await api.post(`/common/feature/add`, bannerData);
      if (response.data && response.data.success) {
        return response.data;
      } else {
        return rejectWithValue(
          response.data || { message: "Banner could not be added." }
        );
      }
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Banner could not be added." }
      );
    }
  }
);

export const updateFeatureImage = createAsyncThunk(
  "commonFeature/updateFeatureImage",
  async ({ bannerId, bannerData }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/common/feature/update/${bannerId}`, bannerData);
      if (response.data && response.data.success) {
        return response.data;
      } else {
        return rejectWithValue(
          response.data || { message: "Banner could not be updated." }
        );
      }
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Banner could not be updated." }
      );
    }
  }
);

export const deleteFeatureImage = createAsyncThunk(
  "commonFeature/deleteFeatureImage",
  async (bannerId, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/common/feature/delete/${bannerId}`);
      if (response.data && response.data.success) {
        return { success: true, data: { _id: bannerId } };
      } else {
        return rejectWithValue(
          response.data || { message: "Banner could not be deleted." }
        );
      }
    } catch (error) {
    //  console.error(
    //    "deleteFeatureImage API Hatası:",
    //    error.response?.data || error.message
    //  );
      return rejectWithValue(
        error.response?.data || { message: "Banner could not be deleted." }
      );
    }
  }
);

const commonSlice = createSlice({
  name: "commonFeature",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFeatureImages.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFeatureImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.featureImageList = action.payload?.data || [];
      })
      .addCase(getFeatureImages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || action.error.message;
        state.featureImageList = [];
      })

      .addCase(addFeatureImage.fulfilled, (state, action) => {
        if (action.payload?.success && action.payload?.data) {
          state.featureImageList.push(action.payload.data);
          state.error = null;
        }
      })
      .addCase(addFeatureImage.rejected, (state, action) => {
        state.error = action.payload?.message || action.error.message;
      })

      .addCase(updateFeatureImage.fulfilled, (state, action) => {
        if (action.payload?.success && action.payload?.data) {
          const index = state.featureImageList.findIndex(
            (banner) => banner._id === action.payload.data._id
          );
          if (index !== -1) {
            state.featureImageList[index] = action.payload.data;
          }
          state.error = null;
        }
      })
      .addCase(updateFeatureImage.rejected, (state, action) => {
        state.error = action.payload?.message || action.error.message;
      })
      .addCase(deleteFeatureImage.fulfilled, (state, action) => {
        if (action.payload?.success && action.payload?.data?._id) {
          state.featureImageList = state.featureImageList.filter(
            (banner) => banner._id !== action.payload.data._id
          );
          state.error = null;
        }
      })
      .addCase(deleteFeatureImage.rejected, (state, action) => {
        state.error = action.payload?.message || action.error.message;
      });
  },
});

export default commonSlice.reducer;
