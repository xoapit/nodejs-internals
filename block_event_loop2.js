const end = Date.now() + 10000;
setTimeout(() => {
  console.log("Run after 2 second");
}, 2000);
while (Date.now() < end) {
  console.log("waiting");
}
