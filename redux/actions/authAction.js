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
export const googleLogin = (accesstoken) => async (dispatch) => {
  console.log("google login");
  console.log(accesstoken);
  try {
    const response = await backend.post("v1/auth/convert-token/", {
      token: accesstoken,
      backend: 'google-oauth2',
      grant_type: 'convert_token',
      client_id: 'NbBuZ5XpoYf65Wk722mFZt6IqrF9fZ1UcXrnjKTv',
      client_secret: '6cSQV1mdDbzQPNqAvPxZUygtG7cKFDQGecxd8ywskDbcq5exCzw0AuNtLzAcKFIC4Y2LDmtr72kwsaNdesW77uBXtkkJeUoyhBpuZ9u5YvGteOxDK4ubhf1jgPIhcH5D',
    });
    dispatch({ type: types.SIGN_IN, payload: response.data });
    console.log(response.data);

    return true;
  } catch (error) {
    dispatch({ type: types.AUTH_FAILED });
    return false;
  }
};
// export const googleLogin = (accesstoken) => async (dispatch) => {
//   console.log("google login");
//   console.log(accesstoken);
//   try {
//     const response = await backend.post("v1/auth/convert-token/", {
//       token: accesstoken,
//       backend: 'google-oauth2',
//       grant_type: 'convert_token',
//       client_id: '961548394079-b0mfvhnvg76i0ie9j6lkhcrij992dc76.apps.googleusercontent.com',
//       client_secret: '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',
//     });
//     dispatch({ type: types.SIGN_IN, payload: response.data });
//     console.log(response.data);

//     return true;
//   } catch (error) {
//     dispatch({ type: types.AUTH_FAILED });
//     return false;
//   }
//   axios.post('http://localhost:8000/auth/convert-token/', {
//       token: accesstoken,
//       backend: 'google-oauth2',
//       grant_type: 'convert_token',
//       client_id: 'your_key',
//       client_secret: 'your_key',
//   })
//   .then(res => {
//       localStorage.setItem('access_token', res.data.access_token)
//       localStorage.setItem('refresh_token', res.data.refresh_token)
//   })
// };
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
