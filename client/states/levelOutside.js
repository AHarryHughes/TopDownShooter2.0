
LevelOutside = function () { };

LevelOutside.prototype = {

        create: function () {


            outsideMap.prototype.create(this);

            Player.prototype.create(this);
            Merc.prototype.create(this);
            Boss.prototype.create(this);
            Enemies.prototype.create(this);
            ShotgunEnemies.prototype.create(this);

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
            Boss.prototype.update(this);
            Enemies.prototype.update(this);
            ShotgunEnemies.prototype.update(this);

            this.waveHandler();

        },

        waveHandler: function() {

            this.waveEnemies = this.enemies.length + this.shotgunEnemies.length;

            if (this.waveEnemies == this.enemies.countDead() + this.shotgunEnemies.countDead()) {
                this.wave += 1;
                this.player.playerXPStart = this.player.playerXP;
                //SET IF STATEMENT SO IF MOD 5 LEVELHOUSE STARTS AND PLAYER/TOWERS/MERCS/MONEY/WAVE/WEAPONS SAVED
                Boss.prototype.create(this);
                Enemies.prototype.create(this);
                ShotgunEnemies.prototype.create(this);
            }
        }

};


