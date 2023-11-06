const cors = require('cors');
const express = require('express');
// CONFIGURATION
const diamondsController = require('./controller/diamondsController')
const profileController = require('./controller/profileController')
const orderController = require('./controller/orderController')
const orderItemsController = require('./controller/orderItemsController')
const reviewsController =require('./controller/reviewsController')
const app = express();

const morgan = require('morgan')

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'))

// ROUTES
app.use('/diamonds', diamondsController);
app.use('/diamonds/reviews', reviewsController);
app.use('/diamonds/:diamond_id/reviews', reviewsController);
app.use('/profile', profileController)
app.use('/order',orderController)
app.use('/orderItems', orderItemsController)


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