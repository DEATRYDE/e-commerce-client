import axios from "axios";
import { GET_PRODUCT, GET_PRODUCTS, PRODUCT_ERROR } from "./types";
import { getServer } from "../util";

//all products
export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${getServer()}/api/products`);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { status: err.response.status },
    });
  }
};

//add product
export const addProduct = (productData, history) => async (dispatch) => {
  const config = {
    Headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    await axios
      .post(`${getServer()}/api/products`, productData, config)
      .then(() => history.push("/dashboard/products"));
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { status: err.response },
    });
  }
};

//instructor specific products
export const getInstructorProducts = (id) => async (dispatch) => {
  try {
    await axios
      .get(`${getServer()}/api/products/instructors/${id}`)
      .then((res) =>
        dispatch({
          type: GET_PRODUCTS,
          payload: res.data,
        })
      );
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { status: err.response },
    });
  }
};

//get specific product
export const getProduct = (id) => async (dispatch) => {
  try {
    await axios.get(`${getServer()}/api/products/${id}`).then((res) =>
      dispatch({
        type: GET_PRODUCT,
        payload: res.data,
      })
    );
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { status: err.response },
    });
  }
};
