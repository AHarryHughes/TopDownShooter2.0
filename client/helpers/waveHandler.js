function waveHandler(State) {

    

    State.waveEnemies = State.enemies.length + State.shotgunEnemies.length + State.pistolEnemies.length + State.rifleEnemies.length;

    if (State.waveEnemies == State.enemies.countDead() + State.shotgunEnemies.countDead() + State.pistolEnemies.countDead() + State.rifleEnemies.countDead() && ((State.boss && !State.boss.alive) || (!State.boss))) {

       State.wave += 1;
       State.player.playerXPStart = State.player.playerXP;
       State.player.currencyStart = State.player.currency;
        waveCreator(State);

    }
    else{

        //increment the spawning

    }

};

function waveCreator(State) {

    if(State.wave % 5 == 0 && State.wave > 0){
        
        
        gameStatHandler.prototype.save(State);
        State.game.state.start('levelHouse');

    }
    else if(State.wave % 5 == 4 && State.wave > 0){

        
        Enemies.prototype.create(State);
        ShotgunEnemies.prototype.create(State);
        PistolEnemies.prototype.create(State);
        RifleEnemies.prototype.create(State);
        Boss.prototype.create(State);


    }
    else{

        
        Enemies.prototype.create(State);
        ShotgunEnemies.prototype.create(State);
        PistolEnemies.prototype.create(State);
        RifleEnemies.prototype.create(State);

    }

};

function waveUpdator(State) {
    
    if(State.wave % 5 == 0 && State.wave > 0){
        Boss.prototype.update(State);
    }
    Enemies.prototype.update(State);
    ShotgunEnemies.prototype.update(State);
    PistolEnemies.prototype.update(State);
    RifleEnemies.prototype.update(State);
    
};