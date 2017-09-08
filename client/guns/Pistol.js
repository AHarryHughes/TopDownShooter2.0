var Pistol = function() {};

Pistol.prototype = {

    create: function(State, gunHolder){

        //create if statement based on gunholder for the gun bullet tint

        //bullet creation based on type
        //damage set on type
        this.bullets = Bullet.prototype.create(State, 0.5, null, 50, 10);

    },
    
    range: 3,

    shoot: function(State, shooter, target){
            if (State.game.time.now > shooter.shootTime) {  
                let bullet = State.shooter.gun.bullets.getFirstExists(false);
                if (bullet) {
                    bullet.reset(shooter.x, shooter.y);
                    bullet.body.velocity.x = 10000;
                    shooter.shootTime = State.game.time.now + 500; //fire rate determinate
                    bullet.rotation = State.game.physics.arcade.moveToObject(bullet, 10000, target, 100); //might break for the player
                    bullet.lifespan = 1000;
                }
            }
    }

};