behaviorsObj.prototype.bulletOverlap = function(State, bullet, targets){
    
        for(target in targets){
            State.game.physics.arcade.overlap(bullet, target, function(bullet, target){
                target.damage(bullet.hitPoints);
                bullet.kill();
            });
        }
        
}