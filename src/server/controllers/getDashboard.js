const { selectUsersItems } = require('../database/queries/cartQueries');

module.exports = (req, res) => {
  selectUsersItems({ userId: 1, cartId: 1 }, (dbError, dbResponse) => {
    console.log('dbError', dbError);
    if (dbError) return res.send({ dbError });
    res.send(dbResponse.rows);
  });
};
