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

export const viewEmployment = (data) => async (dispatch) => {
  try{
    
    const response = await backend.get(`/v1/user/job_experience/?user=${store.getState().auth.id}`, getConfig());
    dispatch({ type: types.VIEW_EMPLOYMENT, payload: response.data });
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

export const createEmployment = (formValues) => async (dispatch) => {
  console.log(formValues)
  try {
    formValues={...formValues,user:store.getState().auth.id}
    const response = await backend.post(
      "v1/user/job_experience/",
      { ...formValues },
      getConfig()
     

    );
    
    if (response.status === 201) {
      dispatch({
        type: types.CREATE_PROJECT,
        payload: { ...response.data },
        
      });
      
    }
  } catch (error) {
    console.log(error);
  }
};


export const deleteEmployment = (employment_id) => async (dispatch) => {
  try {
    const response = await backend.delete(
      `v1/user/job_experience/${employment_id}/`,
      getConfig()
    );

    if (response.status == 200 || response.status == 204) {
      dispatch({
        type: types.DELETE_EMPLOYMENT,
        payload: { employment_id: employment_id },
      });
    }
  } catch (error) {
    console.log(error);
  }
};
