'use strict';

///// Function /////
//  - fundamental building block in the program
//  - subprogram can be used multiple times
//  - performs a task or calculates a value

///// 1. Function declaration /////
// function name(param1, param2) { body ... return; }
// one function === one thing
// naming: doSomthing, command, verb
// e.g createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello@');
log(1234);
console.log('---------------');


///// 2. Parameters /////
//  premitive parameters: passed by value
//  object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}
const han = { name: 'han' };
changeName(han);
console.log(han);
console.log('---------------');


///// 3. Default parameters (added in ES6) /////
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');
console.log('---------------');


///// 4. Rest parameters (added in ES6) /////
//  - Parameters을 배열 형태로 전달 받는다
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach(e => {
    console.log(e);
  });
}
printAll('dream', 'coding', 'han');
console.log('---------------');


///// 5. Local scope /////
//  - 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello2';
  }
  // console.log(childMessage);  // error
}
printMessage();
// console.log(message); // error
console.log('---------------');


///// 6. Return a value /////
//  - return이 없는 function은 return undefined; 와 같다
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);
console.log('---------------');


///// 7. early return, early exit /////
// bad case
function upgradeBadUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}
// good case
function upgradeGoodUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}
console.log('---------------');