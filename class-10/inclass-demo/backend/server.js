'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');


// BRING IN OUR EXPORTED FUNCTION
const getPhotos = require('./modules/photo');


const app = express();

app.use(cors());

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(`We are running ${PORT}!`));

app.get('/', (request, response) => {
  response.status(200).send('Welcome to my server!');
});

app.get('/photos', getPhotos);

// *** CATCH ALL ENDPOINT  - NEEDS TO BE THE LAST ENDPOINT DEFINED ***
app.get('*', (request, response) => {
  response.status(404).send('Sorry, page not found');
});


// *** ERROR HANDLING - PLUG AND PLAY CODE FROM EXPRESS DOCS ***
app.use((error, request, response, next) => {
  console.log(error.message);
  response.status(500).send(error.message);
});
