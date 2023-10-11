//QUIZ
function solution(
  json1 = {
    name: "Mr. Michi",
    food: "Pescado",
  },
  json2 = {
    age: 12,
    color: "Blanco",
  }
) {
  let data = { ...json1, ...json2 };
  console.log(data);
  return data;
}

solution({
  name: "Mr. Michi",
  food: "Pescado",
});
