const path = require('path');
require('dotenv').config()
module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: process.env.HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'knex', 'migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'knex', 'seeds'),
    },
    useNullAsDefault: true
  },
};