const request = require("request-promise");
const config = require("../config");
const Weather = require("../models/weather_model");

function getWeather(req, res) {
	var city = req.body.city;
	var offset = new Date().getTimezoneOffset() / -60;
	var date = new Date().setHours(offset, 0, 0, 0);
	var day = Math.floor(date / 1000);
	Weather.findOne({date_unix: day, city: city}).then(async forecast => {
		if (forecast) {
			res.send({success: true, weather: forecast});
		}
		else {
			try {
				var data = await requestWeather(city);
			}
			catch(error) {
				return res.status(500).send({success: false});
			}
			var forecast = await saveWeather(data, day, city);
			res.send({success: true, weather: forecast});
		}
	}).catch(e => {
		res.status(500).send({success: false});
	});
}

async function requestWeather(city) {
	return request({
		url: "http://api.apixu.com/v1/forecast.json",
		qs: {
			key: config.weather,
			q: city,
			days: 7,
			lang: "ru"
		},
		json: true
	});
};

async function saveWeather(data, day, city) {
	var forecast = [];

	for(var forecast_day of data.forecast.forecastday) {
		forecast.push({
			date_unix: forecast_day.date_epoch,
			temp: forecast_day.day.avgtemp_c,
			wind: forecast_day.day.maxwind_mph,
			status: forecast_day.day.condition.text,
			icon: forecast_day.day.condition.icon.replace("64x64", "128x128")
		});
	}

	var weather = new Weather({
		date_unix: day,
		city: city,
		position: {
			lat: data.location.lat,
			lng: data.location.lon
		},
		forecast: forecast
	});

	return weather.save();
}


module.exports = {
	getWeather	
};