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
