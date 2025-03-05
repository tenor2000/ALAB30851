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
    if (string.length > result) {
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

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = ["one", "two", "three", "four", "five"];

console.log("Sum of Nums: " + sumOfNums(arr1));
console.log("Average of Nums: " + avgOfNums(arr1));
console.log("Longest String: " + getLongestString(arr2));
console.log("Strings of certain length: ");
console.log(getStrings(arr2, 3));
console.log("Counting to N...");
printNumToN(10);
