console.reset = function() {
  return process.stdout.write('\033c');
}

class Board {
  constructor() {
    this.board = [ ["_", "_", "_"], ["_", "_", "_"], ["_", "_", "_"] ];
  }


  print() {
    console.log("   0|1|2");
    this.board.forEach((row, index, arr) => {
      console.log(`${index}| ${row}\n`);
    });
  }
  validMove(row, col) {
    return this.board[row][col] === "_";
  }

  makeMove(marker, movePos) {
    const row = movePos[0];
    const col = movePos[1];
    if (this.validMove(row, col)) {
      this.board[row][col] = marker;
      console.reset();
      this.print();
      return true;
    } else {
      console.log("Invalid move!");
      return false;
    }
  }
}

module.exports = Board;

// const board = new Board();
// board.print();
// board.makeMove("X", [0,0]);
// board.makeMove("X", [1,1]);
// board.makeMove("X", [2,2]);
