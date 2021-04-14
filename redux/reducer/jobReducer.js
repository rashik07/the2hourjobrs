import * as types from "./../types";

const INITIAL_STATE = { categories: [] };

const jobReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_JOB_CATEGORIES:
      return { ...state, categories: action.payload };

    default:
      return state;
  }
};

export default jobReducer;
