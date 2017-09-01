const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askIfGreaterThan = function askIfGreaterThan(el1, el2, callback) {
  const cb_logic = (answer) => {
    if (answer === 'yes') {
      callback(true);} else if (answer === 'no') {
      callback(false); } else {
      console.log("Invalid entry. Please enter 'yes' or 'no'");
      askIfGreaterThan(el1, el2, callback);
    }
  };
  reader.question(`Is ${el1} greater than ${el2}? ('yes'/'no'): `, cb_logic);
};

const innerBubbleSortLoop = function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    const isGreaterThan = function isGreaterThan(bool) {
      if (bool) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    };
    askIfGreaterThan(arr[i], arr[i + 1], isGreaterThan);
  }
  if (i == (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps);
  }
};

const absurdBubbleSort = function absurdBubbleSort (arr, sortCompletionCallback) {
  const outerBubbleSortLoop = function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  };
  outerBubbleSortLoop(true);
};

const sortCompletionCallback = function sortCompletionCallback(arr) {
  console.log(`Sorting is complete! Thanks for your help. Your sorted array is: `);
  console.log(arr);
};

const arr = [2,5,4,3,6,5,444,3,44,2345,7564,23,1];

absurdBubbleSort(arr, sortCompletionCallback);
