import * as types from "./../types";
import backend from "./../../api/backend";
import { store } from "./../store";

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
