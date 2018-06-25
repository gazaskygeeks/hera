const dbConnection = require('../dbConnection');

const selectUser = ({ id }, cb) => {
  const queryText = {
    text: 'SELECT * FROM users WHERE id = $1',
    values: [id]
  };
  dbConnection.query(queryText, (dbErr, dbRes) => {
    if (dbErr) return cb(dbErr);
    cb(null, dbRes);
  });
};

module.exports = {
  selectUser
};
