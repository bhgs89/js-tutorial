// Variable
'use strict';

///// 1. let(rw) /////
//  - Added in ES6
  let name = "han";
  console.log(name);
  name = "hello";
  console.log(name);

//  - Block scope
//    Block 안에서 선언된 let은 Block 밖에서 접근 할 수 없다
  {
    console.log("-----------");
    let name2 = "han";
    console.log(name2);
  }
  // console.log(name2); // Error

//  - Global let
//    모든 Block 밖에서 선언된 let은 어디서든 접근 가능하다
  console.log("-----------");
  let name3 = "han";
  {
    console.log(name3);
  }
  console.log(name3);
  

///// 2. var(rw) /////
//  - Var hoisting에 의해, 선언 되기 전에 변수에 할당할 수 있다 (너무 자유롭다)
//  - Var hoisting: 변수가 어디에서 선언되었든 제일 처음으로 끌어올려지는 것
  console.log("-----------");
  console.log(age);  // Undefined
  age = 45;  
  console.log(age);  
  var age;

//  - No block scope
//    Block 안에서 변수가 선언되어도 Block 밖에서 접근 할 수 있다
  {
    age2 = 40;
    var age2;
  }
  console.log(age2)


///// 3. const(r) /////
//  - 변수를 선언하는 동시에 값을 할당한다
//  - 한번 할당된 값을 변경이 불가능 하다
//  - 장점: Security(안전), Thread safety, Reduce human mistakes
  const daysInWeek = 7;
  const maxNum = 5;


///// Mutable data type /////
//  - all objects by default

///// Immutable data type /////
//  - Primitive types, frozen objects(object.freeze())