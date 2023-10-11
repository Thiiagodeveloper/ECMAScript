const user = { username: "santiago", age: 21, country: "CO" };
const { username, ...values } = user;
console.log(username);
console.log(values);
