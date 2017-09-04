const sum = function sum() {
  // const args = Array.prototype.slice.call(arguments);
  // return args.reduce((accum, el) => {
  //   return accum + el;
  // }, 0);

  const args = Array.from(arguments);
  return args.reduce((accum, el) => {
    return accum + el;
  });
};

const sumRest = function sumRest(...args) {
  return args.reduce((accum, el) => {
    return accum + el;
  });
};

Function.prototype.myBind = function myBind(context) {
  const args = Array.prototype.slice.call(arguments, 1);
  // return () => {
  //   const args2 = args.concat(Array.prototype.slice.call(arguments));
  //   return this.apply(context, args2);
  // };
  const that = this;
  return function() {
    const args2 = args.concat(Array.prototype.slice.call(arguments));
    return that.apply(context, args2);
  };
};

Function.prototype.myBind = function myBind(context, ...args) {
  const that = this;
  return function(...args2) {
    const a = args.concat(args2);
    return that.apply(context, a);
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "me"
markov.says.myBind(breakfast)("meow", "a tree");
// Breakfast says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(breakfast, "meow")("Markov");
// Breakfast says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow", "me");
// Breakfast says meow to me!
// true

const curriedSum = function curriedSum(levels) {
  const numbers = [];
  const _curriedSum = function _curriedSum(num) {
    numbers.push(num);
    if (levels === numbers.length) {
      return numbers.reduce((accum, el) => accum + el);
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
};
