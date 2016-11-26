/**
 * Class unityInstance
 *
 */

var unityInstance = function(app, unityInstanceSocket) {
  console.log("Construct new unityInstance ("+unityInstanceSocket.client.id+")");
  this.app = app;
  this.socket = unityInstanceSocket;
}

unityInstance.prototype.receiveMessage = function(message)
{
  console.log('Receive Message from unityInstance : '+message)
};

unityInstance.prototype.sendMessageM = function(message)
{
  console.log('Send Message to unityInstance : '+message);
  this.socket.emit('message', message);
};

unityInstance.prototype.unregister = function()
{
  console.log('Unregister unityInstance...')
};


module.exports = unityInstance;
