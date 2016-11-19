var express = require('express');
var httpreq = require('http');
var socketio = require('socket.io');

var app = express();
var http = httpreq.Server(app);
var io = socketio(http);

// http://expressjs.com/fr/guide/using-middleware.html
var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};
app.use(requestTime);

var sqlite3 = require('sqlite3').verbose();
//var db = new sqlite3.Database(':memory:');
var db = new sqlite3.Database('user_datas/circleInvaders.sqlite');
require('./app/db')(app, db);

//Application
require('./app')(app);

//Socket io protocol
require('./app/io')(app, io);

//Http protocol
require('./app/http')(app, http, express);
