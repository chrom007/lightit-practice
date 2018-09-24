const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Day = new Schema({
	date: String,
	date_unix: Number,
	temp: Number,
	wind: Number,
	status: String,
	icon: String
}, {_id: false});

var Position = new Schema({
	lat: Number,
	lng: Number
}, {_id: false});

var Weather = new Schema({
	date: String,
	date_unix: Number,
	city: String,
	position: Position,
	forecast: [ Day ]
});

module.exports = mongoose.model("weather", Weather);