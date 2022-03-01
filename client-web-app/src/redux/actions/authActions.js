import axios from "axios";

import { setAlert } from "../";

// Types
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  PROFILE_LOADED,
  NO_PROFILE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../types/allTypes";

// Utils
import setAuthToken from "../utils/setAuthToken";

// Load User
export const loadUser = () => {
  return async (dispatch) => {
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

      dispatch(loadProfile());
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };
};

// load User Profile
export const loadProfile = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/api/profile/me");

      dispatch({
        type: PROFILE_LOADED,
        payload: res.data,
      });
    } catch (err) {
      const error = err.response.data.msg;
      console.log(error);

      if (err.response.status === 400) {
        dispatch({
          type: NO_PROFILE,
        });
      }
    }
  };
};

// Register User
export const registerUser = (email, password) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post("/api/user/register", body, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "error", 3000)));
      }

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };
};

// Login/Authenticate User
export const loginUser = (email, password) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post("/api/auth", body, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
      }

      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };
};

// Logout / Clear Profile
export const logoutUser = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT,
    });
  };
};
