Array.prototype.myEach = function(callback) {
  let i = 0;
  while (i < this.length) {
    callback(this[i], i, this);
    i ++;
  }
};

Array.prototype.myMap = function(callback) {
  let newArray = [];
  this.myEach(function(el) {
    newArray.push(callback(el));
  });
  return newArray;
};

Array.prototype.myReduce = function(callback, initial) {
  let accum = undefined;
  if (initial) {
    accum = initial;
    this.myEach((el, idx, arr) => {
      accum = callback(accum, el)
    });
  } else {
    let i = 1;
    accum = this[0];
    while(i < this.length) {
      accum = callback(accum, this[i]);
      i ++;
    }
  }
  return accum;
};
