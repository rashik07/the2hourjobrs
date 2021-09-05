import { combineReducers } from "redux";
import authReducer from "./authReducer";
import jobReducer from "./jobReducer";
import userReducer from "./userReducer";
import announcementReducer from "./announcementReducer";
import projectReducer from "./projectReducer";
import usereduReducer from "./usereducationReducer";
import { reducer as formReducer } from "redux-form";
import employmentReducer from "./employmentReducer";
import settingReducer from "./settingReducer";

export default combineReducers({
  auth: authReducer,
  job: jobReducer,
  announcement: announcementReducer,
  user: userReducer,
  form: formReducer,
  project: projectReducer,
  employment:employmentReducer,
  education: usereduReducer,
  setting: settingReducer,
});
