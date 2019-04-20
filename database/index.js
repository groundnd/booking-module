const Sequelize = require('sequelize');
const { Client } = require('pg');
const pgtools = require('pgtools');
const pw = process.env.MYSQL_ROOT_PW || require('./config/sequelize.config').rootPW;

const databaseName = process.env.MYSQL_DATABASE || 'bookings';


const db = new Sequelize(databaseName, 'muhammadshehu', pw, {
  host: process.env.MYSQL_URL || 'localhost',
  dialect: 'postgres',
  logging: false,
});

module.exports = db;
