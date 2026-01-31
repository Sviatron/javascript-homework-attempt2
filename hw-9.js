const friends = ["Mango", "Ploy", "Ajax", "Olexander"];
let numerationOfFriends = [];
function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    numerationOfFriends.push(`${i + 1} - ${array[i]}`);
  }
  return numerationOfFriends;
}
console.log(logItems(friends));

function calculateEngravingPrice(message, pricePerWord) {
  const wordArr = message.split(" ");
  const finalPrice = wordArr.length * pricePerWord;
  return `For you phrase "${message}", it will cost you ${finalPrice}`;
}
console.log(calculateEngravingPrice("I am a surgeon", 5));

function findLongestWord(string) {
  let longestWord = "";
  const newArr = string.split(" ");
  for (const element of newArr) {
    if (element.length >= longestWord.length) {
      longestWord = element;
    }
  }
  return longestWord;
}
console.log(findLongestWord("Hi I have Hippopotomonstrosesquipedaliophobia"));

// function formatString(string) {
//   if (string.length >= 40) {
//     string.split(" ");
//     string.splice(39, Infinity), string.splice(39, 0, "...");
//   }
// }
// console.log(formatString("Hi I have Hippopotomonstrosesquipedaliophobia"));

function checkForSpam(message) {
  if (message.includes("spam " || "sale")) {
    return !message.includes("spam " || "sale");
  } else {
    return message.includes("spam " || "sale");
  }
}
console.log(checkForSpam("Hello this isn't or "));

// let input;
// const numbers = [];
// let total = 0;
// function calculation() {
//   let prompt
// }

const logins = [
  "sviat@gmail.com",
  "sviashe@gmail.com",
  "admin@gmail.com",
  "testemail.@gmail.com",
];

function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  if (!isLoginValid(login)) {
    return "Email not valid - doens't contain 4-16 symbols";
  }
  if (!isLoginUnique(allLogins, login)) {
    return "Login not unique";
  }
  allLogins.push(login);
  return "Login added to database";
}

console.log(addLogin(logins, "new@mail.com"));
console.log(addLogin(logins, "test@gmail.com"));
console.log(addLogin(logins, "bad"));
