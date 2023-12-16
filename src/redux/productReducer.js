import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
  switch (action.type) {
    // case PRODUCT_LIST:
    //   console.warn("PRODUCT_LIST condtion ", action);
    //   return [action.data]; // destruct old data

    case SET_PRODUCT_LIST:
      console.warn("SET_PRODUCT_LIST condtion ", action.data);
      return [...action.data]; // destruct old data

    default:
      return data;
  }
};
