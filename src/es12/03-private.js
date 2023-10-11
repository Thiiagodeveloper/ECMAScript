class user {
  //constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //Methods
  #speak() {
    console.log("Hello");
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get #uAge() {
    return this.age;
  }
  set #uAge(n) {
    this.age = n;
  }
}

const baby = new user("Santiago", 15);
console.log(baby.uAge);
console.log((baby.uAge = 20));
