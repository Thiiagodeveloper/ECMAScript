const regex = /\b(Apple)+\b/g;

const fruit = "Apple Bananana, apple, orange etc etc ";

for (const match of fruit.matchAll(regex)) {
  console.log(match);
}
