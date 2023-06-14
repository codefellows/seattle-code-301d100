'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(`We are running ${PORT}!`));

app.get('/', (request, response) => {
  response.status(200).send('Welcome to my server!');
});



/*
 *** FOR YOUR LAB - WEATHER
 *** http://api.weatherbit.io/v2.0/forecast/daily?key=<your API key>&lat=<from your frontend>&lon=<from your frontend>&days=5&units=I


 *** FOR YOUR LAB - MOVIES ***
 *** https://api.themoviedb.org/3/search/movie?api_key=<your MOVIE DB KEY>&query=<city info from frontend>
 *** images: https://image.tmdb.org/t/p/w500/<poster path>

class Movie{
  constructor(movieOb){
    this.title =
    this.overview =
    this.image = `https://image.tmdb.org/t/p/w500${movieOb.poster_path}`
  }
}
*/


// TODO: Build an endpoint that will call out to an API

app.get('/photos', async (request, response, next) => {
  try {
    // TODO: accept the query -> /photos?searchQuery=VALUE
    let keywordFromFrontend = request.query.searchQuery;

    // TODO: build a url for axios
    let url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=${keywordFromFrontend}`;

    // TODO: store our axios return in a variable
    let dataFromAxios = await axios.get(url);

    // TODO: take that response from axios and use a class to simplify it down to a few properties
    let photosToSend = dataFromAxios.data.results.map(photoObj => new Photo(photoObj));

    // TODO: send that data to the frontend
    response.status(200).send(photosToSend);
  } catch (error) {
    next(error);
  }
});

// TODO: BUILD CLASS TO TRIM DOWN THE DATA FROM UNSPLASH
class Photo {
  constructor(photoObj){
    this.src = photoObj.urls.regular;
    this.alt = photoObj.alt_description;
    this.username = photoObj.user.name;
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
