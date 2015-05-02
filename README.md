# Oldfield Frame

Oldfield frame is a infromation station designed to be run on node.js. Can be run on a Rasberry Pi, Qnap nas or web service such as heroku

The kindle will display London Underground tube delays, the current weather conditions and temperature as well as the next 5 days forecast with change of rain.

### Version
0.0.1
### Installation

Configure your forecast_io_dev key (https://developer.forecast.io/register)
 and location in config.json in the root of the source tree

{   "FORCAST_IO_API_KEY" : "MY_KEY",  
    "latitude" : "0.0",
    "longitude" : "0.0"
}

Install node and npm

$npm install
$node app.js

Enjoy.
