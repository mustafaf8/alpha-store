import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload || null;
      state.isAuthenticated = Boolean(action.payload);
    },
    clearAuthError: (state) => {
      state.error = null;
    },
  },
});

export const { setUser, clearAuthError } = authSlice.actions;
export default authSlice.reducer;
