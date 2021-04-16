import * as types from "./../types";
import backend from "./../../api/backend";
import { store } from "./../store";

const getConfig = () => {
  const token = store.getState().auth.token;

  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  return config;
};

export const createAnnouncement = () => async (dispatch) => {
  try {
    /*
    Annoucement Media API URL = v1/announcement/image/
    Annoucement Post URL = v1/announcement/data/
    
    
    const response = await backend.get("URL", data, getConfig());
    */
  } catch (error) {
    console.log(error);
  }
};
