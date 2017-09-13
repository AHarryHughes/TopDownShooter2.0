
LevelOutside = function () { };

LevelOutside.prototype = {

        create: function () {


            outsideMap.prototype.create(this);

            if(gameStatHandler.prototype.newGame){
                gameStatHandler.prototype.create();
                gameStatHandler.prototype.newGame = false;
            }
            House.prototype.create(this);
            Player.prototype.create(this);
            Merc.prototype.create(this);
            Tower.prototype.create(this);
            waveCreator(this);

            outsideEvents.prototype.openingTween(this);

            outsideMap.prototype.layForeground(this);

            keyConfig(this);

            if(!this.wave){
                this.wave = 1;
            }

            outsideText.prototype.create(this);
        },

        update: function () {


            outsideText.prototype.update(this);

            //sprite updates
            House.prototype.update(this);
            Player.prototype.update(this);
            Merc.prototype.update(this);
            Tower.prototype.update(this);
            waveUpdator(this);

            waveHandler(this);

        }

};


