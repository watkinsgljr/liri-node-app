console.log('this is loaded');


exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  };

exports.ticketmaster = {
    id: process.env.TICKETMASTER_ID,
    secret: process.env.TICKETMASTER_SECRET
  };

  exports.omdb = {
    id: process.env.OMDB_ID
  };