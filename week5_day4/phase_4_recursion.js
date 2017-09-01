const range = function(start, end) {
  if (start === end) {
    return [start];
  }
  return [start].concat(range((start + 1), end));
};

const subRec = function(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + subRec(arr.slice(1,arr.length));
};

const exponent1 = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponent1(base, exp - 1);
};

const exponent2 = function(base, exp) {
  if (exp === 0) {return 1;}
  else if (exp === 1) {return base;}

  if (exp % 2 === 0) {
    return exponent2(base, exp / 2) * exponent2(base, exp / 2);
  } else {
    return base * (exponent2(base, ((exp - 1) / 2))) * (exponent2(base, ((exp - 1) / 2)));
  }
};

const fibonacciRec = function(n) {
  switch (n) {
    case 0:
      return [];
    case 1:
      return [0];
    case 2:
      return [0, 1];
  }
  let prevFib = fibonacciRec(n - 1);
  // return prevFib.concat([prevFib[prevFib.length-2] + prevFib[prevFib.length-1]]);
  prevFib.push(prevFib[prevFib.length-2] + prevFib[prevFib.length-1]);
  return prevFib;
};

const bsearch = function(arr, target) {
  
};
