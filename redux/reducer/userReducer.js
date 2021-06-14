import * as types from "./../types";

const INITIAL_STATE = {
  user_profile: {},
  all_workers: [],
  filtered_workers: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.UPDATE_USER_PROFILE:
      return { ...state, user_profile: action.payload };

    case types.GET_OTHER_WORKERS:
      return { ...state, all_workers: action.payload };

    case types.FILTERED_WORKERS:
      return { ...state, filtered_workers: action.payload };

    case types.INIT_USER_STATE:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default userReducer;
