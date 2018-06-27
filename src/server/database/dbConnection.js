const { Pool } = require('pg');
require('env2')('./.config.env');

const env = process.env.ENV;
const dbUrl = env === 'testing'
  ? process.env.TEST_DB_URL
  : env === 'production'
    ? process.env.PRODUCTION_DB_URL
    : process.env.DEVELOPMENT_DB_URL;

if (!dbUrl) throw new Error('Database url not set or not found');

module.exports = new Pool({ connectionString: dbUrl, ssl: true });
