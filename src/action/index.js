import api from "../api/api";

import { FetchUsersList } from "../constant";
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
      dispatch({
        type: actionTypes.FETCH_USERS_ERROR,
        errorMessage: err,
      });
    });
};
