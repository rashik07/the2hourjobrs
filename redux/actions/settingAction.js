import * as types from "./../types";
import backend from "./../../api/backend";
import { store } from "./../store";
import _ from "lodash";
import { message } from "antd";
const getConfig = () => {
  const token = store.getState().auth.token;

  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  return config;
};

export const editPassword = (values) => async (dispatch) => {
  // console.log(values);
  // console.log(values.old_password);
  // console.log(values.new_password);

  try {
    // values["image"] = values["photo"][0].originFileObj;

    const response = await backend.put(`/v1/user/update/`, values, getConfig());
    if (values.old_password == values.new_password) {
      message.error("Old Password and New Password cannot be same");
    } else {
      if (response.status === 200) {
        dispatch({ type: types.EDIT_PASSWORD, payload: response.data });
        message.success("password change successfully");
        console.log(response);
      }
    }

    // dispatch({ type: types.EDIT_PASSWORD, payload: response.data });
    // console.log(response);
  } catch (error) {
    +console.log(error);
    console.log(error.response);
    message.error(
      "Password is not changed, please enter your correct current password"
    );
  }
};
export const deleteProfile = () => async (dispatch) => {
  try {
    const response = await backend.delete(
      `v1/user/other_users/${store.getState().auth.id}`,
      getConfig()
 
    );
    console.log("success")
    if (response.status == 200 || response.status == 204) {
      // dispatch({
      //   type: types.DELETE_PROFILE,
      //   payload: { project_id: project_id },
      // });
    }
  } catch (error) {
    console.log(error);
 
  }
};
