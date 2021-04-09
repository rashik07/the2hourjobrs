import * as types from "./../types";
import backend from "./../../../pages/api/backend";
import { useDispatch } from "react-redux";

export const signIn = async (logInformValues) => {
  const dispatch = useDispatch();

  const response = await backend.post("v1/user/token", { ...logInformValues });
  dispatch({ type: types.SIGN_IN, payload: response.data });
};

export const signOut = () => {
  const dispatch = useDispatch();

  dispatch({ type: types.SIGN_OUT });
};
