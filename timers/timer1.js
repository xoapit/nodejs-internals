console.log("Start");

const NS_PER_SEC = 1e9;
const start = process.hrtime();

setTimeout(() => {
  const diff = process.hrtime(start);

  console.log(
    `Timeout callback executed after ${diff[0] * NS_PER_SEC + diff[1]} ns`
  );
}, 2000);

console.log("End");










