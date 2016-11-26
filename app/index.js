module.exports = function(app){

  var webClient = require("./webClient");
  var unityInstance = require("./unityInstance");

  var webClients = [];
  var unityInstances = [];

  /*
  * webClients
  */
  app.addWebClient = function(webClientId) {
    console.log('Add new webClient to webClients['+webClientId+']');
    webClients[webClientId] = new webClient(app, webClientId);
  };

  app.removeWebClient = function(webClientId) {
    console.log('remove webClient from webClients['+webClientId+']');
    webClients[webClientId].unregister();
    delete webClients[webClientId];
  };

  app.receiveWebClientMessage = function(webClientId, message) {
    console.log('Receive message for webClient (id:'+webClientId+') : '+message);
    webClients[webClientId].receiveMessage(message);
  };

  /*
  * unityInstances
  */
  app.addUnityInstances = function(unityInstanceId) {
    console.log('Add new webClient to unityInstanceId['+unityInstanceId+']');
    unityInstances.push(unityInstanceId);
  };

  app.removeUnityInstances = function(unityInstanceId) {
    console.log('remove webClient from unityInstanceId['+unityInstanceId+']');
    unityInstances[unityInstanceId].unregister();
    delete unityInstances[unityInstanceId];
  };

  app.receiveUnityInstances = function(unityInstanceId, message) {
    console.log('Receive message for unityInstances['+unityInstanceId+'] : '+message);
    unityInstances[unityInstanceId].receiveMessage(message);
  };

};
