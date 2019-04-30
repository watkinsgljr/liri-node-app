
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
  
}

    axios.get("https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=RlocwbBCGMdcYb9eMmGaGmTW0WiIGb8G&keyword" + artist)
        .then(function (response) {
            console.log("result")
            console.log(response.data._embedded.events[0]._embedded.venues[0].name);
            id = response.data._embedded.events[0].id;
            console.log(id);
            name = response.data._embedded.events[0]._embedded.venues[0].name;
            console.log(name);
            date = response.data._embedded.events[0].dates.start.localDate;
            console.log(date);
            venue = response.data._embedded.events[0]._embedded.venues[0].name;
            console.log(venue);
            address = response.data._embedded.events[0]._embedded.venues[0].address.line1;
            console.log(address);
            city = response.data._embedded.events[0]._embedded.venues[0].city.name;
            console.log(city);
            state = response.data._embedded.events[0]._embedded.venues[0].state.stateCode;
            console.log(state);
            postalCode = response.data._embedded.events[0]._embedded.venues[0].postalCode;
            console.log(postalCode);
            fullAddress = address + " | " + city + ", " + state + " | " + postalCode;
            console.log(fullAddress);
            console.log("result")
            console.log("result")
            console.log("Venue: " + venue);
            console.log("Location: " + fullAddress);
            console.log("Date: " + date);
        });

process.on('unhandledRejection', error => {
    // Won't execute
    console.log('unhandledRejection', error.test);
});

new Promise((_, reject) => reject({ test: 'woops!' })).catch(() => { });

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