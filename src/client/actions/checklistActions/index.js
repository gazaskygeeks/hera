import axios from 'axios';
import {
  GET_CHECKLIST_ITEMS_INGO, GET_CHECKLIST_ITEMS_SUCC, GET_CHECKLIST_ITEMS_FAIL
} from '../../constants/actionTypes';

const getChecklistItemsInProgress = () => ({
  type: GET_CHECKLIST_ITEMS_INGO,
  isFetching: true
});

const getChecklistItemsSuccess = data => ({
  [console.log('mydataaaa', data)]:'a',
  type: GET_CHECKLIST_ITEMS_SUCC,
  isFetching: false,
  data
});

const getChecklistItemsFailure = data => ({
  type: GET_CHECKLIST_ITEMS_FAIL,
  isFetching: false,
  err: data
});



export default () => (dispatch) => {
  dispatch(getChecklistItemsInProgress());
  fetch('/checklist/items')
    .then(response => {
      if (response.status >= 400) {
        throw new Error('Bad response from sarver');
      }
      return response.json();
    }).then((response) => {
      dispatch(getChecklistItemsSuccess(response));
    })
    .catch((err) => {
      dispatch(getChecklistItemsFailure(err));
    });
};
