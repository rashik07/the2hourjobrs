import * as types from "./../types";
import backend from "./../../api/backend";
import { store } from "./../store";
import _ from "lodash";

const getConfig = () => {
  const token = store.getState().auth.token;

  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  return config;
};

export const updateProfile = (data) => async (dispatch) => {
  try{
  const response = await backend.get("/v1/user/me/", getConfig());
  dispatch({ type: types.UPDATE_USER_PROFILE, payload: response.data });
  }
  catch (error) {
         console.log(error);
         console.log(error.response);
      }

  //   try {
  //     const response = await backend.get("v1/category/industry/", getConfig());

  //     dispatch({ type: types.GET_JOB_INDUSTRIES, payload: response.data });
  //   } catch (error) {
  //     console.log(error);
  //   }
};
