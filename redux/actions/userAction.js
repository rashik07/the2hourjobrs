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
  try {
    const response = await backend.get("/v1/user/me/", getConfig());
    dispatch({ type: types.UPDATE_USER_PROFILE, payload: response.data });
  } catch (error) {
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

export const getOtherWorkers = () => async (dispatch) => {
  try {
    let response = null;

    if (store.getState().auth.isSignedIn) {
      response = await backend.get("/v1/user/other_users/", getConfig());
    } else {
      response = await backend.get("/v1/user/other_users/");
    }

    dispatch({ type: types.GET_OTHER_WORKERS, payload: response.data });
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }
};

export const filterWorkers = (filter) => async (dispatch) => {
  try {
    let url = "v1/user/filter_worker/?";
    let response = null;

    const createURL = {
      gender: (url, gender) => {
        url += `profile__gender=${gender}&`;
        return url;
      },

      location: (url, location) => {
        const { id, type } = location;

        url += `profile__${type}=${id}&`;
        return url;
      },

      keyword: (url, keyword) => {
        url += `keyword=${keyword}&`;
        return url;
      },
    };

    for (let i in filter) {
      url = createURL[i](url, filter[i]);
    }

    if (store.getState().auth.isSignedIn) {
      response = await backend.get(url, getConfig());
    } else {
      response = await backend.get(url);
    }

    dispatch({ type: types.FILTERED_WORKERS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
