var game;
var emitter;
var model;
var constant;
var controller;
var pickedWord = []
var alreadypickedWord = []

window.onload = function() {
  var config = {
    type: Phaser.AUTO,
    parent: 'boost-pvp-hangman',
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
      default: 'arcade',
      arcade: {
        debug: false
      }
    },
    scene: [MainScene]
  }

  constant = new Constant();
  model = new Model();
  game = new Phaser.Game(config)
}
