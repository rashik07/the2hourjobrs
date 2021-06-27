import * as types from "./../types";

const INITIAL_STATE = {
   user_employment:[],
   
};

const employmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CREATE_EMPLOYMENT:
      return { ...state, create_project: action.payload };

    case types.VIEW_EMPLOYMENT:
      return { ...state, view_employment: action.payload } ;
      
      case types.DELETE_EMPLOYMENT:
        let user_employment = state.user_employment;
      
  
       user_employment = user_employment.filter((employment) => employment.id !== action.payload.employment_id);
        
  
        return {
          ...state,
          user_employment: Object.values(user_employment),
      
        };

    default:
      return state;
  }
};

export default employmentReducer;