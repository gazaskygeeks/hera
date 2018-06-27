const dbConnection = require('../dbConnection');

const selectShopItems = ({
  id, name, providerId, providerName, category, any
}, cb) => {
  const queryText = {
    text: 'SELECT * FROM shop_items WHERE id = $1, name = $2, ',
    values: [id, name, providerId, providerName, category, any]
  };
  dbConnection.query(queryText, (dbErr, dbRes) => {
    if (dbErr) return cb(dbErr);
    cb(null, dbRes);
  });
};

module.exports = {
  selectShopItems
};
