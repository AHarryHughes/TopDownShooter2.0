var client = {};
client.socket = io.connect();

//Socket.io should set the gameSave as this if there is not any gameSave on the user and load one if there is
//And these should be set as method to the gameSave object

client.save = function(saveState){
    Client.socket.emit('save', saveState);
};

client.load = function(){
    Client.socket.emit('runLoad');
};

Client.socket.on('load',function(data){
    game.saveState = data;
});