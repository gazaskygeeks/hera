const querystring = require('querystring');
const { getChecklistItems } = require('../database/queries/checkListQueries');

module.exports = (req, res) => {
  getChecklistItems({}, (dbError, dbResponse) => {
    if (dbError) return res.send({ err: 'Data could not be fetched' });
    if (dbResponse.rowCount === 0) return res.send({ msg: 'Found Nothing' });
    res.send(dbResponse.rows);
  });
};
