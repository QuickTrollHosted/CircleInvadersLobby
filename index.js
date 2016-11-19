var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.send('<h1>Lobby for CircleInvaders</h1>' +
  '<p>Welcome !</p>');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
