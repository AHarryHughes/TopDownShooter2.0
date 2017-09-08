var outsideMap = function (){};

outsideMap.prototype = {

    create: function(State){

        State.map = State.game.add.tilemap("outside");
        State.map.addTilesetImage('large-map', 'large-map');


        let layer = State.map.createLayer('Base');
        layer.resizeWorld();
        let collisionLayer = State.map.createLayer('Collision');
        State.map.collisionLayer = collisionLayer;
        collisionLayer.visible = false;
        State.map.setCollisionByExclusion([], true, State.map.collisionLayer);
        collisionLayer.resizeWorld();

        State.map.exit = State.map.objects.meta.find(o => o.name == 'exit');
        State.map.exitRectangle = new Phaser.Rectangle(State.map.exit.x, State.map.exit.y, State.map.exit.width, State.map.exit.height);
        State.map.entrance = State.map.objects.meta.find(o => o.name == 'entrance');
        State.map.start = State.map.objects.meta.find(o => o.name == 'start');

        State.map.spawnPoints = [];
        let spawn1 = State.map.objects.meta.find(o => o.name == 'spawn1');
        let spawn2 = State.map.objects.meta.find(o => o.name == 'spawn2');
        let spawn3 = State.map.objects.meta.find(o => o.name == 'spawn3');
        let spawn4 = State.map.objects.meta.find(o => o.name == 'spawn4');
        State.map.spawnPoints.push(spawn1, spawn2, spawn3, spawn4);

    },

    layForeground: function(State){

        let layerForeground = State.map.createLayer('Foreground');
        layerForeground.resizeWorld();

    }

};