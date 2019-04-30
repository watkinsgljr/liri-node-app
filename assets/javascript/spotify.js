
var track = process.argv[3].trim().split("-").join("+");


var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: "adeadf358ed44099b8538462016d1f6f",
    secret: "6901d6ef0b0448278a1b0af9718b6288"
});

spotify.search({ type: 'track', query: track, limit: 1}, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }
    console.log(track);

    console.log("-------------------------------------------------------------------------")


    // console.log(data.tracks.items);
    console.log(data.tracks.items[0].artists[0].name);
    console.log(data.tracks.items[0].name);
    console.log(data.tracks.items[0].preview_url);
    console.log(data.tracks.items[0].album.name);

    console.log("-------------------------------------------------------------------------")
});