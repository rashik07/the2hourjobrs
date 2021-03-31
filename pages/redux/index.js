import { combineReducers } from "redux";
import authReducer from "./reducer/authReducer";

export default combineReducers({
  auth: authReducer,
});
