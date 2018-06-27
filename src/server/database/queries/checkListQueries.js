const dbConnection = require('../dbConnection');

const getChecklistItems = (cb) => {
  const queryText = {
    text: "SELECT * FROM checklist_item WHERE todos_id=$1",
    values: [1]
  };
  dbConnection.query(queryText, (dbErr, dbRes) => {
    console.log(dbErr,'err');
    console.log(dbRes.rows,'result');
    if (dbErr) return cb(dbErr);
    cb(null, dbRes);
  });
};

module.exports = {
  getChecklistItems
};
