Function.prototype.inherits = function(superclass) {
  // const Surrogate = function Surrogate(){};
  // Surrogate.prototype = superclass.prototype;
  // this.prototype = new Surrogate();
  // this.prototype.constructor = this;
  this.prototype = Object.create(superclass.prototype);
  this.prototype.constructor = this;
};

function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

MovingObject.prototype.move1 = () => console.log('move1');
Ship.prototype.ship1 = () => console.log('ship1');
Asteroid.prototype.asteroid1 = () => console.log('asteroid');

const mo = new MovingObject();
const ship = new Ship();
const asteroid = new Asteroid();

// mo.move1(); //'move1'
// mo.ship1(); //error
// mo.asteroid1(); //error
// ship.ship1();
// ship.move1();
// ship.asteroid1();
// asteroid.move1();
// asteroid.ship1();
// asteroid.asteroid1();
