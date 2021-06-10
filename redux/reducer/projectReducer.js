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

      case types.DELETE_PROJECT:
        let user_project = state.user_project;
      //  let self_posted_jobs = state.self_posted_jobs;
  
      user_project = user_project.filter((project) => project.id !== action.payload.project_id);
        //self_posted_jobs = self_posted_jobs.filter(
          //(job) => job.id !== action.payload.job_id
        //);
        // delete all_jobs[action.payload.job_id];
        // delete self_posted_jobs[action.payload.job_id];
  
        return {
          ...state,
          user_project: Object.values(user_project),
         // self_posted_jobs: Object.values(self_posted_jobs),
        };

    default:
      return state;
  }
};

export default projectReducer;