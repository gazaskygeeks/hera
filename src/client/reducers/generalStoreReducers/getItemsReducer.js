import {
  GET_SHOP_ITEMS_INGO, GET_SHOP_ITEMS_SUCC, GET_SHOP_ITEMS_FAIL, MODIFY_FILTERS
} from '../../constants/actionTypes';

const initialState = {
  isFetching: false,
  data: [],
  filters: {
    price: -1,
    category: 'any',
    popularity: -1,
    collections: 'none'
  }
};

export default (state = initialState, { type, data, filters }) => {
  switch (type) {
    case GET_SHOP_ITEMS_INGO: return {
      ...state,
      isFetching: true
    };
    case GET_SHOP_ITEMS_SUCC: return {
      ...state,
      isFetching: false,
      data
    };
    case GET_SHOP_ITEMS_FAIL: return {
      ...state,
      isFetching: false,
      err: data
    };
    case MODIFY_FILTERS: return {
      ...state,
      filters
    };
    default: return state;
  }
};
