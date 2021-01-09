// Dependencies
let express = require("express");
let exphbs = require("express-handlebars");
let routes = require("./controllers/burgers_controller.js");

// Defining port
const PORT = process.env.PORT || 8080;

// Defining express app
let app = express();

// Serve static content for the app from the "public" directory
app.use(express.static("public"));