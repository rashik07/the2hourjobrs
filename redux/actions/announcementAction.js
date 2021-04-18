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

export const createAnnouncement = (formValues) => async (dispatch) => {
  try {
    const response = await backend.post(
      "v1/announcement/data/",
      { ...formValues },
      getConfig()
    );
    if (response.status === 201) {
      dispatch({
        type: types.CREATE_ANNOUNCEMENT,
        payload: { ...response.data },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllAnnouncement = () => async (dispatch) => {
  try {
    const response = await backend.get("v1/announcement/data/", getConfig());
    if (response.status === 200) {
      dispatch({
        type: types.GET_ALL_ANNOUNCEMENT,
        payload: response.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
