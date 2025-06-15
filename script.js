// Part 1: Declare a simple function

function greet(name) {
  return console.log(`Hello ${name}`);
}

greet("Moteen"); // Hello Moteen
greet("Luna"); // Hello Luna

// Part 2: Working with parameters and returning values

function addNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addNumbers(5, 10));

// get the sum with multiple parameters
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}
console.log(sum(5, 6, 7, 10));

// Part 3: Function Scope

let x = 5; // global variable

function changeValue() {
  let x = 10; // local variable
  console.log(x); // prints 10
}

console.log(changeValue()); // prints undefined
console.log(x); // prints 5

// Part 4 Closures

function outerFunction() {
  let count = 0;
  return {
    incremental() {
      count++;
      return count;
    },

    decremental() {
      count--;
      return count;
    },
  };
}
let newCounter = outerFunction();
console.log(newCounter.incremental());
console.log(newCounter.incremental());

// see bonus part 1 challenge in the html file.

// Bonus challenge part 2

function outerPerson(age, name) {
  let person = {
    age: age,
    name: name,
  };
  function displayObject() {
    return person;
  }
  return displayObject();
}

console.log(outerPerson(30, "Moteen"));
