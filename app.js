var express = require('express'),
    app = express(),
    // compression = require('compression'),
    unirest = require('unirest'),
    xml2js = require('xml2js'),
    parser = new xml2js.Parser(),
    Forecast = require('forecast.io');

// The number of milliseconds in one day
var oneDay = 86400000;
var FORCAST_IO_API_KEY = 'xxxxxxxxx';
//https://api.forecast.io/forecast/APIKEY/LATITUDE,LONGITUDE
var latitude = '0.0';
var longitude = '0.0';

//http://darkskyapp.github.io/skycons/

var options = {
        APIKey: FORCAST_IO_API_KEY,
        timeout: 4000,
        exclude: 'minutely,hourly,flags,alerts',
        units: 'si'
    },
    forecast = new Forecast(options);

// Use compress middleware to gzip content
// app.use(express.compress());

// Serve up content from public directory
app.use(express.static(__dirname + '/public', {
    maxAge: oneDay
}));

app.get('/tube', function(req, res) {
    console.log("/tube/");
    unirest.get('http://cloud.tfl.gov.uk/TrackerNet/LineStatus').end(function(response) {
        // Except google trims the value passed :/
        if (response) {
            parser.parseString(response.body, function(err, result) {
                result = JSON.stringify(result);
                console.log('Done');
                res.send(result);
            });
        } else {
            res.send({});
        }
    });
});

app.get('/forecast', function(req, res) {
    console.log('forecast');
    getForecast(function(err, data) {
        if (err) {
            // res.status(404).send(err);
        } else {

            var result = JSON.stringify(data);

            console.log('result');

            res.send(result);
        }
    });
});



function getForecast(cb) {
    forecast.get(latitude, longitude, function(err, res, data) {
        console.log('forecast.get: err: ' + err + 'res: ' + res);
        if (err && err != null) {
            cb && cb(err, undefined);
            return;
        }
        // console.log(JSON.stringify(data.currently, null, 4));
        // console.log(JSON.stringify(data.daily, null, 4));
        cb && cb(err, {
            currently: data.currently,
            daily: data.daily
        });

    });
}


app.listen(process.env.PORT || 3000);

console.log('starting frame...');
