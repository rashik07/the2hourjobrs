import * as types from "./../types";

const INITIAL_STATE = {
  categories: [],
  industries: [],
  temp_jobpost: {
    id: "",
    title: "",
    vacancy: "",
    category: "",
    skills: "",
    employment_status: "",
    deadline: "",
    workplace: "",
    job_location_inside_dhaka: undefined,
    job_location: [],
    job_description: "",
    min_salary: "",
    max_salary: "",
    min_experience: "",
    max_experience: "",
    education: [],
    gender: [],
    negotiable: false,
  },
  education: [],
  location: [],
  all_jobs: [],
  saved_jobs: [],
  applied_jobs: [],
  filtered_jobs: [],
  self_posted_jobs: [],
  fetched_job: {},
  filter: {},
};

const jobReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_JOB_CATEGORIES:
      return { ...state, categories: action.payload };

    case types.GET_JOB_INDUSTRIES:
      return { ...state, industries: action.payload };

    case types.GET_ALL_JOB:
      return { ...state, all_jobs: action.payload };

    case types.GET_SELF_POSTED_JOB:
      return { ...state, self_posted_jobs: action.payload };

    case types.GET_SAVED_JOB:
      return { ...state, saved_jobs: action.payload };

    case types.GET_APPLIED_JOB:
      return { ...state, applied_jobs: action.payload };
    case types.GET_APPLIED_JOB_PERSON:
      return { ...state, applied_jobs_person: action.payload };
    case types.APPLY_JOB:
      let jobs = _.mapKeys(state.all_jobs, "id");

      jobs[action.payload].applied = true;

      return { ...state, all_jobs: Object.values(jobs) };

    case types.GET_FILTER:
      return { ...state, filter: action.payload };

    case types.SAVE_JOB:
      jobs = _.mapKeys(state.all_jobs, "id");
      const { job_id, saved } = action.payload;

      jobs[job_id].saved = saved;
      return { ...state, all_jobs: Object.values(jobs) };

    case types.DELETE_JOB:
      let all_jobs = state.all_jobs;
      let self_posted_jobs = state.self_posted_jobs;

      all_jobs = all_jobs.filter((job) => job.id !== action.payload.job_id);
      self_posted_jobs = self_posted_jobs.filter(
        (job) => job.id !== action.payload.job_id
      );
      // delete all_jobs[action.payload.job_id];
      // delete self_posted_jobs[action.payload.job_id];

      return {
        ...state,
        all_jobs: Object.values(all_jobs),
        self_posted_jobs: Object.values(self_posted_jobs),
      };

    case types.GET_SINGLE_JOB:
      return { ...state, fetched_job: action.payload };

    case types.FILTER_JOB:
      return { ...state, filtered_jobs: action.payload };

    case types.UPDATE_JOB:
      return state;

    case types.GET_EDUCATION:
      return { ...state, education: action.payload };

    case types.GET_LOCATION_LIST:
      return { ...state, location: action.payload };

    case types.RESET_TEMP_JOB_STATE:
      return { ...state, temp_jobpost: {} };

    case types.RESET_JOB_STATE:
      return {};

    case types.INIT_JOB_STATE:
      return INITIAL_STATE;

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
