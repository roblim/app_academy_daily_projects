Array.prototype.uniq = function() {
  const newArray = [];
  for (let i = 0; i < this.length; i += 1) {
    if (!newArray.includes(this[i])) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

// Array.prototype.twoSum = function() {
//   const newArray = [];
//   this.forEach(function(el1, idx1, arr) {
//     arr.forEach(function(el2, idx2, arr2) {
//       if (idx1 === idx2) {
//         return;
//       }
//       if (el1 + el2 === 0) {
//       newArray.push([idx1, idx2]);
//       }
//     });
//   });
//   return newArray;
// };

Array.prototype.twoSum = function() {
  const newArray = [];
  this.forEach(function(el1, idx1, arr) {
    let i = idx1 + 1;
    while (i < arr.length) {
      if (el1 + arr[i] === 0) {
        newArray.push([idx1, i]);
      }
      i += 1;
    }
  });
  return newArray;
};

Array.prototype.transpose = function() {
  const newArray = [];
  let i = 0;
  while (i < this.length) {
    let temp = [];
    this.forEach(function(el, idx, arr) {
      temp.push(el[i]);
    });
    newArray.push(temp);
    temp = [];
    i += 1;
  }
  return newArray;
};
