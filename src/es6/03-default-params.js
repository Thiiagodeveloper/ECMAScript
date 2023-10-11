function newUser(name, age, country) {
  var name = name || "Santiago";
  var age = age || 21;
  var country = country || "COL";
  console.log(name, age, country);
}

newUser();
newUser("Juan", 23, "Mexico");

function newAdmin(name = "Santiago", age = 21, country = "CO") {
  console.log(name, age, country);
}

newAdmin();
newAdmin("pepe", 20, "Canada");
