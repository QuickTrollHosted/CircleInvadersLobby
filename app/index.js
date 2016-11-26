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
    console.log('Add new webClient to webClients['+webClientSocket.client.id+']');
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
    console.log('Receive message for webClient (id:'+webClientSocket.client.id+') : '+message);
    webClients[webClientSocket.client.id].receiveMessage(message);
  };

  app.broadcastMessageAllWebClients = function(message)
  {
    console.log('broadcastMessage to all webClients : '+message);
    console.log('webClients counter: '+Object.keys(webClients).length);
    for (var webClientKey in webClients) {
      webClients[webClientKey].sendMessage(message);
    };
  }
  /*
  * unityInstances
  */
  app.addUnityInstances = function(unityInstanceSocket)
  {
    console.log('Add new webClient to unityInstanceId['+unityInstanceSocket.client.id+']');
    addUnityInstances[unityInstanceSocket.client.id] = new unityInstance(app, unityInstanceSocket);
  };

  app.removeUnityInstances = function(unityInstanceSocket)
  {
    console.log('remove webClient from unityInstanceId['+unityInstanceSocket.client.id+']');
    unityInstances[unityInstanceSocket.client.id].unregister();
    delete unityInstances[unityInstanceSocket.client.id];
  };

  app.receiveUnityInstances = function(unityInstanceSocket, message)
  {
    console.log('Receive message for unityInstances['+unityInstanceSocket.client.id+'] : '+message);
    unityInstances[unityInstanceSocket.client.id].receiveMessage(message);
  };

};
