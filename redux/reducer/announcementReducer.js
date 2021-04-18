import * as types from "./../types";

const INITIAL_STATE = { annountmentList: [] };

const announcementReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CREATE_ANNOUNCEMENT:
      return { ...state };

    case types.GET_ALL_ANNOUNCEMENT:
      return { ...state, annountmentList: action.payload };

    default:
      return state;
  }
};

export default announcementReducer;
