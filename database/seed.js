const faker = require('faker');
const db = require('./index');
const Models = require('./models/index');
const zlib = require('zlib');
const fs = require('fs');
const async = require('async');
const csv = require('csv');
const readline = require('readline');
const LineByLineReader = require('line-by-line');

const records = 10000000;

const generateGuestData = () => {
  const guestData = [];
  for (let i = 0; i < records; i += 1) {
    guestData[i] = { name: faker.name.findName() };
  }
  return JSON.stringify(guestData);
};


const getRating = () => {
  const scores = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  return scores[faker.random.number({ min: 0, max: 10 })];
}

const getSpecial = () => {
  const extraRenders = [
    { above_avg_views: true,
      rare_find: false,
      hot_item: false,
    },
    { above_avg_views: false,
      rare_find: true,
      hot_item: false,
    },
    { above_avg_views: false,
      rare_find: false,
      hot_item: true,
    },
    { above_avg_views: false,
      rare_find: false,
      hot_item: false,
    }
  ]
  return extraRenders[faker.random.number({ min: 0, max: 3 })]
}

const generateAccommodationData = () => {
  const accommodationData = [];
  for (let i = 0; i < records; i += 1) {
    const includeAddlFields = true;
    const newAccData = {
      price_per_day: faker.finance.amount(60, 300, 2),
      cleaning_fee: faker.finance.amount(20, 80, 2),
      accommodations_tax: faker.finance.amount(0, 0.1, 2),
      general_tax: faker.finance.amount(0, 0.05, 2),
      rating_score: getRating(),
      number_of_ratings: faker.random.number({ min: 0, max: 1000 }),
      max_guests: faker.random.number({ min: 1, max: 11 }),
      number_viewing_listing: faker.random.number({ min: 0, max: 600 }),
      availability_last_updated: faker.date.between('2019-01-01', '2019-03-28'),
    };

    Object.assign(newAccData, getSpecial());

    if (includeAddlFields) {
      const addlFields = {
        guest_threshold: faker.random.number({ min: 2, max: 5 }),
        additional_guest_fee: faker.finance.amount(10, 30, 2),
        minimum_stay_length: faker.random.number({ min: 2, max: 5}),
        availability_end_date: faker.date.between('2020-04-01', '2022-01-01')
      };
      Object.assign(newAccData, addlFields);
    }

    accommodationData.push(newAccData);
  }
  return JSON.stringify(accommodationData);
};


const generateReservationsData = () => {
  const reservationData = [];
  
  for (let i = 0; i < 10000000; i += 1) {
    const resData = {
      date: faker.date.between('2019-04-01', '2019-10-01'),
      accommodation_id: faker.random.number({ min: 1, max: records}),
      guest_id: faker.random.number({ min: 1, max: records}),
      total_adults: faker.random.number({ min: 2, max: 5 }),
      total_children: faker.random.number({ min: 2, max: 5 }),
      total_infants: faker.random.number({ min: 2, max: 5 }),
    }
    resData.total_guests = resData.total_adults + resData.total_children;
    // reservationData.push(resData);
  }
  
  for (let i = 0; i < 10000000; i += 1) {
    const resData = {
      date: faker.date.between('2019-04-01', '2022-01-01'),
      accommodation_id: faker.random.number({ min: 1, max: records }),
      guest_id: faker.random.number({ min: 1, max: records}),
      total_adults: faker.random.number({ min: 2, max: 5 }),
      total_children: faker.random.number({ min: 2, max: 5 }),
      total_infants: faker.random.number({ min: 2, max: 5 }),
    }
    resData.total_guests = resData.total_adults + resData.total_children;
    // reservationData.push(resData);
  }
  return reservationData;
};

var counter = 0;
const gigaSeed = (writer, times, data, callback) => {
  let i = times;
  let write = () => {
    let ok = true;
    // writer.write(Object.keys(data()).join(',') + '\n');
    do {
      i--;
      counter++;
      if (i === 0) {
        // console.log(Object.keys(data()).map(element => data()[element]).join(','));
        writer.write(Object.keys(data()).map(element => data()[element]).join(',') + '\n', callback);
      } else {
        ok = writer.write(Object.keys(data()).map(element => data()[element]).join(',') + '\n');
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  };
  write();
};

const guestData = () => { 
  return {name: faker.name.findName()};
};

const accommodationData = () => {
  const includeAddlFields = true;
  const newAccData = {
    // id: counter,
    price_per_day: faker.finance.amount(60, 300, 2),
    cleaning_fee: faker.finance.amount(20, 80, 2),
    accommodations_tax: faker.finance.amount(0, 0.1, 2),
    general_tax: faker.finance.amount(0, 0.05, 2),
    rating_score: getRating(),
    number_of_ratings: faker.random.number({ min: 0, max: 1000 }),
    max_guests: faker.random.number({ min: 1, max: 11 }),
    number_viewing_listing: faker.random.number({ min: 0, max: 600 }),
    availability_last_updated: faker.date.between('2019-01-01', '2019-03-28').toISOString(),
  };

  // price_per_day,cleaning_fee,accommodations_tax,general_tax,rating_score,number_of_ratings,max_guests,number_viewing_listing,availability_last_updated,above_avg_views,rare_find,hot_item,guest_threshold,additional_guest_fee,minimum_stay_length,availability_end_date 

  Object.assign(newAccData, getSpecial());

  if (includeAddlFields) {
    const addlFields = {
      guest_threshold: faker.random.number({ min: 2, max: 5 }),
      additional_guest_fee: faker.finance.amount(10, 30, 2),
      minimum_stay_length: faker.random.number({ min: 2, max: 5}),
      availability_end_date: faker.date.between('2020-04-01', '2022-01-01').toISOString()
    };
    Object.assign(newAccData, addlFields);
  }
  return newAccData;
};

const reservationsData = () => {  
  const resData = {
    date: faker.date.between('2019-04-01', '2022-01-01').toISOString(),
    accommodation_id: faker.random.number({ min: 1, max: records }),
    guest_id: faker.random.number({ min: 1, max: records}),
    total_adults: faker.random.number({ min: 2, max: 5 }),
    total_children: faker.random.number({ min: 2, max: 5 }),
    total_infants: faker.random.number({ min: 2, max: 5 }),
  }
  resData.total_guests = resData.total_adults + resData.total_children;
  return resData;
};

var streamGuestWrite = fs.createWriteStream('guestData.csv');
gigaSeed(streamGuestWrite, records, guestData, () => {
  console.log('Done Saving Guest Data');
  zipFile('guestData');
  counter = 0;

  var streamAccommodationsWrite = fs.createWriteStream('accommodationData.csv');
  streamAccommodationsWrite.write(Object.keys(accommodationData()).join(',') + '\n');
  gigaSeed(streamAccommodationsWrite, records, accommodationData, () => {
    console.log('Done Saving Accommodation Data');
    zipFile('accommodationData');
    
    var streamReservationWrite = fs.createWriteStream('reservationData.csv');
    streamReservationWrite.write(Object.keys(reservationsData()).join(',') + '\n');
    gigaSeed(streamReservationWrite, records, reservationsData, () => {
      console.log('Done Saving Reservation Data!');
      zipFile('reservationData');
      
      Models.Accommodation.hasMany(Models.Guest);
      Models.Accommodation.hasMany(Models.Reservation);
      db.drop();
      db.sync({ force: true, match: /bookings$/ })
        .then(() => {
          db.query("COPY guests(name) FROM '/Users/muhammadshehu/Desktop/SHEHU/Hack_Reactor/W8/booking_module/guestData.csv' DELIMITER ',' CSV HEADER ");
          db.query(
            "COPY "+
            "accommodation (price_per_day,cleaning_fee,accommodations_tax,general_tax,rating_score,number_of_ratings,max_guests,number_viewing_listing,availability_last_updated,above_avg_views,rare_find,hot_item,guest_threshold,additional_guest_fee,minimum_stay_length,availability_end_date)" + 
            "FROM '/Users/muhammadshehu/Desktop/SHEHU/Hack_Reactor/W8/booking_module/accommodationData.csv' DELIMITER ',' CSV HEADER ");
          db.query(
            "COPY " + 
            "reservations(date,accommodation_id,guest_id,total_adults,total_children,total_infants,total_guests) " + 
            "FROM '/Users/muhammadshehu/Desktop/SHEHU/Hack_Reactor/W8/booking_module/reservationData.csv' DELIMITER ',' CSV HEADER ");
        })
        .then(() => console.log('Seeded Database successfully'))
        .catch(err => (
          console.log(err)));
    });
  });  
});

const zipFile = (file) => {
  var rStream = fs.createReadStream(`${file}.csv`);
  var wStream = fs.createWriteStream(`${file}.csv.gz`);

  var gzip = zlib.createGzip();
  rStream   
    .pipe(gzip)  
    .pipe(wStream)  
    .on('finish', function () {  
      console.log(`Done Compressing ${file}!`);
    });
};

const unZipFile = (file) => {
  var gunzip = zlib.createGunzip();
  var rStream = fs.createReadStream(`${file}.csv.gz`);
  rStream   
    .pipe(gunzip)  
    .pipe(process.stdout);
}

// db.drop();
// db.sync({ force: true, match: /bookings$/ })
//   .then(() => Models.Guest.bulkCreate(generateGuestData()))
//   .then(() => Models.Accommodation.bulkCreate(generateAccommodationData()))
//   .then(() => Models.Reservation.bulkCreate(generateReservationsData(), { ignoreDuplicates: true }))
//   .then(() => console.log('Seeded Database successfully'))
//   .catch(err => (
//     console.log(err)));


