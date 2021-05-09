import { combineReducers } from "redux";
import authReducer from "./authReducer";
import jobReducer from "./jobReducer";
import userReducer from "./userReducer";
import announcementReducer from "./announcementReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  job: jobReducer,
  announcement: announcementReducer,
  user: userReducer,
  form: formReducer,
  
});
