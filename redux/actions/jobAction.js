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

export const getSelfPostedJobs = () => async (dispatch) => {
  try {
    const response = await backend.get(
      `v1/jobpost/data/?poster=${store.getState().auth.id}`,
      getConfig()
    );

    dispatch({ type: types.GET_SELF_POSTED_JOB, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const getSavedJobs = () => async (dispatch) => {
  try {
    const response = await backend.get("v1/jobpost/saved_jobs/", getConfig());

    dispatch({ type: types.GET_SAVED_JOB, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const getAppliedJobs = () => async (dispatch) => {
  try {
    const response = await backend.get("v1/jobpost/applied_jobs/", getConfig());

    dispatch({ type: types.GET_APPLIED_JOB, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const filterJobs = (filter) => async (dispatch) => {
  try {
    let url = "v1/jobpost/filter/?";

    const createURL = {
      location: (url, location) => {
        url += `location=${JSON.stringify(location)}&`;
        return url;
      },

      category: (url, category) => {
        url += `category=${category.id}&`;
        return url;
      },

      industry: (url, industry) => {
        url += `industry=${industry.id}&`;
        return url;
      },

      employmentStatus: (url, employmentStatus) => {
        url += `employmentStatus=${employmentStatus}&`;
        return url;
      },

      gender: (url, gender) => {
        url += `gender=${gender}&`;
        return url;
      },

      keyword: (url, keyword) => {
        url += `keyword=${keyword}&`;
        return url;
      },

      deadline: (url, deadline) => {
        url += `deadline=${deadline.date}&`;
        return url;
      },

      postedDate: (url, postedDate) => {
        url += `postedDate=${postedDate.date}&`;
        return url;
      },

      age: (url, age) => {
        if (age.min) {
          url += `min_age=${age.min}&`;
        }
        if (age.max) {
          url += `max_age=${age.max}&`;
        }
        return url;
      },

      experience: (url, experience) => {
        if (experience.min) {
          url += `min_experience=${experience.min}&`;
        }
        if (experience.max) {
          url += `max_experience=${experience.max}&`;
        }
        return url;
      },
    };

    for (let i in filter) {
      url = createURL[i](url, filter[i]);
    }

    const response = await backend.get(url, getConfig());

    dispatch({ type: types.FILTER_JOB, payload: response.data });
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
      "job_location",
      "employment_status",
      "education",
      "gender",
    ]);

    // console.log(data);
    for (const property in data) {
      // console.log(`${property}: ${data[property]}`);

      if (data[property] === "" || data[property] === []) {
        data = _.omit(data, property);
      }
    }

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

export const applyJob =
  (job_id, userid, setAppliedStatus) => async (dispatch) => {
    try {
      const formData = { applied: true, job: job_id, user: userid };

      const response = await backend.post(
        "v1/jobpost/user_apply_save_jobs/",
        formData,
        getConfig()
      );

      if (response.status == 200 || response.status == 201) {
        setAppliedStatus(true);
      }

      dispatch({ type: types.APPLY_JOB, payload: job_id });
    } catch (error) {
      console.log(error);
    }
  };

export const saveJob =
  (job_id, userid, saveStatus, setSavedStatus, applied_saved_id) =>
  async (dispatch) => {
    try {
      const formData = { saved: !saveStatus, job: job_id, user: userid };

      let response = null;

      if (applied_saved_id) {
        response = await backend.patch(
          `v1/jobpost/user_apply_save_jobs/${applied_saved_id}/`,
          formData,
          getConfig()
        );
      } else {
        response = await backend.post(
          "v1/jobpost/user_apply_save_jobs/",
          formData,
          getConfig()
        );
      }

      if (response.status == 200 || response.status == 201) {
        setSavedStatus(!saveStatus);
      }

      dispatch({
        type: types.SAVE_JOB,
        payload: { job_id: job_id, saved: !saveStatus },
      });
    } catch (error) {
      console.log(error.response);
    }
  };
