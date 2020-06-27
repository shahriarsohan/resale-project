import { combineReducers } from "redux";
import usersList from "./members";
import allProducts from "./products";

export default combineReducers({
  usersList,
  allProducts,
});
