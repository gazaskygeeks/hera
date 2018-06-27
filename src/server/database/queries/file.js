const dbConnection = require('../dbConnection');
const { getUserOnCartAccess } = require('./userQueries');

const insertToCart = ({
  userId = 1, cartId = 1, itemId // Hardcoded user and cart IDs!
}, cb) => {
  getUserOnCartAccess({ userId, cartId }, (accessError, accessResponse) => {
    if (accessError) return cb(accessError);
    if (accessResponse.rows[0].user_on_cart_access !== 'EDIT') return cb(new Error('User DOES NOT have the right to edit this cart'));
    const queryText = {
      text: 'INSERT INTO carts_items (cart_id, shop_item_id) VALUES ($1, $2)',
      values: [cartId, itemId]
    };
    dbConnection.query(queryText, (dbError, dbResponse) => {
      if (dbError) return cb(dbError);
      cb(null, dbResponse);
    });
  });
};

insertToCart({ itemId: 1 }, (err, res) => {
  if (err) console.log(err);
  else console.log(res);
});
