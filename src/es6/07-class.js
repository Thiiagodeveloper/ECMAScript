//Declarando
class User {}

//instancia de una clase
// const newUser = new User();

class user {
  //Method
  greeting() {
    return "Hello !";
  }
}

const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

class user {
  //contructor
  constructor() {
    console.log("Nuevo Usuario");
  }
  greeting() {
    return "Hello !";
  }
}
const david = new user();

//this
class user {
  constructor(name) {
    this.name = name;
  }
  //methods
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const ana = new user("Ana");
console.log(ana.greeting());

//Getter and Setters
class user {
  //constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //Methods
  speak() {
    console.log("Hello");
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const baby = new user("Santiago", 15);
console.log(baby.uAge);
console.log((baby.uAge = 20));
