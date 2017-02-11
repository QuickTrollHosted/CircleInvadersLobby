module.exports = function(app, io, ws){

  /*
  * Socket.io for the web clients
  */
  io
  .of('/client')
  .on('connection', function(socket){

    //Register client in app
    app.addWebClient(socket);

    //On disconnect from the web client
    socket.on('disconnect', function(){
      app.removeWebClient(socket);
    });

    //On receive action from the web client
    socket.on('message', function(message){
      app.receiveWebClientMessage(socket, message);
      socket.emit('message', 'ack'); //Optionnal ack
    });


    //Allright ! Send a welcome message
    socket.emit('message', 'welcome');

  });
  console.log('Socketio listening on /client');


  //https://www.npmjs.com/package/nodejs-websocket
  /*
  * Socket.io for the CircleInvaders instances
  */
  var wsserver = ws.createServer(function (socket) {

    socket.send('welcome on lobby');

    //Register client in app
    app.addUnityInstance(socket);

    //On disconnect from the web client
    socket.on('close', function(){
      app.removeUnityInstance(socket);
    });

    //On receive action from the web client
    socket.on('text', function(message){
      app.receiveUnityInstanceMessage(socket, message);
      //socket.emit('message', 'ack');  //Optionnal ack
    });

    //Allright ! Send a welcome message


  });
  console.log('Websocket listening on *:3003...');
  wsserver.listen(3003);

};
