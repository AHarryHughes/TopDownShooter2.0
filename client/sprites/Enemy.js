var Enemies = function(){};

Enemies.prototype = {

    create: function(State){

        let enemiesTotal = State.player.playerLevel * 15;
        let enemies = State.game.add.group();
        enemies.enableBody = true;
        enemies.physicsBodyType = Phaser.Physics.ARCADE;
        for (let i = 0; i < enemiesTotal; i++) {
            let spawn = this.chooseSpawn(spawnPoints);
            let randomX = Math.random() * 300;
            let randomY = Math.random() * 300;
            let enemy = enemies.create(spawn.x + randomX, spawn.y + randomY, 'flashlight-enemy');
            enemy.animations.add('melee', [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], 35, true);
            enemy.animations.add('move', [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], 46, true);
            enemy.animations.add('idle', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 14, true);
            enemy.play('idle');
            enemy.anchor.setTo(0.5, 0.5);
            game.physics.enable(enemy, Phaser.Physics.ARCADE);
            enemy.body.immovable = true;
            enemy.body.collideWorldBounds = true;
            enemy.body.allowGravity = true;
            enemy.scale.setTo(0.3);
            enemy.body.velocity.x = 0;
            enemy.body.velocity.y = 0;
            enemy.health = 100;
            enemy.hitPoints = 10;
        }
    
        State.enemies = enemies;

    },

    update: function(State){

        State.enemies.forEachAlive(function(enemy){

            behaviorsObj.prototype.bodyCollide(State, enemy);
            behaviorsObj.prototype.bodyOverlap(State, enemy, [State.player, State.merc]);
            behaviorsObj.prototype.enemyMove(State, State.enemy);

        });

    }

}