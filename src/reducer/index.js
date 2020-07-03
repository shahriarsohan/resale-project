import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import usersList from "./members";
import allProducts from "./products";
import auth from "./auth";
import feturedProducts from "./featuredProducts";

export default combineReducers({
  form: formReducer,
  usersList,
  allProducts,
  auth,
  feturedProducts,
});
