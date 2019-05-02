
// require('dotenv').config();
// const axios = require('axios');
// var keys = require("./keys.js");


// var ticketmasterApi = keys.ticketmaster.id;

// console.log(ticketmasterApi);







// function searchTicketmaster(artist) {
//     axios.get("https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=" + ticketmasterApi + "&keyword=" + artist)
//     .then(function (response) {
//         console.log("result")
//         console.log(response.data._embedded.events[0]._embedded.venues[0].name);
//         id = response.data._embedded.events[0].id;
//         console.log(id);
//         name = response.data._embedded.events[0]._embedded.venues[0].name;
//         console.log(name);
//         date = response.data._embedded.events[0].dates.start.localDate;
//         console.log(date);
//         venue = response.data._embedded.events[0]._embedded.venues[0].name;
//         console.log(venue);
//         address = response.data._embedded.events[0]._embedded.venues[0].address.line1;
//         console.log(address);
//         city = response.data._embedded.events[0]._embedded.venues[0].city.name;
//         console.log(city);
//         state = response.data._embedded.events[0]._embedded.venues[0].state.stateCode;
//         console.log(state);
//         postalCode = response.data._embedded.events[0]._embedded.venues[0].postalCode;
//         console.log(postalCode);
//         fullAddress = address + " | " + city + ", " + state + " | " + postalCode;
//         console.log(fullAddress);
//         console.log("result")
//         console.log("result")
//         console.log("Venue: " + venue);
//         console.log("Location: " + fullAddress);
//         console.log("Date: " + date);
//     });

// process.on('unhandledRejection', error => {
//     // Won't execute
//     console.log('unhandledRejection', error.test);
// });
// }

// new Promise((_, reject) => reject({ test: 'woops!' })).catch(() => { });
