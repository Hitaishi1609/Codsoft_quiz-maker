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
      state.user = action.payload.user;
      // state.isAuthenticated = true,
      state.authenticationResult = action.payload.authenticationResult
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      // state.isAuthenticated = false,
      state.authenticationResult = null
    },
    loadUserRequest: (state) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loadUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    logoutRequest: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.message = action.payload.message;
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    }, 
  }
);
