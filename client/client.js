var client = {};
client.socket = io.connect();

//Socket.io should set the gameSave as this if there is not any gameSave on the user and load one if there is
//And these should be set as method to the gameSave object

client.save = function(saveState){
    console.log("at save client");
    client.socket.emit('save', saveState);
};

client.load = function(){
    console.log("at runload client");
    client.socket.emit('runLoad');
};

client.socket.on('load',function(data){
    console.log("load client", data);
    game.saveState = data.game;
});

client.socket.on('test',function(data){
    console.log(data);
});