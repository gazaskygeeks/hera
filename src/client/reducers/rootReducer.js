import { combineReducers } from 'redux';

// import navbarReducer from './navbarReducer';
import generalStoreReducers from './generalStoreReducers';
import dashboardReducers from './dashboardReducers';

export default combineReducers({
  // navbarReducer,
  dashboardReducers,
  generalStoreReducers
});
