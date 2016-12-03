/**
 * Class game
 *
 * Associated by a unity instance and many webclients
 */

var game = function(app) {
  console.log("Construct new game");
  this.app = app;
  this.unityInstance = null;
  this.webClients = {};
  this.createAt = Date.now();
};

game.prototype.detroy = function()
{
  //TODO store game score from unityInstance
  console.log('Destroy this game');
};

game.prototype.addWebClient = function(webClient)
{
  console.log('Attach a webclient to this game');
  this.webClients[webClient.key] = webClient;
  webClient.enterGame(this);

  if(this.unityInstance!==null){
    this.sendWebClientsListToUnityInstance();
  }else{
    console.log('No webClients list to send because no unityInstance in this game');
  }

};

game.prototype.removeWebClient = function(webClient)
{
  console.log('Remove a webclient to this game');
  delete this.webClients[webClient.key];
  webClient.exitGame(this);
};

game.prototype.setUnityInstance = function(unityInstance)
{
  console.log('Set the unityInstance to this game');
  this.unityInstance = unityInstance;

  this.sendWebClientsListToUnityInstance();

};

game.prototype.removeUnityInstance = function(unityInstance)
{
  console.log('Remove the unityInstance to this game');
  this.unityInstance = null;
};

game.prototype.startGame = function()
{
  console.log('Request a start game to unityInstance');
};

game.prototype.stopGame = function()
{
  //TODO process to
  console.log('Request a stop game to unityInstance');
};

game.prototype.pauseGame = function(status)
{
  if(status){
    console.log('Request a pause game to unityInstance');
  }else{
    console.log('Request a resume game to unityInstance');

  }
};


game.prototype.sendWebClientsListToUnityInstance = function()
{
  var message = {webClients: [] };
  Object.keys(this.webClients).forEach(function(webClientKey){
    message.webClients.push({key: webClientKey});
  });
  console.log('Send webClients list to unityInstance' + JSON.stringify(message));
  this.unityInstance.sendMessageT(JSON.stringify(message));
};

game.prototype.pressButtonWebClient = function(webClientKey, key, status) {
  if(this.unityInstance!==null){
    var message = {
      pressButton:
      {
        "webClientKey": webClientKey,
        "button": key,
        "status": status
      }
    };
    this.unityInstance.sendMessageT(JSON.stringify(message));
  }
};





module.exports = game;
