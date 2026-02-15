// const bankAccount = {
//   ownerName: "Sviat",
//   accountNumber: 69420,
//   balance: 100,
//   deposit: function () {
//     let promptB = Number(prompt("How much would you like to deposit?"));
//     this.balance += promptB;
//   },
//   withdraw: function () {
//     let promptC = Number(prompt("How much would you like to withdraw?"));
//     Number(prompt("How much would you like to withdraw?"));
//     this.balance -= promptC;
//   },
// };
// bankAccount.deposit();
// bankAccount.withdraw();
// console.log(bankAccount);

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

const emailInput = prompt("Enter email");
const passwordInput = prompt("Enter password");
const user = {
  name: "Sviat",
  email: "svt",
  password: "123",
  login: function (email, pass) {
    if (this.email === email && this.password === pass) {
      return "Password and email correct. Welcome, Sviat";
    } else {
      return "Something wrong. Please try again";
    }
  },
};
console.log(user);
console.log(user.login(emailInput, passwordInput));

// const movie = {
//   title: "Big Hero 6",
//   directors: "Don Hall, Chris Williams",
//   year: 2014,
//   rating: 7.8,
//   ratingCheck: function () {
//     if (this.rating > 8) {
//       return true;
//     } else {
//       return false;
//     }
//   },
// };
// movie.ratingCheck();
// console.log(movie);
// console.log(movie.ratingCheck());
