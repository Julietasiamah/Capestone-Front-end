// src/redux/reducers/authRegReducer.js
import { createSlice } from "@reduxjs/toolkit";

const authRegSlice = createSlice({
  name: "authReg",
  initialState: {
    registrationSuccess: false,
    registrationError: null,
  },
  reducers: {
    registerSuccess: (state) => {
      state.registrationSuccess = true;
      state.registrationError = null;
    },
    registerFailure: (state, action) => {
      state.registrationSuccess = false;
      state.registrationError = action.payload;
    },
  },
});

export const { registerSuccess, registerFailure } = authRegSlice.actions;
export default authRegSlice.reducer;
