module.exports = function(app, http, express){

  app.get('/', function(req, res){
    console.log('/ requested at '+req.requestTime);
    res.send('<h1>Lobby for CircleInvaders</h1>' +
    '<p>Welcome !</p>');
  });

  app.get('/help', function(req, res){
    console.log('/help requested at '+req.requestTime);
    res.sendFile(__dirname + '/templates/help.html');
  });

  http.listen(3000, function(){
    console.log('listening on *:3000');
  });

  //Serve game app
  app.use('/game', express.static('game/dist'));

};
