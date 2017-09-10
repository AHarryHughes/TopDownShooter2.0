LevelHouse = function (game) { };

LevelHouse.prototype = {
    
    create: function () {
        
        insideMap.prototype.create(this);

        Player.prototype.create(this);
        //Set NPC

        insideMap.prototype.layForeground(this);

        keyConfig(this);

        insideEvents.prototype.openingTween(this);

    },

    update: function () {
       Player.prototype.updateHouse(this);

        if (Phaser.Rectangle.containsPoint(this.map.exitRect, this.player.position)) {
            gameStatHandler.prototype.save(this);
            this.game.state.start('levelOutside');
        }
    }

};
