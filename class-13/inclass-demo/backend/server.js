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

// !!!!!! DON'T FORGET THIS !!!!!
app.use(express.json());

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

async function getCats(request, response, next) {
  try {
    // TODO: GET ALL CATS FROM THE DB
    let allCats = await Cat.find({});

    // TODO: SEND THOSE CATS ON THE RESPONSE
    response.status(200).send(allCats);
  } catch (error) {
    next(error);
  }
}

// *** ENDPOINT TO ADD A CAT TO THE DB ***

app.post('/cats', addCat);

async function addCat(request, response, next) {
  console.log(request.body);
  try {
    let createdCat = await Cat.create(request.body);
    // !!! DON'T FORGET THAT MIDDLEWARE ^ ^ ^ ^(line 20)

    response.status(200).send(createdCat);
  } catch (error) {
    next(error);
  }
}


// *** ENDPOINT TO DELETE A CAT ****
// ! we must have path parameter
// ! path parameter is going to be set with a variable to capture the ID
// ! we use ':' to signify that it is a path parameter
app.delete('/cats/:catID', deleteCat);

async function deleteCat(request, response, next) {
  console.log(request.params);
  try {
    let id = request.params.catID;

    await Cat.findByIdAndDelete(id);

    response.status(200).send('cat was deleted from db!');
  } catch (error) {
    next(error);
  }
}

// *** ENDPOINT TO UPDATE A CAT ***

app.put('/cats/:catID', updateCat);


async function updateCat(request, response, next){
  try {

    let id = request.params.catID;
    let data = request.body;
    // let optionsObj = { new: true, overwrite: true };

    // ** 3 args for model method
    // ** 1st - is the id
    // ** 2nd - is the data
    // ** 3rd - options object - { new: true, overwrite: true }

    let updatedCat = await Cat.findByIdAndUpdate(id, data, { new: true, overwrite: true });

    response.status(200).send(updatedCat);
    
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


