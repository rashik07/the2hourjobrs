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
import preferedcategoriesReducer from "./preferedcategoriesReducer";
import notificationReducer from "./notificationsReducer";
import * as types from "./../types";

// export default combineReducers({
//   auth: authReducer,
//   job: jobReducer,
//   announcement: announcementReducer,
//   user: userReducer,
//   form: formReducer,
//   project: projectReducer,
//   employment: employmentReducer,
//   education: usereduReducer,
//   setting: settingReducer,
//   preferedcategories: preferedcategoriesReducer,
//   notifications: notificationReducer,
// });
const appReducer = combineReducers({
  auth: authReducer,
  job: jobReducer,
  announcement: announcementReducer,
  user: userReducer,
  form: formReducer,
  project: projectReducer,
  employment: employmentReducer,
  education: usereduReducer,
  setting: settingReducer,
  preferedcategories: preferedcategoriesReducer,
  notifications: notificationReducer,
});

const rootReducer = (state, action) => {
  if (action.type === types.SIGN_OUT) {
    // for all keys defined in your persistConfig(s)
    // storage.removeItem("persist:root2");
    // storage.removeItem('persist:otherKey')

    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
