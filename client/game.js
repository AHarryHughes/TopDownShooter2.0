var game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO, document.getElementById('game'));
game.state.add('Boot', Boot);
game.state.add('Preloader', Preloader);
game.state.add('MainMenu', MainMenu);
game.state.add('levelOutside', LevelOutside);
game.state.add('levelHouse', LevelHouse);
game.state.start('Boot');


