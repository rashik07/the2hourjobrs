import * as types from "../types";
import backend from "../../api/backend";
import { store } from "../store";
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

/*education */
export const viewEducation = () => async (dispatch) => {
  try {
    const response = await backend.get(
      `v1/user/education/?user=${store.getState().auth.id}`
    );
    dispatch({ type: types.VIEW_EDUCATION, payload: response.data });
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }
};

export const viewSingleEducation = (id) => async (dispatch) => {
  try {
    const response = await backend.get(`v1/user/education/?user=${id}`);
    dispatch({ type: types.VIEW_SINGLE_EDUCATION, payload: response.data });
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }
};

export const createEducation = (formValues) => async (dispatch) => {
  console.log(formValues);
  try {
    formValues = { ...formValues, user: store.getState().auth.id };
    const response = await backend.post(
      "v1/user/education/",
      { ...formValues },
      getConfig()
    );
    if (response.status === 201) {
      dispatch({
        type: types.CREATE_EDUCATION,
        payload: { ...response.data },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteEducation = (education_id) => async (dispatch) => {
  console.log("bal");
  try {
    const response = await backend.delete(
      `/v1/user/education/${education_id}/`,
      getConfig()
    );
    if (response.status == 200 || response.status == 204) {
      dispatch({
        type: types.DELETE_EDUCATION,
        payload: { education_id: education_id },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

/*training */
export const viewTraining = (data) => async (dispatch) => {
  try {
    const response = await backend.get(
      `/v1/user/training/?user=${store.getState().auth.id}`
    );
    dispatch({ type: types.VIEW_TRAINING, payload: response.data });
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }
};

export const viewSingleTraining = (id) => async (dispatch) => {
  try {
    const response = await backend.get(`/v1/user/training/?user=${id}`);
    dispatch({ type: types.VIEW_SINGLE_TRAINING, payload: response.data });
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }
};


export const createTraining = (formValues) => async (dispatch) => {
  console.log(formValues);
  try {
    formValues = { ...formValues, user: store.getState().auth.id };
    const response = await backend.post(
      "/v1/user/training/",
      { ...formValues },
      getConfig()
    );
    if (response.status === 201) {
      dispatch({
        type: types.CREATE_TRAINING,
        payload: { ...response.data },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteTraining = (training_id) => async (dispatch) => {
  console.log("bal");
  try {
    const response = await backend.delete(
      `/v1/user/training/${training_id}/`,
      getConfig()
    );
    if (response.status == 200 || response.status == 204) {
      dispatch({
        type: types.DELETE_TRAINING,
        payload: { training_id: training_id },
      });
    }
  } catch (error) {
    console.log(error);
  }
};


/*ProfessionalQualification */
export const viewQualification = (data) => async (dispatch) => {
  try {
    const response = await backend.get(
      `/v1/user/professional-qualification/?user=${store.getState().auth.id}`
    );
    dispatch({ type: types.VIEW_QUALIFICATION, payload: response.data });
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }
};

export const viewSingleQualification = (id) => async (dispatch) => {
  try {
    const response = await backend.get(`/v1/user/professional-qualification/?user=${id}`);
    dispatch({ type: types.VIEW_SINGLE_QUALIFICATION, payload: response.data });
    console.log(response.data);
  } catch (error) {
    console.log(error);
    console.log(error.response);
    
  }
};


export const createQualification = (formValues) => async (dispatch) => {
  console.log(formValues);
  try {
    formValues = { ...formValues, user: store.getState().auth.id };
    const response = await backend.post(
      "/v1/user/professional-qualification/",
      { ...formValues },
      getConfig()
    );
    if (response.status === 201) {
      dispatch({
        type: types.CREATE_QUALIFICATION,
        payload: { ...response.data },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteQualification = (qualification_id) => async (dispatch) => {
  
  try {
    const response = await backend.delete(
      `/v1/user/professional-qualification/${qualification_id}/`,
      getConfig()
    );
    if (response.status == 200 || response.status == 204) {
      dispatch({
        type: types.DELETE_QUALIFICATION,
        payload: { qualification_id: qualification_id },
      });
    }
  } catch (error) {
    console.log(error);
  }
};
