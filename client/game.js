const Phaser = require('./phaser');
const Boot = require('./states/Boot');
const Preloader = require('./states/Preloader');
const MainMenu = require('./states/MainMenu');
const levelOutside = require('./states/levelOutside');
const levelHouse = require('./states/levelHouse');
const levelBuild = require('./states/levelBuild');

var game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO, document.getElementById('game'));
game.state.add('Boot', Boot);
game.state.add('Preloader', Preloader);
game.state.add('MainMenu', MainMenu);
game.state.add('levelOutside', levelOutside);
game.state.add('levelHouse', levelHouse);
game.state.add('levelBuild', levelBuild);
game.state.start('Boot');
