import * as types from "./../types";

const INITIAL_STATE = {
  categories: [],
  industries: [],
  temp_jobpost: {
    title: "",
    vacancy: "",
    category: "",
    skills: "",
    employment_status: "",
    deadline: "",
    workplace: "",
    job_location_inside_dhaka: undefined,
    job_location: [],
    description: "",
    min_salary: "",
    max_salary: "",
    min_experience: "",
    max_experience: "",
    education: [],
    gender: [],
  },
  education: {},
  location: [],
  all_jobs: [],
};

const jobReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_JOB_CATEGORIES:
      return { ...state, categories: action.payload };

    case types.GET_JOB_INDUSTRIES:
      return { ...state, industries: action.payload };

    case types.GET_ALL_JOB:
      return { ...state, all_jobs: action.payload };

    case types.GET_EDUCATION:
      return { ...state, education: action.payload };

    case types.GET_LOCATION_LIST:
      return { ...state, location: action.payload };

    case types.SAVE_TEMPORARY_JOBPOST:
      return {
        ...state,
        temp_jobpost: { ...state.temp_jobpost, ...action.payload },
      };

    case types.UNSAVE_TEMPORARY_JOBPOST:
      return { ...state, temp_jobpost: INITIAL_STATE.temp_jobpost };

    default:
      return state;
  }
};

export default jobReducer;
