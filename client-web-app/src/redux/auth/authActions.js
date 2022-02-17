import axios from "axios";

// Types
import { USER_LOADED, AUTH_ERROR } from "./authTypes";

// Utils
import setAuthToken from "../utils/setAuthToken";

// Load User
export const loadUser = async (dispatch) => {
  const token = localStorage.token;

  if (token) {
    setAuthToken(token);
  }

  try {
    const res = await axios.get("/api/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
