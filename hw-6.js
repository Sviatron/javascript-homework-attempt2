let counter = 0;
while (counter <= 9) {
  counter += 1;
  console.log(counter);
}

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
  if (i % 2 !== 0) {
    continue;
  }
}

for (let i = 1; i <= 10; i += 1) {
  console.log(`7*${i}=${7 * i}`);
}

let n = 5;
let i = 0;
while (i < n) {
  i += 1;
  console.log(i);
  if (i > n) {
    break;
  }
}

for (k = 1; k <= 20; k += 1) {
  if (k % 3 === 0) {
    continue;
  }
  console.log(k);
}
