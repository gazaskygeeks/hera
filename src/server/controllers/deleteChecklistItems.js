const querystring = require('querystring');
const { deleteChecklistItems } = require('../database/queries/checkListQueries');

module.exports = (req, res) => {
  const { id } = req.query;
  console.log(id);
  deleteChecklistItems({todoID: id},(dbError, dbResponse) => {
    if (dbError) return res.send({ err: 'Data could not be fetched' });
    res.send('sucess');
  });
};
