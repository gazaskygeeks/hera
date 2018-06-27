import axios from 'axios';
import {
  POST_CHECKLIST_ITEM_INGO, POST_CHECKLIST_ITEM_SUCC, POST_CHECKLIST_ITEM_FAIL
} from '../../constants/actionTypes';

const getChecklistItemsInProgress = () => ({
  type: POST_CHECKLIST_ITEM_INGO,
  isFetching: true
});

const getChecklistItemsSuccess = payload => ({
  type: POST_CHECKLIST_ITEM_SUCC,
  isFetching: false,
  payload
});

const getChecklistItemsFailure = payload => ({
  type: POST_CHECKLIST_ITEM_FAIL,
  isFetching: false,
  err: payload()
});


export default ({ value }) => (dispatch) => {
  dispatch(getChecklistItemsInProgress());
  axios
    .post('/api/add-checklist-item', { itemValue: value })
    .then((response) => {
      dispatch(getChecklistItemsSuccess(response));
    })
    .catch((err) => {
      dispatch(getChecklistItemsFailure(err));
    });
};
