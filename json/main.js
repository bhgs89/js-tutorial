'use strict';

//  AJAX: Asynchronous javaScript And XML
//  - XHR: XMLHttpRequest Object
//  - JSON: JavaScript Object Notation
//      - Simplest data interchange format
//      - lightweight text-based structure
//      - easy to read
//      - key-value pairs
//      - used for serialization and transmission of data between the network the network connection
//      - independent programming language and platform
//      - Server 통신
//          Client -- (string)JSON data --> Server
//          Server <-- (string)JSON data -- Server
//      - Serialize & Deserialize
//          Object <--> String


///// 1. Object to JSON /////
//  JSON.stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
//  JSON.stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;
//  - Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // symbol: Symbol('id'),   // JSON 미포함
    jump: () => {   // JSON 미포함
        console.log(`${name} can jump!`);
    }
}
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'han' : value;
});
console.log(json);
console.log('---------------------------');


///// 2. JSON to Object /////
// JSON.parse(text: string, reviver?: (this: any, key: string, value: any) => any): any;
// - Converts a JavaScript Object Notation (JSON) string into an object.
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); // Error

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); // error
console.log(obj.birthDate);
console.log(obj2.birthDate.getDate());