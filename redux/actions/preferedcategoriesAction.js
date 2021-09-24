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

export const viewPreferedCategories = () => async (dispatch) => {
  try {
    const response = await backend.get(
      `/v1/user/prefered-options/?user=${store.getState().auth.id}`,
      getConfig()
    );
    dispatch({ type: types.VIEW_PREFERED_CATEGORIES, payload: response.data[0] });
    console.log("user data callll");
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }
};

export const viewSinglePreferedCategories = (id) => async (dispatch) => {
  try {
    const response = await backend.get(
      `/v1/user/prefered-options/?user=${id}`,
      getConfig()
    );
    dispatch({ type: types.VIEW_SINGLE_PREFERED_CATEGORIES, payload: response.data[0] });
    console.log("user data callll");
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }
};


export const createPreferedCategories = (formValues) => async (dispatch) => {
  console.log(formValues);
  try {
    formValues = { ...formValues, user: store.getState().auth.id };
    const response = await backend.post(
      "/v1/user/prefered-options/",
      { ...formValues },
      getConfig()
    );

    if (response.status === 201) {
      dispatch({
        type: types.CREATE_PREFERED_CATEGORIES,
        payload: { ...response.data },
      });
    }
  } catch (error) {
    console.log(error);
  }
};
