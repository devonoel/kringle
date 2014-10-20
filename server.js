// modules =================================================
var express = require('express');
var app     = express();
var mongoose= require('mongoose');
var morgan = require('morgan');                   // log to console
var bodyParser = require('body-parser'); 	        // pull information from HTML POST
var methodOverride = require('method-override');  // simulate DELETE and PUT

// configuration ===========================================
var port = process.env.PORT || 8080;

var db = require('./config/db');
mongoose.connect(db.url);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

app.listen(8080);
console.log("App listening on port 8080");
