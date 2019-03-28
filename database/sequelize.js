const Sequelize = require('sequelize');
const pw = require('./config/sequelize.config');

const sequelize = new Sequelize('bookings', 'root', pw.rootPW, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
