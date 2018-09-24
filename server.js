const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config.js");
const database = require("./database");
const ApiController = require("./controllers/api_controller");

const db = database();
const app = express();

app.use(express.static("./frontend/dist"));
app.use(bodyParser.json());
app.use(cors());

app.post("/weather", ApiController.getWeather);


app.listen(config.web_port, () => console.log(`Server is running on ${config.web_port}`));