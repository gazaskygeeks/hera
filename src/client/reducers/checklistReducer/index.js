import {
  GET_CHECKLIST_ITEMS_INGO, GET_CHECKLIST_ITEMS_SUCC, GET_CHECKLIST_ITEMS_FAIL,DELETE_CHECKLIST_ITEMS
} from '../../constants/actionTypes';

const initialState = {
  isFetching: false,
  data: []
};

export default (state = initialState, {type, data}) => {
  switch (type) {
    case GET_CHECKLIST_ITEMS_INGO: return {
      ...state,
      isFetching: true
    };
    case GET_CHECKLIST_ITEMS_SUCC: return {
      ...state,
      isFetching: false,
      data
    };
    case GET_CHECKLIST_ITEMS_FAIL: return {
      ...state,
      isFetching: false,
      err: data
    };
    case DELETE_CHECKLIST_ITEMS: return {
      ...state,
      delete:'success'
    };
    default: return state;
  }
};
