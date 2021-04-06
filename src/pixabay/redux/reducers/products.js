import { ADD_PRODUCTS, FILTER_PRODUCTS } from "../actions/products";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      const data = action.payload.hits;
      return data;
    case FILTER_PRODUCTS:
      const condition = action.payload;
      const newArr = [...state];
      if (condition === "decrease") {
        newArr.sort(function (a, b) {
          return b.likes - a.likes;
        });
        return newArr;
      } else {
        newArr.sort(function (a, b) {
          return a.likes - b.likes;
        });
        return newArr;
      }

    default:
      return state;
  }
};
