import { combineReducers } from "redux";
import usersList from "./members";
import allProducts from "./products";
import auth from "./auth";

export default combineReducers({
  usersList,
  allProducts,
  auth: auth,
});
