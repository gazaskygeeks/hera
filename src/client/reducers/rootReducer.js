import { combineReducers } from 'redux';

// import navbarReducer from './navbarReducer';
import generalStoreReducers from './generalStoreReducers';
import checklistItems from './checklistReducer';

export default combineReducers({
  // navbarReducer,
  generalStoreReducers,checklistItems
});
