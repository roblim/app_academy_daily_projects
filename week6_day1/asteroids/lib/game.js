const Asteroid = require('./asteroid.js');

const Game = function Game() {
  this.asteroids = [];
  this.addAsteroids();
};

Game.DIM_X = 1200;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 100;

Game.prototype.addAsteroids = function() {
  while (this.asteroids.length < Game.NUM_ASTEROIDS) {
    this.asteroids.push(new Asteroid({ pos: this.randomPosition(), game: this }));
  }
};

Game.prototype.randomPosition = function() {
  return [(Math.random() * Game.DIM_X), (Math.random() * Game.DIM_Y)];
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  this.asteroids.forEach((asteroid) => asteroid.draw(ctx));
};

Game.prototype.moveObjects = function() {
  this.asteroids.forEach((asteroid) => asteroid.move(asteroid.vel));
};

Game.prototype.wrap = function(pos) {
  let x = pos[0];
  let y = pos[1];

  if (x > Game.DIM_X + (Asteroid.RADIUS)) {
    x = x % Game.DIM_X;
  } else if (x < 0) {
    x = Game.DIM_X + x;
  }

  if (y > Game.DIM_Y + (Asteroid.RADIUS)) {
    y = y % Game.DIM_Y;
  } else if (y < 0) {
    x = Game.DIM_Y + y;
  }

  return [x, y];
};

Game.prototype.checkCollisions = function() {
  for (let idx = 0; idx < this.asteroids.length; idx++) {
    for (let idx2 = 0; idx2 < this.asteroids.length; idx2++) {
      if (idx === idx2) {continue;}
      if (this.asteroids[idx].isCollidedWith(this.asteroids[idx2])) {
        this.asteroids[idx].collideWith(this.asteroids[idx2]);
      }
    }
  }
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.remove = function(asteroid) {
  const idx = this.asteroids.indexOf(asteroid);
  this.asteroids.splice(idx, 1);
};

module.exports = Game;
