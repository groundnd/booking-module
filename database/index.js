const Sequelize = require('sequelize');
const pw = require('./config/sequelize.config');


const db = new Sequelize('bookings', 'root', pw.rootPW, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = db;