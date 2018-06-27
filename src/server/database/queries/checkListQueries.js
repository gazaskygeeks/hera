const dbConnection = require('../dbConnection');

const getChecklistItems = (cb) => {
  const queryText = {
    text: "SELECT * FROM checklist_item WHERE todo_id=$1",
    values: [1]
  };
  dbConnection.query(queryText, (dbErr, dbRes) => {
    console.log(dbErr,'err');
    console.log(dbRes.rows,'result');
    if (dbErr) return cb(dbErr);
    cb(null, dbRes);
  });
};
const deleteChecklistItems = ({todoID=1}, cb) => {
  console.log(todoID);
  const queryText = {
    text: "Delete FROM checklist_item WHERE id=$1",
    values: [todoID]
  };
  dbConnection.query(queryText, (dbErr, dbRes) => {
    if (dbErr) return cb(dbErr);
    cb(null, dbRes);
  });
};

module.exports = {
  getChecklistItems,deleteChecklistItems
};
