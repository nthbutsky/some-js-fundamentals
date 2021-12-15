console.log(42 % 10); //  2
console.log(42 % -10); //  2
console.log(-42 % 10); // -2
console.log(-42 % -10); // -2
console.log(-40 % 10); // -0
console.log(40 % 10); //  0

x % 4 == 0; // true if x is divisible by 4
x % 2 == 0; // true if x is even number
x % 2 != 0; // true if x is odd number

/* 
odd or even number 
If NUMBER modulo 2 is 0, NUMBER is even;
If NUMBER modulo 2 is not 0, NUMBER is odd;
*/

/* using modulus to obtain the fractional part of a number */
let myNum = 10 / 4; // 2.5
let fraction = myNum % 1; // 0.5
myNum = -20 / 7; // -2.857142857142857
fraction = myNum % 1; // -0.857142857142857
