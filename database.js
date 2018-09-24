const mongoose = require("mongoose");
const config = require("./config");

const connect = function() {
	return mongoose.connect(config.mongo.host, config.mongo.options)
		.then(() => console.log("MongoDB connected!"))
		.catch((e) => console.log("MongoDB connection error..."));
};

module.exports = connect;