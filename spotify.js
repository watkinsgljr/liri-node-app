
// require('dotenv').config();
// var Spotify = require('node-spotify-api');
// var track = process.argv[3].trim().split("-").join("+");



// var spotify = new Spotify({
//     id: process.env.SPOTIFY_ID,
//     secret: process.env.SPOTIFY_SECRET
// });

// spotify.search({ type: 'track', query: track, limit: 1}, function (err, data) {
//     if (err) {
//         return console.log('Error occurred: ' + err);
//     }
//     console.log(track);

//     console.log("-------------------------------------------------------------------------")


//     // console.log(data.tracks.items);
//     console.log(data.tracks.items[0].artists[0].name);
//     console.log(data.tracks.items[0].name);
//     console.log(data.tracks.items[0].preview_url);
//     console.log(data.tracks.items[0].album.name);

//     console.log("-------------------------------------------------------------------------")
// });