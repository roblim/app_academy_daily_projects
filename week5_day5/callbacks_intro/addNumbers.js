const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const addNumbers = function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    return completionCallback(sum)
  }

  const callback = function callback(number) {
    number = parseInt(number);
    sum = sum + number;
    console.log(`Running Total: ${sum}`);
    addNumbers(sum, numsLeft -= 1, completionCallback);
  };

  reader.question("Please provide a number: ", callback)
};

const completion = function completion(sum){
  console.log(`Total Sum: ${sum}`);
  reader.close();
};

addNumbers(0, 4, completion);
