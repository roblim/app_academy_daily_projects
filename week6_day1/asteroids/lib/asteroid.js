const MovingObject = require('./moving_objects.js');
const Util = require('./utils.js');

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
