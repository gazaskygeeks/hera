import axios from 'axios';
import {
  DELETE_CHECKLIST_ITEMS
} from '../../constants/actionTypes';



const deleteChecklistItemsSuccess = data => ({
  type: DELETE_CHECKLIST_ITEMS,
  data
});




export default ({
  id
}) => (dispatch) => {
  console.log(id,'iiid in delete acttion');
  axios
    .get(`/checklist/delete`, { params: {id} })
    .then((response) => {
      dispatch(deleteChecklistItemsSuccess(response));
    })
    .catch((err) => {
      console.log(err);
    });
};
