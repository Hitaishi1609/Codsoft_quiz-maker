import axios from "axios";
const BASE_URL = "http://localhost:4000/api/v1";

export const getAllQuizQuestions =
  (quizId) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "getAllQuizQuestionsRequest",
      });

      const { data } = await axios.post(
        `${BASE_URL}/ques/getQuesByQuizId`,
        { quizId },
        {
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          withCredentials: true,
        }
      );
        console.log("Data",data);
      dispatch({
        type: "getAllQuizQuestionsSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "getAllQuizQuestionsFail",
        payload: error.response.data.message,
      });
    }
};


export const postQuestion =
  (quizId, quesStmt, options, correctAns) =>
  async (dispatch) => {
    try {
      //console.log("options", options)
      dispatch({
        type: "postQuestionRequest",
      });

      const { data } = await axios.post(
        `${BASE_URL}/ques/postQuestion`,
        { quizId, quesStmt, options, correctAns },
        {
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: "postQuestionSuccess",
        payload: data,
      });
      
    } catch (error) {
      dispatch({
        type: "postQuestionFail",
        payload: error.response.data.message,
      });

    
  
    }
  };