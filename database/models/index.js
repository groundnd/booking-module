const Sequelize = require('sequelize');
const db = require('../index');

const AccomodationModel = require('./accommodation');
const GuestModel = require('./guest');
const ReservationModel = require('./reservation');

const Guest = GuestModel(db, Sequelize);
const Accomodation = AccomodationModel(db, Sequelize);
const Reservation = ReservationModel(db, Sequelize);

module.exports = {
  Accomodation,
  Guest,
  Reservation,
};
