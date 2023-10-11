//arrays destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, fruits[1]);

//obcjet destructuring
let user = { username: "Santiago", age: 34 };
let { username, age } = user;
console.log(username, user.age);

//spread operator
let person = { name: "santiago", age: 21 };
let country = "CO";

let data = { ...person, country };
console.log(data);

//rest
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 1, 2, 3);
sum(1, 1, 2, 3);

//QUIz
function solution(
  json1 = {
    name: "Mr. Michi",
    food: "Pescado",
  },
  json2 = {
    age: 12,
    color: "Blanco",
  }
) {
  let data = { ...json1, ...json2 };
  console.log(data);
  return data;
}

solution({
  name: "Mr. Michi",
  food: "Pescado",
});
