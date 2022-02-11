'use strict';

///// Object /////
//  - one of the Javascript's data type
//  - a collection of related data and/or functionality
//  - nearly all objects in Javascript are instance of Object
//  - object = { key: value };

///// 1. Literals and properties
const obj1 = {};  // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}
const han = {
  name: 'han',
  age: 32
};
print(han);

// Add property
//  - Javascript is dynamically typed language
han.hasJob = true;
console.log(han.hasJob);
// Delete property
delete han.hasJob;
console.log(han.hasJob);
console.log('----------------');


///// 2. Computed properties /////
//  - key should be always string
console.log(han.name);
console.log(han['name']);
han['hasJob'] = true;
console.log(han.hasJob);

function printValue(obj, key) {
  // console.log(obj.key); // Error
  console.log(obj[key]);
}
printValue(han, 'name');  
console.log('----------------');


///// 3. Property value shorthand /////
const person1 = { name: 'Bob', age: 2 };
const person2 = { name: 'Steve', age: 3 };
const person3 = { name: 'Dave', age: 4 };
const person4 = makePerson('han', 5);
console.log(person4);
function makePerson(name, age) {
  return {
    name, // name: name
    age   // age: age
  };
}
console.log('----------------');


///// 4. Constructor function /////
const person5 = new Person('han', 5);
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}
console.log(person5);
console.log('----------------');


///// 5. in operator: property existence check (key in obj) /////
console.log('name' in han);
console.log('age' in han);
console.log('random' in han);
console.log(han.random);  // undefined
console.log('----------------');


///// 6. for .. in vs for .. of /////
// for (key in obj) - object loop
for (key in han) {
  console.log(key);
  console.log(han[key]);
}
// for (value of iterable) - array loop
const array = [1, 2, 3, 4, 5];
for (value of array) {
  console.log(value);
}
console.log('----------------');


///// 7. Fun cloning /////
//  - Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'han', age: '30' };
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);

// new way
// const user4 = {};
// Object.assign(user4, user);
const user4 = Object.assign({}, user);;
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);  // fruit2 가 fruit1을 덮어씌운다
console.log(mixed.color);
console.log(mixed.size);