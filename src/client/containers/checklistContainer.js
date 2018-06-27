import { connect } from 'react-redux';

import Checklist from '../components/checklist';
import getChecklistItems from '../actions/checklistActions';


const mapStateToProps = state => ({
  isFetching: state.checklistItems.isFetching,
  data: state.checklistItems.data
});

const mapDispatchToProps = {
  getChecklistItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Checklist);
