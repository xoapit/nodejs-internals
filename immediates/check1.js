console.log("Start");

setTimeout(() => {
  console.log(`Timeout callback executed`);
}, 0);

setImmediate(() => {
  console.log(`Immediate callback executed`);
}, 0);

console.log("End");
