var lastName = "Santiago";
lastName = "Juan";
console.log(lastName);

let fruit = "Apple";
fruit = "Kiwi";
console.log(fruit);

const animal = "dog";
animal = cat;
console.log(animal);

const fruits = () => {
  if (true) {
    var fruit1 = "Apple"; // functon scope
    let fruit2 = "Kiwi"; //block scope
    const fruit3 = "Banana"; //block scope
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
};

fruits();

var createHelloWorld = function () {
  return function (...args) {
    if (args) {
      return "Hello World";
    } else {
      return "Hello World";
    }
  };
};

const f = createHelloWorld();
f();
console.log(f());
[{}, null, 42];

/////////////

var createCounter = function (n) {
  return function (arr) {
    for (let i = 0; i > arr.length; i++) {
      const result = n + i;
      console.log(result);
    }
    console.log(n);
    console.log(arr.length);
  };
};

const abc = createCounter(10)(["call", "call", "call"]);
abc();

const counter = createCounter(10)(["call", "call", "call"]);
counter(); // 10
counter(); // 11
counter(); // 12

console.log(counter());

const array = ["call", "call", "call"];

for (let i = 0; i < array.length; i++) {
  const element = 10 + i;
  console.log(element);
}

var createCounterr = function(n) {
  return ()=> n++
};


const counterr = createCounterr(10);
console.log(counterr()); // 10
console.log(counterr()); // 10
console.log(counterr()); // 10

