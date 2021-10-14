import * as types from "./../types";

const INITIAL_STATE = {
  user_profile: {},
  all_workers: [],
  all_profile:{},
  filtered_workers: [],
  saved_workers: [],
  division: [],
  district: [],
  thana: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.UPDATE_USER_PROFILE:
      return { ...state, user_profile: action.payload };
    case types.EDIT_PHONE:
      return { ...state, edit_phone: action.payload };
      case types.EDIT_USER_PROFILE:
        return { ...state, edit_user_profile: action.payload };
    case types.GET_DIVISION:
      return { ...state, get_division: action.payload };
    case types.GET_DISTRICT:
      return { ...state, get_district: action.payload };
    case types.GET_THANA:
      return { ...state, get_thana: action.payload };
    case types.GET_SINGLE_PROFILE:
      return { ...state, all_profile: action.payload };

    case types.GET_OTHER_WORKERS:
      return { ...state, all_workers: action.payload };

    case types.FILTERED_WORKERS:
      return { ...state, filtered_workers: action.payload };

    case types.GET_SAVED_WORKERS:
      return { ...state, saved_workers: action.payload };

    case types.SAVE_WORKER:
      let workers = _.mapKeys(state.all_workers, "id");
      const { saved_user, saved_user_instance_id } = action.payload;

      workers[saved_user].saved_user_instance_id = saved_user_instance_id;
      return { ...state, all_workers: Object.values(workers) };

    case types.INIT_USER_STATE:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default userReducer;
