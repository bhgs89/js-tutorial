'use strict';

///// Promise //////
//  - 비동기 처리 Object
//  State: pending -> fulfilled or rejected
//  Producer
//  Consumer


///// 1. Producer /////
//  - When new Promise is created, the executor runs automatically (Promsie instance가 생성되는 순간 Promise가 실행된다)
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        // resolve('han');
        reject(new Error('no network'));
    }, 2000);
});


///// 2. Consumer /////
promise.then(value => {
    //  then
    //  - Promise의 성공시
    //  - Promise의 resolve parameter를 value로 받는다
    //  - Return same promise
    console.log(value);
}).catch(error => {
    //  catch
    //  - Promise의 실패시
    //  - Promise의 reject parameter를 value로 받는다
    console.log(error);
}).finally(() => {
    // finally
    // - Promise의 성공 여부에 상관없이 마지막에 실행된다
    console.log('finally');
});


///// 3. Promise chanining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});
fetchNumber
.then(num => num * 2)
.then(num => num * 2)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    })
})
.then(num => console.log(num)); 


///// 4. Error Handling /////
// then()에서 Error 처리는 바로 다음 catch()에서 처리한다
const getHen = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('A'), 1000);
    });
};
const getEgg = (hen) => {
    return new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 'B`), 1000);
        setTimeout(() => reject(new Error(`error! ${hen} => 'B`)), 1000);
    });
};
const cook = (egg) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 'C`), 1000);
    });
};
getHen()
.then(hen => getEgg(hen))   // === then(getEgg)
.catch(error => {
    return 'F';
})
.then(egg => cook(egg))
.then(meal => console.log(meal))
.catch(console.log);