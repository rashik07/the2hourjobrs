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
export const updateProfile = () => async (dispatch) => {
  // console.log(store.getState().auth.id);
  try {
    const response = await backend.get(
      `/v1/user/me/?user=${store.getState().auth.id}`,
      getConfig()
    );
    dispatch({ type: types.UPDATE_USER_PROFILE, payload: response.data });
    store.getState().auth.id = response.data.id;
    store.getState().auth.username = response.data.username;
    store.getState().auth.email = response.data.email;
    store.getState().auth.phone = response.data.phone;
    return response.data;
    //console.log("user data callll");
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }
};
export const updatePhone = (values, id) => async (dispatch) => {
  try {
    const response = await backend.patch(
      `/v1/user/signup/${id}/`,
      values,
      getConfig()
    );
    dispatch({ type: types.EDIT_PHONE, payload: response.data });
    console.log("user data callll");
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }
};
export const PhoneVerifyUpdate = (data, router) => async (dispatch) => {
  console.log(data);
  
  try {
    const response = await backend.put(
      `/v1/user/mobile_verify_update/`,
      data,
      getConfig()
    );

    dispatch({ type: types.EDIT_PHONE, payload: response.data });
    console.log("Mobile Verified");
    // router.push("/Profile");
    
    return response;
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }
};
export const getSpecificProfile = (profile_id) => async (dispatch) => {
  try {
    const response = await backend.get(`/v1/user/other_users/${profile_id}/`);
    // let response = null;

    // if (store.getState().auth.isSignedIn) {
    //   response = await backend.get(`/v1/user/other_users/${profile_id}`, getConfig());
    // } else {
    //   response = await backend.get(`/v1/user/other_users/${profile_id}`);
    // }

    dispatch({
      type: types.GET_SINGLE_PROFILE,
      payload: response.data,
    });

    //console.log(response.data);
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }
};

export const editUserProfile = (values, id,fileList) => async (dispatch) => {
  console.log(values);

  try {
    // values["image"] = values["photo"][0].originFileObj;

    const response = await backend.patch(
      `/v1/user/profile/${id}/`,
      values,
      getConfig()
    );
    dispatch({ type: types.EDIT_USER_PROFILE, payload: response.data });
    console.log(values);
  } catch (error) {
    +console.log(error);
    console.log(error.response);
  }
};
export const getDivision = () => async (dispatch) => {
  try {
    //   console.log("working");
    const response = await backend.get("/v1/category/division/");
    dispatch({ type: types.GET_DIVISION, payload: response.data });
    // console.log(response.data);
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }
};
export const getDistrict = () => async (dispatch) => {
  try {
    const response = await backend.get("/v1/category/district/");
    dispatch({ type: types.GET_DISTRICT, payload: response.data });
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }
};

export const getThana = () => async (dispatch) => {
  try {
    const response = await backend.get("/v1/category/thana/");
    dispatch({ type: types.GET_THANA, payload: response.data });
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }
};

export const getOtherWorkers = (page,pageSize) => async (dispatch) => {
  try {
    // let response = null;

    // if (store.getState().auth.isSignedIn) {
    //   response = await backend.get("/v1/user/other_users/", getConfig());
    // } else {

    const response = await backend.get(`/v1/user/other_users/?page=${page}&page_size=${pageSize}&profile__available_for_work=${true}`, getConfig());
    // }

    dispatch({ type: types.GET_OTHER_WORKERS, payload: response.data });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }
};
export const getWorkers = (page=1,pageSize=5,employeer=false,worker=false,available=null) => async (dispatch) => {
  try {

    let url = `/v1/user/other_users/?page=${page}&page_size=${pageSize}&profile__employeer=${employeer}&profile__worker=${worker}&`;
    if(available!=null)
    {
      url += `profile__available_for_work=${available}&`;
    }
    const response = await backend.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }
};
export const filterWorkers = (filter, page, pageSize) => async (dispatch) => {
  try {
    let url = `v1/user/filter_worker/?page=${page}&page_size=${pageSize}&profile__available_for_work=${true}&`;
    let response = null;
    console.log(filter);
    const createURL = {
      gender: (url, gender) => {
        url += `profile__gender=${gender}&`;
        return url;
      },
      employmentStatus: (url, job_nature) => {
        url += `profile__job_nature=${job_nature}&`;
        return url;
      },
      category: (url, category) => {
        url += `category=${category.id}&`;
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
    // dispatch({ type: types.FILTERED_WORKERS, payload: response.data });
    if (store.getState().auth.isSignedIn) {
      response = await backend.get(url);
    } else {
      response = await backend.get(url);
    }
    if (response.status == 200) {
      console.log(response);
      dispatch({ type: types.FILTERED_WORKERS, payload: response.data });
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const saveWorker =
  (worker_id, saved_user_instance_id, setSavedStatus, isSaved, savedId, setReload) => async (dispatch) => {
    const formData = { saved_user: worker_id, saved_by: null };

    let response = null;
    let saved = false;
    try {
      if (isSaved && savedId!=null) {
        response = await backend.delete(
          `v1/user/save_user/${savedId}/`,
          getConfig()
        );
        saved = false;
      } else {
        response = await backend.post(
          `v1/user/save_user/`,
          formData,
          getConfig()
        ); 
        saved = true;
      }
      getSavedWorkers();
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
      setReload(true);
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

    dispatch({ type: types.GET_SAVED_WORKERS, payload: response.data });
    // console.log(response.data);
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }
};
