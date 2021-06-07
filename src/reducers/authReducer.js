import {
  SET_CURRENT_USER,
  SUCCESSFUL_REGISTER,
  ERRORS,
} from "../actions/types";
import { isEmpty } from "lodash";

const initialState = {
  isAutheticated: false,
  user: {},
  token: localStorage.getItem("token"),
};

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAutheticated: !isEmpty(payload),
        user: payload,
      };
    case SUCCESSFUL_REGISTER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAutheticated: true,
      };
    case ERRORS:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAutheticated: false,
      };
    default:
      return state;
  }
}
