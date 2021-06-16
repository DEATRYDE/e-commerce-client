import axios from "axios";
import { GET_PROFILE, PROFILE_ERROR, ERRORS } from "./types";
import { getServer } from "../util";

//get a particular profile
export const getProfile = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${getServer()}/api/profile/${id}`);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusType },
    });
  }
};

export const createProfile = (profileData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.get(
      `${getServer()}/api/profile`,
      profileData,
      config
    );
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    const error = err.response.data.errors;
    if (error) {
      dispatch({
        type: ERRORS,
        payload: error,
      });
    } else {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusType },
      });
    }
  }
};
