import * as actionTypes from "../action/Types";
import { updateObject } from "./utils";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const fetchFails = (state, action) => {
  return updateObject(state, {
    error: action.payload,
    loading: false,
  });
};

const fetchSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    data: action.payload,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_FEATURED_PRODUCTS_LIST:
      return fetchSuccess(state, action);
    case actionTypes.FETCH_ALL_FEATURED_PRODUCTS_LIST_ERROR:
      return fetchFails(state, action);
    case actionTypes.FETCH_FEATURED_PRODUCTS_DETAILS:
      return fetchSuccess(state, action);
    case actionTypes.FETCH_FEATURED_PRODUCTS_DETAILS_ERROR:
      return fetchFails(state, action);
    case actionTypes.FILTER_FEATURED_PRODUCTS:
      return fetchSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
