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