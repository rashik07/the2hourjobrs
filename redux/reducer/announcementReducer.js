import * as types from "./../types";

const INITIAL_STATE = {};

const jobReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CREATE_ANNOUNCEMENT:
      return { ...state };

    default:
      return state;
  }
};

export default jobReducer;
