import _ from "lodash";

import * as actionTypes from "../action/Types";

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.TOP_SONGS:
      const newSongs = {
        ...state,
        ...action.payload,
      };
      return { ...state, Topsongs: newSongs };
    default:
      return state;
  }
};
