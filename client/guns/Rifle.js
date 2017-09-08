var Rifle = function() {};

Rifle.prototype = {

    create: function(State, gunHolder){

        //create if statement based on gunholder for the gun bullet tint

        //bullet creation based on type
        //damage set on type
        this.bullets = Bullet.prototype.create(State, 0.4, null, 20, 10);

    },
    
    range: 4,

    shoot: function(State, shooter, target){
            if (State.game.time.now > shooter.shootTime) {  
                let bullet = State.shooter.gun.bullets.getFirstExists(false);
                if (bullet) {
                    bullet.reset(shooter.x, (shooter.y + State.game.rnd.between(-10, 10)));
                    bullet.body.velocity.x = 10000;
                    shooter.shootTime = State.game.time.now + 100; //fire rate determinate
                    bullet.rotation = State.game.physics.arcade.moveToObject(bullet, 10000, target, 100); //might break for the player
                    bullet.lifespan = 1000;
                }
            }
    }

};