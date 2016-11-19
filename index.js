var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);



// http://expressjs.com/fr/guide/using-middleware.html
var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};
app.use(requestTime);

//Data storage
var sqlite3 = require('sqlite3').verbose();
//var db = new sqlite3.Database(':memory:');
var db = new sqlite3.Database('user_datas/circleInvaders.sqlite');
require('./app/db')(app, db);

//Application
require('./app')(app);

//Socket io protocol
require('./app/io')(app, io);

//Http protocol
require('./app/http')(app, http);
