const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['localhost'], localDataCenter: 'datacenter1', keyspace: 'bookings' });
 
const dropGuestTable = 'DROP TABLE IF EXISTS bookings.guest;';

const createGuestTable = `CREATE TABLE guest (
  id int, 
  name text,
  PRIMARY KEY (id)
);`;

const dropAccommodationTable = 'DROP TABLE IF EXISTS bookings.accommodation;';

const createAccommodationTable = `CREATE TABLE accommodation (
  id int, 
  price_per_day decimal,
  cleaning_fee decimal,
  additional_guest_fee decimal,
  accommodations_tax decimal,
  general_tax decimal,
  rating_score decimal,
  number_of_ratings int,
  guest_threshold int,
  max_guests int,
  minimum_stay_length int,
  availability_end_date timestamp,
  availability_last_updated timestamp,
  number_viewing_listing int,
  above_avg_views boolean,
  rare_find boolean,
  hot_item boolean,
  PRIMARY KEY (id)
);`;

const dropReservationsTable = 'DROP TABLE IF EXISTS bookings.reservation;';

const createReservationsTable = `CREATE TABLE reservation (
  id int,
  date timestamp,
  accommodation_id int,
  guest_id int,
  total_guests int,
  total_adults int,
  total_children int,
  total_infants int,
  PRIMARY KEY ((accommodation_id), date)
) WITH CLUSTERING ORDER BY (date ASC);`;

// Only works is CQLSH and not a CQL command
// const query = `COPY guest (id,name) FROM '/Users/muhammadshehu/Desktop/SHEHU/Hack_Reactor/W8/booking_module/guestData.csv' WITH DELIMITER=',' and HEADER=true`;
// const query = `COPY accommodation (id, price_per_day,cleaning_fee,accommodations_tax,general_tax,rating_score,number_of_ratings,max_guests,number_viewing_listing,availability_last_updated,above_avg_views,rare_find,hot_item,guest_threshold,additional_guest_fee,minimum_stay_length,availability_end_date) FROM '/Users/muhammadshehu/Desktop/SHEHU/Hack_Reactor/W8/booking_module/accommodationData.csv' WITH DELIMITER=',' and HEADER=true`;
// const query = `COPY reservation (id, date, accommodation_id,guest_id,total_adults,total_children,total_infants,total_guests) FROM '/Users/muhammadshehu/Desktop/SHEHU/Hack_Reactor/W8/booking_module/reservationData.csv' WITH DELIMITER=',' and HEADER=true`;

client.execute(dropGuestTable)
  .then(result => {
    console.log('Dropped guest tables!');
    return client.execute(createGuestTable);
  })
  .then(result => {
    console.log('Created guest tables!');
    return client.execute(dropAccommodationTable);
  })
  .then(result => {
    console.log('Dropped accommodation tables!');
    return client.execute(createAccommodationTable);
  })
  .then(result => {
    console.log('Created accommodation tables!');
    return client.execute(dropReservationsTable);
  })
  .then(result => {
    console.log('Dropped reservations tables!');
    return client.execute(createReservationsTable);
  })
  .then(result => {
    console.log('Created reservations tables!');
  })
  .catch(err => {
    console.log(err);
  });