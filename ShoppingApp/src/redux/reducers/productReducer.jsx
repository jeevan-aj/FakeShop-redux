import { Actions } from "../constants/action-types";

 let initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type ,payload}) => {
  switch (type) {
    case Actions.SET_PRODUCTS:
      return {...state,products:payload}
    default:
      return state;
  }

};

export const selectedProductReducer = (state = {}, {type,payload}) => {
    switch (type){
      case Actions.SELECTED_PRODUCTS:
        return {...state,products:payload};
      default:
        return state;
    }
}

