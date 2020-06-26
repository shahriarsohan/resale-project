import api from "../api/api";

import * as actionTypes from "./Types";

export const fetchTopSongs = () => async (dispatch) => {
  const response = await api.get("users/list");

  dispatch({
    type: actionTypes.TOP_SONGS,
    payload: response.data,
  });
};
