const cors = require('cors');
const express = require('express');
// CONFIGURATION
const diamondsController = require('./controller/diamondsController')
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use('/diamonds', diamondsController);
// app.use('/reviews', require('./controller/reviewsController'))


// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to Diamonds Page');
});

// Error
app.get('*', (req, res) => {
  res.status(404).send('Page does not exist');
});
// EXPORT

module.exports = app;