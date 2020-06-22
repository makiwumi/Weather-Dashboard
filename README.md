# Weather-Dashboard
A dashboard that displays the weather from an API using HTML, CSS, JavaScript and Bootstrap.

Live App https://makiwumi.github.io/Weather-Dashboard/

## API used
    Open weather API

    You can search weather forecast for 5 days with data every 3 hours by city name. All weather data can be obtained in JSON and XML formats.
    
    API call for information using:

    api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}

    api.openweathermap.org/data/2.5/forecast?q={city name},{state}&appid={your api key}

    api.openweathermap.org/data/2.5/forecast?q={city name},{state},{country code}&appid={your api key}

Parameters:
q city name, state and and country code divided by comma, use ISO 3166 country codes. 

##  Files and frameswork used
    Index.html, script.js, style.css
    bootstrap 

## Functionality
    Created navbar and sections of the page using bootstrap and the row and column system.
    Also created divs for search input and button, buttons for previous location and forcast display.

    Variables created for saved locations and current locations. Used JSON for local storage to save previous cities searched.
    Created function to pull information from API using geocodes longitude and latitude

    When user searches for a city and clicks the search button, the city forcast is displayed, with the current day at the top.
    The bottom sections are 5 day forcasts of the city displayed. 

    Forcasts include:
        //display city name
      
        //display last updated
        
        //display Temperature
        
        //display Humidity
        
        //display Wind Speed

        // UV-Index
