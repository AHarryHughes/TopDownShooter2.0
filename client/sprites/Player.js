var Player = function() {};

Player.prototype = {

    create: function(State){

        let player = State.game.add.sprite( 100, 240, 'player');
        player.MOVE_SPEED = 500;
        player.anchor.set(0.5);
        player.scale.set(0.2);
        player.animations.add('idle', [0, 1, 2, 3, 5, 6, 7, 8, 14, 19, 20], 20, true);
        player.animations.add('move', [4, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], 18, true);
        player.play('move');
        player.maxHealth = 100;
        player.health = player.maxHealth;
        State.game.physics.arcade.enable(player);
        player.body.setSize(100, 150, 100, 50);
        State.game.camera.follow(player);
        player.body.collideWorldBounds = true;
        player.playerLevel = 1;
        player.playerXP = 1;
        player.playerXPStart = player.playerXP;
        player.shootTime = 0;
    
        State.player = player;
        
        //make dot notation for each gun type
        State.player.pistol = Pistol.prototype;
        State.player.pistol.create(State);
        State.player.rifle = Rifle.prototype;
        State.player.rifle.create(State);
        State.player.shotgun = Shotgun.prototype;
        State.player.shotgun.create(State);
        State.player.flash = Flash.prototype;
        State.player.flash.create(State);

        State.player.gun = State.player.rifle;

    },

    update: function(State){

        behaviorsObj.prototype.bodyCollide(State, State.player);
        behaviorsObj.prototype.bulletCollide(State, State.player.gun.bullets);
        behaviorsObj.prototype.bulletOverlap(State, State.player.gun.bullets, [State.enemies, State.shotgunEnemies, State.boss]);
        behaviorsObj.prototype.playerInput(State);
        behaviorsObj.prototype.updateStats(State);

    }

};




