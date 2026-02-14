const bankAccount = {
  ownerName: "Sviat",
  accountNumber: 69420,
  balance: 100,
  deposit: function () {
    let promptB = Number(prompt("How much would you like to deposit?"));
    this.balance += promptB;
  },
  withdraw: function () {
    let promptC = Number(prompt("How much would you like to withdraw?"));
    Number(prompt("How much would you like to withdraw?"));
    this.balance -= promptC;
  },
};
bankAccount.deposit();
bankAccount.withdraw();
console.log(bankAccount);

// const weather = {
//   temperature: Number(prompt("What teperature is outside?")),
//   windSpeed: 6,
//   humidity: 10,
//   check: function () {
//     if (this.temperature > 0) {
//       return "Temperature is bigger than 0'C";
//     } else if (this.temperature < 0) {
//       return "Temperature is less than 0'C";
//     }
//   },
// };
// weather.temperature;
// console.log(weather.temperature);
// console.log(weather.check());
