var NPC = function() {};

NPC.prototype = {

    create: function(State){

        let npc = game.add.sprite( 150, 50, 'flashlight-enemy');
        npc.tint = 0xffff00;
        npc.anchor.set(0.5);
        npc.scale.set(0.2);
        npc.animations.add('idle', [0, 1, 2, 3, 5, 6, 7, 8, 14, 19, 20], 20, true);
        npc.play('idle');
        game.physics.arcade.enable(npc);
        npc.body.setSize(200, 300, 100, 50);
        npc.body.collideWorldBounds = true;
    
        State.npc = npc;

    },

    update: function(State){

        State.game.physics.arcade.overlap(State.npc, State.player, this.buyStuff());

    },

    buyStuff: function(npc, player, State){

        this.createButton(State.game,"Mercs: 50 currency",game.world.centerX,game.world.centerY +32, 300, 100, function(){
            if(State.player.currency >= 50){
                gameStatHandler.prototype.mercsAmount += 1;
            }
        });
        this.createButton(State.game,"Towers: 25 currency",game.world.centerX,game.world.centerY +110, 300, 100, function(){
            if(State.player.currency >= 25){
                gameStatHandler.prototype.towersAmount += 1;
            }
        });
        this.createButton(State.game,"Done",game.world.centerX,game.world.centerY +182, 300, 100, function(){
            this.buttons.forEachAlive(
                function(button){
                    button.destroy();
                }
            );
        });

    },

    createButton: function(game,string,x,y,width,height,callback){
        var button1 = game.add.button(x,y,'button',callback,game,2,1,0);
        this.buttons = game.add.group();
        buttons.add(button1);
        button1.anchor.setTo(0.5,0.5);
        button1.width = width;
        button1.height = height;
        var text = game.add.text(button1.x,button1.y, string, {font:"12px Arial", fill:"#fff", align:"center"});
        text.anchor.setTo(0.5,0.5);
    }

};