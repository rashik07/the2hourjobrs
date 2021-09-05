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

export const viewProject = (data) => async (dispatch) => {
  try{
    
    const response = await backend.get(`v1/user/projects/?user=${store.getState().auth.id}`, getConfig());
    dispatch({ type: types.VIEW_PROJECT, payload: response.data });
  }
  catch (error) {
         console.log(error);
         console.log(error.response);
      }
};

export const createProject = (formValues) => async (dispatch) => {
  console.log(formValues)
  try {
    formValues={...formValues,user:store.getState().auth.id}
    const response = await backend.post(
      "v1/user/projects/",
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


export const deleteProject = (project_id) => async (dispatch) => {
  try {
    const response = await backend.delete(
      `v1/user/projects/${project_id}/`,
      getConfig()
    );

    if (response.status == 200 || response.status == 204) {
      dispatch({
        type: types.DELETE_PROJECT,
        payload: { project_id: project_id },
      });
    }
  } catch (error) {
    console.log(error);
  }
};
