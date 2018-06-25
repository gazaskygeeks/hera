import axios from 'axios';
import {
  GET_SHOP_ITEMS_INGO, GET_SHOP_ITEMS_SUCC, GET_SHOP_ITEMS_FAIL, MODIFY_FILTERS
} from '../../constants/actionTypes';

const getShopItemsInProgress = () => ({
  type: GET_SHOP_ITEMS_INGO,
  isFetching: true
});

const getShopItemsSuccess = data => ({
  type: GET_SHOP_ITEMS_SUCC,
  isFetching: false,
  data
});

const getShopItemsFailure = err => ({
  type: GET_SHOP_ITEMS_FAIL,
  isFetching: false,
  err
});

export const modifyFilters = filters => ({
  type: MODIFY_FILTERS,
  filters
});

export default ({
  category, price, popularity, collections
}) => (dispatch) => {
  dispatch(getShopItemsInProgress());
  axios
    .get('/items', {
      params: {
        category, price, popularity, collections
      }
    })
    .then((response) => {
      dispatch(getShopItemsSuccess(response.data));
    })
    .catch((err) => {
      dispatch(getShopItemsFailure(err));
    });
};
