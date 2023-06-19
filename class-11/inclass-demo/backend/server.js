'use strict';

// REQUIRE
require('dotenv').config();
const express = require('express');
const cors = require('cors');

//  **** require in the mongoose library ****
const mongoose = require('mongoose');

// **** require our MODEL ****
const Cat = require('./models/cats');

const app = express();

// middleware
app.use(cors());

// define PORT validate env is working
const PORT = process.env.PORT || 3002;

// LISTEN
app.listen(PORT, () => console.log(`listening on Port ${PORT}`));

// **** CONNECT OUR MONGODB USING MONGOOSE ****
// *** PER THE MONGOOSE DOCS **** 
mongoose.connect(process.env.DB_URL); // take in the string of my mongoDB

// *** HELPFUL FOR TROUBLESHOOTING IN TERMINAL WHY YOU CAN'T CONNECT TO YOUR MONGODB ***
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});


// *** ENDPOINT TO RETREIVE ALL CATS FROM THE DB ****

app.get('/cats', getCats);

async function getCats(request, response, next){
  try {
    // TODO: GET ALL CATS FROM THE DB
    let allCats = await Cat.find({});

    // TODO: SEND THOSE CATS ON THE RESPONSE
    response.status(200).send(allCats);
  } catch (error) {
    next(error);
  }
}


app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

// ERROR
app.use((error, request, response, next) => {
  console.log(error.message);
  response.status(500).send(error.message);
});


