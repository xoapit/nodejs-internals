const regex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// Refer to https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

const isValidEmail = regex.test("email@test..................................");
console.log(isValidEmail);

