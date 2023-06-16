'use strict';

const axios = require('axios');

let cache = {};

// TODO: need to create a key for the data i'm going to store
// TODO: if the thing exists and within valid timeframe - send that data from the cache
// TODO: if it doesn't exist then i need to make a call to my API and return the data from the API
// TODO: if it doesn't exist, also add it to the cache when i get it back from the API

async function getPhotos(request, response, next) {
  try {
    let keywordFromFrontend = request.query.searchQuery;

    let key = `${keywordFromFrontend}-Photos`; // key = Seattle-Photo OR Boston-Photo

    if (cache[key] && (Date.now() - cache[key].timestamp) < 10000) {
      console.log('Cache was hit!', cache);

      response.status(200).send(cache[key].data);

    } else {
      console.log('No item in cache');

      // TODO: MAKE OUR API CALL
      let url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=${keywordFromFrontend}`;
      let dataFromAxios = await axios.get(url);
      let photosToSend = dataFromAxios.data.results.map(photoObj => new Photo(photoObj));

      // TODO: ADD THE API RETURN TO CACHE
      cache[key] = {
        timestamp: Date.now(),
        data: photosToSend
      };

      // TODO: SEND THE API DATA TO FRONTEND
      response.status(200).send(photosToSend);
    }
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


