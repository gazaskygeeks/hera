import { combineReducers } from 'redux';

// import navbarReducer from './navbarReducer';
import generalStoreReducers from './generalStoreReducers/getItemsReducer';

export default combineReducers({
  // navbarReducer,
  generalStoreReducers
});
