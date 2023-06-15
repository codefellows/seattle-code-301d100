'use strict';

const axios = require('axios');

async function getPhotos(request, response, next) {
  try {
    let keywordFromFrontend = request.query.searchQuery;
    let url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=${keywordFromFrontend}`;
    let dataFromAxios = await axios.get(url);
    let photosToSend = dataFromAxios.data.results.map(photoObj => new Photo(photoObj));
    response.status(200).send(photosToSend);
  } catch (error) {
    next(error);
  }
}

class Photo {
  constructor(photoObj) {
    this.src = photoObj.urls.regular;
    this.alt = photoObj.alt_description;
    this.username = photoObj.user.name;
  }
}


// EXPORTS ONE FUNCTION
module.exports = getPhotos;


// MULTIPLE FUNCTIONS
// module.exports = { getPhotos, getWeather, getMovies }

// **** Example of refactor but not needed for lab!!! *** 
// function getPhotosAfterRefactor(request, response, next) {

//   let keywordFromFrontend = request.query.searchQuery;
//   let baseUrl = 'https://api.unsplash.com/search/photos';
//   let queryStrings = {
//     client_id: process.env.UNSPLASH_API_KEY,
//     query: keywordFromFrontend,
//   };
//    HANDLING PROMISES with .then
//   axios.get(baseUrl, { params: queryStrings })
//     .then(dataFromAxios => dataFromAxios.data.results.map(photoObj => new Photo(photoObj)))
//     .then(photosToSend => response.status(200).send(photosToSend))
//     .catch(error => next(error));

// }