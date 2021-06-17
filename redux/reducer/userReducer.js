import * as types from "./../types";

const INITIAL_STATE = {
  user_profile: {


  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.UPDATE_USER_PROFILE:
      return { ...state, user_profile: action.payload } ;
      case types.EDIT_USER_PROFILE:
        return {...state, user_profile: action.payload};
    default:
      return state;
  }
};


export default userReducer;
/*...user_profile,*/