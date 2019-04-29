require("dotenv").config();


const keys = require("./keys.js");
  
const spotify = new Spotify(keys.spotify)

var action = process.argv[2];

if (action === "search-concerts") {
    console.log("test complete");

} else if (action === "search-songs") {
    console.log("test complete");

} else if (action === "search-movies") {
    console.log("test complete");

} else if (action === "feeling-lucky") {
    console.log("test complete");
}
