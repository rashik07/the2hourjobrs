import * as types from "./../types";

const INITIAL_STATE = { categories: [], industries: [] };

const jobReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_JOB_CATEGORIES:
      return { ...state, categories: action.payload };

    case types.GET_JOB_INDUSTRIES:
      return { ...state, industries: action.payload };

    default:
      return state;
  }
};

export default jobReducer;
