import { connect } from 'react-redux';

import GeneralStore from '../components/generalStore';
import { modifyFilters, getItemsByFilter, postAddToCart } from '../actions/generalStoreActions';

const mapStateToProps = state => ({
  isFetching: state.generalStoreReducers.isFetching,
  filters: state.generalStoreReducers.filters,
  data: state.generalStoreReducers.data,
  itemId: state.generalStoreReducers.id,
  [console.log(state.generalStoreReducers)]: 'a'
});

const mapDispatchToProps = {
  getItemsByFilter,
  postAddToCart,
  modifyFilters
};

export default connect(mapStateToProps, mapDispatchToProps)(GeneralStore);
