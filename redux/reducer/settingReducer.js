import * as types from "./../types";

const INITIAL_STATE = {
  user_password: {},

};

const settingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case types.EDIT_PASSWORD:
      return {...state, user_password: action.payload};
    


    default:
      return state;
  }
};


export default settingReducer;
