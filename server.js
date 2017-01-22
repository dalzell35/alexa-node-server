///////////////////////////////////////////////////////////
// This page hosts the main express server and routing   //
// to each of the routing files, that contains endpoints //
///////////////////////////////////////////////////////////

var express = require('express');
var bodyParser = require("body-parser");
var https = require('https');
var app = express();
var config = require("./config/dev.json");
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Route script files and config info
var alexav1 = require("./routes/alexav1.js");

//Enabling of routes
app.use('/alexa/', alexav1);

//Load the webserver and config
var port = config.runPort;
https.createServer({
  key: fs.readFileSync(config.privkey),
  cert: fs.readFileSync(config.cert)
  }, app).listen(port);
