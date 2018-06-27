import { connect } from 'react-redux';

import Checklist from '../components/checklist/checklist';
import deleteChecklistItems from '../actions/deleteChecklistAction';


const mapStateToProps = state => ({
  sucess:state.checklistItems.delete
});

const mapDispatchToProps = {
  deleteChecklistItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Checklist);
