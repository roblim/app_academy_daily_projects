const GameView = require('./lib/game_view.js');
const Game = require('./lib/game.js');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('game-canvas');
  canvas.width = Game.DIM_X;
  canvas.height = Game.DIM_Y;
  const ctx = canvas.getContext('2d');
  const game = new Game();
  const view = new GameView(game, ctx);
  view.start();
});
