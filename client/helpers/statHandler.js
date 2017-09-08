function updateStats(State){
    
        updateXP(State);
        updateHealth(State);
        updateLvl(State);
    
    }
    
    
    function updateXP(State) {
        let XPBoost = (State.enemies.countDead() * (2 + State.wave) ) + (State.shotgunEnemies.countDead() * (4 + State.wave));
        if(!State.boss.alive){XPBoost += (20 + State.wave);}
        State.player.playerXP = State.player.playerXPStart + XPBoost;
    }
    
    function updateHealth(State){
        if (State.player.health <= 0) {
            game.state.start('levelHouse');
        }
        if (State.player.health <= 30) {
            State.player.tint = Math.random() * 0xffffff;
        }
    };
    
    function updateLvl(State){
        let currentLvl = State.player.playerLevel;
        State.player.playerLevel = Math.floor(Math.log2(State.player.playerXP));
        if(currentLvl < State.player.playerLevel){
            State.player.health = State.player.maxHealth;
            updateUpgrades(State);
        }
    };
    
    function updateUpgrades(State) {
        if(State.player.playerLevel > 1) {
            State.player.MOVE_SPEED = 500 + State.player.playerLevel * 5;
            State.mercs.MOVE_SPEED = State.player.MOVE_SPEED;
            State.player.maxHealth = 100 + (10 * State.player.playerLevel);
        }
    }