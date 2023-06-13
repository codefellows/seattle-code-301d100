'use strict';

console.log('Yay! Our first server!!');

// **** REQUIRE *** (like import but for backend)
const express = require('express');
require('dotenv').config();
const cors = require('cors');


// *** DATA JSON TO USE ****
let data = require('./data/data.json');

// *** CREATING OUR SERVER - USING EXPRESS ***
// *** app === my server
const app = express();

// *** MIDDLEWARE ***
app.use(cors());


// *** DEFINE MY PORT FOR MY SERVER ***
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(`We are running ${PORT}!`));

// ** ENDPOINTS ***
// ** URL - '/'
// ** Callback function that will handle the incoming request, and respond

app.get('/', (request, response) => {
  response.status(200).send('Welcome to my server!');
});

app.get('/hello', (request, response) => {
  console.log(request.query);
  let userFirstName = request.query.firstname;
  let userLastName = request.query.lastname;

  response.status(200).send(`Hello ${request.query.firstname} ${userLastName}`);
});

// *** HELPFUL START FOR YOUR LAB ***
app.get('/weather', (request,response,next)=>{

  try {
    let lat = request.query.lat;
    let lon = request.query.lon;
    let searchQuery = request.query.searchQuery;

    // finish this portion using the weather.json file and the class you will build...

  } catch (error) {
    next(error);
  }
});


app.get('/pets', (request, response, next) => {
  try {
    // TODO: GRAB THE QUERY FROM THE REQUEST.QUERY OBJECT
    let queriedSpecies = request.query.species;
    // TODO: USE THAT QUERY TO FIND A PET THAT MATCHES
    let foundSpecies = data.find(animal => animal.species === queriedSpecies);

    // USING MY CLASS TO GROOM THAT DATA
    let speciesToSend = new Pet(foundSpecies);
    // TODO: SEND THAT FOUND PET IN THE RESPONSE
    response.status(200).send(speciesToSend);

  } catch (error) {
    next(error);
  }
});


//  *** CLASS TO GROOM BLUKY DATA ***

class Pet {
  constructor(animalObj){
    this.name = animalObj.name;
    this.breed = animalObj.breed;
  }
}


// *** CATCH ALL ENDPOINT  - NEEDS TO BE THE LAST ENDPOINT DEFINED ***
app.get('*', (request, response) => {
  response.status(404).send('Sorry, page not found');
});


// *** ERROR HANDLING - PLUG AND PLAY CODE FROM EXPRESS DOCS ***
app.use((error, request, response, next) => {
  console.log(error.message);
  response.status(500).send(error.message);
});
