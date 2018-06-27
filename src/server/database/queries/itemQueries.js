const dbConnection = require('../dbConnection');
const { getUserOnCartAccess } = require('./userQueries');

const selectItemsByFilter = ({
  category, price, popularity, collections
}, cb) => {
  const queryText = {
    text: "SELECT * FROM shop_items WHERE (category = $1 OR $1 = 'any') AND (price_value < $2 OR $2 = -1) AND (rating > $3 OR $3 = -1)",
    values: [category, price, popularity]
  };
  dbConnection.query(queryText, (dbError, dbResponse) => {
    if (dbError) return cb(dbError);
    cb(null, dbResponse);
  });
};

const selectCartItem = ({
  cartId, itemId
}, cb) => {
  const queryText = {
    text: 'SELECT * FROM carts_items WHERE cart_id = $1 AND shop_item_id = $2',
    values: [cartId, itemId]
  };
  dbConnection.query(queryText, (dbError, dbResponse) => {
    if (dbError) return cb(dbError);
    cb(null, dbResponse);
  });
};

const insertToCart = ({
  userId = 1, cartId = 1, itemId // Hardcoded user and cart IDs!
}, cb) => {
  getUserOnCartAccess({ userId, cartId }, (accessError, accessResponse) => {
    if (accessError) return cb(accessError);
    if (accessResponse.rows[0].user_on_cart_access !== 'EDIT') return cb(new Error('User DOES NOT have the right to edit this cart'));
    selectCartItem({ cartId, itemId }, (selectError, selectResponse) => {
      if (selectError) return cb(selectError);
      if (selectResponse.rowCount >= 1) return cb({ err: 'EXISTS' });
      const queryText = {
        text: 'INSERT INTO carts_items (cart_id, shop_item_id) VALUES ($1, $2)',
        values: [cartId, itemId]
      };
      dbConnection.query(queryText, (dbError, dbResponse) => {
        if (dbError) return cb(dbError);
        cb(null, dbResponse);
      });
    });
  });
};

module.exports = {
  selectItemsByFilter,
  selectCartItem,
  insertToCart
};
