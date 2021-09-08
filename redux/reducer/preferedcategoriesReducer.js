import * as types from "./../types";

const INITIAL_STATE = {
  user_prefered_categories: [],
};

const preferedcategoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CREATE_PREFERED_CATEGORIES:
      return { ...state, create_prefered_categories: action.payload };

    case types.VIEW_PREFERED_CATEGORIES:
      return { ...state, view_prefered_categories: action.payload };

    default:
      return state;
  }
};

export default preferedcategoriesReducer;
