const querystring = require('querystring');
const { selectItemsByFilter } = require('../database/queries/itemQueries');

module.exports = (req, res) => {
  const {
    category, price, popularity, collections
  } = req.query;
  if (!category) return res.send({ err: 'Something went wrong' });
  selectItemsByFilter({
    category,
    price: price === 'economic' ? 250 : price === 'expensive' ? 300 : price === 'cheap' ? 100 : -1,
    popularity: popularity === 'popular' ? 4.2 : popularity === 'economic' ? 3 : popularity === 'isolated' ? 0 : -1,
    collections
  }, (dbError, dbResponse) => {
    if (dbError) return res.send({ err: 'Data could not be fetched' });
    if (dbResponse.rowCount === 0) return res.send({ msg: 'Found Nothing' });
    res.send(dbResponse.rows);
  });
};
