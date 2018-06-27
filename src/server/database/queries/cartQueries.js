const dbConnection = require('../dbConnection');

const selectUsersItems = ({
  cartId = 1
}, cb) => {
  const queryText = {
    text: 'SELECT * FROM shop_items WHERE id IN (SELECT shop_item_id FROM carts_items WHERE cart_id = $1)',
    values: [cartId]
  };
  dbConnection.query(queryText, (dbError, dbResponse) => {
    if (dbError) return cb(dbError);
    cb(null, dbResponse);
  });
};

module.exports = {
  selectUsersItems
};
