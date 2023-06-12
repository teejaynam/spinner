const spinChars = ['|','/','-','\\'];
let timer = 100;
let index = 0;

function printSpinner() {
  process.stdout.write('\r' + spinChars[index] + ' ');
  index = (index + 1) % spinChars.length;
}

function spinner() {
  printSpinner();

  if (timer < 1700) {
    timer += 200;
    setTimeout(spinner, timer);
  } else {
    setTimeout(() => {
      console.log('\n');
    }, 1)
  }
}

spinner();