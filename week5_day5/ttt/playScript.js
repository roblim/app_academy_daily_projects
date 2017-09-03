const Game = require('./game.js');
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let g = new Game('Rob', 'Sean', reader);
g.run(reader, completion);

function completion() {
  reader.question("Play again? ('y' or 'no'): ", restartGame => {
    if (restartGame === "y") {
      g = new Game();
      g.run(reader, completion);
    } else {
      reader.close();
    }
  });
}
