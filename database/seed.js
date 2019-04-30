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


const gigaSeed = (writer, times, data, callback) => {
  let i = times;
  let write = () => {
    let ok = true;
    do {
      i--;
      counter++;
      if (i === 0) {
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
  return {id: counter, name: faker.name.findName()};
};

const accommodationData = () => {
  const includeAddlFields = true;
  const newAccData = {
    id: counter,
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
    id: counter + 50000001,
    date: faker.date.between('2019-04-01', '2022-07-01').toISOString(),
    accommodation_id: faker.random.number({ min: 1, max: records }),
    guest_id: faker.random.number({ min: 1, max: records}),
    total_adults: faker.random.number({ min: 2, max: 5 }),
    total_children: faker.random.number({ min: 2, max: 5 }),
    total_infants: faker.random.number({ min: 2, max: 5 }),
  }
  resData.total_guests = resData.total_adults + resData.total_children;
  return resData;
};

var counter = 0;
var streamGuestWrite = fs.createWriteStream('guestData.csv');
streamGuestWrite.write(Object.keys(guestData()).join(',') + '\n');
gigaSeed(streamGuestWrite, records, guestData, () => {
  console.log('Done Saving Guest Data!');
  // zipFile('guestData');
  
  counter = 0;
  var streamAccommodationsWrite = fs.createWriteStream('accommodationData.csv');
  streamAccommodationsWrite.write(Object.keys(accommodationData()).join(',') + '\n');
  gigaSeed(streamAccommodationsWrite, records, accommodationData, () => {
    console.log('Done Saving Accommodation Data!');
    // zipFile('accommodationData');
    
    counter = 0;
    var streamReservationWrite = fs.createWriteStream('reservationData.csv');
    streamReservationWrite.write(Object.keys(reservationsData()).join(',') + '\n');
    gigaSeed(streamReservationWrite, records * 5, reservationsData, () => {
      console.log('Done Saving Reservation Data!');
      // zipFile('reservationData');
      
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
};


