const express = require('express'), info = require('../models/info');
    bodyParser = require('body-parser');
const app = express();

// middleware
app.use(bodyParser.json());

/* GET info route */
app.get('/', function(req, res){
    info.read(function(docs){
        res.json(docs);
    });
});

/* POST upsert each document in array */
app.post('/', function(req, res){
    info.write(req.body, function(){
        console.log("success");  
        res.json({"success": "200"});
    }, function(error){
        console.log(error);
        res.status(500).send(error);
    });
});

/* POST remove each document in array */
app.post('/delete', function(req, res){
    info.remove(req.body, function(){
        console.log("success");
        res.json({"success": "200"});
    }, function(error){
        console.log(error);
        res.status(500).send(error);
    });
});

module.exports = app;
