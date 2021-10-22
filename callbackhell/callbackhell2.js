function firstAsyncCall() {
  return new Promise((resolve, reject) => {
    const res = 2;
    console.log("firstAsyncCall", res);
    resolve(res);
  });
}

function secondAsyncCallUsing(input) {
  return new Promise((resolve, reject) => {
    const result = input + 1;
    console.log("secondAsyncCallUsing", result);
    resolve(result);
  });
}

function thirdAsyncCallUsing(input) {
  return new Promise((resolve, reject) => {
    const result = input + 2;
    console.log("thirdAsyncCallUsing", result);
    resolve(result);
  });
}

function doSomethingWith(input) {
  console.log("doSomethingWith Input=", input);
}

var foo = async function () {
  var resultA = await firstAsyncCall();
  var resultB = await secondAsyncCallUsing(resultA);
  var resultC = await thirdAsyncCallUsing(resultB);
  return doSomethingWith(resultC);
};

foo();
