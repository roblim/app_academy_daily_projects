const Coord = require('./coord.js');

class Snake {

  constructor() {
    this.direction = "N";
    this.segments = [];
    this.velocity = 2;
  }

}

Snake.UNIT_VEC = {
  "N": [0, 1],
  "S": [0, -1],
  "E": [1, 0],
  "W": [-1, 0]
};

Snake.prototype.makeVelVec = function() {
  let unitVec = Snake.UNIT_VEC[this.direction];
  return unitVec.map((el) => el * this.velocity);
};

Snake.prototype.move = function() {

};

module.exports = Snake;
