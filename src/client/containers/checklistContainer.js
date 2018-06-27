import { connect } from 'react-redux';

import Checklist from '../components/checklist';
import getChecklistItems from '../actions/checklistActions';
import addChecklistItem from '../actions/addChecklistAction';


const mapStateToProps = state => ({
  isFetching: state.checklistItems.isFetching,
  data: state.checklistItems.data
});

const mapDispatchToProps = {
  addChecklistItem,
  getChecklistItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Checklist);
