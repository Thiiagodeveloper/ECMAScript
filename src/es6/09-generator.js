function* iterate(arr) {
  for (let value of arr) {
    yield value;
  }
}

const it = iterate(["Santiago", "Juan", "pepe", "david"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
