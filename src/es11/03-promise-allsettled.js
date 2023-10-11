const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((reject, resolve) => resolve("Resolve"));
const promise3 = new Promise((reject, resolve) => resolve("Resolve 2"));

Promise.allSettled([promise1, promise2, promise3]).then((Response) =>
  console.log(Response)
);
