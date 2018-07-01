const fs = require('fs');
const path = require('path');
const dbConnection = require('./dbConnection');

const sql = fs.readFileSync(path.join(__dirname, 'dbBuild.sql')).toString();
const insertQueries = fs.readFileSync(path.join(__dirname, 'dbInit.sql')).toString();

module.exports = () => dbConnection.query(sql, (buildError, dbResponse) => {
  console.log(buildError, 'buildError');
  if (buildError) throw new Error('\x1b[31m', 'Error building database');
  console.log('\x1b[36m%s\x1b[0m', 'Database have been built');
  dbConnection.query(insertQueries, (insertError, insertResponse) => {
    console.log(insertError, 'insertError');
    if (insertError) throw new Error('\x1b[31m', 'Error initializing database');
    console.log('\x1b[36m%s\x1b[0m', 'Database have been initialized');
  });
});
