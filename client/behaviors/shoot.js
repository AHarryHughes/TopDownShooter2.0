behaviorsObj.prototype.shoot = function(State, shooter, target, targets){

    let range = shooter.gun.prototype.range * 200;
    let done = false;

    if (target && shooter.alive && game.physics.arcade.distanceBetween(shooter, target) <= range) {
        shooter.gun.prototype.shoot();
    }

    else if(targets){
        
        for(var group in targets){

            group.forEachAlive(
                function(individual){
                    if (shooter.alive && game.physics.arcade.distanceBetween(shooter, individual) <= range) {
                        shooter.gun.prototype.shoot();
                    }
                }
            );
            if(done){break;};
        }
        
    }

}