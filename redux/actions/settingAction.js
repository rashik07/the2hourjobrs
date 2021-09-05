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



export const editPassword = (values) => async (dispatch) =>{
  console.log(values)
  
  try{
    
    
   
    // values["image"] = values["photo"][0].originFileObj;

  const response = await backend.put(
    `/v1/user/update/`,values,
    getConfig()
    );
  dispatch({ type: types.EDIT_PASSWORD, payload: response.data});
  console.log(response);
  }
  catch (error) {
  +
    console.log(error);
    console.log(error.response);
 }
};

