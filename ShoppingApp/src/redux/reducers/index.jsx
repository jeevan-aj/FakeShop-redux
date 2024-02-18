import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";


const redusers = combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer,
});


export default redusers