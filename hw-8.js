const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";
for (const friend of friends) {
  string += `${friend}, `;
}
console.log(string);
console.log(friends.join(", "));

const cards = ["Card-1", "Card-2", "Card-3", "Card-4", "Card-5"];
cards.splice(2, 1);
console.log(cards);

cards.splice(6, 0, "Card-6");
console.log(cards);

cards.splice(2, 1, "Card-444");
console.log(cards);
