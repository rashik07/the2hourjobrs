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



export const getAllNotification = () => async (dispatch) => {
  try {
    const response = await backend.get("v1/user/notifications/all/", getConfig());
    if (response.status === 200) {
      dispatch({
        type: types.GET_ALL_NOTIFICATION,
        payload: response.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllUnreadNotification = () => async (dispatch) => {
  try {
    const response = await backend.get(
      "v1/user/notifications/unread/",
      getConfig()
    );
    if (response.status === 200) {
      dispatch({
        type: types.GET_ALL_UNREAD_NOTIFICATION,
        payload: response.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const markAllasRead = () => async (dispatch) => {
    try {
      const response = await backend.get(
        "v1/user/notifications/mark-all-as-read/",
        getConfig()
      );
      if (response.status === 200) {
        dispatch({
          type: types.MARK_ALL_AS_READ_NOTIFICATION,
          payload: response.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
