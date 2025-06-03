import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  loginError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      state.user = typeof action.payload.user === "string" ? JSON.parse(action.payload.user) : action.payload.user;
    },
    loginError: (state, action) => {
      state.loginError = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state.loginError = null; // Reset loginError on logout
    },
  },
});

export const { loginSuccess, logout, loginError } = authSlice.actions;
export default authSlice.reducer;
