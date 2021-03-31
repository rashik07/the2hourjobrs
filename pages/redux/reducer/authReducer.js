const INITIAL_STATE = {
  isSignedIn: false,
  token: "",
  user: {
    name: "",
  },
  loading: false,
  errorMsg: "",
  recover_user: {},
  recover_otp: "",
  password_changed: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  return state;
};

export default authReducer;
