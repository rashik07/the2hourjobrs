import * as types from "../types";

const INITIAL_STATE = {
   user_education:[],
   user_training:[],
   user_qualifications:[],
};

const usereduReducer = (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    //EDUCATION
    case types.CREATE_EDUCATION:
      return { ...state, create_education: action.payload };

    case types.VIEW_EDUCATION:
      return { ...state, view_education: action.payload }; 
    case types.VIEW_SINGLE_EDUCATION:
      return { ...state, view_single_education: action.payload }; 

    case types.DELETE_PROJECT:
        let user_education = state.user_education;
      //  let self_posted_jobs = state.self_posted_jobs;
  
      user_education = user_education.filter((education) => education.id !== action.payload.education_id);
     
        return {
          ...state,
          user_education: Object.values(user_education),
         // self_posted_jobs: Object.values(self_posted_jobs),
        };
        //TRAINING
        case types.CREATE_TRAINING:
          return { ...state, create_training: action.payload };
    
        case types.VIEW_TRAINING:
          return { ...state, view_training: action.payload }; 
    
        case types.DELETE_TRAINING:
            let user_training = state.user_training;
          //  let self_posted_jobs = state.self_posted_jobs;
      
          user_training = user_training.filter((training) => training.id !== action.payload.training_id);
         
            return {
              ...state,
              user_training: Object.values(user_training),
             // self_posted_jobs: Object.values(self_posted_jobs),
            };
        //Qualification
        case types.CREATE_QUALIFICATION:
          return { ...state, create_qualification: action.payload };
    
        case types.VIEW_QUALIFICATION:
          return { ...state, view_qualification: action.payload }; 
    
        case types.DELETE_QUALIFICATION:
            let user_qualifications = state.user_qualifications;
          //  let self_posted_jobs = state.self_posted_jobs;
      
          user_qualifications = user_qualifications.filter((qualifications) => qualifications.id !== action.payload.qualifications_id);
         
            return {
              ...state,
              user_qualifications: Object.values(user_qualifications),
             // self_posted_jobs: Object.values(self_posted_jobs),
            };

    default:
      return state;
  }
};

export default usereduReducer;