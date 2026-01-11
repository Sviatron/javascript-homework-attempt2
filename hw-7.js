const arrayA = [1, 2, 3];
arrayA[1] = 10;
console.log(arrayA);

const arrayB = ["bombo", "sviatik", "Sviatron"];
arrayB[3] = "SUHARIK_SVIAT";
console.log(arrayB);

const arrayC = [6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < arrayC.length; i++) {
  sum += arrayC[i];
}
console.log(sum);

const arrayDih = [1, 2, 3, 4, 5];
for (const num of arrayDih) {
  console.log(num);
}

const arrayE = ["Sviat", "Absolutely", "Loves", "Warriors", "Cats"];
for (const element of arrayE) {
  if (element.length <= 4) {
    continue;
  }
  for (const i of element) {
    console.log(i);
  }
}

const arrayFih = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let biggestNumber = arrayFih[0];
for (const fih of arrayFih) {
  if (biggestNumber < fih) {
    biggestNumber = fih;
  }
}
console.log(biggestNumber);

const arrayGherkin = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const gherkin of arrayGherkin) {
  if (gherkin % 2 === 0) {
    console.log(gherkin);
  }
}
