///// Array part 2 /////

///// Quiz 1: Make a string out of an array /////
{
  const fruits = ['apple', 'banana', 'orange'];
  // Array.join(separator?: string): string
  //  - Adds all the elements of an array separated by the specified separator string
  //  - Default separator: ,
  const result = fruits.join();
  console.log(result);
  console.log('---------------');
}

///// Quiz 2: Make a string out of an array /////
{
  const fruits = 'apple,kiwi,banana,cherry';
  // String.split(separator: string | RegExp, limit?: number): string[];
  //  - Split a string into substrings using the specified separator
  const result = fruits.split(',');
  const result2 = fruits.split(',', 2);
  console.log(result);
  console.log(result2);
  console.log('---------------');
}

///// Quiz 3: Make this array look like this: [5, 4, 3, 2, 1] /////
{
  const array = [1, 2, 3, 4, 5];
  // Array.reverse(): T[]
  //  - Reverses the elements in an Array
  //  - Return reversed array & reverse original array
  const result = array.reverse();
  console.log(result);
  console.log(array);
  console.log('---------------');
}

///// Quiz 4: Make new array without the first two elements /////
{
  const array = [1, 2, 3, 4, 5];
  // Array.splice(start: number, deleteCount: number, ...items: T[]): T[];
  //  - Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
  //  - Return deleted elements array
  //  - change the original array
  const result = array.splice(0, 2);
  console.log(result);
  console.log(array);

  const array2 = [1, 2, 3, 4, 5];
  // Array.slice(start?: number, end?: number): T[];
  //  - Returns a copy of a section of an array.
  //  - Do not change the original array
  const result2 = array2.slice(2, 5);
  console.log(result2);
  console.log(array2);
  console.log('---------------');
}

/*****************************/
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];
/*****************************/

///// Quiz 5: Find a student with the score 90 /////
{
  // Array.find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined
  //  - Returns the value of the first element in the array where predicate is true, and undefined
  const result = students.find(student => student.score === 90);
  console.log(result);
  console.log('---------------');
}

///// Quiz 6: Make an array of enrolled students /////
{
  // Array.filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[]
  //  - Returns the elements of an array that meet the condition specified in a callback function
  const result = students.filter(student => student.enrolled);
  console.log(result);
  console.log('---------------');
}

///// Quiz 7: Make an array containing only the students' scores: result should be [45, 80, 90, 66, 88] /////
{
    // Array.map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[]
    //  - Calls a defined callback function on each element of an array, and returns an array that contains the results
    //  - Returns a copy of a section of an array.
    //  - Do not change the original array
    const result = students.map(student => student.score);
    console.log(result);
    console.log('---------------');
}

///// Quiz 8: Check if there is a student with the score lower than 50 /////
{
    // Array.some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean
    //  - Determines whether the specified callback function returns true for any element of an array.
    const result = students.some(student => student.score < 50);
    console.log(result);

    // Array.every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean
    //  - Determines whether all the members of an array satisfy the specified test.
    const result2 = !students.every(student => student.score >= 50);
    console.log(result2);
    console.log('---------------');
}

///// Quiz 9: Compute students' average score /////
{
    // Array.reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    // Array.reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    //  - Calls the specified callback function for all the elements in an array. 
    //  - The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
    const result = students.reduce((prev, curr) => {
        console.log('***********');
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    }, 0);
    console.log(result / students.length);

    // Array.reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    // Array.reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;    
    //  - Calls the specified callback function for all the elements in an array, in descending order. 
    //  - The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
    const result2 = students.reduceRight((prev, curr) => {
        console.log('***********');
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    }, 0);
    console.log(result2 / students.length);
    console.log('---------------');
}

///// Quiz 10: Make a string containing all the scores: result should be '45, 80, 90, 66, 88' /////
{
    const result = students
        .map(student => student.score)
        .join();
    console.log(result);
    console.log('---------------');
}

///// Quiz 11: Make a string containing all the scores in ascending order: result should be '45, 66, 80, 88, 90' /////
{
    // Array.sort(compareFn?: (a: T, b: T) => number): this
    //  - Sorts an array in place.
    //  - This method mutates the array and returns a reference to the same array.
    //  - compareFn Function used to determine the order of the elements. 
    //  - It is expected to return a negative value if first argument is less than second argument, zero 
    //  - if they're equal and a positive value otherwise. 
    //  - If omitted, the elements are sorted in ascending, ASCII character order.
    const result = students
        .map(student => student.score)
        .sort((a, b) => a - b)  // Ascending
        // .sort((a, b) => b - a)  // Descending
        .join();
    console.log(result);
    console.log('---------------');
}