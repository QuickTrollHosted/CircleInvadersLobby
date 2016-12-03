module.exports = function(app){

  var webClient = require("./webClient");
  var unityInstance = require("./unityInstance");

  var webClients = [];
  var unityInstances = [];



  /*
  * webClients
  */
  app.addWebClient = function(webClientSocket)
  {
    console.log('Add new webClient to webClients['+webClientSocket.client.id+'] (Nb:'+Object.keys(webClients).length+')');
    webClients[webClientSocket.client.id] = new webClient(app, webClientSocket);
    console.log('webClients counter: '+Object.keys(webClients).length);
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
    console.log('broadcastMessage to all webClients (Nb:'+Object.keys(webClients).length+') : '+ JSON.stringify(message) );
    for (var webClientKey in webClients) {
      webClients[webClientKey].sendMessageM(message);
    }
  };
  /*
  * unityInstances
  */
  app.addUnityInstance = function(unityInstanceSocket)
  {
    //console.log(unityInstanceSocket);
    console.log('Add new unityInstance to unityInstanceId['+unityInstanceSocket.key+']');
    unityInstances[unityInstanceSocket.key] = new unityInstance(app, unityInstanceSocket);
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
  app.broadcastMessageAllWebClients = function(message)
  {
    console.log('broadcastMessage to all webClients (Nb:'+Object.keys(webClients).length+') : '+message);
    for (var unityInstanceKey in unityInstances) {
      unityInstances[unityInstanceKey].sendMessageM(message);
    }
  };

};
