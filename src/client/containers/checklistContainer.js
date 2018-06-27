import { connect } from 'react-redux';

import Checklist from '../components/checklist';
import getChecklistItems from '../actions/checklistActions';
<<<<<<< HEAD
=======
import deleteChecklistItems from '../actions/deleteChecklistAction';
>>>>>>> 752e5585444296e04cb547e105d71e993e4c83bc
import addChecklistItem from '../actions/addChecklistAction';


const mapStateToProps = state => ({
  isFetching: state.checklistItems.isFetching,
<<<<<<< HEAD
  data: state.checklistItems.data
});

const mapDispatchToProps = {
=======
  data: state.checklistItems.data,
  sucess:state.checklistItems.delete
});

const mapDispatchToProps = {
  deleteChecklistItems,
>>>>>>> 752e5585444296e04cb547e105d71e993e4c83bc
  addChecklistItem,
  getChecklistItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Checklist);
