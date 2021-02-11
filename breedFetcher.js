const request = require('request')

const url =  'https://api.thecatapi.com/v1/breeds/search';
const breed = process.argv[2]
const input = `${url}?q=${breed}`



request(input, (error, response, body) => {
  console.log(body)
 if (error) {
   console.log("url does not exist")
 } else if(response.statusCode === 404) {
   console.log("path does not exist")

 }

 const request = JSON.parse(body);
 console.log(request)
 console.log(response.statusCode)
 if (request[0] === undefined) {
console.log(`The requested breed ${breed} is not found`)
 } else {
   console.log(request[0].description)
 }
}); 


