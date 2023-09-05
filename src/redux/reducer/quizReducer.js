import { createReducer } from "@reduxjs/toolkit";

export const quizReducer = createReducer(
  {},
  {
    getAllQuizRequest: (state) => {
      state.loading = true;
    },
    getAllQuizSuccess: (state, action) => {
      state.loading = false;
      state.success = action.payload.success;
      state.message = action.payload.message;
      state.quizes = action.payload.quizes;
    },
    getAllQuizFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null
    },
    getSingleQuizRequest: (state) => {
      state.loading = true;
    },
    getSingleQuizSuccess: (state, action) => {
      state.loading = false;
      state.success = action.payload.success;
      state.message = action.payload.message;
      state.quiz = action.payload.quiz;
    },
    getSingleQuizFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addQuizRequest: (state) => {
      state.loading = true;
    },
    addQuizSuccess: (state, action) => {
      state.loading = false;
      state.success = action.payload.success;
      state.message = action.payload.message;
    },
    addQuizFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    } 
  }
);
