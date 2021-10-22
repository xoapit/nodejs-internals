let obj = { a: 1 };
let niter = 24;

let before, str, pos, res, took;

for (let i = 0; i < niter; i++) {
  obj = { obj1: obj, obj2: obj }; // Doubles in size each iter
}

const NS_PER_SEC = 1e9;

before = process.hrtime();
str = JSON.stringify(obj);
took = process.hrtime(before);
console.log("JSON.stringify took " + took);

before = process.hrtime();
pos = str.indexOf("nomatch");
took = process.hrtime(before);
console.log("Pure index of took " + took);

before = process.hrtime();
res = JSON.parse(str);
took = process.hrtime(before);
console.log("JSON.parse took " + took);
