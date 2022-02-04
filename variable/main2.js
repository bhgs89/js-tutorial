// Variable Types
//  - Primitive type: number, string, boolean, null, undefined, symbol
//  - Objective type: object
console.log("-----------");

///// 1. number - 모든 숫자형 data type /////
//  기본 number data types
//  - Range: (-2 ** 53) ~ (2 ** 53)
  const a1 = 12;    // integer
  const a2 = 17.1;  // double or float
  console.log(`value: ${a1}, type: ${typeof a1}`);
  console.log(`value: ${a2}, type: ${typeof a2}`);
//  Infinity & NaN
  const a3 = 1 / 0;   // Infinity
  const a4 = -1 / 0;  // -Infinity
  const a5 = "not a number" / 2;  // NaN
  console.log(a3);
  console.log(a4);
  console.log(a5);
//  bigint
//  - Range: Over (-2 ** 53) ~ (2 ** 53)
  const a6 = 12345678901234567890123455678890n;  
  console.log(`value: ${a6}, type: ${typeof a6}`);


///// 2. string /////
  console.log("-----------");
  const b1 = 'c';
  const b2 = "sunny";
  // string merge (using +)
  const b3 = 'hello ' + b2;
  console.log(`value: ${b3}, type: ${typeof b3}`);
  // string merge (using template literal)
  const b4 = `hi ${b2}`;
  console.log(`value: ${b4}, type: ${typeof b4}`);


///// 3. boolean /////
//  - false: 0, null, undefined, NaN, ''
//  - true: any other values
  console.log("-----------");
  const c1 = true;  // true
  const c2 = 3 < 1; // false
  console.log(`value: ${c1}, type: ${typeof c1}`);
  console.log(`value: ${c2}, type: ${typeof c2}`);


///// 4. null /////
//  - 변수가 empty값을 가지게 한다
  console.log("-----------");
  let d1 = null;
  console.log(`value: ${d1}, type: ${typeof d1}`);


///// 5. undefined /////
//  - 변수가 선언은 되었지만 어떤 값도 할당 받지 못했다
  console.log("-----------");
  let e1;
  console.log(`value: ${e1}, type: ${typeof e1}`);


///// 6. symbol /////
//  - Symbol함수를 사용하여 고유한 식별자로 쓰이는 변수
//  - Symbol('DESCRIPTION')
//    - Symbol함수에 같은 String을 인자로 받은 두 symbol변수는 서로 다르다
  console.log("-----------");
  const f1 = Symbol('id');
  const f2 = Symbol('id');
  console.log(f1 === f2); // false
//  - Symbol.for('DESCRIPTION)
//    - Symbol.for함수에 같은 String을 인자로 받은 두 symbol변수는 서로 같다
  const f3 = Symbol.for('id');
  const f4 = Symbol.for('id');
  console.log(f3 === f4); // true
//  - Symbol의 description을 출력하기
  console.log(f3.description); 


///// 7. Dynamic typing /////
//  - JS는 dynamically typed language
//  - 변수를 선언할 때 어떤 type인지 선언하지 않고 runtime에서 할당된 값의 type에 따라 변수의 type이 변경된다
  console.log("-----------");
  let g1 = 'hello';
  console.log(g1.charAt(0));  // h
  console.log(`value: ${g1}, type: ${typeof g1}`);
  g1 = 1;
  console.log(`value: ${g1}, type: ${typeof g1}`);
  g1 = '7' + 5;
  console.log(`value: ${g1}, type: ${typeof g1}`);
  g1 = '7' / '5';
  console.log(`value: ${g1}, type: ${typeof g1}`);
  console.log(g1.charAt(0));  // error  


///// 7. object /////
//  - Objective type (Primitive type의 묶음)
//  - Data structure
  console.log("-----------");
  const han = { name: 'Han', age: 32 };

  
///// 8. function /////
//  - Primitive
//  - first class function
//      변수에 함수를 할당 할 수 있다
//      함수의 Parameter에 함수를 전달 할 수 있다
//      함수에서 함수를 return 할 수 있다
