
LevelOutside = function () { };

LevelOutside.prototype = {

        create: function () {


            outsideMap.prototype.create(this);

            if(gameStatHandler.prototype.newGame){
                gameStatHandler.prototype.create(this);
                gameStatHandler.prototype.newGame = false;
            }

            Player.prototype.create(this);
            Merc.prototype.create(this);
            Tower.prototype.create(this);
            Boss.prototype.create(this);
            Enemies.prototype.create(this);
            ShotgunEnemies.prototype.create(this);
            PistolEnemies.prototype.create(this);
            RifleEnemies.prototype.create(this);

            outsideEvents.prototype.openingTween(this);

            outsideMap.prototype.layForeground(this);

            keyConfig(this);

            this.wave = 1;

            outsideText.prototype.create(this);
        },

        update: function () {


            outsideText.prototype.update(this);

            //sprite updates
            Player.prototype.update(this);
            Merc.prototype.update(this);
            Tower.prototype.update(this);
            Boss.prototype.update(this);
            Enemies.prototype.update(this);
            ShotgunEnemies.prototype.update(this);
            PistolEnemies.prototype.update(this);
            RifleEnemies.prototype.update(this);

            waveHandler(this);

        }

};


