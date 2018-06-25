import { connect } from 'react-redux';

import GeneralStore from '../components/generalStore';
import getItemsByFilter, { modifyFilters } from '../actions/generalStoreActions';

const mapStateToProps = state => ({
  isFetching: state.generalStoreReducers.isFetching,
  data: state.generalStoreReducers.data,
  filters: state.generalStoreReducers.filters
});

const mapDispatchToProps = {
  getItemsByFilter,
  modifyFilters
};

export default connect(mapStateToProps, mapDispatchToProps)(GeneralStore);
