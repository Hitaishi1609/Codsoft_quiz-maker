import axios from "axios";
const BASE_URL = "http://localhost:4000/api/v1";

export const getAllQuizes =
  () =>
  async (dispatch) => {
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