import { createReducer } from "@reduxjs/toolkit";

export const authReducer = createReducer(
  {},
  {
    signupRequest: (state) => {
      state.loading = true;
      state.isAuthenticated = false
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.success = action.payload.success;
      state.message = action.payload.message;
      state.isAuthenticated = true
    },
    signupFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null
    },
    loginRequest: (state) => {
      state.loading = true;
      state.isAuthenticated = false
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.success = action.payload.success;
      state.message = action.payload.message;
      state.isAuthenticated = true
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false
    } 
  }
);
