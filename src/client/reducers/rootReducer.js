import { combineReducers } from 'redux';

// import navbarReducer from './navbarReducer';
import dashboardReducers from './dashboardReducers';
import generalStoreReducers from './generalStoreReducers/getItemsReducer';

export default combineReducers({
  // navbarReducer,
  dashboardReducers,
  generalStoreReducers
});
