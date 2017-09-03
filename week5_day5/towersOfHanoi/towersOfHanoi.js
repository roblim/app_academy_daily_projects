const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.stacks = [[1, 2, 3], [], []];
    // this.start = null;
    // this.end = null;
  }

  run () {
    // until all discs moved from starting stack to another stack
    // prompt player which stack to take from
    // prompt player which stack to move to
    // move top disc from first stack to the other stack
    this.promptMove();

  }

  promptMove() {
    console.log(this.stacks);
    reader.question(
      "Please select the start stack: ",
      (first) => {
        reader.question(
          "Please enter the end stack: ",
          (last) => {
            if (this.move(first, last) === false) {
              console.log("Invalid move!");
              return this.promptMove();
            }
            this.print();
            if (this.isWon()) {
              this.completionCallback();
            } else {
              this.run();
            }
          });
      });
  }

  move(startTowerIdx, endTowerIdx) {
    const startDisc = this.stacks[startTowerIdx][0];
    const endDisc = this.stacks[endTowerIdx][0];
    if ((startDisc < endDisc) || (this.stacks[endTowerIdx][0] === undefined)) {
        this.stacks[endTowerIdx].unshift(this.stacks[startTowerIdx].shift());
        return true;} else {return false;}
  }

  print() {
    console.log(JSON.stringify(this.stacks));
  }

  isWon() {
    const firstEmpty = (this.stacks[0].length === 0);
    const othersFull = (this.stacks[1].length === 3 || this.stacks[2].length === 3);
    return firstEmpty && othersFull;
  }

  completionCallback() {
    console.log("Yaye! You win!");
    reader.close();
  }
}

const game = new Game();
game.run();
