/**
 * Class game
 *
 */

var game = function(app) {
  console.log("Construct new game");
  this.app = app;
  this.unityInstance = null;
  this.webClients = [];
  this.createAt = Date.now();
}

webClient.prototype.detroy = function()
{
  console.log('Destroy this game');
};

module.exports = game;
