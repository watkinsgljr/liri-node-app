console.log('this is loaded');
var Spotify = require('node-spotify-api');

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  };

exports.ticketmaster = {
    id: process.env.TICKETMASTER_ID,
    secret: process.env.TICKETMASTER_SECRET
  };