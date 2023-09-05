import axios from "axios";
const BASE_URL = "http://localhost:4000/api/v1";

export const getAllQuizes = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllQuizRequest",
    });

    const { data } = await axios.get(`${BASE_URL}/quiz/getAllQuizes`);

    dispatch({
      type: "getAllQuizSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getAllQuizFail",
      payload: error.response.data.message,
    });
  }
};

export const getSingleQuiz = (quizId) => async (dispatch) => {
  try {
    dispatch({
      type: "getSingleQuizRequest",
    });

    const { data } = await axios.post(
      `${BASE_URL}/quiz/getQuizById`,
      { quizId },
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: "getSingleQuizSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getSingleQuizFail",
      payload: error.response.data.message,
    });
  }
};

export const addQuiz = (quizName,userId) => async (dispatch) => {
  try {
    dispatch({
      type: "addQuizRequest",
    });

    const { data } = await axios.post(
      `${BASE_URL}/quiz/postQuiz`,
      { quizName,userId },
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: "addQuizSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "addQuizFail",
      payload: error.response.data.message,
    });
  }
};
