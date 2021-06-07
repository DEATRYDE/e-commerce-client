import {
  SET_CURRENT_USER,
  SUCCESSFUL_REGISTER,
  ERRORS,
  FAILURE_REGISTER,
  AUTH_ERROR,
} from "../actions/types";

const initialState = {
  isAutheticated: false,
  user: {},
  token: localStorage.getItem("token"),
  errors: [],
};

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAutheticated: true,
        user: payload,
      };
    case SUCCESSFUL_REGISTER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAutheticated: true,
      };
    case FAILURE_REGISTER:
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAutheticated: false,
      };
    case ERRORS:
      localStorage.removeItem("token");
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
}
