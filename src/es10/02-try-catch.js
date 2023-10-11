try {
  hello();
} catch (error) {
  console.log(error);
}

try {
  anotherfn();
} catch {
  console.log("Esto es un error");
}
