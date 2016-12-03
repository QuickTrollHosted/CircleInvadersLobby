module.exports = function(app){

  var webClient = require("./webClient");
  var unityInstance = require("./unityInstance");
  var game = require("./game");

  var webClients = [];
  var unityInstances = [];

  var game = new game(app);

  /*
  * webClients
  */
  app.addWebClient = function(webClientSocket)
  {
    var key = webClientSocket.client.id;
    console.log('Add new webClient to webClients['+key+'] (Nb:'+Object.keys(webClients).length+')');
    webClients[key] = new webClient(app, webClientSocket);
    game.addWebClient(webClients[key]);
    app.broadcastMessageAllWebClients({connect: key});
  };

  app.removeWebClient = function(webClientSocket)
  {
    console.log('remove webClient from webClients['+webClientSocket.client.id+']');
    webClients[webClientSocket.client.id].unregister();
    delete webClients[webClientSocket.client.id];
    console.log('webClients counter: '+Object.keys(webClients).length);
  };

  app.receiveWebClientMessage = function(webClientSocket, message)
  {
    console.log('Receive message for webClient['+webClientSocket.client.id+'] (Nb:'+Object.keys(webClients).length+') : '+message);
    webClients[webClientSocket.client.id].receiveMessage(message);
  };

  app.broadcastMessageAllWebClients = function(message)
  {
    console.log('broadcastMessage to all webClients (Nb:'+Object.keys(webClients).length+') : ' + message);
    console.log(Object.keys(webClients));
    Object.keys(webClients).forEach(function(webClientKey){
      webClients[webClientKey].sendMessageM(message);
    });
  };
  /*
  * unityInstances
  */
  app.addUnityInstance = function(unityInstanceSocket)
  {
    //console.log(unityInstanceSocket);
    console.log('Add new unityInstance to unityInstanceId['+unityInstanceSocket.key+']');
    unityInstances[unityInstanceSocket.key] = new unityInstance(app, unityInstanceSocket);
    game.setUnityInstance(unityInstances[unityInstanceSocket.key]);
  };

  app.removeUnityInstance = function(unityInstanceSocket)
  {
    console.log('remove unityInstance from unityInstanceId['+unityInstanceSocket.key+']');
    unityInstances[unityInstanceSocket.key].unregister();
    delete unityInstances[unityInstanceSocket.key];
  };

  app.receiveUnityInstanceMessage = function(unityInstanceSocket, message)
  {
    console.log('Receive message from unityInstances['+unityInstanceSocket.key+'] : '+message);
    unityInstances[unityInstanceSocket.key].receiveMessage(message);
  };
  app.broadcastMessageInstanceMessage = function(message)
  {
    console.log('broadcastMessage to all unityInstances (Nb:'+Object.keys(webClients).length+') : '+message);
    for (var unityInstanceKey in unityInstances) {
      unityInstances[unityInstanceKey].sendMessageM(message);
    }
  };

};
