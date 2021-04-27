import * as types from "./../types";
import backend from "./../../api/backend";
import { store } from "./../store";
import _ from "lodash";

const getConfig = () => {
  const token = store.getState().auth.token;

  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  return config;
};

export const getJobCategories = () => async (dispatch) => {
  try {
    const response = await backend.get("v1/category/jobcategory/", getConfig());

    //ref: https://stackoverflow.com/a/54203304/8666088
    const list = response.data.reduce(
      (groups, item) => ({
        ...groups,
        [item.jobcategory_type]: [
          ...(groups[item.jobcategory_type] || []),
          item,
        ],
      }),
      []
    );
    const allCategories = Array();

    for (let i in list) {
      allCategories.push({ type: i, list: list[i] });
    }

    dispatch({ type: types.GET_JOB_CATEGORIES, payload: allCategories });
  } catch (error) {
    console.log(error);
  }
};

export const getIndustries = () => async (dispatch) => {
  try {
    const response = await backend.get("v1/category/industry/", getConfig());

    dispatch({ type: types.GET_JOB_INDUSTRIES, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const getAllJobs = () => async (dispatch) => {
  try {
    const response = await backend.get("v1/jobpost/data/", getConfig());

    dispatch({ type: types.GET_ALL_JOB, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const getEducation = () => async (dispatch) => {
  try {
    const response = await backend.get("v1/category/education/parent/");

    dispatch({ type: types.GET_EDUCATION, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const getLocationList = () => async (dispatch) => {
  try {
    const response = await backend.get("v1/category/division/");

    dispatch({ type: types.GET_LOCATION_LIST, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const saveTemporayJobPost = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.SAVE_TEMPORARY_JOBPOST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postJob = (data, router) => async (dispatch) => {
  try {
    data = { ...data, posted: true };
    const {
      category,
      employment_status,
      skills,
      workplace,
      job_location,
      education,
      gender,
    } = data;

    data = { ...data, category: category.id };

    data = _.omit(data, [
      "skills",
      "workplace",
      "job_location",
      "employment_status",
      "education",
      "gender",
    ]);

    const response = await backend.post("v1/jobpost/data/", data, getConfig());

    const { id } = response.data;

    // creating skill instance for jobpost
    skills.forEach(async (skill) => {
      try {
        let skill_response = await backend.post(
          "v1/jobpost/skill/",
          { jobpost: id, skill },
          getConfig()
        );
        console.log(skill_response.data);
      } catch (error) {
        console.log(error.response);
      }
    });

    // creating workplace instance for jobpost
    workplace.forEach(async (wp) => {
      try {
        let workplace_response = await backend.post(
          "v1/jobpost/workplace/",
          { jobpost: id, workplace: wp },
          getConfig()
        );
        console.log(workplace_response.data);
      } catch (error) {
        console.log(error.response);
      }
    });

    // creating employment_status instance for jobpost
    employment_status.forEach(async (es) => {
      try {
        let es_response = await backend.post(
          "v1/jobpost/employmentStatus/",
          { jobpost: id, name: es },
          getConfig()
        );
        console.log(es_response.data);
      } catch (error) {
        console.log(error.response);
      }
    });

    // creating education instance for jobpost
    education.forEach(async (edu) => {
      try {
        let edu_response = await backend.post(
          "v1/jobpost/education/",
          { jobpost: id, education: edu },
          getConfig()
        );
        console.log(edu_response.data);
      } catch (error) {
        console.log(error.response);
      }
    });

    // creating gender instance for jobpost
    gender.forEach(async (gndr) => {
      try {
        let gender_response = await backend.post(
          "v1/jobpost/gender/",
          { jobpost: id, gender: gndr },
          getConfig()
        );
        console.log(gender_response.data);
      } catch (error) {
        console.log(error.response);
      }
    });

    // creating job location instance for jobpost
    job_location.forEach(async (location) => {
      location = JSON.parse(location);
      if (location.type === "division") {
        try {
          let location_response = await backend.post(
            "v1/jobpost/division/",
            { jobpost: id, division: location.id },
            getConfig()
          );
          console.log(location_response.data);
        } catch (error) {
          console.log(error.response);
        }
      } else if (location.type === "district") {
        try {
          let location_response = await backend.post(
            "v1/jobpost/district/",
            { jobpost: id, district: location.id },
            getConfig()
          );
          console.log(location_response.data);
        } catch (error) {
          console.log(error.response);
        }
      } else if (location.type === "thana") {
        try {
          let location_response = await backend.post(
            "v1/jobpost/thana/",
            { jobpost: id, thana: location.id },
            getConfig()
          );
          console.log(location_response.data);
        } catch (error) {
          console.log(error.response);
        }
      }
    });

    dispatch({ type: types.CREATE_JOB, payload: id });
    dispatch({ type: types.UNSAVE_TEMPORARY_JOBPOST });

    router.push("/jobs/list");
  } catch (error) {
    console.log(error.response);
  }
};
