'use strict';

///// First-class function /////
//  function are treated like any other variable
//  can be assigned as a value to variable
//  can be passed as an argument to other functions
//  can be returned by another function

///// 1. Function expression /////
//  a function declaration can be called earlier than it is defined. (hoisted)
//  a function expression is created when the execution reaches it.
const print = function() {  // anonymous function
  console.log('print');
};
const sum2 = function sumNumbers(a, b) { // named function
  return a + b;
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum2;
console.log(sumAgain(1, 3));
console.log('---------------');


///// 2. Callback function using function expression /////
//  Parameter로 전달 받은 함수를 Callback function이라고 한다
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
const printYes = function() { // anonymous function
  console.log('yes!');
};
// Named function
//  - better debugging in debugger's stack traces
//  - recursions
const printNo = function print() {  // named function
  console.log('no!');
  // print(); // recursions
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);
console.log('---------------');


///// 3. Arrow function /////
//  - always anonymous function
const simplePrint = function() {
  console.log('simplePrint!');
};
const simplePrintArrow = () => console.log('simplePrint!!');

const add = function(a, b) {
  return a + b;
}
const addArrow = (a, b) => a + b;

const simpleMuliply = (a, b) => {
  return a * b;
}
console.log('---------------');


///// 4. IIFE: Immediately Invoked Function Expression /////
//  - function의 선언과 실행을 동시에 진행
(function hello() {
  console.log('IIFE');
})();
console.log('---------------');


///// Example /////
//  command: add, substract, divide, multiply, remainder
function calculate(command, a, b) {
  return command(a, b);
}
function addNumbers(a, b) {
  return a + b;
}
const substractNumbers = function(a, b) {
  return a - b;
}
const divideNumbers = function divide(a, b) {
  return a / b;
}
const multiplyNumbers = (a, b) => a * b;
const remainderNumbers = (a, b) => {
  return a % b;
}
console.log(calculate(addNumbers, 1, 2));
console.log(calculate(substractNumbers, 1, 2));
console.log(calculate(divideNumbers, 4, 2));
console.log(calculate(multiplyNumbers, 2, 3));
console.log(calculate(remainderNumbers, 5, 2));