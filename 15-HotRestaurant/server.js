// dependencies
var fs = require("fs");
var express = require("express");
var path = require("path");

//set up Express app
var app = express();
var PORT = 3000

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [];

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});

// display reservation
app.get("/api/viewtables.html", function(req, res) {
    return res.json(reservation);
});

// Create New Reservation - takes in JSON input
app.post("/api/reservation", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var reservations = req.body;

    // Using a RegEx Pattern to remove spaces from newReservation
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // reservations.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    reservation.push(reservations);

    res.json(reservations);
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});