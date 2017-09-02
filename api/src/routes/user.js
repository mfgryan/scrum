const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const projects = require("../models/projects");

const app = express();

// middleware
app.use(bodyParser.json());

const name = projects.name;

/* POST create a new user*/
app.post("/create", function(req, res) {
    // validate and create new user in DB
});

app.post("/login", function(req, res) {
    // validate user and return oAuth token if pass
});

app.post("/logout", function(req, res) {
    // erase token and log out
});

module.exports = app;