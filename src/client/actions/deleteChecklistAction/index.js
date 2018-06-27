import axios from 'axios';
import {
  DELETE_CHECKLIST_ITEMS
} from '../../constants/actionTypes';



const deleteChecklistItemsSuccess = data => ({
  type: DELETE_CHECKLIST_ITEMS,
  data
});




export default () => (dispatch) => {
  fetch('/checklist/delete')
    .then(response => {
      if (response.status >= 400) {
        throw new Error('Bad response from sarver');
      }
      return response.json();
    }).then((response) => {
      dispatch(deleteChecklistItemsSuccess(response));
    })
    .catch((err) => {
      console.log(err);
    });
};
