// create a new scene
let gameScene = new Phaser.Scene('Game');

// load assets
gameScene.preload = function(){
  // load images
  this.load.image('background', './assets/background.png');
  this.load.image('player', './assets/player.png');
  this.load.image('enemy', './assets/dragon.png');
};

// called once after the preload ends
gameScene.create = function() {
  // create bg sprite
  let bg = this.add.sprite(0, 0, 'background');

  // change the origin to the top-left corner
  bg.setOrigin(0, 0);

  // create player
  this.player = this.add.sprite(70, 180, 'player');
  this.player.setScale(1, 1);

  // create enemy1
  this.enemy1 = this.add.sprite(250, 180, 'enemy');
  this.enemy1.flipX = true;

  //create enemy2
  this.enemy2 = this.add.sprite(450, 180, 'enemy');
  this.enemy2.flipX = true;
};

gameScene.update = function() {
  this.enemy1.setRotation += 0.01;

  if(this.player.scaleX < 2){
    this.player.scaleX += 0.001;
    this.player.scaleY += 0.001;
  } else {
    this.player.angle += 0.1;
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