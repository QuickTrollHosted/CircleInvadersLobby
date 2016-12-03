/**
 * Class unityInstance
 *
 */

var unityInstance = function(app, unityInstanceSocket) {
  console.log("Construct new unityInstance ("+unityInstanceSocket.key+")");
  this.app = app;
  this.socket = unityInstanceSocket;
};

unityInstance.prototype.receiveMessage = function(message)
{
  console.log('Receive Message from unityInstance : '+message);

  //TODO Manage messages receveived from unityInstance
  //-----------

  //TODO Receive scores
  //Send to game the new scores

  //TODO Receive Impacts
  //Send to game the impacts

  //TODO event dead
  //Send to game the deads

  //TODO event ****




};

unityInstance.prototype.sendMessageM = function(message)
{
  console.log('Send Message to unityInstance : '+message);
  this.socket.emit('message', message);
};

unityInstance.prototype.unregister = function()
{
  console.log('Unregister unityInstance...');

  //TODO Manage the lost connection from unityInstance


  //TODO If this instance is in game, abord scores and close the game

  //TODO If this instance is not in game, juste unregister


};


module.exports = unityInstance;
