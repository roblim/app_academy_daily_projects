const Board = require('./board.js');

class Game {
  constructor(p1Name, p2Name, reader) {
    this.player1 = p1Name;
    this.player2 = p2Name;
    this.currentPlayer = this.player1;
    this.currentMarker = "X";
    this.board = new Board();
    this.grid = this.board.board;
    this.reader = reader;
  }

  switchPlayer() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
      this.currentMarker = "O";
    } else {
      this.currentPlayer = this.player1;
      this.currentMarker = "X";
    }
  }

  gameWon() {
    const cols = [
                  [this.grid[0][0], this.grid[1][0], this.grid[2][0]],
                  [this.grid[0][1], this.grid[1][1], this.grid[2][1]],
                  [this.grid[0][2], this.grid[1][2], this.grid[2][2]]
                  ];
    const diags = [
                  [this.grid[0][0], this.grid[1][1], this.grid[2][2]],
                  [this.grid[0][2], this.grid[1][1], this.grid[2][0]]
                  ];
    const winOp = this.grid.concat(cols).concat(diags);

    const won = winOp.some((el1) => {
      return (el1.every((el2) => {
        return el2 === "X";
      }) || el1.every((el2) => {
        return el2 === "O";
      }));
    });
    return won;
  }

  promptMove() {
    this.reader.question(`Where would you like to move, ${this.currentPlayer}? ('row, col'): `, (move) => {
      const moveArr = move.split(', ').map((el) => parseInt(el));
      if (!this.board.makeMove(this.currentMarker, moveArr)) {
        return this.promptMove();
      }
      if (this.gameWon()) {
        console.log(`Yaye! ${this.currentPlayer} wins!`);
      } else {
        this.switchPlayer();
        this.promptMove();
      }
    });
  }

  run(completionCallback) {
    this.board.print();
    this.promptMove();
  }

}

module.exports = Game;
// const game = new Game('rob', 'sean');
// game.board.makeMove("X",[0,0]);
// game.board.makeMove("X",[1,1]);
// game.board.makeMove("X",[2,2]);
// game.gameWon();
