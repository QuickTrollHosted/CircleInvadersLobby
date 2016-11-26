module.exports = function(app, io){

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


  /*
  * Socket.io for the CircleInvaders instances
  */
  io
  .of('/')
  .on('connection', function(socket){

    //Register client in app
    app.addUnityInstance(socket);

    //On disconnect from the web client
    socket.on('disconnect', function(){
      app.removeUnityInstance(socket);
    });

    //On receive action from the web client
    socket.on('message', function(message){
      app.receiveUnityInstanceMessage(socket, message);
      socket.emit('message', 'ack');  //Optionnal ack
    });

    //Allright ! Send a welcome message
    socket.emit('message', 'welcome');

  });

};
