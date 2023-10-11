//PROMISE = ALGO QUE VA PASAR TODAY, TOMORROW OR NEVER
const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("Hey!");
    } else {
      reject("Dah...");
    }
  });
};

anotherFunction()
  .then((response) => console.log(response))
  .catch((err) => console.log(err))
  .finally(() => console.log("Finally"));
