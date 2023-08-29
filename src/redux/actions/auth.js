import axios from "axios";
import { toast } from "react-hot-toast";
const BASE_URL = "http://localhost:4000/api/v1";

export const signup =
  (firstName, lastName, email, password, confirmPassword) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "signupRequest",
      });

      const { data } = await axios.post(
        `${BASE_URL}/auth/signup`,
        { firstName, lastName, email, password, confirmPassword },
        {
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: "signupSuccess",
        payload: data,
      });
      //toast.success("Signup Successful")
    } catch (error) {
      dispatch({
        type: "signupFail",
        payload: error.response.data.message,
      });

      if (error.response) {
        console.log('Response Error Data:', error.response.data);
        console.log('Response Error Status:', error.response.status);
        console.log('Response Error Headers:', error.response.headers);
      } else if (error.request) {
        console.log('Request Error:', error.request);
      } else {
        console.log('Error:', error.message);
      }
  
    }
  };


  export const login =
  (email, password) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "loginRequest",
      });

      const { data } = await axios.post(
        `${BASE_URL}/auth/login`,
        { email, password },
        {
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: "loginSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "loginFail",
        payload: error.response.data.message,
      });

      if (error.response) {
        console.log('Response Error Data:', error.response.data);
        console.log('Response Error Status:', error.response.status);
        console.log('Response Error Headers:', error.response.headers);
      } else if (error.request) {
        console.log('Request Error:', error.request);
      } else {
        console.log('Error:', error.message);
      }
  
    }
  };

export const clearErrorMessage = () => dispatch =>{
  dispatch({
    type: "clearError"
  })
  dispatch({
    type: "clearMessage"
  })
}

export const logout=()=>async dispatch=>{
  try {
    dispatch({ type: 'logoutRequest' });

    const { data } = await axios.post(`${BASE_URL}/auth/logout`, {
      withCredentials: true,
    });
    dispatch({ type: 'logoutSuccess', payload: data.message });
  } catch (error) {
    dispatch({ type: 'logoutFail', payload: error.response.data.message });
  }
}



