var gameStatHandler = function() {};

gameStatHandler.prototype = {

    newGame: true,

    create: function(State) {

        State.XP = 1;
        State.Level = 1;
        State.mercsAmount = 1;
        State.value = 1;
        State.towersToAllocate = [];

        //just for testing
        for(let i = 0; i<74; i++){
            State.towersToAllocate.push(i%4);
        }

    },

    save: function(State) {

        State.XP = State.player.playerXP;
        State.Level = State.player.playerLevel;
        State.mercsAmount = State.mercs.countLiving();
        State.value = State.player.currency;
        //add towers

    }

}