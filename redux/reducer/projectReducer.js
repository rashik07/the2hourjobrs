import * as types from "./../types";

const INITIAL_STATE = {
   user_project:[],
   
};

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CREATE_PROJECT:
      return { ...state, create_project: action.payload };

    case types.VIEW_PROJECT:
      return { ...state, view_project: action.payload } ;

   

    default:
      return state;
  }
};

export default projectReducer;