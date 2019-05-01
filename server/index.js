require('newrelic');
const express = require('express');
const redis = require("redis");
const morgan = require('morgan');
const path = require('path');
const dateFormatter = require('./helpers');
const port = require('./.env.js');
const postgres = require('../database/postgres/index.js');
const { promisify } = require('util');

const app = express();
const client = redis.createClient();
const sequelize = require('../database/index');
const Models = require('../database/models/index');
const getRedisAsync = promisify(client.get).bind(client);
const setRedisAsync = promisify(client.set).bind(client);

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/:roomid', express.static(path.join(__dirname, '../client/dist')));
// app.use(morgan('dev'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.get('/bookings/:accommodationid/:startDate&:endDate', (req, res) => {
  const start = new Date(req.params.startDate);
  const current = new Date(req.params.endDate);
  
  return getRedisAsync(req.params.accommodationid)
  .then(async (result) => {
    if (result) {
      res.send(result);
    } else {
      const availability = await postgres.getReservation(req.params.accommodationid, dateFormatter(start), dateFormatter(current));
      res.send(JSON.stringify({ availability }));
      setRedisAsync(`${req.params.accommodationid}-reservation`, JSON.stringify({ availability }))
    }
  })
  
});

app.get('/bookings/:accommodationid', (req, res) => {

  return getRedisAsync(req.params.accommodationid)
  .then(async (result) => {
    if (result) {
      res.send(result);
    } else { 
      const accommodation = await postgres.getAccommodation(req.params.accommodationid);
      const now = new Date();
      let current;
      if (now.getMonth() === 11) {
        current = new Date(now.getFullYear() + 1, 0, 1);
      } else {
        current = new Date(`${now.getMonth() + 2} 1, ${now.getFullYear()}`);
      }
      const availability = await postgres.getReservation(req.params.accommodationid, dateFormatter(now), dateFormatter(current));
      // console.log(availability);
      !availability ? res.send(JSON.stringify({ accommodation, availability: {} })) : res.send(JSON.stringify({ accommodation, availability }));
      setRedisAsync(`${req.params.accommodationid}-accommodation`, JSON.stringify({ accommodation, availability }))
    }
  })
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening on port ${port}`));
client.on('connect', function() {
  console.log('Redis client connected');
});

client.on('error', function (err) {
  console.log('Something went wrong ' + err);
});
