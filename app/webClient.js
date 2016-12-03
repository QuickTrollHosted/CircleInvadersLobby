/**
 * Class webClient
 *
 */

var webClient = function(app, webClientSocket) {
  console.log("Construct new webClient ("+webClientSocket.client.id+")");
  this.key = webClientSocket.client.id;
  this.app = app;
  this.socket = webClientSocket;
  this.game = null;
};

webClient.prototype.receiveMessage = function(message)
{
  console.log('Receive Message from client : '+ JSON.stringify(message) );
  if(this.game!==null){
    if(message.Right !== undefined){
      this.game.pressButtonWebClient(this.key, "right", message.Right);
    }
    if(message.Left !== undefined){
      this.game.pressButtonWebClient(this.key, "left", message.Left);
    }
    if(message.Fire !== undefined){
      this.game.pressButtonWebClient(this.key, "fire", message.Fire);
    }

  }
};

webClient.prototype.sendMessageM = function(message)
{
  console.log('Send Message to client : '+JSON.stringify(message));
  this.socket.emit('message', message);
};

webClient.prototype.unregister = function()
{
  console.log('Unregister webClient...');
  this.app.broadcastMessageAllWebClients({disconnect: this.key});
};

webClient.prototype.enterGame = function(game)
{
  console.log('Enter webClient in game...');
  this.game = game;
};

webClient.prototype.exitGame = function(game)
{
  console.log('Exit webClient from game...');
  this.game = null;
};

module.exports = webClient;
