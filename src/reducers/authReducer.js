import { SET_CURRENT_USER } from "../actions/types";
import { isEmpty } from "lodash";

const initialState = {
  isAutheticated: false,
  user: {},
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAutheticated: !isEmpty(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
}
