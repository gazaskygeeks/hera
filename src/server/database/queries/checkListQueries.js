const dbConnection = require('../dbConnection');

const getChecklistItems = ({ todoId = 1 }, cb) => {
  const queryText = {
    text: 'SELECT * FROM checklist_item WHERE todo_id=$1',
    values: [todoId]
  };
  dbConnection.query(queryText, (dbErr, dbRes) => {
    if (dbErr) return cb(dbErr);
    cb(null, dbRes);
  });
};

const addChecklistItem = ({ value, todoId = 1 }, cb) => {
  const queryText = {
    text: 'INSERT INTO checklist_item (value, checked, todo_id) VALUES ($1, false, $2);',
    values: [value, todoId]
  };
  dbConnection.query(queryText, (dbErr, dbRes) => {
    if (dbErr) return cb(dbErr);
    cb(null, dbRes);
  });
};

module.exports = {
  getChecklistItems,
  addChecklistItem
};
