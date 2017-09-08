behaviorsObj.prototype.bodyOverlap = function(State, body, targets){
    
        for(target in targets){
            State.game.physics.arcade.overlap(body, target, function(body, target){
                game.camera.shake(0.005, 500);
                target.damage(body.hitPoints);
            });
        }
        
}