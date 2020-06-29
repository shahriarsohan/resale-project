import { combineReducers } from "redux";
import usersList from "./members";
import allProducts from "./products";
import auth from "./auth";
import feturedProducts from "./featuredProducts";

export default combineReducers({
  usersList,
  allProducts,
  auth,
  feturedProducts,
});
