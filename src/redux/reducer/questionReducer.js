import { createReducer } from "@reduxjs/toolkit";

export const questionReducer = createReducer(
  {},
  {
    getAllQuizQuestionsRequest: (state) => {
      state.loading = true;
    },
    getAllQuizQuestionsSuccess: (state, action) => {
      state.loading = false;
      state.success = action.payload.success;
      state.questions = action.payload.questions;
    },
    getAllQuizQuestionsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null
    },
    postQuestionRequest: (state) => {
      state.loading = true;
    },
    postQuestionSuccess: (state, action) => {
      state.loading = false;
      state.success = action.payload.success;
      state.question = action.payload.data;
    },
    postQuestionFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
);
