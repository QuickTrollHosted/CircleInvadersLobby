/**
 * Class unityInstance
 *
 */

var unityInstance = function(app, unityInstanceId) {
  console.log("Construct new unityInstance ("+unityInstanceId+")");
  this.app = app;
  this.unityInstanceId = unityInstanceId;
}

unityInstance.prototype.receiveMessage = function(message)
{
  console.log('Receive Message from unityInstance : '+message)
};


module.exports = unityInstance;
