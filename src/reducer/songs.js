import * as actionTypes from "../action/Types";

const initialState = {
  data: [],
  loading: true,
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
