require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var omdb = require("./omdb.js");
var ticketmaster = require("./ticketmaster.js");
var spotify = require("./spotify.js");
const axios = require('axios');
const inquirer = require("inquirer");

var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

var action = process.argv[2];


inquirer.prompt([

    {
        type: "input",
        name: "name",
        message: "Hello, my name is Liri. What is your name???"
    },

    {
        type: "list",
        name: "action",
        message: "How may I assist you today?",
        choices: ["search concerts", "search songs", "search movies"]
    },

    {
        type: "password",
        name: "myPassword",
        message: "Before I do, what is the magic word?"
    },

]).then(function (user) {


    if (user.myPassword != "pass") {

        console.log("==============================================");
        console.log("Incorrect password " + user.name);
        console.log("Come back later and try again");
        console.log("==============================================");
    }


    else {
        getSearchItem(user.action);


    };
});



function getSearchItem(userAction) {

    if (userAction === "search concerts") {
        inquirer.prompt([

            {
                type: "input",
                name: "artist",
                message: "Which artist would you like to see???"
            },


        ]).then(function (user) {

            searchItem = (user.artist.trim().split(" ").join("+"));
            searchTicketmaster(searchItem);

        });

    } else if (userAction === "search songs") {

        inquirer.prompt([

            {
                type: "input",
                name: "song",
                message: "Which song would you see???"
            },


        ]).then(function (user) {

            searchItem = (user.song.trim().split("-").join("+"));
            spotifySearch(searchItem);

        });

    } else if (userAction === "search movies") {
        inquirer.prompt([

            {
                type: "input",
                name: "movie",
                message: "Which movie would you see???"
            },


        ]).then(function (user) {

            searchItem = user.movie.trim().split(" ").join("+");
            searchOmdb(searchItem);

        });
    }


}



//-------------------------------------------------------TICKETMASTER----------------------------------------------


var ticketmasterApi = keys.ticketmaster.id;








function searchTicketmaster(artist) {
    axios.get("https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&size=10&apikey=" + ticketmasterApi + "&keyword=" + artist)
        .then(function (response) {
            // console.log(response.data._embedded.events);

            for (i = 0; i < response.data._embedded.events.length; i++) {
                
                let id = response.data._embedded.events[i].id;

                let eventName = response.data._embedded.events[i].name;

                let name = response.data._embedded.events[i]._embedded.venues[0].name;

                let date = response.data._embedded.events[i].dates.start.localDate;

                let venue = response.data._embedded.events[i]._embedded.venues[0].name;

                let address = response.data._embedded.events[i]._embedded.venues[0].address.line1;

                let city = response.data._embedded.events[i]._embedded.venues[0].city.name;

                let state = response.data._embedded.events[i]._embedded.venues[0].state.stateCode;

                let postalCode = response.data._embedded.events[i]._embedded.venues[0].postalCode;

                let fullAddress = address + " | " + city + ", " + state + " | " + postalCode;

                console.log("-------------------------------------------------------------------------")
                console.log("Event: " + eventName);
                console.log("Venue: " + venue);
                console.log("Location: " + fullAddress);
                console.log("Date: " + date);
                console.log("-------------------------------------------------------------------------")
            }
        });

    process.on('unhandledRejection', error => {
        // Won't execute
        console.log('unhandledRejection', error.test);
    });
}

new Promise((_, reject) => reject({ test: 'woops!' })).catch(() => { });











//-------------------------------------------------------SPOTIFY----------------------------------------------





var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

function spotifySearch(track) {
    spotify.search({ type: 'track', query: track, limit: 1 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }


        console.log("-------------------------------------------------------------------------")


        // console.log(data.tracks.items);
        console.log(data.tracks.items[0].artists[0].name);
        console.log(data.tracks.items[0].name);
        console.log(data.tracks.items[0].preview_url);
        console.log(data.tracks.items[0].album.name);

        console.log("-------------------------------------------------------------------------")
    });
}














//-------------------------------------------------------OMBD----------------------------------------------





omdbApi = keys.omdb.id;

function searchOmdb(movie) {
    axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=" + omdbApi).then(
        function (response) {
            console.log("-------------------------------------------------------------------------")
            console.log("Movie Title: " + response.data.Title);
            console.log("Year Released: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
            console.log("Country Produced: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
            console.log("-------------------------------------------------------------------------")
        });
}
























// if (user.action === "search concerts") {

//     console.log("test complete");
//     searchTicketmaster();

// } else if (user.action === "search songs") {
//     console.log("test complete");
//     searchSpotify();

// } else if (user.action === "search-movies") {
//     searchOmdb();

// } else if (user.action === "feeling lucky") {
//     console.log("test complete");
// }

// }