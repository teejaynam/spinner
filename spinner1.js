let timer = 100;

while (timer < 1900) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, timer);
  timer += 200;
  if (timer === 1900) {
    break;
  }
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, timer);
  timer += 200;
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, timer);
  timer += 200;
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   ');
  }, timer);
  timer += 200;
}

setTimeout(() => {
  console.log("\n");
}, 1901);