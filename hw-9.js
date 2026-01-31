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

function formatString(string) {
  
}
console.log(formatString("Hi I have Hippopotomonstrosesquipedaliophobia"));
