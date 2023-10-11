function* getId() {
  for (var i = 1; i > 0; i++) {
    yield i;
  }
}

const id = getId(1, 2, 3, 4, 5, 6, 7);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
