import api from "../api/api";

import { FetchUsersList, FetchAllProductsList } from "../constant";
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
