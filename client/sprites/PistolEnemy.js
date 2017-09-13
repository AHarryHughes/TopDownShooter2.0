var PistolEnemies = function(){};

PistolEnemies.prototype = {

    create: function(State){

        let pistolEnemiesTotal = Math.floor(State.wave * 5);
        let pistolEnemies = State.game.add.group();
        pistolEnemies.enableBody = true;
        pistolEnemies.physicsBodyType = Phaser.Physics.ARCADE;
        for (let i = 0; i < pistolEnemiesTotal; i++) {
            let spawn = spawnHandler(State.map.spawnPoints);
            let randomX = Math.random() * 100;
            let randomY = Math.random() * 100;
            let pistolEnemy = pistolEnemies.create(spawn.x + randomX, spawn.y + randomY, 'shotgun-enemy');
            pistolEnemy.animations.add('shoot', [7, 15, 23], 7, true);
            pistolEnemy.animations.add('move', [0, 4, 5, 6, 12, 13, 14, 19, 20, 21, 22], 0, true);
            pistolEnemy.animations.add('idle', [0, 1, 2, 3, 8, 9, 10, 11, 16, 17, 18], 0, true);
            pistolEnemy.play('idle');
            pistolEnemy.anchor.setTo(0.5, 0.5);
            State.game.physics.enable(pistolEnemy, Phaser.Physics.ARCADE);
            pistolEnemy.body.immovable = false;
            pistolEnemy.body.collideWorldBounds = true;
            pistolEnemy.body.allowGravity = true;
            pistolEnemy.scale.setTo(0.3);
            pistolEnemy.body.velocity.x = 0;
            pistolEnemy.body.velocity.y = 0;
            pistolEnemy.health = 100;
            pistolEnemy.shootTime = 0;
            pistolEnemy.hitPoints = 3;
            pistolEnemy.gun = Pistol.prototype;
            pistolEnemy.bullets = pistolEnemy.gun.create(State);
            pistolEnemy.MOVE_SPEED = State.player.MOVE_SPEED * .9;
        }
    
        State.pistolEnemies = pistolEnemies;

    },

    update: function(State){

        behaviorsObj.prototype.selfCollide(State, State.pistolEnemies);

        State.pistolEnemies.forEachAlive(function(pistolEnemy){

            behaviorsObj.prototype.bodyCollide(State, pistolEnemy);
            behaviorsObj.prototype.bodyOverlap(State, pistolEnemy, [State.player, State.mercs]);
            behaviorsObj.prototype.bulletCollide(State, pistolEnemy.bullets);
            behaviorsObj.prototype.bulletOverlap(State, pistolEnemy.bullets, [State.player, State.mercs]);
            behaviorsObj.prototype.shoot(State, pistolEnemy, State.player, [State.mercs]);
            behaviorsObj.prototype.mercMove(State, pistolEnemy);

        });        

    }

}