var ShotgunEnemies = function(){};

ShotgunEnemies.prototype = {

    create: function(State){

        let shotgunEnemiesTotal = State.player.playerLevel * 10;
        let shotgunEnemies = State.game.add.group();
        shotgunEnemies.enableBody = true;
        shotgunEnemies.physicsBodyType = Phaser.Physics.ARCADE;
        for (let i = 0; i < shotgunEnemiesTotal; i++) {
            let spawn = spawnHandler(State.map.spawnPoints);
            let randomX = Math.random() * 300;
            let randomY = Math.random() * 300;
            let shotgunEnemy = shotgunEnemies.create(spawn.x + randomX, spawn.y + randomY, 'shotgun-enemy');
            shotgunEnemy.animations.add('shoot', [7, 15, 23], 7, true);
            shotgunEnemy.animations.add('move', [0, 4, 5, 6, 12, 13, 14, 19, 20, 21, 22], 0, true);
            shotgunEnemy.animations.add('idle', [0, 1, 2, 3, 8, 9, 10, 11, 16, 17, 18], 0, true);
            shotgunEnemy.play('idle');
            shotgunEnemy.anchor.setTo(0.5, 0.5);
            State.game.physics.enable(shotgunEnemy, Phaser.Physics.ARCADE);
            shotgunEnemy.body.immovable = false;
            shotgunEnemy.body.collideWorldBounds = true;
            shotgunEnemy.body.allowGravity = true;
            shotgunEnemy.scale.setTo(0.3);
            shotgunEnemy.body.velocity.x = 0;
            shotgunEnemy.body.velocity.y = 0;
            shotgunEnemy.health = 100;
            shotgunEnemy.shootTime = 0;
            shotgunEnemy.hitPoints = 10;
            shotgunEnemy.gun = Shotgun.prototype;
            shotgunEnemy.bullets = shotgunEnemy.gun.create(State);
        }
    
        State.shotgunEnemies = shotgunEnemies;

    },

    update: function(State){

        State.shotgunEnemies.forEachAlive(function(shotgunEnemy){

            behaviorsObj.prototype.bodyCollide(State, shotgunEnemy);
            behaviorsObj.prototype.selfCollide(State, shotgunEnemy);
            behaviorsObj.prototype.bodyOverlap(State, shotgunEnemy, [State.player, State.mercs]);
            behaviorsObj.prototype.bulletCollide(State, shotgunEnemy.bullets);
            behaviorsObj.prototype.bulletOverlap(State, shotgunEnemy.bullets, [State.player, State.mercs]);
            behaviorsObj.prototype.shoot(State, shotgunEnemy, State.player, [State.mercs]);
            behaviorsObj.prototype.mercMove(State, shotgunEnemy);

        });        

    }

}