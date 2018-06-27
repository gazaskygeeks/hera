import { connect } from 'react-redux';

import Dashboard from '../components/dashboard';
import getDashboardCart from '../actions/dashboardActions';

const mapStateToProps = state => ({
  isFetching: state.dashboardReducers.isFetching,
  data: state.dashboardReducers.data
});

const mapDispatchToProps = {
  getDashboardCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
