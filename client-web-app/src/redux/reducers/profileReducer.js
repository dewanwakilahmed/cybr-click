import {
  PROFILE_CREATED_OR_UPDATED,
  PROFILE_CREATE_UPDATE_FAIL,
} from "../types/allTypes";

const initialState = {};

const profileReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case PROFILE_CREATED_OR_UPDATED:
      return {
        ...state,
      };

    case PROFILE_CREATE_UPDATE_FAIL:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default profileReducer;
