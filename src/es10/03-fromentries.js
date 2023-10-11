//Pasar todo a un array
const entries = new Map([
  ["name", "oscasr"],
  ["age", 34],
]);
console.log(entries);
console.log(Object.fromEntries(entries));
