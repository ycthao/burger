// Dependencies
let express = require("express");
// Set Handlebars
let exphbs = require("express-handlebars");
// Import routes and give the server access to them.
let routes = require("./controllers/burgers_controller.js");

// Defining port
let PORT = process.env.PORT || 8080;

// Defining express app
let app = express();

// Serve static content for the app from the "public" directory
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Using handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// calling app to use routes
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });  