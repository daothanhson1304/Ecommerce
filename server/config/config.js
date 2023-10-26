const Sequelize = require('sequelize');

const config = {
  database: process.env.DB_NAME,
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
  dialect: 'postgres',
  operatorsAliases: Sequelize.Op,
  pool: {
    max: 50,
    min: 0,
    acquire: 120000,
    idle: 10000,
  },
};
module.exports = config;
