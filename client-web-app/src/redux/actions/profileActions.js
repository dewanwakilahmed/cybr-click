import axios from "axios";

import {
  PROFILE_CREATED_OR_UPDATED,
  PROFILE_CREATE_UPDATE_FAIL,
} from "../types/allTypes";

import { loadProfile, setAlert } from "../";

// Create/Update Profile
export const createOrUpdateProfile = (profileData) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/profile", profileData, config);

      dispatch({
        type: PROFILE_CREATED_OR_UPDATED,
      });

      dispatch(setAlert(res.data.msg, "success"));

      dispatch(loadProfile());
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
      }

      dispatch({
        type: PROFILE_CREATE_UPDATE_FAIL,
      });
    }
  };
};
