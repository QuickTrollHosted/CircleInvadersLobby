module.exports = function(app, io){

  io
  .of('/game')
  .on('connection', function(socket){
    console.log('a user connected');
    socket.on('chat message', function(msg){
      console.log('message: ' + msg);
    });
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
    socket.on('message', function(e){
      console.log('Receive message');
      console.log(e);
    });
  });

};
