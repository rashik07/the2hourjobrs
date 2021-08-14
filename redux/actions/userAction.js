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
  const response = await backend.get(`/v1/user/me/?user=${store.getState().auth.id}`, getConfig());
  dispatch({ type: types.UPDATE_USER_PROFILE, payload: response.data });
 
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }

};

export const editUserProfile = (values) => async (dispatch) =>{

  console.log(values);
  try{
  const response = await backend.patch(
    `/v1/user/profile/${store.getState().auth.id}/`,values,
    getConfig()
    );
  
  dispatch({ type: types.EDIT_USER_PROFILE, payload: response.data});
  console.log(values);
  }
  catch (error) {
    console.log(error);
    console.log(error.response);
 }
};
export const getDistrict = (data) => async (dispatch) => {
  try{
  const response = await backend.get("/v1/category/district/", getConfig());
  dispatch({ type: types.GET_DISTRICT, payload: response.data });
 
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }

};
export const getDivision = (data) => async (dispatch) => {
  try{
  const response = await backend.get("/v1/category/division/", getConfig());
  dispatch({ type: types.GET_DIVISION, payload: response.data });
 
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }

};
export const getThana = (data) => async (dispatch) => {
  try{
  const response = await backend.get("/v1/category/thana/", getConfig());
  dispatch({ type: types.GET_THANA, payload: response.data });
 
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }

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

export const saveWorker =
  (worker_id, saved_user_instance_id, setSavedStatus) => async (dispatch) => {
    const formData = { saved_user: worker_id, saved_by: null };

    let response = null;

    try {
      if (saved_user_instance_id) {
        response = await backend.delete(
          `v1/user/save_user/${saved_user_instance_id}/`,
          getConfig()
        );
      } else {
        response = await backend.post(
          `v1/user/save_user/`,
          formData,
          getConfig()
        );
      }

      if (response.status === 201) {
        setSavedStatus(response.data.id);
        dispatch({
          type: types.SAVE_WORKER,
          payload: {
            saved_user: worker_id,
            saved_user_instance_id: response.data.id,
          },
        });
      }
      if (response.status === 204) {
        setSavedStatus(null);
        dispatch({
          type: types.SAVE_WORKER,
          payload: { saved_user: worker_id, saved_user_instance_id: null },
        });
      }
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  };

export const getSavedWorkers = () => async (dispatch) => {
  try {
    let response = null;

    response = await backend.get(
      `/v1/user/save_user/?saved_by=${store.getState().auth.id}`,
      getConfig()
    );

    const data = response.data.map((instance) => instance.saved_user_profile);

    dispatch({ type: types.GET_SAVED_WORKERS, payload: data });
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }
};

