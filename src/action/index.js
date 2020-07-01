import api from "../api/api";

import {
  FetchUsersList,
  FetchAllProductsList,
  FeaturedProductsList,
  FeaturedFilter,
} from "../constant";
import * as actionTypes from "./Types";

export const fetchUsersList = () => (dispatch) => {
  api
    .get(FetchUsersList)
    .then((res) => {
      dispatch({
        type: actionTypes.FETCH_USERS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchAllProductsList = () => (dispatch) => {
  api
    .get(FetchAllProductsList)
    .then((res) => {
      dispatch({
        type: actionTypes.FETCH_ALL_PRODUCTS_LIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchFeaturedProducts = () => (dispatch) => {
  api
    .get(FeaturedProductsList)
    .then((res) => {
      dispatch({
        type: actionTypes.FETCH_ALL_FEATURED_PRODUCTS_LIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.FETCH_ALL_FEATURED_PRODUCTS_LIST_ERROR,
        payload: err.message,
      });
    });
};

export const fetchFilterFeaturedProducts = (formValues) => (dispatch) => {
  api
    .post(FeaturedFilter, formValues)
    .then((res) => {
      dispatch({
        type: actionTypes.FILTER_FEATURED_PRODUCTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
