const { addChecklistItem } = require('../database/queries/checkListQueries');

module.exports = (req, res) => {
  const { itemValue } = req.body;
  addChecklistItem({ value: itemValue }, (err, dbRes) => {
    if (err) return res.send({ msg: 'err' });
    res.send({ msg: 'success' });
  });
};
