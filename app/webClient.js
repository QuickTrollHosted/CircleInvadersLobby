/**
 * Class webClient
 *
 */

// Constructor
var webClient = function(app, webClientId) {
  console.log("Construct new webClient ("+webClientId+")");
  this.app = app;
  this.webClientId = webClientId;
}
// class methods
webClient.prototype.receiveMessage = function(message)
{
  console.log('Receive Message from client : '+message)
};
// export the class
module.exports = webClient;
