// Part 1: Thinking Functionally

function sumOfNums(arrayOfNumbers) {
  let total = 0;
  arrayOfNumbers.forEach((num) => {
    total += num;
  });

  return total;
}

function avgOfNums(arrayOfNumbers) {
  let total = 0;
  arrayOfNumbers.forEach((num) => {
    total += num;
  });

  return total / arrayOfNumbers.length;
}

function getLongestString(arrayOfStrings) {
  let result = "";
  arrayOfStrings.forEach((string) => {
    if (string.length > curr) {
      result = string;
    }
  });

  return result;
}

function getStrings(arrayOfStrings, num) {
  let result = [];
  arrayOfStrings.forEach((string) => {
    if (string.length > num) {
      result.push(string);
    }
  });

  return result;
}

function printNumToN(n, count = 1) {
  if (n < count) {
    return;
  }
  console.log(count);

  printNumToN(n, count + 1);
}

printNumToN(10);
