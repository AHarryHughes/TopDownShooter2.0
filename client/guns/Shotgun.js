var Shotgun = function() {};

Shotgun.prototype = {

    create: function(State, gunHolder){

        //create if statement based on gunholder for the gun bullet tint

        //bullet creation based on type
        //damage set on type
        this.bullets = Bullet.prototype.create(State, 0.5, null, 25, 25);

    },
    
    range: 1,

    shoot: function(State, shooter, target){
            let shotRatio = State.game.physics.arcade.distanceToXY(Shooter, target.x, target.y)/2;
            if (State.game.time.now > shooter.shootTime) {  
                let bullet = State.shooter.gun.bullets.getFirstExists(false);
                if (bullet) {
                    bullet.reset(shooter.x, shooter.y);
                    bullet.body.velocity.x = 10000;
                    shooter.shootTime = State.game.time.now + 700; //fire rate determinate
                    bullet.rotation = State.game.physics.arcade.moveToObject(bullet, 10000, target, 100); //might break for the player
                    bullet.lifespan = 100;
                }
                let bullet = State.shooter.gun.bullets.getFirstExists(false);
                if (bullet) {
                    bullet.reset(shooter.x, shooter.y);
                    bullet.body.velocity.x = 10000;
                    bullet.rotation = State.game.physics.arcade.moveToXY(bullet, (target.x+shotRatio), (target.y-shotRatio), 10000, 100); //might break for the player
                    bullet.lifespan = 100;
                }
                let bullet = State.shooter.gun.bullets.getFirstExists(false);
                if (bullet) {
                    bullet.reset(shooter.x, shooter.y);
                    bullet.body.velocity.x = 10000;
                    bullet.rotation = State.game.physics.arcade.moveToXY(bullet, (target.x-shotRatio), (target.y+shotRatio), 10000, 100); //might break for the player
                    bullet.lifespan = 100;
                }
            }
    }

};