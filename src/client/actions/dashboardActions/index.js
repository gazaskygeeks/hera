import axios from 'axios';
import {
  GET_DASHBOARD_CART_INGO, GET_DASHBOARD_CART_SUCC, GET_DASHBOARD_CART_FAIL
} from '../../constants/actionTypes';

const getDashboardCartInProgress = () => ({
  type: GET_DASHBOARD_CART_INGO,
  isFetching: true
});

const getDashboardCartSuccess = payload => ({
  type: GET_DASHBOARD_CART_SUCC,
  isFetching: false,
  payload
});

const getDashboardCartFailure = payload => ({
  type: GET_DASHBOARD_CART_FAIL,
  isFetching: false,
  payload
});

export default () => (dispatch) => {
  dispatch(getDashboardCartInProgress());
  axios
    .get('/api/dashboard')
    .then((response) => {
      dispatch(getDashboardCartSuccess(response.data));
    })
    .catch((err) => {
      dispatch(getDashboardCartFailure(err));
    });
};
