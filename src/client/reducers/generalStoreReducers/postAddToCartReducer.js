import {
  POST_ADD_TO_CART_INGO, POST_ADD_TO_CART_SUCC, POST_ADD_TO_CART_
} from '../../constants/actionTypes';

const initialState = {
  isFetching: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SHOP_ITEMS_INGO: return {
      ...state,
      isFetching: true
    };
    case GET_SHOP_ITEMS_SUCC: return {
      ...state,
      isFetching: false,
      result: payload
    };
    case GET_SHOP_ITEMS_FAIL: return {
      ...state,
      isFetching: false,
      result: payload
    };
    default: return state;
  }
};
