import { connect } from 'react-redux';

import Navbar from '../components/global/navbar';

import { navbarCollapse, navbarReveal } from '../actions/navbarActions';

const mapStateToProps = state => ({
  // isCollapsed: state.navbarReducer.isCollapsed
});

const mapDispatchToProps = {
  // navbarCollapse,
  // navbarReveal
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
