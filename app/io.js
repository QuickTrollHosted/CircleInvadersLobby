module.exports = function(app, io){

  /*
  * Socket.io for the web clients
  */
  io
  .of('/client')
  .on('connection', function(socket){

    var webClientId = socket.client.id;

    //Register client in app
    app.addWebClient(webClientId);

    //On disconnect from the web client
    socket.on('disconnect', function(){
      app.removeWebClient(webClientId);
    });

    //On receive action from the web client
    socket.on('message', function(message){
      app.receiveWebClientMessage(webClientId, message);
      socket.emit('message', 'ack'); //Optionnal ack
    });

    //Allright ! Send a welcome message
    socket.emit('message', 'welcome');

  });


  /*
  * Socket.io for the CircleInvaders instances
  */
  /*
  io
  .of('/unity')
  .on('connection', function(socket){

    var UnityInstanceId = socket.client.id;

    //Register client in app
    app.addUnityInstance(UnityInstanceId);

    //On disconnect from the web client
    socket.on('disconnect', function(){
      app.removeUnityInstance(UnityInstanceId);
    });

    //On receive action from the web client
    socket.on('message', function(message){
      app.receiveUnityInstanceMessage(UnityInstanceId, message);
      socket.emit('message', 'ack');  //Optionnal ack
    });

    //Allright ! Send a welcome message
    socket.emit('message', 'welcome');

  });
  */

};
