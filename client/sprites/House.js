function House (State) {

    //Catch the House location  :: let house = map.objects.meta.find(o => o.name == 'house');
    ///Make the rectangle on it :: LevelOutside.house = new Phaser.Rectangle(house.x, house.y, house.width, house.height);
    //Give it health            :: LevelOutside.house.health = 1000;

    State.house = State.map.houseRectangle;
    State.house.maxHealth = 10000;
    State.house.health = State.house.maxHealth;
    

}

//Set a houseUpdate function to start a cutscene stating the user lost and starts the main menu state