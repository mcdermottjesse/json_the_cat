const request = require('request');

const url = 'https://api.thecatapi.com/v1/breeds/search';
//const breed = process.argv[2]

//const input = `${url}?q=${breed}`



const fetchBreedDescription = function(breed, callback) {
  const input = `${url}?q=${breed}`;
  request(input, (error, response, body) => {
    if (error) {
      return callback(error, null);
    } else if (response.statusCode === 404) {//The response.statusCode indicates the HTTP response code
      return callback("path does not exist", null);

    }

    const request = JSON.parse(body);
    //console.log(request)
    console.log(response.statusCode);
    if (request[0] === undefined) {
      return callback(null, `The requested breed ${breed} is not found`);
    } else {
      return callback(null, request[0].description);

    }
  });
};

module.exports = { fetchBreedDescription };



