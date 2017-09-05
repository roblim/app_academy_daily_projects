const Game = require('./game.js');

const GameView = function GameView(game, ctx){
  this.ctx = ctx;
  this.game = game;
};

GameView.prototype.start = function() {
  window.setInterval(() => {
    this.game.draw(this.ctx);
    this.game.step();
  }, 20);
};

module.exports = GameView;
