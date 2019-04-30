-- CREATE DATABASE bookings;

DROP TABLE IF EXISTS guests;

CREATE TABLE guests (
  id int, 
  name text
);

DROP TABLE IF EXISTS accommodation;

CREATE TABLE accommodation (
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
  availability_end_date date,
  availability_last_updated date,
  number_viewing_listing int,
  above_avg_views boolean,
  rare_find boolean,
  hot_item boolean
);

DROP TABLE IF EXISTS reservations;

CREATE TABLE reservations (
  id int, 
  date date,
  accommodation_id int,
  guest_id int,
  total_guests int,
  total_adults int,
  total_children int,
  total_infants int 
);

\copy guests (id, name) FROM '/Users/muhammadshehu/Desktop/SHEHU/Hack_Reactor/W8/booking_module/guestData.csv' DELIMITER ',' CSV HEADER;

\copy accommodation (id, price_per_day,cleaning_fee,accommodations_tax,general_tax,rating_score,number_of_ratings,max_guests,number_viewing_listing,availability_last_updated,above_avg_views,rare_find,hot_item,guest_threshold,additional_guest_fee,minimum_stay_length,availability_end_date) FROM '/Users/muhammadshehu/Desktop/SHEHU/Hack_Reactor/W8/booking_module/accommodationData.csv' DELIMITER ',' CSV HEADER;

\copy reservations (id, date, accommodation_id,guest_id,total_adults,total_children,total_infants,total_guests) FROM '/Users/muhammadshehu/Desktop/SHEHU/Hack_Reactor/W8/booking_module/reservationDataExtra.csv' DELIMITER ',' CSV HEADER;

ALTER TABLE guests ADD PRIMARY KEY (id);

ALTER TABLE accommodation ADD PRIMARY KEY (id);

ALTER TABLE reservations ADD PRIMARY KEY (id),
ADD CONSTRAINT accommodation_idx FOREIGN KEY (accommodation_id) REFERENCES accommodation(id),
ADD CONSTRAINT guest_idx FOREIGN KEY (guest_id) REFERENCES guests(id);

ANALYSE;
