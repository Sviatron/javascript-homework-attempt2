let lineA = "My name is Sviat";
let lineB = "Yap yap yap";
if (lineA.length + lineB.length >= 0) {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}

const numA = 6;
const numB = 7;
if (numA + numB > 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}

const blackListedWord = "JavaScript";
let randomLine = "I love JavaScript <3";
if (randomLine.includes(blackListedWord)) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}

const numeristo = 16;
if (numeristo >= 10 && numeristo <= 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}

const email = "sviashe@gmail.com";
const userName = "Sviatron";
const password = "123456789";
if (userName.length >= 3 && email.includes("@" && ".") && password >= 6) {
  console.log("Перенаправлення на іншу сторінку");
} else {
  console.log("Помилка: неправильне заповнення");
}
