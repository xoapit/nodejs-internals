const regex = /[a-z]+@[a-z]+([a-z\.]+\.)+[a-z]+/;

const isValidEmail = regex.test("email@test..................................");
console.log(isValidEmail);
