/**
 * Class webClient
 *
 */

var webClient = function(app, webClientSocket) {
  console.log("Construct new webClient ("+webClientSocket.client.id+")");
  this.app = app;
  this.socket = webClientSocket;
}

webClient.prototype.receiveMessage = function(message)
{
  console.log('Receive Message from client : '+message);
};

webClient.prototype.sendMessage = function(message)
{
  console.log('Send Message to client : '+message);
  this.socket.emit('message', message);
};

webClient.prototype.unregister = function()
{
  console.log('Unregister webClient...');
  this.app.broadcastMessageAllWebClients('Byebye !');
};

module.exports = webClient;
