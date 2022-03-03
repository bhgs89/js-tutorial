'use strict';

// 함수 선언
function doSomething(add) {
    console.log(add);
}

function doSomething2(add) {
    console.log(add);
    const result = add(2, 3);
    console.log(result);
}

function add(a, b) {
    const sum = a + b;
    return sum;
}

// 함수 호출
doSomething(add);
doSomething(add());
doSomething(add(1, 2));

doSomething2(add);

const addFun = add;
console.log(add);
addFun(2, 3);