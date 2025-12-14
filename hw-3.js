let result = 5 + 5 + "5";
console.log(result);
console.log(typeof result);

const email = "sviashe@gmail.com";
const blacklist = "@";
console.log(email.includes(blacklist));
console.log(email.length);

const my = "My";
const name = "Name";
const is = "Is";
const fullName = `${my} ${name} ${is} Viktor`;
console.log(fullName);

let userName = "sviatik";
let payment = "50 euros";
let notification = alert(
  `Thank you, ${userName}. Your payment of ${payment} has been transferred.`
);
console.log(notification);
