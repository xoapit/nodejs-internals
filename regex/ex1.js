const regex = /[a-z]+@[a-z]+([a-z\.]+\.)+[a-z]+/;

const isValidEmail = regex.test("name@datahouse.com");
console.log(isValidEmail);
