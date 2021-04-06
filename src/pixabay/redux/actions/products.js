export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";

export const addProducts = (data) => ({
  type: ADD_PRODUCTS,
  payload: data,
});

export const filterProducts = (condition) => ({
  type: FILTER_PRODUCTS,
  payload: condition,
});
