
require('dotenv').config()
const axios = require('axios');
console.log(process.env.NODE_ENV);
var keys = require("./keys.js");
console.log(keys);

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;



var $ = jQuery = require('jquery')(window);



let artist = process.argv[2];

console.log(process.argv);
console.log(artist);
apiEvents(artist);

function apiEvents(artist) {
    console.log(artist)
    const apiKey = "apikey=RlocwbBCGMdcYb9eMmGaGmTW0WiIGb8G&"
    const apiTM = "https://app.ticketmaster.com/discovery/v2/"
    let size = "size=1&"
    let keyword = "keyword=" + artist;
    let query = apiTM + "events.json?" + size + apiKey + keyword;
    console.log(query)
    api(query);
}

function api(query) {
    axios.get(query)
    .then(function (response) {
        console.log("result-------------------------------")
        console.log(response);
        console.log("result-----------------------")
        console.log(response._embedded);
            console.log("eventSearch")
            console.log(response._embedded.events[i])
            let result = {
                id: response._embedded.events.id,
                name: response._embedded.events.name,
                date: response._embedded.events.dates.start.localDate,
                venue: response._embedded.events._embedded.venues[0].name,
                address: _embedded.events._embedded.venues[0].address.line1,
                city: _embedded.events._embedded.venues[0].city.name,
                state: _embedded.events._embedded.venues[0].state.stateCode,
                postalCode: _embedded.events._embedded.venues[0].postalCode,
                fullAddress: address + ", " + city + ", " + state + " " + postalCode
            }
            console.log("result-----------------------")
            console.log(result)
            console.log("result-------------------------")
    });
};

process.on('unhandledRejection', error => {
    // Won't execute
    console.log('unhandledRejection', error.test);
  });
  
  new Promise((_, reject) => reject({ test: 'woops!' })).catch(() => {});

//   $.ajax({
//     type:"GET",
//     url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=pho7OmvOpK7EIlNS23BfbCoUAFKmWWHN",
//     async:true,
//     dataType: "json",
//     success: function(json) {
//                 console.log(json);
//                 // Parse the response.
//                 // Do other things.
//              },
//     error: function(xhr, status, err) {
//                 // This time, we do not end up here!
//              }
//   });