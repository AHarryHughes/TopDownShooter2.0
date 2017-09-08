var Flash = function() {};

Flash.prototype = {

    create: function(State, gunHolder){

        //create if statement based on gunholder for the gun bullet tint

        //bullet creation based on type
        //damage set on type
        this.bullets = Bullet.prototype.create(State, 0.4, null, 10, 50);

    },

    range: 1,

    shoot: function(State, shooter, target){
            if (State.game.time.now > shooter.shootTime) {
                shooter.bullets.setAll('scaleSpeed', 100);
                let bullet = State.shooter.gun.bullets.getFirstExists(false);
                if (bullet) {
                    bullet.reset(shooter.x, shooter.y);
                    bullet.body.velocity.x = 10000;
                    shooter.shootTime = State.game.time.now + 1000; //fire rate determinate
                    bullet.rotation = State.game.physics.arcade.moveToObject(bullet, 10000, target, 100); //might break for the player
                    bullet.lifespan = 75;
                }
            }
    }

};