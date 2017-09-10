function waveHandler(State) {

    

    State.waveEnemies = State.enemies.length + State.shotgunEnemies.length;

    if (State.waveEnemies == State.enemies.countDead() + State.shotgunEnemies.countDead() && !State.boss.alive) {
        if(State.wave % 5 == 0 && State.wave > 0){

            State.wave += 1;
            State.player.playerXPStart = State.player.playerXP;
            gameStatHandler.prototype.save(State);
            State.game.state.start('levelHouse');

        }
        else{

            State.wave += 1;
            State.player.playerXPStart = State.player.playerXP;
            Boss.prototype.create(State);
            Enemies.prototype.create(State);
            ShotgunEnemies.prototype.create(State);

        }
        
    }

};