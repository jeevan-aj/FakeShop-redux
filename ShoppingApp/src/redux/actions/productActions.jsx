import { Actions } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: Actions.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (products) => {
  return {
    type: Actions.SELECTED_PRODUCTS,
    payload: products,
  };
};

// export const removeSelected_product = (products,id) => {
//   return {
//     type: Actions.REMOVE_SELECTED_PRODUCT,
//     payload:id
//   };
// };


