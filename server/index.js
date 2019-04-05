const express = require('express');
const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 3003;
const app = express();
const sequelize = require('../database/index');
const Models = require('../database/models/index');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(morgan('dev'));

app.get('/bookings/:accommodationid/reserve', async (req, res) => {
  const accommodation = await Models.Accommodation.findAll({
    where: { id: req.params.accommodationid },
  });

  const availability = await sequelize.query(`SELECT reservations.date FROM reservations INNER JOIN accommodation INNER JOIN guests 
  WHERE reservations.accommodation_id = accommodation.id AND guests.id = reservations.guest_id AND accommodation.id = ${req.params.accommodationid};`,
  { type: sequelize.QueryTypes.SELECT });

  res.send(JSON.stringify({ accommodation, availability }));
});


// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening on port ${port}`));
