const express = require("express");
const routes = require("./routes");
const info = require("../models/info");

const app = express();

const name = info.name;

/* GET info route */
app.get("/", function(req, res) {
    routes.get(name, req, res);
});

/* POST upsert each document in array */
app.post("/", function(req, res) {
    routes.upsert(name, req, res);
});

/* POST remove each document in array */
app.post("/delete", function(req, res) {
    routes.delete(name, req, res);
});

module.exports = app;
