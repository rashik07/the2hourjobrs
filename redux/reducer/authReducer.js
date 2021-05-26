import * as types from "./../types";

const INITIAL_STATE = {
  id: "",
  isSignedIn: false,
  token: "",
  loading: false,
  errorMsg: "",
  recover_user: {},
  recover_otp: "",
  password_changed: null,
  username: "",
  name: "",
  email: "",
  phone: "",
  password: "",
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
      return { isSignedIn: false };

    case types.RESET_SIGN_UP:
      return INITIAL_STATE;

    case types.AUTH_FAILED:
      return { ...INITIAL_STATE, ...action.payload };

    default:
      return state;
  }
};

export default authReducer;
