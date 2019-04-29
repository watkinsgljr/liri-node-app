

require("jsdom").env("", function (err, window) {
    if (err) {
        console.error(err);
        return;
    }

    var $ = require("jquery")(window);
});



let artist = process.argv[2];

console.log(process.argv);
console.log(artist);
apiEvents(artist);

function apiEvents(artist) {
    console.log(artist)
    const apiKey = "apikey=RlocwbBCGMdcYb9eMmGaGmTW0WiIGb8G&"
    const apiTM = "https://app.ticketmaster.com/discovery/v2/"
    let size = "size=1"
    let keyword = "keyword=" + artist;
    let query = apiTM + "events.json?" + size + apiKey + keyword;
    api(query);
}

function api(query) {
    $.ajax({
        url: query,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response._embedded);
        for (i = 0; i < response._embedded.events.length; i++) {
            console.log("eventSearch")
            console.log(response._embedded.events[i])
            let result = {
                id: response._embedded.events[i].id,
                name: response._embedded.events[i].name,
                date: response._embedded.events[i].dates.start.localDate,
                venue: response._embedded.events[i]._embedded.venues[0].name,
                address: _embedded.events[i]._embedded.venues[0].address.line1,
                city: _embedded.events[i]._embedded.venues[0].city.name,
                state: _embedded.events[i]._embedded.venues[0].state.stateCode,
                postalCode: _embedded.events[i]._embedded.venues[0].postalCode,
                fullAddress: address + ", " + city + ", " + state + " " + postalCode
            }
            console.log(result)

        }
    });
};

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