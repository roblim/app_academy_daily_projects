const View = require('./ttt-view.js');
const Game = require('./ttt_node/game.js');

$( () => {
  const $gridCont = $(".ttt");
  const game = new Game();
  const view = new View(game, $gridCont);
});
