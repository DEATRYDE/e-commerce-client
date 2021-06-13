import { GET_PRODUCTS, PRODUCT_ERROR } from "../actions/types";

const initialState = {
  products: [],
  product: {},
  error: {},
};

export default function productsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
}
