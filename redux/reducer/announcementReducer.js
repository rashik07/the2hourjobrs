import * as types from "./../types";

const INITIAL_STATE = {
  annountmentList: [],
  announcementResponse: {},
  singleAnnouncement: [],
  myAnnouncement: [],
  savedannountmentList: [],
};

const announcementReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CREATE_ANNOUNCEMENT:
      return { ...state, announcementResponse: action.payload };

    case types.GET_ALL_ANNOUNCEMENT:
      return { ...state, annountmentList: action.payload };

    case types.GET_ALL_SAVED_ANNOUNCEMENT:
      return { ...state, savedannountmentList: action.payload };

    case types.GET_ALL_ANNOUNCEMENT_OF_USER:
      return { ...state, myAnnouncement: action.payload };

    case types.GET_SINGLE_ANNOUNCEMENT:
      return { ...state, singleAnnouncement: action.payload };

    default:
      return state;
  }
};

export default announcementReducer;
