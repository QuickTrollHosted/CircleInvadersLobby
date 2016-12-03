/**
 * Class game
 *
 * Associated by a unity instance and many webclients
 */

var game = function(app) {
  console.log("Construct new game");
  this.app = app;
  this.unityInstance = null;
  this.webClients = [];
  this.createAt = Date.now();
};

webClient.prototype.detroy = function()
{
  //TODO store game score from unityInstance
  console.log('Destroy this game');
};

webClient.prototype.addWebClient = function(webClient)
{
  console.log('Attach a webclient to this game');
};

webClient.prototype.setUnityInstance = function(unityInstance)
{
  console.log('Set the unityInstance to this');
};

webClient.prototype.startGame = function()
{
  console.log('Request a start game to unityInstance');
};

webClient.prototype.stopGame = function()
{
  //TODO process to
  console.log('Request a stop game to unityInstance');
};

webClient.prototype.pauseGame = function(status)
{
  if(status){
    console.log('Request a pause game to unityInstance');
  }else{
    console.log('Request a resume game to unityInstance');

  }
};






module.exports = game;
