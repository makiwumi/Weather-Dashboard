//Variables for previous locations and current locations
let savedLocations = [];

let currentLocation;
//function to pull previous location from local storage
function initialize() {
    savedLocations = JSON.parse(localStorage.getItem("weathercities"));
    var lastSearch;
    //display buttons for previous searches
    if (savedLocations) {
        currentLocation = savedLocations[savedLocations.length - 1];
        showPrevious();
        getCurrent(currentLocation);
    }
    //if cant grab current location, make this a default
    else {
        if (!navigator.geolocation) {  
            getCurrent("Laurel");
        }
        else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }

}
//function to pull API by geocodes
function success(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=81e1dec4e9f456659bdc2c1245a4e8ed";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        currentLocation = response.name;
        saveLoc(response.name);
        getCurrent(currentLocation);
    });

}

