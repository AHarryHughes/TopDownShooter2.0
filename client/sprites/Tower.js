function Tower () {}

Tower.prototype = {

    create: function(State){
        
                let towers = game.add.group();
                for(let i = 0; i < State.towerPoints.length; i++){
                    if(State.towerPoints[i] != null){
                        let tower = towers.create(State.towerPoints[i].x, State.towerPoints[i].y, 'merc');
                        tower.tint = 0x00ff00; // change latter on
                        tower.anchor.set(0.5);
                        tower.scale.set(0.1);
                        merc.animations.add('idle', [0, 1, 2, 3, 5, 6, 7, 8, 14, 19, 20], 20, true);
                        merc.animations.add('move', [4, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], 18, true);
                        merc.play('idle');
                        game.physics.arcade.enable(tower);
                        tower.body.setSize(100, 150, 100, 50);
                        tower.body.collideWorldBounds = true;
                        tower.shootTime = 0;

                        if(State.towerPoints[i] == 0){
                            tower.gun = Pistol.prototype;
                            tower.bullets = tower.gun.create(State, tower);
                        }

                        if(State.towerPoints[i] == 1){
                            tower.gun = Aoe.prototype;
                            tower.bullets = tower.gun.create(State, tower);
                        }

                        if(State.towerPoints[i] == 2){
                            tower.gun = Sniper.prototype;
                            tower.bullets = tower.gun.create(State, tower);
                        }

                        if(State.towerPoints[i] == 3){
                            tower.gun = Laser.prototype;
                            tower.bullets = tower.gun.create(State, tower);
                        }
                    }
                }
            
                State.towers = towers;
        
            },
        
            update: function(State){
        
                State.towers.forEachAlive(function(tower){
        
                    behaviorsObj.prototype.bulletCollide(State, tower.bullets);
                    behaviorsObj.prototype.bulletOverlap(State, tower.bullets, [State.boss, State.enemies, State.shotgunEnemies]);
                    behaviorsObj.prototype.shoot(State, tower, State.boss, [State.enemies, State.shotgunEnemies]);
        
                });
        
            }
        
        };
