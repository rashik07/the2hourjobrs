import { combineReducers } from "redux";
import authReducer from "./authReducer";
import jobReducer from "./jobReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  job: jobReducer,
  form: formReducer,
});
