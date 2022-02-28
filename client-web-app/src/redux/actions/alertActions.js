import { v4 as uuid } from "uuid";

// Types
import { SET_ALERT, REMOVE_ALERT } from "../types/allTypes";

// Set and then Remove Alert
export const setAlert = (msg, alertType, timeout = 5000) => {
  return (dispatch) => {
    const id = uuid();
    dispatch({
      type: SET_ALERT,
      payload: { id, msg, alertType },
    });

    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
          payload: id,
        }),
      timeout
    );
  };
};
