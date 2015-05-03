var refreshtime = 1000 * 60 * 5; //5 minutes
var kindleWidth = 800;
var kindleHeight = 600;


var kindleFrame = {};

function reloadIFrames() {
    tflIFrame.src = tflIFrame.src;
    WeatherBugSticker_728x90_v2.src = WeatherBugSticker_728x90_v2.src;
}
//http://darkskyapp.github.io/skycons/

function ftoc(fahrenheit) {
    var celcius = (fahrenheit - 32) * 5 / 9;
    celcius = +celcius.toFixed(2);
    return Math.round(celcius);
}

function decimalPlaces(input){
    return (+input.toFixed(2));
}


function skyconForForecast(type) {
    if (type == 'clear-day') {
        return Skycons.CLEAR_DAY;
    } else if (type == 'clear-night') {
        return Skycons.CLEAR_NIGHT;
    } else if (type == 'rain') {
        return Skycons.RAIN;
    } else if (type == 'snow') {
        return Skycons.SNOW;
    } else if (type == 'sleet') {
        return Skycons.SLEET;
    } else if (type == 'wind') {
        return Skycons.WIND;
    } else if (type == 'fog') {
        return Skycons.FOG;
    } else if (type == 'cloudy') {
        return Skycons.CLOUDY;
    } else if (type == 'partly-cloudy-day') {
        return Skycons.PARTLY_CLOUDY_DAY;
    } else if (type == 'partly-cloudy-night') {
        return Skycons.PARTLY_CLOUDY_NIGHT;
    }
    return Skycons.CLEAR_DAY;
}

function getDayOfWeek(unixTime) {
    var date = new Date(unixTime * 1000);
    var day = date.getDay();
    switch (day) {
        case 0:
            return 'Sun';
        case 1:
            return 'Mon';
        case 2:
            return 'Tue';
        case 3:
            return 'Wed';
        case 4:
            return 'Thu';
        case 5:
            return 'Fri';
        case 6:
            return 'Sat';
        default:
            break;
    }
    return '???';
}

function updateForecastUX(forecast) {

    //Current weather;
    var summary = forecast.currently.summary;
    var temp = ftoc(forecast.currently.temperature);
    var icon = forecast.currently.icon;
    kindleFrame.skycons.set("currently", skyconForForecast(icon));
    $('#currently-temp').html(temp + '&deg');
    $('#currently-container #current-rain-chance').html('Rain soon '+ decimalPlaces(forecast.currently.precipProbability * 100) + '%');
    var daily = forecast.daily.data;
    if (daily.length >= 3) {
        for (var i = 0; i < 3; i++) {
            var day = daily[i];
            var element = document.querySelector('#weather-container #forecast-day-' + i + ' .forecast-day-canvas');
            kindleFrame.skycons.set(element, skyconForForecast(day.icon));

            $('#weather-container #forecast-day-' + i + ' .forecast-day-temp').html(ftoc(day.temperatureMin) + '%' +
                '/' + ftoc(day.temperatureMax) + '&deg ' + '(' + decimalPlaces(day.precipProbability * 100) + '%' + ')');
            $('#weather-container #forecast-day-' + i + ' .day-label').html(getDayOfWeek(day.time));
        }
    }
}
/*
  "currently": {
    "time": 1405972968,
    "summary": "Partly Cloudy",
    "icon": "partly-cloudy-night",
    "nearestStormDistance": 105,
    "nearestStormBearing": 167,
    "precipIntensity": 0,
    "precipProbability": 0,
    "temperature": 73.38,
    "apparentTemperature": 73.38,
    "dewPoint": 59.02,
    "humidity": 0.61,
    "windSpeed": 4.18,
    "windBearing": 0,
    "visibility": 7.41,
    "cloudCover": 0.42,
    "pressure": 1020.28,
    "ozone": 334.8
  },
  */
/*
"daily": {
    "summary": "Drizzle throughout the week, with temperatures peaking at 84\u00b0F on Saturday.",
    "icon": "rain",
    "data": [
      {
        "time": 1405897200,
        "summary": "Partly cloudy throughout the day.",
        "icon": "partly-cloudy-day",
        "sunriseTime": 1405915705,
        "sunsetTime": 1405973179,
        "moonPhase": 0.83,
        "precipIntensity": 0.0023,
        "precipIntensityMax": 0.0109,
        "precipIntensityMaxTime": 1405897200,
        "precipProbability": 0.61,
        "precipType": "rain",
        "temperatureMin": 63.02,
        "temperatureMinTime": 1405918800,
        "temperatureMax": 77.81,
        "temperatureMaxTime": 1405954800,
        "apparentTemperatureMin": 63.02,
        "apparentTemperatureMinTime": 1405918800,
        "apparentTemperatureMax": 77.81,
        "apparentTemperatureMaxTime": 1405954800,
        "dewPoint": 61.77,
        "humidity": 0.75,
        "windSpeed": 5.84,
        "windBearing": 336,
        "visibility": 6.44,
        "cloudCover": 0.5,
        "pressure": 1017.63,
        "ozone": 334.55
      },
*/
function getForecast() {
    $.ajax({
        url: window.location.origin + "/forecast",
        type: "GET",
        dataType: "html",
        success: function(data) {
            updateForecastUX(JSON.parse(data));
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // debug here
        }
    });
}

function getTubeInfo() {
    var tubeXml = "http://cloud.tfl.gov.uk/TrackerNet/LineStatus";
    var tubeJSON = "http://api.tubeupdates.com/?method=get.status&return=name,status,id&callback=?";
    $.ajax({
        url: window.location.origin + "/tube",
        type: "GET",
        dataType: "html",
        success: function(data) {
            $("#tubelines").empty();
            var tubeStatus = JSON.parse(data);
            console.log("got tubeStatus");
            var statusArray = tubeStatus.ArrayOfLineStatus.LineStatus;

            var delayCount = 0;
            //If we have move than 3 delays won't fit in list
            //so adjust size accordingly
            statusArray.forEach(function(l) {
                 if(l.Status[0].$.Description != 'Good Service' && l.Line[0].$.Name !== "Overground") {
                    delayCount +=1;
                }
            });
            var delayFontSize = '150%';
            if(delayCount>4){
                delayFontSize = '100%';
            }
            
            if(delayCount>0) {
                statusArray.forEach(function(line) {
                    console.log(line);
                    var name = line.Line[0].$.Name;
                    if (name == 'Hammersmith and City') {
                        name = 'Ham & City';
                    }
                    if (name == 'Metropolitan') {
                        name = 'Metro';
                    }
                    if (name == 'Waterloo and City') {
                        name = 'W & C';
                    }
                    if (name != 'Overground') {
                        var status = line.Status[0].$.Description;
                        var delayStyle = ' style="color: #ffffff; background-color: #000000; font-size: ' + delayFontSize +'"';
                        if(status != 'Good Service'){
                            $('<dt' + delayStyle + '><b>' + name + '</b>' + ' ' + status + '<dt>').appendTo("#tubelines");
                        }
                    }

                });
            }
            else{
                //Just show Good Service Message
                var goodServiceStyle = ' style="color: #000000; background-color: #ffffff; font-size: 300%"';
                $('<dt' + goodServiceStyle + '><b>Good Service All Lines</b><dt>').appendTo("#tubelines");
            }
            var date = new Date();
            $('#last-updated').html('last updated: ' + date.getHours() + ':' + date.getMinutes() + '  ' + date.getDay() + '/' +
            date.getMonth() + '/' + date.getFullYear());
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            $('#last-updated').html('textStatus');
        }
    });
}

window.onload = function() {
    // var tflIFrame = document.getElementById("tfl-iframe");
    //remove rotation on pc
    kindleFrame.skycons = new Skycons({
        "color": "black"
    });
    kindleFrame.skycons.add(document.getElementById("currently"), Skycons.CLEAR_DAY);
    kindleFrame.skycons.add(document.querySelector('#weather-container #forecast-day-0 .forecast-day-canvas'), Skycons.CLEAR_DAY);
    kindleFrame.skycons.add(document.querySelector('#weather-container #forecast-day-1 .forecast-day-canvas'), Skycons.CLEAR_DAY);
    kindleFrame.skycons.add(document.querySelector('#weather-container #forecast-day-2 .forecast-day-canvas'), Skycons.CLEAR_DAY);

    if (window.screen.width > 800) {
        $("body").css("-webkit-transform", "rotate(0deg)");
        $("body").css("-webkit--origin", "0 0");
    }


    var WeatherBugSticker_728x90_v2 = document.getElementById("WeatherBugSticker_728x90_v2");
    setInterval(function() {
        // tflIFrame.src = tflIFrame.src;
        getTubeInfo();
        getForecast();
    }, refreshtime);

    var tday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var tmonth = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");


    var getClock = function() {
        d = new Date();
        nhour = d.getHours();
        nmin = d.getMinutes();

        if (nhour == 0) {
            ap = " AM";
            nhour = 12;
        } else if (nhour <= 11) {
            ap = " AM";
        } else if (nhour == 12) {
            ap = " PM";
        } else if (nhour >= 13) {
            ap = " PM";
            nhour -= 12;
        }

        if (nmin <= 9) {
            nmin = "0" + nmin;
        }

        document.getElementById('clock').innerHTML = nhour + ":" + nmin;
        document.getElementById('am').innerHTML = ap;

        d = new Date();
        nday = d.getDay();
        nmonth = d.getMonth();
        ndate = d.getDate();
        nyear = d.getYear();

        document.getElementById('date').innerHTML = tday[nday] + ", " + tmonth[nmonth] + " " + ndate;
    };


    getClock();
    setInterval(function() {
        getClock();
    }, 1000 * 60);

    getTubeInfo();
    getForecast();

    $('#clockbox').click(function() {
        window.location.reload();
    });

};