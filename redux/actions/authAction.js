import * as types from "./../types";
import backend from "./../../api/backend";

export const signIn = (logInformValues) => async (dispatch) => {
  try {
    const response = await backend.post("v1/user/token/", {
      ...logInformValues,
    });
    dispatch({ type: types.SIGN_IN, payload: response.data });
    console.log(response.data);

    return true;
  } catch (error) {
    dispatch({ type: types.AUTH_FAILED });
    return false;
  }
};

export const signUp = (formValues, router) => async (dispatch) => {
  try {
    await backend.post("v1/user/signup/", {
      ...formValues,
    });
    
    const { username, password } = formValues;

    dispatch(signIn({ username, password }));
    console.log(formValues);

    router.back();
  } catch (error) {
    let response = error.response.data;

    Object.entries(response).forEach(([key, value]) => {
      response[key] = value[0];
    });

    dispatch({
      type: types.AUTH_FAILED,
      payload: response,
    });
  }
};

export const signOut = () => (dispatch) => {
  // dispatch({ type: types.RESET_JOB_STATE });
  dispatch({ type: types.SIGN_OUT });
};
