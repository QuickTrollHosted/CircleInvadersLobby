module.exports = function(app){

  var webClients = [];

  app.addWebClient = function(webClientId) {
    console.log('Add new webClient to webClients[] (id:'+webClientId+')');
    webClients.push(webClientId);
  };

  app.removeWebClient = function(webClientId) {
    console.log('remove webClient from webClients[] (id:'+webClientId+')');
    webClients.splice(webClients.indexOf(webClientId), 1);
  };

  app.receiveWebClientMessage = function(webClientId) {
    console.log('Receive message for webClient (id:'+webClientId+')');
    webClients.splice(webClients.indexOf(webClientId), 1);
  };

};
