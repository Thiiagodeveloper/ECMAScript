//Promise
const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Async!!"), 10000)
      : reject(new Error("Error!"));
  });
};

//async
const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log("Hello");
};

console.log("before");
anotherFn();
console.log("After");
