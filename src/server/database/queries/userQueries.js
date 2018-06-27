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

const getUserOnCartAccess = ({
  userId, cartId
}, cb) => {
  const queryText = {
    text: 'SELECT user_on_cart_access FROM users_carts WHERE id = $2 AND user_id = $1',
    values: [userId, cartId]
  };
  dbConnection.query(queryText, (dbErr, dbRes) => {
    if (dbErr) return cb(dbErr);
    cb(null, dbRes);
  });
};

module.exports = {
  selectUser,
  getUserOnCartAccess
};
