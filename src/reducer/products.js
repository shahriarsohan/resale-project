import * as actionTypes from "../action/Types";

const initialState = {
  products: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_PRODUCTS_LIST:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
