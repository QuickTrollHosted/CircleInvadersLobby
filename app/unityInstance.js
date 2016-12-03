/**
 * Class unityInstance
 *
 */

var unityInstance = function(app, unityInstanceSocket) {
  console.log("Construct new unityInstance ("+unityInstanceSocket.key+")");
  this.app = app;
  this.key = unityInstanceSocket.key;
  this.socket = unityInstanceSocket;
  this.name = '';       //Name given by unity exe
  this.maxPlayers = 0;  //Max player allowed un unity exe, 0=nobody
};

unityInstance.prototype.receiveMessage = function(message)
{
  console.log('Receive Message from unityInstance : '+message);


  if(message.name !== undefined)
  {
    this.name = message.name;
  }

  if(message.roomSize !== undefined)
  {
    this.maxPlayers = message.roomSize;
  }


};

unityInstance.prototype.sendMessageM = function(message)
{
  console.log('Send Message to unityInstance : '+message);
  this.socket.emit('message', message);
};

unityInstance.prototype.sendMessageT = function(message)
{
  console.log('Send MessageT to unityInstance : '+message);
  this.socket.send(message);
};

unityInstance.prototype.unregister = function()
{
  console.log('Unregister unityInstance...');

  //TODO Manage the lost connection from unityInstance


  //TODO If this instance is in game, abord scores and close the game

  //TODO If this instance is not in game, juste unregister


};


module.exports = unityInstance;
