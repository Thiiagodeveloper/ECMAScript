let numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.includes(4));

const list = ["santiago", "ana", "pepe"];
console.log(list.includes("Santiago"));

let familyEmoji = [..."👨‍👩‍👦‍👦"];
console.log(
  familyEmoji.includes("👨"),
  familyEmoji.includes("👩"),
  familyEmoji.includes("👦")
);
