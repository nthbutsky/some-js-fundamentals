let guestList = ["Den", "Ben", "Ken"];
let guestName = prompt("What is your name?");
if (guestList.includes(guestName)) {
  alert("Welcome!");
} else {
  alert("Sorry, maybe next time.");
}

// minimum value
const arrMin = (arr) => Math.min(...arr);
arrMin([20, 10, 5, 10]); // 5

// maximum value
const arrMax = (arr) => Math.max(...arr);
arrMax([20, 10, 5, 10]); // 20

// sum of all values
const arrSum = (arr) => arr.reduce((a, b) => a + b, 0);
arrSum([20, 10, 5, 10]); // 45

// average value
const arrAvg = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
arrAvg([20, 10, 5, 10]); // 11.25

// sorting
// sorting an array of numbers
let scores = [9, 80, 10, 20, 5, 70];
scores.sort();
console.log(scores); // [10, 20, 5, 70, 80, 9]

let scores = [9, 80, 10, 20, 5, 70];
// sort numbers in ascending order
scores.sort((a, b) => a - b);
console.log(scores); // [ 5, 9, 10, 20, 70, 80 ]

let scores = [9, 80, 10, 20, 5, 70];
// descending order
scores.sort((a, b) => b - a);
console.log(scores); // [80, 70, 20, 10, 9, 5]

// sorting an array of strings
let animals = ["cat", "dog", "elephant", "bee", "ant"];
animals.sort();
console.log(animals); // [ 'ant', 'bee', 'cat', 'dog', 'elephant' ]

// sorting an array of strings in descending order
let animals = ["cat", "dog", "elephant", "bee", "ant"];
animals.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
});
console.log(animals); // [ 'elephant', 'dog', 'cat', 'bee', 'ant' ]

// sorting array with mixed cases
let mixedCaseAnimals = ["Cat", "dog", "Elephant", "bee", "ant"];
mixedCaseAnimals.sort(function (a, b) {
  let x = a.toUpperCase(),
    y = b.toUpperCase();
  return x == y ? 0 : x > y ? 1 : -1;
});
console.log(mixedCaseAnimals); // [ 'ant', 'bee', 'Cat', 'dog', 'Elephant' ]

// sorting an array of strings with non-ASCII characters
let animaux = ["zèbre", "abeille", "écureuil", "chat"];
animaux.sort(function (a, b) {
  return a.localeCompare(b);
});
console.log(animaux); // [ 'abeille', 'chat', 'écureuill', 'zèbree' ]

// sorting an array of objects by a specified property
// sorting objects by a numeric property
let employees = [
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
];
// sort by salary
employees.sort(function (x, y) {
  return x.salary - y.salary;
});

console.table(employees); /*
(index)   name      salary   hireDate
0         "David"   75000    "August 15, 2009"
1         "Ana"     80000    "December 12, 2011"
2         "John"    90000    "July 1, 2010"
*/

// sorting objects by a string property
employees.sort(function (x, y) {
  let a = x.name.toUpperCase(),
    b = y.name.toUpperCase();
  return a == b ? 0 : a > b ? 1 : -1;
});

console.table(employees); /*
(index)   name      salary   hireDate
0         "Ana"     80000    "December 12, 2011"
1         "David"   75000    "August 15, 2009"
2         "John"    90000    "July 1, 2010"
*/

// sorting objects by the date property
employees.sort(function (x, y) {
  let a = new Date(x.hireDate),
    b = new Date(y.hireDate);
  return a - b;
});

console.table(employees); /*
(index)   name      salary   hireDate
0         "David"   75000    "August 15, 2009"
1         "John"    90000    "July 1, 2010"
2         "Ana"     80000    "December 12, 2011"
*/
