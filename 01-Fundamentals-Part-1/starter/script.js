/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);


// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = 'jonas'
let PI = 3.14;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob)

let value1 = 80;
let value2 = 90;
let value3 = value1 + value2;
value3 = value3 + 15;
console.log(value3);



let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;
age++;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Müller';
console.log(lastName);


// Math operators
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log('Age of Jonas and Sarah: ', ageJonas, ' and ', ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++;
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah);
console.log('Average age is:', averageAge);

*/

// Coding Challenge #1
// Data 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / (heightJohn * heightJohn);
let markHigherBMI = bmiMark > bmiJohn;

console.log('Data 1:')

console.log('BMI Mark =', bmiMark, 'BMI John =', bmiJohn);
console.log('Mark has higher BMI than John:', markHigherBMI);

massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

bmiMark = massMark / heightMark ** 2;
bmiJohn = massJohn / (heightJohn * heightJohn);
markHigherBMI = bmiMark > bmiJohn;

console.log('Data 2:')

console.log('BMI Mark =', bmiMark, 'BMI John =', bmiJohn);
console.log('Mark has higher BMI than John:', markHigherBMI);


