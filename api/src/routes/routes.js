/* eslint-disable no-console */
const models = require("../models/models.js");
const express = require("express");

const app = express();

const index = require("./index");
const projects = require("./projects");
const sprints = require("./sprints");
const info = require("./info");
const items = require("./items");
const lanes = require("./lanes");
const planning = require("./planning");
const user = require("./user");

app.use("/", index);
app.use("/api/projects", projects);
app.use("/api/sprints", sprints);
app.use("/api/info", info);
app.use("/api/items", items);
app.use("/api/lanes", lanes);
app.use("/api/planning", planning);
app.use("/api/user", user);

const log = function(req) {
    console.log(req.method, req.hostname, req.baseUrl + req.path);
};

const parseUser = function(req){
    // AUTH header format:
    // Basic id64base:password64base
    let field = req.get("Authorization").split(" ")[1];
    let decodedField = Buffer.from(field, 'base64').toString("ascii").split(":");     
    return {
        email: decodedField[0],
        password: decodedField[1]
    }
};

module.exports.get = function(name, req, res) {
    log(req);
    models.read(parseUser(req), name, function(docs) {
        res.json(docs);
    });
};

module.exports.upsert = function(name, req, res) {
    log(req);
    models.write(
        parseUser(req),
        name,
        req.body,
        function() {
            console.log("success");
            res.json({ success: "200" });
        },
        function(error) {
            console.error(error);
            res.status(500).send(error);
        }
    );
};

module.exports.delete = function(name, req, res) {
    log(req);
    models.remove(
        parseUser(req),
        name,
        req.body,
        function() {
            console.log("success");
            res.json({ success: "200" });
        },
        function(error) {
            console.error(error);
            res.status(500).send(error);
        }
    );
};

module.exports = app;
