import * as types from "./../types";
import backend from "./../../api/backend";

export const signIn = (logInformValues) => async (dispatch) => {
  try {
    const response = await backend.post("v1/user/token", {
      ...logInformValues,
    });
    dispatch({ type: types.SIGN_IN, payload: response.data });
  } catch (error) {
    // dispatch({ type: types.AUTH_FAILED });
    dispatch(signOut());
  }
};

export const signOut = () => (dispatch) => {
  dispatch({ type: types.SIGN_OUT });
};
