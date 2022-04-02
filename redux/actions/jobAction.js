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
    const response = await backend.get("v1/category/jobcategory/");

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
    return allCategories;
  } catch (error) {
    console.log(error);
  }
};

export const getIndustries = () => async (dispatch) => {
  try {
    const response = await backend.get("v1/category/industry/");

    dispatch({ type: types.GET_JOB_INDUSTRIES, payload: response.data });
    if (response.status === 200) {
      return response.data;
      } 
      return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getAllJobs = (page, pageSize) => async (dispatch) => {
  try {
   
 
      const response = await backend.get(`v1/jobpost/data/?page=${page}&page_size=${pageSize}`, getConfig());
   
    if (response.status === 200) {
      dispatch({ type: types.GET_ALL_JOB, payload: response.data });
      return response.data;
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getAllJobs_withoutlogin = () => async (dispatch) => {
  try {
   
 
      const response = await backend.get("v1/jobpost/data/");
   
    if (response.status === 200) {
      dispatch({ type: types.GET_ALL_JOB, payload: response.data });
      return response.data;
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getSelfPostedJobs = (id) => async (dispatch) => {
  try {
    const response = await backend.get(
      `v1/jobpost/data/?poster=${id}`,
      getConfig()
    );
    if (response.status === 200) {
    dispatch({ type: types.GET_SELF_POSTED_JOB, payload: response.data });
    return response.data;
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getSavedJobs = () => async (dispatch) => {
  try {
    const response = await backend.get("v1/jobpost/saved_jobs/", getConfig());
   
    dispatch({ type: types.GET_SAVED_JOB, payload: response.data });
    if (response.status === 200) {
      return response.data;
      } 
      return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getAppliedJobs = () => async (dispatch) => {
  try {
    const response = await backend.get("v1/jobpost/applied_jobs/", getConfig());

    dispatch({ type: types.GET_APPLIED_JOB, payload: response.data });
    if (response.status === 200) {
      return response.data;
      } 
      return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const getAppliedJobsPerson = (temp_jobpost) => async (dispatch) => {
  try {
    const response = await backend.get(
      `/v1/jobpost/job_applied_users/${temp_jobpost.id}/`,
      getConfig()
    );

    dispatch({ type: types.GET_APPLIED_JOB_PERSON, payload: response.data });
    if (response.status === 200) {
      return response.data;
      } 
      return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const filterJobs = (filter, page, pageSize) => async (dispatch) => {
  try {
    let url = `v1/jobpost/filter/?page=${page}&page_size=${pageSize}&`;

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

    const response = await backend.get(url);

    // dispatch({ type: types.FILTER_JOB, payload: response.data });
    if (response.status === 200) {
    return response.data;
    } 
    return [];
  } catch (error) {
    console.log(error);
    return [];
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
    if (response.status === 200) {
    return response.data;
    }
    return [];
  } catch (error) {
    
    console.log(error);
    return [];
  }
};

export const saveTemporayJobPost = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.SAVE_TEMPORARY_JOBPOST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postJob = (data, router,setDisable) => async (dispatch) => {
  try {
    const {
      category,
      employment_status,
      skills,
      workplace,
      job_location,
      education,
      gender,
    } = data;

    data = _.omit(data, [
      "skills",
      "job_location",
      "employment_status",
      "education",
      "gender",
      "workplace",
    ]);

    // For removing empty properties
    for (const property in data) {
      if (data[property] === "" || data[property] === []) {
        data = _.omit(data, property);
      }
    }

    let job_Location = [];

    job_location.forEach((location) => job_Location.push(JSON.parse(location)));

    data = {
      ...data,
      category: category.id,
      posted: true,
      poster: store.getState().auth.id,
      extra_fields: {
        skills: skills,
        job_location: job_location,
        employment_status: employment_status,
        education: education,
        gender: gender,
        workplace: workplace,
      },
    };

    const response = await backend.post("v1/jobpost/data/", data, getConfig());

    const { id } = response.data;

    dispatch({ type: types.CREATE_JOB, payload: id });
    dispatch({ type: types.UNSAVE_TEMPORARY_JOBPOST });
    router.push("/jobs/list");
   
  } catch (error) {
    setDisable(false);
    console.log(error.response);
  }
};

export const updateJob = (data, router) => async (dispatch) => {
  try {
    const {
      id,
      category,
      employment_status,
      skills,
      workplace,
      job_location,
      education,
      gender,
      
    } = data;
   

    data = _.omit(data, [
      "skills",
      "job_location",
      "employment_status",
      "education",
      "gender",
      "workplace",
      "slug_id",
    ]);

    // For removing empty properties
    for (const property in data) {
      if (data[property] === "" || data[property] === []) {
        data = _.omit(data, property);
      }
    }

    let job_Location = [];

    job_location.forEach((location) => job_Location.push(JSON.parse(location)));

    data = {
      ...data,
      category: category.id,
      posted: true,
      poster: store.getState().auth.id,
      extra_fields: {
        skills: skills,
        job_location: job_location,
        employment_status: employment_status,
        education: education,
        gender: gender,
        workplace: workplace,
      },
    };

    const response = await backend.patch(`v1/jobpost/data/${id}/`,data,getConfig());
    console.log(response.data);
    // const { id } = response.data;
    // dispatch({ type: types.UPDATE_JOB, payload: id });
    dispatch({ type: types.UNSAVE_TEMPORARY_JOBPOST });

    router.push("/jobs/my_posts");
  } catch (error) {
    console.log(error.response);
  }
};

export const applyJob =
  (job_id, userid,appliedStatus,setAppliedStatus,applied_saved_id) => async (dispatch) => {
    try {
      const formData = { applied: true, job: job_id, user: userid };
      // console.log(applied);
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

export const deleteJob = (job_id) => async (dispatch) => {
  try {
    const response = await backend.delete(
      `v1/jobpost/data/${job_id}/`,
      getConfig()
    );

    if (response.status == 200 || response.status == 204) {
      dispatch({
        type: types.DELETE_JOB,
        payload: { job_id: job_id },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getJob = (job_id) => async (dispatch) => {
  try {
    const response = await backend.get(
      `v1/jobpost/data/${job_id}/`,
      getConfig()
    );

    if (response.status == 200) {
      // dispatch({
      //   type: types.GET_SINGLE_JOB,
      //   payload: response.data,
      // });
      dispatch({
        type: types.SAVE_TEMPORARY_JOBPOST,
        payload: response.data,
      });
      return response.data;
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getJobDetails = (job_id) => async (dispatch) => {
  try {
    const response = await backend.get(`v1/jobpost/data/${job_id}/`,getConfig());

    if (response.status == 200) {
      dispatch({
        type: types.GET_SINGLE_JOB,
        payload: response.data,
      });
      return response.data;
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const getJobDetails_withoutlogin = (job_id) => async (dispatch) => {
  try {
    const response = await backend.get(`v1/jobpost/data/${job_id}/`);

    if (response.status == 200) {
      dispatch({
        type: types.GET_SINGLE_JOB,
        payload: response.data,
      });
      return response.data;
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getJobForUpdate = (job_id) => async (dispatch) => {
  try {
    const response = await backend.get(
      `v1/jobpost/data/${job_id}/`,
      getConfig()
    );

    if (response.status == 200) {
      let { data } = response;

      let { job_location, education } = data;

      //------------------- For putting data in Ant.js TreeNode -------------------
      job_location = job_location.map(({ id, name, type }) =>
        JSON.stringify({ id, name, type })
      );

      education = education.map((edu) => edu.id);

      data = {
        ...data,
        job_location: job_location,
        education: education,
      };

      // dispatch({
      //   type: types.GET_SINGLE_JOB,
      //   payload: data,
      // });
      dispatch({
        type: types.SAVE_TEMPORARY_JOBPOST,
        payload: data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const SetfilterAction = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_FILTER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
