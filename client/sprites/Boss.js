function Boss () {}

Boss.prototype = {

    create: function(State){

        let spawnPoint = State.map.prototype.chooseSpawn(State.map.spawnPoints);
        let boss = game.add.sprite( spawnPoint.x, spawnPoint.y, 'player');
        boss.MOVE_SPEED = 600;
        boss.tint = 0xff0000;
        boss.anchor.set(0.5);
        boss.scale.set(0.2);
        boss.animations.add('idle', [0, 1, 2, 3, 5, 6, 7, 8, 14, 19, 20], 20, true);
        boss.animations.add('move', [4, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], 18, true);
        boss.play('move');
        boss.maxHealth = 1000;
        boss.health = boss.maxHealth;
        game.physics.arcade.enable(boss);
        boss.body.setSize(200, 300, 100, 50);
        boss.body.collideWorldBounds = true;
        boss.shootTime = 0;
        boss.hitPoints = 10;
    
        State.boss = boss;

        State.gun = Flash.prototype;
        State.gun.create(State); 
    },

    update: function(State){

        behaviorsObj.prototype.bodyCollide(State, State.boss);
        behaviorsObj.prototype.bodyOverlap(State, State.boss, [State.player, State.mercs]);
        behaviorsObj.prototype.bulletCollide(State, State.boss.gun.bullets);
        behaviorsObj.prototype.bulletOverlap(State, State.boss.gun.bullets, [State.player, State.mercs]);
        behaviorsObj.prototype.shoot(State, State.boss, State.player, State.mercs);
        behaviorsObj.prototype.enemyMove(State, State.boss);
    }

};