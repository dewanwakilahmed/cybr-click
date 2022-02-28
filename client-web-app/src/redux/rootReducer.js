import { combineReducers } from "redux";

// Reducers
import alertReducer from "./reducers/alertReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  alert: alertReducer,
  auth: authReducer,
});

export default rootReducer;
