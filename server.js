// Dependencies
let express = require("express");
// Set Handlebars
let exphbs = require("express-handlebars");
// Import routes and give the server access to them.
let routes = require("./controllers/burgers_controller.js");

// Defining port
const PORT = process.env.PORT || 8080;

// Defining express app
let app = express();

// Serve static content for the app from the "public" directory
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
