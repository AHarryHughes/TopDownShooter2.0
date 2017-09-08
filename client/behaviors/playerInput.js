behaviorsObj.prototype.playerInput = function(State){
    
        //no sliding
        State.player.body.velocity.x = 0;
        State.player.body.velocity.y = 0;
    
        //checking key press for sprite movement
        if (State.keyboardCursors.left.isDown || State.playerInteraction.left.isDown) State.moveSpeed.x = -State.player.MOVE_SPEED;
        else if (State.keyboardCursors.right.isDown || State.playerInteraction.right.isDown) State.moveSpeed.x = State.player.MOVE_SPEED;
        else State.moveSpeed.x = 0;
        if (State.keyboardCursors.up.isDown || State.playerInteraction.up.isDown) State.moveSpeed.y = -State.player.MOVE_SPEED;
        else if (State.keyboardCursors.down.isDown || State.playerInteraction.down.isDown) State.moveSpeed.y = State.player.MOVE_SPEED;
        else State.moveSpeed.y = 0;
        if (Math.abs(State.moveSpeed.x) > 0 || Math.abs(State.moveSpeed.y) > 0) {
            State.player.body.velocity.x = State.moveSpeed.x;
            State.player.body.velocity.y = State.moveSpeed.y;
        }
    
        //changes player to face mouse
        State.player.rotation = State.game.physics.arcade.angleToPointer(State.player);
    
        //shoot on mouse click
        if (State.game.input.mousePointer.isDown) {
            State.player.gun.shoot(State, State.player, State.game.input.activePointer);
        }
    
        //update player sprite sheet
        if (Math.abs(State.player.body.velocity.x) > 0 || Math.abs(State.player.body.velocity.y) > 0) {
            State.player.play('move');
        } else {
            State.player.play('idle');
        }

        //add keys to switch the gun
        if (State.playerInteraction.pistol.isDown) {
            State.player.gun = State.player.pistol;
            State.player.bullets = State.player.pistolbullets;
        };
        if (State.playerInteraction.rifle.isDown) {
            State.player.gun = State.player.rifle;
            State.player.bullets = State.player.pistolbullets;
        };
        if (State.playerInteraction.shotgun.isDown) {
            State.player.gun = State.player.shotgun;
            State.player.bullets = State.player.shotgunbullets;
        };
        if (State.playerInteraction.flash.isDown) {
            State.player.gun = State.player.flash;
            State.player.bullets = State.player.flashbullets;
        };

        //Send to menu
        if (State.playerInteraction.menu.isDown) State.game.state.start('MainMenu');;
}