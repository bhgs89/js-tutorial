'use strict';

///// Class (added in ES6) /////
//  - Object Oriented Programming
//  - 연관 있는 Data를 한 곳에 묶어놓는 Container
//  - 구성: Fields(properties)(속성), Methods(functions)(행동)
//  - Data class: only fields in class
//  - Template: Data의 틀을 만든다(정의만 존재)
//  - Declare once
//  - No data in: 실제 Data는 들어있지 않다
//  - syntactical sugar over prototype-based inheritance
//  - 일반적으로 Class의 이름은 첫글자가 대문자이다

///// Object /////
//  - Instance of class: Class의 객체화 한 Data
//  - Create many times
//  - Data in: Class의 틀에 맞춰 실제 Data를 가진다

///// 1. Class declaration /////
//  - must need constructor
//  - Access field: use this keyword
class Person {
  // Constructor
  constructor(name, age) {
    // Fields
    this.name = name;
    this.age = age;
  }

  // Methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}
//  Instance of class
//  - new ClassName(constructor())
const han = new Person('han', 32);
console.log(han.name);
console.log(han.age);
han.speak();
console.log('----------------');


///// 2. Getter & Setters /////
//  - 잘못된 Data 사용을 방지하기 위한 장치
class User {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
  // get
  //  - Return value
  //  - Instance의 field를 호출할 때, this.field 값을 바로 return하지 않고 get에서 return한다
  //  - 만약 field의 이름과 get return의 이름이 같으면 get을 무한적으로 호출하기 때문에 return 이름을 바꿔준다(Ex. this.age > return this._age)
  get age() {
    return this._age;
  }
  // set
  //  - Assign value
  //  - Instance의 field를 할당할 때, this.field 값을 바로 할당하지 않고 set에서 할당한다
  //  - 만약 field의 이름과 set field의 이름이 같으면 set을 무한적으로 호출하기 때문에 set field 이름을 바꿔준다(Ex. this.age > this._age)
  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative'); // JS stop when error occurs
    // }
    this._age = value < 0 ? 0 : value;
  }
}
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);
console.log('----------------');


///// 3. Fields (public, private) /////
//  - private
//    -- 변수 앞에 #를 붙여 사용
//    -- class안에서만 접근 가능하다 (object에서는 접근 불가)
//  - public: 
//    -- private이 아닌 fields
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);
console.log('----------------');


///// 4. Static properties and methods /////
//  - Instance에서 공통적으로 사용되는 고정 값 또는 함수
//  - Instance에서 접근하는 것이 아니고 Class 자체로 접근할 수 있다
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);  // undefined
console.log(Article.publisher);
Article.printPublisher();
console.log('----------------');


///// 5. Inheritance /////
//  - a way for one class to extend another class
//  Parent class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`)
  }

  getArea() {
    return this.width * this.height;
  }
}
// Child class
//  - use extends
class Rectangle extends Shape {}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
class Triangle extends Shape {
  // Overwriting
  draw() {
    // use parent method
    //  - super keyword 사용
    super.draw(); 
    console.log('TRIANGLE');
  }
  // Overwriting
  getArea() {
    return (this.width * this.height) / 2;
  }
}
const triangle = new Triangle(20, 20, 'blue');
triangle.draw();
console.log(triangle.getArea());
console.log('----------------');


///// 6. Class checking: instanceof /////
//  - object가 class의 instance인지 확인
console.log(rectangle instanceof Rectangle);  // true
console.log(triangle instanceof Rectangle);   // false
console.log(triangle instanceof Triangle);    // true
console.log(triangle instanceof Shape);       // true
console.log(triangle instanceof Object);      // true