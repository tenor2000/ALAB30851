const dataArray = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

// Sort Array by age
let arrayByAge = JSON.stringify(dataArray);
arrayByAge = JSON.parse(arrayByAge);

arrayByAge.sort((itemA, itemB) => {
  if (parseInt(itemA.age) < parseInt(itemB.age)) return -1;
  if (parseInt(itemA.age) > parseInt(itemB.age)) return 1;

  return 0;
});

// Filter Array to remove entries with age > 50
const filteredArray = dataArray.filter((item) => {
  return parseInt(item.age) <= 50;
});

// Map array to change "occupation" ky to "job" and increment age by 1
let changedArray = JSON.stringify(dataArray);
changedArray = JSON.parse(changedArray);

changedArray.map((item) => {
  item["job"] = item["occupation"];
  delete item["occupation"];
});

// Use reduce method to calculate sum of ages and average.

const initialVal = 0;
// MDN array.reduce(() => {}, initialVal)
const ageSum = dataArray.reduce((totalAge, currVal) => {
  let ageNum = parseInt(currVal.age);
  return totalAge + ageNum;
}, initialVal);
const avgAge = ageSum / dataArray.length;

// Show Results
console.log("Array sorted by age");
console.log(arrayByAge);
console.log("Array filtering out ages greater than 50");
console.log(filteredArray);
console.log("Array with occupation 'changed' to 'job'");
console.log(changedArray);
console.log("Sum of Ages found with reduce() method: " + ageSum);
console.log("Calculated average age: " + avgAge);
