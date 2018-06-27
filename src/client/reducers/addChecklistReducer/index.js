import {
  POST_CHECKLIST_ITEM_INGO, POST_CHECKLIST_ITEM_SUCC, POST_CHECKLIST_ITEM_FAIL, POST_CHECKLIST_ITEM
} from '../../constants/actionTypes';

const initialState = {
  isFetching: false,
  payload: undefined
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_CHECKLIST_ITEM_INGO: return {
      ...state,
      isFetching: true
    };
    case POST_CHECKLIST_ITEM_SUCC: return {
      ...state,
      isFetching: false,
      data: payload
    };
    case POST_CHECKLIST_ITEM_FAIL: return {
      ...state,
      isFetching: false,
      err: payload
    };
    default: return state;
  }
};
