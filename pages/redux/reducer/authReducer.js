import * as types from "./../types";

const INITIAL_STATE = {
  isSignedIn: false,
  token: "",
  loading: false,
  errorMsg: "",
  recover_user: {},
  recover_otp: "",
  password_changed: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        loading: false,
        ...action.payload,
        errorMsg: "",
      };

    case types.SIGN_OUT:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default authReducer;
