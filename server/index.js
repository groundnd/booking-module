const express = require('express');
const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 3003;
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send();
});


// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening on port ${port}`));
