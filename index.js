var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};
app.use(requestTime);

//Application
require('./app')(app);

//Socket io protocol
require('./app/io')(app, io);

//Http protocol
require('./app/http')(app, http);
