// enahced objecy literals

function newUser(user, age, country, uId) {
  return {
    user,
    age,
    country,
    uId,
  };
}

console.log(newUser("Santiago", 21, "CO", 1));
