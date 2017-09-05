/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const GameView = __webpack_require__(1);
const Game = __webpack_require__(2);

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('game-canvas');
  canvas.width = Game.DIM_X;
  canvas.height = Game.DIM_Y;
  const ctx = canvas.getContext('2d');
  const game = new Game();
  const view = new GameView(game, ctx);
  view.start();
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(2);

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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Asteroid = __webpack_require__(3);

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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(4);
const Util = __webpack_require__(5);

const Asteroid = function Asteroid(opts) {
  const options = {pos: opts.pos,
                   vel: Util.randomVec(2),
                   radius: Asteroid.RADIUS,
                   color: Asteroid.COLOR,
                   game: opts.game
                  };
  MovingObject.call(this, options);
};

Asteroid.RADIUS = 20;
Asteroid.COLOR = 'grey';

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

const MovingObject = function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
};

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(...this.pos, this.radius, 0, 2*Math.PI, true);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
};

MovingObject.prototype.move = function(vel) {
  this.pos[0] = this.pos[0] + vel[0];
  this.pos[1] = this.pos[1] + vel[1];
  this.pos = this.game.wrap(this.pos);
};

MovingObject.prototype.isCollidedWith = function(otherObject) {
  const x = Math.pow((this.pos[0] - otherObject.pos[0]), 2);
  const y = Math.pow((this.pos[1] - otherObject.pos[1]), 2);
  const distance = Math.sqrt(x + y);
  return distance < (this.radius + otherObject.radius);
};

MovingObject.prototype.collideWith = function(otherObject) {
  this.game.remove(this);
  this.game.remove(otherObject);
};

module.exports = MovingObject;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

const Util = {
  inherits (childClass, parentClass) {
    childClass.prototype = Object.create(parentClass.prototype);
    childClass.prototype.constructor = childClass;
  },

  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },

  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }

};

module.exports = Util;


/***/ })
/******/ ]);