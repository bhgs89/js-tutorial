'use strict'

///// Array /////
// 자료구조 
//      - 비슷한 종류의 데이터들을 한곳에 모아넣어 저장하는 구조
//      - 일반적으로 동일한 Type의 object를 모아넣어 저장하는 것이 좋다
//      - 검색, 삽입, 정렬, 삭제

///// 1. Declaration /////
const arr1 = new Array();
const arr2 = [1, 2];
console.log('-------------------');

///// 2. Index position /////
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);     // undefined
console.log(fruits[fruits.length - 1]);
console.log('-------------------');


///// 3. Looping over an array /////
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}
// c. forEach
fruits.forEach(function (fruit, index, array) {
    console.log(fruit, index, array);
}); 
console.log('-------------------');


///// 4. Addtion, deletion, copy /////
//  puch: add an item to the end
fruits.push('strawberry', 'peach');
console.log(fruits);
//  pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item from the beginning
fruits.unshift('strawberry', 'peach');
console.log(fruits);
// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);
// NOTE!! shift, unshift are slower than pop, push
//  - pop & push - array의 기존의 Data는 움직이지 않고 array에 새로운 데이터를 추가하거나 마지막 Data를 뺄 수 있기 때문에
//  - unshift & shift - array의 기존의 Data를 하나씩 뒤로 움직여 array앞에 데이터를 추가하거나 array의 첫번째 data를 지우고 나머지 data들을 하나씩 앞으로 움직여야하기 때문에

// splice: remove an item by index position
//  - (StartIndex[, DeleteCount, newData1, newData2, ...])
//      - DeleteCount가 없다면, StartIndex 부터 나머지를 전부 지운다
//      - newData가 존재한다면, StartIndex부터 DeleteCount만큼 지우고 그 자리에 newData를 추가한다
fruits.push('strawberry', 'peach', 'mango');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'apple', 'watermelon');
console.log(fruits);

// concat: combine two arrays
//  - 두개의 배열을 합쳐 새로운 Array를 Return한다 
const fruits2 = ['pearl', 'coconut'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);
console.log('-------------------');


///// 5. Search /////
//  - find the index
console.log(fruits);
// indexOf
//  - if found, return first found index
//  - if not found, return -1
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('watermelon'));
console.log(fruits.indexOf('coconut'));
// includes
//  - if found, return true;
//  - if not found, return false;
console.log(fruits.includes('watermelon'));
console.log(fruits.includes('coconut'));
// lastIndexOf
//  - if found, return last found index
//  - if not found, return -1
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));
console.log('-------------------');
