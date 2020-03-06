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

