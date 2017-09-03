Function.prototype.myBind = function(context) {
  const bounded = () => {
    this.apply(context);
  };
  return bounded;
};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
}

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

console.log(boundTurnOn); // should say "Turning on a lamp"
console.log(myBoundTurnOn); // should say "Turning on a lamp"
