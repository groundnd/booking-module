const Sequelize = require('sequelize');
const db = require('../index');

const AccommodationModel = require('./accommodation');
const GuestModel = require('./guest');
const ReservationModel = require('./reservation');

const Guest = GuestModel(db, Sequelize);
const Accommodation = AccommodationModel(db, Sequelize);
const Reservation = ReservationModel(db, Sequelize);

// Accommodation.hasMany(Reservation);
// Reservation.belongsTo(Accommodation);
// Guest.hasMany(Reservation);
// Reservation.belongsTo(Guest);

module.exports = {
  Accommodation,
  Guest,
  Reservation,
};
