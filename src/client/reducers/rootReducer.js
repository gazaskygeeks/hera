import { combineReducers } from 'redux';

// import navbarReducer from './navbarReducer';
import dashboardReducers from './dashboardReducers';
import generalStoreReducers from './generalStoreReducers/getItemsReducer';
import checklistItems from './checklistReducer';


export default combineReducers({
  // navbarReducer,
  dashboardReducers,
  generalStoreReducers,checklistItems
});
