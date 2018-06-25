const dbConnection = require('../dbConnection');

const selectItemsByFilter = ({
  category, price, popularity, collections
}, cb) => {
  const queryText = {
    text: "SELECT * FROM shop_items WHERE (category = $1 OR $1 = 'any') AND (price_value < $2 OR $2 = -1) AND (rating > $3 OR $3 = -1)",
    values: [category, price, popularity]
  };
  dbConnection.query(queryText, (dbErr, dbRes) => {
    if (dbErr) return cb(dbErr);
    cb(null, dbRes);
  });
};

module.exports = {
  selectItemsByFilter
};
