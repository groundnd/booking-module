const Sequelize = require('sequelize');
const pw = process.env.MYSQL_ROOT_PASSWORD || require('./config/sequelize.config').rootPW;

const databaseName = process.env.MYSQL_DATABASE || 'bookings';


const db = new Sequelize(databaseName, 'root', pw, {
  host: process.env.MYSQL_URL || 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = db;
