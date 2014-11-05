// modules ====================================================
var express     = require('express');
var app         = express();
var fs          = require('fs');
var https       = require('https');
var mongoose    = require('mongoose');
var morgan      = require('morgan');
var bodyParser  = require('body-parser');

// configuration ==============================================
var db = require('./config/db');
mongoose.connect(db.url);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var stripe = require('stripe')(process.env.STRIPE_SECRET);

// routes =====================================================
require('./app/routes.js')(app);

// configure ssl certs ========================================
var options = {
  key: fs.readFileSync(process.env.SSL_KEY || 'test/certs/key.pem'),
  cert: fs.readFileSync(process.env.SSL_CERT || 'test/certs/cert.pem')
};

// start server ===============================================
var port = process.env.PORT || 5000;
https.createServer(options, app).listen(port);
console.log("Magic happens on port " + port);
