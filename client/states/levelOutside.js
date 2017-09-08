
LevelOutside = function () { };

LevelOutside.prototype.create = function () {

    outsideMap.prototype.create(this);

    Player.prototype.create(this);
    Merc.prototype.create(this);
    Boss.prototype.create(this);
    Enemies.prototype.create(this);
    
    outsideEvents.prototype.openingTween(this)
    
    outsideMap.prototype.layForeground(this)

    keyConfig(this);

    this.wave = 1;

    outsideText.prototype.create(this);
};

LevelOutside.prototype.update = function () {

    outsideText.prototype.update(this);

    //sprite updates
    this.player.update(this);
    this.mercs.update(this);
    this.boss.update(this);
    this.enemies.update(this);
    this.shotgunEnemies.update(this);

    LevelOutside.prototype.waveHandler();

};

LevelOutside.prototype.waveHandler = function(){

    LevelOutside.waveEnemies = LevelOutside.enemies.length + LevelOutside.shotgunEnemies.length;

    if(LevelOutside.waveEnemies == LevelOutside.enemies.countDead() + LevelOutside.shotgunEnemies.countDead()){
        LevelOutside.wave += 1;
        LevelOutside.player.playerXPStart = LevelOutside.player.playerXP;
        //SET IF STATEMENT SO IF MOD 5 LEVELHOUSE STARTS AND PLAYER/TOWERS/MERCS/MONEY/WAVE/WEAPONS SAVED
        Boss (LevelOutside, LevelOutside.spawnPoints);
        Enemies(LevelOutside, LevelOutside.spawnPoints);
    }

};

