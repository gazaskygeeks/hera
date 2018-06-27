import {
  GET_DASHBOARD_CART_INGO, GET_DASHBOARD_CART_SUCC, GET_DASHBOARD_CART_FAIL
} from '../../constants/actionTypes';

const initialState = {
  isFetching: false,
  data: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DASHBOARD_CART_INGO: return {
      ...state,
      isFetching: true
    };
    case GET_DASHBOARD_CART_SUCC: return {
      ...state,
      isFetching: false,
      data: payload
    };
    case GET_DASHBOARD_CART_FAIL: return {
      ...state,
      isFetching: false,
      err: payload
    };
    default: return state;
  }
};
