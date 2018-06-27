import axios from 'axios';
import {
  GET_SHOP_ITEMS_INGO, GET_SHOP_ITEMS_SUCC, GET_SHOP_ITEMS_FAIL, MODIFY_FILTERS, POST_ADD_TO_CART_INGO, POST_ADD_TO_CART_SUCC, POST_ADD_TO_CART_FAIL
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

const postAddToCartInProgress = () => ({
  type: POST_ADD_TO_CART_INGO
});

const postAddToCartSuccess = () => ({
  type: POST_ADD_TO_CART_SUCC
});

const postAddToCartFailure = () => ({
  type: POST_ADD_TO_CART_FAIL
});

const modifyFilters = filters => ({
  type: MODIFY_FILTERS,
  filters
});

const getItemsByFilter = ({
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

const postAddToCart = ({
  id
}) => (dispatch) => {
  dispatch(postAddToCartInProgress());
  axios
    .post('/reserve', { itemId: id })
    .then((response) => {
      dispatch(postAddToCartSuccess(response.data));
    })
    .catch((err) => {
      dispatch(postAddToCartFailure(err));
    });
};

module.exports = {
  getItemsByFilter,
  postAddToCart,
  modifyFilters
};
