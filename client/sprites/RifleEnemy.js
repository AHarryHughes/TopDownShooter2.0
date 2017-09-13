var RifleEnemies = function(){};

RifleEnemies.prototype = {

    create: function(State){

        let rifleEnemiesTotal = Math.floor(State.wave * .2);
        let rifleEnemies = State.game.add.group();
        rifleEnemies.enableBody = true;
        rifleEnemies.physicsBodyType = Phaser.Physics.ARCADE;
        for (let i = 0; i < rifleEnemiesTotal; i++) {
            let spawn = spawnHandler(State.map.spawnPoints);
            let randomX = Math.random() * 100;
            let randomY = Math.random() * 100;
            let rifleEnemy = rifleEnemies.create(spawn.x + randomX, spawn.y + randomY, 'shotgun-enemy');
            rifleEnemy.animations.add('shoot', [7, 15, 23], 7, true);
            rifleEnemy.animations.add('move', [0, 4, 5, 6, 12, 13, 14, 19, 20, 21, 22], 0, true);
            rifleEnemy.animations.add('idle', [0, 1, 2, 3, 8, 9, 10, 11, 16, 17, 18], 0, true);
            rifleEnemy.play('idle');
            rifleEnemy.anchor.setTo(0.5, 0.5);
            State.game.physics.enable(rifleEnemy, Phaser.Physics.ARCADE);
            rifleEnemy.body.immovable = false;
            rifleEnemy.body.collideWorldBounds = true;
            rifleEnemy.body.allowGravity = true;
            rifleEnemy.scale.setTo(0.3);
            rifleEnemy.body.velocity.x = 0;
            rifleEnemy.body.velocity.y = 0;
            rifleEnemy.health = 100;
            rifleEnemy.shootTime = 0;
            rifleEnemy.hitPoints = 3;
            rifleEnemy.gun = Shotgun.prototype;
            rifleEnemy.bullets = rifleEnemy.gun.create(State);
            rifleEnemy.MOVE_SPEED = State.player.MOVE_SPEED * .9;
        }
    
        State.rifleEnemies = rifleEnemies;

    },

    update: function(State){

        behaviorsObj.prototype.selfCollide(State, State.rifleEnemies);

        State.rifleEnemies.forEachAlive(function(rifleEnemy){

            behaviorsObj.prototype.bodyCollide(State, rifleEnemy);
            behaviorsObj.prototype.bodyOverlap(State, rifleEnemy, [State.player, State.mercs]);
            behaviorsObj.prototype.bulletCollide(State, rifleEnemy.bullets);
            behaviorsObj.prototype.bulletOverlap(State, rifleEnemy.bullets, [State.player, State.mercs]);
            behaviorsObj.prototype.shoot(State, rifleEnemy, State.player, [State.mercs]);
            behaviorsObj.prototype.mercMove(State, rifleEnemy);

        });        

    }

}