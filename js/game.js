let gameScene = new Phaser.Scene('Game');

//initiate game scene parameters
gameScene.init = function() {
  this.playerSpeed = 1;
};

// load assets
gameScene.preload = function(){
  // load images
  this.load.image('background', './assets/background.png');
  this.load.image('player', './assets/player.png');
  this.load.image('enemy', './assets/dragon.png');
  this.load.image('goal', './assets/treasure.png');
};

// called once after the preload ends
gameScene.create = function() {
  // create bg sprite
  let bg = this.add.sprite(0, 0, 'background');

  // change the origin to the top-left corner
  bg.setOrigin(0, 0);

  // create player
  this.player = this.add.sprite(70, 180, 'player');
  this.player.setScale(0.5, 0.5);

  this.goal = this.add.sprite(this.sys.game.config.width - 80,this.sys.game.config.height / 2, 'goal')
  this.goal.setScale(0.6);
};

gameScene.update = function() {
  //checkfor active input
  if(this.input.activePointer.isDown) {
    this.player.x += this.playerSpeed;
  }

  // treasure overlap check
  let playerRect = this.player.getBounds();
  let treasureRect = this.goal.getBounds();
  
  if(Phaser.Geom.Intersects.RectangleToRectangle(playerRect, treasureRect)) {
    console.log('reached goal!');
    
    // restart the Scene
    this.scene.restart();
    return;
  }
}

// set the configuration of the game
let config = {
  type: Phaser.AUTO, // Phaser will use WebGL if available, if not it will use Canvas
  width: 640,
  height: 360,
  scene: gameScene
};

// create a new game, pass the configuration
let game = new Phaser.Game(config);