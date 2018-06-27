const { insertToCart } = require('../database/queries/itemQueries');

module.exports = (req, res) => {
  const { itemId } = req.body;
  if (!itemId) return res.send({ err: 'Something went wrong' });
  insertToCart({ itemId }, (insertError, dbResponse) => {
    if (insertError && insertError.err === 'EXISTS') return res.send({ msg: 'Item already exists' });
    if (insertError) return res.send({ err: 'Something went wrong' });
    res.send({ msg: 'Success' });
  });
};
