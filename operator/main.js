'use strict';

///// 1. String Concatenation(문자열 결합) /////
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log('-----------');


///// 2. Numeric Operators /////
console.log(1 + 1);   // Add
console.log(1 - 1);   // Substract
console.log(1 * 1);   // Divide
console.log(1 / 1);   // Multiply
console.log(1 % 1);   // Remainder
console.log(1 ** 1);  // Exponentiation
console.log('-----------');


///// 3. Increment and Decrement Operators /////
let counter = 2;
// Pre-increment
//  - 변수를 증가시키고 사용
const preIncrement = ++counter;   // counter = counter + 1; preIncrement = couter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
// Post-increment
//  - 변수를 사용하고 증가
const postIncrement = counter++;  // preIncrement = couter; counter = counter + 1; 
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
// Pre-decrement
//  - 변수를 감소시키고 사용
const preDecrement = --counter;   // counter = counter - 1; preDecrement = couter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
// Post-decrement
//  - 변수를 사용하고 감소
const postDecrement = counter--;  // preDecrement = couter; counter = counter - 1; 
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);
console.log('-----------');


///// 4. Assignment Operators /////
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;
console.log('-----------');


///// 5. Comparison Operators /////
console.log(10 < 6);  // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6);  // greater than
console.log(10 >= 6); // greater than or equal
console.log('-----------');


///// 6. Logical Operators /////
const value1 = false;
const value2 = 4 < 2;
function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log('*');
  }
  return true;
}
// || (OR)
//  - finds the first truthy value
//    첫번째 True value를 찾으면 true를 return 하고 뒤는 실행하지 않는다
console.log(`or: ${value1 || value2 || check()}`);
// && (AND)
//  - finds the first falsy value
//    첫번째 false value를 찾으면 false를 return 하고 뒤는 실행하지 않는다
console.log(`and: ${value1 && value2 && check()}`);
// ! (NOT)
console.log(!value1);
console.log('-----------');


///// 7. Equality /////
const stringFive = '5';
const numberFive = 5;
//  == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
//  === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);
// object equality by reference
const han1 = {name: 'han'};
const han2 = {name: 'han'};
const han3 = han1;
console.log(han1 == han2);  // false
console.log(han1 === han2); // false
console.log(han1 === han3); // true
// equality ex
console.log(0 == false);          // true
console.log(0 === false);         // false
console.log('' == false);         // true
console.log('' === false);        // false
console.log(null == undefined);   // true
console.log(null === undefined);  // false
console.log('-----------');


///// 8. Conditional Operators  /////
// if, else if, else
const name = 'coder';
if (name === 'han') {
  console.log('Welcome, Han!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unknown');
}
console.log('-----------');


///// 9. Ternary Operator: ?  /////
// condition ? value1(true) : value2(false)
console.log(name === 'han' ? 'yes' : 'no');
console.log('-----------');


///// 10. Switch Statement  /////
//  use for multiple if checks
//  use for enum-like value checks
//  use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':      // if (browser == 'IE')
    console.log('go away!!');
    break;
  case 'Chrome':
  case 'Firefox': // if (browser == 'Chrome' || browser == 'Firefox')
    console.log('love you!');
    break;
  default:        // else
    console.log('same all!');
    break;
}
console.log('-----------');


///// 11. Loops(while loop)  /////
//  while the condition is truthy,
//  body code is executed
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}
console.log('-----------');


///// 12. Loops(do while loop)  /////
//  body code is executed first,
//  then check the condition
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);
console.log('-----------');


///// 13. Loops(for loop)  /////
//  for (begin; condition; step)
for (i = 3; i > 0; i++) {
  console.log(`for: ${i}`);
}
// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}
console.log('-----------');


///// 14. Break  /////
//  Stop loop
for (let i = 0; i < 10; i++) {
  if (i == 8) {
    break;
  }
  console.log(`for: ${i}`);
}
console.log('-----------');


///// 15. Continue  /////
//  Skip loop
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`for: ${i}`);
}
console.log('-----------');