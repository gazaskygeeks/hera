import { connect } from 'react-redux';

import Checklist from '../components/checklist';
import getChecklistItems from '../actions/checklistActions';
import deleteChecklistItems from '../actions/deleteChecklistAction';
import addChecklistItem from '../actions/addChecklistAction';


const mapStateToProps = state => ({
  isFetching: state.checklistItems.isFetching,
  data: state.checklistItems.data,
  sucess: state.checklistItems.delete
});

const mapDispatchToProps = {
  deleteChecklistItems,
  addChecklistItem,
  getChecklistItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Checklist);
