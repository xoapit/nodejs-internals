let flag = false;
setTimeout(() => {
  flag = true;
}, 1000);

while (!flag) {
  console.log("still waiting");
}
console.log("end");
