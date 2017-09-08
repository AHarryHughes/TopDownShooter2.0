var outsideText = {};

outsideText.prototype = {

    create: function(State){

        State.text.healthText = State.game.add.text(0, 0, "health", { fontSize: '32px', fill: '#fff' });
        State.text.healthText.fixedToCamera = true;
        State.text.levelText = State.game.add.text(0, 30, "level", { fontSize: '32px', fill: '#fff' });
        State.text.levelText.fixedToCamera = true;
        State.text.XPText = State.game.add.text(0, 60, "XP", { fontSize: '32px', fill: '#fff' });
        State.text.XPText.fixedToCamera = true;
        State.text.waveText = State.game.add.text(620, 0, "wave", { fontSize: '32px', fill: '#fff' });
        State.text.waveText.fixedToCamera = true;
        State.text.mercText = State.game.add.text(1200, 0, "merc", { fontSize: '32px', fill: '#fff' });
        State.text.mercText.fixedToCamera = true;
        State.text.bossText = State.game.add.text(620, 30, "boss", { fontSize: '32px', fill: '#fff' });
        State.text.bossText.fixedToCamera = true;
        //Set text for house
        //Add some color??

    },

    update: function(State){

        State.text.healthText.text = 'Player Health: ' + State.player.health + "/" + State.player.maxHealth;
        State.text.levelText.text = 'Player Level: ' + State.player.playerLevel;
        State.text.XPText.text = 'Player XP: ' + State.player.playerXP + "/" + Math.pow(2, (State.player.playerLevel+1));
        State.text.waveText.text = 'Wave: ' + State.wave;
        State.text.mercText.text = 'Mercs: ' + (State.mercs.length - State.mercs.countDead()) + "/" + State.mercs.length;
        State.text.bossText.text = 'Boss Health: ' + State.boss.health + "/" + State.boss.maxHealth;
        //Update text for house

    }

};