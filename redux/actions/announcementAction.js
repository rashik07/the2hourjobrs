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

export const createAnnouncement =
  (formValues, files, cover, router) => async (dispatch) => {
    try {
      const response = await backend.post(
        "v1/announcement/data/",
        { ...formValues },
        getConfig()
      );
      if (response.status === 201) {
      router.push("/announcement");
        dispatch({
          type: types.CREATE_ANNOUNCEMENT,
          payload: { ...response.data },
        });
        const id = response.data.id;
        files.map((file) => {
          dispatch(uploadimage(id, file, false));
        });
        cover.map((file) => {
          dispatch(uploadimage(id, file, true));
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

const uploadimage = (id, file, flag) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("photo", file.originFileObj);
    formData.append("announcement", parseInt(id));
    formData.append("cover", flag);
    const response = await backend.post(
      "v1/announcement/image/",
      formData,
      getConfig()
    );
    if (response.status === 201) {
      console.log(response.data);
      console.log("uploaded");
    }
  } catch (error) {
    console.log(error.response);
    console.log(error);
  }
};

export const getAllAnnouncement = (page,pageSize) => async (dispatch) => {
  try {
    const response = await backend.get(`v1/announcement/data/?page=${page}&page_size=${pageSize}`);
    if (response.status === 200) {
      dispatch({
        type: types.GET_ALL_ANNOUNCEMENT,
        payload: response.data,
      });
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllAnnouncementOfUser = (id) => async (dispatch) => {
  try {
    const response = await backend.get(
      `v1/announcement/user_annoucements/${id}`,getConfig()
    );
    if (response.status === 200) {
      dispatch({
        type: types.GET_ALL_ANNOUNCEMENT_OF_USER,
        payload: response.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getSpecificAnnouncement = (id) => async (dispatch) => {
  try {
    const response = await backend.get(`v1/announcement/data/${id}/`);
    if (response.status === 200) {
      dispatch({
        type: types.GET_SINGLE_ANNOUNCEMENT,
        payload: response.data,
      });
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateAnnouncement = (id, formValues) => async (dispatch) => {
  try {
    const response = await backend.patch(
      `v1/announcement/data/${id}/`,
      formValues,
      getConfig()
    );
    if (response.status === 200) {
      dispatch({
        type: types.UPDATE_ANNOUNCEMENT,
        payload: { ...response.data },
      });
    }
  } catch (error) {
    console.log(error.response);
  }
};

export const deleteAnnouncement = (id) => async (dispatch) => {
  try {
    const response = await backend.delete(
      `v1/announcement/data/${id}/`,
      getConfig()
    );
    if (response.status === 204) {
      dispatch({ type: types.DELETE_ANNOUNCEMENT, payload: id });
    }
  } catch (error) {
    console.log(error);
  }
};

export const archiveAnnouncement =
  (announcment, value, setUpdatelist) => async (dispatch) => {
    try {
      const formdata = new FormData();
      formdata.append("title", announcment.title);
      formdata.append("description", announcment.description);
      formdata.append("contact_information", announcment.contact_information);
      formdata.append("slug_id", announcment.slug_id);
      formdata.append("poster", announcment.poster);
      formdata.append("archive", value);
      console.log(formdata);
      const response = await backend.patch(
        `v1/announcement/data/${announcment.id}/`,
        formdata,
        getConfig()
      );
      if (response.status === 200) {
        dispatch({
          type: types.UPDATE_ANNOUNCEMENT,
          payload: { ...response.data },
        });
        setUpdatelist(false);
        console.log("updated");
      }
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  };

// saved announcment section

export const savedAnnouncement = (formValues) => async (dispatch) => {
  try {
    const response = await backend.post(
      "v1/announcement/data/",
      { ...formValues },
      getConfig()
    );
    if (response.status === 201) {
      dispatch({
        type: types.CREATE_ANNOUNCEMENT,
        payload: { ...response.data },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllSavedAnnouncement = (id) => async (dispatch) => {
  try {
    const response = await backend.get(
      `v1/announcement/user_saved_annoucements_list/${id}/`,
      getConfig()
    );
    if (response.status === 200) {
      dispatch({
        type: types.GET_ALL_SAVED_ANNOUNCEMENT,
        payload: response.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
